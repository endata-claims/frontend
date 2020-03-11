import React from 'react'
import { useFormikContext } from 'formik'
import makeStyles from '@material-ui/core/styles/makeStyles'

import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import AddIcon from '@material-ui/icons/Add'
import ClearIcon from '@material-ui/icons/Clear'

import ReportField from './FormField'
import { getGroupInitialValue } from 'utils/getFormikInitValue'
// import useScrollOnUpdate from './useScrollOnUpdate'

export default ({ label, name, fields, disabled }: any) => {
  const classes = useStyles()

  const { setFieldValue, values, isSubmitting } = useFormikContext()
  const [groups, setGroups] = React.useState<any>([])

  const addGroup = () => {
    const groupId = Math.random().toString().split(".")[1]

    // add group to map
    const groupFields = fields.map((field: any) => ({
      ...field,
      name: `${name}[${groups.length}].${field.name}`
    }))
    setGroups((preGroups: any) => [...preGroups, { id: groupId, fields, groupFields }])

    // append formik initial value for group
    const newGroupValues = getGroupInitialValue(fields)
    // @ts-ignore
    setFieldValue(name, [...values[name], { ...newGroupValues, GROUP_ID: groupId }])
  }
  const deleteGroup = (id: any) => {
    const newGroups = groups.filter((group: any) => group.id !== id)
    setGroups(newGroups)
    // @ts-ignore
    const newGroupValue = values[name].filter((group: any) => group.GROUP_ID !== id)
    setFieldValue(name, newGroupValue)
  }

  // const endRef = useScrollOnUpdate({
  //   onUpdate: groups.length,
  //   skip: groups.length === 0
  // })

  return (
    <>
      <Button
        color='primary'
        variant='outlined'
        size='large'
        startIcon={<AddIcon />}
        className={classes.button}
        onClick={addGroup}
        disabled={isSubmitting || disabled}
      >
        {label}
      </Button>
      {groups.map(({ id, fields }: any, groupIndex: any) => (
        <Paper
          key={id}
          className={classes.groupRoot}
          elevation={0}
        // focus style
        // elevation={focusGroup === index ? 5 : 0}
        // style={focusGroup === index ? { padding: 8 } : {}}
        >
          <Grid
            container
            direction='row'
            spacing={2}
            className={classes.fieldRoot}
          >
            <Grid item xs={12}>
              <p className={classes.groupHeader}>
                <Divider />
                <IconButton
                  onClick={() => deleteGroup(id)}
                  disabled={isSubmitting || disabled}
                >
                  <ClearIcon />
                </IconButton>
              </p>
            </Grid>
            {fields.map((field: any, index: any) => (
              // <Grid key={index} item xs={field.grid} container>
                <ReportField
                  {...field}
                  // fullWidth variant='outlined'
                  name={`${name}[${groupIndex}].${field.name}`}
                  readOnly={disabled}
                />
              // </Grid>
            ))}
          </Grid>
        </Paper>
      ))}
      {/* <div ref={endRef} /> */}
    </>
  )
}
const useStyles = makeStyles(theme => ({
  groupRoot: {
    marginBottom: 8
  },
  groupHeader: {
    margin: 0,
    textAlign: 'right'
  },
  button: {
    marginBottom: theme.spacing()
  },
  fieldRoot: {
    marginTop: theme.spacing(),
    marginBottom: theme.spacing(2),
  }
}))