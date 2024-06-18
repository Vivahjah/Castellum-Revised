
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import AdminRoutes from './routes/AdminRoutes';
// import EmployeeRoutes from './routes/EmployeeRoutes';
import LandingPageRoutes from './Routes/LandingPageRoute';
import AdminRoutes from './Routes/AdminRoutes';
import NotFound from './GeneralComponents/NotFound';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/*" element={<LandingPageRoutes />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
      {/* <Route path="/employee/*" element={<EmployeeRoutes />} /> */}
      <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
    </Routes>
  </Router>
  );
}

export default App;
