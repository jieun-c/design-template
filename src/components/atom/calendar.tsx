import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarIcon } from "@/assets/icons/icon-calendar";
import { ko, enUS } from "date-fns/locale";
import { calendarVariants } from "./variants/calendar";
import { format } from "date-fns";
import { useMemo } from "react";

type Props = {
  selected: string;
  onChange: (date: string) => void;
  maxDate?: string;
  minDate?: string;
  error?: boolean;
  placeholder?: string;
  locale?: string;
  readOnly?: boolean;
  disabled?: boolean;
};

export const Calendar = ({
  selected,
  onChange,
  maxDate,
  minDate,
  placeholder = "",
  error = false,
  locale = "ko",
  readOnly = false,
  disabled = false,
}: Props) => {
  const selectedLocale = useMemo(() => {
    return !locale || locale === "ko" ? ko : enUS;
  }, [locale]);

  const selectedDateFormat = useMemo(() => {
    return !locale || locale === "ko" ? "yyyy-MM-dd" : "MM/dd/yyyy";
  }, [locale]);

  const handleChange = (date: Date | null) => {
    if (!date) return;
    const formattedDate = format(date, "yyyy-MM-dd");
    onChange(selected === formattedDate ? "" : formattedDate);
  };

  return (
    <>
      <div
        className={calendarVariants({ error, disabled, haveValue: !!selected })}
      >
        <DatePicker
          dateFormat={selectedDateFormat}
          onChange={handleChange}
          selected={selected ? new Date(selected) : null}
          {...(maxDate && { maxDate: new Date(maxDate) })}
          {...(minDate && { minDate: new Date(minDate) })}
          placeholderText={placeholder}
          wrapperClassName="w-full"
          className={`flex items-center py-2 pl-3 w-full h-10 text-sm text-left`}
          readOnly={readOnly}
          locale={selectedLocale}
          disabled={disabled}
        />

        <div className="absolute top-1.5 right-1.5">
          <CalendarIcon />
        </div>
      </div>
    </>
  );
};
