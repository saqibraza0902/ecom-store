import { useAppSelector } from "@/hooks/redux-hooks";
import { URLS } from "@/utils/urls";
import Link from "next/link";
import { FaCcPaypal, FaGooglePay } from "react-icons/fa6";
import { RiMastercardFill, RiVisaLine } from "react-icons/ri";

const OrderSummary = () => {
  const { items } = useAppSelector((s) => s.cart);
  const price = items.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);
  const totalPrice = price.toFixed(2);
  return (
    <div className="bg-secondary_A p-6 w-full flex flex-col max-w-sm mx-auto border rounded-md">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        ORDER SUMMARY
      </h2>
      <div className="flex justify-between text-sm text-gray-700">
        <p>Order value</p>
        <p>$ {totalPrice}</p>
      </div>
      <div className="flex justify-between text-sm text-gray-700 mt-2">
        <p>Delivery</p>
        <p>Free</p>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-700 mt-6 border-t border-b py-4">
        <p>Do you have a promotion code?</p>
        <span className="text-gray-500 text-lg cursor-pointer">→</span>
      </div>
      <div className="flex justify-between text-lg font-semibold text-gray-900 my-4">
        <p>Subtotal</p>
        <p>US$ {totalPrice}</p>
      </div>
      <Link
        href={URLS.CHECKOUT}
        className="w-auto bg-black text-white py-3  text-center"
      >
        PROCEED TO CHECKOUT
      </Link>
      <div className="flex justify-between items-center mt-4">
        <a href="#" className="text-xs text-gray-500 underline">
          Shipping information
        </a>
        <div className="flex items-center text-xs text-gray-500">
          <span className="mr-1">Secure payment</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 1a5 5 0 00-5 5v3H4a1 1 0 000 2v4a3 3 0 003 3h6a3 3 0 003-3v-4a1 1 0 000-2h-1V6a5 5 0 00-5-5zm-1 6a1 1 0 112 0v3a1 1 0 11-2 0V7z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-4">
        Your personal data will be provided to Klarna for order processing and
        payment. For detailed information on how your data is handled and
        protected, please refer to our{" "}
        <a href="#" className="underline">
          Privacy Notice
        </a>
        .
      </p>
      <div className="mt-6 flex justify-center space-x-4">
        <RiVisaLine size={30} />
        <FaGooglePay size={30} />
        <RiMastercardFill size={30} />
        <FaCcPaypal size={30} />
      </div>
    </div>
  );
};

export default OrderSummary;
