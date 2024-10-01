import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import Image from "next/image";
import React from "react";
import OrderSummary from "./order-summery";
import CartDetails from "./cart-details";
import useComponents from "saqib-test-lib";
import { addItem, decrementItem, removeItem } from "@/redux/slices/cart-slices";
import Link from "next/link";
import { URLS } from "@/utils/urls";

const CartLayout = () => {
  const { items } = useAppSelector((s) => s.cart);
  const { CartProduct, CartSummery } = useComponents();
  const dispatch = useAppDispatch();
  return (
    <div className="min-h-screen flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full max-w-7xl px-10">
        {/* Cart Details */}
        <div className="lg:col-span-7">
          <p className="py-4 border-b-[1px] border-tertiory text-xl uppercase">
            Cart ({items.length})
          </p>
          {items.map((item) => (
            <CartProduct
              decreaseItem={() => dispatch(decrementItem(item))}
              increaseItem={() => dispatch(addItem(item))}
              removeItem={() => dispatch(removeItem(item))}
              key={item.id}
              item={item}
            />
          ))}
        </div>

        {/* Order Summary with sticky behavior */}
        <div className="lg:col-span-5 lg:pl-8 mt-4 pt-4 lg:pt-0">
          <div className="sticky top-6">
            <CartSummery
              LinkComponent={Link}
              href={URLS.CHECKOUT}
              items={items}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartLayout;
