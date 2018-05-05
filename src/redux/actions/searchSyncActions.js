import { HIDE_SEARCH_LOADING, SHOW_SEARCH_LOADING, SAVE_SEARCH_RESULTS } from '../types/searchTypes'

export const showLoading = () => ({ type: SHOW_SEARCH_LOADING })
export const hideLoading = () => ({ type: HIDE_SEARCH_LOADING })
export const saveSearchResults = (results) => ({ type: SAVE_SEARCH_RESULTS, results })
