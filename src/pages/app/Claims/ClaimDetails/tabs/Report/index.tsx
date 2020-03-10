import React from 'react'
import TabLayout from 'layouts/TabLayout'

import { gql } from '@apollo/client'
import { ClaimDetailsQuery } from 'generated/graphql'
import ReportForm from './Form'
import { Formik, Form } from 'formik'
gql`
  fragment ReportTabFragment on ClaimJob {
    reportForm {
      title
      cards {
        id
        ...FormCardFragment
      }
    }
  }
`

type ReportProps = {
  data?: ClaimDetailsQuery
  loading: boolean
}
export default ({ data, loading }: ReportProps) => {
  if(loading) return <>Loading</>
  const initialValues = getInitialValue(data?.claimJob?.reportForm?.cards)

  console.log(initialValues)

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        console.log(values)
      }}
    >
      <Form>
        <TabLayout
          loading={loading}
          actions={[
            { label: 'Save', type: 'submit' },
          ]}
          body={(
            <ReportForm
              cards={data?.claimJob?.reportForm?.cards}
            />
          )}
        />
      </Form>
    </Formik>
  )
}

const getInitialValue = (cards: any) => {
  return cards.reduce((totalCard: any, currentCard: any) => {
    const card = getGroupInitialValue(currentCard.fields)
    return {
      ...totalCard,
      ...card
    }
  }, {})
}

const getGroupInitialValue = (fields: any) => fields.reduce((total: any, current: any) => {
  if (!current.name) return null
  const value =
    current.__typename === 'SwitchField' ? false :
    current.__typename === 'DateTimeField' ? new Date() :
    current.__typename === 'GroupField' ? [] :
    ''

  return {
    ...total,
    [current.name]: value
  }
}, {})