import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../Componants/ProductCard/ProductCard";

export default function Category() {
  const { category } = useParams();
  const [products, setProducts]  = useState([])
  console.log({ category });

  let categoryTitle;

  if (category === "grocery-and-grains") {
    categoryTitle = "Grocery & Grains";
  } else if (category === "grocery-as-gifts") {
    categoryTitle = "Grocery as Gifts";
  } else if (category === "honey-nuts-and-seeds") {
    categoryTitle = "Honey, Nuts & Seeds";
  } else if (category === "oil-and-extracts") {
    categoryTitle = "Oil & Extracts";
  } else {
    categoryTitle = "Tea Lovers";
  }

//   fetch data from api
useEffect(()=>{
    fetch("https://swiftshop-server.vercel.app/products")
    .then(res => res.json())
    .then(data => setProducts(data))
},[categoryTitle])

// filter product to get specific category products 
const filteredProducts = products.filter((product)=> product.category === categoryTitle)

let productRender;

if(filteredProducts.length === 0){
    productRender = <div className="mt-8">
        <h3 className="text-3xl font-bold">No product found</h3>
    </div>
}else{
    productRender = filteredProducts.map((item)=> <ProductCard key={item._id} data={item}></ProductCard> )
}
console.log({products})

  return (
    <div>
      <div className="bg-green-100 round-lg px-20 py-24">
        <h2 className="text-3xl font-bold">{categoryTitle}</h2>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
            productRender
        }
      </div>
    </div>
  );
}
