import { useState } from "react";
import { Calendar } from "../../atom/calendar";

export const CalendarShowcase = () => {
  const [calendarValue, setCalendarValue] = useState("");
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Calendar</h3>
      <Calendar
        selected={calendarValue}
        onChange={setCalendarValue}
        placeholder="Select date"
      />
    </div>
  );
};
