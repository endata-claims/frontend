import React from 'react'
import gql from 'graphql-tag'
import PageLayout from 'layouts/PageLayout'
import ClaimListHeader from './ClaimListHeader'
import ClaimListBody from './ClaimListBody'
import ClaimListFloatActions from './ClaimListFloatActions'

import fetchMorePagination from 'utils/fetchMorePagination'
import { useClaimListDataQuery } from 'generated/graphql'

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
  const [filterValues, setFilterValues] = React.useState()
  const [waterfallStatus, setWaterfallStatus] = React.useState()
  const filterWhere = filterValues && Object.fromEntries(Object.entries(filterValues).filter(([key, value]) => value))
  const where ={
    ...filterWhere,
    claimStatusStageIds: waterfallStatus
  }

  const { data: claimData, loading: claimLoading, fetchMore } = useClaimListDataQuery({
    variables: {
      where,
      first: 20,
      after: null,
    },
    // skip: filterLoading,
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
        header={(
          <ClaimListHeader
            filterWhere={filterWhere} setFilterValues={setFilterValues}
            waterfallStatus={waterfallStatus} setWaterfallStatus={setWaterfallStatus}
          />
        )}
        body={<ClaimListBody data={claimData} loading={claimLoading} onLoadMoreClaims={onLoadMoreClaims} />}
      />
      <ClaimListFloatActions />
    </>
  )
}