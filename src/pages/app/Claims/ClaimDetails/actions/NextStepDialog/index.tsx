import React from 'react'
import { Dialog, CircularProgress, DialogActions, Button, DialogContent, Grid } from '@material-ui/core'
import { useClaimMeta } from '../../ClaimMetaContext'
import PortfolioIcon from 'components/PortfolioIcon'
import Info from 'components/Info'

import { gql } from '@apollo/client'
import { useNextStepDialogQuery } from 'generated/graphql'
gql`
  query NextStepDialog($where: ENDataEntityKey!) {
    nextSteps: claimNextStep(where: $where) {
      statusName
      description
      nextStep
      portfolioType
    }
  }
`
export default ({ open, handleClose }: any) => {
  const claimMeta = useClaimMeta()
  const claimId = claimMeta?.claim?.claimId ?? 0
  const { data, loading } = useNextStepDialogQuery({
    skip: !open,
    variables: { where: { id: String(claimId) }},
  })

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ style: { minWidth: '40%', maxWidth: '65%' }}}>
      <DialogContent>
        {loading && <CircularProgress />}
        {!data?.nextSteps?.length ? null : (
          <Grid container spacing={4}>
            {data.nextSteps.map((step, index) => (
              <Grid item xs key={index}>
                {step?.portfolioType && <PortfolioIcon portfolio={step?.portfolioType}
                  style={{ margin: '0 auto 20px auto', display: 'flex', fontSize: '2.5rem' }}
                />}
                <Info label={step?.statusName} value={step?.description} rowsMax={10} fullWidth />
                <Info label='Next Step' value={step?.nextStep} rowsMax={10} fullWidth />
              </Grid>
            ))}
          </Grid>
        )}
      </DialogContent>
      <DialogActions>
        <Button color='primary' onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}