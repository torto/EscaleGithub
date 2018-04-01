import axios from 'axios'
import { REPOSITORIES_ERROR, REPOSITORIES_SUCESS } from './GetRepositoriesReducer'
const dependencies = {
  axios
}

export const getRepositories = (username, injection) => dispatch => {
  const { axios } = Object.assign({}, dependencies, injection)
  return axios.get(`https://api.github.com/users/${username}/repos`).then(res => {
    return dispatch({
      type: REPOSITORIES_SUCESS,
      payload: {
        data: res.data
      }
    })
  }).catch(error => {
    dispatch({
      type: REPOSITORIES_ERROR,
      payload: {
        data: error.name
      }
    })
  })
}
