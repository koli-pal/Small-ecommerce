
import { Button, Card, Typography } from "@material-tailwind/react";
import { useEffect } from "react";
import { signOut } from "firebase/auth";

import { useState } from "react";
import toast from "react-hot-toast";

import auth from "../../../Componants/firebase.init";

const TABLE_HEAD = ["Email", "Role"];

export default function AllUsers() {
  const [users, setUsers] = useState([]);
  const [UserRole, setUserRole] = useState("");

  useEffect(() => {
    fetch("https://swiftshop-server.vercel.app/all-users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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
      .then((data) => setUsers(data));
  }, []);

  const handleUpdateRole = (id) => {
    console.log({ role: UserRole, id });
    const isProceed = window.confirm("Are you sure?");
    if (isProceed) {
      const promise = fetch(
        `https://swiftshop-server.vercel.app/user/admin/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify({ role: UserRole }),
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data));
      toast.promise(promise, {
        loading: "updating...",
        success: "Role updated successfully",
        error: "Failed to update role",
      });
    }
  };
  return (
    <div>
      <Card className="h-full w-8/12 overflow-scroll">
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
            {[...users].reverse().map((user) => (
              <tr key={user._id}>
                <td className="p-2">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user.email}
                  </Typography>
                </td>
                <td>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal capitalize"
                  >
                    {console.log(user?.role)}
                    {/*user.Role ? user.Role : "customer"*/}
                    <div className="space-x-1 px-1.5">
                      <select
                        className="border p-2 rounded-md"
                        defaultValue={user.role ==='admin' ? 'admin' : "customer"}
                        onChange={(e) => setUserRole(e.target.value)}
                      >
                        <option value="customer">Customer</option>
                        <option value="admin">Admin</option>
                      </select>
                      <Button
                        onClick={()=>handleUpdateRole(user._id)}
                        size="sm"
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
