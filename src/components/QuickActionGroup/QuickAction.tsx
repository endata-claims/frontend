import React from 'react'
import { Paper, IconButton, makeStyles, Typography } from '@material-ui/core'

import MaximizeIcon from '@material-ui/icons/Maximize'
import MinimizeIcon from '@material-ui/icons/Minimize'
import CloseIcon from '@material-ui/icons/Close'

interface QuickActionProps {
  open: boolean
  handleClose: any

  title: any
  content: any
}
const QuickAction: React.FC<QuickActionProps> = ({ open, handleClose, title, content }) => {
  const classes = useStyles({})
  const [collapsed, setCollapsed] = React.useState(false)

  if(!open) return null

  return (
    <Paper style={{ minWidth: 300, maxWidth: 450, marginRight: 16 }}>
      <div className={classes.header}>
        <Typography variant='subtitle2' style={{ flexGrow: 1, marginLeft: 8 }}>
          {title}
        </Typography>
        <IconButton onClick={() => setCollapsed(pre => !pre)} className={classes.headerBtn}>
          {collapsed ? <MaximizeIcon /> : <MinimizeIcon />}
        </IconButton>
        <IconButton onClick={handleClose} className={classes.headerBtn}>
          <CloseIcon />
        </IconButton>
      </div>
      <div style={{ display: collapsed ? 'none' : 'flex' }} className={classes.content}>
        {content}
      </div>
    </Paper>
  )
}
export default QuickAction

const useStyles = makeStyles(theme => ({
  header: {
    background: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    display: 'flex',
    alignItems: 'center',
    borderRadius: '4px 4px 0 0'
  },
  headerBtn: {
    padding: 6,
    color: theme.palette.primary.contrastText
  },
  content: {
    padding: theme.spacing(2)
  }
}))