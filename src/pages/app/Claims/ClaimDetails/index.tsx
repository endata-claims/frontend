import React from 'react'
import { Switch, Route, useParams, useRouteMatch, useHistory } from 'react-router-dom'
import { Container, CircularProgress, Grid } from '@material-ui/core'

import InfoCard from './InfoCard'
import TabNavbar from './TabNavbar'
import ClaimActionProvider from './actions/ClaimActionProvider'
import ClaimActionButton from './actions/ClaimActionButton'
import ClaimMetaContext from './ClaimMetaContext'

import { gql } from '@apollo/client'
import { useClaimDetailsQuery } from 'generated/graphql'
gql`
  query ClaimDetails($claimId: ID!) {
    claimJob(where: { id: $claimId }) {
      ...InfoCardDataFragment
      ...JobInfoTabFragment
      ...ReportTabFragment
      ...JobNotesFragment
    }
  }
`

const routes = [
  { label: 'Job Info', path: '/job-info', component: 'JobInfo' },
  { label: 'Make Safe', path: '/make-safe', component: 'MakeSafe' },
  { label: 'Site Report', path: '/site-report', component: 'SiteReport' },
  { label: 'Quote', path: '/quote', component: 'Quote' },
  { label: 'Scope', path: '/scope', component: 'Scope' },
  { label: 'Quotes', path: '/quotes', component: 'Quotes' },
  { label: 'Job In Progress', path: '/job-in-progress', component: 'JobInProgress' },
  { label: 'Job Notes', path: '/job-notes', component: 'JobNotes' },
  { label: 'Documents', path: '/documents', component: 'Documents' },
  { label: 'Communications', path: '/communications', component: 'Communications' },
  { label: 'Variations', path: '/variations', component: 'Variations' },
  { label: 'Fees', path: '/fees', component: 'Fees' },
  { label: 'Loss Adjuster', path: '/loss-adjuster', component: 'LossAdjuster' },
  { label: 'Report', path: '/report', component: 'Report' },
].map(({ component, ...args }) => ({ ...args, component: React.lazy(() => import(`./tabs/${component}`)) }))

export default () => {
  const { id } = useParams()
  const claimId = id || '0'

  const { isExact, url } = useRouteMatch('/app/claims/:id') ?? {}
  const { push } = useHistory()
  React.useEffect(() => {
    if (isExact) push(`${url}/job-info`)
  }, [isExact, url, push])

  const { data, loading, refetch } = useClaimDetailsQuery({
    variables: { claimId },
    skip: !claimId
  })

  // if no claim found, kick user to notfound
  React.useEffect(() => {
    if (!loading && !data?.claimJob) push('/app/notfound')
  }, [data, loading, push])

  return (
    <ClaimMetaContext claimDetailsRefetch={refetch}>
      <ClaimActionProvider>
        <Grid
          style={{ marginTop: 8 }} // height: 'calc(100% - 56px)'
          container direction='column'
          component={Container} maxWidth='xl'
        >
          <Grid item style={{ width: '100%' }}>
            <InfoCard data={data} loading={loading} />
          </Grid>
          <Grid item style={{ width: '100%' }}>
            <TabNavbar routes={routes} />
          </Grid>
          <Grid item xs>
            <React.Suspense fallback={<CircularProgress />}>
              <Switch>
                {routes.map(({ path, component: Comp }) => (
                  <Route key={path} path={`${url}${path}`} render={props => (
                    <Comp {...props} data={data} loading={loading} claimId={claimId} />
                  )} />
                ))}
              </Switch>
            </React.Suspense>
          </Grid>
        </Grid>
        <ClaimActionButton />
      </ClaimActionProvider>
    </ClaimMetaContext>
  )
}