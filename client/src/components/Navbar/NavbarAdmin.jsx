import { Tab } from "@headlessui/react";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";

const NavbarAdmin = () => {
const { logout, username } = useContext(AuthContext)

  return (
    <Tab.Group>
      <Tab.List className={"space-x-3 rounded-xl hidden md:inline-flex lg:inline-flex xl:inline-flex bg-[#7676801F] p-1 ml-2"}>
        <Tab
          className={
            "w-max rounded-lg px-[10px] py-2 text-sm font-medium leading-5 focus:outline-none"
          }
        >
          {username}
        </Tab>
        <Link to={"/add"}>
          <Tab
            className={
              "w-max rounded-lg px-[10px] py-2 text-sm font-medium bg-white text-[#27AE60] leading-5 focus:outline-none"
            }
          >
            บันทึกการเข้าเรียน
          </Tab>
        </Link>
        <Tab
          className={
            "w-max rounded-lg px-[10px] py-2 text-sm font-medium bg-white text-[#FF4015] leading-5 focus:outline-none"
          }
          onClick={logout}
        >
          ออกจากระบบ
        </Tab>
      </Tab.List>
    </Tab.Group>
  );
};

export default NavbarAdmin;
