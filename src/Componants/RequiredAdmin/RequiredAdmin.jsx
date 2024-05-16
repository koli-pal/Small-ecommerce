import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import useAdminCheck from "../Hooks/useAdminCheck";

export default function RequiredAdmin({ children }) {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdminCheck(user);

  console.log({ user });

  const location = useLocation();

  if (loading || adminLoading) {
    return "Loading...";
  }

  if (!admin && !user) {
    <Navigate to="/dashboard/" state={{ from: location }} replace />;
  }

  return children;
}
