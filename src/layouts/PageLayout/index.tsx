import React from 'react'
import { CircularProgress } from '@material-ui/core'

export interface PageLayoutProps {
  header: React.ReactElement
  body: React.ReactElement
  loading?: boolean
}
const PageLayout: React.FC<PageLayoutProps> = ({ header, body, loading }) => {
  if (loading) return (
    <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CircularProgress />
    </div>
  )

  return (
    <div className='report-layout' style={{ height: 'calc(100% - 48px)' }}>
      {header}
      {body}
    </div>
  )
}
export default PageLayout