import React from 'react'
import { CircularProgress, Paper, Button } from '@material-ui/core'
import { useClaimActions } from 'pages/app/Claims/ClaimDetails/actions/ClaimActionProvider'

interface TabLayoutProps {
  loading?: boolean
  actions: any
  body: any
}
const TabLayout: React.FC<TabLayoutProps> = ({ loading, actions, body }) => {
  const { nextStep } = useClaimActions()

  if (loading) return (
    <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CircularProgress />
    </div>
  )

  return (
    <div className='tab-layout' style={{ height: '100%', marginTop: 8 }}>
      <Paper style={{ padding: 8, display: 'flex', marginBottom: 4 }}>
        <Button variant='outlined' color='primary' size='large' onClick={nextStep.open}>
          Next Step
        </Button>
        <div style={{ flexGrow: 1 }} />
        {actions.map(({ label, unMountOn, ...props }: any, index: number) => {
          if(unMountOn) return null

          return (
            <Button
              key={index}
              style={{ marginRight: 8 }}
              size='large'
              color='primary'
              variant='outlined'
              {...props}
            >
              {label}
            </Button>
          )
        })}
      </Paper>
      {body}
    </div>
  )
}
export default TabLayout