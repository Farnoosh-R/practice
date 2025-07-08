import { useReducer, useState } from "react";

let initialState = {
    count: 0
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "+": {
            return {...state, count: state.count + action.payload}
        }
        case "-": {
            return {...state, count: state.count - action.payload}
        }
        case "+5": {
            return {...state, count: state.count + action.payload}
        }
        case "reset": {
            return initialState;
        }
            
        default:
            return state;
    }
}

const Counter = () => {

    const [counter, dispatch] = useReducer(reducer, initialState);

    return(
        <div className="counter">
            <h1 className="mb-5">counter: {counter.count}</h1>
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 mr-2 px-4 rounded" onClick={() => dispatch({type: "+", payload: 1})}>+</button>
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 mr-2 rounded" onClick={() => dispatch({type: "-", payload: 1})}>-</button>
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 mr-2 rounded" onClick={() => dispatch({type: "+5", payload: 5})}>+5</button>
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch({type: "reset", payload: 0})}>reset</button>
        </div>
    )
}
export default Counter;