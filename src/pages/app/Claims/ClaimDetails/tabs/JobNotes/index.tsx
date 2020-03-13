import React from 'react'

import { Grid } from '@material-ui/core'
import ClaimPortfolioFilter from '../../components/ClaimPortfolioFilter'
import { gql } from '@apollo/client'
import { useJobNotesQuery, ClaimDetailsQuery } from 'generated/graphql'
import JobNoteList from './JobNoteList'
import TabLayout from 'layouts/TabLayout'
import { useClaimMeta } from '../../ClaimMetaContext'
gql`
  query JobNotes($where: ClaimItemFilter, $first: Int, $after: String) {
    claimNotes(where: $where, first: $first, after: $after) {
      edges {
        node {
          id
          ...JobNoteListFragment
        }
      }
    }
  }
  fragment JobNotesFragment on ClaimJob {
    actions {
      actionType
      name
      isDisplay
      isDisabled
    }
    building {
      progress { initialCallMade appointmentBooked }
      claimStatus { statusId }
      jobSuppliers { quote { id }}
    }
    restoration {
      progress { initialCallMade appointmentBooked }
      claimStatus { statusId }
      jobSuppliers { quote { id }}
    }
  }
`

type JobNotesProps = {
  claimId?: string
  data?: ClaimDetailsQuery
}
export default ({ claimId, data: claim }: JobNotesProps) => {
  const claimMeta = useClaimMeta()

  const [portfolio, setPortfolio] = React.useState()

  const skip = !claimId || !portfolio
  // @ts-ignore
  const { data, loading } = useJobNotesQuery({
    variables: {
      first: 1000,
      after: null,
      where: {
        claimId,
        portfolios: [portfolio]
      }
    },
    skip
  })

  const {
    isDisabledInitialCall, isDisplayInitialCall,
    isDisplayApointmentMade,
    isDisplayChangeAppointment,
    awaitingInfoAction
  } = mapJobNoteLogic({ claimMeta, claim })

  return (
    <TabLayout
      actions={[
        {
          label: 'Initial Call Made',
          disabled: isDisabledInitialCall,
          unMountOn: !isDisplayInitialCall
        },
        {
          label: 'Appointment Made',
          unMountOn: !isDisplayApointmentMade
        },
        {
          label: 'Change Appointment',
          unMountOn: !isDisplayChangeAppointment
        },
        {
          label: awaitingInfoAction?.name,
          disabled: awaitingInfoAction?.isDisabled,
          unMountOn: !awaitingInfoAction?.isDisplay
        },
        { label: 'New Job Note' },
      ]}
      body={(
        <Grid container spacing={1} style={{ marginTop: 4 }} alignItems='flex-start'>
          <Grid item>
            <ClaimPortfolioFilter setPortfolio={setPortfolio} />
          </Grid>
          <Grid item xs>
            <JobNoteList data={data} loading={loading || skip} />
          </Grid>
        </Grid>
      )}
    />
  )
}

const mapJobNoteLogic = ({ claimMeta, claim }: any) => {
  const isBuilder = claimMeta?.me?.userType === 'Builder'
  const isRestorer = claimMeta?.me?.userType === 'Restorer'
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

  const isDisplayApointmentMade =
    (
      isBuilder
      && claim?.claimJob?.building?.progress?.initialCallMade
      && !claim.claimJob.building.progress.appointmentBooked
    )
    ||
    (
      isRestorer
      && claim?.claimJob?.restoration?.progress?.initialCallMade
      && !claim.claimJob.restoration?.progress.appointmentBooked
    )

  const companyId = claimMeta?.user?.company?.companyId
  const scopingId =
    isBuilder ? claim?.claimJob?.building?.scopingSupplier?.companyId :
      isRestorer ? claim?.claimJob?.restoration?.scopingSupplier?.companyId :
        ''
  const isQuoting = companyId !== scopingId
  const isDisplayChangeAppointment =
    (isBuilder && !isQuoting && [1, 37].includes(claim?.claimJob?.building?.claimStatus?.statusId ?? -1))
    ||
    (isRestorer && !isQuoting && [1, 37].includes(claim?.claimJob?.restoration?.claimStatus?.statusId ?? -1))

  const awaitingInfoAction = claim?.claimJob?.actions.find((action: any) => action?.actionType === 'CLAIM_AWAITING_INFO')

  return {
    isDisabledInitialCall, isDisplayInitialCall,
    isDisplayApointmentMade,
    isDisplayChangeAppointment,
    awaitingInfoAction
  }
}