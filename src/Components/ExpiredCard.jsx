import React from 'react';

const ExpiredCard = ({ food }) => {
    const { image, title, category, quantity, expiryDate } = food;
    return (
        <div className='card p-4 border rounded-xl bg-red-100'>
            <img src={image} alt={title} className='rounded-xl h-40 w-full object-cover mb-2' />
            <h3 className="text-xl font-bold">{title}</h3>
            <p>Category: {category}</p>
            <p>Quantity: {quantity}</p>
            <p>Expiry: {expiryDate}</p>
            <p className="text-red-600 font-semibold">Expired</p>
            <p>{food.length}</p>
        </div>
    );
};

export default ExpiredCard;