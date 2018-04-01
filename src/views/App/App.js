import React from 'react'
import { Route } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import List from '../List/List'
import Toolbar from '../Toolbar/Toolbar'

import './App.css'

const App = () => (
	<div>
		<AppBar title="Escale Github Test" />
		<Toolbar title="Escale Github Test" />
		<main>
      <Route exact path="/" component={List} />
    </main>
	</div>
)

export default App
