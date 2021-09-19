import React from 'react'
import Balance from './Balance'
import AddTransaction from './AddTransaction'
import IncomeList from './IncomeList'
import ExpenseList from './ExpenseList'
import { GlobalContext, GlobalContextProvider } from './context/GlobalState'

const BudgetTool = () => {
    return (
        <GlobalContextProvider>
            <div className="budget-tool-container">
                <Balance/>
                <AddTransaction/>
                <IncomeList/>
                <ExpenseList/>
            </div>
        </GlobalContextProvider>
    )
}

export default BudgetTool

