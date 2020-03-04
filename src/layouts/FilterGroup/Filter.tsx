import React from 'react'

import TextField from 'components/Formik/TextField'
import { ComboBoxFieldOption } from 'components/Formik/ComboBoxField'

const ComboBoxField = React.lazy(() => import('components/Formik/ComboBoxField'))
const MenuItem = React.lazy(() => import('@material-ui/core/MenuItem'))

export interface FilterProps {
  type: string // 'Select'

  label: string
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
const Filter: React.FC<FilterProps> = ({ type, options, ...props }) => {
  switch (type) {
    case 'Autocomplete': return (
      <ComboBoxField {...props} options={options} multiple />
    )

    case 'Select': return (
      <TextField select {...props}>
        {options && options.map((option, index) => (
          <MenuItem key={`${option.value}_${index}`} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    )

    default: return (
      <TextField {...props} />
    )
  }
}

export default FilterWrapper