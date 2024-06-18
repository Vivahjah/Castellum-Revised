import { PiBellFill } from "react-icons/pi";
import smallLogo from "../../../assets/smallLogo.svg";
import { HiOutlineChevronDown } from "react-icons/hi";
import { useState, useRef } from "react";
import OutideClickCloseModal from "../../../HelperFunctions/OutideClickCloseModal";

const AdminNavbar = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const ProfileOption = ["Logout"];
  const profileRef = useRef();


  OutideClickCloseModal(profileRef, () => setProfileOpen(false));



  return (
    <nav className="flex py-3 bg-white text-text fixed shadow-sm min-w-full justify-end items-center border border-tetiary">
      <div className="mr-5 flex gap-2 items-center">
        <p className="border flex justify-center items-center text-lg border-lightGrey rounded-md w-10 h-10 p-1.5">
          <PiBellFill />
        </p>
        <div className="w-fit h-10  rounded-md border border-lightGrey p-1">
          <img src={smallLogo} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="cursor-pointer relative" ref={profileRef}>
          <div className="flex items-center gap-3">
            <div onClick={() => setProfileOpen(!profileOpen)} className="flex flex-col">
              <p className="text-xs font-medium">Ethnos IT Solution</p>
              <p className="text-xs">noreply@ethnos.com.ng</p>
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
      </div>
    </nav>
  );
};

export default AdminNavbar;
