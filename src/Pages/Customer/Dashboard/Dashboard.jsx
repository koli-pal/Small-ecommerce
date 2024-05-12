import { Outlet } from "react-router-dom";
import CustomerNavbar from "../../../Componants/Customer/CustomerNavber";

export default function Dashboard() {
  return (
    <div>
      <CustomerNavbar />
      <div className="bg-gray-100 min-h-[90vh] ">
        <Outlet />
      </div>
    </div>
  );
}
