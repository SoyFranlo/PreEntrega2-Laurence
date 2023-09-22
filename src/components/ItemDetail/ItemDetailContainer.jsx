import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(true);
    const { id } = useParams();
   
    useEffect(() => {
        getProduct(id).then((response) => {
            setItem(response);
        })
        .catch(() => {
            setItem(null);
        })
    }, [id]);
    return (
        <div className="container">
        <ItemDetail className="con" id={item.id} item={item} />
        </div>
        )
}

export default ItemDetailContainer;