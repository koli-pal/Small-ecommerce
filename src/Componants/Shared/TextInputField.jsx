/* eslint-disable react/prop-types */
import { Input } from "@material-tailwind/react";

export default function TextInputField({
  label,
  type,
  size,
  register,
  errors,
  name,
  disabled,
}) {
  return (
    <div>
      <Input label={label} type={type} size={size} {...register(name)} disabled={disabled}/>
      <small className="text-red-500">
        {errors[name] && errors[name].message}
      </small>
    </div>
  );
}
