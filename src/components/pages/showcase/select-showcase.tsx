import { useState } from "react";
import { Select } from "../../atom/select";
import { OptionType } from "@/types";

export const SelectShowcase = () => {
  const optionList = [
    { label: "선택", value: "" },
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
  ];

  const [selected, setSelected] = useState<OptionType<string | number>>(
    optionList[0],
  );

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Select</h3>
      <Select
        optionList={optionList}
        selected={selected}
        onChange={setSelected}
      />
    </div>
  );
};
