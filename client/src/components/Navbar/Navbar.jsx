import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../auth/AuthContext";
import secureLocalStorage from "react-secure-storage";
import ResponsiveNav from "./ResponsiveNav";
import NavbarV2 from "./NavbarV2";
import NavbarAdmin from "./NavbarAdmin";
import NavbarAdminstrator from "./NavbarAdminstrator";

// ICONS
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Add this line

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  axios.defaults.withCredentials = true;

  const { currentUser, currentAdmin, logout, username, adminstrator } =
    useContext(AuthContext);

  useEffect(() => {
    secureLocalStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    secureLocalStorage.setItem("staff", JSON.stringify(currentAdmin));
  }, [currentAdmin]);

  useEffect(() => {
    secureLocalStorage.setItem("adminstrator", JSON.stringify(adminstrator));
  }, [adminstrator]);

  useEffect(() => {
    // หากมี currentUser หรือ currentAdmin ให้ไม่ทำการ redirect
    if (currentUser || currentAdmin || adminstrator) {
      return;
    }

    // หากไม่มี currentUser หรือ currentAdmin ให้ทำการ redirect ไปที่ "/login"
    navigate("/login");
  }, [currentUser, currentAdmin, adminstrator, navigate]);

  return (
    <>
      <nav className="bg-white w-full border-b border-gray-200 sticky top-[-10px] z-[999]">
        <div className="xl:w-[1170px] flex items-center justify-between mx-auto p-4 z-[55]">
          <Link to={"/"}>
            <img
              src={
                "https://res.cloudinary.com/jonasdev/image/upload/v1702523477/foot-logo_jxwegy.png"
              }
              className="h-16 w-full mr-3 object-contain cursor-pointer"
              alt="SARP_LOGO"
            />
          </Link>
          <div className="flex md:order-2 sm:block md:flex-row lg:flex xl:flex">
            {currentUser ? (
              <>
                <button
                  type="button"
                  className="text-white hidden md:inline-block lg:inline-block xl:inline-block w-max bg-red-500 hover:bg-red-700  focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600"
                  onClick={logout}
                >
                  ออกจากระบบ
                </button>
              </>
            ) : (
              ""
            )}
            {currentAdmin ? <NavbarAdmin /> : ""}
            {adminstrator ? <NavbarAdminstrator /> : ""}
          </div>
          <div
            className="items-center justify-between w-full md:flex lg:block xl:block 2xl:block md:w-auto md:order-1 sm:hidden"
            id="navbar-sticky"
          >
            <ul className="xl:flex flex-col md:p-0 md:space-x-8 xl:w-full xl:p-0 font-medium rounded-lg xl:flex-row xl:space-x-8 xl:mt-0 xl:border-0 md:flex md:flex-row hidden lg:flex lg:flex-row">
              <NavbarV2 />
            </ul>
          </div>
          <div className="sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
            <span className="cursor-pointer" onClick={toggleNav}>
              {isOpen ? <IoClose size={30} /> : <MdMenu size={30} />}
            </span>
          </div>
        </div>
        {isOpen && (
          <ResponsiveNav
            currentUser={currentUser}
            currentAdmin={currentAdmin}
            username={username}
            logout={logout}
            adminstrator={adminstrator}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
