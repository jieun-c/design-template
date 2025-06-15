import { useState } from "react";
import { RadioGroup } from "../../organisms/radio-group";

export const RadioGroupShowcase = () => {
  const radioOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];
  const [radioValue, setRadioValue] = useState(radioOptions[0].value);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Radio Group</h3>
      <RadioGroup
        title="라디오 그룹"
        options={radioOptions}
        value={radioValue}
        onChange={(value) => setRadioValue(value as string)}
        direction="col"
      />
    </div>
  );
};
