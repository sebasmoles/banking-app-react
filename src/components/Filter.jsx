import React, { useState } from 'react';

const Filter = ({ getDate }) => {
	const [date, setDate] = useState('');

	return (
		<div className="filter">
			<input
				type="date"
				className="filter-date"
				onChange={(e) => setDate(e.target.value)}
			/>
			<button className="filter-button" onClick={() => getDate(date)}>
				Filter
			</button>
		</div>
	);
};

export default Filter;
