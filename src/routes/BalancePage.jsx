import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import '../scss/index.scss';

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
	};

	const onWithdrawClick = () => {
		if (showDeposit) {
			setShowDeposit(!showDeposit);
			setAmountToDeposit('');
		}
		setShowWithdraw(!showWithdraw);
	};
	// Send transaction events
	const onDepositSend = () => {
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
	const onWithdrawSend = () => {
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
			description: 'BANKING APP INC. DES:CCD+',
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
					className="balance-buttons-deposit"
				>
					Deposit
				</button>
				<button
					onClick={onWithdrawClick}
					className="balance-buttons-withdraw"
				>
					Withdraw
				</button>
			</div>
			{showDeposit && (
				<div className="balance-form">
					<span>Amount to deposit</span>
					<NumberFormat
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
					<button onClick={onDepositSend}>Send</button>
				</div>
			)}
			{showWithdraw && (
				<div className="balance-form">
					<span>Amount to withdraw</span>
					<NumberFormat
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
					<button onClick={onWithdrawSend}>Send</button>
				</div>
			)}
		</main>
	);
};

export default BalancePage;
