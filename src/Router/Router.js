import { createBrowserRouter } from "react-router-dom";
import Feed from "../Components/Pages/Feed/Feed";
import Followers from "../Components/Pages/Followers/Followers";
import Followings from "../Components/Pages/Followings/Followings";
import Login from "../Components/Pages/Login/Login";
import Peoples from "../Components/Pages/Peoples/Peoples";
import Profile from "../Components/Pages/Profile/Profile";
import Signup from "../Components/Pages/Signup/Signup";
import Welcome from "../Components/Pages/Welcome/Welcome";
import Main from "../Layout/Main";
import PrivateRouter from "../PrivateRouter/PrivateRouter";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<PrivateRouter><Feed></Feed></PrivateRouter>
            },
            {
                path: '/followers',
                element: <PrivateRouter><Followers></Followers></PrivateRouter>
            },
            {
                path: '/followings',
                element: <PrivateRouter><Followings></Followings></PrivateRouter>
            },
            {
                path: '/profile',
                element: <PrivateRouter><Profile></Profile></PrivateRouter>
            },
            {
                path: '/users',
                element: <Peoples></Peoples>
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