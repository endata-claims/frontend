import React from 'react'
import { Container, Grid, Paper, Typography, Divider, Button } from '@material-ui/core'
import { Formik, Form } from 'formik'
import TextField from 'components/Formik/TextField'
import { gql } from '@apollo/client'
import { useSigninMutation } from 'generated/graphql'
import { useSnackbar } from 'notistack'
import { useHistory } from 'react-router-dom'

gql`
  mutation Signin($input: UserCredential!) {
    userAuthenticateAllServer(input: $input) {
      accessToken
      refreshToken
      user {
        userName
      }
    }
  }
`

const Signin: React.FC = () => {
  return (
    <Container maxWidth='sm' style={{ height: '100vh' }}>
      <Grid container alignItems='center' justify='center' style={{ height: '100%' }}>
        <Paper style={{ padding: 24 }}>
          <img style={{ width: 30, display: 'block', margin: '0 auto 16px auto' }} alt='ENData Claims' src='https://company-resources-edt.s3-ap-southeast-2.amazonaws.com/endata/icon.ico' />
          <Typography variant='h4' gutterBottom style={{ textAlign: 'center' }}>
            Sign in
          </Typography>
          <Typography variant='body1' gutterBottom style={{ textAlign: 'center' }}>
            Use your ENData Claim account
          </Typography>
          <Divider />
          <SigninForm />
        </Paper>
      </Grid>
    </Container>
  )
}
export default Signin

const SigninForm: React.FC = () => {
  const [signin] = useSigninMutation()
  const { enqueueSnackbar } = useSnackbar()
  const { push } = useHistory()

  return (
    <Formik
      initialValues={{ userLogin: '', password: '' }}
      onSubmit={async values => {
        const res = await signin({ variables: { input: values }})
          .catch(error => error)

        const data = res.data?.userAuthenticateAllServer && res.data.userAuthenticateAllServer[0]
        if(data) {
          enqueueSnackbar(`Welcome, ${data.user?.userName}`)
          localStorage.setItem('ACCESS_TOKEN', data.accessToken)
          localStorage.setItem('REFRESH_TOKEN', data.refreshToken)
          push('/app')
        }
        else {
          res?.graphQLErrors.forEach((error: any) => {

            if (error.message) {
              const message = error.message.replace('GraphQL.ExecutionError:', '')
              enqueueSnackbar(message)
            }
          })
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label='Username' name='userLogin' required fullWidth variant='outlined' />
            </Grid>
            <Grid item xs={12}>
              <TextField label='Password' name='password' required type='password' fullWidth variant='outlined' />
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button type='submit' disabled={isSubmitting} color='primary' variant='contained'>
                Signin
            </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}