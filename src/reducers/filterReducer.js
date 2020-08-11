import * as constants from '../constants'

export const initialState = {
  searchKeyword: '',
  isOnlyEven: false,
  countryId: 0,
  pageNo: 1
}

export default function filterReducer(state = initialState, action) {
  switch(action.type) {
    case constants.UPDATE_SEARCH_KEYWORD:
      return {
        ...state,
        searchKeyword: action.payload,
        pageNo: 1
      }

    case constants.UPDATE_ONLY_EVEN_FILTER:
      return {
        ...state,
        isOnlyEven: action.payload
      }

    case constants.UPDATE_PAGE_NO:
      return {
        ...state,
        pageNo: action.payload
      }
      
    case constants.INCREMENT_PAGE_NO:
      return {
        ...state,
        pageNo: state.pageNo + 1
      }

    case constants.UPDATE_COUNTRY:
      return {
        ...state,
        countryId: action.payload,
        pageNo: 1
      }

    default:
      return state
  }
}
