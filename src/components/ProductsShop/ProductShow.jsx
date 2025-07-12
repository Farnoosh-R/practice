import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductShow = () => {
const {id} = useParams();
const [productsShow, setProductsShow] = useState([])
    const fetchdata = async () => {
        try {
            let res = await fetch(`https://fakestoreapi.com/products/${id}`)
            let data = await res.json()
            setProductsShow(data)
        } catch (error) {
            console.log(error.message)
        }
    }
useEffect(() => {
    fetchdata();
}, [])

  return (
    <div className="product-show">
      <div className="border border-amber-200">
        <img src={productsShow.image} alt="" />
        <div>{productsShow.title}</div>
        <div>{productsShow.price}</div>
        <Link to='/productsshop' className="bg-blue-500 p-3">back</Link>
      </div>
    </div>
  );
};
export default ProductShow;
