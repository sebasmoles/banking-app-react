import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="center">
			<Link to="/">Banking App</Link>
			<Link to="/transactions">Transactions</Link>
		</header>
	);
};

export default Header;
