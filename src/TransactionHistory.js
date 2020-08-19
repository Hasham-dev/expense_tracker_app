import React, {useContext} from 'react';

//Importing global context
import {GlobalContext} from './context/GlobalState'
// importing transaction
import {Transaction} from './Transaction';

export const TransactionHistory = () => {

    
    const {transactions} = useContext(GlobalContext);
    


    return (
        <div>
            <h3>
                Transaction History
            </h3>
            <ul className="list">
                {transactions.map(transaction => 
                    (
                    <Transaction key={transaction.id} transaction={transaction} />
                    )
                )}
            </ul>
        </div>
    )
}