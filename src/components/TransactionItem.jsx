import React from 'react';
import NumberFormat from 'react-number-format';

const TransactionItem = ({ item }) => {
	return (
		<tr>
			<td> {item.date} </td>
			<td> {item.description} </td>
			<td> {item.type} </td>
			<td>
				<NumberFormat
					value={item.amount}
					displayType={'text'}
					thousandSeparator={true}
					prefix={'$'}
				/>
			</td>
			<td>
				<NumberFormat
					value={item.balance}
					displayType={'text'}
					thousandSeparator={true}
					prefix={'$'}
				/>
			</td>
		</tr>
	);
};

export default TransactionItem;
