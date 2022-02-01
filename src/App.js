import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './routes/HomePage';
import TransactionPage from './routes/TransactionPage';
import NotFoundPage from './routes/NotFoundPage';
import './index.css';

function App() {
	// Total balance amount
	const [amountTotal, setAmountTotal] = useState(0);
	// Transactions history
	const [txns, setTxns] = useState([]);
	return (
		<Router>
			<div>
				<Header />
				<Routes>
					<Route
						path="/"
						element={
							<HomePage
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
