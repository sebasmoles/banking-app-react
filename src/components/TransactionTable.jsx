import React from 'react';
import TransactionItem from './TransactionItem';

const TransactionTable = ({ txnsFiltered, sortAmount }) => {
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Date</th>
						<th>Description</th>
						<th>Type</th>
						<th onClick={sortAmount}>Amount($)</th>
						<th>Available Balance</th>
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
