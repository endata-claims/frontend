import React from 'react'
import { AppBar as MuiAppBar, Toolbar, Container } from '@material-ui/core'
import { useLocation } from 'react-router-dom'
import DashboardIcon from '@material-ui/icons/Dashboard'
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit'
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined'

import RouteGroup from './RouteGroup'
import SystemMenu from './SystemMenu'
import CommunicationMenu from './CommunicationMenu'

export interface AppbarProps {
  logo?: string | null
  companyLogo?: string | null
  accessPaths: string[]
}

const initialRoutes = [
  { label: 'Dashboard', path: '/app/dashboard', icon: <DashboardIcon /> },
  { label: 'Claims', path: '/app/claims', icon: <VerticalSplitIcon /> },
  { label: 'Reports', path: '/app/reports', icon: <InsertChartOutlinedIcon />, href: 'https://reports.claims.endataclaims.com/' },
]
const Appbar: React.FC<AppbarProps> = ({ logo, companyLogo, accessPaths }) => {
  const { pathname } = useLocation()
  const routes = initialRoutes.filter(route => accessPaths.includes(route.path))
  const activeRoute = routes.findIndex(route => pathname.includes(route.path))

  return (
    <MuiAppBar position='sticky'>
      <Container maxWidth='lg'>
        <Toolbar style={{ minHeight: 48, height: 48 }}>
          <div style={{ marginRight: 'auto' }}>
            {companyLogo && <img src={companyLogo} alt='ENData Claims' style={{ marginRight: 8 }} />}
            <RouteGroup routes={routes} activeRoute={activeRoute} />
          </div>
          <div style={{ marginLeft: 'auto' }}>
            {accessPaths.includes('/app/communicationtasks') && <CommunicationMenu style={{ marginRight: 8 }} />}
            <SystemMenu />
            {logo && <img src={logo} alt='ENData Claims' />}
          </div>
        </Toolbar>
      </Container>
    </MuiAppBar>
  )
}
export default Appbar