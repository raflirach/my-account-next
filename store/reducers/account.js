const initialState = {
  accounts: [],
  account: {},
  isAdd: false,
  isEdit: Infinity
}

export const accountReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case "FETCH_ACCOUNTS":
      return {
        ...state,
        accounts: payload
      }
    case "CHANGE_IS_ADD":
      return {
        ...state,
        isAdd: payload,
        isEdit: Infinity
      }  
    case "CHANGE_IS_EDIT":
      return {
        ...state,
        isEdit: payload,
        isAdd: false
      }  
    default:
      return state
  }
}