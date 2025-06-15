import type { Meta, StoryObj } from "@storybook/react";
import { InputButton } from "@/components/molecules/input-button";
import { useState } from "react";

const meta: Meta<typeof InputButton> = {
  // 스토리북에 올릴 storybook 폴더 계층
  title: "Molecules/InputButton",
  // 컴포넌트 연동
  component: InputButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "",
      },
    },
  },
  argTypes: {
    // onClick: { table: { disable: true } },
    // onChange: { table: { disable: true } },
  },
};
export default meta;

type Story = StoryObj<typeof InputButton>;

export const Base: Story = {
  args: {
    label: "아이디",
    helperText: " ",
    required: true,
    labelMinWidth: "max-w-[100px]",
    direction: "col",
    inputProps: {
      error: false,
      disabled: false,
      placeholder: "아이디를 입력해 주세요.",
    },
    buttonProps: {
      label: "중복확인",
      disabled: false,
      color: "blue",
    },
  },
  render: function Render(args) {
    const [value, setValue] = useState("");

    const onClick = () => {
      alert("중복확인");
    };

    const onChange = (event: any) => {
      setValue(event.target.value);
    };

    return (
      <InputButton
        {...{
          ...args,
          inputProps: { ...args.inputProps, value, onChange },
          buttonProps: { ...args.buttonProps, onClick },
        }}
      />
    );
  },
};
