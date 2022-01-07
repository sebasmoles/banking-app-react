import React from 'react';
import Header from './components/Header';
import TransactionPage from './routes/TransactionPage';
import './App.css';

function App() {
  return (
    <div>
        <Header />
        <TransactionPage />
    </div>
  );
}

export default App;
