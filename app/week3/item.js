import React from 'react';

const Item = ({ name, quantity, category }) => {
return (
    <li className="p-4 border-b border-gray-200">
    <h2 className="text-lg font-bold">{name}</h2>
    <p>Quantity: {quantity}</p>
    <p>Category: {category}</p>
    </li>
);
};

export default Item;
