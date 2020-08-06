export const UPDATE_SEARCH_KEYWORD = 'UPDATE_SEARCH_KEYWORD'
export const UPDATE_ONLY_EVEN_FILTER = 'UPDATE_ONLY_EVEN_FILTER'

export const updateSearchKeyword = (keyword) => ({type: UPDATE_SEARCH_KEYWORD, payload: keyword})
export const updateEvenFilter = (isOnlyEven) => ({type: UPDATE_ONLY_EVEN_FILTER, payload: isOnlyEven})
