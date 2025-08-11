import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
    const { user, loginUser, googleLogin } = use(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()
    console.log(user, location)

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user)
                navigate(location?.state || '/')
            })
            .catch(error => {
                console.log(error)
            })
    }


    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value;
        console.log(email, password)


        loginUser(email, password)
            .then(result => {
                console.log(result)
                navigate(location?.state || '/')
                toast.success('Login successful')
            })
            .catch(error => {
                console.log(error)
                toast.error('Something went wrong')
            })
    }
    return (
        <div className="card bg-white/80 backdrop-blur-sm w-full mx-auto mt-10 max-w-sm shrink-0 shadow-lg border border-blue-200">
            <div className="card-body">
                <h3 className="text-4xl font-bold text-center text-indigo-800">Login now!</h3>
                <form onSubmit={handleLogin} className="fieldset">
                    <label className="label text-sky-800 font-medium">Email</label>
                    <input type="email" name='email' className="input input-bordered border-indigo-200 focus:border-indigo-400" placeholder="Email" />
                    <label className="label text-sky-800 font-medium">Password</label>
                    <input type="password" name='password' className="input input-bordered border-indigo-200 focus:border-indigo-400" placeholder="Password" />
                    <div><a className="link link-hover text-sky-600">Forgot password?</a></div>
                    <button className="btn bg-gradient-to-r from-sky-400 to-indigo-500 text-white hover:opacity-90 mt-4">Login</button>
                </form>
                <p className="mt-3 text-sky-800">New to this site? Please <Link className='text-indigo-600 underline' to='/register'>Register</Link></p>
                <button onClick={handleGoogleLogin} className="btn bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 mt-2">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default Login;