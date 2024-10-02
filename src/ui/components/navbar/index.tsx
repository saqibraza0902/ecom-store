"use client";
import { NAV_CATEGORIES } from "@/mock";
import { URLS } from "@/utils/urls";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3CenterLeft } from "react-icons/hi2";
import ToggleSidebar from "../sidebar";
import { useSidebar } from "@/providers/sidebar-provider";
import { useAppSelector } from "@/hooks/redux-hooks";
import useComponents from "saqib-test-lib";
interface ICategories {
  name: string;
  slug: string;
  url: string;
}

const ArrayB = [
  {
    title: "Categories",
    array: [
      {
        title: "All",
        path: "/beauty",
      },
      {
        title: "Fragrances",
        path: "/beauty",
      },
      {
        title: "Perfumes",
        path: "/beauty",
      },
    ],
  },
  {
    title: "Logo",
    array: [
      {
        title: "Sort & Filter",
        path: "/",
      },
    ],
  },
];
const Navbar = () => {
  const { openSidebar, closeSidebar, openSidebarId } = useSidebar();
  const { Sidebar, Navbar } = useComponents();
  const { items } = useAppSelector((s) => s.cart);
  const Array = [
    {
      title: "Categories",
      array: [
        {
          title: "Beauty",
          path: "/categories/beauty",
          isLink: true,
        },
        {
          title: "Fragrances",
          path: "/categories/fragrances",
          isLink: true,
        },
        {
          title: "Furniture",
          path: "/categories/beauty",
          isLink: true,
        },
      ],
    },
    {
      title: "Logo",
      array: [
        {
          title: "Mango",
          path: "/",
          isLink: true,
        },
      ],
    },
    {
      title: "Other Links",
      array: [
        {
          title: "Search",
          isLink: false,
          handleClick: () => console.log("object"),
        },
        {
          title: `Cart(${items.length})`,
          path: "/cart",
          isLink: true,
        },
      ],
    },
  ];
  return (
    <>
      <div className="hidden md:block">
        <Navbar Link={Link} list={Array} />
      </div>

      <div className="px-10 py-6 md:hidden">
        <HiBars3CenterLeft size={30} onClick={() => openSidebar("sidebar1")} />
      </div>

      <div className="md:hidden">
        <Sidebar
          bgcolor="#aaa000"
          // @ts-ignore
          openSidebarId={openSidebarId}
          id="sidebar1"
          width="100%"
          position="left"
        >
          <div className="flex items-center justify-between flex-row-reverse">
            <div className="cursor-pointer text-black" onClick={closeSidebar}>
              Close
            </div>
            <p>Mango</p>
          </div>
          <div className="flex flex-col mt-10 gap-5 font-Raleway font-medium">
            {NAV_CATEGORIES.map((el, i) => (
              <Link
                href={`${URLS.CATEGORIES}/${el.slug}`}
                className="bg-tertiory py-2 px-2 cursor-pointer"
                key={i}
              >
                {el.name}
              </Link>
            ))}
          </div>
        </Sidebar>
      </div>
    </>
  );
};

export default Navbar;
