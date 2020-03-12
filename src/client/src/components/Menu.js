import React, { useContext, useState } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/auth';

function MenuBar(props) {
	const { user, logout } = useContext(AuthContext);
	const pathname = window.location.pathname;
	const path = pathname === '/' ? 'home' : pathname.substr(1);
	const [activeItem, setActiveItem] = useState(path);

	const handleItemClick = (e, { name }) => setActiveItem(name);

	return (
		<>
			{user ? (
				<Menu text size='massive' color='teal'>
					<Menu.Item header={activeItem} as={Link} to='/mastervault'>
						<Icon name='angle left' />
						Master Vault
					</Menu.Item>
					<Menu.Menu position='right'>
						<Menu.Item
							name='logout'
							onClick={logout}
							as={Link}
							to='/'
						/>
					</Menu.Menu>
				</Menu>
			) : (
				<Menu pointing secondary size='massive' color='teal'>
					<Menu.Menu position='right'>
						<Menu.Item
							name='login'
							active={activeItem === 'login'}
							onClick={handleItemClick}
							as={Link}
							to='/'
						/>
						<Menu.Item
							name='register'
							active={activeItem === 'register'}
							onClick={handleItemClick}
							as={Link}
							to='/register'
						/>
					</Menu.Menu>
				</Menu>
			)}
		</>
	);
}
export { MenuBar };
