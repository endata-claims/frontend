import React from 'react'
import { Formik, Form } from 'formik'
import { useSnackbar } from 'notistack'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid } from '@material-ui/core'

import { useClaimMeta } from '../../ClaimMetaContext'
import PortfolioIcon from 'components/PortfolioIcon'
import SelectField from 'components/Formik/SelectField'

import { gql } from '@apollo/client'
import { useAddClaimTypeDialogQuery, PortfolioType, useAddClaimTypeMutation } from 'generated/graphql'
gql`
  fragment AddClaimTypeDialogClaimFragment on ClaimJob {
    claimId
    hasBuilding hasContents hasRestoration
    _portfolios @client
    insurer {
      companyId
    }
    incidentDetail {
      riskAddress {
        postcode
      }
    }
  }
`
gql`
  query AddClaimTypeDialog($buildersWhere: ClaimJobFilter, $restorersWhere: ClaimJobFilter) {
    building: claimFilterOptions(where: $buildersWhere) {
      label: name
      value
    }
    restoration: claimFilterOptions(where: $restorersWhere) {
      label: name
      value
    }
  }
`

export type AddClaimTypeDialogProps = {
  open: boolean
  handleClose: any
  data?: any
}
export default ({ open, handleClose }: AddClaimTypeDialogProps) => {
  const claimMeta = useClaimMeta()

  const insurers = [String(claimMeta?.claim?.insurer?.companyId ?? 0)]
  const postcode = claimMeta?.claim?.incidentDetail?.riskAddress?.postcode
  const whereOptions = { subject: 'suppliers', insurers, postcode }
  const { data, loading } = useAddClaimTypeDialogQuery({
    skip: !open,
    variables: {
      buildersWhere: {
        ...whereOptions,
        portfolios: [PortfolioType.Building],
      },
      restorersWhere: {
        ...whereOptions,
        portfolios: [PortfolioType.Restoration],
      }
    }
  })

  const portfolios = ['Building', 'Contents', 'Restoration'].filter((x: any) => !claimMeta?.claim?._portfolios?.includes(x))

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ style: { minWidth: '40%', maxWidth: '65%' } }}>
      <DialogTitle>
        Add claim type
      </DialogTitle>
      <DialogContent>
        {
          loading ? <>Loading...</> :
          !portfolios.length ? <>Nothing left</> :
          (
            <Grid container spacing={4}>
              {portfolios.map(portfolio => {
                const options =
                  portfolio === 'Building' ? data?.building :
                  portfolio === 'Restoration' ? data?.restoration :
                  null

                return (
                  <AddClaimTypeForm
                    key={portfolio}
                    type={portfolio}
                    options={options}
                    handleClose={handleClose}
                  />
                )
              })}
            </Grid>
          )
        }
      </DialogContent>
      <DialogActions>
        <Button color='primary' onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

gql`
  mutation AddClaimType($input: AddPortfolioInput!, $where: ENDataEntityKey!) {
    claimAddPortfolio(input: $input, where: $where) {
      success
      messages
    }
  }
`
const AddClaimTypeForm = ({ type, options, handleClose }: any) => {
  const [addType] = useAddClaimTypeMutation()
  const { enqueueSnackbar } = useSnackbar()
  const claimMeta = useClaimMeta()
  const claimId = claimMeta?.claim?.claimId ?? 0

  return (
    <Grid item xs>
      <Formik
        initialValues={{
          scopingSupplierId: '',
          portfolioType: type
        }}
        onSubmit={async values => {
          const variables = {
            where: { id: String(claimId) },
            input: {
              scopingSupplierId: values.scopingSupplierId,
              portfolioType: values.portfolioType
            }
          }

          const res = await addType({ variables })
          enqueueSnackbar(res.data?.claimAddPortfolio?.messages[0])

          if (res.data?.claimAddPortfolio?.success) {
            claimMeta?.claimDetailsRefetch && claimMeta.claimDetailsRefetch()
            handleClose()
          }
        }}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <PortfolioIcon portfolio={type} style={{ fontSize: '2.5rem' }} />
            </Grid>
            {type !== 'Contents' && (
              <Grid item xs={12}>
                <SelectField
                  label={type} name='scopingSupplierId' options={options}
                  variant='outlined' fullWidth required
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <Button variant='contained' color='primary' type='submit' fullWidth>
                Add type
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Grid>
  )
}