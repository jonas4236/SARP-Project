import React from "react";

const DetailsStudents = () => {
  return (
    <>
      <li className="my-2 text-[18px] bg-white shadow-lg w-max py-2 px-4 rounded-lg">
        <span className="text-sky-600 font-bold">นายธนากร แสงมี</span> |{" "}
        <span className="text-red-500">สถานะ</span> :{" "}
        <span className="text-green-500 font-medium">มาเรียนปกติ</span>
      </li>
      <li className="my-2 text-[18px] bg-white shadow-lg w-max py-2 px-4 rounded-lg">
        <span className="text-sky-600 font-bold">นายธนากร แสงมี</span> |{" "}
        <span className="text-red-500">สถานะ</span> :{" "}
        <span className="text-yellow-500 font-medium">ลา</span>
      </li>
      <li className="my-2 text-[18px] bg-white shadow-lg w-max py-2 px-4 rounded-lg">
        <span className="text-sky-600 font-bold">นายธนากร แสงมี</span> |{" "}
        <span className="text-red-500">สถานะ</span> :{" "}
        <span className="text-red-500 font-medium">มาเรียนปกติ</span>
      </li>
    </>
  );
};

export default DetailsStudents;
