import React from 'react'
import { useClaimMeta } from '../../ClaimMetaContext'
import { Dialog, Grid, Button, DialogActions, DialogContent, DialogTitle } from '@material-ui/core'
import { Formik, Form } from 'formik'
import DateField from 'components/Formik/DateField'
import { gql } from '@apollo/client'
import { useAppointmentMadeMutation } from 'generated/graphql'
import { useSnackbar } from 'notistack'
gql`
  mutation AppointmentMade($id: ID!, $input: AppointmentInput!) {
    claimMakeAppointment(
      where: { id: $id }
      input: $input
    ) {
      success
      messages
    }
  }
`

export default ({ claim }: any) => {
  const claimMeta = useClaimMeta()
  const userType = claimMeta?.me?.userType
  const isBuilder = React.useMemo(() => userType === 'Builder', [userType])
  const isRestorer = React.useMemo(() => userType === 'Restorer', [userType])

  const isDisplayApointmentMade =
    (
      isBuilder
      && claim?.claimJob?.building?.progress?.initialCallMade
      && !claim.claimJob.building.progress.appointmentBooked
    )
    ||
    (
      isRestorer
      && claim?.claimJob?.restoration?.progress?.initialCallMade
      && !claim.claimJob.restoration?.progress.appointmentBooked
    )

  const [isOpen, setIsOpen] = React.useState(false)
  const handleAppointmentMade = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)
  const [handleMadeAppointment] = useAppointmentMadeMutation()
  const { enqueueSnackbar } = useSnackbar()
  const ApointmentMadeDialog = () => (
    <Dialog open={isOpen} onClose={handleClose} PaperProps={{ style: { minWidth: '40%', maxWidth: '65%' } }}>
      <Formik
        initialValues={{
          appointmentDate: new Date()
        }}
        onSubmit={async values => {
          if(claimMeta?.claim?.id) {
            const res = await handleMadeAppointment({
              variables: {
                id: claimMeta.claim.id,
                input: values
              }
            })
            res?.data?.claimMakeAppointment?.messages.forEach(message => enqueueSnackbar(message))

            if (res?.data?.claimMakeAppointment?.success) {
              claimMeta.claimDetailsRefetch()
            }
          }
          else {
            console.log('claim meta error')
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <DialogTitle>
              Appointment Made
            </DialogTitle>
            <DialogContent>
              <Grid container>
                <Grid item xs={12}>
                  <DateField
                    name='appointmentDate'
                    label='Appointment Date'
                    variant='outlined'
                    fullWidth
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} disabled={isSubmitting}>
                Cancel
              </Button>
              <Button type='submit' color='primary' disabled={isSubmitting}>
                Make appointment
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  )

  return {
    isDisplayApointmentMade,
    handleAppointmentMade,
    ApointmentMadeDialog
  }
}