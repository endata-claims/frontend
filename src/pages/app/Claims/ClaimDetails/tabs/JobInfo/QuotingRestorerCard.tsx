import React from 'react'
import Paper from 'components/Paper'
import { Grid } from '@material-ui/core'

import renderField from './renderField'
import CheckboxGroupField from 'components/Formik/CheckboxGroupField'

import { gql } from '@apollo/client'
import { JobInfoQuery } from 'generated/graphql'
gql`
  fragment JobInfo_QuotingRestorerCardFragment on Query {
    quotingRestorers: claimFilterOptions(where: $whereQuotingRestorer) {
      label: name
      value
    }
  }
`

type ClaimDetailsCardProps = {
  optionData?: JobInfoQuery
  claim?: any
}
export default ({ optionData, claim }: ClaimDetailsCardProps) => {
  // TODO: change to strict compare !== when the api is fixed
  // eslint-disable-next-line
  const options = optionData?.quotingRestorers?.filter(option => option?.value != claim?.restoration?.scopingSupplier?.companyId)

  return (
    <Paper title='Quoting Builders'>
      <Grid container spacing={3}>
        {[
          {
            xs: 12,
            component: CheckboxGroupField,
            name: 'portfolios[2].quotingSupplierIds',
            options: options,
            maxHeight: '12rem'
          },
        ].map(renderField)}
      </Grid>
    </Paper>
  )
}