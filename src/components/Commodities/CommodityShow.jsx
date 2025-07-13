import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CommodityShow = () => {
  const { id } = useParams();
  const [commodities, setCommodities] = useState([]);
  const fetchCommodities = async () => {
    let res = await fetch(`https://fakestoreapi.com/products/${id}`);
    let data = await res.json();
    setCommodities(data);
  };
  useEffect(() => {
    fetchCommodities();
  }, []);

  return (
    <div className="commodity-show">
      <div className="border-2 border-amber-500">
        <img className="w-[70px]" src={commodities.image} alt="" />
        <div>{commodities.title}</div>
        <div>{commodities.price}</div>
        <Link to='/commodities' className="bg-blue-600 px-3 py-2 rounded-3xl">Back to list</Link>
      </div>
    </div>
  );
};
export default CommodityShow;
