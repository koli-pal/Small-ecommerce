import { Button } from "@material-tailwind/react";
import { signOut } from "firebase/auth";
import { IoIosLogOut } from "react-icons/io";
import auth from './../firebase.init';
import { Link } from "react-router-dom";

export default function CustomerSidebar() {

    return (
    <div className="w-[250px] flex flex-col justify-between p-8 bg-[#321f6f] text-white">
        <div>
            <div className="flex flex-col gap-8">
            <Link to="/dashboard/Orders" className="text-xl">
                Orders
                </Link>
            <Link to="/dashboard/profile" className="text-xl" >
                Profile
                </Link>
            </div>
        </div>
        <div>
        <Button 
        color="white"
        className="" 
        fullWidth
        onClick={() => signOut(auth)}>
          
            <span className="flex gap-3 justify-center items-center">
            Logout <IoIosLogOut className="text-lg text-[#321f6f]" />
            </span>
        </Button>
        </div>
    </div>
    );
}
