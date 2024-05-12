import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

// eslint-disable-next-line react/prop-types
export default function RequireAuth({ children }) {
    // eslint-disable-next-line no-unused-vars
    const [user, loading] = useAuthState(auth);
    
    const location = useLocation()

    if(loading){
        return "Loading...";
    }

    if(!user){
        return <Navigate to="/login" state={{from:location}} replace/>;
    }
    
    

  return children;

}
