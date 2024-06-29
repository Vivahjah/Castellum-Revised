/* eslint-disable react/prop-types */

import RiskRateSkeleton from "../../skeleton/RiskRateSkeleton"

const DepartmentRiskRate = ({isLoading, data}) => {


    
    if(!isLoading){
        return (
            <div className="w-1/2">
                <RiskRateSkeleton />
            </div>
        )
    }
  return (
    <div>DepartmentRiskRate</div>
  )
}

export default DepartmentRiskRate