import React from 'react'
import { WidgetGraphType } from 'generated/graphql'
import { Badge, makeStyles, Grid } from '@material-ui/core'
import Paper from 'components/Paper'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import ToggleButton from '@material-ui/lab/ToggleButton'
import { useHistory } from 'react-router-dom'
import ReactTable from 'components/Table'
import fetchMorePagination from 'utils/fetchMorePagination'
import PortfolioIcon from 'components/PortfolioIcon'
import TrafficLightIcon from '@material-ui/icons/Brightness1'

import { gql } from '@apollo/client'
import { useKpiAlertDetailsQuery } from 'generated/graphql'

gql`
  query KpiAlertDetails($where: CaseReportIndex!, $first: Int, $after: String) {
    reportingClaimJobGeneral(where: $where, first: $first, after: $after) {
      edges {
        node {
          id
          portfolioType
          refNumber
          insuredName
          caseManagerName
          status { statusName }
          daysAtStatus
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`

interface KpiAlertProps {
  data: WidgetGraphType
  outsideFilters?: any
}
const KpiAlert: React.FC<KpiAlertProps> = ({ data: filterData, outsideFilters }) => {
  const classes = useStyles({})
  const { push } = useHistory()

  const [selected, setSelected] = React.useState('CurrentRedKPI')
  const handleSelect = (_: any, newSelected: string) => {
    if (newSelected) setSelected(newSelected)
  }
  const filters = filterData?.data?.map(filter => {
    const count = filter?.values ? filter?.values[0] : 0
    const type = filter?.internalFilterName
    const className =
      type === 'CurrentGreenKPI' ? classes.greenBtn :
      type === 'CurrentYellowKPI' ? classes.yellowBtn :
      type === 'CurrentRedKPI' ? classes.redBtn :
      classes.greenBtn
    const color =
      type === 'CurrentGreenKPI' ? 'rgb(39, 198, 82)' :
      type === 'CurrentYellowKPI' ? 'rgb(195, 177, 18)' :
      type === 'CurrentRedKPI' ? 'rgb(255, 104, 104)' :
      'rgb(39, 198, 82)'

    return ({
      count,
      value: type,
      className,
      color,
    })
  })

  const where = { internalFilterName: selected, filter: outsideFilters }

  const { data, loading, fetchMore } = useKpiAlertDetailsQuery({ variables: {
    where,
    first: 20,
    after: null
  }})
  const mappedData = data?.reportingClaimJobGeneral?.edges?.map(edges => edges?.node)
  const columns = React.useMemo(() => [
    { Header: 'Claim Number', accessor: 'refNumber', Cell: ({ cell: { row: { original }}}: any) => {
      const { portfolioType, refNumber } = original
      const portfolios = [portfolioType]

      return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {portfolios.map(portfolio => <PortfolioIcon key={portfolio} portfolio={portfolio} />)}
          <span>{refNumber}</span>
        </div>
      )
    }},
    { Header: 'Customer', accessor: 'insuredName' },
    { Header: 'Case Manager', accessor: 'caseManagerName' },
    { Header: 'Claim Status', accessor: 'status.statusName' },
    { Header: 'Days at Status', accessor: 'daysAtStatus' },
  ], [])
  const onRowClick = (row: any) => {
    const claimId = row.original.id
    push(`/app/claims/${claimId}/job-info`)
  }

  const [isFetchingMore, setIsFetchingMore] = React.useState(false)
  const onScroll = async ({ target: { scrollTop, offsetHeight, scrollHeight } }: any) => {
    const fetchOffset = 150
    const scrollPosition = scrollTop + offsetHeight - 5

    if (scrollHeight - scrollPosition < fetchOffset && !isFetchingMore) {
      setIsFetchingMore(true)
      await fetchMorePagination({
        where,
        first: 20,
        pageInfo: data?.reportingClaimJobGeneral?.pageInfo,
        root: 'reportingClaimJobGeneral',
        fetchMore
      })
      setIsFetchingMore(false)
    }
  }

  return (
    <Paper style={{ padding: 16, height: 450 }} title='KPI Alert'>
      <Grid container style={{ height: 'calc(100% - 20px)', marginTop: 28 }}>
        <Grid item style={{ width: '10rem' }}>
          <ToggleButtonGroup size='large' value={selected} onChange={handleSelect} exclusive style={{ flexDirection: 'column' }}>
            {filters?.reverse().map(({ count, value, className, color }, index) => (
              <ToggleButton value={value} key={index} classes={{ root: classes.toggleButton }}>
                <Badge badgeContent={String(count)} max={9999} classes={{ root: classes.badgeRoot, badge: `${className} ${classes.badge}` }} color='primary'>
                  <TrafficLightIcon style={{ fontSize: '8rem', color: selected === value ? color : 'gray' }} />
                </Badge>
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Grid>
        <Grid item xs style={{ height: '100%' }}>
          <ReactTable
            loading={loading}
            loadingMore={isFetchingMore}

            data={mappedData}
            columns={columns}

            onRowClick={onRowClick}
            onScroll={onScroll}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}
export default KpiAlert

const useStyles = makeStyles({
  toggleButton: {
    border: 0,
    background: 'transparent',
    height: '8rem',
  },
  badgeRoot: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    fontSize: '1.5rem',
    top: 'initial',
    right: 'initial',
    transform: 'initial',
    padding: '15px 6px'
  },

  greenBtn: {
    background: 'rgb(39, 198, 82)',
  },
  yellowBtn: {
    background: 'rgb(195, 177, 18)',
  },
  redBtn: {
    background: 'rgb(255, 104, 104)',
  },
})