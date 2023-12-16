import React from "react";
import Status from "./Status";
import List from "./StudentsList/List";

const DetailsStudents = ({ status }) => {
  const handleStatus = (val) => {
    switch (val) {
      case 1:
        return (
          <span className="text-green-500 text-[14px] lg:text-[16px] xl:text-[16px]">
            <span>🟢</span> มาเรียนปกติ
          </span>
        );
      case 2:
        return (
          <div className="">
            <span className="text-yellow-500 text-[16px] lg:text-[16px] xl:text-[16px]">
              <span className="mr-[0px] lg:mr-[0px] xl:mr-[0px] text-[14px] md:text-[16px] lg:text-[16px] xl:text-[16px]">🟡</span>
            </span>
            <span className="text-yellow-500 mr-[57px] ml-[4px] md:mr-[55px] lg:mr-[66px] text-[14px] lg:text-[16px] xl:text-[16px] xl:mr-[65px] xl:ml-[5px]">
              ลา
            </span>
          </div>
        );
      case 3:
        return (
          <div className="">
            <span className="text-red-500 mr-[19px] text-[14px] lg:text-[16px] md:mr-[18px] lg:mr-[22px] xl:mr-[22px] xl:text-[16px]">
              <span className="mr-[3px] md:mr-[5px] lg:mr-[4px] xl:mr-[1px]">
                🔴
              </span>
              <span className="xl:ml-[3px]">ขาดเรียน</span>
            </span>
          </div>
        );
      default:
        return "ยังไม่มีสถานะ";
    }
  };

  return (
    <>
      <div className="">
        <div className="flex lg:xl:w-[100%] xl:w-[100%] gap-2">
          <div className="flex-[1]">
            <div className="w-full flex justify-center mt-8">
              <span className="font-semibold">รายชื่อ</span>
            </div>
            <List />
          </div>
          <div className="flex justify-center items-center mt-[80px] w-[1px] h-[440px] rounded-full bg-gray-400"></div>
          <div className="flex-[1]">
            <div className="w-full flex justify-center mt-8">
              <span className="font-semibold">สถานะ</span>
            </div>
            <div className="my-3 text-right font-bold">
              {handleStatus(status?.Stu1)}
            </div>
            <div className="mt-[26px] text-right font-bold">
              {handleStatus(status?.Stu2)}
            </div>
            <div className="mt-[25px] text-right font-bold">
              {handleStatus(status?.Stu3)}
            </div>
            <div className="mt-[25px] text-right font-bold">
              {handleStatus(status?.Stu4)}
            </div>
            <div className="mt-[25px] text-right font-bold">
              {handleStatus(status?.Stu5)}
            </div>
            <div className="mt-[23px] text-right font-bold">
              {handleStatus(status?.Stu6)}
            </div>
            <div className="mt-[25px] text-right font-bold">
              {handleStatus(status?.Stu7)}
            </div>
            <div className="mt-[23px] text-right font-bold">
              {handleStatus(status?.Stu8)}
            </div>
            <div className="mt-[24px] text-right font-bold">
              {handleStatus(status?.Stu9)}
            </div>
            <div className="mt-[24px] text-right font-bold">
              {handleStatus(status?.Stu10)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsStudents;
