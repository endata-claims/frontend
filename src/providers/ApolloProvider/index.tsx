import React from 'react'
import { ApolloProvider } from '@apollo/client'
import apolloClient from './client'

const Provider: React.FC = ({ children }) => (
  <ApolloProvider client={apolloClient}>
    {children}
  </ApolloProvider>
)
export default Provider