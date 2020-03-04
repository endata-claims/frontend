import React from 'react'
import { gql } from '@apollo/client'
import { Paper, CircularProgress, Grid, Tooltip, Collapse, IconButton, makeStyles } from '@material-ui/core'
import Info from 'components/Info'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

import { ClaimDetailsQuery } from 'generated/graphql'
import PortfolioIcon from 'components/PortfolioIcon'
export const InfoCardFragment = gql`
  fragment InfoCardDataFragment on ClaimJob {
    insurer { companyName }
    refNumber
    insured { name }
    incidentDetail {
      riskAddress { line1 suburb state postcode }
    }
    _incidentAddress @client
    insured { name phone1 phone2 phone3 email }
    _insuredPhone @client
    lodgeDate
    incidentDetail { eventType { eventName }}
    incidentDetail { cATCode { cATCodeName }}

    policyType { policyTypeName }
    policyCover { policyCoverName }
    insurer { policyTypeSuppliersView policyCoverSuppliersView }

    building {
      claimStatus { statusName }
      scopingSupplier { companyName companyPhone1 companyPhone2 }
      authorisedSupplier { companyName companyPhone1 companyPhone2 }
      jobSuppliers {quote { supplier { companyName } quoteStatus: quoteJobStatus { statusName } } }
      toCollectExcess
      excessValue

      _providerAndStatus @client
      _portfolioTooltips @client
    }
    restoration {
      claimStatus { statusName }
      scopingSupplier { companyName companyPhone1 companyPhone2 }
      authorisedSupplier { companyName companyPhone1 companyPhone2 }
      jobSuppliers { quote { supplier { companyName } quoteStatus: quoteJobStatus { statusName } } }
      toCollectExcess
      excessValue

      _providerAndStatus @client
      _portfolioTooltips @client
    }
    contents {
      portfolioType
      claimStatus { statusName } toCollectExcess excessValue
      _providerAndStatus @client
      _portfolioTooltips @client
    }
  }
`

type InfoCardProps = {
  data?: ClaimDetailsQuery
  loading: boolean
}
export default ({ data, loading }: InfoCardProps) => {
  const classes = useStyles()

  const fields = [
    { label: 'Insurance Company', value: data?.claimJob?.insurer?.companyName },
    { label: 'Insurance Ref #', value: data?.claimJob?.refNumber },
    { label: 'Customer', value: data?.claimJob?.insured?.name },
    { label: 'Property/Risk Address', value: data?.claimJob?._incidentAddress },
    { label: 'Phone(s)', value: data?.claimJob?._insuredPhone },
    {
      label: 'Builder and Status',
      value: data?.claimJob?.building?._providerAndStatus,
      tooltip: data?.claimJob?.building?._portfolioTooltips,
      startAdornment: <PortfolioIcon portfolio='Building' />,
    },
    {
      label: 'Restorer and Status',
      value: data?.claimJob?.restoration?._providerAndStatus,
      tooltip: data?.claimJob?.restoration?._portfolioTooltips,
      startAdornment: <PortfolioIcon portfolio='Restoration' />
    },
    {
      label: 'Contents Status',
      value: data?.claimJob?.contents?._providerAndStatus,
      tooltip: data?.claimJob?.contents?._portfolioTooltips,
      startAdornment: <PortfolioIcon portfolio='Contents' />
    },
    { label: 'FNOL', value: data?.claimJob?.lodgeDate },
    { label: 'Event Type', value: data?.claimJob?.incidentDetail?.eventType?.eventName },
    { label: 'Catastrophe Code', value: data?.claimJob?.incidentDetail?.cATCode?.cATCodeName },
    { label: 'Distributor', value: data?.claimJob?.policyType?.policyTypeName, show: data?.claimJob?.insurer?.policyCoverSuppliersView },
    { label: 'PDS Reference', value: data?.claimJob?.policyCover?.policyCoverName, show: data?.claimJob?.insurer?.policyCoverSuppliersView },
  ]

  const renderFields = (fields: any[]) => {
    return fields.map(({ label, value, tooltip, show = true, ...props }: any) => {
      if (!show) return null

      return (
        <Grid item xs={3} key={label}>
          <Tooltip title={tooltip ?? ''} interactive classes={{ tooltip: classes.tooltip }}>
            <div>
              <Info label={label} value={value} {...props} fullWidth />
            </div>
          </Tooltip>
        </Grid>
      )
    })
  }

  const [collapsed, setCollapsed] = React.useState(true)
  const showRows = fields.slice(0, 8)
  const collapsedRows = fields.slice(8)

  return (
    <Paper style={{ padding: 16, paddingRight: 32, position: 'relative' }}>
      {loading
        ? <CircularProgress />
        : (
          <>
            <Grid container spacing={1} style={{ marginBottom: 4 }}>
              {renderFields(showRows)}
            </Grid>
            {collapsedRows.length && (
              <Collapse in={!collapsed}>
                <Grid container spacing={2}>
                  {renderFields(collapsedRows)}
                </Grid>
              </Collapse>
            )}
            <IconButton
              onClick={() => setCollapsed(previous => !previous)}
              style={{ position: 'absolute', bottom: 0, right: 0 }}
            >
              {collapsed ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </IconButton>
          </>
        )
      }
    </Paper>
  )
}

const useStyles = makeStyles({
  tooltip: {
    whiteSpace: 'pre-line'
  }
})