import React from 'react'
import { Grid } from '@material-ui/core'
import TabLayout from 'layouts/TabLayout'
import ClaimPortfolioFilter from 'components/PortfolioFilter/ClaimPortfolioFilter'
import JobNoteList from './JobNoteList'

import useInitialCallMade from './useInitialCallMade'
import useAppointmentMade from './useAppointmentMade'
import useChangeAppointment from './useChangeAppointment'

import { useJobNotesQuery, ClaimDetailsQuery } from 'generated/graphql'
import { gql } from '@apollo/client'
import { useClaimActions } from '../../actions/ClaimActionProvider'
import useAwaitingInfo from './useAwaitingInfo'
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
  const { addJobNote } = useClaimActions()

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
    isDisplayInitialCall, isDisabledInitialCall,
    handleInitialCallMade
  } = useInitialCallMade({ claim })

  const {
    isDisplayApointmentMade,
    handleAppointmentMade,
    ApointmentMadeDialog
  } = useAppointmentMade({ claim })

  const {
    isDisplayChangeAppointment,
    handleChangeAppointment,
    ChangeApointmentDialog
  } = useChangeAppointment({ claim })

  const {
    isDisplayAwaitingInfo,
    isDisabledAwaitingInfo,
    handleAwaitingInfo,
    AwaitingInfoDialog
  } = useAwaitingInfo({ claim })

  return (
    <>
      <ApointmentMadeDialog />
      <ChangeApointmentDialog />
      <AwaitingInfoDialog />
      <TabLayout
        actions={[
          {
            label: 'Initial Call Made',
            disabled: isDisabledInitialCall,
            unMountOn: !isDisplayInitialCall,
            onClick: handleInitialCallMade
          },
          {
            label: 'Appointment Made',
            unMountOn: !isDisplayApointmentMade,
            onClick: handleAppointmentMade
          },
          {
            label: 'Change Appointment',
            unMountOn: !isDisplayChangeAppointment,
            onClick: handleChangeAppointment
          },
          {
            label: 'Awaiting Info',
            disabled: isDisabledAwaitingInfo,
            unMountOn: !isDisplayAwaitingInfo,
            onClick: handleAwaitingInfo
          },
          { label: 'New Job Note', onClick: () => addJobNote && addJobNote.toggle() },
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
    </>
  )
}