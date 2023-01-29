import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='hero min-h-screen'>
            <div className='hero-content'>
                <div className='text-center'>
                    <div className='text-center mb-5'>
                        <h1 className='text-4xl font-extralight'>Welcome Back to Join-In Site.</h1>
                        <small>Join-in a Social Media Website to Share Business Idea.</small>
                    </div>
                    <div className='text-center bg-gray-100 p-5 rounded-md'>
                        <h1 className='text-3xl font-light'>Login Now</h1>
                        <form className='mt-3 flex flex-col justify-center items-center gap-3'>
                            <input type="text" placeholder="Type Your Email" className="input w-full border border-primary focus:ring-0 " />
                            <input type="password" placeholder="Type Your Password" className="input w-full border border-primary focus:ring-0 " />
                            <Link className='hover:text-secondary duration-100 text-xs' to={'/signup'}>I have not one Account in Join-In.</Link>

                            <button className='btn btn-primary text-base-100 w-full' type='submit'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;