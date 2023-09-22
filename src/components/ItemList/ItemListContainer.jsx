import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import { getProducts } from '../../services';
import ItemList from "./ItemList";
import "./itemList.css"

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {category} = useParams();

  useEffect(() =>{
    getProducts(category).then((response) =>{
      setItems(response);
    })
  }, [category])
  return (
    <div className="containeritem-list-container">
      <ItemList className= "container-items" items={items}/>;
    </div>
  );
};
export default ItemListContainer;
