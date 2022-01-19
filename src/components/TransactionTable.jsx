import React from 'react'
import TransactionItem from './TransactionItem'

const TransactionTable = ({ txnsFiltered, getAmountSort }) => {
    const onClick = () => {
        const sorted = [...txnsFiltered].sort((a, b) => {return a.amount - b.amount});

        getAmountSort(sorted);
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th onClick={onClick}>Amount($)</th>
                        <th>Available Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {txnsFiltered.map(item => (
                        <TransactionItem item={item} key={item.id} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TransactionTable
