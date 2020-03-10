import React from 'react'

import FilterGroup from 'components/FilterGroup'
import { FilterProps } from 'components/FilterGroup/Filter'
import { Grid, Paper } from '@material-ui/core'
import { gql } from '@apollo/client'
import { useClaimListFilterQuery, useClaimListWaterfallFilterQuery } from 'generated/graphql'
import PortfolioFilter, { PortfolioType } from 'components/WaterfallFilter/PortfolioFilter'
import WaterfallFilter from 'components/WaterfallFilter'

gql`
  query ClaimListFilter {
    currentUser {
      claimFilters {
        id
        type
        label
        name
        options {
          group
          label
          value: id
        }
      }
    }
  }
  query ClaimListWaterfallFilter($where: ClaimStatusVolumeWhere!) {
    currentUser {
      waterfallFilters(where: $where) {
        id
        items {
          value: id
          label
          claimCount
          color
        }
      }
    }
  }
`

type ClaimListHeaderProps = {
  filterWhere: any
  setFilterValues: (values: any) => void

  waterfallStatus: any
  setWaterfallStatus: (value: any) => void
}

const ClaimListHeader: React.FC<ClaimListHeaderProps> = ({ filterWhere, setFilterValues, waterfallStatus, setWaterfallStatus }) => {
  const { data: filterData, loading: filterLoading } = useClaimListFilterQuery()
  const claimFilters = filterData?.currentUser?.claimFilters
  const filterString = JSON.stringify(claimFilters)
  const filters = React.useMemo(() => claimFilters?.map(props => {
    // @ts-ignore
    const [type, multiple]: [string, string] = props?.type?.split('_')

    return {
      ...props,
      type,
      multiple: multiple ? true : false
    }
  // TODO
  // eslint-disable-next-line
  }), [filterString]) as FilterProps[]

  const [portfolio, setPortfolio] = React.useState<PortfolioType>('Building')
  const portfolios: PortfolioType[] = ['Building', 'Contents', 'Restoration']
  const { data: waterfallFilterData } = useClaimListWaterfallFilterQuery({
    variables: {
      where: {
        claimPortfolioType: portfolio as any,
        ...filterWhere
      }
    }
  })
  const waterfallFilters = waterfallFilterData?.currentUser?.waterfallFilters

  return (
    <Paper style={{ padding: 16 }}>
      <FilterGroup
        loading={filterLoading}
        firstRowFilters={6}
        filters={filters}
        onChange={values => setFilterValues(values)}
        filterRender={(Filter, props, index) => (
          <Grid key={index} item xs={2}>
            <Filter {...props} fullWidth variant='outlined' />
          </Grid>
        )}
        SubView={(
          <Grid container spacing={1}>
            <Grid item>
              <PortfolioFilter portfolios={portfolios} value={portfolio} setValue={setPortfolio} />
            </Grid>
            <Grid item xs>
              <WaterfallFilter groups={waterfallFilters} value={waterfallStatus} setValue={setWaterfallStatus} />
            </Grid>
          </Grid>
        )}
      />
    </Paper>
  )
}

export default ClaimListHeader