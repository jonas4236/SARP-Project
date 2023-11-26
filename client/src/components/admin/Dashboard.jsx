import React from "react";
import ListStudent from "./ListStudent";
import MainList from "./MainList";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const { slugWEEK } = useParams()
  const { slugDMY } = useParams()

  console.log("slugWEEK: ",slugWEEK)
  console.log("slugDMY: ",slugDMY)

  const PullDay = slugDMY.slice(0, 2);
  const PullMonth = slugDMY.slice(3, 5);
  const PullYear = slugDMY.slice(6, 10);

  console.log("PullWEEK: ", PullDay)
  console.log("PullMonth: ", PullMonth)
  console.log("PullYear: ", PullYear)
  return (
    <>
      <div className="py-16">
        <div className="w-[1170px] mx-auto">
          <div className="flex w-full justify-center">
            <span className="text-[36px]">ตารางเรียน</span>
            <span className="text-[36px] ml-4 text-sky-500 drop-shadow-lg font-bold">
              {slugWEEK}
            </span>
            <span className="text-[36px] ml-4 text-sky-500 drop-shadow-lg font-bold">ที่</span>
            <span className="text-[36px] ml-4 text-sky-500 drop-shadow-lg font-bold">{`${PullDay}/${PullMonth}/${PullYear}`}</span>
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
