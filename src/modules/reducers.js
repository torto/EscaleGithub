import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import GetRepositoriesReducer from './GetRepositoriesReducer/GetRepositoriesReducer'
import UserReducer from './UserReducer/UserReducer'

export default combineReducers({
	routing: routerReducer,
	repositories: GetRepositoriesReducer,
	user: UserReducer
})
