import React from 'react';
import CreatePost from './CreatePost/CreatePost';
import Post from './Post/Post';

const Feed = () => {
    return (
        <div>
            <CreatePost></CreatePost>
            <Post></Post>
        </div>
    );
};

export default Feed;