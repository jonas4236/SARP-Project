import React from "react";
import Status from "./Status";
import List from "./StudentsList/List";

const DetailsStudents = ({ status }) => {
  const handleStatus = (val) => {
    switch (val) {
      case 1:
        return (
          <span className="text-green-500 text-[16px]">🟢 มาเรียนปกติ</span>
        );
      case 2:
        return <span className="text-yellow-500 text-[16px]"><span className="mr-[65px]">🟡</span> ลา</span>;
      case 3:
        return <span className="text-red-500 text-[16px]"><span className="mr-[21px]">🔴</span> ขาดเรียน</span>;
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
            <div className="my-3 text-right font-bold">{handleStatus(status?.Stu1)}</div>
            <div className="mt-[26px] text-right font-bold">{handleStatus(status?.Stu2)}</div>
            <div className="mt-[25px] text-right font-bold">{handleStatus(status?.Stu3)}</div>
            <div className="mt-[25px] text-right font-bold">{handleStatus(status?.Stu4)}</div>
            <div className="mt-[25px] text-right font-bold">{handleStatus(status?.Stu5)}</div>
            <div className="mt-[23px] text-right font-bold">{handleStatus(status?.Stu6)}</div>
            <div className="mt-[25px] text-right font-bold">{handleStatus(status?.Stu7)}</div>
            <div className="mt-[23px] text-right font-bold">{handleStatus(status?.Stu8)}</div>
            <div className="mt-[24px] text-right font-bold">{handleStatus(status?.Stu9)}</div>
            <div className="mt-[24px] text-right font-bold">{handleStatus(status?.Stu10)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsStudents;
