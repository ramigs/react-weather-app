import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Search from './Search';
import WeatherCard from './WeatherCard';
export default () => {
	const [
		items,
		setItems
	] = useState([]);
	const [
		show,
		setShow
	] = useState(false);
	const deleteCard = (id) => {
		setItems(items.filter((item) => item.id !== id));
	};

	const addItem = (item) => {
		if (items.find((aux) => aux.name === item.name)) alert('this city already exists');
		else {
			setItems([
				...items,
				item
			]);
			setShow(true);
		}
	};
	return (
		<div className="container">
			<Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>
				City added!
			</Alert>
			<Search onSearch={addItem} />
			<h4>
				Total Cities <span className="badge badge-info">{items.length}</span>
			</h4>
			<div className="cards-list">
				<div className="row padding" />
				<div className="row padding">
					{items.map((item) => (
						<div key={item.id} className="col-4 col-6 col-12">
							<WeatherCard onDelete={() => deleteCard(item.id)} key={item.id} item={item} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
