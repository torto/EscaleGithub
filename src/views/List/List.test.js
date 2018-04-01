import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { mock } from 'sinon'
import configureStore from 'redux-mock-store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const { List } = require('./List')

const data = [
	{
		"name": "angular-simple-input-mask1",
    "owner": {
      "avatar_url": "https://avatars0.githubusercontent.com/u/6430518?v=4",
    },
    "description": "Way simple Angular directive to apply mask to input fields1",
    "created_at": "2015-07-02T05:32:20Z",
    "pushed_at": "2015-07-05T00:18:45Z",
    "stargazers_count": 10,
    "language": 'JavaScript1',
    "open_issues_count": 2
	},
	{
		"name": "angular-simple-input-mask2",
    "owner": {
      "avatar_url": "https://avatars0.githubusercontent.com/u/6430518?v=4",
    },
    "description": "Way simple Angular directive to apply mask to input fields2",
    "created_at": "2015-07-03T05:32:20Z",
    "pushed_at": "2015-07-04T00:18:45Z",
    "stargazers_count": 20,
    "language": 'JavaScript2',
    "open_issues_count": 3
	}
]

const mockStore = configureStore();
const store = mockStore({})

const defaultProps = {
	store,
	user: {
		username: 'torto'
	},
	repositories: {
		fetching: true
	}
}

let props, getRepositories

describe('List State', () => {

	beforeEach(() => {
		getRepositories = mock()
		.withArgs(defaultProps.user.username)
		.returns('')
		props = {
			...defaultProps,
			getRepositories: getRepositories
		}
	})

	it('renders without values load', () => {
		const component = mount(<MuiThemeProvider><List {...props}/></MuiThemeProvider>)
		getRepositories.verify()
    expect(component.find('circle')).to.have.lengthOf(1)
  })
	it('renders with values', () => {
		props = {
			...props,
			repositories: {
				fetching: false,
				data
			}
		}
    const component = mount(<MuiThemeProvider><List {...props}/></MuiThemeProvider>)
    expect(component.find('.grid-item').hostNodes().length).to.have.equal(2);
  })
	it('renders with values and check title values', () => {
		props = {
			...props,
			repositories: {
				fetching: false,
				data
			}
		}
    const component = mount(<MuiThemeProvider><List {...props}/></MuiThemeProvider>)
		const elementsName = component.find('.grid-item__name-desc span')
    expect(elementsName.at(0).text()).to.have.equal(`${data[0].name} - ${data[0].language}`);
    expect(elementsName.at(1).text()).to.have.equal(data[0].description);
    expect(elementsName.at(2).text()).to.have.equal(`${data[1].name} - ${data[1].language}`);
    expect(elementsName.at(3).text()).to.have.equal(data[1].description);
  })
	it('renders with values and check Stars values', () => {
		props = {
			...props,
			repositories: {
				fetching: false,
				data
			}
		}
    const component = mount(<MuiThemeProvider><List {...props}/></MuiThemeProvider>)
		const elementsName = component.find('.grid-item__stars').hostNodes()
    expect(elementsName.at(0).text()).to.have.equal(`Stars${data[0].stargazers_count}`);
    expect(elementsName.at(1).text()).to.have.equal(`Stars${data[1].stargazers_count}`);
  })
	it('renders with values and check Issues values', () => {
		props = {
			...props,
			repositories: {
				fetching: false,
				data
			}
		}
    const component = mount(<MuiThemeProvider><List {...props}/></MuiThemeProvider>)
		const elementsName = component.find('.grid-item__issues').hostNodes()
    expect(elementsName.at(0).text()).to.have.equal(`Open Issues${data[0].open_issues_count}`);
    expect(elementsName.at(1).text()).to.have.equal(`Open Issues${data[1].open_issues_count}`);
  })
	it('renders with values and check Created values', () => {
		props = {
			...props,
			repositories: {
				fetching: false,
				data
			}
		}
    const component = mount(<MuiThemeProvider><List {...props}/></MuiThemeProvider>)
		const elementsName = component.find('.grid-item__created').hostNodes()
    expect(elementsName.at(0).text()).to.have.equal(`Created At02/07/2015`);
    expect(elementsName.at(1).text()).to.have.equal(`Created At03/07/2015`);
  })
	it('renders with values and check pushed values', () => {
		props = {
			...props,
			repositories: {
				fetching: false,
				data
			}
		}
    const component = mount(<MuiThemeProvider><List {...props}/></MuiThemeProvider>)
		const elementsName = component.find('.grid-item__pushed').hostNodes()
    expect(elementsName.at(0).text()).to.have.equal(`Pushed At04/07/2015`);
    expect(elementsName.at(1).text()).to.have.equal(`Pushed At03/07/2015`);
  })
})
