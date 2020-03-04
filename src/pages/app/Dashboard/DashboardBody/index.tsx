import React from 'react'
import { CircularProgress, Container, Grid } from '@material-ui/core'
import KpiAlert from './KpiAlert'
import DashboardCharts from './DashboardCharts'
import { DashboardKpiQuery, WidgetGraphType } from 'generated/graphql'

interface DashboardBodyProps {
  data: DashboardKpiQuery | undefined
  loading?: boolean
  filterData?: any
}
const DashboardBody: React.FC<DashboardBodyProps> = ({ data, loading, filterData }) => {
  if(loading) return (
    <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CircularProgress />
    </div>
  )

  const kpiAlertData = data?.dashboardWidgets?.find((x: any) => x.viewName === 'KPIGear') as WidgetGraphType
  const chartData = data?.dashboardWidgets?.filter((x: any) => x.viewName === 'ChartJs') as WidgetGraphType[]

  return (
    <Container maxWidth='xl'>
      <Grid container>
        <Grid item xs={12} style={{ marginTop: 16 }}>
          <KpiAlert data={kpiAlertData} outsideFilters={filterData} />
        </Grid>
        <Grid item xs={12} style={{ marginTop: 2 }} container spacing={2}>
          <DashboardCharts data={chartData} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default DashboardBody