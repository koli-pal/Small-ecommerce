/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

export default function ProductCard({data}) {
    const {_id, title, price, image} = data;
    const navigate = useNavigate()

    console.log(data);

    const handleNavigate = (id)=>{
      console.log(id)
      navigate(`/products/${id}`)
    }

  return (
    <div className="border rounded-lg">
        <img className="w-full h-[280px] object-cover" src={image} alt="" onClick={()=>handleNavigate(_id)}/>
        <div className="p-2">
            <p className="text-medium font-medium truncate text-ellipsis">{title}</p>
            <p className="text-2xl font-bold">৳{price}</p>
        </div>
    </div>
  )
}
