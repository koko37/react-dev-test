import * as constants from '../constants'

export const initialState = {
  data: [] /* constants.FAKE_CONTACTS TEST DATA */,
  loading: false,
  hasErrors: false,
}

export default function contactsReducer(state = initialState, action) {
  switch(action.type) {
    case constants.GET_CONTACTS:
      return {...state, loading: true, hasErrors: false}
    case constants.GET_CONTACTS_SUCCESS:
      return {data: [...state.data, ...action.payload], loading: false, hasErrors: false}
    case constants.GET_CONTACTS_FAILURE:
      return {...state, loading: false, hasErrors: true}
    case constants.RESET_CONTACTS:
      return initialState
    default:
      return state
  }
}
