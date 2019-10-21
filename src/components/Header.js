import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/svg/logo.svg';

export default () => (
	<Navbar bg="dark" variant="dark" expand="lg">
		<Navbar.Brand href="#home">
			<img src={logo} className="App-logo" alt="logo" />
		</Navbar.Brand>
		<h2 className="navbar-title">React Weather</h2>
	</Navbar>
);
