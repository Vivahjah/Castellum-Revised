
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from '../Admin/Pages/AdminDashboard';
import LayoutWithSidebar from '../Admin/Components/GeneralComponents/LayoutWithSidebar';


const AdminRoutes = () => (
  <Routes>
    {/* <Route path="/admin/dashboard" element={<AdminDashboard />} />
    <Route path="/admin/profile" element={<AdminProfile />} />
    <Route path="/admin/settings" element={<AdminSettings />} /> */}

  
    <Route element={<LayoutWithSidebar />}>
      <Route path="dashboard" element={<AdminDashboard />} />     
    </Route>
  </Routes>
);

export default AdminRoutes;
