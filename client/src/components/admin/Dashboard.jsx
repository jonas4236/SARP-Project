import React from "react";
import ListStudent from "./ListStudent";
import MainList from "./MainList";

const Dashboard = () => {
  return (
    <>
      <div className="py-16">
        <div className="w-[1170px] mx-auto">
          <div className="flex w-full justify-center">
            <span className="text-[36px]">ตารางเรียน</span>
            <span className="text-[36px] ml-4 text-sky-500 drop-shadow-lg font-bold">
              วันจันทร์
            </span>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-8">
            <MainList />
            <MainList />
            <MainList />
            <MainList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
