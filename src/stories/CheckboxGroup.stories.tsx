import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { CheckboxGroup } from "@/components/organisms/checkbox-group";
import { OptionType } from "@/types";

const meta: Meta<typeof CheckboxGroup<string>> = {
  title: "Organisms/CheckboxGroup",
  component: CheckboxGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "여러 개의 체크박스를 그룹으로 묶어 선택할 수 있는 컴포넌트입니다.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup<string>>;

export const Base: Story = {
  args: {
    options: [
      { label: "운동", value: "운동" },
      { label: "독서", value: "독서" },
      { label: "음악", value: "음악" },
      { label: "영화", value: "영화" },
      { label: "여행", value: "여행" },
      { label: "요리", value: "요리" },
      { label: "사진", value: "사진" },
      { label: "게임", value: "게임" },
      { label: "프로그래밍", value: "프로그래밍" },
    ] as OptionType<string>[],
    values: [],
    onChange: () => {},
    title: "취미",
    titlePosition: "col",
  },

  render: (args) => {
    const CheckboxGroupExample = () => {
      const [selected, setSelected] = useState<string[]>([]);
      const [etcInput, setEtcInput] = useState("");

      useEffect(() => {
        console.log(selected, "선택된값들");
        console.log(etcInput, "etcInput");
      }, [selected, etcInput]);

      return (
        <div className="flex flex-col gap-4">
          <CheckboxGroup<string>
            {...args}
            values={selected}
            onChange={setSelected}
            etc={{
              value: etcInput,
              onEtcInputChange: setEtcInput,
              label: "기타",
              isChecked: selected.includes("기타"),
              onChecked: (checked) => {
                if (checked) {
                  setSelected([...selected, "기타"]);
                } else {
                  setSelected(selected.filter((v) => v !== "기타"));
                }
              },
            }}
          />
        </div>
      );
    };

    return <CheckboxGroupExample />;
  },
};
