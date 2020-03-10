import React from 'react'
import Paper from 'components/Paper'
import { Grid, Button } from '@material-ui/core'

import renderField from './renderField'
import SelectField from 'components/Formik/SelectField'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import FileCopyIcon from '@material-ui/icons/FileCopy'

import { JobInfoQuery } from 'generated/graphql'
import { useClaimMeta } from '../../ClaimMetaContext'
import { useFormikContext } from 'formik'
type CustomerInfoCardProps = {
  optionData?: JobInfoQuery
}
export default ({ optionData }: CustomerInfoCardProps) => {
  const { values, setFieldValue, isSubmitting } = useFormikContext() // setTouched
  const formValues = values as any

  const claimMeta = useClaimMeta()
  const handleSameAddress = () => {
    // setTouched({
    //   postalAddressLine1: true, postalAddressSuburb: true, postalAddressState: true, postalAddressPostcode: true,
    // })
    setFieldValue('postalAddressLine1', formValues.riskAddressLine1, false)
    setFieldValue('postalAddressSuburb', formValues.riskAddressSuburb, false)
    setFieldValue('postalAddressState', formValues.riskAddressState, false)
    setFieldValue('postalAddressPostcode', formValues.riskAddressPostcode, false)
  }

  return (
    <Paper title='Postal Address'>
      <Grid container spacing={3}>
        {[
          {
            xs: 8,
            label: 'Postal Address',
            name: 'postalAddressLine1',
            startAdornment: <LocationOnIcon />,
          },
        ].map(renderField)}
        <Grid item xs={4} style={{ display: 'flex' }}>
          {claimMeta?.me?.userType === 'Administrator' && (
            <Button
              variant='outlined' color='primary' fullWidth
              startIcon={<FileCopyIcon />}
              onClick={handleSameAddress}
              disabled={isSubmitting}
            >
              Same Address
          </Button>
          )}
        </Grid>
        {[
          {
            xs: 4,
            label: 'Suburb',
            name: 'postalAddressSuburb',
            startAdornment: <LocationOnIcon />,
          },
          {
            xs: 4,
            component: SelectField,
            label: 'State',
            name: 'postalAddressState',
            options: optionData?._states,
            startAdornment: <LocationOnIcon />,
          },
          {
            xs: 4,
            label: 'Postcode',
            name: 'postalAddressPostcode',
            startAdornment: <LocationOnIcon />,
          },
        ].map(renderField)}
      </Grid>
    </Paper>
  )
}