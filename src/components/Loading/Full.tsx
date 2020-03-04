import React from 'react'
import { CircularProgress } from '@material-ui/core'

export default () => {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress style={{ margin: '0 auto', display: 'block' }} />
    </div>
  )
}