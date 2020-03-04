import React from 'react'
import { Grid } from '@material-ui/core'
import TextField from 'components/Formik/TextField'

export default ({ unMountOn, xs = 3, component: Comp = TextField, ...props }: any) => (
  <Grid item xs={xs} key={props.name}>
    {!unMountOn && <Comp {...props} variant='outlined' fullWidth />}
  </Grid>
)