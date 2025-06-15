import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { PageSize } from "@/components/molecules/tables/page-size";
import { DEFAULT_PAGINATION } from "@/common/constants";

const meta: Meta<typeof PageSize> = {
  // 스토리북에 올릴 storybook 폴더 계층
  title: "Atom/PageSize",
  // 컴포넌트 연동
  component: PageSize,
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
  argTypes: {
    onChange: { table: { disable: true } },
  },
};
export default meta;

type Story = StoryObj<typeof PageSize>;

export const Base: Story = {
  args: {
    error: false,
    disabled: false,
    selectedValue: DEFAULT_PAGINATION.SIZE.toString(),
  },
  render: function Render(args) {
    const [{ selectedValue }, setSelectedValue] = useArgs();

    const onChange = (selected: { label: string; value: string | number }) => {
      setSelectedValue({ selectedValue: selected.value });
    };

    return (
      <div className="w-[200px]">
        <PageSize {...args} selectedValue={selectedValue} onChange={onChange} />
      </div>
    );
  },
};
