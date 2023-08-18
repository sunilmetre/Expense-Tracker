import React, { useState } from 'react';

import Expenses from "./Components/Expenses/Expense";
import NewExpense from './Components/Expenses/new Expense/NewExpense';

let DUMMY_EXPENSE = [
    {
        id:'e1',
        title:'school Fee',
        amount:250,
        date:new Date(2023,5,12)
    },
    {
        id:'e2',
        title:'Books',
        amount:230,
        date:new Date(2023,2,22)
    },
    {
        id:'e3',
        title:'House Rent',
        amount:700,
        date:new Date(2023,54,2)
    },
    {
        id:'e4',
        title:'Food',
        amount:540,
        date:new Date(2023,5,5)
    }
];

const App = () =>{

    const[expenses,setExpenses] = useState(DUMMY_EXPENSE)

    const addExpenseHandler = (expense) =>{
        const updatedExpense = [expense, ...expenses];
        setExpenses(updatedExpense);
    };
    return(
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses item={expenses}/>

        </div>
    );
}

export default App;