import { CiDeliveryTruck } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
export default function Blob() {
    return (
        <div className="grid grid-cols-3 gap-6">
            <div className="p-12 border shadow-sm mt-14 text-center rounded-lg">
                <div>
                    <CiDeliveryTruck className="mx-auto text-5xl" />
                    </div>
                <p className="text-lg font-semibold my-2">Fast Delivery</p>
                <p>Within 2-3hrs after ordering</p>
            </div>
            <div className="p-12 border shadow-sm mt-14 text-center rounded-lg">
                <div>
                    < CiClock2 className="mx-auto text-5xl" />
                    </div>
                <p className="text-lg font-semibold my-2">Opening Hours</p>
                <p>Mon-Fri:9.00AM to 9.00PM</p>
            </div>
            <div className="p-12 border shadow-sm mt-14 text-center rounded-lg">
                <div>
                    <TfiHeadphoneAlt className="mx-auto text-5xl" />
                    </div>
                <p className="text-lg font-semibold my-2">Support</p>
                <p>24/7 Support from online</p>
            </div>
            

               
            </div>
    );
    
}