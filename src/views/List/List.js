import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CircularProgress from 'material-ui/CircularProgress'
import GridListComponent from '../Components/GridListComponent/GridListComponent'

import { getRepositories } from 'modules/GetRepositoriesReducer/GetRepositoriesAction'
import { setUsername } from 'modules/UserReducer/UserAction'

const styles= {
	loading: {
		transform: 'translate(-50%, 100%)',
		margin: '0 50%'
	}
}

export class List extends Component {

	UNSAFE_componentWillReceiveProps (nextProps) {
		const { user: { username } } = nextProps
		const { user: { username: oldUsername } } = this.props
		if(username !== oldUsername) this.changeUser()
	}

	componentDidMount () {
		this.changeUser()
	}

	changeUser () {
		const { user: { username } } = this.props
		this.props.getRepositories(username)
	}

	render () {
		const { repositories: { fetching } } = this.props
		if(fetching) return this.renderLoading()
		return this.renderList()
	}

	renderLoading () {
		return <CircularProgress size={80} thickness={5} style={styles.loading}/>
	}

	renderList () {
		const { repositories: { data } } = this.props
		return (<GridListComponent data={data} />)
	}

}

List.propTypes = {
	getRepositories: PropTypes.func.isRequired,
	repositories: PropTypes.shape({
		fetching: PropTypes.bool,
		data: PropTypes.array
	}),
	user: PropTypes.shape({
		username: PropTypes.string
	})
}

const mapStateToProps = ({ repositories, user }) => ({
	repositories,
	user
})

const mapDispatchToProps = dispatch => bindActionCreators({
	getRepositories,
	setUsername
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(List)
