import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { userAuth } from '../../Contexts/AuthContext';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { emailSignup, setLoader, updateUser } = useContext(userAuth);
    const navigate = useNavigate();

    const onSubmit = (data, event) => {
        const form = event.target;
        const name = data.name;
        const email = data.email;
        const pass = data.password;
        const img = data.image[0];
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=0e3d79f4b095e0bbb5b9be5814435ed1`;
        fetch(url, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            const imgURL = result.data.url;
            if(result.success){
                emailSignup(email, pass)
                .then(result => {
                    const success = result.user;
    
                    updateUser(name, imgURL)
                        .then(result => {
                            
                            setLoader(true)
                            const newUser = {
                                name,
                                imgURL, 
                                email
                            }
                            fetch('http://localhost:5000/users', {
                                method: "POST",
                                headers:{
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(newUser)
                            })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                toast.success("SignUp Successfully");
                                navigate('/')
                                setLoader(false)
                            });
                            
                        })
                        .catch(err => () => {
                            const errorMassage = err.massage;
                        })
    
                })
                .catch(err => console.log(err));
            }
            
            
        })
        
        form.reset();
    };
    return (
        <div className='hero min-h-screen'>
            <div className='hero-content'>
                <div className='text-center'>
                    <div className='text-center mb-5'>
                        <h1 className='text-4xl font-extralight'>Welcome Back to Join-In Site.</h1>
                        <small>Join-in a Social Media Website to Share Business Idea.</small>
                    </div>
                    <div className='text-center bg-gray-100 p-5 rounded-md'>
                        <h1 className='text-3xl font-light'>Sign-Up Now</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className='mt-3 flex flex-col justify-center items-center gap-3'>
                            <input {...register("name")} type="text" placeholder="Type Your Full Name" className="input w-full border border-primary focus:ring-0 " />
                            <input {...register("email", { required: true })} type="text" placeholder="Type Your Email" className="input w-full border border-primary focus:ring-0 " />

                            <input {...register("password")} type="password" placeholder="Type Your Password" className="input w-full border border-primary focus:ring-0 " />

                            <div className="form-control w-full">
                                
                                <label
                                    className=" w-full cursor-pointer appearance-none justify-center rounded-md   bg-white px-3 py-4 text-sm transition border border-primary focus:outline-none focus:ring-1  "
                                    tabIndex="0">
                                    <span htmlFor="photo-dropbox" className="flex items-center space-x-2">
                                        <svg className="h-6 w-6 stroke-gray-400" viewBox="0 0 256 256">
                                            <path
                                                d="M96,208H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="24"></path>
                                            <path
                                                d="M80,128a80,80,0,1,1,144,48"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="24"></path>
                                            <polyline
                                                points="118.1 161.9 152 128 185.9 161.9"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="24"></polyline>
                                            <line
                                                x1="152"
                                                y1="208"
                                                x2="152"
                                                y2="128"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="24"></line>
                                        </svg>
                                        <span className="text-gray-400 font-medium">
                                            Drop Your Profile Photo, or
                                            <span className="text-blue-400 underline ml-1">browse</span>
                                        </span>
                                    </span>
                                    <input {...register("image")} id="photo-dropbox" type="file" className="sr-only w-full" />
                                </label>
                            </div>
                            <Link className='hover:text-secondary duration-100 text-xs' to={'/login'}>Already Have an Account in Join-in.</Link>

                            <button className='btn btn-primary text-base-100 w-full' type='submit'>Sign-Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;