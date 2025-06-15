import { Calendar } from "./calendar";

type CalendarProps = {
  selected: string;
  onChange: (date: string) => void;
  maxDate?: string;
  minDate?: string;
  error?: boolean;
  placeholder?: string;
  locale?: string;
  disabled?: boolean;
};

type Props = {
  startProps: CalendarProps;
  endProps: CalendarProps;
};

export const CalendarRange = ({ startProps, endProps }: Props) => {
  return (
    <>
      <div className="flex gap-3 items-center">
        <Calendar
          // 초기값: 시작일의 maxDate 는 End 이후일 수 없다.
          {...(!startProps.maxDate && {
            maxDate: endProps.selected,
          })}
          {...startProps}
        />
        <p className="text-slate-500">-</p>
        <Calendar
          // 초기값 : 종료일의 minDate 는 Start 이전일 수 없다.
          {...(!endProps.minDate && {
            minDate: startProps.selected,
          })}
          {...endProps}
        />
      </div>
    </>
  );
};
