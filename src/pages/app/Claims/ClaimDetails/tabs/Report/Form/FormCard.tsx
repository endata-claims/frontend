import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Paper from 'components/Paper'
import Grid from '@material-ui/core/Grid'
import FormField from './FormField'

import { gql } from '@apollo/client'
gql`
  fragment FormCardFragment on Card {
    id
    grid
    order
    title
    fields {
      __typename
      id
      grid
      order

      label
      ...on InfoField {
        value
      }
      ...on TextField {
        name
      }
      ...on TextAreaField {
        name
        rows
        rowsMax
      }
      ...on SelectField {
        name
        options { label value }
      }
      ...on SwitchField {
        name
      }
      ...on FileField {
        name
      }
      ...on DateTimeField {
        name
      }
      ... on GroupField {
        name
        fields {
          __typename
          order
          grid
          label
          ...on InfoField {
            value
          }
          ...on TextField {
            name
          }
          ...on TextAreaField {
            name
            rows
            rowsMax
          }
          ...on SelectField {
            name
            options { label value }
          }
          ...on SwitchField {
            name
          }
          ...on FileField {
            name
          }
          ...on DateTimeField {
            name
          }
        }
      }
    }
  }
`

export default ({ title, fields, readOnly }: any) => {
  const classes = useStyles()

  if (!fields) return <>Empty card</>

  const sortedFields = fields.slice().sort((a: any, b: any) => a.order - b.order)

  return (
    <Paper className={classes.paper} title={title}>
      <Grid
        container
        direction='row'
        spacing={2}
        className={classes.fieldRoot}
      >
        {sortedFields.map(({ id, grid, ...props }: any) => (
          <Grid key={id} item xs={grid}>
            <FormField {...props} readOnly={readOnly} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  )

}

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2)
  },
  fieldRoot: {
    marginTop: theme.spacing()
  }
}))