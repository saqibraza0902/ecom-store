"use client";
import api from "@/api";
import CommonLayout from "@/layouts";
import CategorySlugLayout from "@/layouts/categories-layout/category-slug-layout";
import SubCategoryNav from "@/ui/components/sub-category-nav";
import { IProduct } from "@/utils/types";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SubCategory = () => {
  const path = useParams();
  const searchParams = useSearchParams(); // Use useSearchParams to get the query parameters
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await api.get(`/products/category/${path.slug}`);
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [path.slug]);

  useEffect(() => {
    if (products.length > 0) {
      filterAndSortProducts();
    }
  }, [products, searchParams]); // Re-run the filtering and sorting when products or search params change

  const filterAndSortProducts = () => {
    const type = searchParams.get("type");
    const minPrice = parseFloat(searchParams.get("minPrice") || "0");
    const maxPrice = parseFloat(searchParams.get("maxPrice") || "1000");
    const sort = searchParams.get("sort");

    // Filter products based on type and price range
    let filtered = products.filter((product) => {
      const inPriceRange =
        product.price >= minPrice && product.price <= maxPrice;
      const matchesType = type ? product.tags.includes(type) : true; // Check if the product matches the type
      return inPriceRange && matchesType;
    });

    // Sort products based on the sort parameter
    if (sort) {
      filtered = filtered.sort((a, b) => {
        if (sort === "priceLowToHigh") {
          return a.price - b.price;
        } else if (sort === "priceHighToLow") {
          return b.price - a.price;
        } else if (sort === "newest") {
          // @ts-ignore
          return new Date(b.createdAt) - new Date(a.createdAt); // Assuming you have a createdAt field
        } else if (sort === "recommended") {
          // Implement your own recommendation logic here, if needed
          return 0; // No sorting applied
        } else {
          return 0; // Default case
        }
      });
    }

    setFilteredProducts(filtered);
  };

  const allTags = products.map((product: any) => product.tags).flat();
  const uniqueTags = allTags.filter(
    (tag, index) => allTags.indexOf(tag) === index
  );

  if (!products) {
    return <p>Loading...</p>;
  }

  return (
    <CommonLayout>
      <SubCategoryNav data={uniqueTags} />
      <CategorySlugLayout products={filteredProducts} slug={path.slug} />
    </CommonLayout>
  );
};

export default SubCategory;
