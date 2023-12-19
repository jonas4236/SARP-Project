import React, { useEffect, useState } from "react";
import axios from "axios";

const ListAdmin = () => {
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

    const AddedCheckList = async () => {
      try {
        await axios.post(`${import.meta.env.VITE_API}/create`, {
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
        });
      } catch (err) {
        console.log("Error: ", err);
      }
    };

  return (
    <>
      <div className="my-2">
        <div className="flex">
          <div className="flex-[1]">
            <div className="flex flex-col mt-[17px]">
              {students.map((stu) => (
                <span className="my-2 font-bold" key={stu.stuId}>
                  {stu.stuId}. {stu.stuName}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-[1] gap-2">
            <div className="flex-[1] ">
              <div className="flex justify-center font-bold">
                <span>มาเรียน</span>
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
                <span>ลา</span>
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
                <span>ขาดเรียน</span>
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
    </>
  );
};

export default ListAdmin;
