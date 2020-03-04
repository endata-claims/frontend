import React from 'react'
import Paper from 'components/Paper'
import { Grid } from '@material-ui/core'

import renderField from './renderField'
import SwitchField from 'components/Formik/SwitchField'
import CheckboxGroupField from 'components/Formik/CheckboxGroupField'
import NameField from 'components/FormikCustom/NameField'
import ClientNameField from 'components/FormikCustom/ClientNameField'
import EmailField from 'components/FormikCustom/EmailField'
import AddressField from 'components/FormikCustom/AddressField'
import SuburbField from 'components/FormikCustom/SuburbField'

import SchoolIcon from '@material-ui/icons/School'
import PersonIcon from '@material-ui/icons/Person'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import SelectField from 'components/Formik/SelectField'

import { gql } from '@apollo/client'
export const CustomerDetailsCardFragment = gql`
  fragment CustomerDetailsCardFragment on Query {
    catCodes: claimFilterOptions(where: $catCodesWhere){
      label: name
      value
    }
  }

  fragment CustomerDetailsCardMetaFragment on CompanyProfile {
    companyName
    policyTypeSuppliersView
    insrefnumLength
    removeHabitableAsbestos
    setupcustomerlogin
    hideCategoryOfClaim
  }
`

export default ({ company }: any) => {
  return (
    <Paper title='Customer Details'>
      <Grid container spacing={3}>
        <Grid item xs={6} md={3}>
          <CheckboxGroupField
            display='flex'
            label='Supplier required'
            name='meta.portfolio'
            options={[
              { label: 'Builder', value: 'Building' },
              { label: 'Contents Provider', value: 'Contents' },
              { label: 'Restorer', value: 'Restoration' },
            ]}
          />
        </Grid>
        {[
          {
            component: NameField,
            name: 'insured.salutation', label: 'Salutation',
            startAdornment: <SchoolIcon />,
            validate: (value: any) => {
              if (value.length > 20) return 'Maximum salutation characters limit is 20'
            }
          },
          {
            component: ClientNameField,
            name: 'insured.name', label: 'Customer',
            required: true,
            startAdornment: <PersonIcon />
          },
          {
            component: EmailField,
            name: 'insured.email', label: 'Customer Email',
            startAdornment: <PersonIcon />
          },
          {
            component: AddressField,
            name: 'incidentDetail.riskAddress.line1', label: 'Property/Risk Address',
            required: true, startAdornment: <LocationOnIcon />
          },
          {
            component: SuburbField,
            name: 'incidentDetail.riskAddress.suburb', label: 'Suburb',
            required: true, startAdornment: <LocationOnIcon />
          },
          {
            name: 'incidentDetail.riskAddress.state', label: 'State',
            required: true, startAdornment: <LocationOnIcon />
          },
          {
            name: 'incidentDetail.riskAddress.postcode', label: 'Postcode',
            required: true, startAdornment: <LocationOnIcon />
          },
          {
            component: SwitchField,
            name: 'requireCustomLogin', label: 'Require custom login?',
            unMountOn: company?.setupcustomerlogin === 0
          },
          {
            name: 'customLoginEmail', label: 'Customer Login (e.g. Email Address)',
            required: true, startAdornment: <LocationOnIcon />,
            unMountOn: company?.setupcustomerlogin === 0
          },
          {
            name: 'insured.phone1', label: 'Phone 1',
            required: true, startAdornment: <PhoneIcon />
          },
          {
            name: 'insured.phone2', label: 'Phone 2',
            startAdornment: <PhoneIcon />
          },
          {
            component: SwitchField,
            name: 'incidentDetail.habitableProperty', label: 'Home Habitable?',
            unMountOn: company?.removeHabitableAsbestos,
          },
          {
            component: SelectField,
            name: 'incidentDetail.category', label: 'Category of Claim',
            unMountOn: company?.hideCategoryOfClaim,
            startAdornment: <LocationOnIcon />,
            options: [
              { label: 'Non Urgent', value: 'NonUrgent' },
              { label: 'Semi Urgent', value: 'SemiUrgent' },
              { label: 'Urgent', value: 'Urgent' },
            ]
          },
        ].map(renderField)}
      </Grid>
    </Paper>
  )
}