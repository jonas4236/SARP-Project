import React from "react";
import ListStudent from "./ListStudent";

const MainList = ({ data }) => {
  console.log("data: ", data);

  const slugNumber = data?.[0]?.subject.slice(0, 10);
  const slugNameSub = console.log("number: ", slugNumber);
  return (
    <>
      {data.map((check) => (
        <div
          key={check.cId}
          className="mx-4 lg:mx-0 xl:mx-0 bg-opacity-50 rounded-lg"
        >
          <div className="bg-[#EEEEEF] rounded-lg p-8">
            <div className="w-full lg:xl:w-[510px] xl:w-[510px] flex justify-center">
              <span className="ml-4 text-[16px] lg:text-[20px] xl:text-[20px] text-[#0042A9] font-bold">
                {check.subject.slice(0, 10)}
              </span>
            </div>
            <div className="w-full">
              <span className="flex justify-center text-[16px] lg:text-[20px] xl:text-[20px] text-black font-bold">
                {check.subject.slice(11, 90)}
              </span>
              <span className="flex justify-center text-[16px] lg:text-[16px] xl:text-[18px]  text-[#474747] font-bold">
                อาจารย์ <span className="ml-2">{check.teacher}</span>
              </span>
            </div>
          </div>
            <ListStudent status={check} />
        </div>
      ))}
    </>
  );
};

export default MainList;
