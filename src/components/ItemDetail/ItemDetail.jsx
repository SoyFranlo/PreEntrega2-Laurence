import PropTypes from "prop-types";
import DetailedCard from "../Card/DetailedCard";
const ItemDetail = ({item, isLoading}) =>{
    if(isLoading) {
        return <h2>Loading...</h2>;
    }
    if(!item) {
        return <h2>Product Unavailable</h2>;
    }
    return (
        <DetailedCard
        img={item.img}
        title={item.name}
        category={item.category}
        price={item.price}
        alt={item.alt}
        
        />
    );
};
ItemDetail.propTypes = {
    item: PropTypes.object,
    isLoading: PropTypes.bool,
};

export default ItemDetail;