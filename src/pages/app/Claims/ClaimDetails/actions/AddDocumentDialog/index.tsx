import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid } from '@material-ui/core'
import { Formik, Form, useFormikContext } from 'formik'
import { useClaimMeta } from '../../ClaimMetaContext'
import { useSnackbar } from 'notistack'
import SelectField from 'components/Formik/SelectField'
import FileField from 'components/Formik/FileField'
import SwitchField from 'components/Formik/SwitchField'
import TextField from 'components/Formik/TextField'

import { gql } from '@apollo/client'
import { useUploadDocumentMutation } from 'generated/graphql'
import parseFile from 'utils/parseFile'
gql`
  fragment AddDocumentClaimFragment on ClaimJob {
    claimId
    hasBuilding hasContents hasRestoration
    _portfolios @client
    insurer { isFeeModule }
  }
  fragment AddDocumentMetaFragment on AuthenticatedUser {
    userType
  }
`
gql`
  mutation UploadDocument($input: ClaimDocumentCreate!) {
    createClaimDocument(input: $input) {
      success
      messages
    }
  }
`

export default ({ open, handleClose }: any) => {
  const { enqueueSnackbar } = useSnackbar()
  const [uploadDoc] = useUploadDocumentMutation()

  const claimMeta = useClaimMeta()
  const claimId = claimMeta?.claim?.claimId ?? 0

  const portfolioOptions = claimMeta?.claim?._portfolios?.map(portfolio => ({ label: portfolio, value: portfolio }))
  const isAdmin = claimMeta?.me?.userType === 'Administrator'
  const isFeeModule = claimMeta?.claim?.insurer?.isFeeModule

  if (!portfolioOptions) return null

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ style: { minWidth: '40%', maxWidth: '65%' }}}>
      <Formik
        initialValues={{
          amountInvoice: '',
          invoiceNumber: '',
          file: '',
          portfolioType: portfolioOptions[0].value,
          isInvoice: false,
          private: false,
          description: '',
        }}
        validate={values => {
          let errors: any = {}

          if(!values.portfolioType && isAdmin) errors.portfolioType = 'Select at least 1!'

          const moneyFieldPadding = 3
          if(!isFeeModule && values.isInvoice) {
            if (values.invoiceNumber.length > 200) errors.invoiceNumber = 'Maximum character limit is 200'
            if (String(values.amountInvoice).length > (9 + moneyFieldPadding)) errors.amountInvoice = 'Maximum character limit is 9'
          }

          if (values.description.length > 200) errors.description = 'Maximum character limit is 200'

          return errors
        }}
        onSubmit={async ({ file, ...values }) => {
          let submitValues = { ...values } as any

          if (!submitValues.isInvoice) {
            delete submitValues.invoiceNumber
            delete submitValues.amountInvoice
          }

          if (!isAdmin) delete submitValues.portfolioType
          const parsedFile = await parseFile(file)
            .catch(() => null)
          if (parsedFile) {
            const { fileName, fileBase64 } = parsedFile
            submitValues = {
              ...submitValues,
              documentFileName: fileName,
              fileBase64,
              claimId
            }
          }

          const res = await uploadDoc({ variables: { input: submitValues } })
          if (res.data?.createClaimDocument?.messages[0]) {
            enqueueSnackbar(res.data?.createClaimDocument?.messages[0])
          }

          if (res.data?.createClaimDocument?.success) {
            handleClose()
          }
        }}
      >
        <DialogForm portfolioOptions={portfolioOptions} isAdmin={isAdmin} isFeeModule={isFeeModule} />
      </Formik>
    </Dialog>
  )
}

const DialogForm = ({ portfolioOptions, isAdmin, isFeeModule }: any) => {
  const { setFieldValue, isSubmitting, values } = useFormikContext()
  const formValues = values as any

  const isInvoice = formValues.isInvoice
  React.useEffect(() => {
    if (isInvoice === true) {
      setFieldValue('private', true)
    }
  }, [isInvoice, setFieldValue])

  return (
    <Form>
      <DialogTitle>
        Upload Document
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          {[
            {
              xs: 6, label: 'Claim Type', name: 'portfolioType',
              component: SelectField, options: portfolioOptions,
              required: true, show: isAdmin
            },
            {
              xs: isAdmin ? 6 : 12,
              label: 'Choose a file', name: 'file',
              component: FileField, required: true,
            },
            {
              xs: 2, label: 'Is this an invoice?', name: 'isInvoice',
              component: SwitchField,
              show: !isFeeModule,
            },
            {
              xs: 5, label: 'Amount Invoice', name: 'amountInvoice',
              component: TextField, // money input
              show: !isFeeModule,
              disabled: !formValues.isInvoice,
              required: formValues.isInvoice
            },
            {
              xs: 5, label: 'Invoice Number', name: 'invoiceNumber',
              component: TextField,
              show: !isFeeModule,
              disabled: !formValues.isInvoice,
              required: formValues.isInvoice
            },
            {
              xs: 12, label: 'File Description', name: 'description',
              component: TextField,
              multiline: true, rows: 3, rowsMax: 5, required: true,
            },
            {
              col: 2, label: 'Privacy', name: 'private',
              component: SwitchField,
              onLabel: 'Private', offLabel: 'Public',
            },
          ].map(({ xs, component: Comp, show, ...props }: any) => {
            if (show === false) return null

            return (
              <Grid item xs={xs} key={props.name}>
                {Comp && <Comp variant='outlined' fullWidth {...props} />}
              </Grid>
            )
          })}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant='contained' color='primary' type='submit' disabled={isSubmitting}>
          Submit
        </Button>
      </DialogActions>
    </Form>
  )
}