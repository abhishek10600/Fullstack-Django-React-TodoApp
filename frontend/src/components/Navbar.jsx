import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const toggleMenu = () => {
    setShowNavMenu(!showNavMenu);
  };
  const token = localStorage.getItem("Token");
  const handleLogout = () => {
    localStorage.removeItem("Token");
    toast.success("Logged out sucessfully!");
  };
  return (
    <div className="text-white flex items-center justify-between h-24 px-4 md:mx-auto md:max-w-[1240px]">
      <Link className="text-3xl w-full font-bold" to="/">
        Todofy
      </Link>
      <ul className="md:flex md:gap-20 md:text-xl hidden">
        {token ? (
          <button onClick={handleLogout}>
            <Link>Logout</Link>
          </button>
        ) : (
          <div className="md:flex md:gap-20 md:text-xl hidden">
            <Link className="" to="/login">
              Login
            </Link>
            <Link className="" to="/register">
              Register
            </Link>
          </div>
        )}
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
            ? "md:hidden fixed left-0 top-20 px-4 border-r border-gray-500 min-w-[50%] h-full ease-in-out duration-700 bg-[#000300]"
            : "md:hidden fixed -left-[100%]"
        }
      >
        <ul className="flex flex-col gap-10 text-xl">
          <Link className="border-b border-gray-500 py-2" to="/">
            Home
          </Link>
          {token ? (
            // <Link className="border-b border-gray-500 py-2">Logout</Link>
            <button
              onClick={handleLogout}
              className="border-b border-gray-500 py-2 flex"
            >
              Logout
            </button>
          ) : (
            <div className="flex flex-col gap-10 text-xl">
              <Link className="border-b border-gray-500 py-2" to="/login">
                Login
              </Link>
              <Link className="border-b border-gray-500 py-2" to="/register">
                Register
              </Link>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
