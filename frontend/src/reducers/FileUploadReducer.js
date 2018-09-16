
const initialState = {
  data: [
    {
      name: 'linux',
      extension: 'png',
      path: 'linux.png',
    },
  ],
  form: {
    create: {
      name: '',
      path: '',
    }
  },
}


export default (state = initialState, action) => {
  switch (action.type) {
    case 'INSERT':
      return {
        ...state,
        data: [...state.data, action.payload]
      }

    case 'UPDATE_INFO_FORM':
      return {
        ...state,
        form: {
          ...state.form,
          create: {
            ...state.form.create,
            ...action.payload,
          }
        },
      }

    case 'CLEAR_FORM':
      return {
        ...state,
        form: {
          ...state.form,
          create: {
            name: '',
            extension: '',
            size: '',
            path: '',
          },
        },
      }
    default:
      return state
  }
}