import { ToggleSwitches } from "@/components/molecules/toggle-switches";
import { OptionType } from "@/types";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof ToggleSwitches> = {
  title: "Molecules/ToggleSwitches",
  component: ToggleSwitches,
  parameters: {
    layout: "centered",
    design: {
      //
    },
    docs: {
      description: {
        component: "",
      },
    },
  },
  argTypes: {
    onClick: { table: { disable: true } },
  },
};
export default meta;

type Story = StoryObj<typeof ToggleSwitches>;

export const Base: Story = {
  args: {
    options: [
      { label: "아이템1", value: 1 },
      { label: "아이템2", value: 2 },
    ],
  },
  render: function Render(args) {
    const [selected, setSelected] = useState(
      args.options[0] as OptionType<number>,
    );

    const onClickToggle = (selected: OptionType<number>) => {
      setSelected(selected);
    };

    return (
      <ToggleSwitches
        options={args.options as OptionType<number>[]}
        selected={selected}
        onClick={onClickToggle}
      />
    );
  },
};
