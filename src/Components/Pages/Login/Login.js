import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { userAuth } from '../../Contexts/AuthContext';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {emailSignIn, setLoader } = useContext(userAuth);
    const navigate = useNavigate()
    const location = useLocation();
  const from = location.state?.from?.pathname || "/"
    const onSubmit = (data, e) => {
        const form = e.target;
        const email = data.email;
        const password = data.password;
        emailSignIn(email, password)
        .then(result => {
            const currentUser = result.user;
            setLoader(true);
            toast.success(`Successfully Login ${currentUser.displayName}`);
            navigate(from, { replace: true })
            
            
        })
        .catch(err => {
            const message = err.message;
            toast.error(`${message}`)
        })
        form.reset();
    }
    return (
        <div className='hero min-h-screen'>
            <div className='hero-content'>
                <div className='text-center'>
                    <div className='text-center mb-5'>
                        <h1 className='text-4xl font-extralight'>Welcome Back to Join-In Site.</h1>
                        <small>Join-in a Social Media Website to Share Business Idea.</small>
                    </div>
                    <div className='text-center bg-gray-100 p-5 rounded-md'>
                        <h1 className='text-3xl font-light'>Login Now</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className='mt-3 flex flex-col justify-center items-center gap-3'>
                            <input {...register("email", { required: true })} type="text" placeholder="Type Your Email" className="input w-full border border-primary focus:ring-0 " />
                            <input  {...register("password")}  type="password" placeholder="Type Your Password" className="input w-full border border-primary focus:ring-0 " />
                            <Link className='hover:text-secondary duration-100 text-xs' to={'/signup'}>I have not one Account in Join-In.</Link>

                            <button className='btn btn-primary text-base-100 w-full' type='submit'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;