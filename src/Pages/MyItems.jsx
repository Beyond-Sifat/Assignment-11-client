import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';

const MyItems = () => {
    const { user } = useContext(AuthContext)
    const [myItems, setMyItems] = useState([])

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/my-items?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyItems(data)
                })
        }
    }, [user])

    
                if(myItems.length===0){

                   return <div className='p-20 rounded-4xl text-center bg-gray-300'>
                        <p className="text-xl text-gray-500 my-10">You haven't added any items yet.</p>
                    </div>
                }
    return (
        <div>
            <div className='my-10'>
                <h2 className='text-3xl text-center'>My Items</h2>
            </div>
        </div>
    );
};

export default MyItems;