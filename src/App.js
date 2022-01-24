import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './routes/HomePage';
import TransactionPage from './routes/TransactionPage';
import NotFoundPage from './routes/NotFoundPage';
import './index.css';

function App() {
  return (
    <Router>
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/transactions" element={<TransactionPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
