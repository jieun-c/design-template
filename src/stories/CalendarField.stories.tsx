import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { CalendarField } from "@/components/molecules/calendar-field";
import { useState } from "react";

const meta: Meta<typeof CalendarField> = {
  // 스토리북에 올릴 storybook 폴더 계층
  title: "Molecules/CalendarField",
  // 컴포넌트 연동
  component: CalendarField,
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
    onChange: { table: { disable: true } },
    selected: { table: { disable: true } },
  },
};
export default meta;

type Story = StoryObj<typeof CalendarField>;
export const Base: Story = {
  args: {
    error: false,
    required: true,
    label: "등록일",
    helperText: "가이드 텍스트 입니다.",
    direction: "col",
    placeholder: "등록일",
    selected: "",
    onChange: fn(),
  },
  render: function Render(args) {
    const [state, setState] = useState(args.selected);

    return (
      <CalendarField
        {...args}
        selected={state}
        onChange={(date: string) => {
          setState(date);
          args.onChange(date);
        }}
      />
    );
  },
};
