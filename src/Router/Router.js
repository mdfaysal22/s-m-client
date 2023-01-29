import { createBrowserRouter } from "react-router-dom";
import Feed from "../Components/Pages/Feed/Feed";
import Followers from "../Components/Pages/Followers/Followers";
import Followings from "../Components/Pages/Followings/Followings";
import Login from "../Components/Pages/Login/Login";
import Profile from "../Components/Pages/Profile/Profile";
import Signup from "../Components/Pages/Signup/Signup";
import Welcome from "../Components/Pages/Welcome/Welcome";
import Main from "../Layout/Main";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Feed></Feed>
            },
            {
                path: '/followers',
                element: <Followers></Followers>
            },
            {
                path: '/followings',
                element: <Followings></Followings>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }
        ]
    },
    {
        path: "/welcome",
        element: <Welcome></Welcome>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signup',
        element: <Signup></Signup>
    }
])