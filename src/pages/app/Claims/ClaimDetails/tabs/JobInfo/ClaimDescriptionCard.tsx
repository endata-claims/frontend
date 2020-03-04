import React from 'react'
import Paper from 'components/Paper'
import { Grid } from '@material-ui/core'

import renderField from './renderField'
import EditorField from 'components/Formik/EditorField'

export default () => {
  return (
    <Paper title='Claim Description'>
      <Grid container spacing={3}>
        {[
          {
            xs: 12,
            component: EditorField,
            name: 'claimDescription',
          },
        ].map(renderField)}
      </Grid>
    </Paper>
  )
}