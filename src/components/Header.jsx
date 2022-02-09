import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/index.scss';

const Header = () => {
	return (
		<header className="header">
			<Link to="/" className="header-logo">
				Banking App
			</Link>
			<Link to="/transactions" className="header-navlink">
				Transactions
			</Link>
		</header>
	);
};

export default Header;
