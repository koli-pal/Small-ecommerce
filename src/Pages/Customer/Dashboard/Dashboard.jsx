import { Outlet, useNavigate } from "react-router-dom";
import CustomerNavbar from "../../../Componants/Customer/CustomerNavber";
import { useEffect } from "react";

export default function Dashboard() {
  const navigate = useNavigate()
  useEffect(()=>{navigate('/dashboard/orders')},[])
  return (

    <div>
      <CustomerNavbar />
      <div className="bg-gray-100 min-h-[90vh] ">
        <Outlet />
      </div>
    </div>
  );
}
