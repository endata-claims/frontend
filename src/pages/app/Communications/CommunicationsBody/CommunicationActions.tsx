import React from 'react'
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid } from '@material-ui/core'
import ReplyIcon from '@material-ui/icons/Reply'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import UncheckCircleIcon from '@material-ui/icons/RadioButtonUnchecked'
import { useSnackbar } from 'notistack'
import gql from 'graphql-tag'
import { Formik, Form } from 'formik'

import TextField from 'components/Formik/TextField'
import SwitchField from 'components/Formik/SwitchField'
// import Info from 'components/Info'

import { useCommunicationActionAcknowledgeMutation, useCommunicationActionReplyMutation } from 'generated/graphql'
gql`
  mutation CommunicationActionAcknowledge($where: ENDataPortfolioKey!) {
    claimCommunicationAcknoledge(where: $where){
      messages
      success
    }
  }
`
gql`
  mutation CommunicationActionReply($input: ClaimCommunicationCreate!) {
    createClaimCommunication(input: $input) {
      messages
      success
    }
  }
`

const CommunicationActions = (props: any) => {
  const { enqueueSnackbar } = useSnackbar()
  const [acknowledged, setAcknowledged] = React.useState(false)
  const [ackMutation] = useCommunicationActionAcknowledgeMutation()
  const handleAcknowledge = async (e: any) => {
    e.stopPropagation()
    const { communicationId, portfolioType } = props.data

    const { data } = await ackMutation({ variables: { where: {
      id: communicationId,
      portfolioType,
    }}})
    enqueueSnackbar(data?.claimCommunicationAcknoledge?.messages[0])

    if (data?.claimCommunicationAcknoledge?.success) setAcknowledged(true)
  }

  const [dialogOpen, setDialogOpen] = React.useState(false)
  const handleReplyOpen = (e: any) => {
    e.stopPropagation()
    setDialogOpen(true)
  }
  const handleReplyClose = (e: any) => {
    e && e.stopPropagation()
    setDialogOpen(false)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <IconButton onClick={handleReplyOpen}>
        <ReplyIcon />
      </IconButton>
      <ReplyDialog {...props} open={dialogOpen} handleClose={handleReplyClose} />

      <IconButton onClick={handleAcknowledge}>
        {acknowledged ? <CheckCircleIcon /> : <UncheckCircleIcon />}
      </IconButton>
    </div>
  )
}
export default CommunicationActions

const ReplyDialog = ({ open, handleClose, data }: any) => {
  const { enqueueSnackbar } = useSnackbar()
  const [reply] = useCommunicationActionReplyMutation()

  return (
    <Formik
      initialValues={{
        claimId: data.claimId,
        receiverCompanyId: data.senderCompanyId,
        receiverRole: data.senderRole,

        message: '',
        private: true,
      }}
      validate={values => {
        if(!values.message) return { message: 'Please write something' }
      }}
      onSubmit={async (values, { setSubmitting }) => {
        const { data } = await reply({ variables: { input: values }})
        setSubmitting(false)
        enqueueSnackbar(data?.createClaimCommunication?.messages[0])

        if(data?.createClaimCommunication?.success) {
          handleClose()
        }
      }}
    >
      {({ isSubmitting, handleSubmit }) => (
        <Form>
          <Dialog open={open} onClose={handleClose}
            PaperProps={{ style: { minWidth: '50%' }}}
          >
            <DialogTitle onClick={e => e.stopPropagation()}>
              Reply
            </DialogTitle>
            <DialogContent onClick={e => e.stopPropagation()}>
              <Grid container spacing={2}>
                {[
                  { xs: 4, label: 'Ins Ref#', value: data.claimRef },
                  { xs: 4, label: 'Sender', value: data.senderName },
                  { xs: 4, label: 'Company', value: data.senderCompanyName },
                  { xs: 12, label: 'Message', value: data.message },
                ].map(({ xs, ...props }: any) => (
                  <Grid item xs={xs} key={props.label}>
                    here
                    {/* <InfoField {...props} /> */}
                  </Grid>
                ))}
                <Grid item xs={12}>
                  <SwitchField label='Privacy' name='private' />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label='Message' name='message'
                    multiline rows={8} rowsMax={12}
                    variant='outlined' fullWidth
                    onScroll={e => e.stopPropagation()}
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions onClick={e => e.stopPropagation()}>
              <Button color='primary' onClick={handleClose} disabled={isSubmitting}>
                Close
              </Button>
              <Button variant='contained' color='primary' disabled={isSubmitting}
                onClick={async e => {
                  e.stopPropagation()
                  handleSubmit()
                }}
              >
                Reply
              </Button>
            </DialogActions>
          </Dialog>
        </Form>
      )}
    </Formik>
  )
}