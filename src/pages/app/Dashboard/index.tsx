import React from 'react'
import gql from 'graphql-tag'
import PageLayout from 'layouts/PageLayout'
import DashboardHeader from './DashboardHeader'
import DashboardBody from './DashboardBody'
import { FilterProps } from 'components/FilterGroup/Filter'

import { useDashboardFiltersQuery, useDashboardKpiQuery } from 'generated/graphql'
gql`
  query DashboardFilters {
    currentUser {
      userType
      dashboardFilters {
        ...DashboardHeaderFragment
      }
    }
    dashboardFilters {
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
  query DashboardKpi($where: DashboardWidgetIndex!) {
    dashboardWidgets(where: $where) {
      title
      viewName
      labels
      description
      data {
        dataSetName
        internalFilterName
        legend
        valueDisplay
        valueGroup
        valueUnit
        valueSense
        values
      }
    }
  }
`

export default () => {
  const { data: filterData, loading: filterLoading } = useDashboardFiltersQuery()

  const [filterValues, setFilterValues] = React.useState()
  const dashboardFilters = filterData?.currentUser?.dashboardFilters
  const dashboardFilterString = JSON.stringify(dashboardFilters)
  const filters = React.useMemo(() => dashboardFilters?.map(props => {
    // @ts-ignore
    const [type, multiple]: [string, string] = props?.type?.split('_')

    return {
      ...props,
      type,
      multiple: multiple ? true : false
    }
  }), [dashboardFilterString]) as FilterProps[]

  const role = filterData?.currentUser?.userType
  const dashboardId =
    role === 'Restorer' ? 3 :
    role === 'Builder' ? 2 :
      1

  const mappedWhere = filterValues && Object.fromEntries(Object.entries(filterValues).filter(([, value]) => value))
  console.log(mappedWhere)
  const where = {
    filter: mappedWhere,
    dashboardId
  }

  const { data, loading } = useDashboardKpiQuery({ variables: { where }})

  return (
    <PageLayout
      // header={<>dkm</>}
      header={<DashboardHeader loading={filterLoading} filters={filters} setFilterValues={setFilterValues}  />}
      body={<DashboardBody data={data} loading={loading} filterData={mappedWhere} />}
    />
  )
}