import { useQuery } from "@tanstack/react-query";
import ProfileDashboard from "../../skeleton/ProfileDashboard";
import CoursePhishingStat from "./CoursePhishingStat";


const DashboardLeft = () => {

    const { data: profile, isLoading: profileLoading } = useQuery({
        queryKey: ['profile'],
    });



    return (
        <div className="mx-8 mt-8">
            <div className="">
                {profileLoading ? <ProfileDashboard /> : <div className="">
                    <p className="">{profile?.name}</p>
                    <p className="font-medium text-xl">Dashboard</p>
                </div>}
            </div>
            <div className="">
                <CoursePhishingStat />
            </div>


        </div>
    )
}

export default DashboardLeft