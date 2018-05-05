export const showLoading = state => ({ ...state, isLoading: true })
export const hideLoading = state => ({ ...state, isLoading: false })
export const saveResults = (state, { results }) => {
  return {
    ...state, results
  }
}
