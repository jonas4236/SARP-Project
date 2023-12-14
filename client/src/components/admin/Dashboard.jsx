import React, { useEffect, useState } from "react";
import MainList from "./MainList";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FaArrowRightLong } from "react-icons/fa6";

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
          <div className="flex flex-col lg:w-full sm:w-full md:w-full items-center justify-between py-4">
            <span className="text-[24px] lg:text-[36px] xl:text-[36px]">สถานะการเข้าเรียน</span>
            <span className="text-[24px] lg:text-[36px] xl:text-[36px] text-sky-500 font-bold">{slWeek}</span>
          </div>
          <div
            className={`w-full xl:w-max mt-8 grid ${
              checklist.length === 1
                ? "grid-cols-1"
                : "md:grid-cols-1 xl:grid-cols-2"
            } gap-8`}
          >
            <MainList data={checklist} />
          </div>
          </div>
        </div>
          <div className="mt-16">
            <Link to={"/sitemap"}>
              <div className="mt-8 flex w-full xl:w-[1170px] mx-auto justify-center items-center">
                <span className="text-blue-600 font-medium">
                  เรียกดูแผนผังเว็ปไซต์{" "}
                </span>
                <span className="text-blue-600 ml-2">
                  <FaArrowRightLong />
                </span>
              </div>
            </Link>
      </div>
    </>
  );
};

export default Dashboard;
