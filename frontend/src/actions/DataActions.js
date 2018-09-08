export const  insertData = data => ({
  type: 'INSERT',
  payload: data
})

export const updateInfoForm = dataInfo => ({
  type: 'UPDATE_INFO_FORM',
  payload: dataInfo
})

export const clearForm = () => ({
  type: 'CLEAR_FORM',
})