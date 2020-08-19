import React, {createContext,useReducer} from 'react';
import AppReducer from './AppReducer'

//Creating intial state
const intialState = {
    transactions: []
}

//Creeating Global context
export const GlobalContext = createContext(intialState);

//Creating provider of global state
export const GLobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer,intialState);


// Action for transaction

function delTransaction(id){
    dispatch({
        type: "DELETE_TRANSACTION",
        payload: id
    });
}

function addTransaction(transaction){
    dispatch({
        type: "ADD_TRANSACTION",
        payload: transaction
    })
}

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            delTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
}