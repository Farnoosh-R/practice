import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <div className="header bg-slate-800 flex gap-3">
            <NavLink to='/' className={({isActive}) => `${isActive ? "bg-orange-500" : "bg-lime-500"} hover:bg-lime-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}>Home</NavLink>
            <NavLink to='/productsList' className={({ isActive }) =>`${isActive ? "bg-orange-500" : "bg-lime-500"} hover:bg-lime-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}>Products</NavLink>
            <NavLink to='/counter' className={({isActive}) => `${isActive ? "bg-orange-500" : "bg-lime-500"} hover:bg-lime-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}>Counter</NavLink>
            <NavLink to='/productsshop' className={({isActive}) => `${isActive ? "bg-orange-500" : "bg-lime-500"} hover:bg-lime-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}>ProductsShop</NavLink>
        </div>
    )
}
export default Header;