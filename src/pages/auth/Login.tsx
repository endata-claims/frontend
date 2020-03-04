import React from 'react'
import { REDIRECT_URL } from 'configs'

import { useHistory } from 'react-router-dom'
import queryString from 'query-string'
import CircularProgress from '@material-ui/core/CircularProgress'
import { gql } from '@apollo/client'

import { useLoginQuery } from 'generated/graphql'
import { useSnackbar } from 'notistack'
gql`
  query Login {
    me: currentUser {
      id
      name
    }
  }
`

const Login: React.FC = () => {
  // parse query string
  const { push, location: { search }} = useHistory()
  const { refreshToken, redirectUrl } = parseQueryString(search)

  // if there are no token kick out to login
  if (!refreshToken) window.location.href = redirectUrl
  else {
    localStorage.setItem('REFRESH_TOKEN', refreshToken)
    localStorage.setItem('REDIRECT_URL', redirectUrl)
  }

  // fetch user data
  const { data, loading } = useLoginQuery({ skip: !refreshToken })
  const { enqueueSnackbar } = useSnackbar()
  if(!loading) {
    if (data?.me) {
      enqueueSnackbar(`Welcome, ${data.me.name}`)
      push('/app')
    }
  }

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress />
      {/* style={{ margin: '0 auto', display: 'block' }} */}
      {/* <div>
        <Typography variant='h5' gutterBottom>Sign in to ENData Claims</Typography>

      </div> */}
    </div>
  )
}

export default Login

const parseQueryString = (search: string) => {
  const {
    token: parsedToken,
    redirect_from: parsedRedirectUrl = REDIRECT_URL
  } = queryString.parse(search)
  const refreshToken = parsedToken as string || null
  const redirectUrl = parsedRedirectUrl as string

  return { refreshToken, redirectUrl }
}