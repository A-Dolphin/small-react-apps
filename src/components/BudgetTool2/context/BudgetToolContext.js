import { createContext, useReducer } from "react"

const BudgetToolReducer = (state, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            }
        case 'REMOVE_EXPENSE':  
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.payload)
            }
        default:
            return state;
    }
}

const initialState = {
    budget: 2000,
    expenses: [
        {id: 12, name:'shopping', cost:50},
        {id: 14, name:'car', cost:100},
        {id: 15, name:'holiday', cost:350},
    ],
};

export const BudgetToolContext = createContext();

export const BudgetToolProvider = (props) => {
    const[state, dispatch] = useReducer(BudgetToolReducer, initialState);

    return(<BudgetToolContext.Provider value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
    }}>
        {props.children}

    </BudgetToolContext.Provider>)
};