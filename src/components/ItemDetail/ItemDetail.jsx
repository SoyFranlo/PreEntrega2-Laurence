import DetailedCard from "../Card/DetailedCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {doc, getDoc, getFirestore} from 'firebase/firestore';

const ItemDetail = () =>{
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const {id} = useParams();

    useEffect(()=>{
const db = getFirestore()
const itemRef = doc(db, 'items', id);
setIsLoading(true);
getDoc(itemRef).then(snapshot => {
    setIsLoading(false);
    if (snapshot.exists()) {
setItem({
    id: snapshot.id,
    ...snapshot.data(),
})
    }
})
    },[id])
    if(isLoading) {
        return <h2>Loading...</h2>;
    }
    if(!item) {
        return <h2>Product Unavailable</h2>;
    }
    return (
    <div>
        {!isLoading && item && (
        <DetailedCard
        title={item.title}
        img={item.img}
        category={item.category}
        price={item.price}
        alt={item.alt}
        stock={item.stock}
        item = {item}
        />
        )}
        </div>
    );
    
};

export default ItemDetail;