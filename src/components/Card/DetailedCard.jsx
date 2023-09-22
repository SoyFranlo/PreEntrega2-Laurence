import {useContext, useState} from 'react';
import "./Card.css";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartContext from '../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import { toast } from 'react-toastify';

const DetailedCard = ({ title, img, category, price, stock, alt, item}) => {

    const { addItem } = useContext(CartContext);
  const [quantityToAdd, setQuantityToAdd] = useState(1);

  const handleAddToCart = () => {
    addItem(item, quantityToAdd);
    toast('Producto agregado al carrito', {
      position: "top-left",
      autoClose: 1100,
      theme: "colored",
    });
  };

  if (!item) {
    return null;
  }

    return (
        <div className="card">
            <img src={img} className="card-img-top" alt={alt} />
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{category}</p>
                <h5 className="card-text">${price}</h5>
                <h6 className="card-text">Items in Stock: {stock}</h6>
                <button onClick={handleAddToCart} className="btn btn-success w-100 m-auto mb-1">Add to Cart</button>
                <ItemCount
                initial={1}
                stock={item.stock}
                quantity={quantityToAdd}
                onChange={setQuantityToAdd}
                />
                <Link to="/">
                    <button>Go Back</button>
                </Link>

            </div>
        </div>
    );
};
DetailedCard.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
    img: PropTypes.string,
    alt: PropTypes.string,
    stock: PropTypes.number,
}
export default DetailedCard;