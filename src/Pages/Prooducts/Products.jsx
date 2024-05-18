import AllProducts from "../../Componants/AllProducts/AllProducts";


export default function Products() {
  return (
    <div>

  <div className="border bg-blue-100 px-20 py-32 rounded-xl">
  <h1 className="text-4xl front-bold">Our products</h1>
  </div>
  <div className="py-8">
    <AllProducts page="all-products" />
  </div>
 </div>

  )
}
