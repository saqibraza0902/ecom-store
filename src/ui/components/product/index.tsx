import { IProduct } from "@/utils/types";
import { URLS } from "@/utils/urls";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface IProp {
  el: IProduct;
  slug: string | string[];
}
const Product = ({ el, slug }: IProp) => {
  return (
    <Link
      href={`${URLS.CATEGORIES}/${slug}/${el.id}`}
      className="font-Raleway flex flex-col gap-5"
    >
      <div className="bg-secondary flex justify-center">
        <Image
          className="h-auto object-contain"
          src={el.thumbnail}
          alt={el.title}
          height={700}
          width={300}
        />
      </div>
      <div>
        <p className="font-medium">{el.title}</p>
        <p>${el.price}</p>
      </div>
    </Link>
  );
};

export default Product;
