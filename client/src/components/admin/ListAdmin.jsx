import React, { useState } from "react";

const ListAdmin = () => {
  const [checkbox, setCheckbox] = useState([]);
  const [checkbox2, setCheckbox2] = useState([]);
  const [checkbox3, setCheckbox3] = useState([]);
  const [checkbox4, setCheckbox4] = useState([]);
  const [checkbox5, setCheckbox5] = useState([]);
  const [checkbox6, setCheckbox6] = useState([]);
  const [checkbox7, setCheckbox7] = useState([]);
  const [checkbox8, setCheckbox8] = useState([]);
  const [checkbox9, setCheckbox9] = useState([]);
  const [checkbox10, setCheckbox10] = useState([]);

  console.log("test: ", checkbox);
  console.log("test2: ", checkbox2);
  console.log("test3: ", checkbox3);
  console.log("test4: ", checkbox4);
  console.log("test5: ", checkbox5);
  console.log("test6: ", checkbox6);
  console.log("test7: ", checkbox7);
  console.log("test8: ", checkbox8);
  console.log("test9: ", checkbox9);
  console.log("test10: ", checkbox10);

  const handleCheckBox = () => {};
  return (
    <>
      <div className="my-2">
        <div className="flex">
          <div className="flex-[1]">
            <div className="flex flex-col mt-[17px]">
              <span className="my-2 font-bold" value="1">
                1.นายธนากร แสงมี
              </span>
              <span className="my-2 font-bold" value="2">
                2.นายธนากร แสงมี
              </span>
              <span className="my-2 font-bold" value="3">
                3.นายธนากร แสงมี
              </span>
              <span className="my-2 font-bold" value="4">
                4.นายธนากร แสงมี
              </span>
              <span className="my-2 font-bold" value="5">
                5.นายธนากร แสงมี
              </span>
              <span className="my-2 font-bold" value="6">
                6.นายธนากร แสงมี
              </span>
              <span className="my-2 font-bold" value="7">
                7.นายธนากร แสงมี
              </span>
              <span className="my-2 font-bold" value="8">
                8.นายธนากร แสงมี
              </span>
              <span className="my-2 font-bold" value="9">
                9.นายธนากร แสงมี
              </span>
              <span className="my-2 font-bold" value="10">
                10.นายธนากร แสงมี
              </span>
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
                  onClick={() => setCheckbox(1)}
                />
              </div>
              <div className="flex justify-center mt-6">
                <input
                  type="checkbox"
                  name="2"
                  id=""
                  onClick={() => setCheckbox2(1)}
                />
              </div>
              <div className="flex justify-center mt-6">
                <input
                  type="checkbox"
                  name="3"
                  id=""
                  onClick={() => setCheckbox3(1)}
                />
              </div>
              <div className="flex justify-center mt-6">
                <input
                  type="checkbox"
                  name="4"
                  id=""
                  onClick={() => setCheckbox4(1)}
                />
              </div>
              <div className="flex justify-center mt-6">
                <input
                  type="checkbox"
                  name="5"
                  id=""
                  onClick={() => setCheckbox5(1)}
                />
              </div>
              <div className="flex justify-center mt-6">
                <input
                  type="checkbox"
                  name="6"
                  id=""
                  onClick={() => setCheckbox6(1)}
                />
              </div>
              <div className="flex justify-center mt-6">
                <input
                  type="checkbox"
                  name="7"
                  id=""
                  onClick={() => setCheckbox7(1)}
                />
              </div>
              <div className="flex justify-center mt-6">
                <input
                  type="checkbox"
                  name="8"
                  id=""
                  onClick={() => setCheckbox8(1)}
                />
              </div>
              <div className="flex justify-center mt-6">
                <input
                  type="checkbox"
                  name="9"
                  id=""
                  onClick={() => setCheckbox9(1)}
                />
              </div>
              <div className="flex justify-center mt-6">
                <input
                  type="checkbox"
                  name="10"
                  id=""
                  onClick={() => setCheckbox10(1)}
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
                  onClick={() => setCheckbox(2)}
                />
              </div>
              <div className="flex justify-center mt-6">
                <input
                  type="checkbox"
                  name="2"
                  id=""
                  onClick={() => setCheckbox2(2)}
                />
              </div>
              <div className="flex justify-center mt-6">
                <input
                  type="checkbox"
                  name="3"
                  id=""
                  onClick={() => setCheckbox3(2)}
                />
              </div>
              <div className="flex justify-center mt-6">
                <input
                  type="checkbox"
                  name="4"
                  id=""
                  onClick={() => setCheckbox4(2)}
                />
              </div>
              <div className="flex justify-center mt-6">
                <input
                  type="checkbox"
                  name="5"
                  id=""
                  onClick={() => setCheckbox5(2)}
                />
              </div>
              <div className="flex justify-center mt-6">
                <input
                  type="checkbox"
                  name="6"
                  id=""
                  onClick={() => setCheckbox6(2)}
                />
              </div>
              <div className="flex justify-center mt-6">
                <input
                  type="checkbox"
                  name="7"
                  id=""
                  onClick={() => setCheckbox7(2)}
                />
              </div>
              <div className="flex justify-center mt-6">
                <input
                  type="checkbox"
                  name="8"
                  id=""
                  onClick={() => setCheckbox8(2)}
                />
              </div>
              <div className="flex justify-center mt-6">
                <input
                  type="checkbox"
                  name="9"
                  id=""
                  onClick={() => setCheckbox9(2)}
                />
              </div>
              <div className="flex justify-center mt-6">
                <input
                  type="checkbox"
                  name="10"
                  id=""
                  onClick={() => setCheckbox10(2)}
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
                  onClick={() => setCheckbox(3)}
                />
              </div>
              <div className="flex justify-center mt-6">
                <input
                  type="checkbox"
                  name="3"
                  id=""
                  onClick={() => setCheckbox2(3)}
                />
              </div>
              <div className="flex justify-center mt-6">
                <input
                  type="checkbox"
                  name="3"
                  id=""
                  onClick={() => setCheckbox3(3)}
                />
              </div>
              <div className="flex justify-center mt-6">
                <input
                  type="checkbox"
                  name="4"
                  id=""
                  onClick={() => setCheckbox4(3)}
                />
              </div>
              <div className="flex justify-center mt-6">
                <input
                  type="checkbox"
                  name="5"
                  id=""
                  onClick={() => setCheckbox5(3)}
                />
              </div>
              <div className="flex justify-center mt-6">
                <input
                  type="checkbox"
                  name="6"
                  id=""
                  onClick={() => setCheckbox6(3)}
                />
              </div>
              <div className="flex justify-center mt-6">
                <input
                  type="checkbox"
                  name="7"
                  id=""
                  onClick={() => setCheckbox7(3)}
                />
              </div>
              <div className="flex justify-center mt-6">
                <input
                  type="checkbox"
                  name="8"
                  id=""
                  onClick={() => setCheckbox8(3)}
                />
              </div>
              <div className="flex justify-center mt-6">
                <input
                  type="checkbox"
                  name="9"
                  id=""
                  onClick={() => setCheckbox9(3)}
                />
              </div>
              <div className="flex justify-center mt-6">
                <input
                  type="checkbox"
                  name="10"
                  id=""
                  onClick={() => setCheckbox10(3)}
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
