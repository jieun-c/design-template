import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Select } from "@/components/atom/select";
import { useArgs } from "@storybook/preview-api";

const meta: Meta<typeof Select> = {
  // 스토리북에 올릴 storybook 폴더 계층
  title: "Atom/Select",
  // 컴포넌트 연동
  component: Select,
  parameters: {
    layout: "centered",
    design: {
      // 컴포넌트에 대한 개별 URL
      url: "",
    },
    docs: {
      description: {
        component: "",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Select>;

const optionList = [
  { label: "선택", value: "" },
  {
    label: "Option Option Option Option Option OptionOption1",
    value: "option1",
  },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
  { label: "Option 4", value: "option4" },
  { label: "Option 5", value: "option5" },
];

export const Base: Story = {
  args: {
    error: false,
    disabled: false,
    optionList: optionList,
    selected: optionList[0],
    onChange: fn(),
  },
  render: function Render(args) {
    const [{ selected }, setSelected] = useArgs();

    const onChange = (selected: { label: string; value: string | number }) => {
      setSelected({ selected });
    };

    return (
      <div className="w-[200px]">
        <Select {...args} selected={selected} onChange={onChange} />
      </div>
    );
  },
};
