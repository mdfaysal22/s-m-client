import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FaUserAlt, FaUserFriends } from 'react-icons/fa';
import { RiUserFollowFill } from 'react-icons/ri';
import { GiThreeFriends } from 'react-icons/gi';

const Navbar = () => {
    const [state, setState] = useState(false);

    const menu = [
        { title: 'Feed', icon: <AiFillHome></AiFillHome>, path: '/' },
        { title: 'Followers', icon: <FaUserFriends></FaUserFriends>, path: '/followers' },
        { title: 'Followings', icon: <RiUserFollowFill></RiUserFollowFill>, path: '/followings' },
        { title: 'Peoples', icon: <GiThreeFriends></GiThreeFriends>, path: '/users' },
        { title: 'Profile', icon: <FaUserAlt></FaUserAlt>, path: '/profile' }
    ]
    return (
        <div className='sticky top-0 z-50'>



            <nav className=" w-full border-b  md:border-0 md:static bg-primary text-base-100">
                <div className="items-center px-4 max-w-screen-xl  md:flex md:px-8">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <div className="flex-1">
                            <Link to={'/'} className="normal-case text-xl">Join-In</Link>
                        </div>
                        <div className="md:hidden">
                            <button className="text-base-100 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                                onClick={() => setState(!state)}
                            >
                                {
                                    state ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                        </svg>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                        <ul className="justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {
                                menu.map((item, idx) => {
                                    return (
                                        <li key={idx} className="text-base-100 pl-5 md:pl-2 hover:text-secondary duration-100">
                                            <Link className='flex items-center gap-1' to={item.path}>
                                                
                                                {item.icon}
                                                {item.title}
                                                
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;