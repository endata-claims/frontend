export default (file: any): any => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    if(!file) reject('No File')

    reader.readAsDataURL(file)
    reader.onload = (e: any) => resolve({
      ok: true,
        fileBase64: e.target.result.slice(
          e.target.result.indexOf('base64,') + 7,
          e.target.result.length
        ),
        fileName: file.name,
    })
    reader.onerror = (error: any) => reject(error)
  })
}