interface FetchMorePaginationProps {
  where?: any | undefined
  first: number
  pageInfo: any
  root: string
  fetchMore: any
}
const fetchMorePagination = ({ where, first, pageInfo, root, fetchMore }: FetchMorePaginationProps) => {
  return fetchMore({
    variables: {
      where,
      first,
      after: pageInfo.endCursor,
    },
    updateQuery: (previous: any, { fetchMoreResult }: any) => {
      const previousData = previous as any
      const newData = fetchMoreResult as any

      const oldEdges = previousData[root]?.edges
      const newEdges = newData ? newData[root]?.edges : []
      const pageInfo = newData ? newData[root]?.pageInfo : undefined

      const __typename = previousData[root]?.__typename
      const totalCount = newData ? newData[root]?.totalCount : undefined

      return newEdges?.length && oldEdges
        ? {
          [root]: {
            __typename,
            totalCount,
            edges: [
              ...oldEdges,
              ...newEdges
            ],
            pageInfo
          }
        }
        : previous
    }
  })
}

export default fetchMorePagination