import { mock } from 'sinon'
import { expect } from 'chai'

const GetRepositoriesReducer = require('./GetRepositoriesReducer')

describe('GetRepositories Reducer', () => {
	it('execute success', async () => {
		const values = {
			type: 'request/REPOSITORIES_SUCESS',
			payload: {
				data: ['1','2']
			}
		}

		const valuesReturn = {
			fetching: false,
			data: values.payload.data,
			original: values.payload.data
		}
		expect(GetRepositoriesReducer.default (undefined, values)).to.be.deep.equal(valuesReturn)
  })
	it('execute order', async () => {
		const values = {
			type: 'local/REPOSITORIES_ORDER',
			order: ['1','2']
		}

		const valuesReturn = {
			fetching: false,
			data: values.order,
		}
		expect(GetRepositoriesReducer.default ({}, values)).to.be.deep.equal(valuesReturn)
  })
	it('execute filter', async () => {
		const values = {
			type: 'local/REPOSITORIES_FILTER',
			filterArray: ['1','2']
		}

		const valuesReturn = {
			fetching: false,
			data: values.filterArray,
		}
		expect(GetRepositoriesReducer.default ({}, values)).to.be.deep.equal(valuesReturn)
  })
	it('execute error', async () => {
		const values = {
			type: 'request/REPOSITORIES_ERROR',
			payload: {
				data: ['1','2']
			}
		}

		const valuesReturn = {
			fetching: false,
			error: true,
			message: values.payload.data,
		}
		expect(GetRepositoriesReducer.default (null, values)).to.be.deep.equal(valuesReturn)
  })
	it('execute default', async () => {
		const values = {
			type: 'default',
		}
		expect(GetRepositoriesReducer.default ({}, values)).to.be.deep.equal({})
  })
})
