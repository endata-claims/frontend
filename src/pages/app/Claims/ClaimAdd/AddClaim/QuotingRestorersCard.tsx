import React from 'react'
import Paper from 'components/Paper'
import { useFormikContext } from 'formik'
import { CircularProgress } from '@material-ui/core'
import CheckboxGroupField from 'components/Formik/CheckboxGroupField'

import { gql } from '@apollo/client'
import { AddClaimRootQuery } from 'generated/graphql'
export const QuotingRestorersCardFragment = gql`
  fragment QuotingRestorersCardFragment on Query {
    restorers: claimFilterOptions(where: $restorersWhere){
      label: name
      value
    }
  }
`

type QuotingRestorersCardProps = {
  data?: AddClaimRootQuery
  loading?: boolean
}
const QuotingRestorersCard: React.FC<QuotingRestorersCardProps> = ({ data, loading }) => {
  const { values, setFieldValue } = useFormikContext()
  const formValues = values as any

  const notAbleToSelect = !formValues.meta.portfolio.includes('Restoration') || !formValues.incidentDetail.riskAddress.postcode
  const noSuppliers = !data?.restorers?.length
  const supplierOptions = data?.restorers as any
  const supplierOptionsString = JSON.stringify(supplierOptions)

  React.useEffect(() => {
    setFieldValue('portfolios[2].quotingSupplierIds', [])
  }, [supplierOptionsString, setFieldValue])

  const quotesperclaim = data?.company?.quotesperclaim
  const selectedSuppliers = formValues.portfolios[2].quotingSupplierIds
  React.useEffect(() => {
    if (!notAbleToSelect && quotesperclaim && !selectedSuppliers.length) {
      const defaultSuppliers = supplierOptions.slice(0, 2).map(({ value }: any) => value)
      setFieldValue('portfolios[2].quotingSupplierIds', defaultSuppliers)
    }
  // TODO
  // eslint-disable-next-line
  }, [notAbleToSelect, quotesperclaim, selectedSuppliers, setFieldValue, supplierOptionsString])

  return (
    <Paper title='Quoting Restorers'>
      {
        loading ? <CircularProgress /> :
        notAbleToSelect ? <>Within Customer Details section, please select Supplier Required and input postcode</> :
        noSuppliers ? <>No restorer found, please try changing postcode</> :
        <CheckboxGroupField
          name='portfolios[2].quotingSupplierIds'
          options={supplierOptions}
          maxHeight='15rem'
        />
      }
    </Paper>
  )
}
export default QuotingRestorersCard