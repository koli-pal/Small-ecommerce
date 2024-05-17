
import { Outlet, useNavigate } from "react-router-dom";
import CustomerNavbar from "../../../Componants/Customer/CustomerNavber";
import CustomerSidebar from "../../../Componants/Customer/CustomerSidebar";
import { useEffect } from "react";


export default function Dashboard() {
  const navigate = useNavigate()
  useEffect(()=>{navigate('/dashboard/orders')},[])
  return (

    <div>
      <CustomerNavbar/>
    <div className="flex" >
      <CustomerSidebar/>
      <div className="bg-gray-100 min-h-[90vh] w-full p-10 ">
        <Outlet />
      </div>
    </div>
    </div>
  );
}
