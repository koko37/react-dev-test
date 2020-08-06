import * as actions from '../actions/filterActions'

export const initialState = {
  searchKeyword: '',
  isOnlyEven: false
}

export default function filterReducer(state = initialState, action) {
  switch(action.type) {
    case actions.UPDATE_SEARCH_KEYWORD:
      return {
        ...state,
        searchKeyword: action.payload
      }

    case actions.UPDATE_ONLY_EVEN_FILTER:
      return {
        ...state,
        isOnlyEven: action.payload
      }

    default:
      return state
  }
}
