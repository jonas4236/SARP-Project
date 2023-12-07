import React, { useEffect } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";

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

    // const days = clickedDate.toISOString().slice(0, 2);

    window.location.href = `/schedule/${dayOfWeek}/${day}-${month}-${year}`;
    // window.location.href = `/schedule/${dayOfWeek}/${year}/${month}/${day}`;

    // console.log("Day: ", day);
    // console.log("month: ", month);
    // console.log("year: ", year);

    const DataDate = `${year}/${month}/${day}`;

    // console.log("DataDate: ", DataDate)

    // console.log("TEST: ", dayOfWeek);
    // console.log("TEST2: ", formattedDate);

    // console.log("days: ", days)
  };

  return (
    <div className="xl:w-[1170px] mx-auto my-16">
      <div className="bg-[#F5F5F5] p-8 rounded-lg">
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
          locale="th" // Set the locale to Thai
        />
      </div>
    </div>
  );
}

export default calendar;
