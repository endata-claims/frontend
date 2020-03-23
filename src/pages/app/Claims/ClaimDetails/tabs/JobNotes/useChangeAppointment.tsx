import React from 'react'
import { useClaimMeta } from '../../ClaimMetaContext'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core'
import { Formik, Form } from 'formik'
import DateField from 'components/Formik/DateField'
import { gql } from '@apollo/client'
import { useChangeAppointmentMutation } from 'generated/graphql'
import { useSnackbar } from 'notistack'
gql`
  mutation ChangeAppointment($id: ID!, $input: AppointmentInput!) {
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

  const companyId = claimMeta?.user?.company?.companyId
  const scopingId =
    isBuilder ? claim?.claimJob?.building?.scopingSupplier?.companyId :
    isRestorer ? claim?.claimJob?.restoration?.scopingSupplier?.companyId :
    ''
  const isQuoting = companyId !== scopingId
  const isDisplayChangeAppointment =
    (isBuilder && !isQuoting && [1, 37].includes(claim?.claimJob?.building?.claimStatus?.statusId ?? -1))
    ||
    (isRestorer && !isQuoting && [1, 37].includes(claim?.claimJob?.restoration?.claimStatus?.statusId ?? -1))

  const [isOpen, setIsOpen] = React.useState(false)
  const handleChangeAppointment = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)
  const [changeAppointment] = useChangeAppointmentMutation()
  const { enqueueSnackbar } = useSnackbar()
  const ChangeApointmentDialog = () => (
    <Dialog open={isOpen} onClose={handleClose} PaperProps={{ style: { minWidth: '40%', maxWidth: '65%' } }}>
      <Formik
        initialValues={{
          appointmentDate: new Date()
        }}
        onSubmit={async values => {
          if (claimMeta?.claim?.id) {
            const res = await changeAppointment({
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
              Change Appointment
            </DialogTitle>
            <DialogContent>
              <DateField
                name='appointmentDate'
                label='Appointment Date'
                variant='outlined'
                fullWidth
              />
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
    isDisplayChangeAppointment,
    handleChangeAppointment,
    ChangeApointmentDialog
  }
}