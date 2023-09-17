import { useState } from "react"
import CartContext from "./CartContext"
import PropTypes from "prop-types";
const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        const itemInCart = cart.find((l) => l.id === id)
        return !!itemInCart
    }

    const addItem = (product, cantidad) =>{

        const inCart = isInCart(product.id)
        
        if (inCart) {
            const newCart = cart.map((item) => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        cantidad: item.cantidad + cantidad,
                    };
                }
                return item
            })
            setCart(newCart)
        }else{
            setCart([...cart, {...product, cantidad }])
        }
    }


    const removeItem = (product) => {
        const newCart = cart.filter(l => l.id !== product)
        setCart(newCart)
    }


    const emptyCart = () => {
        setCart([])
    }


    return(
        <CartContext.Provider value={{cart, addItem, removeItem, emptyCart, isInCart}}>
            {children}
        </CartContext.Provider>
    )
};

CartProvider.propTypes = {
children: PropTypes.any
};
export default CartProvider