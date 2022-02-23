import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { v4 as uuidv4 } from 'uuid';
import TransactionPage from './TransactionPage';

test('on initial render user can see transactions sample, and can filter them', async () => {
	// Arrange
	const txnsSample = [
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
	];
	render(<TransactionPage txns={txnsSample} />);

	// Assert
	expect(await screen.findByRole('table')).toBeVisible();

	// Filter by invalid date
	fireEvent.change(screen.getByTestId('input-filter-date'), {
		target: { value: '2022-01-14' }
	});
	userEvent.click(screen.getByTestId('button-filter-date'));

	// Assert
	expect(screen.getByText(/no transactions to show/i)).toBeVisible();

	// Filter by valid date
	fireEvent.change(screen.getByTestId('input-filter-date'), {
		target: { value: '2022-02-14' }
	});
	userEvent.click(screen.getByTestId('button-filter-date'));

	// Assert
	expect(await screen.findByRole('table')).toBeVisible();
});
