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
		showSuccessAdded,
		setShowSuccessAdded
	] = useState(false);
	const [
		showSuccessDeleted,
		setShowSuccessDeleted
	] = useState(false);
	const [
		showWarningExists,
		setShowWarningExists
	] = useState(false);
	const [
		itemDeleted,
		setItemDeleted
	] = useState('');
	const deleteCard = (i) => {
		setItems(items.filter((item) => item.id !== i.id));
		setShowSuccessAdded(false);
		setShowWarningExists(false);
		setShowSuccessDeleted(true);
		setItemDeleted(i.name);
	};

	const addItem = (item) => {
		if (items.find((aux) => aux.name === item.name)) {
			setShowSuccessAdded(false);
			setShowSuccessDeleted(false);
			setShowWarningExists(true);
		} else {
			setItems([
				...items,
				item
			]);
			setShowSuccessDeleted(false);
			setShowWarningExists(false);
			setShowSuccessAdded(true);
		}
	};
	return (
		<div className="container">
			<Alert show={showSuccessAdded} variant="success" onClose={() => setShowSuccessAdded(false)} dismissible>
				City {items[items.length - 1] ? items[items.length - 1].name : ''} added!
			</Alert>
			<Alert show={showSuccessDeleted} variant="success" onClose={() => setShowSuccessDeleted(false)} dismissible>
				City {itemDeleted} deleted!
			</Alert>
			<Alert show={showWarningExists} variant="warning" onClose={() => setShowWarningExists(false)} dismissible>
				City already exists!
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
							<WeatherCard onDelete={() => deleteCard(item)} key={item.id} item={item} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
