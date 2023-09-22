import { useState } from "react"
import CartContext from "./CartContext"
import PropTypes from "prop-types";

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    

    const isInCart = (itemId) => {
        return cart.some((p) => p.id === itemId)
    }

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
          setCart((prev) => [...prev, { ...item, quantity, key: item.id }]);
        } else {
          setCart((prev) =>
            prev.map((product) => {
              if (product.id === item.id) {
                return { ...product, quantity: product.quantity + quantity };
              } else {
                return product;
              }
            })
          );
        }
      };


    const removeItem = (itemId) => {
        const cartCopy = [...cart];
         const itemIndex = cartCopy.findIndex((item) => item.id === itemId);
         const indexFound = itemIndex !== -1;

         if (indexFound) {
            const currentQuantity = cartCopy[itemIndex].quantity;
            if (currentQuantity > 1){
                cartCopy[itemIndex].quantity -= 1;
            } else {
                cartCopy.splice(itemIndex, 1);
            }
            setCart(cartCopy);
            }
    };

    const clearCart = () => {
        setCart([])
    }


    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, }}>
            {children}
        </CartContext.Provider>
    )
};

CartProvider.propTypes = {
children: PropTypes.any
};