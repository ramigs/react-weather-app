import React from 'react';
import Header from './components/Header';
import Container from './components/Container';
import './assets/css/App.css';

function App () {
	const Fragment = React.Fragment;
	return (
		<Fragment>
			<Header />
			<Container />
		</Fragment>
	);
}

export default App;
