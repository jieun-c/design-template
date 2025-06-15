import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { TextFieldArea } from "@/components/molecules/text-field-area";
import { useArgs } from "storybook/internal/preview-api";

const meta: Meta<typeof TextFieldArea> = {
  // 스토리북에 올릴 storybook 폴더 계층
  title: "Molecules/TextFieldArea",
  // 컴포넌트 연동
  component: TextFieldArea,
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

type Story = StoryObj<typeof TextFieldArea>;

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

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue({ value: event.target.value });

      if (args.onChange) {
        args.onChange(event);
      }
    };

    return <TextFieldArea {...args} value={value} onChange={onChange} />;
  },
};
