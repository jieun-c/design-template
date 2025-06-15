// stories/RadioGroup.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { RadioGroup } from "@/components/organisms/radio-group";

const meta: Meta<typeof RadioGroup> = {
  title: "Organisms/RadioGroup",
  component: RadioGroup,
  argTypes: {
    direction: {
      control: "radio",
      options: ["row", "col"],
      description: "라디오 버튼 나열 방향",
      defaultValue: "row",
    },
    onChange: { table: { disable: true } },
    value: { table: { disable: true } },
    options: { table: { disable: true } },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "라디오 버튼들을 묶는 그룹 컴포넌트입니다.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Base: Story = {
  args: {
    direction: "row",
    options: [
      { value: "admin", label: "운영자" },
      { value: "subAdmin", label: "서브운영자" },
      { value: "user", label: "사용자" },
    ],
  },
  render: (args) => {
    const RadioGroupExample = () => {
      const [selected, setSelected] = useState<string | number>("admin");

      return <RadioGroup {...args} value={selected} onChange={setSelected} />;
    };

    return <RadioGroupExample />;
  },
};
