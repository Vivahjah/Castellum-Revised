/* eslint-disable react/prop-types */

import RiskRateSkeleton from "../../skeleton/RiskRateSkeleton"
import EmployeeRiskChart from "./EmployeeRiskChart"







const EmployeeRiskRate = ({ isLoading, data }) => {



    if (isLoading) {
        return (
            <div className="w-1/2">
                <RiskRateSkeleton />
            </div>
        )
    }


    return (
        <div className='w-1/2 border border-gray6 py-4 px-4 rounded-md'>
            <p className="text-text font-semibold">Employees Risk Rating</p>
            <EmployeeRiskChart data={data} />

        </div>
    )
}

export default EmployeeRiskRate