import React, {useContext} from 'react'
import { BudgetToolContext } from './context/BudgetToolContext'

const Budget = () => {
    const { budget } = useContext(BudgetToolContext);

    return (
        <div className="box">
            <span>Budget: £{budget}</span>
        </div>
    )
}

export default Budget
