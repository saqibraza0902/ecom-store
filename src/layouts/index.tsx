"use client";
import Navbar from "@/ui/components/navbar";
import React from "react";

interface IProp {
  children: React.ReactNode;
}
const CommonLayout = ({ children }: IProp) => {
  return (
    <div className="bg-primary">
      <Navbar />
      {children}
    </div>
  );
};

export default CommonLayout;
