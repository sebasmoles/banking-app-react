import React, { useState } from 'react';

const HomePage = () => {
	const [showDeposit, setShowDeposit] = useState(false);
	const [showWithdraw, setShowWithdraw] = useState(false);
	return (
		<>
			<div>
				<h2>Balance</h2>
				<span>$0</span>
			</div>
			<div>
				<button>Deposit</button>
				<button>Withdraw</button>
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
