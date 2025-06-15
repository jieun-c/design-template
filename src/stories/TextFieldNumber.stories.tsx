import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { useArgs } from "storybook/internal/preview-api";
import { TextFieldNumber } from "@/components/molecules/text-field-number";

const meta: Meta<typeof TextFieldNumber> = {
  title: "Molecules/TextFieldNumber",
  component: TextFieldNumber,
  parameters: {
    layout: "centered",
    design: {
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

type Story = StoryObj<typeof TextFieldNumber>;

export const Base: Story = {
  args: {
    value: "",
    error: false,
    required: true,
    label: "번호",
    helperText: "가이드 텍스트 입니다.",
    placeholder: "번호를 입력해 주세요.",
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

    return <TextFieldNumber {...args} value={value} onChange={onChange} />;
  },
};
