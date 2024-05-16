import { Button } from "@material-tailwind/react";
export default function HeroSection() {
  return (
    <div className="hero-section  text-center rounded-xl space-y-8 ">
      <div className="hero-color  px-10 py-[220px] rounded-xl ">
        <h1 className="text-5xl font-bold ">
          Shop fresh groceries online today
        </h1>
        <p className="text-xl font-medium">
          Fresh groceries delevered.Skip the store,fill your fridge with ease.
        </p>
        <Button color="blue">Shop Now</Button>
      </div>
    </div>
  );
}
