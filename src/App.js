import React from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import TransactionTable from './components/TransactionTable';
import './App.css';

function App() {
  const txns = [
      {
        "id": 1,
        "date": "2022-01-01",
        "description": "HACKERBANK INC. DES:CCD+ ID: 33375894749",
        "type": 0,
        "amount": 1985.4,
        "balance": "$12,234.45"
      },
      {
        "id": 2,
        "date": "2022-01-01",
        "description": "HACKERBANK INC. DES:CCD+ ID: 33375894749",
        "type": 0,
        "amount": 1985.4,
        "balance": "$12,234.45"
      },
      {
        "id": 3,
        "date": "2022-01-01",
        "description": "HACKERBANK INC. DES:CCD+ ID: 33375894749",
        "type": 0,
        "amount": 1985.4,
        "balance": "$12,234.45"
      },
      {
        "id": 4,
        "date": "2022-01-01",
        "description": "HACKERBANK INC. DES:CCD+ ID: 33375894749",
        "type": 0,
        "amount": 1985.4,
        "balance": "$12,234.45"
      },
      {
        "id": 5,
        "date": "2022-01-01",
        "description": "HACKERBANK INC. DES:CCD+ ID: 33375894749",
        "type": 0,
        "amount": 1985.4,
        "balance": "$12,234.45"
      }
  ]

  return (
    <div>
        <Header />
        <Filter />
        <TransactionTable txns={txns} />
    </div>
  );
}

export default App;
