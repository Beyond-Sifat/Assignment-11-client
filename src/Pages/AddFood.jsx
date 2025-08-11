import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import axios from 'axios';

const AddFood = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleAddFood = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const newFoodData = Object.fromEntries(formData.entries())
        console.log(newFoodData)
        newFoodData.addedDate = new Date().toLocaleString("en-BD", {
            timeZone: "Asia/Dhaka"
        })

        axios.post('https://assignment-11-server-three-silk.vercel.app/foods', newFoodData
            // {withCredentials: true}
        )
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Food added successfully')
                }
            })
            .catch(error => {
                console.error("error adding food", error)
            })
    }



    return (
        <div className="min-h-screen flex items-center justify-center py-20 px-4">
            <div className="w-full max-w-lg bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl p-8 border border-blue-100">
                <h2 className="text-center text-3xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
                    Add New Food Item
                </h2>
                <form onSubmit={handleAddFood} className='space-y-4'>
                    <input
                        type="text" name="image" placeholder="Image URL" required
                        className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-400" />


                    <input type="text" name="title" placeholder="Food Title" required
                        className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-400" />


                    <textarea name="description" placeholder="Description"
                        className="textarea textarea-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-400" />
                    <select name="category" required
                        className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-400">
                        <option value="">Select Category</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Meat">Meat</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Snacks">Snacks</option>
                    </select>
                    <input type="number" name="quantity" placeholder="Quantity" required
                        className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-400" />


                    <input type="date" name="expiryDate" required
                        className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-400" />


                    <input type="email" name="email" defaultValue={user.email}
                        className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-400" />


                    <button onClick={() => navigate('/my-items')} type='submit'
                        className='w-full rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold shadow hover:shadow-lg transition-all'>
                        Add Food</button>
                </form>
            </div>
        </div>
    );
};

export default AddFood;