"use client";
import { NAV_CATEGORIES } from "@/mock";
import { URLS } from "@/utils/urls";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3CenterLeft } from "react-icons/hi2";
import ToggleSidebar from "../sidebar";
import { useSidebar } from "@/providers/sidebar-provider";
import { useAppSelector } from "@/hooks/redux-hooks";
interface ICategories {
  name: string;
  slug: string;
  url: string;
}

const Navbar = () => {
  const { openSidebar } = useSidebar();
  const { items } = useAppSelector((s) => s.cart);

  return (
    <>
      <div className="flex justify-between bg-primary px-10 py-6 border-b-[#ff00f] border-[1px]">
        <div className="flex md:hidden">
          <HiBars3CenterLeft
            size={30}
            onClick={() => openSidebar("sidebar1")}
          />
        </div>
        <div className="space-x-5 font-Raleway font-medium hidden md:flex">
          {NAV_CATEGORIES.map((el, i) => (
            <Link
              href={`${URLS.CATEGORIES}/${el.slug}`}
              className=" cursor-pointer"
              key={i}
            >
              {el.name}
            </Link>
          ))}
        </div>
        <div>MANGO</div>
        <div className="space-x-5 flex font-Raleway font-medium">
          <span className="cursor-pointer hidden md:flex">Search</span>
          <Link href={URLS.CART} className="cursor-pointer">
            Cart({items.length})
          </Link>
        </div>
      </div>
      <div className="md:hidden">
        <ToggleSidebar id="sidebar1" width="100%" position="left">
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
        </ToggleSidebar>
      </div>
    </>
  );
};

export default Navbar;
