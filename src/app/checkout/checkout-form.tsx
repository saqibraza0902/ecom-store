import React from "react";
import useComponents from "saqib-test-lib";
const CheckoutForm = () => {
  const { Input, Countries, PhoneInput, Checkbox, Button } = useComponents();
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
        <Countries label="Countries" />
        <Input label="State " />
      </div>

      <div className="grid grid-cols-1 gap-4">
        <Input label="Address Line 1" />
        <Input label=" Address Line 2 (optional)" />
        <Input label="Zip Code" />
        <Input label="Town/City" />
        <PhoneInput label="Phone Number" />
      </div>
      <Checkbox id="check" label="Save this information for next time" />

      <Button className="bg-black">Continue</Button>
    </form>
  );
};

export default CheckoutForm;
