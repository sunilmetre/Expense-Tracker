import React from 'react';
import './Expense.css';
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) =>{
    return(
        <div className='expenses'>
            {
                props.item.map(
                    expense =>(
                        <ExpenseItem
                            date = {expense.date}
                            title = {expense.title}
                            amount = {expense.amount}/>
                       
                    )
                )
            }
    
         </div>

    );
}

export default Expenses;