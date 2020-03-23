import React from 'react'
import Helmet from 'react-helmet'
import { useHistory, Switch, Route } from 'react-router-dom'
import Loading from 'components/Loading/Full'
import Appbar from './Appbar'

import { gql } from '@apollo/client'
import { useAppRootQuery } from 'generated/graphql'

gql`
  query AppRoot {
    currentUser {
      _appRoutes @client
      _rootRoute @client
      _customisation @client {
        alias
        favicon
        logo
        companyLogo
      }
    }
  }
`

export default () => {
  const { push, location: { pathname } } = useHistory()
  if (!localStorage.ACCESS_TOKEN) push('/user/signin')

  const { data, loading } = useAppRootQuery()
  const accessRoutes = useAccessRoutes({ appRoutes: data?.currentUser?._appRoutes })
  const rootPath = data?.currentUser?._rootRoute
  React.useEffect(() => {
    const paths = pathname.split('/').filter(x => x)
    if (rootPath && paths.length < 2) push(rootPath)
  }, [pathname, rootPath, push])

  const customisation = data?.currentUser?._customisation
  console.log(data)

  if (loading || !data?.currentUser?._appRoutes) return <Loading />

  return (
    <>
      <Helmet>
        <title>{customisation?.alias}</title>
        {customisation?.favicon && (
          <link id='favicon' rel='icon' type='image/x-icon' href={customisation.favicon} />
        )}
      </Helmet>
      <Appbar
        logo={customisation?.logo}
        companyLogo={customisation?.companyLogo}
        accessPaths={data?.currentUser?._appRoutes}
      />
      <React.Suspense fallback={null}>
        <Switch>
          {accessRoutes && accessRoutes.map((route: any) => <Route key={route.path} {...route} />)}
        </Switch>
      </React.Suspense>
    </>
  )
}

const useAccessRoutes = ({ appRoutes }: any) => {
  const initialRoutes = React.useMemo(() => [
    { exact: false, path: '/app/dashboard', component: React.lazy(() => import('./Dashboard')) },

    { exact: false, path: '/app/claims/add', component: React.lazy(() => import('./Claims/ClaimAdd')) },
    { exact: false, path: '/app/claims/:id', component: React.lazy(() => import('./Claims/ClaimDetails')) },
    { exact: false, path: '/app/claims', component: React.lazy(() => import('./Claims/ClaimList')) },

    { exact: false, path: '/app/communicationtasks', component: React.lazy(() => import('./Communications')) },
  ], [])

  const accessRoutes = appRoutes
    ? initialRoutes.filter(route => Boolean(appRoutes.filter((x: string) => route.path.includes(x)).length))
    : []


  return [
    ...accessRoutes,
    { exact: true, path: '*', component: React.lazy(() => import('layouts/NotFound')) }
  ]
}