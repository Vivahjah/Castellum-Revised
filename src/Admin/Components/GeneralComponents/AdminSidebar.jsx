// src/App.js
import { BsArrowLeftShort, BsCollectionPlay } from "react-icons/bs";
import { FiHelpCircle, FiSettings } from "react-icons/fi";
import { IoStatsChartOutline } from "react-icons/io5";
import { MdOutlineCampaign } from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";
import BigLogo from "../../../assets/Logo.svg"
import SmallLogo from "../../../assets/smallLogo.svg"
import { Link } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";
import { SET_SELECTED_SIDEBAR_TAB, TOGGLE_SIDEBAR } from "../../AdminRedux/AdminDeviceSlice";

const Menu = [
  { title: "Dashboard", icon: <RiDashboardFill /> },
  { title: "Campaigns", icon: <MdOutlineCampaign /> },
  { title: "Library", icon: <BsCollectionPlay />, },
  { title: "Reports", icon: <IoStatsChartOutline />, spacing: true },
  { title: "Settings", icon: <FiSettings /> },
  { title: "Help", icon: <FiHelpCircle /> },

]

const AdminSidebar = () => {


  const dispatch = useDispatch()


  const { selectedSideBarTab, isSidebarOpen } = useSelector(state => (state.AdminDeviceSlice));
  

 
  return (

    <div
      className={`bg-white fixed text-text border border-r-tetiary h-screen duration-300 transition-all p-5 pt-4 ${isSidebarOpen ? "w-60" : "w-20"} relative`}>
      <BsArrowLeftShort onClick={() => dispatch(TOGGLE_SIDEBAR())} className={` ${!isSidebarOpen && "rotate-180"} bg-white text-[#081A51] text-3xl rounded-full absolute -right-3 top-16 border border-[#081A51] cursor-pointer`} />


      <Link to="/admin/dashboard">
      <div className="mb-16 h-16">
        {isSidebarOpen ? <img src={BigLogo} alt="cast-big"  /> : <img src={SmallLogo} alt="cast-big" />}

      </div>

      </Link>

      <ul className="pt-2">
        {Menu.map((menu, index) => (
          <Link onClick={() => dispatch(SET_SELECTED_SIDEBAR_TAB(index))} key={index} to="/admin/dashboard">
            <li
              className={`text-sm flex items-center duration-200 gap-x-4 cursor-pointer p-2 rounded-md ${index === selectedSideBarTab ? "bg-text text-white" : "hover:bg-secondary hover:text-white"} ${menu.spacing ? "mt-5" : "mt-2"}`}
            >
              <span className="text-2xl block float-left">{menu.icon}</span>
              <span className={`text-base font-medium flex-1 ${!isSidebarOpen && "hidden"}`}>{menu.title}</span>
            </li>
          </Link>
        ))}
      </ul>

    </div>





  );
};

export default AdminSidebar;
