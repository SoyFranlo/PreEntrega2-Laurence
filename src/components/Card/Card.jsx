import PropTypes from "prop-types";
import "./Card.css";
const Card = ({ title, img, category, price, alt, addItem, item }) => {
    return (
        <div className="card">
            <img src={img} className="card-img-top" alt={alt} />
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{category}</p>
                <h5 className="card-text">${price}</h5>
                <button onClick={() => addItem(item,1)} className="addCart btn btn-success w-100 m-auto mb-1 container-fluid">Add to Cart</button>

            </div>
        </div>
    );
};
Card.propTypes = {
    title: PropTypes.string,
    img: PropTypes.any,
    category: PropTypes.string,
    price: PropTypes.string,
    alt: PropTypes.string,
    item: PropTypes.object,
    addItem: PropTypes.func
};
export default Card;