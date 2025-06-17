import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';
const FoodDetails = () => {
    const details = useLoaderData()
    const { user } = useContext(AuthContext)
    const [noteInput, setNoteInput] = useState("")
    const [note, setNote] = useState(details.note || "");
    const [noteDate, setNoteDate] = useState(details.noteDate || "");


    // if expiry
    const isExpired = (expiryDate) => {
        return new Date(expiryDate) < new Date()
    }

    // if not expiry
    const daysLeft = (expiryDate) => {
        const now = new Date()
        const expiry = new Date(expiryDate);
        const diffTime = expiry - now;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays
    }
    const expired = isExpired(details.expiryDate);  // if expiry
    const left = daysLeft(details.expiryDate)      // if not expiry

    const canAddNote = user?.email === details.email

    const handleAddNote = () => {
        const currentDate = new Date().toLocaleDateString();

        const updatedNote = {
            note: noteInput,
            noteDate: currentDate
        };
        axios.patch(`https://assignment-11-server-beige-zeta.vercel.app/foods/${details._id}`, updatedNote,{
            withCredentials:true
        })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    setNote(noteInput);
                    setNoteDate(currentDate);
                    setNoteInput("")
                    Swal.fire("Success", "Note added!", "success");
                }
            })
            .catch(error => {
                console.error('Error updating note:', error);
            });
    };


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
                                <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full font-semibold mt-2">Expired</span>  // if expiry
                            ) : (
                                <p className="text-green-600 font-semibold mt-2">{left} day{left !== 1 ? 's' : ""} left until expiry</p>         // if not expiry
                            )
                        }
                        <h2 className="text-2xl font-semibold mt-6 mb-2">Description</h2>
                        <p className="text-gray-700 whitespace-pre-line">
                            {details.description || "No description provided."}
                        </p>
                    </div>
                </div>
            </div>
            {canAddNote && (
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">Add Note</h3>
                    <textarea
                        value={noteInput}
                        onChange={(e) => setNoteInput(e.target.value)}
                        placeholder="Write your note here..."
                        className="textarea textarea-bordered w-full mb-2"
                    />
                    <button onClick={handleAddNote} className="btn btn-primary btn-sm">Add Note</button>
                </div>
            )}

            {note && (
                <div className="mt-4 bg-gray-100 p-3 rounded">
                    <h4 className="font-semibold">Note:</h4>
                    <p>{note}</p>
                    <p className="text-sm text-gray-500 mt-1">Posted on: {noteDate}</p>
                </div>
            )}
        </div>
    );
};

export default FoodDetails;