import { useContext, useReducer, useState } from "react";
import { MyContext } from "../../App";



const Counter = () => {

    let {counter, dispatch} = useContext(MyContext);

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