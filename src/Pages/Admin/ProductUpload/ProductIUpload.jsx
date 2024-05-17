
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextInputField from "../../../Componants/Shared/TextInputField";
import { Button, Textarea } from '@material-tailwind/react';
import toast from 'react-hot-toast';

const schema = yup.object().shape({
  title: yup.string().required('Product Title is required'),
  description: yup.string().required('Product Description is required'),
  price: yup.number().required('Product Price is required').min(0, 'Price must be at least 0'),
  quantity: yup.number().required('Quantity is required').min(0, 'Quantity must be at least 0'),
  select: yup.string().required('Please select a category'),
  image: yup.string().url('Invalid URL').required('Product Image is required'),
});

export default function ProductUpload() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await fetch('https://swiftshop-server.vercel.app/product', {
        method: 'POST',
        
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      if (response.ok) {
        toast.success('Product added successfully!');
        reset();
      } else {
        toast.error('Failed to add product. Please try again.');
        reset();
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-white rounded-lg w-6/12">
      <form className="p-4 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextInputField
            register={register}
            errors={errors}
            name="title"
            label="Product Title"
            type="text"
            size="lg"
          />
        </div>
        <div>
          <Textarea
            label="Product Description"
            {...register('description')}
          />
          {errors.description && <p className="text-red-500">{errors.description.message}</p>}
        </div>
        <div className="flex gap-6">
          <div className="w-full">
            <TextInputField
              register={register}
              errors={errors}
              name="price"
              label="Product Price"
              type="number"
              size="lg"
              min="0"
            />
          </div>
          <div className="w-full">
            <TextInputField
              register={register}
              errors={errors}
              name="quantity"
              label="Quantity"
              type="number"
              size="lg"
              min="0"
            />
          </div>
        </div>
        <div>
            <div className="w-full">
              <select
                {...register("category")}
                className="px-3 py-2 rounded-md border border-gray-400 w-full"
              >
                <option value="Grocery & Grains">Grocery & Grains</option>
                <option value="Grocery As Gift">Grocery As Gift</option>
                <option value="Honey, Nuts & Seeds">Honey, Nuts & Seeds</option>
                <option value="Oil & Extracts">Oil & Extracts</option>
                <option value="Tea Lovers">Tea Lovers</option>
              </select>
              {errors.category && (
                <small className="text-red-500">
                  {errors.category?.message}
                </small>
              )}
            </div>
          </div>
        <div>
          <TextInputField
            register={register}
            errors={errors}
            name="image"
            label="Product Image"
            type="url"
            size="lg"
          />
        </div>
        <div>
          <Button type="submit">Add Product</Button>
        </div>
      </form>
    </div>
  );
}
