import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@/components/molecules/text-field";
import { TextFieldNumber } from "@/components/molecules/text-field-number";
import { InputButton } from "@/components/molecules/input-button";
import { InputSearch } from "@/components/molecules/input-search";
import { CalendarField } from "@/components/molecules/calendar-field";
import { CalendarRangeField } from "@/components/molecules/calendar-range-field";
import { Checkbox } from "@/components/molecules/checkbox";
import { Radio } from "@/components/molecules/radio";
import { Button } from "@/components/atom/button";

export const FormFieldShowcase = () => {
  const [calendarRangeValue, setCalendarRangeValue] = useState<{
    start: string;
    end: string;
  }>({ start: "", end: "" });
  const [selected, setSelected] = useState<{ label: string; value: string }>();
  const [searchValue, setSearchValue] = useState("");

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    clearErrors,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      id: "",
      name: "",
      phone: "",
      search: "",
      date: "",
      startDate: "",
      endDate: "",
      agree1: "1",
      agree2: false,
    },
  });

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Form Fields</h3>
      <div className="space-y-4">
        <Controller
          control={control}
          name="id"
          render={({ field }) => (
            <InputButton
              inputProps={{
                ...field,
                onChange: field.onChange,
                placeholder: "아이디를 입력해주세요.",
                error: !!errors.id,
              }}
              buttonProps={{
                label: "중복확인",
                onClick: () => {},
              }}
              label="아이디"
              helperText="아이디를 입력해주세요."
            />
          )}
        />
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <TextField
              {...field}
              onChange={field.onChange}
              label="이름"
              placeholder="이름을 입력해주세요."
              helperText="이름을 입력해주세요."
            />
          )}
        />
        <Controller
          control={control}
          name="phone"
          render={({ field }) => (
            <TextFieldNumber
              {...field}
              onChange={field.onChange}
              label="번호"
              placeholder="번호를 입력해주세요."
              helperText="숫자만 입력해주세요."
            />
          )}
        />

        <Controller
          control={control}
          name="search"
          rules={{
            validate: () => {
              if (!selected) {
                return "검색어를 선택해주세요.";
              }
              return true;
            },
          }}
          render={() => (
            <InputSearch
              label="검색"
              placeholder="검색어를 입력해주세요."
              optionList={[
                { label: "Option1", value: "1" },
                { label: "Option2", value: "2" },
                { label: "Option3", value: "3" },
              ].filter((option) =>
                option.label.toLowerCase().includes(searchValue.toLowerCase()),
              )}
              onChangeValue={(value) => {
                setSearchValue(value);
              }}
              onChangeSelect={(selected) => {
                setSelected(selected);
                clearErrors("search");
              }}
              selected={selected}
              helperText={
                errors.search?.message || "검색어: (Option 1, Option 2 ...)"
              }
              error={!!errors.search}
              required
            />
          )}
        />

        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <CalendarField
              label="날짜"
              placeholder="날짜를 선택해주세요."
              selected={field.value}
              onChange={field.onChange}
              helperText="날짜를 선택해주세요."
            />
          )}
        />

        <CalendarRangeField
          label="기간"
          startProps={{
            placeholder: "시작일",
            selected: calendarRangeValue.start,
            onChange: (date) => {
              setCalendarRangeValue((prev) => ({ ...prev, start: date }));
              setValue("startDate", date);
            },
          }}
          endProps={{
            placeholder: "종료일",
            selected: calendarRangeValue.end,
            onChange: (date) => {
              setCalendarRangeValue((prev) => ({ ...prev, end: date }));
              setValue("endDate", date);
            },
          }}
          helperText="기간을 선택해주세요."
        />

        <Controller
          control={control}
          name="agree1"
          render={({ field }) => (
            <Radio
              label="동의여부(필수)"
              name="agree2"
              value="1"
              checked={field.value === "1"}
              onChange={field.onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="agree2"
          render={({ field }) => (
            <Checkbox
              label="동의여부(선택)"
              checked={field.value}
              onChange={field.onChange}
            />
          )}
        />

        <Button
          type="button"
          className="w-full"
          onClick={() => {
            handleSubmit(
              (data) => {
                console.log(data);
              },
              (error) => {
                console.log(error);
              },
            )();
          }}
        >
          제출
        </Button>

        {isSubmitSuccessful && (
          <div className="flex flex-col gap-2 p-2 bg-gray-100 rounded-md">
            <p className="text-sm bg-orange-10 p-2">제출된 값</p>
            <pre>{JSON.stringify(watch(), null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};
