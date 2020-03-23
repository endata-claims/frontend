import React from 'react'
import { useSnackbar } from 'notistack'
import { Button } from '@material-ui/core'
import { gql } from '@apollo/client'
import { useInitCallMutation } from 'generated/graphql'
import { useClaimMeta } from '../../ClaimMetaContext'

gql`
  mutation InitCall($id: ID!) {
    claimInitialCall(where: { id: $id }) {
      success
      messages
    }
  }
`

const useInitialCallMade = ({ claim }: any) => {
  const claimMeta = useClaimMeta()

  const userType = claimMeta?.me?.userType
  const isBuilder = React.useMemo(() => userType === 'Builder', [userType])
  const isRestorer = React.useMemo(() => userType === 'Restorer', [userType])

  const buildingSup = claim?.claimJob?.building?.jobSuppliers
  const restorationSup = claim?.claimJob?.restoration?.jobSuppliers

  const isDisabledInitialCall =
    (isBuilder && !(buildingSup && buildingSup[0]?.quote))
    ||
    (isRestorer && !(restorationSup && restorationSup[0]?.quote))
  const isDisplayInitialCall =
    (
      isBuilder
      && !claim?.claimJob?.building?.progress?.initialCallMade
      && [11, 34].includes(claim?.claimJob?.building?.claimStatus?.statusId ?? -1)
    )
    ||
    (
      isRestorer
      && !claim?.claimJob?.restoration?.progress?.initialCallMade
      && [11, 34].includes(claim?.claimJob?.restoration?.claimStatus?.statusId ?? -1)
    )

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const [handleInitCall] = useInitCallMutation()
  const action = (key: any) => (
    <>
      <Button color='secondary' onClick={async () => {
        if (claimMeta?.claim?.id) {
          const res = await handleInitCall({ variables: { id: claimMeta.claim.id } })
          closeSnackbar(key)
          res?.data?.claimInitialCall?.messages.forEach(message => enqueueSnackbar(message))

          if (res?.data?.claimInitialCall?.success) {
            claimMeta.claimDetailsRefetch()
          }
        }
        else {
          console.log('claim meta error')
        }
      }}>
        Call Made
      </Button>
      <Button color='primary' onClick={() => closeSnackbar(key)}>
        Not yet
      </Button>
    </>
  )
  const handleInitialCallMade = () => {
    enqueueSnackbar('Please confirm that initial call has been made', {
      persist: true,
      action
    })
  }

  return {
    isDisabledInitialCall,
    isDisplayInitialCall,
    handleInitialCallMade
  }
}
export default useInitialCallMade