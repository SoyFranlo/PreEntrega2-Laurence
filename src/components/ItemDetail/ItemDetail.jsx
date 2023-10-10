import DetailedCard from "../Card/DetailedCard";


const ItemDetail = ({item, isLoading}) =>{

    if(isLoading) {
        return <h2>Loading...</h2>;
    }
    if(!item) {
        return <h2>Product Unavailable</h2>;
    }
    return (
    <div>
        {!isLoading && item && (
        <DetailedCard
        id= {item.id}
        title={item.title}
        img={item.img}
        category={item.category}
        price={item.price}
        alt={item.alt}
        stock={item.stock}
        item = {item}
        />
        )}
        </div>
    );
    
};

export default ItemDetail;