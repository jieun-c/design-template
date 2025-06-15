import { useState } from "react";
import { Textarea } from "../../atom/textarea";

export const TextareaShowcase = () => {
  const [value, setValue] = useState("");

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Textarea</h3>
      <Textarea
        placeholder="Textarea"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
