import React from 'react';
import { useLoaderData } from 'react-router';

const FoodDetails = () => {
    const details = useLoaderData()
    console.log(details.email)
    return (
        <div>
            
        </div>
    );
};

export default FoodDetails;