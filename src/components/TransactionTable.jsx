import React from 'react';
import TransactionItem from './TransactionItem';

const TransactionTable = ({ txnsFiltered }) => {
	return (
		<div className="transaction-table">
			<table>
				<thead>
					<tr>
						<th>Date</th>
						<th>Description</th>
						<th>Type</th>
						<th>Amount</th>
						<th>Balance</th>
					</tr>
				</thead>
				<tbody>
					{txnsFiltered.map((item) => (
						<TransactionItem item={item} key={item.id} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TransactionTable;
