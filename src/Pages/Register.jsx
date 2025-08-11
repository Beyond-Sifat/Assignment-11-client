import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
// import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const Register = () => {
    const [error, setError] = useState('');

    const { createUser, updateUser, setUser } = use(AuthContext)
    const navigate = useNavigate();


    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value
        console.log(email, password, name, photoURL);


        if (!/[A-Z]/.test(password)) {
            return setError('Password must contain an uppercase letter');
        }
        if (!/[a-z]/.test(password)) {
            return setError('Password must contain a lowercase letter');
        }
        if (password.length < 6) {
            return setError('Password must be at least 6 characters long');
        }


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(result)
                navigate('/')
                toast.success("successfully register")
                updateUser({ displayName: name, photoURL: photoURL }).then(() => {
                    setUser({ ...user, displayName: name, photoURL: photoURL })
                }).catch(error => {
                    console.log(error)
                })
            })
            .catch(error => {
                console.log(error)
                toast.error('Fail to register')
            })

    }
    return (
        <div className="card bg-white/80 backdrop-blur-sm w-full mx-auto mt-10 max-w-sm shrink-0 shadow-lg border border-blue-200">
            <div className="card-body">
                <h3 className="text-4xl font-bold text-center text-indigo-800">Register now!</h3>
                <form onSubmit={handleRegister} className="fieldset">
                    <label className="label text-sky-800 font-medium">Name</label>
                    <input type="text" className="input input-bordered border-indigo-200 focus:border-indigo-400" name='name' placeholder="Your name" />
                    <label className="label text-sky-800 font-medium">Email</label>
                    <input type="email" className="input input-bordered border-indigo-200 focus:border-indigo-400" name='email' placeholder="Email" />
                    <label className="label text-sky-800 font-medium">PhotoURL</label>
                    <input type='url' className="input input-bordered border-indigo-200 focus:border-indigo-400" name='photoURL' placeholder="photoURL" />
                    <label className="label font-medium text-sky-800">Password</label>
                    <input type="password" className="input input-bordered border-indigo-200 focus:border-indigo-400" name='password' placeholder="Password" />
                    <button className="btn bg-gradient-to-r from-sky-400 to-indigo-500 text-white hover:opacity-90 mt-4">Register</button>
                    {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
                </form>
                <p className='mt-3 text-sky-800'>Already have an account? Please <Link className='text-blue-400 underline' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;