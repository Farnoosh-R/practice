import { Link } from "react-router-dom";

const Commodity = ({item}) => {
  return (
    <div className="border-2 border-amber-500">
      <img className="w-[70px]" src={item.image} alt="" />
      <div>{item.title}</div>
      <div>{item.price}</div>
      <Link to={`/commodities/${item.id}`} className="bg-pink-600 px-3 py-2 rounded-3xl">Read more</Link>
    </div>
  );
};
export default Commodity;
