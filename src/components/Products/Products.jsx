import { useContext } from "react";
import Product from "./Product";
import { MyContext } from "../../App";

const Products = () => {

let {products} = useContext(MyContext);

    return(
        <div className="products flex flex-wrap">
            {products?.map((item) => {
                return(
                    <Product item={item} key={item.key}/>
                )
            })}
        </div>
    )
}
export default Products;