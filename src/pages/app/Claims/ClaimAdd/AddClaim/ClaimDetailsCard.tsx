import React from 'react'
import Paper from 'components/Paper'
import { Grid } from '@material-ui/core'
import { gql } from '@apollo/client'

import renderField from './renderField'
import DateField from 'components/Formik/DateField'
import InfoField from 'components/Formik/InfoField'
import ComboBoxField from 'components/Formik/ComboBoxField'
import SwitchField from 'components/Formik/SwitchField'
import RefNumberField from 'components/FormikCustom/RefNumberField'
import MoneyField from 'components/FormikCustom/MoneyField'

import EventIcon from '@material-ui/icons/Event'
import BusinessIcon  from '@material-ui/icons/Business'
import LinkIcon from '@material-ui/icons/Link'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'
import HomeIcon from '@material-ui/icons/Home'
import RestorePageIcon from '@material-ui/icons/RestorePage'
import FaceIcon from '@material-ui/icons/Face'

import { AddClaimRootQuery } from 'generated/graphql'
import { useFormikContext } from 'formik'

export const ClaimDetailsCardFragment = gql`
  fragment ClaimDetailsCardFragment on Query {
    me: currentUser { userType }
    managers: claimFilterOptions(where: $managersWhere) { label: name value }
    adjusters: claimFilterOptions(where: $adjustersWhere) { label: name value }
    builders: claimFilterOptions(where: $buildersWhere) { label: name value }
    restorers: claimFilterOptions(where: $restorersWhere) { label: name value }
    eventTypes: claimFilterOptions(where: $eventTypeWhere) { label: name value }
    catCodes: claimFilterOptions(where: $catCodesWhere) { label: name value }
    policyTypes: claimFilterOptions(where: $policyTypesWhere) { label: name value }
    policyCovers: claimFilterOptions(where: $policyCoversWhere) { label: name value }
    internalAssessors: claimFilterOptions(where: $internalAssessorsWhere) { label: name value }
  }
  fragment ClaimDetailsCardMetaFragment on CompanyProfile {
    contentsref
    quickrepair
    policyTypeSuppliersView
    policyCoverSuppliersView
    isToProvideSiteReportView
    useInternalAssessor
    cm2nd
    enableMultipleRisks
  }
`

type ClaimDetailsCardProps = {
  data?: AddClaimRootQuery
  loading?: Boolean
}
export default ({ data, loading }: ClaimDetailsCardProps) => {
  const { values, setFieldValue } = useFormikContext()
  const formValues = values as any

  const hasBuilding = formValues?.meta.portfolio.includes('Building')
  const hasContents = formValues?.meta.portfolio.includes('Contents')
  const hasRestoration = formValues?.meta.portfolio.includes('Restoration')
  const selectedPostcode = formValues?.incidentDetail.riskAddress.postcode

  const companyName = data?.company?.companyName
  React.useEffect(() => {
    setFieldValue('meta.companyName', companyName)
  }, [companyName, setFieldValue])

  React.useEffect(() => {
    if (data && data?.catCodes?.length && !formValues?.incidentDetail.catCodeId) {
      const defaultCatCode = data.catCodes[0] ? parseInt(data.catCodes[0].value) : ''

      setFieldValue('incidentDetail.catCodeId', defaultCatCode)
    }
  }, [data, formValues, setFieldValue])

  const row1 = [
    {
      component: InfoField,
      label: 'Insurance Company',
      name: 'meta.companyName',
      startAdornment: <BusinessIcon />,
      variant: 'standard'
    },
    {
      component: DateField,
      label: 'Incident Date',
      name: 'incidentDetail.incidentDate',
      required: true,
      startAdornment: <EventIcon />
    },
    {
      component: ComboBoxField,
      label: 'Case Manager',
      name: 'casemanagerId',
      options: data?.managers,
      required: true,
      startAdornment: <EventIcon />,
      loading,
    },
    {
      component: ComboBoxField,
      label: 'External Loss Adjusting Firm',
      name: 'externalLossAdjusterId',
      options: data?.adjusters,
      startAdornment: <EventIcon />,
      loading,
    },
  ]

  const row2 = [
    {
      component: RefNumberField,
      label: 'Insurance Ref#',
      name: 'refNumber',
      required: true,
      startAdornment: <LinkIcon />
    },
    {
      component: RefNumberField,
      label: 'Contents Ref#',
      name: 'contentsRefNum',
      unMountOn: !hasBuilding || !data?.company?.contentsref,
      startAdornment: <LinkIcon />
    },
    {
      component: ComboBoxField,
      label: 'Builder',
      name: 'portfolios[0].scopingSupplierId',
      options: data?.builders,
      disabled: !hasBuilding || !selectedPostcode,
      required: true,
      startAdornment: <EventIcon />,
      loading,
    },
    {
      component: ComboBoxField,
      label: 'Restorer',
      name: 'portfolios[2].scopingSupplierId',
      options: data?.restorers,
      disabled: !hasRestoration || !selectedPostcode,
      required: true,
      startAdornment: <EventIcon />,
      loading,
    },
  ]
  const row3 = [
    {
      component: InfoField,
      label: 'FNOL',
      name: 'meta.fnol',
      startAdornment: <EventIcon />,
      variant: 'standard'
    },
    {
      component: SwitchField,
      label: 'Scope & Repair (Quick Repair)',
      name: 'incidentDetail.hold',
      unMountOn: !data?.company?.quickrepair
    },
    {
      md: 2,
      component: SwitchField,
      label: 'Builder Collect Excess',
      name: 'portfolios[0].toCollectExcess',
      disabled: !hasBuilding,
    },
    {
      md: 2,
      component: MoneyField, fixedDecimal: false, decimalScale: 0, format: '#########',
      label: 'Excess',
      name: 'portfolios[0].excessValue',
      required: hasBuilding,
      disabled: !hasBuilding,
    },
    {
      md: 2,
      component: MoneyField, fixedDecimal: false, decimalScale: 0, format: '#########',
      label: 'Sum Insured',
      name: 'portfolios[0].sumInsured',
      required: hasBuilding,
      disabled: !hasBuilding,
    }
  ]
  const row4 = [
    {
      component: ComboBoxField,
      label: 'Event Type',
      name: 'incidentDetail.eventTypeId',
      options: data?.eventTypes,
      required: true,
      startAdornment: <EventIcon />,
      loading,
    },
    {
      component: ComboBoxField,
      label: 'Catastrophe Code',
      name: 'incidentDetail.catCodeId',
      options: data?.catCodes,
      required: true,
      startAdornment: <WhatshotIcon />,
      loading,
    },
    {
      md: 2,
      component: SwitchField,
      label: 'Contents Provider Collect Excess',
      name: 'portfolios[1].toCollectExcess',
      disabled: !hasContents,
    },
    {
      md: 2,
      component: MoneyField, fixedDecimal: false, decimalScale: 0, format: '#########',
      label: 'Excess',
      name: 'portfolios[1].excessValue',
      required: hasContents,
      disabled: !hasContents,
    },
    {
      md: 2,
      component: MoneyField, fixedDecimal: false, decimalScale: 0, format: '#########',
      label: 'Sum Insured',
      name: 'portfolios[1].sumInsured',
      required: hasContents,
      disabled: !hasContents,
    }
  ]
  const row5 = [
    {
      component: ComboBoxField,
      label: 'Distributor',
      name: 'policyTypeId',
      options: data?.policyTypes,
      unMountOn: !data?.company?.policyTypeSuppliersView,
      required: true,
      startAdornment: <AssignmentTurnedInIcon />,
      loading,
    },
    {
      component: ComboBoxField,
      label: 'PDS Reference',
      name: 'policyCoverId',
      options: data?.policyCovers,
      unMountOn: !data?.company?.policyCoverSuppliersView,
      required: data?.company?.policyCoverSuppliersView,
      startAdornment: <AssignmentTurnedInIcon />,
      loading,
    },
    {
      md: 2,
      component: SwitchField,
      label: 'Restorer Collect Excess',
      name: 'portfolios[2].toCollectExcess',
      disabled: !hasRestoration,
    },
    {
      md: 2,
      component: MoneyField, fixedDecimal: false, decimalScale: 0, format: '#########',
      label: 'Excess',
      name: 'portfolios[2].excessValue',
      required: hasRestoration,
      disabled: !hasRestoration,
    },
    {
      md: 2,
      component: MoneyField, fixedDecimal: false, decimalScale: 0, format: '#########',
      label: 'Sum Insured',
      name: 'portfolios[2].sumInsured',
      required: hasRestoration,
      disabled: !hasRestoration,
    }
  ]

  const row6 = [
    {
      component: SwitchField,
      label: 'Make Safe Required',
      name: 'incidentDetail.makeSafeRequired'
    },
    {
      component: SwitchField,
      label: 'Supplier(s) to provide Site Report and Scope of Works',
      name: 'meta.toProvideSiteReport',
      unMountOn: !data?.company?.isToProvideSiteReportView
    },
    {
      label: 'Additional Ref#',
      name: 'additionalRefNumber',
      startAdornment: <LinkIcon />
    },
    {
      component: ComboBoxField,
      label: 'Specialist Review',
      name: 'homeAssessorId',
      options: data?.internalAssessors,
      unMountOn: !data?.company?.useInternalAssessor,
      startAdornment: <HomeIcon />,
      loading,
    }
  ]

  const row7 = [
    {
      component: ComboBoxField,
      label: 'BC/BRC/Loss Adjuster',
      name: 'brcId',
      options: data?.managers,
      unMountOn: !data?.company?.cm2nd || data.me?.userType !== 'Administrator',
      startAdornment: <RestorePageIcon />,
      loading,
    },
    {
      label: 'Risk Name',
      name: 'riskname',
      unMountOn: !data?.company?.enableMultipleRisks,
      startAdornment: <FaceIcon />
    }
  ]

  return (
    <Paper title='Claim Details'>
      <Grid container spacing={3}>
        {[
          ...row1,
          ...row2,
          ...row3,
          ...row4,
          ...row5,
          ...row6,
          ...row7,
        ].map(renderField)
      }
      </Grid>
    </Paper>
  )
}

