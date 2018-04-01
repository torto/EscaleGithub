import React from 'react'
import { mock } from 'sinon'

const { filterRepositories } = require('./FilterRepositoriesAction')

const data = [
	{
		language: 'a'
	},
	{
		language: 'b'
	}
]

describe('filterRepositories Action', () => {
	it('execute change values', () => {
		const filterRepo = 'a'

		const returnValuesDispatch = {
      type: 'local/REPOSITORIES_FILTER',
      filterArray: [{
				language: 'a'
			}]
		}
		const dispatch = mock('dispatch').withArgs(returnValuesDispatch)
		filterRepositories(filterRepo, data)(dispatch)
		dispatch.verify()
  })
	it('execute filter not values', () => {
		const filterRepo = ''

		const returnValuesDispatch = {
      type: 'local/REPOSITORIES_FILTER',
      filterArray: data
		}
		const dispatch = mock('dispatch').withArgs(returnValuesDispatch)
		filterRepositories(filterRepo, data)(dispatch)
		dispatch.verify()
  })
})
