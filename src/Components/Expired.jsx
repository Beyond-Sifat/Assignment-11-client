import React, { useEffect, useState } from 'react';
import ExpiredCard from './ExpiredCard';

const Expired = ({foods}) => {
    const [expired, setExpired] = useState([])

    useEffect(()=>{
        const today = new Date();
        const filtered = foods.filter(food=>new Date(food.expiryDate) < today)
        setExpired(filtered)
    },[foods])
    return (
        <div className='mt-5'>
             <h2 className="text-2xl font-semibold text-center mb-4">Expired Items</h2>
             <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    expired.map(food=><ExpiredCard key={food._id} food={food}></ExpiredCard>)
                }
             </div>
        </div>
    );
};

export default Expired;