import { RetryLink } from '@apollo/link-retry'
import { API_ENDPOINT } from 'configs'

export default new RetryLink({
  attempts: {
    retryIf: async (error, operation) => {
      if(isTokenExpiredError(error)) {
        const refreshToken = localStorage.REFRESH_TOKEN
        if(!refreshToken || !API_ENDPOINT) {
          kickUserToLogin()
          return false
        }

        const res = await fetchNewAccessToken(API_ENDPOINT, refreshToken)
          .catch(error => console.log(error))
        if(!res) {
          kickUserToLogin()
          return false
        }

        const { accessToken, refreshToken: newRefreshToken } = res
        localStorage.setItem('ACCESS_TOKEN', accessToken)
        localStorage.setItem('REFRESH_TOKEN', newRefreshToken)
        operation.setContext({
          ...operation.getContext().headers,
          authorization: `Bearer ${accessToken}`
        })

        return true
      }

      return false
    }
  }
})

const kickUserToLogin = () => {
  window.location.href = localStorage.REDIRECT_URL || '/user/signin'
}

const isTokenExpiredError = (error: any) => {
  return error && error.name ==='ServerError' && 'statusCode' in error && error.statusCode === 401
}

const fetchNewAccessToken = (uri: string, rfToken: string) => fetch(uri, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${rfToken}`
  },
  body: JSON.stringify({
    query: `
      mutation {
        refresh: userRenewToken {
          accessToken
          refreshToken
        }
      }
    `,
  }),
})
  .then(data => data.json())
  .then(({ data: { refresh: { accessToken, refreshToken } } }) => {
    return { accessToken, refreshToken }
  })