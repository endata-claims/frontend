import React from 'react'

import { Formik, Form } from 'formik'
import Filter, { FilterProps } from './Filter'
import { Grid, Collapse, IconButton, CircularProgress } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

interface FilterGroupProps {
  loading?: boolean
  firstRowFilters?: number
  filters?: FilterProps[]
  filterRender?: (Component: any, props: any, index: number) => React.ReactElement
  onChange?: (values: any) => void
}
const FilterGroup: React.FC<FilterGroupProps> = ({ filters, loading, ...props }) => {
  if(loading) return (
    <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CircularProgress />
    </div>
  )

  if (!filters) return null
  const initialValues = filters ? getInitialValues(filters) : {}
  console.log(initialValues)

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {({ values }) => (
        <FilterGroupDisplay filters={filters} values={values} {...props} />
      )}
    </Formik>
  )
}

export default FilterGroup

interface FilterGroupDisplayProps extends FilterGroupProps {
  values: any
}
const FilterGroupDisplay: React.FC<FilterGroupDisplayProps> = ({ values, filters, filterRender, firstRowFilters = 6, onChange }) => {
  const [filterMore, setFilterMore] = React.useState(false)

  const changed = Object.values(values).join(', ')
  React.useEffect(() => {
    if (onChange) onChange(values)
    // eslint-disable-next-line
  }, [changed])

  if(!filters) return null

  const firstRow = filters.slice(0, firstRowFilters)
  const secondRow = filters.slice(firstRowFilters)

  const renderFilter = (filter: FilterProps, index: number) => (
    !filterRender
      ? <Filter key={filter.name} {...filter} />
      : filterRender(Filter, filter, index)
  )

  return (
    <Form style={{ width: '100%' }}>
      <Grid container justify='center' alignItems='flex-start'>
        <Grid item xs container>
          <Grid container spacing={2}>
            {firstRow.map(renderFilter)}
          </Grid>
          {secondRow.length ? (
            <Collapse in={filterMore} timeout='auto' unmountOnExit style={{ width: '100%' }}>
              <Grid container spacing={2} style={{ marginTop: 8 }}>
                {secondRow.map((filter, index) => renderFilter(filter, index + firstRowFilters))}
              </Grid>
            </Collapse>
          ) : null}
        </Grid>
        <Grid
          item container
          direction='column' justify='center' alignContent='center'
          style={{ width: 88, padding: 8 }}
        >
          {secondRow.length ? (
            <IconButton onClick={() => setFilterMore(pre => !pre)} style={{ padding: 6, marginLeft: 'auto' }}>
              {filterMore ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </IconButton>
          ) : null}
        </Grid>
      </Grid>
    </Form>
  )
}

const getInitialValues = (filters: FilterProps[]) => {
  return filters.reduce((total: any, current: FilterProps) => {
    const initValue = current.type === 'Select' ? '' : ''

    total[current.name] = initValue
    return total
  }, {})
}