import React, { useState } from 'react';

const HomePage = () => {
	const [showDeposit, setShowDeposit] = useState(false);
	const [showWithdraw, setShowWithdraw] = useState(false);

	const onDepositClick = () => {
		if (showWithdraw) {
			setShowWithdraw(!showWithdraw);
		}
		setShowDeposit(!showDeposit);
	};

	const onWithdrawClick = () => {
		if (showDeposit) {
			setShowDeposit(!showDeposit);
		}
		setShowWithdraw(!showWithdraw);
	};

	return (
		<>
			<div>
				<h2>Balance</h2>
				<span>$0</span>
			</div>
			<div>
				<button onClick={onDepositClick}>Deposit</button>
				<button onClick={onWithdrawClick}>Withdraw</button>
			</div>
			{showDeposit && (
				<div>
					<span>Amount to deposit</span>
					<input type="number" />
					<button>Send</button>
				</div>
			)}
			{showWithdraw && (
				<div>
					<span>Amount to withdraw</span>
					<input type="number" />
					<button>Send</button>
				</div>
			)}
		</>
	);
};

export default HomePage;
