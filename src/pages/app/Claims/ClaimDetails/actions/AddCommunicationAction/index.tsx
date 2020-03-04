import React from 'react'
import { useClaimMeta } from '../../ClaimMetaContext'
import { useSnackbar } from 'notistack'
import QuickAction from 'components/QuickActionGroup/QuickAction'
import { Form, Formik } from 'formik'
import { Grid, Button } from '@material-ui/core'
import SelectField from 'components/Formik/SelectField'
import TextAreaField from 'components/Formik/TextAreaField'
import SwitchField from 'components/Formik/SwitchField'

import { gql } from '@apollo/client'
import { useAddCommunicationActionQuery, SupplierStatusFilter, useAddCommunicationMutation } from 'generated/graphql'
gql`
  query AddCommunicationAction($where: ClaimParticipantIndex) {
    claimParticipants(where: $where) {
      group: companyType
      label: companyName
      value: companyId
      isLossAdjuster
    }
  }
`
gql`
  mutation AddCommunication($input: ClaimCommunicationCreate!) {
    createClaimCommunication(input: $input) {
      messages
      success
    }
  }
`

export default ({ open, handleClose }: any) => {
  const { enqueueSnackbar } = useSnackbar()
  const [addCommunication] = useAddCommunicationMutation()

  const claimMeta = useClaimMeta()
  const claimDetailsRefetch = claimMeta?.claimDetailsRefetch
  const claimId = String(claimMeta?.claim?.claimId ?? 0)

  const { data } = useAddCommunicationActionQuery({ variables: { where: {
    claimId, participantStatus: SupplierStatusFilter.AcceptedOnly
  }}})
  const receiverOptions = data?.claimParticipants?.map(e => {
    if (e) return {
      ...e,
      value: `${e.group}_${e.value}`,
      group: (e.group === 'Insurance' && e.isLossAdjuster)
        ? 'Loss Adjuster' : e.group
    }
  }) as any

  return (
    <QuickAction
      open={open} handleClose={handleClose}
      title='Communication'
      content={data && (
        <Formik
          initialValues={{ receiverCompanyId: '', message: '', private: false }}
          onSubmit={async values => {
            const [receiverRole, receiverCompanyId] = values.receiverCompanyId.split('_')

            const input = {
              claimId,
              message: values.message,
              private: values.private,
              receiverCompanyId: parseInt(receiverCompanyId),
              receiverRole
            }

            // @ts-ignore
            const res = await addCommunication({ variables: { input } })
            enqueueSnackbar(res.data?.createClaimCommunication?.messages[0])

            if (res.data?.createClaimCommunication?.success) {
              claimDetailsRefetch && claimDetailsRefetch()
              handleClose()
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <SelectField
                    label='Send to'
                    name='receiverCompanyId'
                    options={receiverOptions}
                    required
                    variant='outlined'
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextAreaField
                    label='Message'
                    name='message'
                    required
                    variant='outlined'
                    fullWidth
                    rows={5} rowsMax={10}
                  />
                </Grid>
                <Grid item xs={7}>
                  <SwitchField
                    label='Privacy'
                    name='private'
                    onLabel='Private' offLabel='Public'
                  />
                </Grid>
                <Grid item xs={5} style={{ display: 'flex' }}>
                  <Button variant='contained' color='primary' type='submit' fullWidth disabled={isSubmitting}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      )}
    />
  )
}