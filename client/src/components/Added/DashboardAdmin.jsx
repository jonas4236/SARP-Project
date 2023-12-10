import React, { useContext, useEffect, useState } from "react";
import ListAdmin from "../admin/ListAdmin";
import axios from "axios";
import Api from "../../helpers/Api";
import { AuthContext } from "../../auth/AuthContext";
import DefaultAPI from "../../helpers/DefaultAPI";

const DashboardAdmin = () => {
  const [teacher, setTeacher] = useState([]);
  const [subject, setSubject] = useState([]);
  const [date, setDate] = useState([]);

  const [dataSubjects, setDataSubjects] = useState([]);
  const [dataTeachers, setDataTeacher] = useState([]);

  const [Stu, setStu] = useState([]);
  const [Stu2, setStu2] = useState([]);
  const [Stu3, setStu3] = useState([]);
  const [Stu4, setStu4] = useState([]);
  const [Stu5, setStu5] = useState([]);
  const [Stu6, setStu6] = useState([]);
  const [Stu7, setStu7] = useState([]);
  const [Stu8, setStu8] = useState([]);
  const [Stu9, setStu9] = useState([]);
  const [Stu10, setStu10] = useState([]);

  const [students, setStudents] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API}/students`);

        setStudents(res.data);
      } catch (err) {
        console.log("error: ", err);
      }
    };

    fetchStudents();
  }, []);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API}/subjects`);

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
        const res = await axios.get(`${import.meta.env.VITE_API}/teachers`);

        setDataTeacher(res.data);
      } catch (err) {
        console.log("error: ", err);
      }
    };

    fetchSubjects();
  }, []);

  const PullDay = date.slice(8, 10);
  const PullMonth = date.slice(5, 7);
  const PullYear = date.slice(0, 4);

  const formattedDMY = `${PullYear}/${PullMonth}/${PullDay}`;

  const AddedCheckList = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(`${import.meta.env.VITE_API}/create`, {
          Date: formattedDMY,
          teacher: teacher,
          subject: subject,
          Stu1: Stu,
          Stu2: Stu2,
          Stu3: Stu3,
          Stu4: Stu4,
          Stu5: Stu5,
          Stu6: Stu6,
          Stu7: Stu7,
          Stu8: Stu8,
          Stu9: Stu9,
          Stu10: Stu10,
        })
        .then(() => {
          window.location.href = "/add";
        });
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  // useEffect(() => {
  //   axios.get(`${DefaultAPI}/add`).then((res) => {
  //     if (res.data.redirectTo) {
  //       window.location.href = res.data.redirectTo;
  //     }
  //   });
  // }, []);

  // console.log("TeacherName: ", teacher);
  // console.log("SubjectName: ", subject);
  // console.log("Date: ", formattedDMY);
  return (
    <>
      <div className="mb-32">
        {currentUser ? (
          <>
            <div className="lg:w-[1170px] xl:w-[1170px] mx-auto">
              <div className="my-16 flex justify-center">
                <span className="text-[36px] text-blue-600 drop-shadow-lg font-bold">
                  บันทึกการเข้าเรียน
                </span>
              </div>
              <div className="">
                <form className="mx-auto" onSubmit={AddedCheckList}>
                  <div className="flex gap-16 flex-col lg:flex-row xl:flex-row">
                    <div className="flex-[2]">
                      <div className="w-full flex justify-center bg-sky-500 py-2 text-white font-bold text-[18px]">
                        <span>รายชื่อนักเรียน</span>
                      </div>
                      <div className="">
                        {/* <ListAdmin /> */}{" "}
                        <div className="my-2">
                          <div className="flex">
                            <div className="flex-[1]">
                              <div className="flex flex-col mt-[32px]">
                                {students.map((stu) => (
                                  <span
                                    className="my-2 font-bold"
                                    key={stu.stuId}
                                  >
                                    <span className="text-red-500">
                                      {stu.stuId}.
                                    </span>{" "}
                                    {stu.stuName}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="flex flex-[1] gap-2">
                              <div className="flex-[1] ">
                                <div className="flex justify-center font-bold">
                                  <span className="mb-4">มาเรียน</span>
                                </div>
                                <div className="flex justify-center mt-1">
                                  <input
                                    type="checkbox"
                                    name="1"
                                    id="1"
                                    onClick={() => setStu(1)}
                                  />
                                </div>
                                <div className="flex justify-center mt-6">
                                  <input
                                    type="checkbox"
                                    name="2"
                                    id=""
                                    onClick={() => setStu2(1)}
                                  />
                                </div>
                                <div className="flex justify-center mt-6">
                                  <input
                                    type="checkbox"
                                    name="3"
                                    id=""
                                    onClick={() => setStu3(1)}
                                  />
                                </div>
                                <div className="flex justify-center mt-6">
                                  <input
                                    type="checkbox"
                                    name="4"
                                    id=""
                                    onClick={() => setStu4(1)}
                                  />
                                </div>
                                <div className="flex justify-center mt-6">
                                  <input
                                    type="checkbox"
                                    name="5"
                                    id=""
                                    onClick={() => setStu5(1)}
                                  />
                                </div>
                                <div className="flex justify-center mt-6">
                                  <input
                                    type="checkbox"
                                    name="6"
                                    id=""
                                    onClick={() => setStu6(1)}
                                  />
                                </div>
                                <div className="flex justify-center mt-6">
                                  <input
                                    type="checkbox"
                                    name="7"
                                    id=""
                                    onClick={() => setStu7(1)}
                                  />
                                </div>
                                <div className="flex justify-center mt-6">
                                  <input
                                    type="checkbox"
                                    name="8"
                                    id=""
                                    onClick={() => setStu8(1)}
                                  />
                                </div>
                                <div className="flex justify-center mt-6">
                                  <input
                                    type="checkbox"
                                    name="9"
                                    id=""
                                    onClick={() => setStu9(1)}
                                  />
                                </div>
                                <div className="flex justify-center mt-6">
                                  <input
                                    type="checkbox"
                                    name="10"
                                    id=""
                                    onClick={() => setStu10(1)}
                                  />
                                </div>
                              </div>
                              <div className="flex-[1]">
                                <div className="flex justify-center font-bold">
                                  <span className="mb-4">ลา</span>
                                </div>
                                <div className="flex justify-center mt-1">
                                  <input
                                    type="checkbox"
                                    name="1"
                                    id=""
                                    onClick={() => setStu(2)}
                                  />
                                </div>
                                <div className="flex justify-center mt-6">
                                  <input
                                    type="checkbox"
                                    name="2"
                                    id=""
                                    onClick={() => setStu2(2)}
                                  />
                                </div>
                                <div className="flex justify-center mt-6">
                                  <input
                                    type="checkbox"
                                    name="3"
                                    id=""
                                    onClick={() => setStu3(2)}
                                  />
                                </div>
                                <div className="flex justify-center mt-6">
                                  <input
                                    type="checkbox"
                                    name="4"
                                    id=""
                                    onClick={() => setStu4(2)}
                                  />
                                </div>
                                <div className="flex justify-center mt-6">
                                  <input
                                    type="checkbox"
                                    name="5"
                                    id=""
                                    onClick={() => setStu5(2)}
                                  />
                                </div>
                                <div className="flex justify-center mt-6">
                                  <input
                                    type="checkbox"
                                    name="6"
                                    id=""
                                    onClick={() => setStu6(2)}
                                  />
                                </div>
                                <div className="flex justify-center mt-6">
                                  <input
                                    type="checkbox"
                                    name="7"
                                    id=""
                                    onClick={() => setStu7(2)}
                                  />
                                </div>
                                <div className="flex justify-center mt-6">
                                  <input
                                    type="checkbox"
                                    name="8"
                                    id=""
                                    onClick={() => setStu8(2)}
                                  />
                                </div>
                                <div className="flex justify-center mt-6">
                                  <input
                                    type="checkbox"
                                    name="9"
                                    id=""
                                    onClick={() => setStu9(2)}
                                  />
                                </div>
                                <div className="flex justify-center mt-6">
                                  <input
                                    type="checkbox"
                                    name="10"
                                    id=""
                                    onClick={() => setStu10(2)}
                                  />
                                </div>
                              </div>
                              <div className="flex-[1]">
                                <div className="flex justify-center font-bold">
                                  <span className="mb-4">ขาด</span>
                                </div>
                                <div className="flex justify-center mt-1">
                                  <input
                                    type="checkbox"
                                    name="1"
                                    id=""
                                    onClick={() => setStu(3)}
                                  />
                                </div>
                                <div className="flex justify-center mt-6">
                                  <input
                                    type="checkbox"
                                    name="3"
                                    id=""
                                    onClick={() => setStu2(3)}
                                  />
                                </div>
                                <div className="flex justify-center mt-6">
                                  <input
                                    type="checkbox"
                                    name="3"
                                    id=""
                                    onClick={() => setStu3(3)}
                                  />
                                </div>
                                <div className="flex justify-center mt-6">
                                  <input
                                    type="checkbox"
                                    name="4"
                                    id=""
                                    onClick={() => setStu4(3)}
                                  />
                                </div>
                                <div className="flex justify-center mt-6">
                                  <input
                                    type="checkbox"
                                    name="5"
                                    id=""
                                    onClick={() => setStu5(3)}
                                  />
                                </div>
                                <div className="flex justify-center mt-6">
                                  <input
                                    type="checkbox"
                                    name="6"
                                    id=""
                                    onClick={() => setStu6(3)}
                                  />
                                </div>
                                <div className="flex justify-center mt-6">
                                  <input
                                    type="checkbox"
                                    name="7"
                                    id=""
                                    onClick={() => setStu7(3)}
                                  />
                                </div>
                                <div className="flex justify-center mt-6">
                                  <input
                                    type="checkbox"
                                    name="8"
                                    id=""
                                    onClick={() => setStu8(3)}
                                  />
                                </div>
                                <div className="flex justify-center mt-6">
                                  <input
                                    type="checkbox"
                                    name="9"
                                    id=""
                                    onClick={() => setStu9(3)}
                                  />
                                </div>
                                <div className="flex justify-center mt-6">
                                  <input
                                    type="checkbox"
                                    name="10"
                                    id=""
                                    onClick={() => setStu10(3)}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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
                          htmlFor="TeacherName"
                          className="text-[20px] text-sky-600 font-bold"
                        >
                          วิชา
                        </label>
                        <select
                          id="teacherId"
                          onChange={(event) => setSubject(event.target.value)}
                        >
                          {dataSubjects.map((sub) => (
                            <option key={sub.subId}>{sub.sub_name}</option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col mt-4">
                        <label
                          htmlFor="TeacherName"
                          className="text-[20px] text-sky-600 font-bold"
                        >
                          ผู้ตรวจ
                        </label>
                        <select
                          id="teacherId"
                          onChange={(event) => setTeacher(event.target.value)}
                        >
                          {dataTeachers.map((teach) => (
                            <option key={teach.id}>{teach.teacher_name}</option>
                          ))}
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
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default DashboardAdmin;
