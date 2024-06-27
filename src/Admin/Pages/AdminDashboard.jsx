import DashboardLeft from "../Components/Dashboard/DashboardLeft"
import DashboardRight from "../Components/Dashboard/DashboardRight"



const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-light">
      <div className="w-[75%]">
        <DashboardLeft />
  
      </div>  
      <div className="w-[25%] border h-fit pb-[2rem] border-r-lime-200 flex text-center justify-center">
      <DashboardRight />      
      </div>  
    </div>
  )
}

export default AdminDashboard