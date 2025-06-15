import { cn } from "@/lib/utils";

type Props = {
  required?: boolean;
  label?: string;
  disabled?: boolean;
  labelMinWidth?: string;
  className?: string;
};

export const Label = ({
  required,
  label,
  disabled,
  labelMinWidth,
  className = "",
}: Props) => {
  return (
    <div
      className={cn(
        "flex flex-row gap-1 items-center",
        labelMinWidth,
        className,
      )}
    >
      {required && (
        <p
          className={`text-sm font-medium text-left ${
            !disabled ? "text-red-600" : "text-slate-400"
          }`}
        >
          *
        </p>
      )}
      <p
        className={`text-sm font-medium text-left ${
          !disabled ? "text-slate-700" : "text-slate-400"
        }`}
      >
        {label}
      </p>
    </div>
  );
};
