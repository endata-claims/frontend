import React from 'react'

import { Grid } from '@material-ui/core'
import Info from 'components/Info'

export default ({ __typename, grid, order, readOnly, ...props }: any) => {
  const renderField = (component: any) => (
    <Grid item xs={grid}>
      <React.Suspense fallback={null}>
        {component}
      </React.Suspense>
    </Grid>
  )

  if (__typename === 'GroupField') {
    const Component = React.lazy(() => import(`./GroupField`))
    return renderField(
      <Component {...props} fullWidth disabled={readOnly} />
    )
  }

  if (__typename === 'InfoField') {
    return renderField(
      <Info {...props} fullWidth disabled={readOnly} />
    )
  }

  if (__typename === 'FileField') {
    const Component = React.lazy(() => import(`./FileField`))
    return renderField(
      <Component {...props} disabled={readOnly} />
    )
  }

  const Component = React.useMemo(() => React.lazy(() => import(`components/Formik/${__typename}`)), [__typename])
  return renderField(
    <Component {...props} fullWidth variant='outlined' disabled={readOnly}  />
  )
}

// const Component = name !== 'GroupField'
//   ? React.useMemo(() => React.lazy(() => import(`components/Formik/${name}`)), [name])
//   : React.useMemo(() => React.lazy(() => import('./GroupField')), [])