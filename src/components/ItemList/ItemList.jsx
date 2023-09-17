// import React from 'react';
import propTypes from 'prop-types';
import { Link } from "react-router-dom";
import Card from '../Card/Card';
import "./ItemList.css";


const ItemList = ({ items, isLoading }) => {
    if (isLoading) {
        return <h2>Loading...</h2>;
    }
    if (items.length === 0) {
        return <h2>Non-existent Category...</h2>;
    }
    return (
        
        <div className='container'>
            <ul className='container-items'>
                {items.map((item) => (
                    <li key={item.id}>
                        <Link to={`/item/${item.id}`}>
                        <Card
                            img={item.img}
                            title={item.name}
                            category={item.category}
                            price={item.price}
                            alt={item.alt}
                            product={item}
                        />
                </Link>
                    </li>
                ))}
            </ul>
        </div>
    );

}
ItemList.propTypes = {
    items: propTypes.array.isRequired,
    isLoading: propTypes.bool,
    addToCart: propTypes.bool,
    product: propTypes.string,
};

export default ItemList;