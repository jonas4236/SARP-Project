import React from "react";
import { Link } from "react-router-dom";

const ResponsiveNav = ({ currentUser }) => {
  return (
    <>
      <div
        className="items-center justify-between w-full md:flex sm:hidden
            lg:block xl:block 2xl:block md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul className="flex flex-col md:p-0 md:space-x-8 xl:w-full xl:p-0 font-medium rounded-lg xl:flex-row xl:space-x-8 xl:mt-0 xl:border-0 md:flex md:flex-row sm:hidden lg:flex lg:flex-row">
          <li>
            <Link to={"/"}>
              <button className="block py-2 pl-3 pr-4 ml-4 lg:ml-0 xl:ml-0 text-black hover:text-blue-700 focus:text-blue-700 rounded  xl:p-0">
                หน้าหลัก
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/about"}>
              <button className="block py-2 pl-3 pr-4 ml-4 lg:ml-0 xl:ml-0 text-gray-900 rounded focus:text-blue-700 hover:text-blue-700 xl:p-0">
                เกี่ยวกับ
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/creator"}>
              <button className="block py-2 pl-3 pr-4 ml-4 lg:ml-0 xl:ml-0 text-gray-900 rounded hover:text-blue-700 xl:p-0 focus:text-blue-700">
                ผู้จัดทำ
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/help"}>
              <button className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent hover:text-blue-700 ml-4 lg:ml-0 xl:ml-0 xl:p-0 focus:text-blue-700">
                ติดต่อ/แจ้งปัญหา
              </button>
            </Link>
          </li>
          <li>
            <Link to={"/schedule"}>
              <button className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent hover:text-blue-700 ml-4 lg:ml-0 xl:ml-0 xl:p-0 focus:text-blue-700">
                ตารางเรียน
              </button>
            </Link>
          </li>
          {currentUser ? (
            ""
          ) : (
            <li>
              <Link to={"/login"}>
                <button
                  type="button"
                  className="text-white bg-blue-700 block md:block lg:block xl:block 2xl:block hover:bg-blue-800 font-medium rounded-lg text-sm px-4 ml-4 lg:ml-0 xl:ml-0 py-2 text-center mb-4 lg:mr-0 dark:bg-blue-600"
                >
                  Login
                </button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default ResponsiveNav;
