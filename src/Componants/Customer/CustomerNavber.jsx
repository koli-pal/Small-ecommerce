import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { CiUser } from "react-icons/ci";

export default function CustomerNavbar() {
    const [user] = useAuthState(auth);
  return (
    <div className='border-b'>
        <div className='flex justify-between px-10 py-6'>
            <div>
                <p>Small E-Commerce</p>
            </div>
            <div className='flex gap-4 items-center'>
              <div>
                <CiUser className='text-2xl'/>
              </div>
              <div>
                <p>{user && user.displayName}</p>
                <p>{user && user.email}</p>
              </div>
            </div>
        </div>
    </div>
  )
}