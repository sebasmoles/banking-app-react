import React, { useState } from 'react';

const HomePage = () => {
	// Total amount
	const [amountTotal, setAmountTotal] = useState(0);
	// Deposit/Withdraw amounts
	const [amountToDeposit, setAmountToDeposit] = useState('');
	const [amountToWithdraw, setAmountToWithdraw] = useState('');
	// Deposit/Withdraw buttons
	const [showDeposit, setShowDeposit] = useState(false);
	const [showWithdraw, setShowWithdraw] = useState(false);

	const onDepositClick = () => {
		if (showWithdraw) {
			setShowWithdraw(!showWithdraw);
			setAmountToWithdraw('');
		}
		setShowDeposit(!showDeposit);
	};

	const onWithdrawClick = () => {
		if (showDeposit) {
			setShowDeposit(!showDeposit);
			setAmountToDeposit('');
		}
		setShowWithdraw(!showWithdraw);
	};
	// Send transaction button
	const onDepositSend = () => {
		if (!amountToDeposit) {
			alert('Please enter amount to deposit');
			return;
		}
		if (amountToDeposit <= 0) {
			alert('Please enter amount to deposit that is greater than 0');
			return;
		}
		if (
			window.confirm(
				`Amount to deposit is $${amountToDeposit}. Click OK to confirm and send`
			)
		) {
			setAmountTotal(amountTotal + amountToDeposit);
			setAmountToDeposit('');
			setShowDeposit(false);
		}
	};
	const onWithdrawSend = () => {
		if (!amountToWithdraw) {
			alert('Please enter amount to withdraw');
			return;
		}
		if (amountToWithdraw <= 0) {
			alert('Please enter amount to withdraw that is greater than 0');
			return;
		}
		if (
			window.confirm(
				`Amount to withdraw is $${amountToWithdraw}. Click OK to confirm and send`
			)
		) {
			const newAmount = amountTotal - amountToWithdraw;

			if (newAmount >= 0) {
				setAmountTotal(newAmount);
				setAmountToWithdraw('');
				setShowWithdraw(false);
				return;
			}

			alert(
				'You do not have that amount of money available. Please make a deposit'
			);
		}
	};
	return (
		<>
			<div>
				<h2>Balance</h2>
				<span>${amountTotal}</span>
			</div>
			<div>
				<button onClick={onDepositClick}>Deposit</button>
				<button onClick={onWithdrawClick}>Withdraw</button>
			</div>
			{showDeposit && (
				<div>
					<span>Amount to deposit</span>
					<input
						type="number"
						placeholder="Amount"
						value={amountToDeposit}
						onChange={(e) => setAmountToDeposit(+e.target.value)}
					/>
					<button onClick={onDepositSend}>Send</button>
				</div>
			)}
			{showWithdraw && (
				<div>
					<span>Amount to withdraw</span>
					<input
						type="number"
						placeholder="Amount"
						value={amountToWithdraw}
						onChange={(e) => setAmountToWithdraw(+e.target.value)}
					/>
					<button onClick={onWithdrawSend}>Send</button>
				</div>
			)}
		</>
	);
};

export default HomePage;
