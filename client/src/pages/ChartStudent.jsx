import React, { useEffect, useState } from "react";
import DataChart from "../components/DataChart";
import axios from 'axios';

const ChartStudent = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const studentNames = [
    "นายกฤษนัย โถมสันเทียะ",
    "นายธนากร แสงมี",
    "นายนันทวัฒน์ นันทวิสาร",
    "นางสาวนิชาพร ชื่นกลิ่น",
    "นายวุฒธิพงษ์ ยันพิมาย",
    "นางสาวสุชญา พงษ์แพทย์",
    "นายเอกวุฒิ ละมุดเทศ",
    "นางสาวกฤติยา จันโลมา",
    "นายถิระพงศ์ ทิพยมลฑล",
    "นายธนกฤต แดงพยนต์"
  ];

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API}/checklist`);
        setAttendanceData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAttendanceData();
  }, []);

  const calculateAttendance = (data, studentKey) => {
    const counts = { 1: 0, 2: 0, 3: 0 };
    data.map((val) => {
      counts[val[studentKey]] = (counts[val[studentKey]] || 0) + 1;
    });

    // console.log(counts)
    return [counts[1], counts[2], counts[3]]; // Return counts for มาเรียน, ลา, ขาดเรียน
  };

//   console.log(attendanceData)

  return (
    <div className="xl:w-[1170px] my-20 mx-auto">
      <div className="mb-20 text-center">
        <h1 className="text-xl">ข้อมูลการมาเรียนของนักเรียนชั้น ปวส.2 แผนกเทคนิคคอมพิวเตอร์ทั้งหมด</h1>
      </div>
      <div className="grid grid-cols-3 max-xl:grid-cols-2 max-[800px]:grid-cols-1 items-center text-center">
        {studentNames.map((name, index) => {
          const studentKey = `Stu${index + 1}`;
          const series = calculateAttendance(attendanceData, studentKey);
          return (
            <div className="p-4 max-[800px]:flex max-[800px]:items-center max-[800px]:flex-col" key={index}>
              <h1>{index + 1}. {name}</h1>
              <DataChart series={series} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChartStudent;
