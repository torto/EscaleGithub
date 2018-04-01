import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from 'material-ui/MenuItem'
import DropDownMenu from 'material-ui/DropDownMenu'
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar'

const STARTS = 'Starts'
const OPEN_ISSUES = 'Open Issues'
const REPO_NAME = 'Repository Name'

const styles = {
	titles: {
		fontSize: '15px',
		paddingRight: '0px',
		paddingTop: '5px',
		marginLeft: '23px'
	},
	dropBox: {
		paddingLeft: '6px'
	}
}

function mountFilterMenuItem (array) {
	return array.map((item, index)=> <MenuItem value={item} primaryText={item} key={index}/>)
}

const ToolBarComponent = (props) => {
	const {
		arrayFilter,
		handlerOnChangeOrder,
		handlerOnChangeFilter,
		valueFilter,
		valueOrder
	} = props
	const dropDownFilter = mountFilterMenuItem(arrayFilter)

	return (<Toolbar>
        <ToolbarGroup firstChild={true}>
				<ToolbarTitle text="Order By:" style={styles.titles}/>
          <DropDownMenu value={valueOrder} onChange={handlerOnChangeOrder} labelStyle={styles.dropBox}>
					<MenuItem value={''} primaryText="Field to order" />
            <MenuItem value={REPO_NAME} primaryText={REPO_NAME} />
            <MenuItem value={STARTS} primaryText={STARTS} />
            <MenuItem value={OPEN_ISSUES} primaryText={OPEN_ISSUES} />
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text="Filter By:" style={styles.titles}/>
					<DropDownMenu value={valueFilter} onChange={handlerOnChangeFilter} labelStyle={styles.dropBox}>
					<MenuItem value={''} primaryText="Select a filter" />
            {dropDownFilter}
          </DropDownMenu>
        </ToolbarGroup>
      </Toolbar>)
}

ToolBarComponent.propTypes = {
	handlerOnChangeOrder: PropTypes.func,
	handlerOnChangeFilter: PropTypes.func,
	arrayFilter: PropTypes.array,
	valueFilter: PropTypes.string,
	valueOrder: PropTypes.string
}

export default ToolBarComponent
