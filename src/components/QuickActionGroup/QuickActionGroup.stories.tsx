import React from 'react'
import { Paper, Button } from '@material-ui/core'
import QuickActionGroup from '.'
import QuickAction from './QuickAction'


export default {
  title: 'Quick action group',
}

export const Default = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <Paper style={{ padding: 16 }}>
      <Button onClick={handleOpen}>
        Open action
      </Button>
      <QuickActionGroup>
        <QuickAction
          open={isOpen} handleClose={handleClose}
          title='Action title'
          content='Doing something here'
        />
      </QuickActionGroup>
    </Paper>
  )
}