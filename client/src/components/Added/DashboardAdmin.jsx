import React, { useState } from "react";
import ListAdmin from "../admin/ListAdmin";

const teachers = [
  {
    id: 1,
    name: "none",
  },
  {
    id: 2,
    name: "นิพล แก้วเกิด",
  },
  {
    id: 3,
    name: "ศิวกร บุญอุ้ม",
  },
  {
    id: 4,
    name: "นิพล แก้วเกิด",
  },
  {
    id: 5,
    name: "นิพล แก้วเกิด",
  },
];

const subjects = [
  {
    id: 1,
    name: "30000-1101 ทักษะภาษาไทยเชิงวิชาชีพ",
  },
  {
    id: 2,
    name: "30000-1202 ภาษาอังกฤษสำหรับการปฏิบัติงาน",
  },
  {
    id: 3,
    name: "30000-1404 แคลคูลัส 1",
  },
  {
    id: 4,
    name: "30000-1501 ชีวิตกับสังคมไทย",
  },
  {
    id: 5,
    name: "30000-1608 กาออกกำลังกายเพื่อสุขภาพ",
  },
  {
    id: 6,
    name: "30000-2002 การใช้งานใมโครคอนโทรลเลอร์",
  },
  {
    id: 7,
    name: "30000-2004 ระบบเครือข่ายคอมพิวเตอร์",
  },
  {
    id: 8,
    name: "30000-2202 การวิเคราะห์และออกแบบระบบ",
  },
];


const DashboardAdmin = () => {
  const [teacher, setTeacher] = useState([])
  const [subject, setSubject] = useState([])
  
    console.log("TeacherName: ", teacher)
    console.log("SubjectName: ", subject)
  return (
    <>
      <div className="w-[1170px] mx-auto">
        <div className="my-16 flex justify-center">
          <span className="text-[36px] text-blue-600 drop-shadow-lg font-bold">
            บันทึกการเข้าเรียน
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
                    วิชา
                  </label>
                  <select id="teacherId" onChange={(event) => setSubject(event.target.value)}>
                    {subjects.map((teach) => {
                      return <option key={teach.id}>{teach.name}</option>;
                    })}
                  </select>
                </div>
                <div className="flex flex-col mt-4">
                  <label
                    htmlFor="TeacherNmae"
                    className="text-[20px] text-sky-600 font-bold"
                  >
                    ผู้ตรวจ
                  </label>
                  <select id="teacherId" onChange={(event) => setTeacher(event.target.value)}>
                    {teachers.map((teach) => {
                      return <option key={teach.id}>{teach.name}</option>;
                    })}
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
