import React from 'react'
import PortfolioIcon from 'components/PortfolioIcon'
import { Paper } from '@material-ui/core'

export default {
  title: 'Portfolio icons',
  component: PortfolioIcon,
}

export const Default = () => {
  return (
    <Paper style={{ padding: 16, display: 'flex', flexDirection: 'column' }}>
      <span>
        Building: <PortfolioIcon portfolio='Building' />
      </span>
      <span>
        Contents: <PortfolioIcon portfolio='Contents' />
      </span>
      <span>
        Restoration: <PortfolioIcon portfolio='Restoration' />
      </span>
    </Paper>
  )
}