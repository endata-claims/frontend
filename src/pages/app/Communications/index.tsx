import React from 'react'
import gql from 'graphql-tag'
import PageLayout from 'layouts/PageLayout'
import CommunicationsHeader from './CommunicationsHeader'
import CommunicationsBody from './CommunicationsBody'
import fetchMorePagination from 'utils/fetchMorePagination'

import { useCommunicationListFiltersQuery, useCommunicationsDataQuery, ClaimCommunicationBox } from 'generated/graphql'
gql`
  query CommunicationListFilters {
    communicationFilters {
      id
      name
      options {
        group
        label: name
        value
      }
    }
  }
`
gql`
  query CommunicationsData($first: Int, $after: String, $where: CommunicationFilter) {
    claimCommunications: claimCommuications(
      first: $first
      after: $after
      where: $where
    ) @connection(key: "claimCommunications", filter: ["where"]) {
      totalCount
      edges {
        node {
          ...ClaimCommunicationBody
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`

export default () => {
  const { data: filterData, loading: filterLoading } = useCommunicationListFiltersQuery()
  const [filterValues, setFilterValues] = React.useState()
  const filters = React.useMemo(() => filterData?.communicationFilters?.map((filter: any) => ({
    type: 'Autocomplete',
    label: filter.name,
    name: filter.id,
    options: filter.options
  })), [filterData])

  const mappedWhere = filterValues && Object.fromEntries(Object.entries(filterValues).filter(([key, value]) => value))
  const where = {
    ...mappedWhere,
    acknowledged: false,
    boxes: [ClaimCommunicationBox.Inbox]
  }

  const { data: communications, loading: communicationLoading, fetchMore } = useCommunicationsDataQuery({
    variables: {
      where,
      first: 20,
      after: null,
    },
    skip: filterLoading,
  })
  const onLoadMore = () => {
    return fetchMorePagination({
      fetchMore,
      where,
      first: 20,
      pageInfo: communications?.claimCommunications?.pageInfo,
      root: 'claimCommunications'
    })
  }

  return (
    <PageLayout
      header={<CommunicationsHeader filters={filters} setFilterValues={setFilterValues} loading={filterLoading} />}
      body={<CommunicationsBody data={communications} loading={communicationLoading} onLoadMore={onLoadMore} />}
    />
  )
}