import React from 'react'

import FilterGroup from 'components/FilterGroup'
import { FilterProps } from 'components/FilterGroup/Filter'
import { Grid, Paper } from '@material-ui/core'
import SearchField from 'components/InputField/SearchField'

type ClaimListHeaderProps = {
  filters?: FilterProps[]
  loading?: boolean

  setFilterValues: (values: any) => void
}

const ClaimListHeader: React.FC<ClaimListHeaderProps> = ({ loading, filters, setFilterValues }) => {
  const handleSearchSubmit = async (value: any) => {
    await new Promise(resolve => setTimeout(() => resolve(), 400))

    return setFilterValues((previous: any) => ({
      ...previous,
      keyWords: value
    }))
  }

  return (
    <Paper style={{ padding: 16 }}>
      <FilterGroup
        loading={loading}
        firstRowFilters={5}
        filters={filters}
        onChange={values => setFilterValues(values)}
        filterRender={(Filter, props, index) => (
          <React.Fragment key={props.name}>
            {index === 0 && (
              <Grid item xs={2}>
                <SearchField label='Search' submit={handleSearchSubmit} />
              </Grid>
            )}
            <Grid item xs={2}>
              <Filter {...props} fullWidth variant='outlined' />
            </Grid>
          </React.Fragment>
        )}
      />
    </Paper>
  )
}

export default ClaimListHeader