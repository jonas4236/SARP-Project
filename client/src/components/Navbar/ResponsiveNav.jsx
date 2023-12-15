import React from "react";
import { Link } from "react-router-dom";

const ResponsiveNav = ({ currentUser, currentAdmin }) => {
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
            <Link to={"/schedule"}>
              <button className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent hover:text-blue-700 ml-4 lg:ml-0 xl:ml-0 xl:p-0 focus:text-blue-700">
                ตารางเรียน
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
            <Link to={"/about"}>
              <button className="block py-2 pl-3 pr-4 ml-4 lg:ml-0 xl:ml-0 text-gray-900 rounded focus:text-blue-700 hover:text-blue-700 xl:p-0">
                เกี่ยวกับ
              </button>
            </Link>
          </li>

          <div className="flex ml-[28px] mb-2 items-center">
            {currentUser || currentAdmin ? (
              ""
            ) : (
              <>
                <Link to={"/login"}>
                  <button className="inline-block lg:hidden xl:hidden py-2 px-4 bg-green-400 hover:bg-green-500 text-white rounded-lg">
                    Login
                  </button>
                </Link>
              </>
            )}
          </div>
        </ul>
      </div>
    </>
  );
};

export default ResponsiveNav;
