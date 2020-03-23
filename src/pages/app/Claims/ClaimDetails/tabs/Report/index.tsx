import React from 'react'
import TabLayout from 'layouts/TabLayout'

import { gql } from '@apollo/client'
import { ClaimDetailsQuery, useSaveReportMutation, useSubmitReportMutation, useResetReportMutation } from 'generated/graphql'
import ReportForm from './Form'
import { Formik, Form } from 'formik'
import { getInitialValue } from 'utils/getFormikInitValue'
import { useSnackbar } from 'notistack'
import { useClaimMeta } from '../../ClaimMetaContext'
gql`
  fragment ReportTabFragment on ClaimJob {
    id
    reportForm {
      title
      cards {
        id
        ...FormCardFragment
      }
    }
    reportData {
      data
      status
    }
  }
  mutation SaveReport($claimId: ID!, $data: Json!) {
    claimReportUpsert(claimId: $claimId, data: $data) {
      id
    }
  }
  mutation SubmitReport($claimId: ID!) {
    claimReportSubmit(claimId: $claimId) {
      id
    }
  }
  mutation ResetReport($claimId: ID!) {
    claimReportReset(claimId: $claimId) {
      id
    }
  }
`

type ReportProps = {
  data?: ClaimDetailsQuery
  loading: boolean
}
export default ({ data, loading }: ReportProps) => {
  if(loading) return <>Loading</>

  const { enqueueSnackbar } = useSnackbar()
  const claimMeta = useClaimMeta()

  const [saveReport] = useSaveReportMutation()
  const [submitReportMutation] = useSubmitReportMutation()
  const submitReport = async () => {
    if(data?.claimJob?.id) {
      const res = await submitReportMutation({ variables: { claimId: data.claimJob.id }})
        .catch(error => error)
      if(res?.data?.claimReportSubmit.id) {
        enqueueSnackbar('Submitted')
        claimMeta?.claimDetailsRefetch()
      }
    }
  }
  const [resetReportMutation] = useResetReportMutation()
  const resetReport = async () => {
    if(data?.claimJob?.id) {
      const res = await resetReportMutation({ variables: { claimId: data.claimJob.id }})
        .catch(error => error)
      if (res?.data?.claimReportReset?.id) {
        enqueueSnackbar('Reset')
        claimMeta?.claimDetailsRefetch()
      }
    }
  }

  const initialValues = data?.claimJob?.reportForm?.cards ? getInitialValue(data.claimJob.reportForm.cards) : {}
  const isSavedData = Boolean(data?.claimJob?.reportData)
  const isReadOnly = data?.claimJob?.reportData?.status === 'REPORTED'

  return (
    <Formik
      initialValues={{
        ...initialValues,
        ...data?.claimJob?.reportData?.data
      }}
      onSubmit={async values => {
        if (data?.claimJob?.id) {
          const res = await saveReport({
            variables: {
              claimId: data.claimJob.id,
              data: values,
            }
          })
          .catch(error => {
            return error?.graphQLErrors?.forEach((error: any) => enqueueSnackbar(error.message))
          })

          if (res?.data?.claimReportUpsert.id) {
            enqueueSnackbar('Saved')
            claimMeta?.claimDetailsRefetch()
          }
        }
      }}
    >
      <Form>
        <TabLayout
          loading={loading}
          actions={[
            { label: 'Reset', disabled: isSavedData && !isReadOnly, onClick: resetReport },
            { label: 'Submit', disabled: isSavedData && isReadOnly, onClick: submitReport },
            { label: 'Save', type: 'submit', disabled: isReadOnly },
          ]}
          body={(
            <ReportForm
              cards={data?.claimJob?.reportForm?.cards}
              readOnly={isReadOnly}
            />
          )}
        />
      </Form>
    </Formik>
  )
}