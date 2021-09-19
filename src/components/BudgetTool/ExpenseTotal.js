import React, { useContext } from 'react'
import { BudgetToolContext } from './context/BudgetToolContext'

const ExpenseTotal = () => {

    const { expenses } = useContext(BudgetToolContext)
    const totalExpenses = expenses.reduce((total, item)=>{
        return (total += item.cost)
    }, 0)

    return (
        <div className="box">
            <span>Spent so far: £{totalExpenses}</span>
        </div>
    )
}

export default ExpenseTotal
