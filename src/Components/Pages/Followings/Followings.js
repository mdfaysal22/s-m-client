import React from 'react';
import Following from './Following/Following';

const Followings = () => {
    return (
        <div>
            <div className='mt-5'>
                <h1 className='text-3xl font-light'>List Of Followings</h1>
            </div>
            <Following></Following>
        </div>
    );
};

export default Followings;