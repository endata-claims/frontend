import React from 'react'
import { parse } from 'date-fns'
import { gql } from '@apollo/client'
import TabLayout from 'layouts/TabLayout'
import { CircularProgress, Grid } from '@material-ui/core'
import { Formik, Form } from 'formik'
import { ClaimDetailsQuery, useJobInfoQuery, PortfolioType, useJobInfoTabUpdateMutation } from 'generated/graphql'

import ClaimDetailsCard from './ClaimDetailsCard'
import CustomerInfoCard from './CustomerInfoCard'
import PostalAddressCard from './PostalAddressCard'
import TenantInfoCard from './TenantInfoCard'
import ClaimDescriptionCard from './ClaimDescriptionCard'
import QuotingBuilderCard from './QuotingBuilderCard'
import QuotingRestorerCard from './QuotingRestorerCard'
import { useClaimMeta } from '../../ClaimMetaContext'
import { useSnackbar } from 'notistack'

gql`
  fragment JobInfoTabFragment on ClaimJob {
    id
    insurer { companyId companyName }
    incidentDetail { incidentDate }
    caseManager { managerId }
    externalLossAdjuster { companyId }
    refNumber
    contentsRefNum
    # FNOL
    lodgeDate
    # Hold
    incidentDetail { hold }
    incidentDetail { eventType { eventTypeId } }
    incidentDetail { cATCode { cATCodeId } }
    # portfolio
    building { toCollectExcess excessValue sumInsured }
    contents { toCollectExcess excessValue sumInsured }
    restoration { toCollectExcess excessValue sumInsured }
    policyType { policyTypeId }
    policyCover { policyCoverId }
    riskname
    additionalRefNumber
    homeAssessor { assesorId }
    brc { managerId }
    building {
      authorisedSupplier { companyName }
      scopingSupplier { companyId companyName }
      jobSuppliers {
        supplier { companyId companyName }
        quote { supplier { companyId companyName } }
      }
    }
    _allocatedBuilder @client
    restoration {
      authorisedSupplier { companyName }
      scopingSupplier { companyId companyName }
      jobSuppliers {
        supplier { companyId companyName }
        quote { supplier { companyId companyName } }
      }
    }
    _allocatedRestorer @client

    insured {
      salutation name email
      phone1 phone2 phone3 fax
      postalAddress {
        line1 line2 suburb state postcode
      }
    }
    incidentDetail {
      riskAddress { line1 line2 suburb state postcode }
      habitableProperty
      category
    }
    requireCustomLogin
    customLoginEmail

    tenantDetails { name phone1 phone2 phone3 }

    claimDescription
  }
`

gql`
  query JobInfo(
    $managersWhere: ClaimJobFilter
    $externalAdjustersWhere: ClaimJobFilter
    $eventTypeWhere: ClaimJobFilter
    $catCodesWhere: ClaimJobFilter
    $policyTypesWhere: ClaimJobFilter
    $policyCoversWhere: ClaimJobFilter
    $internalAssessorsWhere: ClaimJobFilter
    $whereQuotingBuilder: ClaimJobFilter
    $whereQuotingRestorer: ClaimJobFilter
  ) {
    ...JobInfo_ClaimDetailsCardFragment
    ...JobInfo_QuotingBuilderCardFragment
    ...JobInfo_QuotingRestorerCardFragment
    _states @client {
      label @client
      value @client
    }
    _claimCategories @client {
      label @client
      value @client
    }
  }
`

gql`
  mutation JobInfoTabUpdate($input: ClaimJobInput!, $where: ENDataEntityKey!) {
    updateClaimJob(input: $input, where: $where) {
      success
      messages
      fieldErrors {
        fieldName
        level
        message
      }
    }
  }
`

type JobInfoProps = {
  data?: ClaimDetailsQuery
  loading: boolean
}
export default ({ data, loading }: JobInfoProps) => {
  const [updateClaim] = useJobInfoTabUpdateMutation()
  const claimMeta = useClaimMeta()
  const { enqueueSnackbar } = useSnackbar()

  const insurerId = String(data?.claimJob?.insurer?.companyId ?? 0)
  const { data: optionData } = useJobInfoQuery({ // loading: optionLoading
    variables: {
      managersWhere: { subject: 'managers', insurers: [insurerId] },
      externalAdjustersWhere: { subject: 'adjusters', insurers: [insurerId] },
      eventTypeWhere: { subject: 'eventTypes', insurers: [insurerId] },
      catCodesWhere: { subject: 'catCodes', insurers: [insurerId] },
      policyTypesWhere: { subject: 'policyTypes', insurers: [insurerId]  },
      policyCoversWhere: { subject: 'policyCovers', insurers: [insurerId] },
      internalAssessorsWhere: { subject: 'internalAssessors', insurers: [insurerId] },
      whereQuotingBuilder: {
        subject: 'suppliers',
        portfolios: [PortfolioType.Building],
        insurers: [insurerId],
        postcode: data?.claimJob?.incidentDetail?.riskAddress?.postcode
      },
      whereQuotingRestorer: {
        subject: 'suppliers',
        portfolios: [PortfolioType.Restoration],
        insurers: [insurerId],
        postcode: data?.claimJob?.incidentDetail?.riskAddress?.postcode
      }
    }
  })

  if (loading || !data) return <CircularProgress />
  const claim = data.claimJob

  const riskAddress = claim?.incidentDetail?.riskAddress
  const postalAddress = claim?.insured?.postalAddress

  return (
    <Formik
      initialValues={{
        meta: {
          insurance: claim?.insurer?.companyName,
          builderAllocated: claim?._allocatedBuilder,
          restorerAllocated: claim?._allocatedRestorer,
          fnol: claim?.lodgeDate,
        },
        portfolios: [
          {
            portfolioType: 'Building',
            toCollectExcess: claim?.building?.toCollectExcess ?? null,
            excessValue: claim?.building?.excessValue ?? 0,
            sumInsured: claim?.building?.sumInsured ?? 0,
            quotingSupplierIds: [],
          },
          {
            portfolioType: 'Contents',
            toCollectExcess: claim?.contents?.toCollectExcess ?? null,
            excessValue: claim?.contents?.excessValue ?? 0,
            sumInsured: claim?.contents?.sumInsured ?? 0,
          },
          {
            portfolioType: 'Restoration',
            toCollectExcess: claim?.restoration?.toCollectExcess ?? null,
            excessValue: claim?.restoration?.excessValue ?? 0,
            sumInsured: claim?.restoration?.sumInsured ?? 0,
            quotingSupplierIds: [],
          },
        ],
        incidentDate: parse(claim?.incidentDetail?.incidentDate, 'dd/MM/yyyy', new Date()),
        casemanagerId: claim?.caseManager?.managerId,
        externalLossAdjusterId: claim?.externalLossAdjuster?.companyId,
        refNumber: claim?.refNumber,
        contentsRefNum: claim?.contentsRefNum,
        hold: claim?.incidentDetail?.hold,
        eventTypeId: claim?.incidentDetail?.eventType?.eventTypeId,
        catCodeId: claim?.incidentDetail?.cATCode?.cATCodeId,
        policyTypeId: claim?.policyType?.policyTypeId,
        policyCoverId: claim?.policyCover?.policyCoverId,
        riskname: claim?.riskname,
        additionalRefNumber: claim?.additionalRefNumber,
        homeAssessorId: claim?.homeAssessor?.assesorId,
        brcId: claim?.brc?.managerId,

        insuredSalutation: claim?.insured?.salutation,
        insuredName: claim?.insured?.name,
        insuredEmail: claim?.insured?.email,
        riskAddressLine1: `${riskAddress?.line1}${riskAddress?.line2 ? `, ${riskAddress?.line2}` : ''}`,
        requireCustomLogin: claim?.requireCustomLogin,
        customLoginEmail: claim?.customLoginEmail,
        riskAddressSuburb: riskAddress?.suburb,
        riskAddressState: riskAddress?.state,
        riskAddressPostcode: riskAddress?.postcode,
        habitableProperty: claim?.incidentDetail?.habitableProperty,
        category: claim?.incidentDetail?.category,
        insuredPhone1: claim?.insured?.phone1,
        insuredPhone2: claim?.insured?.phone2,
        insuredPhone3: claim?.insured?.phone3,
        insuredFax: claim?.insured?.fax,
        postalAddressLine1: `${postalAddress?.line1 ?? ''}${postalAddress?.line2 ? `, ${postalAddress?.line2}` : ''}`,
        postalAddressSuburb: postalAddress?.suburb,
        postalAddressState: postalAddress?.state,
        postalAddressPostcode: postalAddress?.postcode,
        tenantName: claim?.tenantDetails?.name,
        tenantPhone1: claim?.tenantDetails?.phone1,
        tenantPhone2: claim?.tenantDetails?.phone2,
        tenantPhone3: claim?.tenantDetails?.phone3,
        claimDescription: claim?.claimDescription || '',
      }}
      onSubmit={async values => {
        const input = (({ meta, ...rest }) => rest)(values)

        const variables = {
          where: {
            id: claim?.id
          },
          input
        }

        // @ts-ignore
        const res = await updateClaim({ variables })
        if (res.data?.updateClaimJob?.messages) enqueueSnackbar(res.data.updateClaimJob.messages[0])

        if (res.data?.updateClaimJob?.success) claimMeta?.claimDetailsRefetch()
      }}
    >
      <Form>
        <TabLayout
          actions={[
            { label: 'Save', type: 'submit' }
          ]}
          body={(
            <Grid container spacing={1}>
              {[
                { card: <ClaimDetailsCard optionData={optionData} /> },
                { card: <CustomerInfoCard optionData={optionData} /> },
                { xs: 6, card: <PostalAddressCard optionData={optionData} /> },
                { xs: 6, card: <TenantInfoCard /> },
                { card: <ClaimDescriptionCard /> },
                { xs: 6, card: <QuotingBuilderCard claim={claim} optionData={optionData} /> },
                { xs: 6, card: <QuotingRestorerCard claim={claim} optionData={optionData} /> },
              ].map(({ xs = 12, card }: any) => (
                <Grid item xs={xs}>
                  {card}
                </Grid>
              ))}
            </Grid>
          )}
        />
      </Form>
    </Formik>
  )
}