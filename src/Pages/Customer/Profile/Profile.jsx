import { signOut } from "firebase/auth";
import auth from "../../../Componants/firebase.init";

export default function Profile() {
  return (
    <div>Profile
      <br />

    <button onClick={()=>signOut(auth)}>Logout</button>
    </div>
  )
}
