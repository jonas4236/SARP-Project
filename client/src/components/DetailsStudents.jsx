import React from "react";
import Status from "./Status";

const DetailsStudents = ({ status }) => {
  const handleStatus = (val) => {
    switch (val) {
      case 1:
        return <span className="text-green-500 text-[16px]">มาเรียนปกติ</span>;
      case 2:
        return <span className="text-yellow-500 text-[16px]">ลา</span>;
      case 3:
        return <span className="text-red-500 text-[16px]">ขาด</span>;
      default:
        return "ยังไม่มีสถานะ";
    }
  };

  return (
    <>
      <li className="my-2 text-[18px] flex bg-white shadow-lg w-max py-2 px-4 rounded-lg list-none">
        <span className="text-sky-600 font-bold text-[16px]">1. นายกฤษนัย โถมสันเทียะ</span>{" "}
        <div className="ml-[20px]">
          <span className="mr-1">|</span>
          <span className="text-red-500 font-bold text-[16px]">สถานะ</span>
          <span className="mx-2 font-bold">:</span>
          <span className="text-green-500 font-bold">
            {handleStatus(status?.Stu1)}
          </span>
        </div>
      </li>
      <li className="my-2 text-[18px] flex bg-white shadow-lg w-max py-2 px-4 rounded-lg list-none">
        <span className="text-sky-600 font-bold text-[16px]">2. นายธนากร แสงมี</span>
        <div className="ml-[70px]">
          <span className="mr-1">|</span>
          <span className="text-red-500 font-bold text-[16px]">สถานะ</span>
          <span className="mx-2 font-bold">:</span>
          <span className="text-green-500 font-bold">
            {handleStatus(status?.Stu2)}
          </span>
        </div>
      </li>
      <li className="my-2 text-[18px] flex bg-white shadow-lg w-max py-2 px-4 rounded-lg list-none">
        <span className="text-sky-600 font-bold text-[16px]">
          3. นายนันทวัฒน์ นันทวิสาร
        </span>
        <div className="ml-[19px]">
          <span className="mr-1">|</span>
          <span className="text-red-500 font-bold text-[16px]">สถานะ</span>
          <span className="mx-2 font-bold">:</span>
          <span className="text-green-500 font-bold">
            {handleStatus(status?.Stu3)}
          </span>
        </div>
      </li>
      <li className="my-2 text-[18px] flex bg-white shadow-lg w-max py-2 px-4 rounded-lg list-none">
        <span className="text-sky-600 font-bold text-[16px]">
          4. นางสาวนิชาพร ชื่นกลิ่น
        </span>
        <div className="ml-[27px]">
          <span className="mr-1">|</span>
          <span className="text-red-500 font-bold text-[16px]">สถานะ</span>
          <span className="mx-2 font-bold">:</span>
          <span className="text-green-500 font-bold">
            {handleStatus(status?.Stu4)}
          </span>
        </div>
      </li>
      <li className="my-2 text-[18px] flex bg-white shadow-lg w-max py-2 px-4 rounded-lg list-none">
        <span className="text-sky-600 font-bold text-[16px]">5. นายวุฒธิพงษ์ ยันพิมาย</span>
        <div className="ml-[25px]">
          <span className="mr-1">|</span>
          <span className="text-red-500 font-bold text-[16px]">สถานะ</span>
          <span className="mx-2 font-bold">:</span>
          <span className="text-green-500 font-bold">
            {handleStatus(status?.Stu5)}
          </span>
        </div>
      </li>
      <li className="my-2 text-[18px] flex bg-white shadow-lg w-max py-2 px-4 rounded-lg list-none">
        <span className="text-sky-600 font-bold text-[16px]">6. นางสาวสุชญา พงษ์แพทย์</span>
        <div className="ml-[7px]">
          <span className="mr-1">|</span>
          <span className="text-red-500 font-bold text-[16px]">สถานะ</span>
          <span className="mx-2 font-bold">:</span>
          <span className="text-green-500 font-bold">
            {handleStatus(status?.Stu6)}
          </span>
        </div>
      </li>
      <li className="my-2 text-[18px] flex bg-white shadow-lg w-max py-2 px-4 rounded-lg list-none">
        <span className="text-sky-600 font-bold text-[16px]">7. นายเอกวุฒิ ละมุดเทศ</span>
        <div className="ml-[39px]">
          <span className="mr-1">|</span>
          <span className="text-red-500 font-bold text-[16px]">สถานะ</span>
          <span className="mx-2 font-bold">:</span>
          <span className="text-green-500 font-bold">
            {handleStatus(status?.Stu7)}
          </span>
        </div>
      </li>
      <li className="my-2 text-[18px] flex bg-white shadow-lg w-max py-2 px-4 rounded-lg list-none">
        <span className="text-sky-600 font-bold text-[16px]">8. นางสาวกฤติยา จันโลมา</span>
        <div className="ml-[23px]">
          <span className="mr-1">|</span>
          <span className="text-red-500 font-bold text-[16px]">สถานะ</span>
          <span className="mx-2 font-bold">:</span>
          <span className="text-green-500 font-bold">
            {handleStatus(status?.Stu8)}
          </span>
        </div>
      </li>
      <li className="my-2 text-[18px] flex bg-white shadow-lg w-max py-2 px-4 rounded-lg list-none">
        <span className="text-sky-600 font-bold text-[16px]">9. นายถิระพงศ์ ทิพยมลฑล</span>
        <div className="ml-[18px]">
          <span className="mr-1">|</span>
          <span className="text-red-500 font-bold text-[16px]">สถานะ</span>
          <span className="mx-2 font-bold">:</span>
          <span className="text-green-500 font-bold">
            {handleStatus(status?.Stu9)}
          </span>
        </div>
      </li>
      <li className="my-2 text-[18px] flex bg-white shadow-lg w-max py-2 px-4 rounded-lg list-none">
        <span className="text-sky-600 font-bold text-[16px]">10. นายธนกฤต แดงพยนต์</span>
        <div className="ml-[13px]">
          <span className="mr-1">|</span>
          <span className="text-red-500 font-bold text-[16px]">สถานะ</span>
          <span className="mx-2 font-bold">:</span>
          <span className="text-green-500 font-bold">
            {handleStatus(status?.Stu9)}
          </span>
        </div>
      </li>
    </>
  );
};

export default DetailsStudents;
