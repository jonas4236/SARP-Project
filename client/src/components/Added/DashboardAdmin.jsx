import React from "react";
import ListAdmin from "../admin/ListAdmin"

const DashboardAdmin = () => {
  return (
    <>
      <div className="w-[1170px] mx-auto">
        <div className="my-16 flex justify-center">
          <span className="text-[36px] text-blue-600 drop-shadow-lg font-bold">
            บันทึกนักเรียน
          </span>
        </div>
        <div className="">
          <form className="mx-auto">
            <div className="flex gap-16">
              <div className="flex-[2]">
                <div className="w-full flex justify-center bg-sky-500 py-2 text-white font-bold text-[18px]">
                    <span>รายชื่อนักเรียน</span>
                </div>
                <div className="">
                    <ListAdmin />
                </div>
              </div>
              <div className="flex-[1]">
                <div className="flex flex-col">
                  <label
                    htmlFor="date"
                    className="text-[20px] text-sky-600 font-bold"
                  >
                    วันที่
                  </label>
                  <input type="date" name="" id="date" />
                </div>
                <div className="flex flex-col mt-4">
                  <label
                    htmlFor="TeacherNmae"
                    className="text-[20px] text-sky-600 font-bold"
                  >
                    ผู้ตรวจ
                  </label>
                  <select id="teacherId">
                    <option value="none">none</option>
                    <option value="Tnipon">นิพล แก้วเกิด</option>
                    <option value="Tnipon">ศิวกร บุญอุ้ม</option>
                    <option value="Tnipon">นิพล แก้วเกิด</option>
                    <option value="Tnipon">นิพล แก้วเกิด</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DashboardAdmin;
