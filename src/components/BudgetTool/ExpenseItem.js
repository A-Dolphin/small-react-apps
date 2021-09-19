import React, {useContext} from 'react'
import { BudgetToolContext } from './context/BudgetToolContext';
import * as AiIcons from 'react-icons/ai';

const ExpenseItem = (props) => {

    const { dispatch } = useContext(BudgetToolContext);
    const handleRemoveExpense = () => {
        dispatch({
            type: 'REMOVE_EXPENSE',
            payload: props.id
        })
    }

    return (
        <li className="list-group-item">
            {props.name}
            <div>
                <span className="expense-item-cost">
                    £{props.cost}
                </span>
                <AiIcons.AiOutlineClose size="1.5em" onClick={handleRemoveExpense}></AiIcons.AiOutlineClose>
            </div>
        </li>
    )
}

export default ExpenseItem
