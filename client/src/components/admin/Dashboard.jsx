import React, { useEffect, useState } from "react";
import ListStudent from "./ListStudent";
import MainList from "./MainList";
import { useParams } from "react-router-dom";
import axios from "axios";
import Api from "../../helpers/Api";

const Dashboard = () => {
  const { slugWEEK } = useParams();
  const { slugDMY } = useParams();

  // console.log("slugWEEK: ",slugWEEK)
  // console.log("slugDMY: ",slugDMY)

  const PullDay = slugDMY.slice(0, 2);
  const PullMonth = slugDMY.slice(3, 5);
  const PullYear = slugDMY.slice(6, 10);

  // console.log("PullWEEK: ", PullDay)
  // console.log("PullMonth: ", PullMonth)
  // console.log("PullYear: ", PullYear)

  const [students, setStudents] = useState([]);
  const [checklist, setChecklist] = useState([]);

  // console.log("SLUG: ", checklist);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API}/students`);

        setStudents(res.data);
      } catch (err) {
        console.log("error: ", err);
      }
    };

    fetchData();
  }, []);

  // console.log("STUDENT: ", students)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log()
        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

        if (isSafari) {
          const PullMonth = slugDMY.slice(0, 2);
          const PullDay = slugDMY.slice(3, 5);
          const PullYear = slugDMY.slice(6, 10) - 543;
          const slugDMYForSafari = `${PullDay}-${PullMonth}-${PullYear}`
          const res = await axios.get(`https://sarp-a8dff5e6e541.herokuapp.com/api/checklist/${slugDMYForSafari}`);
          setChecklist(res.data);
        } else {
          const res = await axios.get(`https://sarp-a8dff5e6e541.herokuapp.com/api/checklist/${slugDMY}`);
          setChecklist(res.data);
        }
        // console.log("SLUG: ", checklist);
      } catch (err) {
        console.log("error: ", err);
      }
    };

    fetchData();
  }, []);

  // console.log("TEST: ", checklist);

  return (
    <>
      <div className="py-16">
        <div className="xl:w-[1170px] flex flex-wrap justify-center mx-auto">
          <div className="flex lg:w-full sm:w-full md:w-full items-center justify-center">
            <span className="text-[20px] lg:text-[28px] xl:text-[36px] text-sky-700 drop-shadow-lg font-bold flex flex-wrap lg:ml-16 xl:ml-16">
              ตารางเรียน
            </span>
            <span className="text-[20px] lg:text-[28px] xl:text-[36px] ml-4 text-sky-700 drop-shadow-lg font-bold">
              {slugWEEK}
            </span>
            <span className="text-[20px] lg:text-[28px] xl:text-[36px] ml-4 text-sky-700 drop-shadow-lg font-bold">
              ที่
            </span>
            <span className="text-[20px] lg:text-[28px] xl:text-[36px] ml-4 text-sky-700 drop-shadow-lg font-bold">{`${PullDay}/${PullMonth}/${PullYear}`}</span>
          </div>
          <div
            className={`mt-8 grid ${
              checklist.length === 1
                ? "grid-cols-1"
                : "md:grid-cols-1 xl:grid-cols-2"
            } gap-8`}
          >
            <MainList data={checklist} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
