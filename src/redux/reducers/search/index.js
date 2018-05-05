import { SEARCH_INITIAL_STATE } from './constanst'
import { SHOW_SEARCH_LOADING, HIDE_SEARCH_LOADING, SAVE_SEARCH_RESULTS } from '../../types/searchTypes'
import { showLoading, hideLoading, saveResults } from './handlers'

export default (state = SEARCH_INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case SHOW_SEARCH_LOADING:
      return showLoading(state)
    case HIDE_SEARCH_LOADING:
      return hideLoading(state)
    case SAVE_SEARCH_RESULTS:
      return saveResults(state, action)
    default:
      return state
  }
}
