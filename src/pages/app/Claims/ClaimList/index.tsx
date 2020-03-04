import React from 'react'
import gql from 'graphql-tag'
import PageLayout from 'layouts/PageLayout'
import ClaimListHeader from './ClaimListHeader'
import ClaimListBody from './ClaimListBody'
import ClaimListFloatActions from './ClaimListFloatActions'

import fetchMorePagination from 'utils/fetchMorePagination'
import { useClaimListFiltersQuery, useClaimListDataQuery } from 'generated/graphql'
gql`
  query ClaimListFilters {
    claimFilters {
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
  query ClaimListData($first: Int, $after: String, $where: ClaimJobFilter) {
    currentUser {
      userType
    }

    claimJobs(
      first: $first
      after: $after
      where: $where
    ) @connection(key: "claimJobs", filter: ["where"]) {
      totalCount
      edges {
        node {
          ...ClaimListBody
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
  const { data: filterData, loading: filterLoading } = useClaimListFiltersQuery()
  const [filterValues, setFilterValues] = React.useState()
  const filters = React.useMemo(() => filterData?.claimFilters?.map((filter: any) => ({
    type: 'Autocomplete',
    label: filter.name,
    name: filter.id,
    options: filter.options
  })), [filterData])

  const where = filterValues && Object.fromEntries(Object.entries(filterValues).filter(([key, value]) => value))
  const { data: claimData, loading: claimLoading, fetchMore } = useClaimListDataQuery({
    variables: {
      where,
      first: 20,
      after: null,
    },
    skip: filterLoading,
  })

  const onLoadMoreClaims = () => {
    return fetchMorePagination({
      where,
      first: 20,
      pageInfo: claimData?.claimJobs?.pageInfo,
      fetchMore,
      root: 'claimJobs'
    })
  }

  return (
    <>
      <PageLayout
        header={<ClaimListHeader filters={filters} setFilterValues={setFilterValues} loading={filterLoading} />}
        body={<ClaimListBody data={claimData} loading={claimLoading} onLoadMoreClaims={onLoadMoreClaims} />}
      />
      <ClaimListFloatActions />
    </>
  )
}