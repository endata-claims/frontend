import React from 'react'
import Paper from 'components/Paper'
import EditorField from 'components/Formik/EditorField'

export default () => {
  return (
    <Paper title='Claim Description'>
      <EditorField name='claimDescription' required />
    </Paper>
  )
}