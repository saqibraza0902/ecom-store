"use client";
import CommonLayout from "@/layouts";
import React from "react";
import CheckoutSummery from "./checkout-summery";
import CheckoutForm from "./checkout-form";

const Checkout = () => {
  return (
    <CommonLayout>
      <div className="min-h-screen flex justify-center bg-gray-50 mx-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-7xl ">
          <div className="lg:col-span-7 bg-white p-6 ">
            <p className="text-xl font-bold uppercase pb-4 border-b">
              Delivery Address
            </p>
            <CheckoutForm />
          </div>
          <div className="lg:col-span-5 bg-primary p-6 ">
            <CheckoutSummery />
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default Checkout;
