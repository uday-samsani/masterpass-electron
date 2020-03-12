import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';

import { MenuBar } from './components/Menu';
import Login from './pages/Login';
import Register from './pages/Register';
import MasterVault from './pages/MasterVault';
import Password from './pages/Password';
import Card from './pages/Card';
import Text from './pages/Text';

const NavRoute = ({ exact, path, component: Component }) => (
	<Container>
		<Route
			exact={exact}
			path={path}
			render={props => (
				<div>
					<MenuBar />
					<Component {...props} fluid />
				</div>
			)}
		/>
	</Container>
);

const App = () => {
	return (
		<AuthProvider>
			<Router>
				<AuthRoute exact path='/register' component={Register} />
				<NavRoute exact path='/mastervault' component={MasterVault} />
				<NavRoute
					exact
					path='/passwords/:passwordId'
					component={Password}
				/>
				<NavRoute exact path='/cards/:cardId' component={Card} />
				<NavRoute exact path='/texts/:textId' component={Text} />
				<AuthRoute path='/' component={Login} />
			</Router>
		</AuthProvider>
	);
};

export default App;
