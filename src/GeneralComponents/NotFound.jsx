
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-4">The page you are looking for does not exist.</p>
      <button onClick={() => navigate(-1)} className="text-blue-500 hover:underline">
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
