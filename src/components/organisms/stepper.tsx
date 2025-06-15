type StepperProps = {
  currentStep: number;
  steps: { label: string; value: number }[];
};

export const Stepper = ({ currentStep, steps }: StepperProps) => {
  const getStepStyle = (step: number) => {
    if (step < currentStep) {
      return {
        text: "text-gray-80",
        span: "bg-primary-50 text-white border-transparent",
        after: "after:bg-gray-30",
      };
    } else if (step === currentStep) {
      return {
        text: "text-gray-80",
        span: "bg-primary-50 text-white border-transparent",
        after: "after:bg-gray-30",
      };
    } else {
      return {
        text: "text-gray-80",
        span: "bg-white text-gray-50 border-gray-30",
        after: "after:bg-gray-30",
      };
    }
  };

  return (
    <ol className="flex items-center w-full">
      {steps.map((step, index) => {
        const style = getStepStyle(step.value);
        const isLastStep = index === steps.length - 1;
        return (
          <li
            key={`step-${step.value}`}
            className={`flex relative ${style.text} ${
              !isLastStep
                ? `w-full after:content-[''] after:w-full after:h-0.25 ${style.after} after:inline-block after:absolute md:after:top-3 after:top-3 after:left-4`
                : ""
            }`}
          >
            <div className="block whitespace-nowrap z-10">
              <span
                className={`w-6 h-6 border-2 rounded-full flex justify-center items-center mx-auto mb-1 text-xs md:w-6 md:h-6 ${style.span}`}
              >
                {step.value}
              </span>
              <p className={`text-center text-xs md:text-sm ${style.text}`}>
                {step.label}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
};
