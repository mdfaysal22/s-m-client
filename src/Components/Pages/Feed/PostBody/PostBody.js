import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { userAuth } from "../../../Contexts/AuthContext";

const PostBody = ({refetch}) => {
  const { user } = useContext(userAuth);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handlePostSubmit = (data, event) => {
    const form = event?.target;
    const post = data?.post;
    const img = data?.image[0];
    const formData = new FormData();
    formData.append('image', img);
    const url = `https://api.imgbb.com/1/upload?key=0e3d79f4b095e0bbb5b9be5814435ed1`;
    fetch(url, {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(result => {
        const imgURL = result?.data?.url;

        const content = {
            
            name: user?.displayName,
            email: user?.email,
            photo: user?.photoURL,
            imgURL,
            post

        }
        fetch('http://localhost:5000/allposts', {
                                method: "POST",
                                headers:{
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(content)
                            })
                            .then(res => res.json())
                            .then(data => {
                                form.reset();
                                refetch();
                            });
    })
  }
  return (
    <div>
      <input type="checkbox" id="post-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box overflow-x-hidden relative">
          <label
            htmlFor="post-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex justify-start items-center gap-3">
            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                <img src={user?.photoURL} alt="" />
              </div>
            </div>
            <div>
                <h2>{user?.displayName}</h2>
            </div>
          </div>
          <div className="mt-5">
            <form onSubmit={handleSubmit(handlePostSubmit)}>
            <textarea {...register("post", { required: true })} placeholder="Write Your Business Idea..." className="textarea border-2 border-gray-400 w-full" ></textarea>

            <div className="form-control w-full">
                                
                                <label
                                    className=" w-full cursor-pointer appearance-none justify-center rounded-md  bg-white px-3 py-4 text-sm transition border-2 border-gray-400 focus:outline-none focus:ring-1  "
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
            <button type="submit" className="btn btn-primary mt-2 text-base-100 font-light"><label htmlFor="post-modal">Post</label></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBody;
