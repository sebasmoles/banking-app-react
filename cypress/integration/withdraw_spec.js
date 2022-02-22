describe('withdraw', () => {
	it('user can withdraw money', () => {
		// Visit home page
		cy.visit('/');

		// Check account balance
		let oldBalance;
		cy.get('[data-testid=available-balance-value]').then(
			($balance) => (oldBalance = $balance.text())
		);

		// Click on withdraw button
		cy.findByRole('button', { name: /withdraw/i }).click();

		// Add amount and click send
		const withdrawAmount = 75;
		cy.findByPlaceholderText(/amount/i).type(withdrawAmount);
		cy.findByRole('button', { name: /send/i }).click();

		// Verify if withdraw amount was deducted
		cy.get('[data-testid=available-balance-value').then(($balance) => {
			const convertedOldBalance = parseFloat(
				oldBalance.replace(/\$|,/g, '')
			);
			const convertedNewBalance = parseFloat(
				$balance.text().replace(/\$|,/g, '')
			);
			expect(convertedOldBalance - withdrawAmount).to.equal(
				convertedNewBalance
			);
		});
	});
});
