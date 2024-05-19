import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
export default function HeroSection() {
  return (
    <div className="hero-section  text-center rounded-xl space-y-8 ">
      <div className="hero-color  px-10 py-[220px] rounded-xl ">
        <h1 className="text-5xl font-bold text-white">
          Shop fresh groceries online today
        </h1>
        <p className="text-xl font-medium text-white py-4">
          Fresh groceries delivered.Skip the store,
          <br /> fill your fridge with ease.
        </p>
        <Link to="/products">
          <Button color="blue">Shop Now</Button>
        </Link>
      </div>
    </div>
  );
}
