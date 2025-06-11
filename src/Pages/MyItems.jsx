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


    if (myItems.length === 0) {

        return <div className='p-20 rounded-4xl text-center bg-gray-300'>
            <p className="text-xl text-gray-500 my-10">You haven't added any items yet.</p>
        </div>
    }
    return (
        <div>
            <div className='my-10'>
                <h2 className='text-3xl text-center'>My Items</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    No.
                                </th>
                                <th>Name</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Quantity</th>
                                <th>Expiry Date</th>
                                <th>Added Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myItems.map((item, index) => (
                                    <tr key={item._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={item.image}
                                                            alt={item.title} />
                                                    </div>
                                                </div>
                                                {/* <div>
                                                    <div className="font-bold">{user.displayName}</div>
                                                </div> */}
                                            </div>
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.category}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.expiryDate}</td>
                                        <td>{item.addedDate}</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs bg-green-200 mr-2">Update</button>
                                            <button className="btn btn-ghost btn-xs bg-red-400">&times;</button>
                                        </th>
                                    </tr>
                                ))
                            }
                        </tbody >
                    </table >
                </div >
            </div>
        </div>
    );
};






export default MyItems;