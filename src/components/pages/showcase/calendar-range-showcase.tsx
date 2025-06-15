import { useState } from "react";
import { CalendarRange } from "../../atom/calendar-range";

export const CalendarRangeShowcase = () => {
  const [calendarRangeValue, setCalendarRangeValue] = useState<{
    start: string;
    end: string;
  }>({ start: "", end: "" });
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Calendar Range</h3>
      <CalendarRange
        startProps={{
          placeholder: "Start date",
          selected: calendarRangeValue.start,
          onChange: (date) =>
            setCalendarRangeValue((prev) => ({ ...prev, start: date })),
        }}
        endProps={{
          placeholder: "End date",
          selected: calendarRangeValue.end,
          onChange: (date) =>
            setCalendarRangeValue((prev) => ({ ...prev, end: date })),
        }}
      />
    </div>
  );
};
