import { mock } from 'sinon'

const { getRepositories } = require('./GetRepositoriesAction')

const data = [
	{
		language: 'a'
	},
	{
		language: 'b'
	}
]

describe('getRepositories Action', () => {
	it('execute success', async () => {
		const username = 'torto'

		const returnValuesDispatch = {
      type: 'request/REPOSITORIES_SUCESS',
      payload: {
				data
			}
		}
		const dispatch = mock('dispatch').withArgs(returnValuesDispatch).returns('')
		const axios = {
			get: mock('axios-get')
			.withArgs(`https://api.github.com/users/${username}/repos`)
			.resolves({data})
		}
		await  getRepositories(username, {axios})(dispatch)
		axios.get.verify()
		dispatch.verify()
  })
	it('execute error', async () => {
		const username = 'torto'

		const returnValuesDispatch = {
      type: 'request/REPOSITORIES_ERROR',
      payload: {
				data: 'error test'
			}
		}
		const dispatch = mock('dispatch').withArgs(returnValuesDispatch).returns('')
		const axios = {
			get: mock('axios-get')
			.withArgs(`https://api.github.com/users/${username}/repos`)
			.rejects('error test')
		}
		await  getRepositories(username, {axios})(dispatch)
		axios.get.verify()
		dispatch.verify()
  })
})
