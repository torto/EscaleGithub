export const REPOSITORIES_SUCESS = 'request/REPOSITORIES_SUCESS'
export const REPOSITORIES_ERROR = 'request/REPOSITORIES_ERROR'
export const REPOSITORIES_ORDER = 'local/REPOSITORIES_ORDER'
export const REPOSITORIES_FILTER = 'local/REPOSITORIES_FILTER'

const initialState = {
	fetching: true
}

export default (state = initialState, action) => {
	switch (action.type) {
	case REPOSITORIES_SUCESS:
		return {
			...state,
			fetching: false,
			data: action.payload.data,
			original: action.payload.data.slice(0, action.payload.data.lenght)
		}
	case REPOSITORIES_ORDER:
		return {
			...state,
			fetching: false,
			data: action.order
	}
	case REPOSITORIES_FILTER:
		return {
			...state,
			fetching: false,
			data: action.filterArray
	}
	case REPOSITORIES_ERROR:
		return {
			...state,
			fetching: false,
			error: true,
			message: action.payload.data
		}
	default:
		return state
	}
}
