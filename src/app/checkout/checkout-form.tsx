import Input from "@/ui/form/input";
import React from "react";

const CheckoutForm = () => {
  return (
    <form className="mt-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input label="Email" type="email" />
        <div className="col-span-1 flex justify-end items-center">
          <a href="#" className="text-sm text-gray-500">
            Have an account?
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input label="First Name" />
        <Input label="Last Name" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="col-span-1">
          <label className="block text-sm font-medium">Country</label>
          <select className="w-full border p-2 mt-1" required>
            <option value="USA">USA</option>
          </select>
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium">State</label>
          <select className="w-full border p-2 mt-1" required>
            <option value="state">Select State</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <Input label="Address Line 1" />
        <div>
          <label className="block text-sm font-medium">
            Address Line 2 (optional)
          </label>
          <input type="text" className="w-full border p-2 mt-1" />
        </div>
        <Input label="Zip Code" />
        <Input label="Town/City" />
        <div>
          <label className="block text-sm font-medium">Phone Number</label>
          <div className="flex">
            <select className="border p-2" required>
              <option>USA +1</option>
            </select>
            <input type="text" className="border p-2 flex-grow" required />
          </div>
        </div>
      </div>

      <div className="flex items-center mt-4">
        <input type="checkbox" id="save-info" className="mr-2" required />
        <label htmlFor="save-info" className="text-sm">
          Save this information for next time
        </label>
      </div>

      <button className="w-full bg-black text-white py-3 mt-6">Continue</button>
    </form>
  );
};

export default CheckoutForm;
