import React from 'react';
import './Nav.css';
import homelogo from './homelogo.png';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div className="logo">
			<a className="logopng">
				<img src={homelogo} height="90" width="180" />
			</a>
			<ul>
				<li>
					<Link to = "/">Home</Link>
				</li>
				<li>
					<Link to = "/contact">Contact</Link>
				</li>
			</ul>
		</div>

	)
}

export default Nav;
