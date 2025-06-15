import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { useState } from "react";
import { CalendarRangeField } from "@/components/molecules/calendar-range-field";

const meta: Meta<typeof CalendarRangeField> = {
  // 스토리북에 올릴 storybook 폴더 계층
  title: "Molecules/CalendarRangeField",
  // 컴포넌트 연동
  component: CalendarRangeField,
  parameters: {
    layout: "centered",
    // design: {
    //   // 컴포넌트에 대한 개별 URL
    // },
    docs: {
      description: {
        component: "react-datepicker",
      },
    },
  },
  argTypes: {
    startProps: {
      onChange: { table: { disable: true } },
      selected: { table: { disable: true } },
    },
    endProps: {
      onChange: { table: { disable: true } },
      selected: { table: { disable: true } },
    },
  },
};
export default meta;

type Story = StoryObj<typeof CalendarRangeField>;
export const Base: Story = {
  args: {
    error: false,
    disabled: false,
    required: true,
    label: "기간",
    helperText: "가이드 텍스트 입니다.",
    direction: "col",
    startProps: {
      placeholder: "시작일",
      selected: "",
      onChange: fn(),
      locale: "ko",
    },
    endProps: {
      placeholder: "종료일",
      selected: "",
      onChange: fn(),
      locale: "ko",
    },
  },
  render: function Render(args) {
    const [startDate, setStartDate] = useState(args.startProps.selected);
    const [endDate, setEndDate] = useState(args.endProps.selected);

    return (
      <CalendarRangeField
        {...args}
        startProps={{
          ...args.startProps,
          ...(args.error && { error: args.error }),
          ...(args.disabled && { disabled: args.disabled }),
          selected: startDate,
          onChange: (date: string) => {
            setStartDate(date);
          },
        }}
        endProps={{
          ...args.endProps,
          ...(args.error && { error: args.error }),
          ...(args.disabled && { disabled: args.disabled }),
          selected: endDate,
          onChange: (date: string) => {
            setEndDate(date);
          },
        }}
      />
    );
  },
};
