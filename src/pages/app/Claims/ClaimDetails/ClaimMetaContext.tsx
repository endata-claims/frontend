import React from 'react'
import { useParams } from 'react-router-dom'
import { gql } from '@apollo/client'
import { useClaimMetaContextQuery, ClaimMetaContextQuery } from 'generated/graphql'
interface ClaimMetaContextProps extends ClaimMetaContextQuery {
  claimDetailsRefetch: any
}
const ClaimMetaContext = React.createContext<ClaimMetaContextProps | undefined>(undefined)

gql`
  query ClaimMetaContext($where: ENDataEntityKey!) {
    me: currentUser {
      ...AddDocumentMetaFragment
    }
    user: me {
      company {
        companyId
      }
    }
    claim: claimJob(where: $where) {
      claimId
      ...AddClaimTypeDialogClaimFragment
      ...AddDocumentClaimFragment
      ...JobInfo_ClaimDetailsCardMetaFragment
      ...JobInfo_CustomerInfoCardMetaFragment
    }
  }
`

export default ({ children, claimDetailsRefetch }: any) => {
  const { id } = useParams()
  const claimId = id || '0'
  const { data } = useClaimMetaContextQuery({
    variables: { where: { id: claimId } },
    skip: !claimId,
    fetchPolicy: 'no-cache'
  })

  // @ts-ignore
  const value: ClaimMetaContextProps = data
    ? {
      ...data,
      claimDetailsRefetch
    }
    : { claimDetailsRefetch }

  return (
    <>
      <ClaimMetaContext.Provider value={value}>
        {children}
      </ClaimMetaContext.Provider>
    </>
  )
}

export const useClaimMeta = () => {
  const meta = React.useContext(ClaimMetaContext)
  return meta
}