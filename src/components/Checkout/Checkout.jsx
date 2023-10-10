import { createOrder } from "../../services";
import { useState, useContext, useEffect } from "react"
import "./Checkout.css"
import { Link } from 'react-router-dom';
import CartContext from "../Context/CartContext";


function Checkout() {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        phone: "",
        address: "",
        paymentMethod: "MercadoPago",
    })

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const { clearCart, cart } = useContext(CartContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const createNewOrder = () => {
    const newOrderData = {
        buyer: {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            address: formData.address,
        },
        products: cart.map((item) => ({
            title: item.title,
            id: item.id,
            price: item.price,
            quantity: item.quantity,
        })),
        
        total: calculateTotal(),

        };
      
        
        createOrder(newOrderData)
        .then((docRef) => {
            setOrderId(docRef.id);
            setIsFormSubmitted(true);
        });
    };
        const calculateTotal = () => {
            let total = 0;
            cart.forEach((item) => {
                total += item.price * item.quantity;});
                return total;
            };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        createNewOrder();
    };
    useEffect(() => {
        return () => {
            if (orderId) {
                clearCart();
            }
    };
}, [orderId, clearCart]);

return (
<div>
<h2>Conclude your operation</h2>
{isFormSubmitted ? (
  <div>
    <p className="success">Purchase Succesful</p>
    <p className="success">Order ID: {orderId}</p>
    <p className="success">Purchase details: </p>
    <ul>
      {cart.map((item) => (
        <li key={item.id}>
          <div>
            <img src={item.img} alt={item.alt} />
          </div>
          <p className="success">{item.title}</p>
          <p className="success"> - ${item.price} -</p>
          <p className="success">Amount: {item.quantity}</p>
        </li>
      ))}
    </ul>
    <p className="cart-total">Total: ${calculateTotal()}</p>
    <Link to="/">
      <button>Return</button>
    </Link>
  </div>
) : (
  <form onSubmit={handleSubmit}>
    <p>Fill in your data</p>
    <div>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
    </div>
    <div>
      <label htmlFor="phone">Phone Number: </label>
      <input
        type="string"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        required
      />
    </div>
    <div>
      <label htmlFor="email">E-mail: </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
    </div>
    <div>
      <label htmlFor="address">Shipping Adress: </label>
      <input
        id="address"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
        required
      ></input>
    </div>
    <div>
      <label htmlFor="paymentMethod">Payment Method: </label>
      <select
        id="paymentMethod"
        name="paymentMethod"
        value={formData.paymentMethod}
        onChange={handleInputChange}
      >
        <option value="creditCard">Credit Card</option>
        <option value="MercadoPago">Mercado Pago</option>
      </select>
    </div>
    <button type="submit">
      Finalize Purchase
    </button>

    <Link to="/"><button> Return </button></Link>
  </form>
)}
</div>
);
}

export default Checkout