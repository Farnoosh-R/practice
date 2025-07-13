import { useContext } from "react";
import { MyContext } from "../../App";
import Commodity from "./Commodity";
import { useNavigate } from "react-router-dom";

const Commodities = () => {

    const navigate = useNavigate();
    const redirect = () => {
        navigate("/productsList")
    }

    let {commodities} = useContext(MyContext);

    return(
        <div className="commodities flex flex-wrap">
            <button className="bg-amber-300 px-3 py-2 my-3 rounded-3xl" onClick={redirect}>go to products</button>
            {commodities?.map((item) => {
                return(
                    <Commodity item={item} key={item.id}/>
                )
            })}
        </div>
    )
}
export default Commodities;