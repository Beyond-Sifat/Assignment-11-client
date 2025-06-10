import React from 'react';
import NearlyExpiredCard from './NearlyExpiredcard';

const NearlyExpired = ({foods}) => {
    return (
        <div className='mt-5'>
            <h2 className="text-2xl font-semibold text-center mb-4">Nearly Expired Items</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    foods.map(food=><NearlyExpiredCard key={food._id} food={food}></NearlyExpiredCard>)
                }
            </div>
        </div>
    );
};

export default NearlyExpired;