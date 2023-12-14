import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="">
        <div className="xl:w-[1170px] px-4 md:px-0 lg:px-0 xl:px-0 mx-auto py-16">
          <div className="w-full flex justify-center relative">
            <span className="text-[36px] font-semibold text-sky-600">
              เกี่ยวกับ SARP
            </span>
            <div className="w-[100px] h-[5px] rounded-full bg-sky-500 absolute bottom-0"></div>
          </div>
          <div className="lg:xl:w-[800px] xl:w-[800px] mx-auto mt-16">
            <div className="xl:w-full">
              <p className="text-justify">
                <span className="ml-16">SARP</span> ย่อมาจาก Student Attendance
                Reporting Program - โปรแกรมรายงานการเข้าเรียนนักศึกษา
                ถูกพัฒนาขึ้นมาเพื่อเสริมสร้างความร่วมมือระหว่างสถานศึกษาและผู้ปกครอง
                ด้วยการทำให้ข้อมูลการเข้าเรียนของนักศึกษาสามารถเข้าถึงได้ทุกที่ทุกเวลา
                นอกจากนี้ยังเป็นเครื่องมือที่ดีในการเสริมสร้างการสื่อสารระหว่างครูและผู้ปกครองเพื่อเตรียมความพร้อมในการดูแลบุตรหลานของท่านในด้านการศึกษา
              </p>
              <div className="mt-2">
              <span className="ml-16 text-justify">
                SARP
                เป็นเว็บไซต์ที่ถูกออกแบบมาเพื่อช่วยให้ผู้ปกครองสามารถตรวจสอบการเข้าเรียนของบุตรหลานได้อย่างสะดวก และรวดเร็ว
                ผ่านทางเว็บไซต์ที่เราได้พัฒนาขึ้นนี้
              </span>
              </div>
            </div>
            <div className="mt-12"></div>
            <ul className="mt-8">
              <span className="text-black underline font-medium">
                วัตถุประสงค์การสร้างสิ่งประดิษฐ์และนวัตกรรม
              </span>
              <div className="ml-4">
                <li>
                  1. เพื่อพัฒนาโปรแกรมรายงานการเข้าเรียนของนักเรียนนักศึกษา
                </li>
                <li>
                  2.
                  เพื่อศึกษาความพึงพอใจต่อการพัฒนาโปรแกรมรายงานการเข้าเรียนของนักเรียนนักศึกษา
                </li>
              </div>
            </ul>
            <ul className="mt-8">
              <span className="text-black underline font-medium">
                คุณสมบัติของ SARP
              </span>
              <div className="ml-4">
                <li>
                  1. ใช้ในการตรวจสอบการเข้าเรียนของนักเรียนนักศึกษา
                  โดยทางคณะผู้จัดทำได้พัฒนาตามความต้องการของผู้ปกครองของนักเรียนนักศึกษา
                </li>
              </div>
            </ul>
            <div className="mt-8">
              <span className="text-black underline font-medium">ผู้จัดทำ</span>
              <ul className="ml-4">
                <li>นายนันทวัฒน์ นันทวิสาร</li>
                <li className="mb-2">นายธนากร แสงมี</li>
                <li>นักศึกษาระดับชั้นประกาศนียบัตรวิชาชีพชั้นสูง(ปวส)</li>
                <li>แผนกแผนกเทคนิคคอมพิวเตอร์</li>
              </ul>
              <Link to={"/sitemap"}>
                <div className="mt-8 flex items-center">
                  <span className="text-blue-600 font-medium">
                    เรียกดูแผนผังเว็ปไซต์{" "}
                  </span>
                  <span className="text-blue-600 ml-2">
                    <FaArrowRightLong />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
