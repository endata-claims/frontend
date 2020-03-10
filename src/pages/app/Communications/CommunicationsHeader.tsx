import React from 'react'

import FilterGroup from 'components/FilterGroup'
import { FilterProps } from 'components/FilterGroup/Filter'
import { Paper, Grid } from '@material-ui/core'

import { gql } from '@apollo/client'

gql`
  fragment CommunicationHeaderFragment on FilterInput {
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
interface CommunicationsHeaderProps {
  setFilterValues: (values: any) => void
  filters?: FilterProps[]
  loading?: boolean
}
const CommunicationsHeader: React.FC<CommunicationsHeaderProps> = ({ loading, filters, setFilterValues }) => {
  return (
    <Paper style={{ padding: 16 }}>
      <FilterGroup
        loading={loading}
        firstRowFilters={6}
        filters={filters}
        filterRender={(Comp, props, index) => (
          <Grid key={index} item xs={2}>
            <Comp {...props} fullWidth variant='outlined' />
          </Grid>
        )}
        onChange={values => setFilterValues(values)}
      />
    </Paper>
  )
}
export default CommunicationsHeader