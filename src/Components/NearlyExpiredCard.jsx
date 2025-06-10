import React from 'react';
import { Link } from 'react-router';

const NearlyExpiredCard = ({ food }) => {
    const { _id, image, title, category, quantity, expiryDate } = food;
    console.log(_id)
    return (
        <div className="card shadow-md p-4 border rounded-xl bg-yellow-50">
            <img src={image} alt={title} className="rounded-xl h-40 w-full object-cover mb-2" />
            <h3 className="text-xl font-bold">{title}</h3>
            <p>Category: {category}</p>
            <p>Quantity: {quantity}</p>
            <p>Expiry: {expiryDate}</p>
            <Link className='btn btn-sm btn-primary mt-2 w-full' to={`/food-details/${_id}`}>See Details</Link>
        </div>
    );
};

export default NearlyExpiredCard;