// stories/Checkbox.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "@/components/molecules/checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Molecules/Checkbox",
  component: Checkbox,
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    helperText: { control: "text" },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "기본 체크박스 컴포넌트입니다.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Base: Story = {
  args: {
    label: "동의여부(선택)",
    disabled: false,
    error: false,
    helperText: "체크박스 헬퍼텍스트입니다.",
  },

  render: (args) => {
    const CheckboxExample = () => {
      const [checked, setChecked] = useState(false);

      return <Checkbox {...args} checked={checked} onChange={setChecked} />;
    };

    return <CheckboxExample />;
  },
};
