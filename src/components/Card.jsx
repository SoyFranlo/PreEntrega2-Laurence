import PropTypes from "prop-types";
const Card =({title, img, category, price, alt}) => {
    return (
        <div className="card">
            <img src={img} className="card-img-top" alt={alt}/>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{category}</p>
                <h5 className="card-text">{price}</h5>
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
};
export default Card;