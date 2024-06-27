import { useQuery } from "@tanstack/react-query";
import api from "../../../Services/axios";
import DashboardSkeleton from "../../skeleton/Dashboard-Skeleton";
import { Button } from "@/components/ui/button"
import ScoreRateChart from "./ScoreRateChart";
import NoImg from "../../../assets/no_img.jpg"






const fetchDashboard = async () => {
    const { data } = await api.get(`/api/users/dashboard/`);
    return data;
};



const DashboardRight = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['dashboard'],
        queryFn: fetchDashboard,
    });

    const campaign_stats = ["Learning Campaign", "Phishing Campaigns", "Active Learning Campaign"]
    const normalizedStats = {
        "Learning Campaign": data?.data.campaign_stats.learning_campaigns,
        "Phishing Campaigns": data?.data.campaign_stats.phishing_campaigns,
        "Active Learning Campaign": data?.data?.campaign_stats.active_learning_campaigns
    };

    return (
        <div className="mx-7">
            {isLoading ? <div className="h-full ">
                <DashboardSkeleton />
            </div> : <div className="h-full mt-12">

                <Button className="text-white">New Campaign</Button>
                <div className="mt-8 mb-10">
                    <p className="font-medium">Organization Security Score</p>
                    <ScoreRateChart value={data?.data?.security_score} />
                    <p className="text-sm w-[15rem] mx-auto mt-5 text-gray-600">This score is based on the
                        average performance metrics of
                        all employees of the
                        organization.</p>
                </div>
                <div className="mt-12 mb-10">
                    <p className="font-medium">Organization Security Score</p>
                    <ScoreRateChart value={data?.data?.security_score} />
                </div>
                <div className="flex gap-4 justify-center flex-wrap">
                    {campaign_stats.map((stat, i) => (
                        <div className="text-sm my-3" key={i}>
                            <p className="">{stat}</p>
                            <p className="text-2xl my-3 ">{normalizedStats[stat]}</p>
                            {(i !== campaign_stats.length - 1) && <p className="text-xs">Last 14 days</p>}
                        </div>
                    ))}

                </div>
              
                    <div className="text-start">
                        <p className="text-xl font-medium text-start mb-5">Activity Log</p>
                        {data?.data?.activity_logs.length > 0 ? data?.data?.activity_logs.map((info, i) => (
                            <div className="my-4" key={i}>
                                <div className="w-full flex gap-2 items-start">
                                    <img src={NoImg} alt="avatar" className="h-8 w-8 rounded-full" />
                                    <div className="text-start">
                                        <p className=" text-sm ">{info.description}</p>
                                        <p className=" text-xs  text-slate-500">{info.created_at}</p>

                                    </div>
                                </div>
                            </div>
                        )) : <div>
                            <p className="font-mdium text-slate-500">No Activity was carried out</p>
                            </div>}
                    </div>
             
            </div>}
        </div>
    )
}

export default DashboardRight