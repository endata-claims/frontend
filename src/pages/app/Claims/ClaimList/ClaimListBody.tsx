import React from 'react'
import { gql } from '@apollo/client'
import { ClaimListDataQuery } from 'generated/graphql'
import { useHistory } from 'react-router-dom'
import { Grid, Container, IconButton } from '@material-ui/core'
import Info from 'components/Info'
import Table from 'components/Table'
import PortfolioIcon from 'components/PortfolioIcon'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export const ClaimListBodyFragment = gql`
  fragment ClaimListBody on ClaimJob {
    id

    # portfolio
    hasBuilding hasContents hasRestoration
    _portfolios @client
    # ins ref #
    refNumber
    # ins company
    insurer { companyName }
    # fnol
    lodgeDate
    # request date, request
    building { jobSuppliers { requestDate requestType }}
    contents { jobSuppliers { requestDate requestType }}
    restoration { jobSuppliers { requestDate requestType }}
    _requestDate @client
    _request @client
    # customer
    insured { name }
    # suburb, state
    incidentDetail { riskAddress { suburb state }}
    # Value
    building { authorisedValue scopedValue }
    building { jobSuppliers { quote { total }}}
    contents { jobSuppliers { quote { total }}}
    restoration { jobSuppliers { quote { total }}}
    _claimValue @client
    # Status
    building { jobSuppliers { quote { quoteStatus { statusName }}}} building { claimStatus { statusName }}
    contents { jobSuppliers { quote { quoteStatus { statusName }}}} contents { claimStatus { statusName }}
    restoration { jobSuppliers { quote { quoteStatus { statusName }}}} restoration { claimStatus { statusName }}
    _claimStatus @client
    # Builder
    building { authorisedSupplier { companyName } scopingSupplier { companyName }}
    _claimBuilder @client
    # Restorer
    restoration { authorisedSupplier { companyName } scopingSupplier { companyName }}
    _claimRestorer @client
    # building status
    building { claimStatus { statusName }}
    # days
    building { daysAtStatus }
    # restoration status
    restoration { claimStatus { statusName }}
    # content status
    contents { claimStatus { statusName }}

    # subRows
    refNumber
    insured { name phone1 phone2 phone3 email }
    _insuredPhone @client
    incidentDetail {
      incidentDate
      riskAddress { line1 suburb state postcode }
    }
    _incidentAddress @client
  }
`

interface ClaimListBodyProps {
  data: ClaimListDataQuery | undefined
  loading?: boolean
  onLoadMoreClaims?: any
}

const ClaimListBody: React.FC<ClaimListBodyProps> = ({ data, loading, onLoadMoreClaims }) => {
  const { push } = useHistory()
  const columns = useClaimListColumns(data)

  const [isFetchingMore, setIsFetchingMore] = React.useState(false)
  const onScroll = async ({ target: { scrollTop, offsetHeight, scrollHeight } }: any) => {
    const fetchOffset = 150
    const scrollPosition = scrollTop + offsetHeight - 5

    if (scrollHeight - scrollPosition < fetchOffset && !isFetchingMore) {
      setIsFetchingMore(true)
      await onLoadMoreClaims()
      setIsFetchingMore(false)
    }
  }

  const renderRowSubComponent = React.useCallback(({ row: { original } }) => {
    console.log(original)

    const blocks = [
      { label: 'Ins Ref #', value: original.refNumber },
      { label: 'Customer', value: original.insured?.name },
      { label: 'Phone(s)', value: original._insuredPhone },
      { label: 'Customer Email', value: original.insured?.email },
      { label: 'Incident Date', value: original.incidentDetail?.incidentDate },
      { label: 'Property/Risk Address', value: original._incidentAddress },
      { label: 'Builder', value: original._claimBuilder },
      { label: 'Restorer', value: original._claimRestorer }
    ]

    return (
      <Grid container spacing={2}>
        {blocks.map(({ label, value }) => (
          <Grid item xs={3} key={label}>
            <Info label={label} value={value} />
          </Grid>
        ))}
      </Grid>
    )
  }, [])

  const onRowClick = (row: any) => {
    const claimId = row.original.id
    push(`/app/claims/${claimId}`)
  }

  const mappedData = data?.claimJobs?.edges?.map(edge => edge?.node)

  return (
    <Container maxWidth='xl' style={{ position: 'relative', height: 'calc(100% - 120px - 8px)' }}>
      <Table
        loading={loading}
        loadingMore={isFetchingMore}

        columns={columns}
        data={mappedData}
        totalCount={data?.claimJobs?.totalCount}

        renderRowSubComponent={renderRowSubComponent}

        onRowClick={onRowClick}
        onScroll={onScroll}
      />
    </Container>
  )
}
export default ClaimListBody

const useClaimListColumns = (data: any) => {
  const userType = data?.currentUser?.userType ?? null

  const columns = React.useMemo(() => [
    {
      Header: 'Type', accessor: 'hasBuilding', Cell: ({ cell: { row } }: any) => {
        const { _portfolios } = row.original

        const { onClick, toggleProps } = row.getToggleRowExpandedProps({ style: { padding: 8 } })
        const props = {
          ...toggleProps,
          onClick: (e: any) => {
            e.stopPropagation()
            e.preventDefault()
            onClick(e)
          }
        }

        return (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconButton {...props} style={{ padding: 8 }}>
              {row.isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <span style={{ marginRight: 8, fontWeight: 600 }}>{row.index + 1}</span>
            {_portfolios.map((portfolio: any) => <PortfolioIcon key={portfolio} portfolio={portfolio} />)}
          </div>
        )
      },
    },
    { Header: 'Ins Ref #', accessor: 'refNumber' },
    { Header: 'Ins Company', accessor: 'insurer.companyName' },
    { show: userType === 'Administrator', Header: 'FNOL', accessor: 'lodgeDate' },
    { show: userType !== 'Administrator', Header: 'Request Date', accessor: '_requestDate' },
    { show: userType !== 'Administrator', Header: 'Request', accessor: '_request' },
    { Header: 'Customer', accessor: 'insured.name' },
    { Header: 'Suburb', accessor: 'incidentDetail.riskAddress.suburb' },
    { Header: 'State', accessor: 'incidentDetail.riskAddress.state' },
    { Header: 'Value', accessor: '_claimValue' },
    { show: userType !== 'Administrator', Header: 'Status', accessor: '_claimStatus' },
    { show: userType === 'Administrator' || userType === 'Restorer', Header: 'Builder', accessor: '_claimBuilder' },
    { show: userType === 'Administrator', Header: 'Building Status', accessor: 'building.claimStatus.statusName' },
    { show: userType === 'Administrator', Header: 'Days', accessor: 'building.daysAtStatus' },
    { show: userType === 'Administrator' || userType === 'Builder', Header: 'Restorer', accessor: '_claimRestorer' },
    { show: userType === 'Administrator', Header: 'Restoration Status', accessor: 'restoration.claimStatus.statusName' },
    { show: userType === 'Administrator', Header: 'Content Status', accessor: 'contents.claimStatus.statusName' },
  ], [userType])

  return columns
}