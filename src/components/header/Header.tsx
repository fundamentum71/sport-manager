import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<div>Header</div>
			<Link to="/start">
				<button>Start Page</button>
			</Link>
			<Link to="/">
				<button>Home</button>
			</Link>
			<Link to="/signin">
				<button>Sign In</button>
			</Link>
			<Link to="/signup">
				<button>Sign Up</button>
			</Link>
		</>
	);
};

export default Header;
