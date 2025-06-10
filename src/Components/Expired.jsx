import React from 'react';
import ExpiredCard from './ExpiredCard';

const Expired = ({foods}) => {
    return (
        <div className='mt-5'>
             <h2 className="text-2xl font-semibold text-center mb-4">Expired Items</h2>
             <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    foods.map(food=><ExpiredCard key={food._id} food={food}></ExpiredCard>)
                }
             </div>
        </div>
    );
};

export default Expired;