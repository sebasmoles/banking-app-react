import React from 'react';

const TransactionItem = ({ item }) => {
    return (
        <tr>
            <td> {item.date} </td>
            <td> {item.description} </td>
            <td> {item.type === 0 ? 'Debit' : 'Credit'} </td>
            <td> {item.amount} </td>
            <td> {item.balance} </td>
        </tr>
    )
}

export default TransactionItem;
