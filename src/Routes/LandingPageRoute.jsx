
import { Route, Routes } from 'react-router-dom';
import Login from '../LandingPage/Pages/auth/Login';
import HomePage from '../LandingPage/Pages/HomePage';
import AuthLayout from '../LandingPage/Components/AuthLayout';
import ForgetPassword from '../LandingPage/Pages/auth/ForgetPassword';


const LandingPageRoutes = () => (
  <Routes> 
    <Route path="/" element={<HomePage />} />
    <Route element={<AuthLayout />}>
      <Route path="/auth/login" element={<Login />} />     
      <Route path="/auth/forget-password" element={<ForgetPassword />} />     
    </Route>
  </Routes>
);

export default LandingPageRoutes;
