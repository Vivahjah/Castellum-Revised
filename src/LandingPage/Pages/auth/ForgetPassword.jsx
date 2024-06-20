import { useState } from "react";
import { Link } from "react-router-dom";
import validator from 'validator';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import Loader from "../../../GeneralComponents/Loader"; 
import api from "../../../Services/axios";

const recoverPassword = async ({ email }) => {
  const response = await api.post(`/api/users/forgot-password/`, { email });
  return response.data;
};

const ForgetPassword = () => {
  
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);


  const mutation = useMutation({ mutationFn: recoverPassword,
    onSuccess: (data) => {
        console.log(data);
        toast.success("You have been succefully Logged In")
        setSubmitted("")
        
      },
      onError: (error) => {
        console.error('Could not submit Email', error);
        toast.error(error.response.data.error[0]);
      },
   })

  const handleRecoverPassword = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!email || !validator.isEmail(email)) {
      return toast.warning("Email field is  empty or not correctly filled");
    }
    mutation.mutate({ email });
  };

  return (
    <div className="w-[70%] text-text">
      <p className="font-medium text-3xl text-center">
        Recover your Password
      </p>
      <form onSubmit={handleRecoverPassword} className="mt-10">
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
          <p className={ !email ||  !validator.isEmail(email) && submitted ? "text-[0.9rem] text-primary mt-1" : "invisible"}>
            Invalid email or email field empty
          </p>
        </div>
        
       
        <button
          disabled={mutation.isPending}
          type="submit"
          className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-primary mt-3"
        >
          {mutation.isPending ? <Loader /> : "Submit"}
          
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

export default ForgetPassword;
