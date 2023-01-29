import React from 'react';
import Follower from './Follower/Follower';

const Followers = () => {
    return (
        <div>
            <div className='mt-5'>
                <h1 className='text-3xl font-light'>List Of Followers</h1>
            </div>
            <Follower></Follower>
        </div>
    );
};

export default Followers;