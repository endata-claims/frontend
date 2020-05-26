import React from 'react'
import Uppy from '@uppy/core'
import s3 from '@uppy/aws-s3'

import { COMPANION_ENDPOINT } from 'configs'
console.log(COMPANION_ENDPOINT)

export default (options: any) => {
  const [uppy, setUppy] = React.useState<any>(null)
  const [files, setFiles] = React.useState<any[]>([])
  const [errors, setErrors] = React.useState<any[]>([])

  React.useEffect(() => {
    const client = Uppy(options)
      .use(s3, {
        companionUrl: COMPANION_ENDPOINT // 'http://localhost:3020'
      })
    setUppy(client)
    // eslint-disable-next-line
  }, [])

  if (uppy) uppy.on('complete', (result: any) => {
    const { successful, failed } = result
    if (successful) {
      const success = successful.map(({ name, extension, uploadURL: url, size }: any) => ({ name, extension, url, size }))
      setFiles([
        ...files,
        ...success
      ])
    }
    if (failed) {
      const fail = failed.map(({ error: message, response }: any) => {
        const status = response ? response.status : null
        return { message, status }
      })
      setErrors([
        ...errors,
        ...fail
      ])
    }
  })

  return {
    uppy, files, errors
  }
}