import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';

const MyItems = () => {
    const { user } = useContext(AuthContext)
    const [myItems, setMyItems] = useState([])
    const [selectedItem, setSelectedItem] = useState(null);
    const [sortBy, setSortBy] = useState("")


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
                axios.delete(`https://assignment-11-server-three-silk.vercel.app/foods/${_id}`
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

        axios.patch(`https://assignment-11-server-three-silk.vercel.app/foods/${selectedItem._id}`, updateFoodInfo
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
            fetch(`https://assignment-11-server-three-silk.vercel.app/my-items?email=${user.email}`,
            )
                .then(res => res.json())
                .then(data => {
                    setMyItems(data)
                })
        }
    }, [user])


    const sortedItems = [...myItems].sort((a, b) => {
        if (sortBy === "quantity") return b.quantity - a.quantity;
        if (sortBy === "expiryDate") return new Date(a.expiryDate) - new Date(b.expiryDate)
        return 0;
    })


    if (myItems.length === 0) {

        return <div className='min-h-screen flex flex-col justify-center items-center p-20 rounded-4xl text-center bg-gray-300'>
            <p className="text-xl text-gray-500 my-10">You haven't added any items yet.</p>
        </div>
    }
    return (
        <div className='my-10 px-4 md:px-10'>
            <h2 className='text-3xl text-center font-bold text-sky-800 mb-6'>My Items</h2>


            <div className='flex justify-end mb-4'>
                <select
                    className='select select-bordered select-sm bg-white text-gray-700 border-sky-300'
                    value={sortBy}
                    onChange={(e)=>setSortBy(e.target.value)}>
                    <option value="">Sort By</option>
                    <option value="quantity">Quantity</option>
                    <option value="expiryDate">Expiry Date</option>
                </select>
            </div>


            <div className="overflow-x-auto rounded-lg shadow-lg border border-sky-200">
                <table className="table">
                    <thead className='bg-sky-100 text-sky-900'>
                        <tr>
                            <th> No.</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Expiry Date</th>
                            <th>Added Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sortedItems.map((item, index) => (
                                <tr key={item._id} className="hover:bg-blue-50">
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={item.image} alt={item.title} />
                                            </div>
                                        </div>
                                    </td>
                                    <td className='font-medium'>{item.title}</td>
                                    <td>{item.category}</td>
                                    <td className='text-center'>{item.quantity}</td>
                                    <td>{item.expiryDate}</td>
                                    <td>{item.addedDate}</td>
                                    <td>
                                        <button onClick={() => setSelectedItem(item)} className="btn btn-xs bg-green-100 text-green-800 hover:bg-green-200 mr-1">Update</button>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-xs bg-red-100 text-red-700 hover:bg-red-200">&times;</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody >
                </table >
            </div >


            {selectedItem && (
                <div className="fixed z-50 inset-0 left-0 backdrop-blur-md w-full h-full flex justify-center items-center">
                    <div className="bg-white p-6 border-dashed border-2 rounded-xl shadow-xl w-96">
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
                                <button type="button" onClick={() => setSelectedItem(null)} className="btn btn-sm btn-outline">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};






export default MyItems;