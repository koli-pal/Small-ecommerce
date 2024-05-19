import { Button, Card, Typography } from "@material-tailwind/react";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import auth from "../../../Componants/firebase.init";
import toast from "react-hot-toast";

const TABLE_HEAD = [
  "Image",
  "Title",
  "Category",
  "Price",
  "Quantity",
  "Total",
  "Order Time",
  "Status",
];

function timeConverter(dateTimeStr) {
  let date = new Date(dateTimeStr);

  let day = String(date.getDate()).padStart(2, "0");
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let year = date.getFullYear();

  let hours = date.getHours();
  //let minutes = String(date.getMinutes()).padStart(2, "0");

  let period = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12;
  let decimalMinutes = (date.getMinutes() / 60).toFixed(2).substring(2);

  let formattedTime = `${hours}.${decimalMinutes}${period}, ${day}/${month}/${year}`;

  return formattedTime;
}

export default function AllOrders() {
  const [orders, setOrders] = useState([]);
  const [selectValue, setSelectValue] = useState("");

  useEffect(() => {
    fetch(`https://swiftshop-server.vercel.app/allOrders`, {
      method: "GET",
      headers: {
        "Content-Type": "applucation/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
        }
        return res.json();
      })
      .then((data) => setOrders(data));
  }, []);

  //const onSubmit = (data) => {
  //const isProceed = window.confirm("Are you confirm?");
  //if(isProceed){
  // fetch('/order-status/${}')
  //}
  //};

  const handleStatusChange = (id) => {
    console.log(id);
    console.log(selectValue);
    const isProceed = window.confirm("Are you confirm?");
    if (isProceed && selectValue) {
      const promise = fetch(
        `https://swiftshop-server.vercel.app/order-status/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          data: JSON.stringify({ status: selectValue }),
        }
      )
        .then((res) => res.json())
        .then((data) => data);
      toast.promise(promise, {
        loading: "Updating...",
        success: "Status updated",
        error: "Update failed",
      });
    } else {
      toast.error("Please select status");
    }
  };

  return (
    <div>
      <Card className="h-full w-full overflow-scroll">
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
            {[...orders].reverse().map((item) => (
              <tr key={item._id}>
                <td className="p-2">
                  <Typography
                    as="div"
                    variant="small"
                    color="b;ue-gray"
                    className="font=medium"
                  >
                    <img
                      className="w-14 rounded-md"
                      src={item.productImage}
                      alt={item.productTitle}
                    />
                  </Typography>
                </td>
                <td className="p-2">
                  <Typography
                    as="div"
                    variant="small"
                    color="b;ue-gray"
                    className="font=medium"
                  >
                    {item.productTitle.split(0, 40)}...
                  </Typography>
                </td>
                <td className="p-2">
                  <Typography
                    as="div"
                    variant="small"
                    color="b;ue-gray"
                    className="font=medium"
                  >
                    {item.productCategory}
                  </Typography>
                </td>
                <td className="p-2">
                  <Typography
                    as="div"
                    variant="small"
                    color="b;ue-gray"
                    className="font=medium"
                  >
                    ৳{item.productPrice}
                  </Typography>
                </td>
                <td className="p-2">
                  <Typography
                    as="div"
                    variant="small"
                    color="b;ue-gray"
                    className="font=medium"
                  >
                    {item.productQuantity}
                  </Typography>
                </td>
                <td className="p-2">
                  <Typography
                    as="div"
                    variant="small"
                    color="b;ue-gray"
                    className="font=medium"
                  >
                    ৳{item.productTotal}
                  </Typography>
                </td>
                <td className="p-2">
                  <Typography
                    as="div"
                    variant="small"
                    color="b;ue-gray"
                    className="font=medium"
                  >
                    {timeConverter(item.createdAt)}
                  </Typography>
                </td>
                <td className="p-2">
                  <Typography
                    as="div"
                    variant="small"
                    color="b;ue-gray"
                    className="font=medium"
                  >
                    <div className="flex items-center gap-2">
                      <select
                        name=""
                        id=""
                        className="border p-1.5 rounded-md"
                        onChange={(e) => setSelectValue(e.target.value)}
                      >
                        <option
                          value="pending"
                          selected={item.status === "pending"}
                        >
                          Pending
                        </option>
                        <option
                          value="processing"
                          selected={item.status === "processing"}
                        >
                          Processing
                        </option>
                        <option
                          value="accepted"
                          selected={item.status === "accepted"}
                        >
                          Accepted
                        </option>
                        <option
                          value="cancel"
                          selected={item.status === "cancel"}
                        >
                          Cancel
                        </option>
                        <option
                          value="on-the-way"
                          selected={item.status === "on-the-way"}
                        >
                          On the way
                        </option>
                        <option
                          value="return"
                          selected={item.status === "return"}
                        >
                          Return
                        </option>
                        <option
                          value="complete"
                          selected={item.status === "complete"}
                        >
                          Complete
                        </option>
                      </select>
                      <Button
                        size="sm"
                        //disabled={selectValue === "" ? true : false}
                        onClick={() => handleStatusChange(item._id)}
                        type="submit"
                      >
                        Save
                      </Button>
                    </div>
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
