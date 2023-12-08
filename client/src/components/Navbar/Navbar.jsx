import React, { useContext, useEffect, useState } from "react";
import LOGO from "../../../public/images/SARP-LOGO.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../auth/AuthContext";
import secureLocalStorage from "react-secure-storage";
import ResponsiveNav from "./ResponsiveNav";

// ICONS
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  axios.defaults.withCredentials = true;

  const { currentUser, logout } = useContext(AuthContext);
  useEffect(() => {
    secureLocalStorage.setItem("user", JSON.stringify(currentUser));
    setName(currentUser?.results.username);
  }, [currentUser]);

  axios.defaults.withCredentials = true;

  return (
    <>
      <nav className="bg-white w-full border-b border-gray-200 sticky top-[-10px] z-[999]">
        <div className="xl:w-[1170px] flex items-center justify-between mx-auto p-4 z-[55]">
          <Link to={"/"}>
            <img
              src={LOGO}
              className="h-16 w-16 mr-3 object-contain cursor-pointer"
              alt="SARP_LOGO"
            />
          </Link>
          <div className="flex md:order-2 sm:block md:flex-row lg:flex xl:flex">
            {currentUser ? (
              <>
                <div className="flex items-center mr-4">
                  <span>
                    User: <span className="text-blue-500">{name}</span>
                  </span>
                </div>
                <button
                  type="button"
                  className="text-white bg-red-500 hover:bg-red-700  focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600"
                  onClick={logout}
                >
                  Logout
                </button>
                <Link to={"/add"}>
                  <button
                    type="button"
                    className="text-white bg-green-500 hover:bg-green-600 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0  dark:focus:ring-blue-800 ml-4"
                  >
                    บันทึกนักเรียน
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to={"/login"}>
                  <button
                    type="button"
                    className="text-white bg-blue-700 hidden md:block lg:block xl:block 2xl:block hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center lg:mr-0 dark:bg-blue-600"
                  >
                    Login
                  </button>
                </Link>
              </>
            )}
          </div>

          <div
            className="items-center justify-between w-full md:flex lg:block xl:block 2xl:block md:w-auto md:order-1 sm:hidden"
            id="navbar-sticky"
          >
            <ul className="xl:flex flex-col md:p-0 md:space-x-8 xl:w-full xl:p-0 font-medium rounded-lg xl:flex-row xl:space-x-8 xl:mt-0 xl:border-0 md:flex md:flex-row hidden lg:flex lg:flex-row">
              <li>
                <Link to={"/"}>
                  <button className="block py-2 pl-3 pr-4 text-black hover:text-blue-700 focus:text-blue-700 rounded  xl:p-0">
                    หน้าหลัก
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/about"}>
                  <button className="block py-2 pl-3 pr-4 text-gray-900 rounded focus:text-blue-700 hover:text-blue-700 xl:p-0">
                    เกี่ยวกับ
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/creator"}>
                  <button className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-blue-700 xl:p-0 focus:text-blue-700">
                    ผู้จัดทำ
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/help"}>
                  <button className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent hover:text-blue-700 xl:p-0 focus:text-blue-700">
                    ติดต่อ/แจ้งปัญหา
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
            <span onClick={toggleNav}>{isOpen ? <IoClose size={30} /> : <MdMenu size={30} />}</span>
          </div>
        </div>
        {isOpen && <ResponsiveNav />}
      </nav>
    </>
  );
};

export default Navbar;
