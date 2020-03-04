import React from 'react'
import Paper from 'components/Paper'
import { Grid, Button } from '@material-ui/core'
import { useClaimMeta } from '../../ClaimMetaContext'

import renderField from './renderField'
import SwitchField from 'components/Formik/SwitchField'
import SelectField from 'components/Formik/SelectField'

import SchoolIcon from '@material-ui/icons/School'
import PersonIcon from '@material-ui/icons/Person'
import EmailIcon from '@material-ui/icons/Email'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import DoneIcon from '@material-ui/icons/Done'

import { gql } from '@apollo/client'
import { JobInfoQuery } from 'generated/graphql'
gql`
  fragment JobInfo_CustomerInfoCardMetaFragment on ClaimJob {
    insurer {
      setupcustomerlogin
      removeHabitableAsbestos
      hideCategoryOfClaim
    }
    actions {
      actionType
      isDisplay
      isDisabled
    }
  }
`

type CustomerInfoCardProps = {
  optionData?: JobInfoQuery
}
export default ({ optionData }: CustomerInfoCardProps) => {
  const claimMeta = useClaimMeta()
  const cashSettleAction = claimMeta?.claim?.actions?.find(action => action?.actionType === 'CLAIM_CASH_SETTLE')

  return (
    <Paper title='Customer & Property Information'>
      <Grid container spacing={3}>
        {[
          {
            label: 'Salutations',
            name: 'insuredSalutation',
            startAdornment: <SchoolIcon />,
          },
          {
            label: 'Customer',
            name: 'insuredName',
            required: true,
            startAdornment: <PersonIcon />,
          },
          {
            xs: 6,
            label: 'Customer Email',
            name: 'insuredEmail',
            startAdornment: <EmailIcon />,
          },

          {
            xs: 6,
            label: 'Property/Risk Address',
            name: 'riskAddressLine1',
            required: true,
            startAdornment: <LocationOnIcon />,
          },
          {
            xs: 2,
            component: SwitchField,
            label: 'Customer Login?',
            name: 'requireCustomLogin',
            unMountOn: claimMeta?.claim?.insurer?.setupcustomerlogin !== 1,
          },
          {
            xs: 4,
            label: 'Customer Login?',
            name: 'customLoginEmail',
            placeholder: 'e.g. Email Address',
            unMountOn: claimMeta?.claim?.insurer?.setupcustomerlogin !== 1,
            startAdornment: <EmailIcon />,
          },

          {
            xs: 2,
            label: 'Suburb',
            name: 'riskAddressSuburb',
            required: true,
            startAdornment: <LocationOnIcon />,
          },
          {
            xs: 2,
            component: SelectField,
            label: 'State',
            name: 'riskAddressState',
            options: optionData?._states,
            required: true,
            startAdornment: <LocationOnIcon />,
          },
          {
            xs: 2,
            label: 'Postcode',
            name: 'riskAddressPostcode',
            required: true,
            startAdornment: <LocationOnIcon />,
          },
          {
            component: SwitchField,
            label: 'Home Habitable?',
            name: 'habitableProperty',
            unMountOn: claimMeta?.claim?.insurer?.removeHabitableAsbestos,
          },
          {
            component: SelectField,
            label: 'Category of Claim',
            name: 'category',
            options: optionData?._claimCategories,
            unMountOn: claimMeta?.claim?.insurer?.hideCategoryOfClaim,
          },

          {
            label: 'Phone 1',
            name: 'insuredPhone1',
            required: true,
            startAdornment: <PhoneIcon />
          },
          {
            label: 'Phone 2',
            name: 'insuredPhone2',
            startAdornment: <PhoneIcon />
          },
        ].map(renderField)}

        {[
          {
            label: 'Finalise Claim',
            unMountOn: claimMeta?.me?.userType !== 'Administrator',
            onClick: () => {
              console.log('open finallize claim')
            },
            startIcon: <DoneIcon />
          },
          {
            label: 'Cash settle',
            startIcon: <DoneIcon />,
            unMountOn: !cashSettleAction?.isDisplay,
            disabled: cashSettleAction?.isDisabled,
            onClick: () => {
              console.log('open cash settle')
            }
          },
          { xs: 2 }
        ].map(({ xs = 2, label, ...props }) => (
          <Grid item xs={2} style={{ display: 'flex' }}>
            {label && (
              <Button variant='outlined' color='primary' fullWidth {...props}>
                {label}
              </Button>
            )}
          </Grid>
        ))}

        {[
          {
            label: 'Phone 3',
            name: 'insuredPhone3',
            startAdornment: <PhoneIcon />
          },
          {
            label: 'Fax',
            name: 'insuredFax',
            startAdornment: <PhoneIcon />
          },
        ].map(renderField)}
      </Grid>
    </Paper>
  )
}