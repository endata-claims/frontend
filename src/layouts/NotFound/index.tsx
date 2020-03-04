import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography, Paper } from '@material-ui/core'
import FilterVintageIcon from '@material-ui/icons/FilterVintage'

export default () => {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <Paper style={{ padding: 32 }}>
        <FilterVintageIcon style={{ height: '5rem', width: '5rem' }} />
        <Typography variant='h4' gutterBottom>Not Found</Typography>
        <Typography variant='body1' gutterBottom>
          Either you typed a wrong URL or followed a bad link
        </Typography>
        <p style={{ textAlign: 'center', margin: '32px 0 0 0' }}>
          <Button variant='contained' color='primary' component={Link} to='/app'>
            Go home
          </Button>
        </p>
      </Paper>
    </div>
  )
}