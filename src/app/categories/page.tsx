"use client";
import api from "@/api";
import CommonLayout from "@/layouts";
import CategoryNav from "@/ui/components/navbar";
import { IProduct } from "@/utils/types";
import React, { useEffect, useState } from "react";

const Category = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    const get_products = async () => {
      try {
        const { data } = await api.get(`/products?limit=200`);
        setProducts(data.products);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    get_products();
  }, []);
  if (!products) {
    return <p>Loading...</p>;
  }
  return (
    <CommonLayout>
      <div>Please Choose the category</div>
    </CommonLayout>
  );
};

export default Category;
