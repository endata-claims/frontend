import React from 'react'
import Table from 'components/Table'

import { gql } from '@apollo/client'
import { JobNotesQuery } from 'generated/graphql'
import PortfolioIcon from 'components/PortfolioIcon'
gql`
  fragment JobNoteListFragment on ClaimNote {
    portfolioType
    logDate
    private
    _privacy @client
    message
    user {
      userName
      company { companyName }
    }
  }
`

type JobNoteListProps = {
  data?: JobNotesQuery
  loading: boolean
}
const JobNoteList: React.FC<JobNoteListProps> = ({ data, loading }) => {
  const columns = React.useMemo(() => [
    { Header: 'Date', accessor: 'logDate', Cell: ({ cell: { row: { original }}}: any) => {
      return (
        <div style={{ display: 'flex' }}>
          <PortfolioIcon portfolio={original.portfolioType} />
          {original.logDate}
        </div>
      )
    }},
    { Header: 'Company', accessor: 'user.company.companyName' },
    { Header: 'User', accessor: 'user.userName' },
    { Header: 'Privacy', accessor: '_privacy' },
    { Header: 'Note', accessor: 'message' },
  ], [])

  const mappedData = data?.claimNotes?.edges?.map(edge => edge?.node)

  return (
    <Table
      loading={loading}
      columns={columns}
      data={mappedData}
    />
  )
}
export default JobNoteList