
import { Outlet } from 'react-router-dom';
import WelcomeSide from './WelcomeSide';

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex ">
      <div className="w-1/2 bg-accent flex items-center justify-center">
        <WelcomeSide />       
      </div>
      <div className="w-1/2  flex items-center justify-center">     
      
            <Outlet />
          
      </div>
    </div>
  );
};

export default AuthLayout;
