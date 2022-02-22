describe('deposit', () => {
	it('user can make a deposit', () => {
		// Visit home page
		cy.visit('/');

		// Check account balance
		let oldBalance;
		cy.get('[data-testid=available-balance-value]').then(
			($balance) => (oldBalance = $balance.text())
		);

		// Click on deposit button
		cy.findByRole('button', { name: /deposit/i }).click();

		// Add amount and click send
		const depositAmount = 100;
		cy.findByPlaceholderText(/amount/i).type(depositAmount);
		cy.findByRole('button', { name: /send/i }).click();

		// Verify if deposit amount was added
		cy.get('[data-testid=available-balance-value').then(($balance) => {
			const convertedOldBalance = parseFloat(
				oldBalance.replace(/\$|,/g, '')
			);
			const convertedNewBalance = parseFloat(
				$balance.text().replace(/\$|,/g, '')
			);
			expect(convertedOldBalance + depositAmount).to.equal(
				convertedNewBalance
			);
		});
	});
});
