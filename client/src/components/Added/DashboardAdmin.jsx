import React, { useEffect, useState } from "react";
import ListAdmin from "../admin/ListAdmin";
import axios from "axios";
import Api from "../../helpers/Api";

const DashboardAdmin = () => {
  const [teacher, setTeacher] = useState([]);
  const [subject, setSubject] = useState([]);
  const [date, setDate] = useState([]);

  const [dataSubjects, setDataSubjects] = useState([]);
  const [dataTeachers, setDataTeacher] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const res = await axios.get(`${Api}/subjects`);

        setDataSubjects(res.data);
      } catch (err) {
        console.log("error: ", err);
      }
    };

    fetchSubjects();
  }, []);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const res = await axios.get(`${Api}/teachers`);

        setDataTeacher(res.data);
      } catch (err) {
        console.log("error: ", err);
      }
    };

    fetchSubjects();
  }, []);

  // console.log("DATA Subjects: ", dataSubjects);
  // console.log("DATA Teachers: ", dataTeachers);

  console.log("TeacherName: ", teacher);
  console.log("SubjectName: ", subject);
  console.log("Date: ", date);
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
                  <input
                    type="date"
                    name=""
                    id="date"
                    onChange={(event) => setDate(event.target.value)}
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <label
                    htmlFor="TeacherNmae"
                    className="text-[20px] text-sky-600 font-bold"
                  >
                    วิชา
                  </label>
                  <select
                    id="teacherId"
                    onChange={(event) => setSubject(event.target.value)}
                  >
                    {dataSubjects.map((sub) => {
                      return <option key={sub.subId}>{sub.sub_name}</option>;
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
                  <select
                    id="teacherId"
                    onChange={(event) => setTeacher(event.target.value)}
                  >
                    {dataTeachers.map((teach) => {
                      return <option key={teach.id}>{teach.teacher_name}</option>;
                    })}
                  </select>
                </div>
                <div className="w-full flex justify-center">
                  <button className="bg-sky-500 text-white mt-4 w-full py-2 rounded-lg font-medium hover:bg-sky-600">
                    บันทึก
                  </button>
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
