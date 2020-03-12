import React from 'react';

import { Container, Grid, Header, Image } from 'semantic-ui-react';
import { RegisterForm } from '../components/Form';

import RegisterIllustration from '../images/registerillustration.png';

const Register = props => {
	return (
		<Container
			style={{
				height: '100vh',
				margin: '0',
				backgroundColor: '#FFF9F7',
				padding: '5em'
			}}
			textAlign='center'
		>
			<Header
				as='h1'
				textAlign='center'
				style={{
					fontSize: '2.5em',
					padding: '1em',
					color: '#4B2728'
				}}
			>
				Register
			</Header>
			<RegisterForm props={props} />
		</Container>
	);
};

export default Register;
