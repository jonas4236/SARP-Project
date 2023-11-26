import React from "react";
import Status from "./Status";

const DetailsStudents = ({ status }) => {
  return (
    <>
      <li className="my-2 text-[18px] bg-white shadow-lg w-max py-2 px-4 rounded-lg">
        <span className="text-sky-600 font-bold">1. นายกฤษนัย โถมสันเทียะ</span>{" "}
        | <span className="text-red-500">สถานะ</span>
        <span className="mx-2">:</span>
        <span className="text-green-500 font-medium">{status?.Stu1}</span>
      </li>
      <li className="my-2 text-[18px] bg-white shadow-lg w-max py-2 px-4 rounded-lg">
        <span className="text-sky-600 font-bold">2. นายธนากร แสงมี</span> |{" "}
        <span className="text-red-500">สถานะ</span>
        <span className="mx-2">:</span>
        <span className="text-green-500 font-medium">{status?.Stu2}</span>
      </li>
      <li className="my-2 text-[18px] bg-white shadow-lg w-max py-2 px-4 rounded-lg">
        <span className="text-sky-600 font-bold">
          3. นายนันทวัฒน์ นันทวิสาร
        </span>{" "}
        | <span className="text-red-500">สถานะ</span>
        <span className="mx-2">:</span>
        <span className="text-green-500 font-medium">{status?.Stu3}</span>
      </li>
      <li className="my-2 text-[18px] bg-white shadow-lg w-max py-2 px-4 rounded-lg">
        <span className="text-sky-600 font-bold">
          4. นางสาวนิชาพร ชื่นกลิ่น
        </span>{" "}
        | <span className="text-red-500">สถานะ</span>
        <span className="mx-2">:</span>
        <span className="text-green-500 font-medium">{status?.Stu4}</span>
      </li>
      <li className="my-2 text-[18px] bg-white shadow-lg w-max py-2 px-4 rounded-lg">
        <span className="text-sky-600 font-bold">5. นายวุฒธิพงษ์ ยันพิมาย</span>{" "}
        | <span className="text-red-500">สถานะ</span>
        <span className="mx-2">:</span>
        <span className="text-green-500 font-medium">{status?.Stu5}</span>
      </li>
      <li className="my-2 text-[18px] bg-white shadow-lg w-max py-2 px-4 rounded-lg">
        <span className="text-sky-600 font-bold">6. นางสาวสุชญา พงษ์แพทย์</span>{" "}
        | <span className="text-red-500">สถานะ</span>
        <span className="mx-2">:</span>
        <span className="text-green-500 font-medium">{status?.Stu6}</span>
      </li>
      <li className="my-2 text-[18px] bg-white shadow-lg w-max py-2 px-4 rounded-lg">
        <span className="text-sky-600 font-bold">7. นายเอกวุฒิ ละมุดเทศ</span> |{" "}
        <span className="text-red-500">สถานะ</span>
        <span className="mx-2">:</span>
        <span className="text-green-500 font-medium">{status?.Stu7}</span>
      </li>
      <li className="my-2 text-[18px] bg-white shadow-lg w-max py-2 px-4 rounded-lg">
        <span className="text-sky-600 font-bold">8. นางสาวกฤติยา จันโลมา</span>{" "}
        | <span className="text-red-500">สถานะ</span>
        <span className="mx-2">:</span>
        <span className="text-green-500 font-medium">{status?.Stu8}</span>
      </li>
      <li className="my-2 text-[18px] bg-white shadow-lg w-max py-2 px-4 rounded-lg">
        <span className="text-sky-600 font-bold">9. นายถิระพงศ์ ทิพยมลฑล</span>{" "}
        | <span className="text-red-500">สถานะ</span>
        <span className="mx-2">:</span>
        <span className="text-green-500 font-medium">{status?.Stu9}</span>
      </li>
      <li className="my-2 text-[18px] bg-white shadow-lg w-max py-2 px-4 rounded-lg">
        <span className="text-sky-600 font-bold">10. นายธนกฤต แดงพยนต์</span> |{" "}
        <span className="text-red-500">สถานะ</span>
        <span className="mx-2">:</span>
        <span className="text-green-500 font-medium">{status?.Stu10}</span>
      </li>
    </>
  );
};

export default DetailsStudents;
