import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";
   
  export function LoginCard() {
    const handleLoginForm = (e)=>{
       e.preventDefault()
       console.log(e);
};
    return (
        <div className="w-full h-screen flex justify-center items-center">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Log In
          </Typography>
        </CardHeader>
       <form onSubmit={handleLoginForm} > 
       <CardBody className="flex flex-col gap-4">
          <Input label="Email" type="email" name="email" size="lg" required />
          <Input label="Password" name="password" size="lg" required />
          
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" type="submit" fullWidth>
            Log In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="div"
             
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
               <Link to='/register'>Registration</Link>
      
            </Typography>
          </Typography>
        </CardFooter>
        </form>
      </Card>
      </div>
    );
  }