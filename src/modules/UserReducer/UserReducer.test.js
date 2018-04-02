import { mock } from 'sinon'
import { expect } from 'chai'

const UserReducer = require('./UserReducer')

describe('User Reducer', () => {
	it('execute change', async () => {
		const values = {
			type: 'user/CHANGE',
			payload: 'torto'
		}

		const valuesReturn = {
			username: values.payload,
		}
		expect(UserReducer.default (undefined, values)).to.be.deep.equal(valuesReturn)
  })
	it('execute default', async () => {
		const values = {
			type: 'default',
		}
		expect(UserReducer.default ({}, values)).to.be.deep.equal({})
  })
})
