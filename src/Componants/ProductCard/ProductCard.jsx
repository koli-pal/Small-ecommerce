/* eslint-disable react/prop-types */

export default function ProductCard({data}) {
    const {title, price, image} = data;

    console.log(data);

  return (
    <div className="border rounded-lg">
        <img className="w-full h-[280px] object-cover" src={image} alt="" />
        <div className="p-2">
            <p className="text-medium font-medium truncate text-ellipsis">{title}</p>
            <p className="text-2xl font-bold">৳{price}</p>
        </div>
    </div>
  )
}
