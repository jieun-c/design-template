import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Textarea } from "@/components/atom/textarea";
import { useArgs } from "storybook/internal/preview-api";

const meta: Meta<typeof Textarea> = {
  // 스토리북에 올릴 storybook 폴더 계층
  title: "Atom/Textarea",
  // 컴포넌트 연동
  component: Textarea,
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
  argTypes: {
    height: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Base: Story = {
  args: {
    value: "",
    placeholder: "텍스트를 입력해 주세요.",
    onChange: fn(),
  },
  render: function Render(args) {
    const [{ value }, setValue] = useArgs();

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue({ value: event.target.value });
    };

    return <Textarea {...args} value={value} onChange={onChange} />;
  },
};
