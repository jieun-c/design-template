import type { Meta, StoryObj } from "@storybook/react";
import Modal from "@/components/organisms/modal/modal";
import { Button } from "@/components/atom/button";
import { useState } from "react";

const meta: Meta = {
  title: "Organisms/Modal",
  component: Modal,
  argTypes: {
    title: { control: "text" },
    onConfirm: { action: "onConfirm" },
    onCancel: { action: "onCancel" },
  },
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

type Story = StoryObj<typeof Modal>;

export const Base: Story = {
  args: {
    title: "모달 타이틀",
  },

  render: function Render(args) {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>모달 열기</Button>
        <Modal
          title={args.title}
          component={<div>샘플 모달 컨텐츠입니다.</div>}
          isOpen={isOpen}
          width="w-[600px]"
          closeModal={() => setIsOpen(false)}
        />
      </>
    );
  },
};
