import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import { getProducts } from '../../services';
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const [items, setItems] = useState([]);
  const {category} = useParams();

  useEffect(() =>{
    getProducts(category).then((response) =>{
      setItems(response);
    })
  }, [category])
  return (
    <div className="item-list-container d-flex justify-content-center align-items-center">
      <ItemList items={items} addToCart={addToCart}/>;
    </div>
  );
};
export default ItemListContainer;
