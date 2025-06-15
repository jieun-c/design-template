import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Calendar } from "@/components/atom/calendar";
import { useState } from "react";

const meta: Meta<typeof Calendar> = {
  // 스토리북에 올릴 storybook 폴더 계층
  title: "Atom/Calendar",
  // 컴포넌트 연동
  component: Calendar,
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

type Story = StoryObj<typeof Calendar>;
export const Base: Story = {
  args: {
    error: false,
    placeholder: "등록일",
    selected: "2025-01-01",
    onChange: fn(),
  },
  render: function Render(args) {
    const [state, setState] = useState(args.selected);

    return (
      <Calendar
        {...args}
        selected={state}
        onChange={(date: string) => {
          setState(date);
        }}
      />
    );
  },
};
