import React, { useEffect, useState } from 'react';
import ExpiredCard from './ExpiredCard';
import CountUp from 'react-countup';

const Expired = ({ foods }) => {
    const [expired, setExpired] = useState([])

    useEffect(() => {
        const today = new Date();
        const filtered = foods.filter(food => new Date(food.expiryDate) < today)
        setExpired(filtered)
    }, [foods])
    return (
        <div className='mt-5'>
            <h2 className="text-3xl font-bold text-center mt-28 mb-16 bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">Expired Items:- <CountUp end={expired.length} duration={7}></CountUp></h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    expired.map(food => <ExpiredCard key={food._id} food={food}></ExpiredCard>)
                }
            </div>

        </div>
    );
};

export default Expired;