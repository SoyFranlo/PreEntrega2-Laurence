import PropTypes from "prop-types";
import Card from "./Card";
const ItemDetail = ({item, isLoading}) =>{
    if(isLoading) {
        return <h2>Cargando...</h2>;
    }
    if(!item) {
        return <h2>El Producto no esta en nuestro catálogo</h2>;
    }
    return (
        <Card
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