import React from 'react'
import Budget from './Budget'
import ExpenseList from './ExpenseList'
import ExpenseTotal from './ExpenseTotal'
import Remaining from './Remaining'
import './BudgetTool.css'
import AddExpenseForm from './AddExpenseForm'
import { BudgetToolProvider } from './context/BudgetToolContext'

const BudgetTool = () => {
    return (
    <BudgetToolProvider>
        <div className="budget-tool-container">
            <h1>Budget tool</h1>
            <div className="stats-container">
                <div className="stat-row">
                    <Budget/>
                </div>
                <div className="stat-row">
                    <Remaining/>
                </div>
                <div className="stat-row">
                    <ExpenseTotal/>
                </div>
            </div>
            <h3 className="subtitle">Expenses</h3>
            <div className="expense-list-container">
                <div className="stat-row">
                    <ExpenseList/>
                </div>
            </div>
            <h3 className="subtitle">Add Expense</h3>
            <div className="row">
                <div className="col">
                    <AddExpenseForm/>
                </div>
            </div>
        </div>
    </BudgetToolProvider>
    )
}

export default BudgetTool
