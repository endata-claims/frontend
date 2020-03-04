import React from 'react'
import gql from 'graphql-tag'
import { useChooseCompanyQuery } from 'generated/graphql'
import { Container, TextField, MenuItem } from '@material-ui/core'
import Paper from 'components/Paper'
import { useHistory } from 'react-router-dom'

gql`
  query ChooseCompany {
    claimFilterOptions(where: {subject: "insurers"}) {
      label: name
      value
    }
  }
`

export default () => {
  const { push } = useHistory()
  const redirectIn = React.useCallback((id: string) => push(`/app/claims/add/${id}`), [push])

  const { loading, data } = useChooseCompanyQuery()
  const options = data?.claimFilterOptions
  const [companyId, setCompanyId] = React.useState('')
  const handleInputChange = (e: any) => {
    setCompanyId(e.target.value)
    redirectIn(e.target.value)
  }

  React.useEffect(() => {
    if(options && options.length === 1) {
      options[0] && redirectIn(options[0].value)
    }
  }, [options, redirectIn])

  return (
    <Container maxWidth='sm' style={{ marginTop: 24 }}>
      <Paper style={{ padding: 16 }} title='Select a company' loading={loading}>
        <TextField
          label='Company' name='companyId' value={companyId}
          select required
          fullWidth variant='outlined'
          onChange={handleInputChange}
        >
          {options && options.map(option => (
            <MenuItem value={option?.value} key={option?.value}>
              {option?.label}
            </MenuItem>
          ))}
        </TextField>
      </Paper>
    </Container>
  )
}