import React from "react";
import { Link } from "react-router-dom";

const HelpSuccess = () => {
  return (
    <div className="">
      <div className="xl:w-[1170px] flex flex-col justify-center lg:xl:w-[1170px] h-[100vh] px-4 md:px-0 lg:px-0 xl:px-0 mx-auto py-8">
        <div className="w-full flex justify-center relative mb-4">
          <span className="text-[36px] font-medium text-black">
            ขอขอบคุณที่ใช้บริการ
          </span>
        </div>
        <div className="lg:w-[1000px] xl:w-[1000px] mx-auto mt-8 flex flex-col items-center text-center">
          <span className=" text-[#828282]">
            ขอขอบพระคุณที่ท่านได้เลือกใช้บริการ SARP -
            ทางเลือกที่ท่านต้องการสำหรับการติดตามการเข้าเรียนของบุตรหลานของท่าน!
          </span>
          <p className="text-[#828282]">
            Thank you for choosing SARP - the solution you've been seeking for
            monitoring your child's school attendance!
          </p>
        </div>
        <div className="text-center mt-8">
          <Link to={"/"}>
            <button className="py-2 px-16 text-white bg-[#2F80ED] rounded-lg">
              กลับสู่หน้าหลัก
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HelpSuccess;
