import React from "react";

const help = () => {
  return (
    <>
      <div className="">
        <div className="w-[1170px] mx-auto py-8">
          <div className="w-full flex justify-center relative mb-4">
            <span className="text-[36px] font-semibold text-sky-600">
              ติดต่อ/แจ้งปัญหา
            </span>
            <div className="w-[140px] h-[5px] rounded-full bg-sky-500 absolute bottom-0"></div>
          </div>
          <div className="w-[1000px] mx-auto mt-8">
            <span>
              หากคุณมีคำถามหรือข้อสงสัยเกี่ยวกับ SARP หรือต้องการความช่วยเหลือ
              กรุณาติดต่อทีมงานผ่านทาง อีเมล:{" "}
              <span className="text-sky-500 font-medium">
                bossview59@gmail.com
              </span>
            </span>
            <p>
              If you have any questions or concerns about SARP or need
              assistance, Please contact the team via email:{" "}
              <span className="text-sky-500 font-medium">bossview59@gmail.com</span>
            </p>
            <p className="mt-4">
              ขอบคุณที่ใช้บริการ SARP -
              คำตอบที่คุณคาดหวังสำหรับการติดตามการเข้าเรียนของบุตรหลานของคุณ!
            </p>
            <p>Thank you for using SARP - the answer you've been expecting for tracking your child's school attendance!</p>
          </div>
          <div className="mt-8">
            <img
              className="w-[1000px] h-full mx-auto rounded-lg"
              src="https://images.unsplash.com/photo-1502355984-b735cb2550ce?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="IMAGE"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default help;
