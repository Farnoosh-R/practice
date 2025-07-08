import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/products/products'
import Counter from './components/Counter/Counter'

export let MyContext = React.createContext();

function App() {

  const [products, setProducts] = useState([]);
  
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
    <MyContext.Provider value={{products}}>
      <Products />
      <Counter />
      </MyContext.Provider>
  )
}

export default App
