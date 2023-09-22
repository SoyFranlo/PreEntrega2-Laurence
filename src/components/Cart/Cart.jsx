import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../Context/CartContext';
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
    const { cart, removeItem, clearCart } = useContext(CartContext);

    const isEmpty = cart.length === 0;

    const calculateTotal = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total;
    };

    return (
        <div>
            <h2>Your Cart</h2>
            {isEmpty ? (
                <div>
                    <p>Your Cart is Empty!</p>
                    <Link to="/"><button> See Products</button></Link>
                </div>
            ) : (
                <div>
                    <ul>
                        {cart.map((item) => (
                            <li className='card' key={item.id}>
                                <div>
                                    <img className='cart-img' src={item.img} alt={item.alt} />
                                </div>
                                <div>
                                    <h3 className='cart-product-title'>{item.title}</h3>
                                </div>
                                <div>
                                    <p>Price: ${item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <FaTrash onClick={() => removeItem(item.id)} />
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <div>
                            <p>Total: ${calculateTotal()}</p>
                        </div>
                        <button onClick={() => clearCart()}>Vaciar carrito</button>
                        <Link to="/checkout">
                            <button>Buy</button>
                        </Link>
                        <Link to="/"><button> See more products  </button></Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;


