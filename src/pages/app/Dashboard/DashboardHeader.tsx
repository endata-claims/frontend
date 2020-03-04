import React from 'react'

import FilterGroup from 'components/FilterGroup'
import { FilterProps } from 'components/FilterGroup/Filter'

import { Paper, Grid } from '@material-ui/core'
import { gql } from '@apollo/client'

gql`
  fragment DashboardHeaderFragment on FilterInput {
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
`
interface DashboardHeaderProps {
  setFilterValues: (values: any) => void
  filters?: FilterProps[]
  loading?: boolean
}
const DashboardHeader: React.FC<DashboardHeaderProps> = ({ filters, setFilterValues, loading }) => {
  return (
    <Paper style={{ padding: 16 }}>
      <FilterGroup
        loading={loading}
        firstRowFilters={6}
        filters={filters}
        onChange={values => setFilterValues(values)}
        filterRender={(Comp, props, index) => (
          <Grid key={index} item xs={2}>
            <Comp {...props} fullWidth variant='outlined' />
          </Grid>
        )}
      />
    </Paper>
  )
}
export default DashboardHeader