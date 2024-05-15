import { Button } from "@material-tailwind/react";
import { signOut } from "firebase/auth";
import { IoIosLogOut } from "react-icons/io";
import auth from "../firebase.init";
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <div className="w-[250px] flex flex-col justify-between px-8 py-8 bg-[#0e0c2f] text-white">
        <div>
            <div className="flex flex-col gap-8">
                <Link to="/dashboard/admin/all-orders" className="text-xl"><p>All Orders</p></Link>
                <Link to="/dashboard/admin/inventory" className="text-xl"><p>Inventory</p></Link>
                <Link to="/dashboard/admin/all-users" className="text-xl"><p>Users</p></Link>
                <Link to="/dashboard/admin/profile"className="text-xl"><p>Profile</p></Link>
            </div>
        </div>
        <div>
            <Button  color="white" fullWidth onClick={()=> signOut(auth)}> 
           
            <span className="flex gap-3 justify-center items-center" >
               Logout   <IoIosLogOut className="text-lg text-[#0e0c2f]"/>
            </span>
            </Button>
        </div>
    </div>
  )
}

