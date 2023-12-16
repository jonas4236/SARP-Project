import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const help = () => {
  const [day, setDay] = useState(null);
  const [message, setMessage] = useState(null);

  const { helping } = useContext(AuthContext);

  const navigate = useNavigate();
  const today = new Date();

  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = `${year}/${month}/${date}`;

  useEffect(() => {
    // console.log("day", currentDate);
    setDay(currentDate);
  }, []);

  const handleSummitHelp = async (e) => {
    e.preventDefault();
    await helping({ day, message }).then((result) => {
      navigate("/help/successfully").then(() => {
        location.reload(true);
      });
    });
  };
  return (
    <>
      <div className="">
        <div className="xl:w-[1170px] flex flex-col justify-center lg:xl:w-[1170px] h-[100vh] px-4 md:px-0 lg:px-0 xl:px-0 mx-auto py-8">
          <div className="w-full flex justify-center relative mb-4">
            <span className="text-[36px] font-medium text-black">
              ติดต่อ และแจ้งปัญหา
            </span>
          </div>
          <div className="lg:w-[1000px] xl:w-[1000px] mx-auto mt-8">
            <span className="flex items-center text-center text-[#828282]">
              หากท่านมีคำถามหรือข้อสงสัยใดๆ เกี่ยวกับ SARP
              หรือประสงค์ที่จะขอรับคำปรึกษาหรือความช่วยเหลือ
              กรุณาทำการแสดงความคิดเห็นหรือติดต่อผ่านทางกล่องข้อความด้านล่างนี้เพื่อให้เราสามารถให้บริการท่านได้อย่างเต็มที่และทันท่วงที
            </span>
            <p className="mt-4"></p>
            <p className="flex items-center text-center text-[#828282]">
              If you have any questions or concerns regarding SARP, or if you
              require assistance, please feel free to express your thoughts or
              contact us through the comment box provided below. We are
              committed to offering you prompt and comprehensive service.
            </p>
          </div>
          <form
            onSubmit={handleSummitHelp}
            className="mt-8 flex flex-col items-center justify-center"
          >
            <textarea
              className="lg:w-[650px] xl:w-[650px] w-full h-[150px] outline-none border-[#BDBDBD] border-[2px] rounded-md resize-none"
              placeholder="แจ้งปัญหาของคุณ..."
              onChange={(e) => setMessage(e.target.value)}
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button className="bg-[#2F80ED] text-white mt-4 py-2 px-16 rounded-lg">
              แจ้งปัญหา
            </button>
            <Link to={"/"}>
              <div className="mt-4">
                <button className="text-[#BDBDBD]">กลับสู่หน้าหลัก</button>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default help;
