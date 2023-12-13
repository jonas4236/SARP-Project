import React from "react";

const Schedule = () => {
  return (
    <>
      <div className="px-4 lg:px-0 xl:px-0">
        <div className="lg:xl:w-[1170px] xl:w-[1170px] mx-auto py-16">
          <div className="w-full flex justify-center relative">
            <span className="text-[36px] font-semibold text-sky-600">
              ตารางเรียน
            </span>
            <div className="w-[60px] h-[5px] rounded-full bg-sky-500 absolute bottom-0"></div>
          </div>
          <div className="mt-8 text-[16px] font-medium">
            <span>จำลองมาจากตารางเรียนของนักเรียน นักศึกษาแผนกเทคนิคคอมพิวเตอร์ ระดับชั้น ปวส.4/1 <span className="text-red-500 font-bold">เท่านั้น</span></span>
          </div>
          <div className="mt-8 flex justify-center">
            <img className="object-contain" src="https://res.cloudinary.com/jonasdev/image/upload/v1702467670/image_up5vf9.png" alt="SCHEDULE" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
