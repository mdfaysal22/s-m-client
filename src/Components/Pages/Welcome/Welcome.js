import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div>
            <div className='hero min-h-screen'>
            <div className='hero-content'>
                <div className='text-center'>
                    <h1 className='text-4xl font-light'>Welcome to Join-In</h1>
                    <small>Join-in a Social Media Website</small>
                    <div className='divider my-1'></div>
                    <div className='flex justify-center items-center gap-5'>
                        <Link to={'/signup'} className='btn btn-primary text-base-100 font-extralight'>SignUp</Link>
                        <Link to={'/login'} className='btn btn-primary text-base-100 font-extralight'>Login</Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Welcome;