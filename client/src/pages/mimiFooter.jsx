import React from "react";
import { Link } from "react-router-dom";

const mimiFooter = () => {
  return (
    <>
      <div className="my-16">
        <div className="w-full lg:w-[1170px] xl:w-[1170px] mx-auto">
          <div className="my-16 flex justify-center">
            <span className="text-[36px] font-medium">แผนผังเว็ปไซต์</span>
          </div>
          <div className="flex flex-col px-4 md:px-0 lg:px-0 xl:px-0 md:flex-row lg:flex-row xl:flex-row">
            <div className="flex-[1]">
              <div className="">
                <span className="font-medium">SARP</span>
              </div>
              <ul>
                <Link to={"/"}>
                  <li className="text-[#828282]">หน้าหลัก</li>
                </Link>
                <Link to={"/schedule"}>
                  <li className="text-[#828282]">ตารางเรียน</li>
                </Link>
                <Link to={"/help"}>
                  <li className="text-[#828282]">ติดต่อแจ้งปัญหา</li>
                </Link>
                <Link to={"/about"}>
                  <li className="text-[#828282] mb-4 md:md-0 lg:md-0 xl:md-0">เกี่ยวกับ</li>
                </Link>
              </ul>
            </div>
            <div className="flex-[1]">
              <div className="">
                <span className="font-medium">Resource</span>
              </div>
              <ul>
                <Link to={"https://github.com/jonas4236/SARP-Project"}>
                  <li className="text-[#828282]">GitHub</li>
                </Link>
                <Link to={"https://tailwindcss.com/"}>
                  <li className="text-[#828282] mb-4 md:md-0 lg:md-0 xl:md-0">Tailwind CSS</li>
                </Link>
              </ul>
            </div>
            <div className="flex-[1]">
              <div className="">
                <span className="font-medium">FOLLOW US</span>
              </div>
              <ul>
                <Link to={"https://medium.com/@jonas4236"}>
                  <li className="text-[#828282]">Medium</li>
                </Link>
                <Link
                  to={
                    "https://www.linkedin.com/in/thanakorn-sangmee-aa7793278/"
                  }
                >
                  <li className="text-[#828282] mb-4 md:md-0 lg:md-0 xl:md-0">LinkedIn</li>
                </Link>
              </ul>
            </div>
            <div className="flex-[1]">
              <div className="">
                <span className="font-medium">LEGAL</span>
              </div>
              <ul>
                <li className="text-[#828282]">Privacy Policy</li>
                <li className="text-[#828282]">Terms & Conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default mimiFooter;
