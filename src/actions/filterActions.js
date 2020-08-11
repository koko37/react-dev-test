import { UPDATE_SEARCH_KEYWORD, UPDATE_ONLY_EVEN_FILTER, UPDATE_PAGE_NO, UPDATE_COUNTRY, INCREMENT_PAGE_NO } from '../constants'

export const updateSearchKeyword = (keyword) => ({type: UPDATE_SEARCH_KEYWORD, payload: keyword})
export const updateEvenFilter = (isOnlyEven) => ({type: UPDATE_ONLY_EVEN_FILTER, payload: isOnlyEven})
export const updatePageNo = (pageNo) => ({type: UPDATE_PAGE_NO, payload: pageNo})
export const incrementPageNo = () => ({type: INCREMENT_PAGE_NO})
export const updateCountry = (countryId) => ({type: UPDATE_COUNTRY, payload: countryId})
