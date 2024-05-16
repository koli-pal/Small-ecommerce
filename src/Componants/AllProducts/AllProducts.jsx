import { useEffect, useState } from "react"
import ProductCard from "../ProductCard/ProductCard";

export default function AllProducts() {
    const[products, setProducts]=useState([]);
    useEffect(() => {
      fetch("https://swiftshop-server.vercel.app/products")
      .then((res)=> res.json())
      .then((data)=> setProducts(data));
    },[]);

  return (
   <div>
     <div  className="grid grid-cols-4 gap-6">
      {[...products]
      .reverse()
      .slice(0,8)
      .map((item)=>(
          <ProductCard key={item._id} data={item}/>
        ))
      }
    </div>
   </div>
  );
}
