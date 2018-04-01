import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ToolbarComponent from '../Components/ToolbarComponent/ToolbarComponent'

import { setUsername } from 'modules/UserReducer/UserAction'
import { orderRepositories } from 'modules/GetRepositoriesReducer/OrderRepositoriesAction'
import { filterRepositories } from 'modules/GetRepositoriesReducer/FilterRepositoriesAction'

class Toolbar extends Component {

	constructor (props) {
		super(props)
		this.state = {
			valueOrder: '',
			valueFilter: ''
		}
	}

	UNSAFE_componentWillReceiveProps (nextProps) {
		const { valueOrder } = this.state
		const { user: { username }, repositories: { data } } = nextProps
		const { user: { username: oldUsername },
			repositories: { data: oldData },
			orderRepositories } = this.props
		if(username !== oldUsername) this.changeUser()
		if(data &&
			oldData &&
			data.join(',') !== oldData.join(',')) orderRepositories(valueOrder, data)
	}

	componentDidMount () {
		this.changeUser()
	}

	changeUser () {
		const { user: { username } } = this.props
		this.props.setUsername(username)
	}

	handlerOnChangeOrder (event, key, value) {
		const { repositories: { data }, orderRepositories } = this.props
		this.setState({ valueOrder: value })
		orderRepositories(value, data)
	}

	handlerOnChangeFilter (event, key, value) {
		const { repositories: { original }, filterRepositories } = this.props
		this.setState({ valueFilter: value })
		filterRepositories(value, original)
	}

	render () {
		const { repositories: { fetching } } = this.props
		if (fetching) return null
		return this.renderToolbar()
	}

	filterArrayLanguages () {
		const { repositories: { original } } = this.props
		const arrayFinal = []
		original.forEach ((item) => {
			if (item.language && !arrayFinal.includes(item.language)) arrayFinal.push(item.language)
		})
		return arrayFinal
	}

	renderToolbar () {
		const { valueOrder, valueFilter } = this.state
		const arrayFilter = this.filterArrayLanguages()
		return (<ToolbarComponent
			arrayFilter={arrayFilter}
			valueOrder={valueOrder}
			valueFilter={valueFilter}
			handlerOnChangeOrder={this.handlerOnChangeOrder.bind(this)}
			handlerOnChangeFilter={this.handlerOnChangeFilter.bind(this)} />)
	}

}

Toolbar.propTypes = {
	repositories: PropTypes.shape({
		fetching: PropTypes.bool,
		data: PropTypes.array
	}),
	setUsername: PropTypes.func,
	orderRepositories: PropTypes.func
}

const mapStateToProps = ({ repositories, user }) => ({
	repositories,
	user
})

const mapDispatchToProps = dispatch => bindActionCreators({
	setUsername,
	orderRepositories,
	filterRepositories
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Toolbar)
