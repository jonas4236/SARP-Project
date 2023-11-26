import React, { useEffect, useState } from "react";
import ListStudent from "./ListStudent";

const MainList = ({ data }) => {
  return (
    <>
      {data.map((check) => (
        <div className="p-8 bg-[#8b4513] bg-opacity-50 rounded-lg">
          <div className="w-full flex justify-center">
            <span className="text-[24px] text-white">
              วิชา
              <span className="ml-4 text-[24px] text-white drop-shadow-lg font-bold">
                {check.subject} 📘
              </span>
            </span>
          </div>
          <div className="w-full">
            <span className="flex justify-center text-[24px] my-4 font-medium text-white">
              ผู้ตรวจ:
              <span className="ml-2">
                อาจารย์ <span>{check.teacher}</span>
              </span>
            </span>
            <span className="flex justify-center text-[24px] my-4 font-medium text-white">
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
