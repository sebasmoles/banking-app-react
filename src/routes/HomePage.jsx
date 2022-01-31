import React, { useState } from 'react';
import NumberFormat from 'react-number-format';

const HomePage = () => {
	// Total amount
	const [amountTotal, setAmountTotal] = useState(0);
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
			setAmountTotal(amountTotal + amountToDeposit);
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
			const newAmount = amountTotal - amountToWithdraw;

			if (newAmount >= 0) {
				setAmountTotal(newAmount);
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
	return (
		<>
			<div>
				<h2>Available Balance</h2>
				<NumberFormat
					value={amountTotal}
					displayType={'text'}
					thousandSeparator={true}
					prefix={'$'}
				/>
			</div>
			<div>
				<button onClick={onDepositClick}>Deposit</button>
				<button onClick={onWithdrawClick}>Withdraw</button>
			</div>
			{showDeposit && (
				<div>
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
				<div>
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
		</>
	);
};

export default HomePage;
