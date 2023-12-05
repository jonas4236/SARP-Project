import React, { useContext, useEffect, useState } from "react";
import LOGO from "../../../public/images/SARP-LOGO.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../auth/AuthContext";
import secureLocalStorage from "react-secure-storage";

const Navbar = () => {
  const [name, setName] = useState("");

  axios.defaults.withCredentials = true;
  // useEffect(() => {
  //   axios.get(`http://localhost:4444/`).then((res) => {
  //     if (res.data.status === "success") {
  //       setAuth(true);
  //     } else {
  //       setAuth(false);
  //       setMessage(res.data.error);
  //     }
  //   });
  // }, []);

  // console.log("Auth: ",auth)
  // console.log("Name: ",name)

  const { currentUser, logout } = useContext(AuthContext);
  useEffect(() => {
    secureLocalStorage.setItem("user", JSON.stringify(currentUser));
    setName(currentUser?.results.username);
  }, [currentUser]);

  // console.log("RESULTS: ", name);

  axios.defaults.withCredentials = true;

  return (
    <>
      <nav class="bg-white dark:bg-gray-900 w-full border-b border-gray-200 dark:border-gray-600 sticky top-[-10px] z-[999]">
        <div class="w-[1170px] flex flex-wrap items-center justify-between mx-auto p-4 z-[55]">
          <Link to={"/"}>
            <img
              src={LOGO}
              class="h-16 w-16 mr-3 cursor-pointer"
              alt="SARP_LOGO"
            />
          </Link>
          <div class="flex md:order-2">
            {currentUser ? (
              <>
                <div className="flex items-center mr-4">
                  <span>
                    User: <span className="text-blue-500">{name}</span>
                  </span>
                </div>
                <button
                  type="button"
                  class="text-white bg-red-500 hover:bg-red-700  focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600"
                  onClick={logout}
                >
                  Logout
                </button>
                <Link to={"/add"}>
                  <button
                    type="button"
                    class="text-white bg-green-500 hover:bg-green-600 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0  dark:focus:ring-blue-800 ml-4"
                  >
                    บันทึกนักเรียน
                  </button>
                </Link>
              </>
            ) : (
              <Link to={"/login"}>
                <button
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800  focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600"
                >
                  Login
                </button>
              </Link>
            )}
          </div>
          <div
            class="items-center justify-between w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:w-full sm:w-[auto] xl:w-full md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to={"/"}>
                  <button
                    class="block py-2 pl-3 pr-4 text-black hover:text-blue-700 focus:text-blue-700 bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    หน้าหลัก
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/about"}>
                  <button class="block py-2 pl-3 pr-4 text-gray-900 rounded focus:text-blue-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    เกี่ยวกับ
                  </button>
                </Link>
              </li>
              <li>
              <Link to={"/creator"}>
                  <button class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 focus:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    ผู้จัดทำ
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/help"}>
                  <button class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 focus:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    ติดต่อ/แจ้งปัญหา
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
