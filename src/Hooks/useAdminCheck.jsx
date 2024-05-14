import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import auth from "../firebase.init";

export default function useAdminCheck(user) {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`https://swiftshop-server.vercel.app/admin/${email}`, {
        method: "GET",
        header: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          console.log({ res });
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
          }
          return res.json();
        })
        .then((data) => {
          setAdmin(data.admin);
          setAdminLoading(false);
        });
    }
  }, [user]);

  return [admin, adminLoading];
}
