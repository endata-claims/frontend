import React from 'react'
import FloatActions, { Action } from 'components/FloatActions'
import { useHistory } from 'react-router-dom'

import NoteAddIcon from '@material-ui/icons/NoteAdd'

export default () => {
  const { push } = useHistory()

  const actions: Action[] = [
    { icon: <NoteAddIcon />, name: 'Claim', onClick: () => push('/app/claims/add') }
  ]

  return <FloatActions actions={actions} />
}