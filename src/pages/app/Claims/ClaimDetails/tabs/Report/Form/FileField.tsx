import React from 'react'

import { useFormikContext } from 'formik'

import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

import useUppy from 'hooks/useUppy'
import DashboardModal from '@uppy/react/lib/DashboardModal'
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'

export default ({ label, name, disabled }: any) => {
  // uppy hook
  const { uppy, files } = useUppy({
    meta: { type: 'avatar' },
    restrictions: {
      maxFileSize: 1000000,
      maxNumberOfFiles: 3,
      minNumberOfFiles: 1,
      // allowedFileTypes: ['image/*', 'video/*']
    },
    autoProceed: false
  })

  // formik handle file upload hook
  const { setFieldValue, isSubmitting } = useFormikContext()
  const isDisabled = disabled || isSubmitting

  const [textValue, setTextValue] = React.useState('')
  React.useEffect(() => {
    if (files && files.length) {
      setFieldValue(name, files)
      const value = files.map(({ name }) => name).join(', ')
      setTextValue(value)
    }
  }, [files, name, setFieldValue])

  // upload modal hooks
  const [modalOpen, setModalOpen] = React.useState(false)
  const handleOpen = () => !isDisabled && setModalOpen(!isSubmitting)
  const handleClose = () => setModalOpen(false)

  if (!uppy) return null
  return (
    <>
      <TextField
        label={label}
        fullWidth
        variant='outlined'
        value={textValue}
        onClick={handleOpen}
        disabled={isDisabled}
        placeholder='Click to upload files'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <IconButton onClick={handleOpen} disabled={isDisabled}>
                <CloudUploadIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <DashboardModal
        uppy={uppy}
        closeModalOnClickOutside
        open={modalOpen}
        onRequestClose={handleClose}
      />
    </>
  )
}