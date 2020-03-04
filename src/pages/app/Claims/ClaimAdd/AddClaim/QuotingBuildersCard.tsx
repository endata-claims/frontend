import React from 'react'
import Paper from 'components/Paper'
import { useFormikContext } from 'formik'
import { CircularProgress } from '@material-ui/core'
import CheckboxGroupField from 'components/Formik/CheckboxGroupField'

import { gql } from '@apollo/client'
import { AddClaimRootQuery } from 'generated/graphql'
export const QuotingBuildersCardFragment = gql`
  fragment QuotingBuildersCardFragment on Query {
    builders: claimFilterOptions(where: $buildersWhere){
      label: name
      value
    }
  }
  fragment QuotingBuildersCardMetaFragment on CompanyProfile {
    quotesperclaim
  }
`

type QuotingBuildersCardProps = {
  data?: AddClaimRootQuery
  loading?: boolean
}
const QuotingBuildersCard: React.FC<QuotingBuildersCardProps> = ({ data, loading }) => {
  const { values, setFieldValue } = useFormikContext()
  const formValues = values as any

  const notAbleToSelect = !formValues.meta.portfolio.includes('Building') || !formValues.incidentDetail.riskAddress.postcode
  const noSuppliers = !data?.builders?.length
  const supplierOptions = data?.builders as any
  const supplierOptionsString = JSON.stringify(supplierOptions)

  React.useEffect(() => {
    setFieldValue('portfolios[0].quotingSupplierIds', [])
  }, [supplierOptionsString, setFieldValue])

  const quotesperclaim = data?.company?.quotesperclaim
  const selectedSuppliers = formValues.portfolios[0].quotingSupplierIds
  React.useEffect(() => {
    if (!notAbleToSelect && quotesperclaim && !selectedSuppliers.length) {
      const defaultSuppliers = supplierOptions.slice(0, 2).map(({ value }: any) => value)
      setFieldValue('portfolios[0].quotingSupplierIds', defaultSuppliers)
    }
  // TODO
  // eslint-disable-next-line
  }, [notAbleToSelect, quotesperclaim, selectedSuppliers, setFieldValue, supplierOptionsString])

  return (
    <Paper title='Quoting Builders'>
      {
        loading ? <CircularProgress /> :
        notAbleToSelect ? <>Within Customer Details section, please select Supplier Required and input postcode</> :
        noSuppliers ? <>No builder found, please try changing postcode</> :
        <CheckboxGroupField
          name='portfolios[0].quotingSupplierIds'
          options={supplierOptions}
          maxHeight='15rem'
        />
      }
    </Paper>
  )
}
export default QuotingBuildersCard