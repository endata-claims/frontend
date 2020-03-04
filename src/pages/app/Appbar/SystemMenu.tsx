import React from 'react'
import { IconButton, Menu, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { useHistory } from 'react-router-dom'

const SystemMenu = (props: any) => {
  const { push } = useHistory()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClick = (event: any) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  const handleLogout = () => {
    handleClose()
    localStorage.clear()
    push('/user/login')
  }

  return (
    <>
      <IconButton onClick={handleClick} color='inherit' {...props}>
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  )
}

export default SystemMenu