import React, { useMemo } from 'react';
import "./ItemList.css";
import Card from '../Card/Card';



// eslint-disable-next-line react/display-name
const ItemList = React.memo(({ items }) => {
    const renderedItems = useMemo(() => {
        return items.map((item) => (
          <li className='container-items' key={item.id}>
            <Card 
            title = { item.title }
            img = { item.img }
            category={item.category }
            price={item.price}
            alt={item.alt}
            id= {`/items/${item.id}`}
            />
             
          </li>
        ));
      }, [items]);
    
      const productList = (
        <React.Fragment>
          <p className='render-title'>Boca Store, where your passion takes place</p>
          <h2 className='render-subtitle'>Our Products: </h2>      
          <ul>
            <div className='container-items'>
              {renderedItems}
            </div>
          </ul>
        </React.Fragment>
      );
    
      return (
        <div>
          {productList}
        </div>
      );
    });
export default ItemList;