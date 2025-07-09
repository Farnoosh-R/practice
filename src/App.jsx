import React, { useEffect, useReducer, useState } from 'react'
import './App.css'
import Products from './components/products/products'
import Counter from './components/Counter/Counter'
import reducerCounter from './reducers/reducerCounter';


export let MyContext = React.createContext();

let initialState = {
    count: 0
}

function App() {

  const [products, setProducts] = useState([]);
  const [counter, dispatch] = useReducer(reducerCounter, initialState);
  
  const fetsProducts = async () => {
    try {
     let res = await fetch("https://6867ccfbd5933161d709df46.mockapi.io/products")
      let data = await res.json();
      setProducts(data)
      console.log(products);

      
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetsProducts();
  }, [])

  return (
    <MyContext.Provider value={{products: products, counter: counter, dispatch: dispatch}}>
      <Products />
      <Counter />
      </MyContext.Provider>
  )
}

export default App
