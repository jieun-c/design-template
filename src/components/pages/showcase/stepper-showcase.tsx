import { useState } from "react";
import { Button } from "../../atom/button";
import { Stepper } from "../../organisms/stepper";

export const StepperShowcase = () => {
  const steps = [
    { label: "Step 1", value: 1 },
    { label: "Step 2", value: 2 },
    { label: "Step 3", value: 3 },
  ];
  const [currentStep, setCurrentStep] = useState(steps[0].value);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Stepper</h3>
      <Stepper steps={steps} currentStep={currentStep} />
      <Button
        onClick={() =>
          setCurrentStep((prev) => (prev === steps.length ? 0 : prev + 1))
        }
        size="small"
      >
        Next
      </Button>
    </div>
  );
};
