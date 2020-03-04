import React from 'react'

import { ComboBoxFieldOption } from 'components/Formik/ComboBoxField'

import TextField from 'components/Formik/TextField'
const ComboBoxField = React.lazy(() => import('components/Formik/ComboBoxField'))

export interface FilterProps {
  type: string // 'Select'

  label?: string | null
  name: string

  options?: ComboBoxFieldOption[]
}
export interface FilterOption {
  group?: string
  label: string
  value: string
}

const FilterWrapper: React.FC<FilterProps> = (props) => {
  return (
    <React.Suspense fallback={null}>
      <Filter {...props} />
    </React.Suspense>
  )
}
const Filter: React.FC<FilterProps> = ({ type, ...props }) => {
  // const Comp = React.useMemo(() => React.lazy(() => import(`components/Formik/${type}Field`)), [type])
  // if(!Comp) return null

  // return (
  //   <Comp {...props} />
  // )

  switch (type) {
    case 'ComboBox': return (
      <ComboBoxField {...props} />
    )

    default: return (
      <TextField {...props} />
    )
  }
}

export default FilterWrapper