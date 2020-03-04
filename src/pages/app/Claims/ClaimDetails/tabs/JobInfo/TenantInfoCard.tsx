import React from 'react'
import Paper from 'components/Paper'
import { Grid } from '@material-ui/core'

import renderField from './renderField'
import PersonIcon from '@material-ui/icons/Person'
import PhoneIcon from '@material-ui/icons/Phone'

export default () => {
  return (
    <Paper title='Tenant Information'>
      <Grid container spacing={3}>
        {[
          {
            xs: 8,
            label: 'Tenant Name',
            name: 'tenantName',
            startAdornment: <PersonIcon />,
          },
        ].map(renderField)}
        <Grid item xs={4} />

        {[
          {
            xs: 4,
            label: 'Phone 1',
            name: 'tenantPhone1',
            startAdornment: <PhoneIcon />,
          },
          {
            xs: 4,
            label: 'Phone 2',
            name: 'tenantPhone2',
            startAdornment: <PhoneIcon />,
          },
          {
            xs: 4,
            label: 'Phone 3',
            name: 'tenantPhone3',
            startAdornment: <PhoneIcon />,
          },
        ].map(renderField)}
      </Grid>
    </Paper>
  )
}