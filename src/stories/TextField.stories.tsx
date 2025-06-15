import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { TextField } from "@/components/molecules/text-field";
import { useArgs } from "storybook/internal/preview-api";

const meta: Meta<typeof TextField> = {
  // 스토리북에 올릴 storybook 폴더 계층
  title: "Molecules/TextField",
  // 컴포넌트 연동
  component: TextField,
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

type Story = StoryObj<typeof TextField>;

export const Base: Story = {
  args: {
    value: "",
    error: false,
    required: true,
    label: "이름",
    helperText: "가이드 텍스트 입니다.",
    placeholder: "이름을 입력해 주세요.",
    defaultValue: "",
    direction: "col",
    onChange: fn(),
  },
  render: function Render(args) {
    const [{ value }, setValue] = useArgs();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue({ value: event.target.value });

      if (args.onChange) {
        args.onChange(event);
      }
    };

    return <TextField {...args} value={value} onChange={onChange} />;
  },
};
