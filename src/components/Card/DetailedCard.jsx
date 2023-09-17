import PropTypes from "prop-types";
import "./Card.css";

function getRandomNum(min, max) {
    min = Math.ceil(1);
    max = Math.floor(8);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  
const DetailedCard = ({ title, img, category, price, alt, addItem, item,}) => {
    return (
        <div className="card">
            <img src={img} className="card-img-top" alt={alt} />
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{category}</p>
                <h5 className="card-text">${price}</h5>
                <h6 className="card-text">Items in Stock: {getRandomNum()}</h6>
                <button onClick={() => addItem(item,1)} className="btn btn-success w-100 m-auto mb-1">Add to Cart</button>

            </div>
        </div>
    );
};
DetailedCard.propTypes = {
    title: PropTypes.string,
    img: PropTypes.any,
    category: PropTypes.string,
    price: PropTypes.string,
    alt: PropTypes.string,
    item: PropTypes.object,
    addItem: PropTypes.func,
    quantity: PropTypes.number
};
export default DetailedCard;