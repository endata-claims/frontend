import React from 'react'

import { Grid } from '@material-ui/core'
import Info from 'components/Info'

export default ({ __typename, grid, order, ...props }: any) => {
  if (__typename === 'GroupField') return <div>Group</div>

  if (__typename === 'InfoField') {
    return (
      <Grid item xs={grid}>
        <Info {...props} fullWidth />
      </Grid>
    )
  }

  const Component = React.useMemo(() => React.lazy(() => import(`components/Formik/${__typename}`)), [__typename])
  return (
    <Grid item xs={grid}>
      <React.Suspense fallback={null}>
        <Component {...props} fullWidth variant='outlined' />
      </React.Suspense>
    </Grid>
  )
}

// const Component = name !== 'GroupField'
//   ? React.useMemo(() => React.lazy(() => import(`components/Formik/${name}`)), [name])
//   : React.useMemo(() => React.lazy(() => import('./GroupField')), [])