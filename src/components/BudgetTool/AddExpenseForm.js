import React, { useState, useContext } from 'react'
import { BudgetToolContext } from './context/BudgetToolContext'
import { v4 as uuidv4 } from 'uuid'

const AddExpenseForm = () => {
    const {dispatch} = useContext(BudgetToolContext)

    const [name, setName] = useState('')
    const [cost, setCost] = useState('')

    const onSubmit =(event) => {
        event.preventDefault();

        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),       
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="add-expense-container">
                <div className="add-expense-row">
                    <label for="name">Name</label>
                    <input 
                        required='required' 
                        type='text' 
                        className="form-control" 
                        id='name' 
                        value={name}
                        onChange={(event)=> setName(event.target.value)}
                    ></input>
                </div>
                <div className="add-expense-row">
                    <label for="cost">Cost</label>
                    <input 
                        required='required' 
                        type='text' 
                        className="form-control" 
                        id='cost'
                        value={cost}
                        onChange={(event)=> setCost(event.target.value)}
                    ></input>
                </div>
                <div className="add-expense-row">
                    <button type="submit" className="btn-submit">Save</button>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseForm
