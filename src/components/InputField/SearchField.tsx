import React from 'react'
import { TextField, InputAdornment, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

interface SearchFieldProps {
  label: string
  submit: any
}
const SearchField: React.FC<SearchFieldProps> = ({ label, submit }) => {
  const [value, setValue] = React.useState('')

  return (
    <TextField
      label='Search'
      fullWidth variant='outlined'
      value={value}
      onChange={e => setValue(e.target.value)}
      onKeyPress={e => {
        if (e.key === 'Enter') submit(value)
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton onClick={() => submit(value)}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  )
}
export default SearchField