const Product = ({item}) => {
    return(
        <div className="product w-1/2">
            <div className="border border-pink-500 p-3 shadow-2xl">
                <img className="w-[100px] h-[70px]" src={item.image} alt="" />
                <h1>{item.title}</h1>
                <p>{item.des}</p>
            </div>
        </div>
    )
}
export default Product;