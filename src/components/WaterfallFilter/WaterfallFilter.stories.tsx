import React from 'react'

import WaterfallFilter from '.'
import { Paper, Grid } from '@material-ui/core'
import PortfolioFilter, { PortfolioType } from './PortfolioFilter'

export default {
  title: 'Waterfall filter',
}

export const Default = () => {
  const [portfolio, setPortfolio] = React.useState<PortfolioType>('Building')
  const portfolios: PortfolioType[] = ['Building', 'Contents', 'Restoration']

  const [value, setValue] = React.useState(null)
  const groups = [
    { items: [
      { label: 'DMM', value: '1', claimCount: 10, color: '#ececec' },
      { label: 'DMM2', value: '2', claimCount: 12, color: '#ececec' },
    ]},
    { items: [
      { label: 'DMM12', value: '11', claimCount: 10, color: '#ececec' },
      { label: 'DMM22', value: '12', claimCount: 12, color: '#ececec' },
    ]}
  ]

  return (
    <Paper style={{ padding: 16 }}>
      <Grid container spacing={1}>
        <Grid item>
          <PortfolioFilter portfolios={portfolios} value={portfolio} setValue={setPortfolio} />
        </Grid>
        <Grid item xs>
          <WaterfallFilter
            groups={groups}
            value={value}
            setValue={setValue}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}