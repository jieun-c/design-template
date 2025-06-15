import type { Meta, StoryObj } from "@storybook/react";
import { Dropbox } from "@/components/molecules/dropbox";
import { useArgs } from "@storybook/preview-api";

const meta: Meta<typeof Dropbox> = {
  // 스토리북에 올릴 storybook 폴더 계층
  title: "Molecules/Dropbox",
  // 컴포넌트 연동
  component: Dropbox,
  parameters: {
    layout: "centered",
    // design: {
    //   // 컴포넌트에 대한 개별 URL
    //   url: "",
    // },
    docs: {
      description: {
        component: "",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Dropbox>;

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
    required: true,
    label: "이름",
    helperText: "가이드 텍스트 입니다.",
    direction: "col",
    optionList: optionList,
    selected: optionList[0],
  },
  render: function Render(args) {
    const [{ selected }, setSelected] = useArgs();

    const onChange = (selected: { label: string; value: string | number }) => {
      setSelected({ selected });
    };

    return <Dropbox {...args} selected={selected} onChange={onChange} />;
  },
};
