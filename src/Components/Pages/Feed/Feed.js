import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { userAuth } from '../../Contexts/AuthContext';
import CreatePost from './CreatePost/CreatePost';
import Post from './Post/Post';
import PostBody from './PostBody/PostBody';

const Feed = () => {
    const {user} = useContext(userAuth);
    const { data: allPost = [], refetch } = useQuery({
        queryKey: ['allposts'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/allposts')
            return res.data
        }

    })
    console.log(allPost);
    return (
        <div>
            <CreatePost user={user}></CreatePost>
            <>
            {
                allPost.map(posts => <Post key={posts._id} posts={posts}></Post>) 
            }
            </>

            {
                user?.email&& <PostBody refetch={refetch}></PostBody>
            }
        </div>
    );
};

export default Feed;