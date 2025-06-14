// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import NearlyExpiredCard from './NearlyExpiredCard';
import CountUp from 'react-countup';

const NearlyExpired = ({ foods }) => {
    const [nearlyExpired, setNearlyExpired] = useState([]);


    const parseDate = (dateStr) => {
        try {
            const trimmed = dateStr.trim();
            const parsedDate = new Date(trimmed);
            if (!isNaN(parsedDate.getTime())) {
                return parsedDate;
            } else {
                const dateOnly = trimmed.split(',')[0];
                const [month, day, year] = dateOnly.split('/').map(str => parseInt(str));
                return new Date(year, month - 1, day);
            }
        } catch {
            return new Date(0);
        }
    };

    useEffect(() => {
        const today = new Date();
        const fiveDays = new Date();
        fiveDays.setDate(today.getDate() + 5);

        const filtered = foods.filter(food => {
            const expiry = parseDate(food.expiryDate);
            return expiry >= today && expiry <= fiveDays;
        });

        setNearlyExpired(filtered.slice(0, 6));
    }, [foods]);

    // useEffect(() => {
    //     const today = new Date();
    //     const fiveDays = new Date();
    //     fiveDays.setDate(today.getDate() + 5);
    //     const filtered = foods.filter(food => {
    //         const expiry = parseDate(food.expiryDate);
    //         return expiry >= today && expiry <= fiveDays;
    //     }),
    //         setNearlyExpired(filtered.slice(0, 6))
    // }, [foods])




    return (
        <div className='mt-5 '>
            <h2 className="text-3xl font-bold text-center mt-28 mb-16">Nearly Expired Items:- <CountUp end={nearlyExpired.length} duration={8}></CountUp></h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    nearlyExpired.map(food => <NearlyExpiredCard key={food._id} food={food}></NearlyExpiredCard>)
                }
            </div>
        </div>
    );
};

export default NearlyExpired;