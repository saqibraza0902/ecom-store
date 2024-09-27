"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Create a context to manage the open sidebar
interface SidebarContextType {
  openSidebarId: string | null;
  openSidebar: (id: string) => void;
  closeSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

// Provider component to wrap your app
interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [openSidebarId, setOpenSidebarId] = useState<string | null>(null);

  const openSidebar = (id: string) => {
    setOpenSidebarId(id); // Only one sidebar can be open at a time
  };

  const closeSidebar = () => {
    setOpenSidebarId(null); // Close all sidebars
  };

  return (
    <SidebarContext.Provider
      value={{ openSidebarId, openSidebar, closeSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
