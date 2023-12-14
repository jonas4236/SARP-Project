import React, { useEffect, useState } from "react";
import MainList from "./MainList";
import { useParams } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const { slugWEEK } = useParams();
  const { slugDMY } = useParams();

  const [slWeek, setSlWeek] = useState(null);

  const [students, setStudents] = useState([]);
  const [checklist, setChecklist] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        var isSafari = /^((?!chrome|android).)*safari/i.test(
          navigator.userAgent
        );
        if (isSafari) {
          const PullMonth = slugDMY.slice(0, 2);
          const PullDay = slugDMY.slice(3, 5);
          const PullYear = slugDMY.slice(6, 10) - 543;
          const ForSlugDMY = `${PullDay}-${PullMonth}-${PullYear}`;
          const slugDMYForSafari = `${PullDay}-${PullMonth}-${PullYear}`;
          const res = await axios.get(
            `${import.meta.env.VITE_API}/checklist/${slugDMYForSafari}`
          );
          setChecklist(res.data);
          setSlWeek(ForSlugDMY);
        } else {
          const res = await axios.get(
            `${import.meta.env.VITE_API}/checklist/${slugDMY}`
          );
          setChecklist(res.data);
          setSlWeek(slugDMY);
        }
      } catch (err) {
        console.log("error: ", err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="py-16">
        <div className="xl:w-[1170px] flex flex-wrap justify-center mx-auto">
          <div className="flex lg:w-full sm:w-full md:w-full items-center justify-between py-4">
            <span className="text-[36px]">สถานะการเข้าเรียน</span>
            <span className="text-[36px] text-sky-500 font-bold">{slWeek}</span>
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
