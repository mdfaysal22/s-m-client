import React from 'react';

const Following = () => {
    return (
        <div className='my-3 p-3 rounded-md bg-gray-100 '>
            <div className='flex justify-between items-center'>
            <div className='flex justify-start items-start gap-3'>
            <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                    <span className="text-3xl">K</span>
                </div>
            </div>

            <div>
            <h1>Name Here... </h1>
            <small>Title Here...</small>
            </div>
            </div>

            <button className='btn btn-sm btn-secondary font-extralight'>Unfollow</button>
            </div>
        </div>
    );
};

export default Following;