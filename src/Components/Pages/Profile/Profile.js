import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { userAuth } from '../../Contexts/AuthContext';
import Post from '../Feed/Post/Post';

const Profile = () => {
    const {user,signOutSystem} = useContext(userAuth);
    const navigate = useNavigate();
    const signOutHandler = ()=> {
        signOutSystem()
        .then(result => {
            toast.success(`Successfully Sign Out ${user?.displayName}`);
            navigate('/login')
        })
        .catch(() => { })

    }


    const { data: allPost = [] } = useQuery({
        queryKey: ['allposts'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/allposts')
            return res.data
        }

    })

    const myPosts = allPost.filter(post => {
       return post.email === user.email
    })

    console.log(myPosts);
    return (
        <div>
            <div className='my-5 p-5 rounded-md bg-gray-100'>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-start items-center gap-5'>
                        <div className="avatar placeholder">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                                <img src={`${user?.photoURL}`} alt="" />
                            </div>
                        </div>
                        <div>
                            <h1 className='text-4xl font-normal'>{user?.displayName}</h1>
                        </div>
                    </div>

                    <div>
                        <button onClick={signOutHandler} className='btn text-base-100 btn-primary'>Log Out</button>
                    </div>
                </div>


            </div>
            {
                myPosts.map(posts => <Post key={posts._id} posts={posts}></Post>)
            }
        </div>
    );
};

export default Profile;