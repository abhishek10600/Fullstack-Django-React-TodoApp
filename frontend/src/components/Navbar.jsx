import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const toggleMenu = () => {
    setShowNavMenu(!showNavMenu);
  };
  return (
    <div className="text-white flex items-center justify-between h-24 px-4 md:mx-auto md:max-w-[1240px]">
      <h1 className="text-3xl w-full font-bold">Todofy</h1>
      <ul className="md:flex md:gap-20 md:text-xl hidden">
        <li className="">Login</li>
        <li>Signup</li>
        <li>Logout</li>
      </ul>
      {/* Condition to show the menu and close button in mobile devices */}
      <div onClick={toggleMenu} className="block md:hidden">
        {showNavMenu ? (
          <AiOutlineClose size={30} />
        ) : (
          <AiOutlineMenu size={30} />
        )}
      </div>
      {/* Navigation for mobile devices */}
      <div
        className={
          showNavMenu
            ? "md:hidden fixed left-0 top-20 px-4 border-r border-gray-500 min-w-[50%] h-full ease-in-out duration-300"
            : "md:hidden fixed -left-[100%]"
        }
      >
        <ul className="flex flex-col gap-10 text-xl">
          <li className="border-b border-gray-500 py-2">Login</li>
          <li className="border-b border-gray-500 py-2">Signup</li>
          <li className="border-b border-gray-500 py-2">Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
