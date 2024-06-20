import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import validator from 'validator';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import Loader from "../../../GeneralComponents/Loader"; 
import { useNavigate } from "react-router-dom";
import { addItemToLocalStorage } from "../../../HelperFunctions/UseLocalStorage";
import api from "../../../Services/axios";

const login = async ({ email, password }) => {
  const response = await api.post(`/api/users/login/`, {
    email,
    password,
  });
  return response.data;
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate()

  const mutation = useMutation({ mutationFn: login,
    onSuccess: (data) => {
        console.log('Login successful:', data?.role);
        toast.success("You have been succefully Logged In")
        if (data.role === 'organization') {
            navigate("/admin/dashboard");
          } else {
            // Navigate to a employee Page later
            navigate('/');
          }

          addItemToLocalStorage('token', data?.access)
      },
      onError: (error) => {
        console.error('Login failed:', error);
        toast.error(error.response.data.error[0]);
      },
   })

  const handleLogin = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!email || !password || !validator.isEmail(email)) {
      return toast.warning("Email field or Password field is empty or not correctly filled");
    }
    mutation.mutate({ email, password });
  };

  return (
    <div className="w-[70%] text-text">
      <p className="font-medium text-3xl text-center">
        Login to Your Account
      </p>
      <form onSubmit={handleLogin} className="mt-10">
        <div>
          <p className="text-lg">Email</p>
          <input
            type="text"
            placeholder="Email Address"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-4 border border-subtleText rounded-md outline-none text-text text-sm"
            
          />
          <p className={ !email   && submitted ? "text-[0.9rem] text-primary mt-1" : "invisible"}>
            Invalid email or email field empty
          </p>
        </div>
        <div className="relative">
          <p className="mt-0.5 text-lg">Password</p>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-4  border border-subtleText rounded-md outline-none text-text font-raleway text-sm"
            
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-text"
          >
            {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
          </button>
          <p className={!password && submitted ? "text-[0.9rem] text-primary mt-1" : "invisible"}>
            Password field cannot be empty
          </p>
        </div>
        <Link
          to="/auth/forget-password"
          className="flex justify-end text-primary mt-1"
        >
          Forgot Password?
        </Link>
        <button
          disabled={mutation.isPending}
          type="submit"
          className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-primary mt-3"
        >
          {mutation.isPending ? <Loader /> : "Login"}
          {/* Login */}
        </button>
      </form>
      <p className="text-center">
        {"Don't have an Account?"}
        <span className="text-primary ml-2">
          <Link to="/auth/sign-up">Sign up</Link>
        </span>
      </p>
    </div>
  );
};

export default Login;
