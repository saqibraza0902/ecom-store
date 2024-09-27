import Product from "@/ui/components/product";
import { IProduct } from "@/utils/types";
import React from "react";
interface IProp {
  slug: string | string[];
  products: IProduct[];
}
const CategorySlugLayout = ({ products, slug }: IProp) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
      {products.map((el) => (
        <Product key={el.id} el={el} slug={slug} />
      ))}
    </div>
  );
};

export default CategorySlugLayout;
