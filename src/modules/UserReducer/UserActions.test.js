import { mock } from 'sinon'

const { setUsername } = require('./UserAction')

describe('setUsername Action', () => {
	it('execute', () => {
		const username = 'torto'
		const returnValuesDispatch = {
      type: 'user/CHANGE',
      payload: username
		}
		const dispatch = mock('dispatch').withArgs(returnValuesDispatch)
		setUsername(username)(dispatch)
		dispatch.verify()
  })
})
