import React from "react";

const About = () => {
  return (
    <>
      <div className="">
        <div className="w-[1170px] mx-auto py-16">
          <div className="w-full flex justify-center relative">
            <span className="text-[36px] font-semibold text-sky-600">
              เกี่ยวกับ
            </span>
            <div className="w-[60px] h-[5px] rounded-full bg-sky-500 absolute bottom-0"></div>
          </div>
          <div className="w-[800px] mx-auto mt-16">
            <div className="w-full">
              <span>
                ยินดีต้อนรับสู่ Student Attendance Reporting Program (SARP) -
                โปรแกรมรายงานการเข้าเรียนนักศึกษา
              </span>
              <p>
                "SARP"
                ถูกพัฒนาขึ้นมาเพื่อเสริมสร้างความร่วมมือระหว่างสถานศึกษาและผู้ปกครอง
                ด้วยการทำให้ข้อมูลการเข้าเรียนของนักศึกษาสามารถเข้าถึงได้ทุกที่ทุกเวลา
                นอกจากนี้ยังเป็นเครื่องมือที่ดีในการเสริมสร้างการสื่อสารระหว่างครูและผู้ปกครองเพื่อเตรียมความพร้อมในการดูแลลูกของท่านในด้านการศึกษา
              </p>
            </div>
            <div className="mt-12">
              <span>
                SARP
                เป็นเว็บไซต์ที่ถูกออกแบบมาเพื่อช่วยให้ผู้ปกครองสามารถตรวจสอบการเข้าเรียนของลูกของตนได้อย่างสะดวกและรวดเร็ว
                ผ่านทางเว็บไซต์ที่เราได้พัฒนาขึ้นนี้
              </span>
            </div>
            <p className="mt-8 text-blue-600 font-medium"></p>
            <ul className="mt-8">
              <span className="text-blue-600 font-medium">
                วัตถุประสงค์ของ SARP
              </span>
              <div className="ml-4">
                <li>
                  1.
                  เพื่อศึกษาความพึงพอใจของผู้ใช้งานโปรแกรมรายงานการเข้าเรียนของนักเรียนนักศึกษา
                </li>
                <li>
                  2.
                  เพื่อเปรียบเทียบผลการศึกษาความพึงพอใจของผู้ใช้งานโปรแกรมรายงานการเข้าเรียนของนักเรียนนักศึกษา
                </li>
              </div>
            </ul>
            <ul className="mt-8">
              <span className="text-blue-600 font-medium">
                คุณสมบัติของ SARP
              </span>
              <div className="ml-4">
              <li>
                1. ใช้ในการตรวจสอบการเข้าเรียนของนักเรียนนักศึกษา
                โดยทางคณะผู้จัดทำได้พัฒนาตามความต้องการของผู้ปกครองของนักเรียนนักศึกษา
              </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
