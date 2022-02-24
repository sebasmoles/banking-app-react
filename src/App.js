import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BalancePage from './routes/BalancePage';
import TransactionPage from './routes/TransactionPage';
import NotFoundPage from './routes/NotFoundPage';
import { v4 as uuidv4 } from 'uuid';
import './scss/index.scss';

function App() {
	// Total balance amount
	const [amountTotal, setAmountTotal] = useState(1000);
	// Transactions history with example data
	const [txns, setTxns] = useState([
		{
			id: uuidv4(),
			date: '2022-02-01',
			description: 'BANKING APP DES:CCD+',
			type: 'Deposit',
			amount: 30000,
			balance: 30000
		},
		{
			id: uuidv4(),
			date: '2022-02-07',
			description: 'BANKING APP DES:CCD+',
			type: 'Withdraw',
			amount: 25000,
			balance: 5000
		},
		{
			id: uuidv4(),
			date: '2022-02-14',
			description: 'BANKING APP DES:CCD+',
			type: 'Withdraw',
			amount: 4000,
			balance: 1000
		}
	]);
	// Sort example data in first load
	useEffect(() => {
		setTxns((txns) => txns.reverse());
	}, []);
	return (
		<Router>
			<div className="container">
				<Header />
				<Routes>
					<Route
						path="/"
						element={
							<BalancePage
								amountTotal={amountTotal}
								onDeposit={(a) => setAmountTotal(a)}
								onWithdraw={(a) => setAmountTotal(a)}
								newTransaction={(t) => setTxns([t, ...txns])}
							/>
						}
					/>
					<Route
						path="/transactions"
						element={<TransactionPage txns={txns} />}
					/>
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
