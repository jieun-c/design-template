import { useState } from "react";
import { Button } from "../../atom/button";
import { Checkbox } from "../../molecules/checkbox";

export const ButtonShowcase = () => {
  const [disabled, setDisabled] = useState(false);
  const [size, setSize] = useState<"small" | "medium" | "large">("medium");

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(e.target.value as "small" | "medium" | "large");
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Buttons</h3>
      <div className="flex flex-wrap gap-4">
        <Button variant="fill" color="blue" size={size} disabled={disabled}>
          Blue Button
        </Button>
        <Button variant="fill" color="base" size={size} disabled={disabled}>
          Base Button
        </Button>
        <Button variant="fill" color="red" size={size} disabled={disabled}>
          Red Button
        </Button>
        <Button
          variant="fill"
          color="lightGray"
          size={size}
          disabled={disabled}
        >
          Light Gray Button
        </Button>
        <Button variant="fill" color="ghost" size={size} disabled={disabled}>
          Ghost Button
        </Button>
        <Button variant="line" color="white" size={size} disabled={disabled}>
          White Line Button
        </Button>
        <div className="w-full pt-2 flex gap-8 items-center">
          <Checkbox
            label="Disabled"
            checked={disabled}
            onChange={setDisabled}
          />

          <div className="flex gap-2 items-center">
            <select id="size" value={size} onChange={handleSizeChange}>
              <option value="">Size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
