import React, { useContext } from "react";
import { userAuth } from "../../../Contexts/AuthContext";

const People = ({people, refetch}) => {
    const {user}= useContext(userAuth);
    const {name, imgURL, email} = people;
    const handleFollowing = () => {
        
    }
  return (
    <div className="my-3 p-3 rounded-md bg-gray-100 ">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-start gap-3">
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
              {
                imgURL ? <img src={imgURL && imgURL} alt="" /> : <span>{name.slice(0,1)}</span>
              }
            </div>
          </div>

          <div>
            <h1>{name}</h1>
          </div>
        </div>
          <button onClick={handleFollowing} className="btn btn-sm btn-secondary font-extralight">
            Following
          </button>
         
      </div>
    </div>
  );
};

export default People;
