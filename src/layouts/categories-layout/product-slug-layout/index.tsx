import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { addItem } from "@/redux/slices/cart-slices";
import { IProduct } from "@/utils/types";
import Image from "next/image";
import React from "react";
interface IProp {
  product: IProduct;
}

const SingleProductLayout = ({ product }: IProp) => {
  const { items } = useAppSelector((s) => s.cart);
  const dispatch = useAppDispatch();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-12 md:gap-x-8">
          <div className="md:col-span-5">
            <div className="bg-tertiory overflow-hidden">
              <Image
                width={900}
                height={900}
                src={product.images[0]}
                alt={product.title}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="mt-6 grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <Image
                  height={70}
                  width={70}
                  key={index}
                  src={image}
                  className="w-full cursor-pointer border h-full object-cover rounded-lg"
                  alt={`Product Image ${index + 1}`}
                  //   onClick={() => setMainImage(image)} // Change main image on click
                />
              ))}
            </div>
          </div>

          <div className="md:col-span-7 md:pl-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
              {product.title}
            </h1>
            <p className="text-xl text-gray-900 mt-2">
              ${product.price.toFixed(2)}
            </p>
            {product.discountPercentage > 0 && (
              <p className="text-sm text-red-600">
                {product.discountPercentage}% off
              </p>
            )}
            <div className="mt-4">
              <span className="text-sm text-gray-600">
                Rating: {product.rating} / 5
              </span>
            </div>
            <div className="mt-2">
              <p
                className={`text-sm ${
                  product.stock > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {product.stock > 0
                  ? `${product.stock} in stock`
                  : "Out of stock"}
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-sm text-gray-600">Shipping Information</h3>
              <p className="text-sm text-gray-600 mt-2">
                {product.shippingInformation}
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-sm text-gray-600">Return Policy</h3>
              <p className="text-sm text-gray-600 mt-2">
                {product.returnPolicy}
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-sm text-gray-600">Warranty Information</h3>
              <p className="text-sm text-gray-600 mt-2">
                {product.warrantyInformation}
              </p>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => dispatch(addItem(product))}
              className="w-full mt-6 bg-black text-white py-3 rounded-md text-center"
            >
              Add to Bag
            </button>

            {/* Product Description */}
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Description</h2>
              <p className="text-sm text-gray-600 mt-4">
                {product.description}
              </p>
            </div>

            {/* Product Dimensions */}
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Dimensions</h3>
              <p className="text-sm text-gray-600 mt-2">
                {product.dimensions.width}cm x {product.dimensions.height}cm x{" "}
                {product.dimensions.depth}cm
              </p>
            </div>

            {/* Tags */}
            <div className="mt-6">
              <h3 className="text-sm text-gray-600">Tags</h3>
              <div className="flex space-x-3 mt-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-200 rounded-full text-sm text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900">Reviews</h3>
              {product.reviews.length > 0 ? (
                <div className="mt-4 space-y-4">
                  {product.reviews.map((review, index) => (
                    <div key={index} className="border p-4 rounded-md">
                      <div className="flex justify-between">
                        <h4 className="text-sm font-medium">
                          {review.reviewer}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {review.rating} / 5
                        </p>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-600 mt-4">No reviews yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductLayout;
