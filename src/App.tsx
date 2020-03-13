import React from 'react'

import { SnackbarProvider } from 'notistack'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ThemeProvider from 'providers/ThemeProvider'
import ApolloProvider from 'providers/ApolloProvider'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { PUBLIC_URL } from 'configs'

export default () => {
  return (
    <div className='App' style={{ height: '100vh' }}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <SnackbarProvider
          autoHideDuration={1500}
          preventDuplicate={true}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Router basename={PUBLIC_URL}>
            <ThemeProvider>
              <ApolloProvider>
                <React.Suspense fallback={null}>
                  <Switch>
                    {/* <Redirect path='/' to='/app' /> */}
                    {[
                      { exact: true, path: '/user/signin', component: React.lazy(() => import('pages/auth/Signin')) },
                      { exact: false, path: '/user/login', component: React.lazy(() => import('pages/auth/Login')) },
                      { exact: false, path: '/app', component: React.lazy(() => import('pages/app')) },
                      { exact: false, path: '/', component: React.lazy(() => import('pages/app')) },
                      { exact: true, path: '*', component: React.lazy(() => import('layouts/NotFound')) },
                    ].map(route => (
                      <Route key={route.path} {...route} />
                    ))}
                  </Switch>
                </React.Suspense>
              </ApolloProvider>
            </ThemeProvider>
          </Router>
        </SnackbarProvider>
      </MuiPickersUtilsProvider>
    </div>
  )
}