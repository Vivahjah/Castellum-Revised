import Logo from "../../assets/Logo.svg"

import { HiOutlineChevronLeft } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

const WelcomeSide = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full flex flex-col items-center justify-center '>
            <div className="px-20 flex flex-col space-y-36">
                <div className="">
                    <img src={Logo} alt="Castellum Logo" className="h-12 mb-20" />
                    <div className='flex flex-col justify-center pt-12'>
                        <p className="font-medium text-3xl text font-raleway text-text ">Welcome to Castellum</p>
                        <p className="mt-2 text-justify text-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis corrupti sequi hic at praesentium numquam nulla aut, architecto maxime ad nobis vero a ullam! Accusantium incidunt sit totam magnam repellat.</p>
                    </div>
                </div>             
                <div onClick={() => navigate(-1)}  className="cursor-pointer font-medium flex items-center gap-2">
                    <p className="text-primary"><HiOutlineChevronLeft /></p>
                    <button className="text-primary ">Back</button>
                </div>
            </div>
        </div>
    )
}

export default WelcomeSide