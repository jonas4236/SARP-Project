import React from "react";
import Status from "./Status";

const DetailsStudents = ({ status }) => {
  const handleStatus = (val) => {
    switch (val) {
      case 1:
        return <span className="text-green-500">มาเรียนปกติ</span>;
      case 2:
        return <span className="text-yellow-500">ลา</span>;
      case 3:
        return <span className="text-red-500">ขาด</span>;
      default:
        return "ยังไม่มีสถานะ";
    }
  };

  return (
    <>
      <li className="my-2 text-[18px] bg-white shadow-lg w-max py-2 px-4 rounded-lg list-none">
        <span className="text-sky-600 font-bold">1. นายกฤษนัย โถมสันเทียะ</span>{" "}
        | <span className="text-red-500 font-bold">สถานะ</span>
        <span className="mx-2 font-bold">:</span>
        <span className="text-green-500 font-bold">
          {handleStatus(status?.Stu1)}
        </span>
      </li>
      <li className="my-2 text-[18px] bg-white shadow-lg w-max py-2 px-4 rounded-lg list-none">
        <span className="text-sky-600 font-bold">2. นายธนากร แสงมี</span> |{" "}
        <span className="text-red-500 font-bold">สถานะ</span>
        <span className="mx-2 font-bold">:</span>
        <span className="text-green-500 font-bold">
          {handleStatus(status?.Stu2)}
        </span>
      </li>
      <li className="my-2 text-[18px] bg-white shadow-lg w-max py-2 px-4 rounded-lg list-none">
        <span className="text-sky-600 font-bold">
          3. นายนันทวัฒน์ นันทวิสาร
        </span>{" "}
        | <span className="text-red-500 font-bold">สถานะ</span>
        <span className="mx-2 font-bold">:</span>
        <span className="text-green-500 font-bold">
          {handleStatus(status?.Stu3)}
        </span>
      </li>
      <li className="my-2 text-[18px] bg-white shadow-lg w-max py-2 px-4 rounded-lg list-none">
        <span className="text-sky-600 font-bold">
          4. นางสาวนิชาพร ชื่นกลิ่น
        </span>{" "}
        | <span className="text-red-500 font-bold">สถานะ</span>
        <span className="mx-2 font-bold">:</span>
        <span className="text-green-500 font-bold">
          {handleStatus(status?.Stu4)}
        </span>
      </li>
      <li className="my-2 text-[18px] bg-white shadow-lg w-max py-2 px-4 rounded-lg list-none">
        <span className="text-sky-600 font-bold">5. นายวุฒธิพงษ์ ยันพิมาย</span>{" "}
        | <span className="text-red-500 font-bold">สถานะ</span>
        <span className="mx-2 font-bold">:</span>
        <span className="text-green-500 font-bold">
          {handleStatus(status?.Stu5)}
        </span>
      </li>
      <li className="my-2 text-[18px] bg-white shadow-lg w-max py-2 px-4 rounded-lg list-none">
        <span className="text-sky-600 font-bold">6. นางสาวสุชญา พงษ์แพทย์</span>{" "}
        | <span className="text-red-500 font-bold">สถานะ</span>
        <span className="mx-2 font-bold">:</span>
        <span className="text-green-500 font-bold">
          {handleStatus(status?.Stu6)}
        </span>
      </li>
      <li className="my-2 text-[18px] bg-white shadow-lg w-max py-2 px-4 rounded-lg list-none">
        <span className="text-sky-600 font-bold">7. นายเอกวุฒิ ละมุดเทศ</span> |{" "}
        <span className="text-red-500 font-bold">สถานะ</span>
        <span className="mx-2 font-bold">:</span>
        <span className="text-green-500 font-bold">
          {handleStatus(status?.Stu7)}
        </span>
      </li>
      <li className="my-2 text-[18px] bg-white shadow-lg w-max py-2 px-4 rounded-lg list-none">
        <span className="text-sky-600 font-bold">8. นางสาวกฤติยา จันโลมา</span>{" "}
        | <span className="text-red-500 font-bold">สถานะ</span>
        <span className="mx-2 font-bold">:</span>
        <span className="text-green-500 font-bold">
          {handleStatus(status?.Stu8)}
        </span>
      </li>
      <li className="my-2 text-[18px] bg-white shadow-lg w-max py-2 px-4 rounded-lg list-none">
        <span className="text-sky-600 font-bold">9. นายถิระพงศ์ ทิพยมลฑล</span>{" "}
        | <span className="text-red-500 font-bold">สถานะ</span>
        <span className="mx-2 font-bold">:</span>
        <span className="text-green-500 font-bold">
          {handleStatus(status?.Stu9)}
        </span>
      </li>
      <li className="my-2 text-[18px] bg-white shadow-lg w-max py-2 px-4 rounded-lg list-none">
        <span className="text-sky-600 font-bold">10. นายธนกฤต แดงพยนต์</span> |{" "}
        <span className="text-red-500 font-bold">สถานะ</span>
        <span className="mx-2 font-bold">:</span>
        <span className="text-green-500 font-bold">
          {handleStatus(status?.Stu10)}
        </span>
      </li>
    </>
  );
};

export default DetailsStudents;
