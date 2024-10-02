"use client";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import ToggleSidebar from "../sidebar";
import { useSidebar } from "@/providers/sidebar-provider";
import { CiFilter } from "react-icons/ci";
import Dropdown from "../dropdown";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import useComponents from "saqib-test-lib";

const SubCategoryNav = ({ data }: any) => {
  console.log(data);
  const { openSidebar, openSidebarId, closeSidebar } = useSidebar();
  const { Sidebar, Navbar } = useComponents();
  const searchParams = useSearchParams();
  const param = useParams();
  const router = useRouter(); // Use router for URL manipulation

  // State to manage selected filters and sort
  const [selectedSort, setSelectedSort] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [tempSort, setTempSort] = useState("");
  const [tempPriceRange, setTempPriceRange] = useState([0, 1000]);

  useEffect(() => {
    // Initialize state based on URL search parameters
    const sortParam = searchParams.get("sort");
    const minPriceParam = searchParams.get("minPrice");
    const maxPriceParam = searchParams.get("maxPrice");
    const typeParam = searchParams.get("type");

    if (sortParam) {
      setSelectedSort(sortParam);
      setTempSort(sortParam);
    }
    if (minPriceParam && maxPriceParam) {
      setTempPriceRange([+minPriceParam, +maxPriceParam]);
    }
  }, [searchParams]);

  const handlePriceChange = (value: any) => {
    setTempPriceRange(value);
  };

  const handleSortChange = (event: any) => {
    const { value } = event.target;
    setTempSort(value);
  };

  const updateSearchParams = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    // Set sort and price parameters
    if (tempSort) {
      newSearchParams.set("sort", tempSort);
    } else {
      newSearchParams.delete("sort"); // Remove sort if empty
    }

    // Update price range parameters
    newSearchParams.set("minPrice", tempPriceRange[0].toString());
    newSearchParams.set("maxPrice", tempPriceRange[1].toString());

    return newSearchParams;
  };

  const handleApplyFilters = () => {
    const newSearchParams = updateSearchParams();
    router.push(`/categories/${param.slug}?${newSearchParams.toString()}`); // Update URL without reloading
  };

  const handleResetFilters = () => {
    setTempSort("");
    setTempPriceRange([0, 1000]);
    setSelectedSort("");
    router.push(`/categories/${param.slug}`); // Reset URL to remove filters
  };

  const handleTypeClick = (type: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    // Update type parameter, removing it if already selected
    if (newSearchParams.get("type") === type) {
      newSearchParams.delete("type");
    } else {
      newSearchParams.set("type", type);
    }

    router.push(`/categories/${param.slug}?${newSearchParams.toString()}`); // Update URL without reloading
  };
  const isSm = useMediaQuery({ query: "(min-width: 640px)" });
  const isMd = useMediaQuery({ query: "(max-width: 768px)" });
  const isLg = useMediaQuery({ query: "(max-width: 1024px)" });
  const sidebarWidth = isMd ? "100%" : isLg ? "30%" : "25%";
  const convertedArray = [
    {
      title: "List Title",
      array: [
        {
          title: "All",
          isLink: false,
          handleClick: () => handleTypeClick(""),
        },
        ...data.map((item: string) => ({
          title: item,
          isLink: false,
          handleClick: () => handleTypeClick(item),
        })),
      ],
    },
    {
      title: "Other Item",
      array: [
        {
          title: "Sort & filter",
          isLink: false,
          handleClick: () => openSidebar("sidebar2"),
        },
      ],
    },
  ];
  return (
    <>
      <div className="hidden lg:block">
        <Navbar
          param={searchParams.get("type") || ""}
          Link={Link}
          list={convertedArray}
        />
      </div>
      <div className="px-10 py-4 flex lg:hidden justify-between items-center bg-primary">
        <div className="">
          <Dropdown buttonLabel="Categories">
            <div className="flex flex-col gap-2 px-2">
              <span
                onClick={() => handleTypeClick("")}
                className={`cursor-pointer ${
                  !searchParams.get("type") ? "text-blue-500 font-bold" : ""
                }`}
              >
                All
              </span>
              {data?.map((el: string, i: number) => (
                <div key={i} onClick={() => handleTypeClick(el)}>
                  <span
                    className={`cursor-pointer capitalize ${
                      searchParams.get("type") === el
                        ? "text-blue-500 font-bold"
                        : ""
                    }`}
                  >
                    {el}
                  </span>
                </div>
              ))}
            </div>
          </Dropdown>
        </div>
        <div>
          <span>Sort & Filter</span>
        </div>
      </div>
      <Sidebar
        bgcolor="#aaa000"
        // @ts-ignore
        openSidebarId={openSidebarId}
        id="sidebar2"
        width={sidebarWidth}
        position="right"
      >
        <div className="flex items-center justify-between flex-row-reverse">
          <p>Mango</p>
          <div className="cursor-pointer text-black" onClick={closeSidebar}>
            Close
          </div>
        </div>
        <div>
          <p className="font-Raleway font-medium text-center mt-2 py-2 border-b-[1px] border-black">
            Filter & Sort
          </p>
          <div className="my-4">
            <p className="font-semibold text-gray-700">Sort By</p>
            <div className="flex flex-col space-y-2 mt-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="sort"
                  value="newest"
                  checked={tempSort === "newest"}
                  onChange={handleSortChange}
                  className="mr-2"
                />
                Newest
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="sort"
                  value="recommended"
                  checked={tempSort === "recommended"}
                  onChange={handleSortChange}
                  className="mr-2"
                />
                Recommended
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="sort"
                  value="priceLowToHigh"
                  checked={tempSort === "priceLowToHigh"}
                  onChange={handleSortChange}
                  className="mr-2"
                />
                Price: Low to High
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="sort"
                  value="priceHighToLow"
                  checked={tempSort === "priceHighToLow"}
                  onChange={handleSortChange}
                  className="mr-2"
                />
                Price: High to Low
              </label>
            </div>
          </div>

          {/* Price Range Section */}
          <div className="my-4">
            <p className="font-semibold text-gray-700">Price Range</p>
            <Slider
              range
              min={0}
              max={1000}
              value={tempPriceRange}
              onChange={handlePriceChange}
              trackStyle={[{ backgroundColor: "#4A5568" }]}
              handleStyle={[
                { borderColor: "#4A5568" },
                { borderColor: "#4A5568" },
              ]}
            />
            <div className="flex justify-between text-sm mt-2">
              <span>${tempPriceRange[0]}</span>
              <span>${tempPriceRange[1]}</span>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={handleApplyFilters}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Apply
            </button>
            <button
              onClick={handleResetFilters}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Reset
            </button>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default SubCategoryNav;
