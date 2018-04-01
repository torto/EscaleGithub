import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import store, {history} from './store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from './views/App/App'

import './index.css'

const target = document.querySelector('#root')

render(<Provider store={store}>
	<ConnectedRouter history={history}>
		<MuiThemeProvider>
			<App/>
		</MuiThemeProvider>
	</ConnectedRouter>
</Provider>, target)
