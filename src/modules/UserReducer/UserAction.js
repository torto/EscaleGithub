import { USER_CHANGE } from './UserReducer'

export const setUsername = username => dispatch => {
    dispatch({
      type: USER_CHANGE,
      payload: username
    })
}
