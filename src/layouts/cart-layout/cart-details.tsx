import { useAppDispatch } from "@/hooks/redux-hooks";
import { addItem, decrementItem, removeItem } from "@/redux/slices/cart-slices";
import { ICart } from "@/utils/types";
import Image from "next/image";
import React from "react";

interface IProp {
  item: ICart;
}
const CartDetails = ({ item }: IProp) => {
  const dispatch = useAppDispatch();
  return (
    <div className="border-b py-6 h-52 flex items-start justify-between">
      <div className="w-1/4 h-full">
        <Image
          src={item.thumbnail}
          alt={item.title}
          width={150}
          height={150}
          className="rounded-lg h-full bg-secondary  object-cover"
        />
      </div>

      <div className="w-3/4 flex flex-col items-stretch h-full justify-between ml-4">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <button
            onClick={() => dispatch(removeItem(item))}
            className="text-sm text-gray-500 hover:underline"
          >
            Remove
          </button>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-3">
            <span>Quantity</span>
            <button
              className="border px-2 py-1"
              onClick={() => dispatch(decrementItem(item))}
            >
              –
            </button>
            <span className="border px-4 py-1">{item.quantity}</span>
            <button
              className="border px-2 py-1"
              onClick={() => dispatch(addItem(item))}
            >
              +
            </button>
          </div>
          <div className="text-lg font-semibold">
            US$ {(item.price * item.quantity).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
