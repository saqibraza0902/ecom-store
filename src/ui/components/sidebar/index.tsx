import React from "react";
import { RxCross1 } from "react-icons/rx";
import { useSidebar } from "@/providers/sidebar-provider";

interface Props {
  id: string;
  width?: string;
  position?: "left" | "right";
  children?: React.ReactNode;
}

const ToggleSidebar = ({
  id,
  width = "50%",
  position = "left",
  children,
}: Props) => {
  const { openSidebarId, closeSidebar } = useSidebar();

  // Determine if this sidebar is open based on its ID
  const isOpen = openSidebarId === id;

  const translateClass =
    position === "left"
      ? `${isOpen ? "translate-x-0" : "-translate-x-full"}`
      : `${isOpen ? "translate-x-0" : "translate-x-full"}`;

  const sidebarPositionClass = position === "left" ? "left-0" : "right-0";

  return (
    <div
      className={`fixed inset-y-0 z-50 transition-transform duration-300 transform ${translateClass} ${sidebarPositionClass}`}
      style={{ width }}
    >
      <div className="min-h-screen w-full px-5 h-full py-5 bg-secondary">
        <div
          className={`flex items-center justify-between ${
            position === "right" && "flex-row-reverse"
          }`}
        >
          <p>Mango</p>
          <div
            className="cursor-pointer text-black dark:text-white"
            onClick={closeSidebar}
          >
            <RxCross1 />
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ToggleSidebar;
