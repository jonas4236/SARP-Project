import React from "react";

const mimiFooter = () => {
  return (
    <>
      <div className="my-16">
        <div className="lg:w-[1170px] xl:w-[1170px] mx-auto">
          <div className="my-16 flex justify-center">
            <span className="text-[36px] font-medium">แผนผังเว็ปไซต์</span>
          </div>
          <div className="flex">
            <div className="flex-[1]">
              <div className="mb-4">
                <span className="font-medium">SARP</span>
              </div>
              <ul>
                <li className="text-[#828282]">หน้าหลัก</li>
                <li className="text-[#828282]">ตารางเรียน</li>
                <li className="text-[#828282]">ติดต่อแจ้งปัญหา</li>
                <li className="text-[#828282]">เกี่ยวกับ</li>
              </ul>
            </div>
            <div className="flex-[1]">
              <div className="mb-4">
                <span className="font-medium">Resource</span>
              </div>
              <ul>
                <li className="text-[#828282]">GitHub</li>
                <li className="text-[#828282]">Tailwind CSS</li>
              </ul>
            </div>
            <div className="flex-[1]">
              <div className="mb-4">
                <span className="font-medium">FOLLOW US</span>
              </div>
              <ul>
                <li className="text-[#828282]">Medium</li>
                <li className="text-[#828282]">LinkedIn</li>
              </ul>
            </div>
            <div className="flex-[1]">
              <div className="mb-4">
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
