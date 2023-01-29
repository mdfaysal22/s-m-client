import React from 'react';

const CreatePost = () => {
    return (
        <div className='my-5 bg-gray-100 border border-gray-200 rounded-md'>
            <div className='p-3 flex justify-start items-start gap-5'>
                <div className="avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                        <span className="text-3xl">K</span>
                    </div>
                </div>
                <div className='border cursor-pointer p-3 w-full rounded-full bg-base-100 border-gray-200'>
                    <p className='text-gray-600'>Write Your Thinking...</p>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;