import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const Fridge = () => {
    const foods = useLoaderData()
    const navigate = useNavigate()

    const isExpired = (expireDate) => {
        const now = new Date();
        const expiDate = new Date(expireDate);
        return expiDate < now;
    };

    return (
        <div className='my-10 max-w-6xl mx-auto'>
            <h2 className='text-3xl font-bold text-center mb-8'>Fridge Inventory</h2>
            <div className='w-[80%]'>
                {
                    foods.map((food) => (
                        <div key={food._id} className='border my-5 flex gap-10 p-5'>
                            <img src={food.image} alt={food.title} className='h-72 w-72 object-cover shadow-2xl border-2 border-gray-400' />
                            <div className='flex flex-col gap-2'>
                                <h2 className="card-title">{food.title}</h2>
                                <p><span>Category:</span> {food.category}</p>
                                <p><span>Quantity:</span> {food.quantity}</p>
                                {
                                    isExpired(food.expiryDate) && (
                                        <span className="badge badge-error">Expired</span>
                                    )}
                                <div>
                                    <button className='btn btn-primary mt-3 self-start' onClick={() => navigate(`/food-details/${food._id}`)}>See Details</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Fridge;