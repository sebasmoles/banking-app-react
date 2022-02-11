import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

const BalancePage = ({
	amountTotal,
	onDeposit,
	onWithdraw,
	newTransaction
}) => {
	// Deposit/Withdraw amounts
	const [amountToDeposit, setAmountToDeposit] = useState('');
	const [amountToWithdraw, setAmountToWithdraw] = useState('');
	// Deposit/Withdraw formatted amounts
	const [formattedDeposit, setFormattedDeposit] = useState('');
	const [formattedWithdraw, setFormattedWithdraw] = useState('');
	// Deposit/Withdraw buttons
	const [showDeposit, setShowDeposit] = useState(false);
	const [showWithdraw, setShowWithdraw] = useState(false);

	const onDepositClick = () => {
		if (showWithdraw) {
			setShowWithdraw(!showWithdraw);
			setAmountToWithdraw('');
		}
		setShowDeposit(!showDeposit);
		setAmountToDeposit('');
	};

	const onWithdrawClick = () => {
		if (showDeposit) {
			setShowDeposit(!showDeposit);
			setAmountToDeposit('');
		}
		setShowWithdraw(!showWithdraw);
		setAmountToWithdraw('');
	};
	// Send transaction events
	const onDepositSend = (e) => {
		e.preventDefault();

		if (!amountToDeposit) {
			alert('Please enter amount to deposit');
			return;
		}
		if (amountToDeposit <= 0) {
			alert('Please enter an amount to deposit that is greater than 0');
			return;
		}
		if (
			window.confirm(
				`Amount to deposit is ${formattedDeposit}. Click OK to confirm and send`
			)
		) {
			const newBalance = amountTotal + amountToDeposit;

			onDeposit(newBalance);
			createTransaction(newBalance, amountToDeposit, 'Deposit');
			setAmountToDeposit('');
			setFormattedDeposit('');
			setShowDeposit(false);
		}
	};
	const onWithdrawSend = (e) => {
		e.preventDefault();

		if (!amountToWithdraw) {
			alert('Please enter amount to withdraw');
			return;
		}
		if (amountToWithdraw <= 0) {
			alert('Please enter an amount to withdraw that is greater than 0');
			return;
		}
		if (
			window.confirm(
				`Amount to withdraw is ${formattedWithdraw}. Click OK to confirm and send`
			)
		) {
			const newBalance = amountTotal - amountToWithdraw;

			if (newBalance >= 0) {
				onWithdraw(newBalance);
				createTransaction(newBalance, amountToWithdraw, 'Withdraw');
				setAmountToWithdraw('');
				setFormattedWithdraw('');
				setShowWithdraw(false);
				return;
			}

			alert(
				'You do not have that amount of money available. Please make a deposit'
			);
		}
	};
	// Create new transaction
	const createTransaction = (balance, amount, type) => {
		const transaction = {
			id: uuidv4(),
			date: dayjs().format('YYYY-MM-DD'),
			description: 'BANKING APP DES:CCD+',
			type: type,
			amount: amount,
			balance: balance
		};
		newTransaction(transaction);
	};
	return (
		<main className="balance">
			<div className="balance-body">
				<h2 className="balance-title">Balance</h2>
				<NumberFormat
					value={amountTotal}
					displayType={'text'}
					thousandSeparator={true}
					prefix={'$'}
					className="balance-value"
				/>
			</div>
			<div className="balance-buttons">
				<button
					onClick={onDepositClick}
					className={`balance-buttons-deposit ${
						showDeposit ? 'show-deposit' : ''
					}`}
				>
					{showDeposit ? 'Close' : 'Deposit'}
				</button>
				<button
					onClick={onWithdrawClick}
					className={`balance-buttons-withdraw ${
						showWithdraw ? 'show-withdraw' : ''
					}`}
				>
					{showWithdraw ? 'Close' : 'Withdraw'}
				</button>
			</div>
			{showDeposit && (
				<form onSubmit={onDepositSend} className="balance-form">
					<label htmlFor="deposit-input">Amount to deposit</label>
					<NumberFormat
						id="deposit-input"
						className="balance-form-input"
						autoComplete="off"
						thousandsGroupStyle="thousand"
						placeholder="Amount"
						value={amountToDeposit}
						prefix="$"
						decimalSeparator="."
						displayType="input"
						type="text"
						thousandSeparator={true}
						allowNegative={false}
						onValueChange={(values) => {
							const { formattedValue, value } = values;
							setAmountToDeposit(+value);
							setFormattedDeposit(formattedValue);
						}}
					/>
					<button type="submit">Send</button>
				</form>
			)}
			{showWithdraw && (
				<form onSubmit={onWithdrawSend} className="balance-form">
					<label htmlFor="withdraw-input">Amount to withdraw</label>
					<NumberFormat
						id="withdraw-input"
						className="balance-form-input"
						autoComplete="off"
						thousandsGroupStyle="thousand"
						placeholder="Amount"
						value={amountToWithdraw}
						prefix="$"
						decimalSeparator="."
						displayType="input"
						type="text"
						thousandSeparator={true}
						allowNegative={false}
						onValueChange={(values) => {
							const { formattedValue, value } = values;
							setAmountToWithdraw(+value);
							setFormattedWithdraw(formattedValue);
						}}
					/>
					<button type="submit">Send</button>
				</form>
			)}
		</main>
	);
};

export default BalancePage;
