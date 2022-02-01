import React, { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import TransactionTable from '../components/TransactionTable';
import '../index.css';

const TransactionPage = ({ txns }) => {
	const [txnsFiltered, setTxnsFiltered] = useState([]);
	const [dateFilter, setDateFilter] = useState('');

	useEffect(() => {
		setTxnsFiltered(txns);

		if (dateFilter) {
			const filtered = txns.filter((t) => t.date === dateFilter);
			setTxnsFiltered(filtered);
		}
	}, [dateFilter]);

	const sortAmount = () => {
		const sorted = [...txnsFiltered].sort((a, b) => {
			return a.amount - b.amount;
		});
		setTxnsFiltered(sorted);
	};

	return (
		<div>
			<Filter getDate={(d) => setDateFilter(d)} />
			{txnsFiltered.length > 0 ? (
				<TransactionTable
					txnsFiltered={txnsFiltered}
					sortAmount={sortAmount}
				/>
			) : (
				'No transactions to show'
			)}
		</div>
	);
};

export default TransactionPage;
