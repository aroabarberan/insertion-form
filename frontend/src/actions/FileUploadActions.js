export const  insertFileUpload = fileUpload => ({
  type: 'INSERT',
  payload: fileUpload
})

export const updateInfoForm = fileUploadInfo => ({
  type: 'UPDATE_INFO_FORM',
  payload: fileUploadInfo
})

export const clearForm = () => ({
  type: 'CLEAR_FORM',
})