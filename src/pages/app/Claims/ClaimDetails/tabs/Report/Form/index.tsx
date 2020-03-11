import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import ReportCard from './FormCard'

export default ({ cards, readOnly }: any) => {
  const classes = useStyles()

  if (!cards) return null
  const sortedCards = cards.slice().sort((a: any, b: any) => a.order - b.order)

  return (
    <Grid className={classes.root} container spacing={2}>
      {sortedCards.map(({ id, grid, title, fields }: any) => (
        <Grid item xs={grid} key={id}>
          <ReportCard
            title={title}
            fields={fields}
            readOnly={readOnly}
          />
        </Grid>
      ))}
    </Grid>
  )
}

const useStyles = makeStyles({
  root: {
    marginTop: 8,
    height: 'calc(95% - 52px - 8px)',
    overflow: 'auto',
  },
})