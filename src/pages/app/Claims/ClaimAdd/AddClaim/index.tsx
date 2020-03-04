import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Grid, Button } from '@material-ui/core'
import { Formik, Form, useFormikContext } from 'formik'

import CustomerDetailsCard from './CustomerDetailsCard'
import ClaimDetailsCard from './ClaimDetailsCard'
import QuotingBuildersCard from './QuotingBuildersCard'
import QuotingRestorersCard from './QuotingRestorersCard'
import ClaimDescriptionCard from './ClaimDescriptionCard'

import gql from 'graphql-tag'
import { useAddClaimRootQuery, PortfolioType } from 'generated/graphql' // useAddClaimMutation

gql`
  mutation AddClaim($input: ClaimJobCreate!) {
    createClaimJob(input: $input) {
      success
      messages
      fieldErrors {
        fieldName
        level
        message
      }
      result {
        claimId
      }
    }
  }
`

export default () => {
  const { id } = useParams()
  const companyId = id ? parseInt(id) : 0

  // const [addClaim] = useAddClaimMutation()

  return (
    <Formik
      initialValues={{
        claimDescription: '',
        meta: {
          portfolio: [],
          companyName: '',
          fnol: new Date().toLocaleDateString(),
          toProvideSiteReport: true
        },
        refNumber: '',
        contentsRefNum: '',
        insurerId: companyId,
        casemanagerId: '',
        brcId: '',
        homeAssessorId: '',
        visitTypeID: '',
        externalLossAdjusterId: '',
        riskname: '',
        additionalRefNumber: '',
        requireCustomLogin: false,
        customLoginEmail: '',
        policyTypeId: '',
        policyCoverId: '',
        incidentDetail: {
          eventTypeId: '',
          catCodeId: '',
          habitableProperty: true,
          asbestos: false,
          hold: true,
          makeSafeRequired: false,
          incidentDate: new Date(),
          category: '',
          riskAddress: {
            line1: '',
            suburb: '',
            state: '',
            postcode: '',
          }
        },
        insured: {
          name: '',
          phone1: '',
          phone2: '',
          salutation: '',
          email: '',
        },
        portfolios: [
          {
            portfolioType: 'Building',
            // toProvideSiteReport: true,
            sumInsured: '',
            excessValue: '',
            toCollectExcess: false,
            scopingSupplierId: '',
            quotingSupplierIds: [],
          },
          {
            portfolioType: 'Contents',
            // toProvideSiteReport: true,
            sumInsured: '',
            excessValue: '',
            toCollectExcess: false,
            scopingSupplierId: 0
          },
          {
            portfolioType: 'Restoration',
            // toProvideSiteReport: true,
            sumInsured: '',
            excessValue: '',
            toCollectExcess: false,
            scopingSupplierId: '',
            quotingSupplierIds: [],
          },
        ],
      }}
      validate={values => {
        let errors: any = {}

        // SUPPLIER REQUIRED
        if (!values.meta.portfolio.length) {
          if (!errors.meta) errors.meta = {}
          errors.meta.portfolio = 'Please choose at least one'
        }

        // Claim description
        if (!values.claimDescription || values.claimDescription === '<p><br></p>') errors.claimDescription = 'Required!'

        return errors
      }}
      onSubmit={async (values, { setSubmitting }) => {
        console.log(values)

        const input = (({ meta, ...props }) => ({ ...props }))(values)
        console.log(input)
        // const res = await addClaim({ variables: { input: values }})
        // console.log(res)
        setSubmitting(false)
      }}
      validateOnChange={false}
    >
      <AddClaimForm />
    </Formik>
  )
}

gql`
  query AddClaimRoot (
    $companyWhere: ENDataPortfolioKey!
    $managersWhere: ClaimJobFilter
    $adjustersWhere: ClaimJobFilter
    $buildersWhere: ClaimJobFilter
    $restorersWhere: ClaimJobFilter
    $eventTypeWhere: ClaimJobFilter
    $catCodesWhere: ClaimJobFilter
    $policyTypesWhere: ClaimJobFilter
    $policyCoversWhere: ClaimJobFilter
    $internalAssessorsWhere: ClaimJobFilter
  ) {
    ...CustomerDetailsCardFragment
    ...ClaimDetailsCardFragment
    ...QuotingBuildersCardFragment
    ...QuotingRestorersCardFragment

    company(where: $companyWhere) {
      ...CustomerDetailsCardMetaFragment
      ...ClaimDetailsCardMetaFragment
      ...QuotingBuildersCardMetaFragment
    }
  }
`
const AddClaimForm = () => {
  const { id } = useParams()
  const companyId = id ? parseInt(id) : 0 as any

  const { values, setFieldValue } = useFormikContext()
  const formValues = values as any
  const selectedPostCode = String(formValues?.incidentDetail.riskAddress.postcode)

  const toProvideSiteReport = formValues.meta.toProvideSiteReport
  React.useEffect(() => {
    setFieldValue('portfolios[0].toProvideSiteReport', toProvideSiteReport)
    setFieldValue('portfolios[1].toProvideSiteReport', toProvideSiteReport)
    setFieldValue('portfolios[2].toProvideSiteReport', toProvideSiteReport)
  }, [toProvideSiteReport, setFieldValue])

  const { data, loading } = useAddClaimRootQuery({
    variables: {
      catCodesWhere: { subject: 'catCodes', insurers: [companyId] },
      companyWhere: { id: companyId, portfolioType: PortfolioType.Building },
      managersWhere: { subject: 'managers', insurers: companyId },
      adjustersWhere: { subject: 'adjusters', insurers: companyId, postcode: selectedPostCode },
      buildersWhere: { subject: 'suppliers', insurers: companyId, portfolios: [PortfolioType.Building], postcode: selectedPostCode },
      restorersWhere: { subject: 'suppliers', insurers: companyId, portfolios: [PortfolioType.Restoration], postcode: selectedPostCode },
      eventTypeWhere: { subject: 'eventTypes', insurers: companyId },
      policyTypesWhere: { subject: 'policyTypes', insurers: companyId },
      policyCoversWhere: { subject: 'policyCovers', insurers: companyId },
      internalAssessorsWhere: { subject: 'internalAssessors', insurers: companyId }
    }
  })
  // handle changes for portfolio selection

  return (
    <Form>
      <Container maxWidth='xl' style={{ marginTop: 8 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CustomerDetailsCard company={data?.company} />
          </Grid>
          <Grid item xs={12}>
            <ClaimDetailsCard data={data} loading={loading} />
          </Grid>
          <Grid item xs={6}>
            <QuotingBuildersCard data={data} loading={loading} />
          </Grid>
          <Grid item xs={6}>
            <QuotingRestorersCard data={data} loading={loading} />
          </Grid>
          <Grid item xs={12}>
            <ClaimDescriptionCard />
          </Grid>
          <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button color='primary' variant='contained' type='submit' size='large'>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Form>
  )
}