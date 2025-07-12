import { Link } from "react-router-dom";

const ProductShop = ({ item }) => {
  return (
    <div className="product-shop w-1/2">
      <div className="border border-amber-200">
        <img src={item.image} alt="" />
        <div>{item.title}</div>
        <div>{item.price}</div>
        <Link to={`/productsshop/${item.id}`} className="bg-red-500 p-3">Read more</Link>
      </div>
    </div>
  );
};
export default ProductShop;
