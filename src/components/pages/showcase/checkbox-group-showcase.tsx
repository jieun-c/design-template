import { useState } from "react";
import { CheckboxGroup } from "../../organisms/checkbox-group";

export const CheckboxGroupShowcase = () => {
  const checkboxOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];
  const [checkboxValues, setCheckboxValues] = useState<string[]>([]);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Checkbox Group</h3>
      <CheckboxGroup
        title="체크박스 그룹"
        options={checkboxOptions}
        values={checkboxValues}
        onChange={setCheckboxValues}
      />
    </div>
  );
};
