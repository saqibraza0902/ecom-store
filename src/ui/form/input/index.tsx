import React from "react";
interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
}
const Input = ({ className, label, ...rest }: IInput) => {
  return (
    <div className={`col-span-1 ${className}`}>
      {label && <label className="block text-sm font-medium">{label}</label>}
      <input {...rest} className="w-full border p-2 mt-1" required />
    </div>
  );
};

export default Input;
