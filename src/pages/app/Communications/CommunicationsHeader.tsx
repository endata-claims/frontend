import React from 'react'

import FilterGroup from 'components/FilterGroup'
import { FilterProps } from 'components/FilterGroup/Filter'
import { Paper } from '@material-ui/core'

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
        firstRowFilters={5}
        filters={filters}
        // filterRender={(Filter, props, index) => (
        //   <React.Fragment key={props.name}>
        //     {index === 0 && (
        //       <Grid item xs={2}>
        //         <SearchField label='Search' submit={handleSearchSubmit} />
        //       </Grid>
        //     )}
        //     <Grid item xs={2}>
        //       <Filter {...props} fullWidth variant='outlined' />
        //     </Grid>
        //   </React.Fragment>
        // )}
        onChange={values => setFilterValues(values)}
      />
    </Paper>
  )
}
export default CommunicationsHeader