import type { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "@/components/organisms/stepper";

const meta: Meta<typeof Stepper> = {
  // 스토리북에 올릴 storybook 폴더 계층
  title: "Organisms/Stepper",
  // 컴포넌트 연동
  component: Stepper,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "",
      },
    },
  },
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Stepper>;

export const Base: Story = {
  args: {
    currentStep: 1,
  },
  render: function Render(args) {
    const steps = [
      { label: "Step1", value: 1 },
      { label: "Step2", value: 2 },
      { label: "Step3", value: 3 },
      { label: "Step4", value: 4 },
    ];
    return (
      <div className="w-lg">
        <Stepper {...args} steps={steps} />
      </div>
    );
  },
};
