import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { LoginForm } from '../components/Form';

const Login = props => {
	return (
		<Container style={{ height: '100vh', margin: '0', padding: '4em' }}>
			<Header
				as='h1'
				textAlign='center'
				style={{
					fontSize: '2.5em',
					padding: '1em',
					color: '#3f58d4'
				}}
			>
				Log In
			</Header>
			<LoginForm props={props} />
		</Container>
	);
};

export default Login;
