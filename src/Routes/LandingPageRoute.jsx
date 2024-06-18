
import { Route, Routes } from 'react-router-dom';
import Login from '../LandingPage/Pages/Login';
import HomePage from '../LandingPage/Pages/HomePage';
import AuthLayout from '../LandingPage/Components/AuthLayout';


const LandingPageRoutes = () => (
  <Routes>
   

    <Route path="/" element={<HomePage />} />

    <Route element={<AuthLayout />}>
      <Route path="/auth/login" element={<Login />} />     
    </Route>

  
  
  </Routes>
);

export default LandingPageRoutes;
