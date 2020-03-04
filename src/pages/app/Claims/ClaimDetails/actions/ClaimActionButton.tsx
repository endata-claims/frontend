import React from 'react'

import { makeStyles } from '@material-ui/core'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'

import { useHistory } from 'react-router-dom'
import { useClaimActions } from 'pages/app/Claims/ClaimDetails/actions/ClaimActionProvider'

import NoteAddIcon from '@material-ui/icons/NoteAdd'
import LibraryAddIcon from '@material-ui/icons/LibraryAdd'
import LiveHelpIcon from '@material-ui/icons/LiveHelp'
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit'
import RateReviewIcon from '@material-ui/icons/RateReview'
import ChatIcon from '@material-ui/icons/Chat'

export default () => {
  const classes = useStyles({})
  const { push } = useHistory()

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const { addClaimType, addDocument, nextStep, addJobNote, addCommunication } = useClaimActions()
  const actions = [
    { icon: <LiveHelpIcon />, name: 'Next step', onClick: () => nextStep && nextStep.open() },
    { icon: <RateReviewIcon />, name: 'Job note', onClick: () => addJobNote && addJobNote.toggle() },
    { icon: <VerticalSplitIcon />, name: 'Documents', onClick: () => addDocument && addDocument.open() },
    { icon: <ChatIcon />, name: 'Communication', onClick: () => addCommunication && addCommunication.open() },
    // { icon: <VideocamIcon />, name: 'Video Triage Session', onClick: () =>  },
    { icon: <LibraryAddIcon />, name: 'Add claim type', onClick: () => addClaimType && addClaimType.open() }, // show: isAdmin && !hasAllClaimType
    { icon: <NoteAddIcon />, name: 'Claim', onClick: () => push('/app/claims/add') }
  ]

  return (
    <SpeedDial
      className={classes.root}
      ariaLabel='Claim actions'
      icon={<SpeedDialIcon />}
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
    >
      {actions.reverse().map(action => {
        // if (action.show === false) return null

        return (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipOpen
            tooltipTitle={action.name}
            onClick={() => {
              action.onClick && action.onClick()
              handleClose()
            }}
          />
        )
      })}
    </SpeedDial>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }
}))