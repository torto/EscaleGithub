import { REPOSITORIES_FILTER } from './GetRepositoriesReducer'

export const filterRepositories = (filterRepo, repositories) => dispatch => {
  const repositoriesCopy = repositories.slice(0)
  if(!filterRepo) {
    return dispatch({
      type: REPOSITORIES_FILTER,
      filterArray: repositoriesCopy
    })
  }
  const newData = repositoriesCopy.filter((item) => item.language === filterRepo)
  return dispatch({
    type: REPOSITORIES_FILTER,
    filterArray: newData
  })

}
