import React from 'react'
import gql from 'graphql-tag'
import { Container } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import ReactTable from 'components/Table'
import PortfolioIcon from 'components/PortfolioIcon'
import CommunicationActions from './CommunicationActions'
import { CommunicationsDataQuery } from 'generated/graphql'

gql`
  fragment ClaimCommunicationBody on ClaimCommunication {
    id
    claimId
    portfolioType

    claimRef
    sendDate
    senderName
    senderCompanyName
    message

    senderCompanyId
    senderRole
    communicationId
  }
`

interface CommunicationsBodyProps {
  data: CommunicationsDataQuery | undefined
  loading?: boolean
  onLoadMore?: any
}
const CommunicationsBody: React.FC<CommunicationsBodyProps> = ({ data, loading, onLoadMore }) => {
  const { push } = useHistory()

  const columns = React.useMemo(() => [
    { Header: 'Type', accessor: 'portfolioType', Cell: ({ cell: { value, row }}: any) => {
      const portfolios = [value]

      return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ marginRight: 8, fontWeight: 600 }}>{row.index + 1}</span>
          {portfolios.map(portfolio => <PortfolioIcon key={portfolio} portfolio={portfolio} />)}
        </div>
      )
    }},
    { Header: 'Ins Ref #', accessor: 'claimRef' },
    { Header: 'Date', accessor: 'sendDate' },
    { Header: 'Sender', accessor: 'senderName' },
    { Header: 'Company', accessor: 'senderCompanyName' },
    { Header: 'Message', accessor: 'message' },
    { Header: 'Actions', id: 'actions', accessor: 'id', Cell: ({ cell: { row: { original }}}: any) => {
      return <CommunicationActions data={original} />
    }}
  ], [])

  const mappedData = data?.claimCommunications?.edges?.map(edge => edge?.node)

  const onRowClick = (row: any) => {
    const claimId = row.original.id
    push(`/app/claims/${claimId}/communications`)
  }

  const [isFetchingMore, setIsFetchingMore] = React.useState(false)
  let [currentOffset, setCurrentOffset] = React.useState(0)
  const onScroll = async ({ target: { scrollTop, offsetHeight, scrollHeight }, ...event }: any) => {
    if (currentOffset === 0) setCurrentOffset(offsetHeight)
    if (currentOffset === offsetHeight || currentOffset === 0) return null
    setCurrentOffset(offsetHeight)

    const fetchOffset = 150
    const scrollPosition = scrollTop + offsetHeight - 5

    if (scrollHeight - scrollPosition < fetchOffset && !isFetchingMore) {
      setIsFetchingMore(true)
      await onLoadMore()
      setIsFetchingMore(false)
    }
  }

  return (
    <Container maxWidth='xl' style={{ position: 'relative', height: 'calc(100% - 88px - 16px)' }}>
      <ReactTable
        loading={loading}
        loadingMore={isFetchingMore}

        columns={columns}
        data={mappedData}
        totalCount={data?.claimCommunications?.totalCount}

        onRowClick={onRowClick}
        onScroll={onScroll}
      />
    </Container>
  )
}

export default CommunicationsBody