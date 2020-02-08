const initialState = {
  breed: {}
}

var rootReducer = (state = initialState, action) => {
  if (action.type === 'receive') {
    return {
      breed: action.data
    }
  }
  return state
}

export default rootReducer