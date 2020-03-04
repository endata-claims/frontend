import { ApolloClient, from, InMemoryCache } from '@apollo/client'

import linkHttp from './links/linkHttp'
import { withToken } from './links/linkAuth'
import linkRefreshToken from './links/linkRefreshToken'

import typeDefs from './localState/localSchema'
import resolvers from './localState/localResolvers'

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    linkRefreshToken,
    withToken,
    linkHttp,
  ]),
  typeDefs,
  resolvers
})