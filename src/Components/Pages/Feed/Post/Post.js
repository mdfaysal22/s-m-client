import React from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import {BsThreeDots} from 'react-icons/bs';
import { FaRegShareSquare } from 'react-icons/fa';

const Post = () => {
    return (
        <div className='my-5 bg-gray-100 border border-gray-200 rounded-md'>
            <div className='p-3 flex flex-col gap-5'>
                <div className='flex justify-between border-b-2 border-base-100 pb-2 items-start'>
                    <div className="avatar placeholder">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                            <span className="text-3xl">K</span>
                        </div>
                    </div>
                    <div>
                        <BsThreeDots className='text-3xl p-1 hover:bg-gray-200 rounded-lg duration-100 cursor-pointer'></BsThreeDots>
                    </div>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, obcaecati nihil. Laborum velit ducimus dignissimos quod incidunt impedit? Veniam temporibus aut enim ipsam perspiciatis nemo soluta laudantium provident qui sapiente recusandae modi voluptates repellendus ipsum eligendi atque maiores, at culpa ad ex aliquam facilis optio et. Adipisci accusantium qui id! <button className='text-xs hover:text-secondary'>... See More</button> </p>

                    <img className='w-full mt-3 rounded-md' src="https://images.herzindagi.info/image/2021/Dec/nature-quotes-main.jpg" alt="Images Of Natural Beauty" />
                </div>
                <div className='flex justify-start items-center gap-3'>
                    <small>100k Like</small>
                    <small>100 Share</small>
                </div>
                <div className='flex justify-start border-t-2 border-base-100 py-3 gap-3'>
                    <button className='duration-100 bg-base-100 text-secondary p-2 rounded-full'> <AiOutlineLike className='text-xl'></AiOutlineLike></button>
                    <button className='duration-100 bg-base-100 text-secondary p-2 rounded-full'><FaRegShareSquare className='text-xl'></FaRegShareSquare></button>
                </div>
            </div>
        </div>
    );
};

export default Post;