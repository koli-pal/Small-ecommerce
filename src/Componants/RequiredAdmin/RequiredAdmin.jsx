/* eslint-disable react/prop-types */
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import useAdminCheck from "../Hooks/useAdminCheck";
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAdmin({ children }) {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdminCheck(user);

  const location = useLocation();

  if (loading || adminLoading) {
    return "Loading...";
  }

  if (!admin) {
    return <Navigate to="/dashboard/" state={{ from: location }} replace />;
  }

  if (!user) {
    return <Navigate to="/login/" state={{ from: location }} replace />;
  }

  return children;
}
