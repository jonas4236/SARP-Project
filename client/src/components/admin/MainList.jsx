import React from "react";
import ListStudent from "./ListStudent";

const MainList = () => {
  return (
    <>
      <div className="p-8 bg-[#8b4513] bg-opacity-50 rounded-lg">
        <div className="w-full flex justify-center">
          <span className="text-[24px] text-white">
            วิชา
            <span className="ml-4 text-[24px] text-white drop-shadow-lg font-bold">
              30000-1501 ชีวิตกับสังคมไทย 📘
            </span>
          </span>
        </div>
        <div className="w-full">
          <span className="flex justify-center text-[24px] my-4 font-medium text-white">
            รายชื่อนักเรียน
          </span>
          <span className="flex justify-center text-[24px] my-4 font-medium text-white">
            ผู้ตรวจ:<span className="ml-2">อาจารย์ <span>นิพล แก้วเกิด</span></span>
          </span>
          <ListStudent />
        </div>
      </div>
    </>
  );
};

export default MainList;
