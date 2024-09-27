import { useAppSelector } from "@/hooks/redux-hooks";
import Image from "next/image";
import React from "react";

const CheckoutSummery = () => {
  const { items } = useAppSelector((state) => state.cart);
  const totalAmount = items.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);
  return (
    <>
      <p className="text-xl font-bold uppercase pb-4 border-b">Order Summary</p>
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={60}
              height={60}
              className="rounded-md"
            />
            <div>
              <p className="font-medium text-sm">{item.title}</p>
              <p className="text-sm">Quantity: {item.quantity}</p>
            </div>
            <p className="font-semibold text-sm">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <div className="flex justify-between text-sm">
          <p>Delivery</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between text-sm mt-2">
          <p>Subtotal</p>
          <p>${totalAmount.toFixed(2)}</p>
        </div>
        <p className="text-sm underline mt-2 cursor-pointer">
          Shipping Information
        </p>
      </div>
    </>
  );
};

export default CheckoutSummery;
