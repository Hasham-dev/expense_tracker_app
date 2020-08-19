import React from 'react';
import './App.css';
import Header from './Header'
import { Balance } from './Balance';
import { AccountSummary } from './AccountSummary';
import { TransactionHistory } from './TransactionHistory';
import { AddTransaction } from './AddTransaction';

//Import Global provider to wrap 
import { GLobalProvider } from './context/GlobalState';

function App() {
  return (
    <GLobalProvider>

      <Header />  
      <div className='container'>
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />  
      </div>      

    </GLobalProvider>
  );
}

export default App;
