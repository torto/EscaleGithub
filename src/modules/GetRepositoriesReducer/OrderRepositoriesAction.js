import { REPOSITORIES_ORDER } from './GetRepositoriesReducer'

export const orderRepositories = (order, repositories) => dispatch => {
  const repositoriesCopy = repositories.slice(0)
  if(!order) {
    return dispatch({
      type: REPOSITORIES_ORDER,
      order: repositories
    })
  }
  const orders = {
    'Starts': 'stargazers_count',
    'Open Issues': 'open_issues_count',
    'Repository Name': 'name'
  }
  const newData = repositoriesCopy.sort((a, b) => {
    if(a[orders[order]].localeCompare) return a[orders[order]].localeCompare(b[orders[order]])
    if (a[orders[order]] > b[orders[order]]) return -1
    if (a[orders[order]] < b[orders[order]]) return 1
    return 0;
  })
  return dispatch({
    type: REPOSITORIES_ORDER,
    order: newData
  })

}
