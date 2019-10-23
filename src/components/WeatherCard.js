import React, { useState } from 'react';
import '../assets/css/weather-card.css';
import { unsplash } from '../plugins/unsplash';

export default ({ onDelete, item: { main, name } }) => {
	const getPhotoURL = async () => {
		try {
			const { data } = await unsplash.get('', {
				params : {
					query : name
				}
			});
			const id = data.results[Math.floor(Math.random() * 10) + 1].id;
			setPhotoURL(`https://source.unsplash.com/${id}/536x181`);
		} catch (error) {
			setPhotoURL('https://source.unsplash.com/MUIK2uL6pMo/536x181');
		}
	};
	const [
		photoURL,
		setPhotoURL
	] = useState(getPhotoURL);
	const style = {
		backgroundImage : 'url(' + photoURL + ')'
	};

	return (
		<div className="weather-card" style={style}>
			<h3>{name}</h3>
			<button onClick={onDelete} className="weather-card__delete">
				<span className="fa fa-trash" />
			</button>
			<div className="weather-temp">
				<div className="weather-temp__time">
					<h2 className="weather-temp__time-header">Temperatures</h2>
					<ul>
						<li>Max: {main.temp_max}</li>
						<li>Min: {main.temp_min}</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
