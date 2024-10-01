// import Product from "@/ui/components/product";
import { IProduct } from "@/utils/types";
import useCategory from "saqib-test-lib";
import React from "react";
import { URLS } from "@/utils/urls";
import Link from "next/link";
interface IProp {
  slug: string | string[];
  products: IProduct[];
}
const CategorySlugLayout = ({ products, slug }: IProp) => {
  const { Product } = useCategory();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
      {products.map((el) => (
        <Product
          LinkComponent={Link}
          key={el.id}
          styles={{ bgcolor: "#a0a0a0" }}
          element={el}
          href={`${URLS.CATEGORIES}/${slug}/${el.id}`}
        />
      ))}
    </div>
  );
};

export default CategorySlugLayout;
