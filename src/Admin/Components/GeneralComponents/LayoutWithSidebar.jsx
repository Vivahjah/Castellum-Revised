import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminNavbar from './AdminNavbar';
import { useSelector } from 'react-redux';

const LayoutWithSidebar = () => {

  const { isSidebarOpen } = useSelector(state => (state.AdminDeviceSlice));
  return (
    <div className='bg-accent'>
      <div className="fixed">
        <AdminNavbar />
      </div>
      <div className="fixed bg-primary">
        <AdminSidebar />
      </div>
      <div className={`${isSidebarOpen ? "pl-60" : "pl-20"} duration-300`}>
        <div className="pt-16">
          <Outlet />

        </div>

      </div>





    </div >
  )
}

export default LayoutWithSidebar