import { useState } from "react";
import { Tab } from "@headlessui/react";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let [categories] = useState({
    หน้าหลัก: [
      {
        id: 1,
        link: "/",
      },
    ],
    ตารางเรียน: [
      {
        id: 2,
        link: "/schedule",
      },
    ],
    ข้อมูลการมาเรียน: [
      {
        id: 3,
        link: "/students/data",
      },
    ],
    เกี่ยวกับ: [
      {
        id: 4,
        link: "/about",
      },
    ],
  });

  return (
    <div className="w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-3 rounded-xl bg-[#7676801F] p-1">
          {Object.keys(categories).map((category) => (
            <Link
              to={categories[category][0].link}
              key={categories[category][0].id}
            >
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg px-[50px] py-2 text-sm font-medium leading-5",
                    "focus:outline-none",
                    selected
                      ? "bg-white text-blue-700"
                      : "text-black hover:bg-white/[0.12]"
                  )
                }
              >
                <div className="w-max">
                  <span>{category}</span>
                </div>
              </Tab>
            </Link>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
