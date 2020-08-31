import React from 'react';
import { NavLink } from 'react-router-dom';
import Bell from '../../assets/bell.svg';
import User from '../../assets/user.svg';
import Help from '../../assets/help.svg';

const Navigation = () => {
	return (
		<nav>
			<ul className="nav-items">
				<li>
					<NavLink to="/projects" activeClassName="active">
						Projects
					</NavLink>
				</li>
				<li>
					<NavLink to="/admin">Admin</NavLink>
				</li>
				<li>
					<img src={Bell} alt="Notifications" />
				</li>
				<li>
					<img src={User} alt="Profile" />
				</li>
				<li>
					<img src={Help} alt="Help" />
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
