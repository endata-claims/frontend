
import { setContext } from '@apollo/link-context'

export const withToken = setContext(() => {
  const token = localStorage.ACCESS_TOKEN
  if(token) return {
    headers: {
      authorization: `Bearer ${token}`
    }
  }
})