import React, { useContext } from 'react'
import { BudgetToolContext } from './context/BudgetToolContext';

const Remaining = () => {
    const {expenses, budget } = useContext(BudgetToolContext)

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0)

    const alertType= totalExpenses > budget ? 'alert-negative' : 'alert-positive';
    return (
        <div className={`box-color ${alertType}`}>
            <span>Remaining: £{budget - totalExpenses}</span>
        </div>
    )
}

export default Remaining
