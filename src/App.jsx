import React, { useEffect, useReducer, useState } from 'react'
import './App.css'
import Products from './components/products/products'
import Counter from './components/Counter/Counter'
import reducerCounter from './reducers/reducerCounter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsList from './pages/ProductsList';
import Home from './pages/Home';
import Header from './components/Header/Header';
import ProductsShopList from './pages/ProductsShopList';
import ProductShow from './components/ProductsShop/ProductShow';
import Commodities from './components/Commodities/Commodities';
import CommodityShow from './components/Commodities/CommodityShow';



export let MyContext = React.createContext();

let initialState = {
    count: 0
}

function App() {

  const [products, setProducts] = useState([]);
  const [counter, dispatch] = useReducer(reducerCounter, initialState);
  const [productsShop, setProductsShop] = useState([]);
  const [commodities, setCommodities] = useState([]);
  const [login, setLogin] = useState(false);
  
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

  const fetchProductsShop = async () => {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    setProductsShop(data);
  }

  const fetchCommodities = async () => {
      try {

        let res = await fetch("https://fakestoreapi.com/products");
        let data = await res.json();
        setCommodities(data);

      } catch (err) {
        console.log(err.message)
        
      }
  }

  useEffect(() => {
    fetsProducts();
    fetchProductsShop();
    fetchCommodities();
  }, [])


  return (
    <BrowserRouter>
    <MyContext.Provider value={{products: products, counter: counter, dispatch: dispatch, productsShop: productsShop, commodities: commodities}}>
      <Header />
      <button className={`${login === true ? "bg-red-600" : "bg-emerald-600"} rounded-3xl px-3 py-2 my-5`} onClick={() => setLogin(!login)}>{login === true ? "Logout" : "Login"}</button>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/productsList' element={<ProductsList />}/>
        <Route path='/counter' element={<Counter />}/>
        <Route path='/productsshop' element={<ProductsShopList />}/>
        <Route path='/productsshop/:id' element={<ProductShow />} />
        <Route path='/commodities' element={login === true ? <Commodities /> : <Home />} />
        <Route path='/commodities/:id' element={<CommodityShow />} />
      </Routes>
      
      </MyContext.Provider>
      </BrowserRouter>
  )
}

export default App
