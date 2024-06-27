import { useQuery } from "@tanstack/react-query";
import api from "../../../Services/axios";
import { useState } from "react";
import CoursePhishingStatSkeleton from "../../skeleton/CoursePhishingStatSkeleton";
import { Link } from "react-router-dom";
import BigLogo from "../../../assets/Big_Logo.svg"
import TrainingAndAssessments from "./TrainingAndAssessments";





const CoursePhishingStat = () => {

    const [numberOfDay, setNumberOfDays] = useState("last_30_days")

    const fetchCoursePhishingStat = async () => {
        const number_of_days = numberOfDay === "last_30_days" ? 30 : 7
        const { data } = await api.get(`/api/users/dashboard/course-phishing-stats/`, { params: { number_of_days } });
        return data;
    };

    const { data, isLoading } = useQuery({
        queryKey: ['CoursePhishingStat', numberOfDay],
        queryFn: fetchCoursePhishingStat,
    });

    return (
        <div>
            <div className="mt-12">
                {isLoading && <CoursePhishingStatSkeleton />}
            </div>
            {!isLoading && <div className="">
                {!data?.data?.courses_phishing_campaign_stats ? <div className='w-full h-[430px] bg-offWhite  my-6 rounded-md flex   items-center relative font-raleway'>
                    <div className='flex flex-col gap-5 px-24'>

                        <p className="text-4xl  font-medium text-text ">Quick Start</p>
                        <p className="text-base  text-text ">Welcome to Castellum, you can start by <br /> creating your first campaign.</p>
                        <div>
                            <button className="bg-[#2D3648] cusor pointer text-white font-mdium  px-10 py-3 rounded  ">
                                <Link to="/admin/dashboard">
                                    New Campaign
                                </Link>
                            </button>
                        </div>
                    </div>

                    <div className="absolute bottom-0 right-0 ">
                        <img src={BigLogo} alt="Logo" className=" h-[358px] flex " />
                    </div>
                </div> : <div className='w-full h-[430px] border border-gray6 bg-[#fff] my-6 p-1 rounded-md'>

                    <div className="flex justify-between items-center">
                        <p className=" ">Courses completed/Time</p>
                        <div>
                            <select
                                id="period-select"
                                value={numberOfDay}
                                onChange={(e) => setNumberOfDays(e.target.value)}
                                className=" rounded outline-none cursor-pointer p-2 "
                            >
                                <option value="last_30_days">Last 30 Days</option>
                                <option value="last_7_days">Last 7 Days</option>
                            </select>
                        </div>
                    </div>
                    <TrainingAndAssessments data={data?.data?.courses_phishing_campaign_stats} />
                </div>
                }
            </div>}
            <div className="w-full flex justify-between gap-4 mb-12">

            </div>
        </div>
    )
}

export default CoursePhishingStat