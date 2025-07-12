import { useContext } from "react";
import { MyContext } from "../../App";
import ProductShop from "./ProductShop";

const ProductsShop = () => {

const {productsShop} = useContext(MyContext);
    console.log(productsShop);

    return(
        <div className="products-shop flex flex-wrap">
            {productsShop?.map((item) => {
                return(
                    <ProductShop item={item} key={item.id}/>
                )
            })}
        </div>
    )
}
export default ProductsShop;