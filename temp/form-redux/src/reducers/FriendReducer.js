
const initialState = {
  friends: [
    {
      name: 'Patatin',
      last_name: 'Patatan',
      phone: '092342134',
    },
  ],
  form: {
    name: '',
    last_name: '',
    phone: '',
  },
}


export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FRIEND':
      return {
        ...state,
        friends: [...state.friends, action.payload]
      }
    case 'UPDATE_FORM':
      return {
        ...state,
        form: [...state.form, action.payload]
      }
    default:
      return state
  }
}