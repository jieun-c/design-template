// stories/Radio.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Radio } from "@/components/molecules/radio";

const meta: Meta<typeof Radio> = {
  title: "Molecules/Radio",
  component: Radio,
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
    checked: { table: { disable: true } },
    onChange: { table: { disable: true } },
    id: { table: { disable: true } },
    value: { table: { disable: true } },
    name: { table: { disable: true } },
    className: { table: { disable: true } },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "단일 라디오 버튼 컴포넌트입니다.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Single: Story = {
  args: {
    name: "role",
    label: "운영자",
    value: "admin",
    disabled: false,
  },
  render: (args) => {
    const RadioExample = () => {
      const [selected, setSelected] = useState<string | number>("");

      return (
        <Radio
          {...args}
          checked={selected === args.value}
          onChange={setSelected}
        />
      );
    };

    return <RadioExample />;
  },
};
