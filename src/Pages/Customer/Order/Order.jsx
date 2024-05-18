import { Card, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../../../Componants/firebase.init";

 
const TABLE_HEAD = ["Image", "Title", "Price", "Quantity", "Total", "Status"];
 


export default function Orders() {
  const [user] =  useAuthState(auth)
  const [orders, setOrders] = useState([])

  useEffect(()=> {
    fetch(`https://swiftshop-server.vercel.app/orders?email=${user?.email}`,{
      method: "GET",
      headers:{
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      }
    })
    .then((res) => res.json())
    .then((data) => setOrders(data))
  },[])
  return (
    <div>
      {
        orders.length > 0 ? <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {
              [...orders].reverse().map(item =>
                <tr className="border-b p-3" key={item._id}>
                  <td>
                    <img 
                      className="w-12 h-10 object-cover" 
                      src={item.productImage} 
                      alt={item.productTitle} 
                    />
                  </td>
                  <td>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.productTitle}
                    </Typography>
                  </td>
                  <td>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.productPrice}
                    </Typography>
                  </td>
                  <td>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.quantity}
                    </Typography>
                  </td>
                  <td>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      ৳ {item.productTotal}
                    </Typography>
                  </td>
                  <td>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal capitalize"
                    >
                      {item.status}
                    </Typography>
                  </td>
  
                </tr>
              )
            }
          </tbody>
        </table>
      </Card> : <h2>No order found</h2>
      }
    </div>
  )
}