import React from 'react'
import Paper from 'components/Paper'

export default {
  title: 'Paper',
  component: Paper,
}

export const Default = () => {
  return (
    <Paper title='Paper title'>
      Some content
    </Paper>
  )
}

export const Loading = () => {
  return (
    <Paper title='Paper title' loading={true}>
      Some content
    </Paper>
  )
}