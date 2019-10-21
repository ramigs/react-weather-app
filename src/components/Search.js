import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { axios } from '../plugins/axios';

let timeout = {};
export default ({ onSearch }) => {
	const [
		search,
		setSearch
	] = useState('');
	const [
		result,
		setResult
	] = useState(null);
	const getLocations = async (value) => {
		try {
			if (!value || !search) return;
			const { data } = await axios.get('', {
				params : {
					q : value
				}
			});
			setResult(data);
			console.log('data:', data);
		} catch (error) {
			console.log('error: ', error);
			setResult(null);
		}
	};
	const debounceFunc = (e) => {
		const val = e.target.value;
		setSearch(val);
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			getLocations(val);
		}, 300);
	};
	return (
		<div className="search-container">
			<input
				id="SearchInput"
				onKeyDown={(e) => {
					if (e.key === 'Enter' && result) {
						onSearch(result);
						setResult(null);
						setSearch('');
					}
				}}
				onChange={debounceFunc}
				value={search}
				type="text"
				className="search-input"
				placeholder="Search City..."
			/>
			<Button
				onClick={() => {
					onSearch(result);
					setResult(null);
					setSearch('');
				}}
				disabled={!search || !result}
				className="search-button"
				variant="primary"
			>
				<span className="fa fa-plus" />
			</Button>
		</div>
	);
};
