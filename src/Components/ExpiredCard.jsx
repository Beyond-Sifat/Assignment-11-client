import React from 'react';

const ExpiredCard = ({ food }) => {
    const { image, title, category, quantity, expiryDate } = food;
    return (
        <div className="card p-4 rounded-xl bg-gradient-to-br from-red-50 via-rose-50 to-orange-50 shadow-md hover:shadow-xl transition-shadow duration-300 border border-red-100 relative">

            <span className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">Expired</span>
            <img
                src={image}
                alt={title}
                className="rounded-xl h-40 w-full object-cover mb-3" />

            <h3 className="text-xl font-extrabold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">{title}</h3>
            <p className="text-sm text-slate-700 mt-1">
                <span className="font-semibold">Category:</span> {category}
            </p>
            <p className="text-sm text-slate-700">
                <span className="font-semibold">Quantity:</span> {quantity}
            </p>
            <p className="text-sm text-red-600 font-semibold">
                <span className="font-semibold">Expiry:</span> {expiryDate}
            </p>
        </div>
    );
};

export default ExpiredCard;