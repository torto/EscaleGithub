import React from 'react'
import { mock } from 'sinon'

const { orderRepositories } = require('./OrderRepositoriesAction')

const data = [
	{
		name: 'c',
		stargazers_count: 10,
		open_issues_count: 11
	},
	{
		name: 'b',
		stargazers_count: 20,
		open_issues_count: 15
	}
]

describe('orderRepositories Action', () => {
	it('execute change values string', () => {
		const orderRepo = 'Repository Name'

		const returnValuesDispatch = {
      type: 'local/REPOSITORIES_ORDER',
      order: [{
				name: 'b',
				stargazers_count: 20,
				open_issues_count: 15
			},
			{
				name: 'c',
				stargazers_count: 10,
				open_issues_count: 11
			}]
		}
		const dispatch = mock('dispatch').withArgs(returnValuesDispatch)
		orderRepositories(orderRepo, data)(dispatch)
		dispatch.verify()
  })
	it('execute change values number Starts', () => {
		const orderRepo = 'Starts'

		const returnValuesDispatch = {
      type: 'local/REPOSITORIES_ORDER',
      order: [{
				name: 'b',
				stargazers_count: 20,
				open_issues_count: 15
			},
			{
				name: 'c',
				stargazers_count: 10,
				open_issues_count: 11
			}]
		}
		const dispatch = mock('dispatch').withArgs(returnValuesDispatch)
		orderRepositories(orderRepo, data)(dispatch)
		dispatch.verify()
  })
	it('execute change values number Issues', () => {
		const orderRepo = 'Open Issues'

		const returnValuesDispatch = {
      type: 'local/REPOSITORIES_ORDER',
      order: [{
				name: 'b',
				stargazers_count: 20,
				open_issues_count: 15
			},
			{
				name: 'c',
				stargazers_count: 10,
				open_issues_count: 11
			}]
		}
		const dispatch = mock('dispatch').withArgs(returnValuesDispatch)
		orderRepositories(orderRepo, data)(dispatch)
		dispatch.verify()
  })
})
