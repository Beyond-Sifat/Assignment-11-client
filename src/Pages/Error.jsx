import { Frown } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800 px-4 text-center'>
            <Frown className="w-20 h-20 text-red-500 mb-4"></Frown>
            <h1 className='text-4xl font-bold mb-2'>Oops! Something went Wrong</h1>
            <p className='text-lg mb-6'>The page you're looking doesn't exist  or an unexpected error occurred.</p>
            <Link
            to='/'
            className='px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition'>Go back home</Link>
        </div>
    );
};

export default Error;