import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const AddFood = () => {
    const {user} = useContext(AuthContext)

    const handleAddFood = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const newFoodData = Object.fromEntries(formData.entries())
        console.log(newFoodData)
        newFoodData.addedDate = new Date().toLocaleString("en-BD",{timeZone: "Asia/Dhaka"
})

        fetch('http://localhost:3000/foods',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newFoodData)
        })
        .then(res =>res.json())
        .then(data => {
            if(data.insertedId){
                toast.success('Food added successfully')
            }
            console.log(data)
        })
    }



    return (
        <div className='my-10'>
            <h2 className='text-center text-3xl font-semibold'>Add New Food Item</h2>
            <form onSubmit={handleAddFood}>
                <input type="text" name="image" placeholder="Image URL" required className="input input-bordered w-full" />
                <input type="text" name="title" placeholder="Food Title" required className="input input-bordered w-full" />
                <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full" />
                <select name="category" required className="input input-bordered w-full">
                    <option value="">Select Category</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Meat">Meat</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Snacks">Snacks</option>
                </select>
                <input type="number" name="quantity" placeholder="Quantity" required className="input input-bordered w-full" />
                <input type="date" name="expiryDate" required className="input input-bordered w-full" />
                <input type="email" name="email" defaultValue={user.email} className="input input-bordered w-full"  />
                <button type='submit' className='btn btn-primary mt-3 w-full'>Add Food</button>
            </form>
        </div>
    );
};

export default AddFood;