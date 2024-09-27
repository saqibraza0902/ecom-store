import { Menu, MenuButton, MenuItems } from "@headlessui/react";

interface IProp {
  buttonLabel: string;
  children: React.ReactNode;
}

const Dropdown = ({ buttonLabel, children }: IProp) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="">{buttonLabel}</MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1 text-black">{children}</div>
      </MenuItems>
    </Menu>
  );
};

export default Dropdown;
