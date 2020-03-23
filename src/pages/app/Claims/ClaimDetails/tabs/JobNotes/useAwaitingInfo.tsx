import React from 'react'
import { ClaimDetailsQuery } from 'generated/graphql'
import { Dialog, DialogContent, DialogActions, Button, DialogTitle, Grid, Typography, CircularProgress } from '@material-ui/core'
import { useClaimMeta } from '../../ClaimMetaContext'
import PortfolioIcon from 'components/PortfolioIcon'
import { gql } from '@apollo/client'
import { useCancelAwaitingInfoMutation, useAddAwaitingInfoMutation, useAwaitingInfoFormQuery } from 'generated/graphql'
import { useSnackbar } from 'notistack'
import { Formik, Form } from 'formik'
import TextField from 'components/Formik/TextField'
import SelectField, { SelectOption } from 'components/Formik/SelectField'

export default ({ claim }: { claim?: ClaimDetailsQuery }) => {
  const claimMeta = useClaimMeta()
  const awaitingInfoAction = claim?.claimJob?.actions.find((action: any) => action?.actionType === 'CLAIM_AWAITING_INFO')
  const isDisplayAwaitingInfo = awaitingInfoAction?.isDisplay ?? false
  const isDisabledAwaitingInfo = awaitingInfoAction?.isDisabled ?? false

  const [isOpen, setIsOpen] = React.useState(false)
  const handleAwaitingInfo = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  const portfolios = claimMeta?.me?.userType === 'Administrator'
    ? claimMeta?.claim?._portfolios
    : claimMeta?.claim?._portfolios?.filter(portfolio => {
      if (portfolio === 'Building' && claimMeta?.me?.userType === 'Builder') return true
      if (portfolio === 'Restoration' && claimMeta?.me?.userType === 'Restorer') return true
      if (portfolio === 'Contents' && claimMeta?.me?.userType === 'ContentSupplier') return true
    })

  const AwaitingInfoDialog = () => (
    <Dialog open={isOpen} onClose={handleClose} PaperProps={{ style: { minWidth: '40%', maxWidth: '65%' } }}>
      <DialogTitle>
        Awaiting Info
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          {portfolios?.map(portfolio => {
            // @ts-ignore
            const status = claim?.claimJob ? claim?.claimJob[portfolio.toLowerCase()].claimStatus.statusId : -1
            return (
              <Grid item xs key={portfolio}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
                  <PortfolioIcon portfolio={portfolio} style={{ fontSize: '2rem' }} />
                </div>
                <AwaitingInfo
                  claimId={claim?.claimJob?.id}
                  portfolio={portfolio}
                  status={status}
                  handleClose={handleClose}
                  handleRefresh={claimMeta?.claimDetailsRefetch}
                />
              </Grid>
            )
          })}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )

  return {
    isDisplayAwaitingInfo,
    isDisabledAwaitingInfo,
    handleAwaitingInfo,
    AwaitingInfoDialog
  }
}

gql`
  mutation CancelAwaitingInfo($where: ENDataPortfolioKey!) {
    claimCancelAwaitingInfo(where: $where) {
      success
      messages
    }
  }
  mutation AddAwaitingInfo($input: AwaitingInfoClaimInputType!, $where: ENDataPortfolioKey!) {
    claimAwaitingInfo(input: $input, where: $where) {
      success
      messages
    }
  }
  query AwaitingInfoForm($portfolios: [PortfolioType]) {
    claimFilterOptions(where: {
      subject: "awaitingInfoReasons"
      portfolios: $portfolios
    }) {
      label: name
      value
    }
  }
`
const AwaitingInfo = ({ claimId, portfolio, status, handleClose, handleRefresh }: any) => {
  const { enqueueSnackbar } = useSnackbar()
  const [cancelAwaitingInfo] = useCancelAwaitingInfoMutation()

  if (status === 11) return (
    <Typography variant='body1' style={{ textAlign: 'center' }}>
      Claim finalised
    </Typography>
  )

  const handleCancelAwaitingInfo = async () => {
    const res = await cancelAwaitingInfo({ variables: { where: {
      id: claimId,
      portfolioType: portfolio
    }}})
    res.data?.claimCancelAwaitingInfo?.messages.forEach(message => enqueueSnackbar(message))
    if (res.data?.claimCancelAwaitingInfo?.success) {
      handleClose()
      handleRefresh()
    }
  }
  if (status === 33 || (status === 102 && portfolio === 'Contents')) return (
    <Button variant='outlined' color='primary' onClick={handleCancelAwaitingInfo}>
      Cancel Awaiting Info
    </Button>
  )

  return (
    <AwaitingInfoForm
      claimId={claimId}
      portfolio={portfolio}
      handleClose={handleClose}
      handleRefresh={handleRefresh}
    />
  )
}

const AwaitingInfoForm = ({ claimId, portfolio, handleClose, handleRefresh }: any) => {
  const { enqueueSnackbar } = useSnackbar()
  const { data, loading } = useAwaitingInfoFormQuery({ variables: {
    portfolios: [portfolio]
  }})
  const [addAwaitingInfo] = useAddAwaitingInfoMutation()

  if(loading || !data) return <CircularProgress />
  // console.log({ claimId, portfolio })

  const options = data.claimFilterOptions as SelectOption[]

  return (
    <Formik
      initialValues={{
        awaitingInfoReasonId: '',
        note: ''
      }}
      onSubmit={async values => {
        const res = await addAwaitingInfo({ variables: {
          where: {
            id: claimId,
            portfolioType: portfolio
          },
          input: values
        }})
        res.data?.claimAwaitingInfo?.messages.forEach(message => enqueueSnackbar(message))

        if (res.data?.claimAwaitingInfo?.success) {
          handleClose()
          handleRefresh()
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SelectField
                label='Reason' name='awaitingInfoReasonId'
                required
                options={options}
                variant='outlined' fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField label='Additional Notes' name='note' variant='outlined' fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Button variant='contained' color='primary' fullWidth type='submit' disabled={isSubmitting}>
                Wait for info
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}