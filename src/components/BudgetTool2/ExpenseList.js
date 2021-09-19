import React,{ useContext } from 'react'
import ExpenseItem from './ExpenseItem'
import { BudgetToolContext } from './context/BudgetToolContext'

const ExpenseList = () => {
   const {expenses} = useContext(BudgetToolContext);

    return (
        <ul>
            {expenses.map(((expense) =>(
                <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost}/>
            )))}
        </ul>
    )
}

export default ExpenseList
