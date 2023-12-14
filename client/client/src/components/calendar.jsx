import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import "./calendar.css"

function calendar() {
  const handleDateClick = (arg) => {
    const clickedDate = arg.date;

    const dateOptions = { day: "2-digit", month: "2-digit", year: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-TH", dateOptions).format(
      clickedDate
    );
    const dayOfWeek = clickedDate.toLocaleDateString("th-TH", {
      weekday: "long",
    });

    const day = formattedDate.slice(3, 5).replace("/", "");
    const month = formattedDate.slice(0, 2).replace("/", "");
    const year = formattedDate.slice(6, 10);

    window.location.href = `/schedule/${dayOfWeek}/${day}-${month}-${year}`;
  };

  const dayRender = (info) => {
    const today = new Date();
    const day = info.date.getDate();
    const month = info.date.getMonth();
    const year = info.date.getFullYear();

    if (
      info.date.getDate() === today.getDate() &&
      info.date.getMonth() === today.getMonth() &&
      info.date.getFullYear() === today.getFullYear()
    ) {
      info.el.classList.add("current-day"); // Add your custom class
    }
  };

  return (
    <div className="xl:w-[1170px] mx-auto px-4 my-16">
      <div className="bg-[#F5F7F8] p-8 rounded-lg">
        <Fullcalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          editable={true}
          selectable={true}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
          headerToolbar={{
            start: "today",
            center: "title",
            end: "prev,next",
          }}
          dayRender={dayRender}
          locale="th" // Set the locale to Thai
        />
      </div>
    </div>
  );
}

export default calendar;
