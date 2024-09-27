"use client";
import api from "@/api";
import CommonLayout from "@/layouts";
import SingleProductLayout from "@/layouts/categories-layout/product-slug-layout";
import { IProduct } from "@/utils/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const path = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);
  const id = Number(path.product);
  useEffect(() => {
    const get_product = async () => {
      try {
        const { data } = await api.get(`/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    get_product();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <CommonLayout>
      <SingleProductLayout product={product} />
    </CommonLayout>
  );
};

export default ProductPage;
