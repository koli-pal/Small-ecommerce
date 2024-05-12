import { signOut } from "firebase/auth";
import auth from "../../../Componants/firebase.init";


export default function Order() {
  return (
   <div>
    Orders

    <button onClick={()=>signOut(auth)}>Logout</button>
    </div>
  );
}
