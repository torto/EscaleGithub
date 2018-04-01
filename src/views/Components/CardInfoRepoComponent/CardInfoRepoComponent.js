import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {Card, CardHeader} from 'material-ui/Card';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import InfoOutline from 'material-ui/svg-icons/action/info-outline';
import Update from 'material-ui/svg-icons/action/update';
import FiberNew from 'material-ui/svg-icons/av/fiber-new';
import {List, ListItem} from 'material-ui/List';

const CardInfoRepoComponent = (props) => {
	const {
		name,
		description,
		avatar,
		stars,
		issues,
		createdAt,
		pushedAt,
		language
	} = props

	function parseDate(date){
		return moment(date).format('DD/MM/YYYY')
	}

	return ( <Card>
    <CardHeader
			className="grid-item__name-desc"
      title={`${name} - ${language}`}
      subtitle={description}
      avatar={avatar} />
			<List>
       <ListItem
				 className="grid-item__stars"
				 primaryText="Stars"
				 secondaryText={`${stars}`}
				 rightIcon={<ActionGrade />}/>
       <ListItem
			 	className="grid-item__issues"
			 	primaryText="Open Issues"
				secondaryText={`${issues}`}
				rightIcon={<InfoOutline />}/>
       <ListItem
			 	className="grid-item__created"
			 	primaryText="Created At"
				secondaryText={parseDate(createdAt)}
				rightIcon={<FiberNew />}/>
       <ListItem
			 	className="grid-item__pushed"
			 	primaryText="Pushed At"
				secondaryText={parseDate(pushedAt)}
				rightIcon={<Update />}/>
     </List>
  </Card>)
}

CardInfoRepoComponent.propTypes = {
	name: PropTypes.string,
	description: PropTypes.string,
	avatar: PropTypes.string,
	stars: PropTypes.number,
	issues: PropTypes.number,
	createdAt: PropTypes.string,
	pushedAt: PropTypes.string
}

export default CardInfoRepoComponent
