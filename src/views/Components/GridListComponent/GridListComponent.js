import React from 'react'
import PropTypes from 'prop-types'
import { GridList, GridTile } from 'material-ui/GridList'
import CardInfoRepoComponent from '../CardInfoRepoComponent/CardInfoRepoComponent'

const GridListComponent = (props) => {
	const { data } = props
	const styles = {
		root: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'space-around'
		},
		gridList: {
			overflowY: 'auto',
			marginTop: '2px',
			width: '100%'
		},
		gridTile: {
			borderColor: 'rgb(217, 217, 217) rgb(217, 217, 217) currentcolor',
			borderStyle: 'solid solid none',
			borderWidth: '1px 1px medium',
			borderImage: 'none 100% / 1 / 0 stretch'
		}
	}
	return (<div style={styles.root}>
		<GridList className="gird-container" cellHeight={'auto'} style={styles.gridList}>
			{
				data.map((item, index) => (
					<GridTile key={index} style={styles.gridTile} className="grid-item">
						<CardInfoRepoComponent
						name={item.name}
						description={item.description}
						avatar={item.owner.avatar_url}
						stars={item.stargazers_count}
						issues={item.open_issues_count}
						createdAt={item.created_at}
						pushedAt={item.pushed_at}
						language={item.language}/>
				</GridTile>))
			}
		</GridList>
	</div>)
}

GridListComponent.propTypes = {
	data: PropTypes.array
}

export default GridListComponent
