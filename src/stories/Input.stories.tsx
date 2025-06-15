import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input } from "@/components/atom/input";
import { useArgs } from "@storybook/preview-api";

const meta: Meta<typeof Input> = {
  // 스토리북에 올릴 storybook 폴더 계층
  title: "Atom/Input",
  // 컴포넌트 연동
  component: Input,
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

type Story = StoryObj<typeof Input>;

export const Base: Story = {
  args: {
    value: "",
    placeholder: "텍스트를 입력해 주세요.",
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

    return <Input {...args} value={value} onChange={onChange} />;
  },
};
