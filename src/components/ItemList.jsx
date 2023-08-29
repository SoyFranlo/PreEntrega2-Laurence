// import React from 'react';
import propTypes from 'prop-types';
import { Link } from "react-router-dom";
import Card from './Card';

const ItemList = ({ items, isLoading }) => {
    if (isLoading) {
        return <h2>Cargando...</h2>;
    }
    return (
        <div>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <Link to={`/item/${item.id}`}>
                        <Card
                            img={item.img}
                            title={item.name}
                            category={item.category}
                            price={item.price}
                            alt={item.alt}
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
};

export default ItemList;