import "./Card.css";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Card = ({ title, img, category, price, alt, id}) => {

    return (
        <div className="card">
            <img src={img} className="card-img-top" alt={alt} />
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{category}</p>
                <h5 className="card-text">${price}</h5>
                <Link to={id}>
                    <button>Item Detail</button>
                </Link>

            </div>
        </div>
    );
};
Card.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
    img: PropTypes.string,
    alt: PropTypes.string,
}
export default Card;