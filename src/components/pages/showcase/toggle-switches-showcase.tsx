import { useState } from "react";
import { ToggleSwitches } from "../../molecules/toggle-switches";

export const ToggleSwitchesShowcase = () => {
  const toggleOptions = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];
  const [toggleValue, setToggleValue] = useState(toggleOptions[0]);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">ToggleSwitches</h3>
      <div className="space-y-4">
        <ToggleSwitches
          options={toggleOptions}
          selected={toggleValue}
          onClick={setToggleValue}
        />
      </div>
    </div>
  );
};
