import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import { getProducts } from '../services';
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {categoryId} = useParams();

  useEffect(() =>{
 console.log(categoryId, "useEffect");
    setIsLoading(true);
    getProducts(categoryId)
    .then((response) =>{
      setItems(response);
      setIsLoading(false);
    })
  }, [categoryId])
  return (
    <div className="item-list-container d-flex justify-content-center align-items-center">
      {/* <h2>{greeting}</h2> */}
      <ItemList items={items} isLoading={isLoading}/>;
    </div>
  );
};
export default ItemListContainer;
