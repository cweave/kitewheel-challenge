import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/navigation/Header';
import ActionBar from './components/action-bar/ActionBar';
import Admin from './views/Admin';
import Projects from './views/Projects';

function App() {
	return (
		<Router>
			<header>
				<Header />
			</header>

			<div className="wrapper">
				<ActionBar />

				<Switch>
					<Route path="/admin" component={Admin} />
					<Route path="/projects" component={Projects} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
