import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';

const Register = () => {
    const [error, setError] = useState('');

    const { createUser, updateUser,setUser } = use(AuthContext)
    const navigate = useNavigate();


    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value
        console.log(email, password, name,photoURL);


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
                updateUser({displayName: name, photoURL:photoURL}).then(() =>{
                    setUser({...user, displayName: name, photoURL:photoURL})
                }).catch(error =>{
                    console.log(error)
                })
            })
            .catch(error => {
                console.log(error)
                toast.error('Fail to register')
            })

    }
    return (
        <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h3 className="text-4xl font-bold text-center">Register now!</h3>
                <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" className="input" name='name' placeholder="Your name" />
                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" />
                    <label className="label">PhotoURL</label>
                    <input type='url' className="input" name='photoURL' placeholder="photoURL" />
                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Register</button>
                    {error && <p className='text-red-500 text-sm'>{error}</p>}
                </form>
                <p>Already have an account? Please <Link className='text-blue-400 underline' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;