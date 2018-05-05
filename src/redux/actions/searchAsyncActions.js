import { showLoading, saveSearchResults, hideLoading } from './searchSyncActions'
import { searchUsers } from '../../services/backend/userService'

export function searchUsersAction (searchTerm) {
  return async (dispatch) => {
    try {
      dispatch(showLoading())
      const users = await searchUsers(searchTerm)
      dispatch(saveSearchResults(users))
      dispatch(hideLoading())
    } catch (err) {
      throw err
    }
  }
}
