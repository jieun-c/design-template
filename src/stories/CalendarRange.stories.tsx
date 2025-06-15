import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { useState } from "react";
import { CalendarRange } from "@/components/atom/calendar-range";

const meta: Meta<typeof CalendarRange> = {
  // 스토리북에 올릴 storybook 폴더 계층
  title: "Atom/CalendarRange",
  // 컴포넌트 연동
  component: CalendarRange,
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

type Story = StoryObj<typeof CalendarRange>;
export const Base: Story = {
  args: {
    startProps: {
      error: false,
      placeholder: "시작일",
      selected: "2025-01-01",
      onChange: fn(),
      locale: "ko",
    },
    endProps: {
      error: false,
      placeholder: "종료일",
      selected: "2025-01-01",
      onChange: fn(),
      locale: "ko",
    },
  },
  render: function Render(args) {
    const [startDate, setStartDate] = useState(args.startProps.selected);
    const [endDate, setEndDate] = useState(args.endProps.selected);

    return (
      <CalendarRange
        startProps={{
          ...args.startProps,
          selected: startDate,
          onChange: (date: string) => {
            setStartDate(date);
          },
        }}
        endProps={{
          ...args.endProps,
          selected: endDate,
          onChange: (date: string) => {
            setEndDate(date);
          },
        }}
      />
    );
  },
};
