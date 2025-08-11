import React from 'react';
import { Link } from 'react-router';

const NearlyExpiredCard = ({ food }) => {
    const { _id, image, title, category, quantity, expiryDate } = food;

    return (
        <div className="card p-4 rounded-xl bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 shadow-md hover:shadow-xl transition-shadow duration-300 border border-indigo-100">
            <img
                src={image}
                alt={title}
                className="rounded-xl h-40 w-full object-cover mb-3"
            />

            <h3 className="text-xl font-extrabold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">{title}</h3>

            <p className="text-sm text-slate-600 mt-1">
                <span className="font-semibold">Category:</span> {category}
            </p>
            <p className="text-sm text-slate-600">
                <span className="font-semibold">Quantity:</span> {quantity}
            </p>
            <p className="text-sm text-red-600 font-medium">
                <span className="font-semibold">Expiry:</span> {expiryDate}
            </p>

            <Link
                className="btn btn-sm mt-3 w-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white hover:from-blue-700 hover:to-indigo-600 border-none"
                to={`/food-details/${_id}`}>See Details</Link>
        </div>
    );
};

export default NearlyExpiredCard;
