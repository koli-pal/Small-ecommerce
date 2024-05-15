
import { Outlet } from "react-router-dom";
import AdminNavbar from "../../../Componants/Admin/AdminNavbar";
import AdminSidebar from "../../../Componants/Admin/AdminSidebar";

export default function MyAdmin() {
  return (
    <div>
      <AdminNavbar/>
      <div className="flex">
        <AdminSidebar/>
      <div className="bg-gray-100 min-h-[90vh] w-full p-10">
        <Outlet />
      </div>
      </div>
    </div>
  );
}
