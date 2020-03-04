import { HttpLink } from '@apollo/client'
import { API_ENDPOINT } from 'configs'

export default new HttpLink({
  uri: API_ENDPOINT,
  credentials: 'include'
})