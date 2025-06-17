import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';

const MyItems = () => {
    const { user } = useContext(AuthContext)
    const [myItems, setMyItems] = useState([])
    const [selectedItem, setSelectedItem] = useState(null);


    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/foods/${_id}`
                    // { withCredentials: true}
                )
                    .then(res => {
                        if (res.data.deletedCount) {
                            setMyItems(prev => prev.filter(item => item._id !== _id));
                            Swal.fire("Deleted!", "Your item has been deleted.", "success");
                        }
                    })
                    .catch(error => {
                        console.error('Error deleting item:', error);
                    });
            }
        });
    }


    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateFoodInfo = Object.fromEntries(formData.entries())
        console.log(updateFoodInfo);

        axios.patch(`http://localhost:3000/foods/${selectedItem._id}`, updateFoodInfo
            // {withCredentials: true}
    )
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire("Updated!", "Your item has been updated.", "success");
                    const updatedList = myItems.map(item =>
                        item._id === selectedItem._id ? { ...item, ...updateFoodInfo } : item
                    );
                    setMyItems(updatedList);
                    setSelectedItem(null);
                }
            })
    }



    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/my-items?email=${user.email}`, 
                // {credentials: 'include'}
            )
                .then(res => res.json())
                .then(data => {
                    setMyItems(data)
                })
        }
    }, [user])
    if (myItems.length === 0) {

        return <div className='min-h-screen flex flex-col justify-center items-center p-20 rounded-4xl text-center bg-gray-300'>
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
                                            <button onClick={() => setSelectedItem(item)} className="btn btn-ghost btn-xs bg-green-200 mr-2">Update</button>
                                            <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs bg-red-400">&times;</button>
                                        </th>
                                    </tr>
                                ))
                            }
                        </tbody >
                    </table >
                </div >
            </div>


            {selectedItem && (
                <div className="fixed z-50 inset-0 left-0 backdrop-blur-md w-full h-full flex justify-center items-center ">
                    <div className="bg-[#fffff1] p-10 border-dashed border-2 rounded-lg w-96 relative">
                        <h3 className="text-xl font-bold mb-4">Update: {selectedItem.title}</h3>
                        <form onSubmit={handleUpdate} className="space-y-3">
                            <input name="title" defaultValue={selectedItem.title} className="input input-bordered w-full" />
                            <select name="category" defaultValue={selectedItem.category} className="input input-bordered w-full">
                                <option value="Dairy">Dairy</option>
                                <option value="Meat">Meat</option>
                                <option value="Vegetables">Vegetables</option>
                                <option value="Snacks">Snacks</option>
                            </select>
                            <input name="quantity" type="number" defaultValue={selectedItem.quantity} className="input input-bordered w-full" />
                            <input name="expiryDate" type="date" defaultValue={selectedItem.expiryDate} className="input input-bordered w-full" />
                            <div className="flex justify-between">
                                <button type="submit" className="btn btn-success btn-sm">Save</button>
                                <button type="button" onClick={() => setSelectedItem(null)} className="btn btn-sm">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};






export default MyItems;