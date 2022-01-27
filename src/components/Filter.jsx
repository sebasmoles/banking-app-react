import React, { useState } from 'react';

const Filter = ({ getDate }) => {
	const [date, setDate] = useState('');

	return (
		<div>
			<input type="date" onChange={(e) => setDate(e.target.value)} />
			<button onClick={() => getDate(date)}>Filter</button>
		</div>
	);
};

export default Filter;
