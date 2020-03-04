import React from 'react'
import { useClaimMeta } from '../../ClaimMetaContext'
import QuickAction from 'components/QuickActionGroup/QuickAction'
import { Form, Formik } from 'formik'
import { Grid, Button } from '@material-ui/core'
import SelectField from 'components/Formik/SelectField'
import TextAreaField from 'components/Formik/TextAreaField'
import SwitchField from 'components/Formik/SwitchField'
import { useSnackbar } from 'notistack'

import { gql } from '@apollo/client'
import { useAddJobNoteMutation, PortfolioType } from 'generated/graphql'
gql`
  mutation AddJobNote($input: ClaimNoteCreate!) {
    createClaimNote(input: $input) {
      success
      messages
    }
  }
`

export default ({ open, handleClose }: any) => {
  const claimMeta = useClaimMeta()
  const [addJobNote] = useAddJobNoteMutation()
  const { enqueueSnackbar } = useSnackbar()

  const portfolios = claimMeta?.claim?._portfolios?.map(portfolio => ({
    label: portfolio, value: portfolio,
  }))

  return (
    <QuickAction
      open={open} handleClose={handleClose}
      title='Job Note'
      content={(
        <Formik
          initialValues={{
            portfolioType: '',
            message: '',
            private: false,
          }}
          onSubmit={async ({ portfolioType, private: privacy, ...values }) => {
            const portfolio = portfolioType as PortfolioType

            const res = await addJobNote({
              variables: {
                input: {
                  ...values,
                  claimId: String(claimMeta?.claim?.claimId || 0),
                  portfolioType: portfolio,
                  private: privacy ? 1 : 0
                }
              }
            })
            enqueueSnackbar(res.data?.createClaimNote?.messages[0])

            if (res.data?.createClaimNote?.success) {
              claimMeta?.claimDetailsRefetch && claimMeta.claimDetailsRefetch()
              handleClose()
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Grid container spacing={2}>
                {[
                  {
                    component: SelectField,
                    label: 'Portfolio type',
                    name: 'portfolioType',
                    required: true,
                    options: portfolios
                  },
                  {
                    component: TextAreaField,
                    label: 'Claim notes',
                    name: 'message',
                    required: true,
                    rows: 5, rowsMax: 10
                  },
                  {
                    xs: 7,
                    component: SwitchField,
                    label: 'Privacy',
                    name: 'private',
                    onLabel: 'Private',
                    offLabel: 'Public',
                  }
                ].map(({ component: Comp, xs = 12, ...props }: any) => (
                  <Grid item xs={xs} key={props.name}>
                    <Comp {...props} variant='outlined' fullWidth />
                  </Grid>
                ))}
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