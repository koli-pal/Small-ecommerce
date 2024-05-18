import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

// eslint-disable-next-line react/prop-types
export default function AllProducts({ page }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://swiftshop-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));

    setLoading(false);
  }, []);

  const renderProduct =
    page === "home"
      ? [...products]
          .reverse()
          .slice(0, 8)
          .map((item) => <ProductCard key={item._id} data={item} />)
      : [...products]
          .reverse()
          .map((item) => <ProductCard key={item._id} data={item} />);

  if (loading) {
    return "Loading...";
  }

  return (
    <div>
      <div className="grid grid-cols-4 gap-6">{renderProduct}</div>
    </div>
  );
}