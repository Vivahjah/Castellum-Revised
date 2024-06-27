import { PiBellFill } from "react-icons/pi";
import no_img from "../../../assets/no_img.jpg";
import { HiOutlineChevronDown } from "react-icons/hi";
import { useState, useRef } from "react";
import OutideClickCloseModal from "../../../HelperFunctions/OutideClickCloseModal";
import api from "../../../Services/axios";


import { useQuery } from "@tanstack/react-query";
import ProfileSkeleton from "../../skeleton/ProfileSkeleton";

const fetchProfile = async () => { 
  const { data } = await api.get(`/api/users/profile/`);
  return data;
};

const AdminNavbar = () => {
  const { data,isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: fetchProfile,
  });

  const [profileOpen, setProfileOpen] = useState(false);
  const ProfileOption = ["Logout"];
  const profileRef = useRef();
  OutideClickCloseModal(profileRef, () => setProfileOpen(false));


 



  return (
    <nav className="flex z-30 py-3 bg-white min-h-16 text-text fixed shadow-md min-w-full justify-end items-center border border-tetiary">
      {isLoading ?   <ProfileSkeleton /> :<div className="mr-5 flex gap-2 items-center">
        <p className="border flex justify-center items-center text-lg border-lightGrey rounded-md w-10 h-10 p-1.5">
          <PiBellFill />
        </p>
        <div className="w-10 h-10  rounded-md border border-lightGrey ">
          <img src={data?.profile_picture || no_img } alt="" className="w-full h-full object-cover" />
        </div>
        <div className="cursor-pointer relative" ref={profileRef}>
          <div className="flex items-center gap-3">
            <div onClick={() => setProfileOpen(!profileOpen)} className="flex flex-col">
              <p className="text-xs font-medium">{data?.name}</p>
              <p className="text-xs">{data?.email}</p>
            </div>
            <HiOutlineChevronDown onClick={() => setProfileOpen(!profileOpen)} className={`${profileOpen && "rotate-180"} duration-300`} />
          </div>
          {profileOpen && (
            <div className="absolute mt-2 w-36 h-fit bg-accent2 shadow-lg px-2 py-1">
              {ProfileOption.map((option, i) => (
                <button className="text-sm hover:text-primary duration-300" key={i}>
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div> }
      
    </nav>
  );
};

export default AdminNavbar;
