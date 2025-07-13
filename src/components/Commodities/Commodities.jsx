import { useContext } from "react";
import { MyContext } from "../../App";
import Commodity from "./Commodity";

const Commodities = () => {

    let {commodities} = useContext(MyContext);

    return(
        <div className="commodities flex flex-wrap">
            {commodities?.map((item) => {
                return(
                    <Commodity item={item} key={item.id}/>
                )
            })}
        </div>
    )
}
export default Commodities;