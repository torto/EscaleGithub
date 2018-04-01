export const USER_CHANGE = 'user/CHANGE'

const initialState = {
	username: 'rodrigorm'
}

export default (state = initialState, action) => {
	switch (action.type) {
	case USER_CHANGE:
		return {
			...state,
			username: action.payload
		}
	default:
		return state
	}
}
