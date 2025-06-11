import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const FoodDetails = () => {
    const details = useLoaderData()
    const { user } = useContext(AuthContext)
    console.log(details.email, user)




    const isExpired = (expiryDate) => {
        return new Date(expiryDate) < new Date()
    }

    const daysLeft = (expiryDate) => {
        const now = new Date()
        const expiry = new Date(expiryDate);
        const diffTime = expiry - now;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays
    }

    const expired = isExpired(details.expiryDate);
    const left = daysLeft(details.expiryDate)








    return (
        <div className='max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg'>
            <div className='flex flex-col md:flex-row gap-8'>
                <div className='md:w-1/2'>
                    <img src={details.image}
                        alt={details.title}
                        className='rounded-lg object-cover w-full h-80' />
                </div>
                <div className='md:w-1/2 flex flex-col justify-between'>
                    <div>
                        <h1 className='text-4xl font-bold mb-2'>{details.title}</h1>
                        <p className='text-lg text-gray-600 mb-4'>Category: <span className='font-semibold'>{details.category}</span></p>
                        <p className='text-lg mb-2'>Quantity: <span className='font-semibold'>{details.quantity}</span></p>
                        <p className='text-lg mb-2'>Expiry Date: <span className='font-semibold'>{details.quantity}</span></p>

                        {
                            expired ? (
                                <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full font-semibold mt-2">Expired</span>
                            ) : (
                                <p className="text-green-600 font-semibold mt-2">{left} day{left !== 1 ? 's' : ""} left until expiry</p>
                            )
                        }

                        <h2 className="text-2xl font-semibold mt-6 mb-2">Description</h2>
                        <p className="text-gray-700 whitespace-pre-line">
                            {details.description || "No description provided."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;