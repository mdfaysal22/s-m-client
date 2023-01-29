import React from 'react';
import Post from '../Feed/Post/Post';

const Profile = () => {
    return (
        <div>
            <div className='my-5 p-5 rounded-md bg-gray-100'>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-start items-center gap-5'>
                        <div className="avatar placeholder">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-32">
                                <span className="text-3xl">K</span>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-4xl font-normal'>User Name</h1>
                            <small className='text-xl'>Title Here...</small>
                        </div>
                    </div>

                    <div>
                        <button className='btn text-base-100 btn-primary'>Log Out</button>
                    </div>
                </div>


            </div>

            <Post></Post>
        </div>
    );
};

export default Profile;