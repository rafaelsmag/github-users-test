import { GITHUB_SEARCH_USERS } from '../../config/constants/githubApiRoutes'

function mapUser (item) {
  return {
    id: item.id,
    name: item.login,
    image: item.avatar_url
  }
}

export function searchUsers (searchTerm) {
  if (searchTerm.length > 0) {
    return fetch(GITHUB_SEARCH_USERS(searchTerm))
      .then(res => res.json())
      .then(result => {
        return result.items.length > 0 ? result.items.map(mapUser) : []
      })
  }
  return []
}
