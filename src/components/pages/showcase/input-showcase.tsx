import { useState } from "react";
import { Input } from "../../atom/input";

export const InputShowcase = () => {
  const [value, setValue] = useState("");
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Inputs</h3>
      <div className="space-y-4">
        <Input
          placeholder="Default Input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Input
          placeholder="Error Input"
          error
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Input placeholder="Readonly Input" value={value} readOnly />
        <Input placeholder="Disabled Input" value={value} disabled />
      </div>
    </div>
  );
};
