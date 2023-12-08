import React, { useEffect, useState } from "react";
import ListStudent from "./ListStudent";

const MainList = ({ data }) => {
  return (
    <>
      {data.map((check) => (
        <div key={check.cId} className="p-8 mx-4 lg:mx-0 xl:mx-0 bg-[#8b4513] bg-opacity-50 rounded-lg">
          <div className="w-full flex justify-center">
            <span className="text-[20px] lg:text-[22px] xl:text-[24px] text-white drop-shadow-lg font-bold">
              วิชา
              <span className="ml-4 text-[20px] lg:text-[22px] xl:text-[24px] text-white drop-shadow-lg font-bold">
                {check.subject} 📘
              </span>
            </span>
          </div>
          <div className="w-full">
            <span className="flex justify-center text-[20px] lg:text-[22px] xl:text-[24px] my-4 text-white font-bold drop-shadow-lg">
              ผู้ตรวจ:
              <span className="ml-2 text-blue-800">
                อาจารย์ <span className="text-blue-800 font-bold">{check.teacher}</span>
              </span>
            </span>
            <span className="flex justify-center text-[20px] lg:text-[22px] xl:text-[24px] my-4 text-white font-bold drop-shadow-lg">
              รายชื่อนักเรียน
            </span>
            <ListStudent status={check} />
          </div>
        </div>
      ))}
    </>
  );
};

export default MainList;
