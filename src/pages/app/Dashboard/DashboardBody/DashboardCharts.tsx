import React from 'react'
import { Grid } from '@material-ui/core'
import Paper from 'components/Paper'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'

export default ({ data }: any) => {
  const graphs = React.useMemo(() => {
    return data?.map((d: any) => ({
      title: d.title,
      data: d.labels.map((label: string, index: number) => ({
        name: label,
        ...d.data.reduce((total: any, current: any) => ({
          ...total,
          [current.legend]: current.values[index] || 0
        }), {})
      }))
    })) ?? []
  }, [data])

  return graphs.map((props: any, index: number) => (
    <DashboardGraph key={index} {...props} />
  ))
}

interface DashboardGraphProps {
  title: string
  data?: any[]
}
const seriesColors = ['#8884d8', '#82ca9d', '#ffc658']
const DashboardGraph: React.FC<DashboardGraphProps> = ({ title, data }) => {
  const seriesAccessors = (data && data[0]) ? Object.keys(data[0]).filter(key => key !== 'name') : []
  // const [accessors, setAccessors] = React.useState(seriesAccessors)
  // const toggleSeries = ({ dataKey }: any) => {
  //   if (accessors.includes(dataKey)) setAccessors(previous => previous.filter(x => x === dataKey))
  //   else setAccessors(previous => [...previous, dataKey])
  // }

  const series = seriesAccessors.map((accessor, index) => ({
    dataKey: accessor,
    stackId: ['Claims Closed', 'Claims Open'].includes(accessor) ? 'a' : undefined,
    color: seriesColors[index]
  }))

  return (
    <Grid item xs={6}>
      <Paper style={{ padding: 16, height: 400 }} title={title}>
        {/* <div style={{ display: 'flex' }}>
          <Typography variant='h6'>
            {title}
          </Typography>
        </div> */}
        {/* <Divider /> */}
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{
              top: 24, right: 8, left: 0, bottom: 24,
            }}
          >
            <CartesianGrid stroke='#ccc' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend /> {/* onClick={toggleSeries} */}

            {series.map(({ dataKey, color, stackId }, index) => {
              return (
                <Bar key={index} dataKey={dataKey} fill={color} stackId={stackId} />
              )
            })}
          </BarChart>
        </ResponsiveContainer>
      </Paper>
    </Grid>
  )
}