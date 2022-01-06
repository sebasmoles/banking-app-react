import React from 'react'
import TransactionItem from './TransactionItem'

const TransactionTable = ({ txns }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Amount($)</th>
                        <th>Available Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {txns.map(item => (
                        <TransactionItem item={item} key={item.id} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TransactionTable
