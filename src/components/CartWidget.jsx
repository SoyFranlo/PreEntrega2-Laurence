import { useContext } from "react"
import CartContext from "./Context/CartContext"
import { cartAmount } from "../utils"

const CartWidget = () => {
    const { cart } = useContext(CartContext)

    const quantity = cartAmount(cart)

    return (
        <div>
            <button className="btn btn-outline-alert text-light position-relative">
                <i className="bi bi-cart fs-4"></i>
                <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill ${!!quantity && "bg-danger"}`}>
                    {quantity > 0 ? quantity : ""}
                    <span className="visually-hidden">Total products in Cart</span>
                </span>
            </button>
        </div>
    )
}

export default CartWidget
