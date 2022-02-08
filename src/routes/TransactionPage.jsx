import React, { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import TransactionTable from '../components/TransactionTable';

const TransactionPage = ({ txns }) => {
	const [txnsFiltered, setTxnsFiltered] = useState([]);
	const [dateFilter, setDateFilter] = useState('');

	useEffect(() => {
		setTxnsFiltered(txns);

		if (dateFilter) {
			const newFilter = txns.filter((t) => t.date === dateFilter);
			setTxnsFiltered(newFilter);
		}
	}, [dateFilter, txns]);

	return (
		<div>
			<Filter getDate={(d) => setDateFilter(d)} />
			{txnsFiltered.length > 0 ? (
				<TransactionTable txnsFiltered={txnsFiltered} />
			) : (
				'No transactions to show'
			)}
		</div>
	);
};

export default TransactionPage;
