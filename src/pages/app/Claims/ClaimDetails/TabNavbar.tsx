import React from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'
import { useRouteMatch, useHistory } from 'react-router-dom'

interface TabNavbarProps {
  routes: any[]
}
const TabNavbar: React.FC<TabNavbarProps> = ({ routes }) => {
  const { url } = useRouteMatch('/app/claims/:id') ?? {}
  const { push, location: { pathname }} = useHistory()

  const pathFromUrl = React.useMemo(() => pathname.split(url ?? '')[1], [url, pathname])
  const [activeTab, setActiveTab] = React.useState(pathFromUrl)

  React.useEffect(() => {
    setActiveTab(pathFromUrl)
  }, [pathFromUrl])

  const handleTabChange = (_: any, newValue: string) => {
    push(`${url}${newValue}`)
  }

  return (
    <Paper style={{ marginTop: 8 }}>
      <Tabs
        value={activeTab || ''}
        onChange={handleTabChange}
        indicatorColor='primary'
        variant='scrollable'
        scrollButtons='auto'
      >
        {routes.map(route => (
          <Tab
            key={route.path}
            label={route.label} value={route.path}
            style={{ minWidth: 150 }}
          />
        ))}
      </Tabs>
    </Paper>
  )
}
export default TabNavbar