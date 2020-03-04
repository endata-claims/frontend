import React from 'react'
import { makeStyles } from '@material-ui/core'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'

export type FloatActionButtonProps = {
  actions: Action[]
}
export type Action = {
  icon: React.ReactElement
  name: string
  onClick: () => void
  show?: Boolean
}

const FloatActionButton: React.FC<FloatActionButtonProps> = ({ actions }) => {
  const classes = useStyles({})
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <SpeedDial
      className={classes.root}
      ariaLabel='Claim actions'
      icon={<SpeedDialIcon />}
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
    >
      {actions.reverse().map(({ name, icon, onClick, show = true }) => {
        if(!show) return null

        return (
          <SpeedDialAction
            key={name}
            icon={icon}
            tooltipOpen
            tooltipTitle={name}
            onClick={() => {
              onClick()
              handleClose()
            }}
          />
        )
      })}
    </SpeedDial>
  )
}
export default FloatActionButton

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }
}))