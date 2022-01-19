import React, { useState } from 'react';

const Filter = ({ getDate }) => {
    const initialState = '';

    const [date, setDate] = useState(initialState);

    const dateFilter = () => {
        getDate(date);
    }

    return (
        <div>
            <input type="date" onChange={e => setDate(e.target.value)}/>
            <button onClick={dateFilter}>Filter</button>            
        </div>
    )
}

export default Filter;
