import ItemDetail from "./ItemDetail";
import CartContext from "../Context/CartContext"
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    const { addItem } = useContext(CartContext);
    useEffect(() => {
        getProduct(id).then((response) => {
            setItem(response);
        })
        .catch(() => {
            setItem(null);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }, [id]);
    return (
        <div className="container">
        <ItemDetail className="con" item={item} isLoading={isLoading} addItem={addItem} />
        </div>
        )
}

export default ItemDetailContainer;