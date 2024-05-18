/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useParams } from "react-router-dom"
import TextInputField from "../../Componants/Shared/TextInputField"
import { Button } from "@material-tailwind/react"
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../../Componants/firebase.init"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import toast from "react-hot-toast"
import { data } from "autoprefixer"

const schema = yup.object().shape({
  email: yup.string().required("Email is required"),
  quantity: yup
    .number()
    .typeError("Quantity is required")
    .required("Quantity is required"),
  address: yup.string().required("Address is required"),
});


export default function SingleProduct() {
  const params = useParams()
  const [product, setProduct] = useState([])
  const [user] = useAuthState(auth)

  const {
    register,
    handleSubmit,
    // watch,
    setValue,
    // reset,
    resetField,
    formState: { errors },
  } = useForm({resolver: yupResolver(schema),
    defaultValues:{
      quantity: 1
    }
  })

  useEffect(() =>{
    fetch(`https://swiftshop-server.vercel.app/product/${params.id}`)
    .then((res) => res.json())
    .then(data => setProduct(data))
  }, [])

  useEffect(() =>{
    setValue("email", user.email)
  }, [user])

  

  const onSubmit = (data) => {
    let payload = {
      email: data.email,
      quantity: data.quantity,
      address: data.address,
      productId: product._id,
      productImage: product.image,
      productTitle: product.title,
      productPrice: product.price,
      productCategory: product.category,
      productTotal: product.price * data.quantity,
      status: "pending",
    };
    if(data.quantity > product.quantity){
      toast.error("Quantity is not available")
    }
    else{
      const isProceed = window.confirm("Are you sure to proceed?")
      if(isProceed){
        console.log({ data })

        fetch("https://swiftshop-server.vercel.app/order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(payload),
        }).then((res) => res.json())
          .then((data) => {
            if(data.acknowledged){
              toast.success("Successfully ordered")
            }
          }).catch(error => toast.error("Something went wrong"))

          const afterOrderQuantity = product.quantity - data.quantity
          console.log(afterOrderQuantity)
            let newQuantityPayload = {
              quantity: afterOrderQuantity
            }
          fetch(`https://swiftshop-server.vercel.app/order-quantity/${product._id}`,{
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(newQuantityPayload),
          })
          .then((res) => res.json())
          .then((data) => { 
          if(data.modifiedCount){
            setProduct({...product, quantity: afterOrderQuantity})
            
            resetField('quantity')
            resetField('address')
          }
      })
    }
  }
}

  

  console.log(product);

  return (
    <div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <img className = "object-cover w-9/12 h-[450px]" src={product.image} alt="" />
        </div>
        <div className="bg-white shadow-md rounded-lg p-5 text-pretty box-border">
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-4xl font-bold">Price: ৳ {product.price}</p>
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-gray-600 mt-8">{product.description}</p>
            <p className="text-gray-600 mt-2"><span className="font-semibold text-gray-800">Category:</span> {product.category}</p>

            <div className="mt-6 space-y-4">
              <div>
                <TextInputField register={register}
                errors={errors}
                name="email"
                label="Your email"
                type="email"
                size="lg" 
                disabled
                />
              </div>
              <div>
                <TextInputField register={register}
                errors={errors}
                name="quantity"
                label="Enter Quantity"
                type="number"
                size="lg"
                min = {0}
                />
              </div>
              <div>
                <TextInputField register={register}
                errors={errors}
                name="address"
                label="Enter Address"
                type="text"
                size="lg" />
              </div>
              <div>
                <Button type='submit'>Make Order</Button>
              </div>
            </div>
            

          </form>
        </div>
      </div>
    </div>
  )
}
