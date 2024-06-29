import { useQuery } from "@tanstack/react-query";
import ProfileDashboard from "../../skeleton/ProfileDashboard";
import CoursePhishingStat from "./CoursePhishingStat";
import EmployeeRiskRate from "./EmployeeRiskRate";
import DepartmentRiskRate from "./DepartmentRiskRate";


const DashboardLeft = () => {

    const { data: profile, isLoading: profileLoading } = useQuery({
        queryKey: ['profile'],
    });

    const { data, isLoading } = useQuery({
        queryKey: ['dashboard'],
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
            <div className="w-full flex justify-between gap-4 my-24">
                <EmployeeRiskRate isLoading={isLoading} data={data?.data?.employees_security_stats} />
                <DepartmentRiskRate isLoading={isLoading} data={data?.data?.departments_security_stats} />

            </div>


        </div>
    )
}

export default DashboardLeft