import { cn } from "@/lib/utils";
import { OptionType } from "@/types";

type Props<T> = {
  options: OptionType<T>[];
  selected?: OptionType<T>;
  onClick: (selected: OptionType<T>) => void;
};

export const ToggleSwitches = <T,>({
  options,
  selected,
  onClick,
}: Props<T>) => {
  return (
    <div className="flex items-center p-1 rounded-lg bg-gray-10">
      {options.map((item, idx) => {
        return (
          <div
            key={`toggle-switches-${item.value}-${idx}`}
            className={cn(
              "flex items-center px-2 py-1.5 rounded-md cursor-pointer",
              selected?.value === item.value
                ? "text-gray-70 bg-white shadow-md"
                : "text-gray-50",
            )}
            onClick={() => onClick(item)}
          >
            <p className="text-xs font-semibold text-center">{item.label}</p>
          </div>
        );
      })}
    </div>
  );
};
