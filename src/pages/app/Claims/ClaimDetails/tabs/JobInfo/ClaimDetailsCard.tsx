import React from 'react'
import Paper from 'components/Paper'
import { Grid } from '@material-ui/core'

import renderField from './renderField'
import InfoField from 'components/Formik/InfoField'
import DateField from 'components/Formik/DateField'
import ComboBoxField from 'components/Formik/ComboBoxField'
import RefNumberField from 'components/FormikCustom/RefNumberField'
import SwitchField from 'components/Formik/SwitchField'
import MoneyField from 'components/FormikCustom/MoneyField'

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
import LinkIcon from '@material-ui/icons/Link'
import FaceIcon from '@material-ui/icons/Face'

import { gql } from '@apollo/client'
import { JobInfoQuery } from 'generated/graphql'
import { useClaimMeta } from '../../ClaimMetaContext'

gql`
  fragment JobInfo_ClaimDetailsCardFragment on Query {
    managers: claimFilterOptions(where: $managersWhere) {
      label: name
      value
    }
    externalAdjusters: claimFilterOptions(where: $externalAdjustersWhere) {
      label: name
      value
    }
    eventTypes: claimFilterOptions(where: $eventTypeWhere) {
      label: name
      value
    }
    catCodes: claimFilterOptions(where: $catCodesWhere) {
      label: name
      value
    }
    policyTypes: claimFilterOptions(where: $policyTypesWhere) {
      label: name
      value
    }
    policyCovers: claimFilterOptions(where: $policyCoversWhere) {
      label: name
      value
    }
    internalAssessors: claimFilterOptions(where: $internalAssessorsWhere) {
      label: name
      value
    }
  }
`
gql`
  fragment JobInfo_ClaimDetailsCardMetaFragment on ClaimJob {
    hasContents
    insurer {
      contentsref
      quickrepair
      policyTypeSuppliersView
      policyCoverSuppliersView
      enableMultipleRisks
      additionalRefNo
      useInternalAssessor
      cm2nd
    }

    building { toCollectExcess excessValue }
    contents { toCollectExcess excessValue }
    restoration { toCollectExcess excessValue }
  }
`

type ClaimDetailsCardProps = {
  optionData?: JobInfoQuery
}
export default ({ optionData }: ClaimDetailsCardProps) => {
  const claimMeta = useClaimMeta()

  const isCollectBuildingExcess = claimMeta?.claim?.building?.toCollectExcess !== null
  const isCollectContentsExcess = claimMeta?.claim?.contents?.toCollectExcess !== null
  const isCollectRestorationExcess = claimMeta?.claim?.restoration?.toCollectExcess !== null

  return (
    <Paper title='Claim Details'>
      <Grid container spacing={3}>
        {[
          {
            component: InfoField,
            label: 'Insurance Company',
            name: 'meta.insurance'
          },
          {
            component: DateField,
            label: 'Incident Date',
            name: 'incidentDate',
            required: true,
            maxDate: new Date()
          },
          {
            component: ComboBoxField,
            label: 'Case Manager',
            name: 'casemanagerId',
            required: true,
            options: optionData?.managers
          },
          {
            component: ComboBoxField,
            label: 'External Loss Adjusting Firm',
            name: 'externalLossAdjusterId',
            options: optionData?.externalAdjusters,
            startAdornment: <AssignmentIndIcon />
          },

          {
            component: RefNumberField,
            label: 'Insurance Ref #',
            name: 'refNumber',
            required: true,
            startAdornment: <LinkIcon />
          },
          {
            component: RefNumberField,
            label: 'Contents Ref #',
            name: 'contentsRefNum',
            startAdornment: <LinkIcon />,
            unMountOn: !claimMeta?.claim?.insurer?.contentsref || !claimMeta?.claim?.hasContents,
          },
          {
            component: InfoField,
            label: 'Builder Allocated',
            name: 'meta.builderAllocated'
          },
          {
            component: InfoField,
            label: 'Restorer Allocated',
            name: 'meta.restorerAllocated'
          },

          {
            component: InfoField,
            label: 'FNOL',
            name: 'meta.fnol'
          },
          {
            component: SwitchField,
            label: 'Scope & Repair (Quick Repair)',
            name: 'hold',
            unMountOn: !claimMeta?.claim?.insurer?.quickrepair
          },
          {
            xs: 2,
            component: SwitchField,
            label: 'Builder Collect Excess',
            name: 'portfolios[0].toCollectExcess',
            disabled: !isCollectBuildingExcess
          },
          {
            xs: 2,
            component: MoneyField,
            label: 'Excess',
            name: 'portfolios[0].excessValue',
            disabled: !isCollectBuildingExcess,
            required: isCollectBuildingExcess,
            fixedDecimal: false, decimalScale: 0, format: '#########',
          },
          {
            xs: 2,
            component: MoneyField,
            label: 'Sum Insured',
            name: 'portfolios[0].sumInsured',
            disabled: !isCollectBuildingExcess,
            required: isCollectBuildingExcess,
            fixedDecimal: false, decimalScale: 0, format: '#########',
          },

          {
            component: ComboBoxField,
            label: 'Event Type',
            name: 'eventTypeId',
            options: optionData?.eventTypes,
            required: true,
          },
          {
            component: ComboBoxField,
            label: 'Catastrophe Code',
            name: 'catCodeId',
            options: optionData?.catCodes,
            required: true,
          },
          {
            xs: 2,
            component: SwitchField,
            label: 'Contents Provider Collect Excess',
            name: 'portfolios[1].toCollectExcess',
            disabled: !isCollectContentsExcess
          },
          {
            xs: 2,
            component: MoneyField,
            label: 'Excess',
            name: 'portfolios[1].excessValue',
            required: isCollectContentsExcess,
            disabled: !isCollectContentsExcess,
            fixedDecimal: false, decimalScale: 0, format: '#########',
          },
          {
            xs: 2,
            component: MoneyField,
            label: 'Sum Insured',
            name: 'portfolios[1].sumInsured',
            required: isCollectContentsExcess,
            disabled: !isCollectContentsExcess,
            fixedDecimal: false, decimalScale: 0, format: '#########',
          },

          {
            component: ComboBoxField,
            label: 'Distributor',
            name: 'policyTypeId',
            options: optionData?.policyTypes,
            required: true,
            unMountOn: !claimMeta?.claim?.insurer?.policyTypeSuppliersView
          },
          {
            component: ComboBoxField,
            label: 'PDS Reference',
            name: 'policyCoverId',
            options: optionData?.policyCovers,
            required: true,
            unMountOn: !claimMeta?.claim?.insurer?.policyCoverSuppliersView,
          },
          {
            xs: 2,
            component: SwitchField,
            label: 'Restorer Collect Excess',
            name: 'portfolios[2].toCollectExcess',
            disabled: !isCollectRestorationExcess
          },
          {
            xs: 2,
            component: MoneyField,
            label: 'Excess',
            name: 'portfolios[2].excessValue',
            required: isCollectRestorationExcess,
            disabled: !isCollectRestorationExcess,
            fixedDecimal: false, decimalScale: 0, format: '#########',
          },
          {
            xs: 2,
            component: MoneyField,
            label: 'Sum Insured',
            name: 'portfolios[2].sumInsured',
            required: isCollectRestorationExcess,
            disabled: !isCollectRestorationExcess,
            fixedDecimal: false, decimalScale: 0, format: '#########',
          },

          {
            label: 'Risk Name',
            name: 'riskname',
            unMountOn: !claimMeta?.claim?.insurer?.enableMultipleRisks,
            startAdornment: <FaceIcon />,
          },
          {
            label: 'Additional Ref #',
            name: 'additionalRefNumber',
            unMountOn: !claimMeta?.claim?.insurer?.additionalRefNo,
            startAdornment: <LinkIcon />,
          },
          {
            component: ComboBoxField,
            label: 'Specialist Review',
            name: 'homeAssessorId',
            options: optionData?.internalAssessors,
            unMountOn: !claimMeta?.claim?.insurer?.useInternalAssessor,
          },
          {
            component: ComboBoxField,
            label: 'BC/ BRC/ Loss Adjuster',
            name: 'brcId',
            options: optionData?.managers,
            unMountOn: !claimMeta?.claim?.insurer?.cm2nd || claimMeta.me?.userType !== 'Administrator'
          }
        ].map(renderField)}
      </Grid>
    </Paper>
  )
}