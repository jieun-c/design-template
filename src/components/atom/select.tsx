import { useEffect, useState } from "react";
import { selectVariants } from "./variants/select";
import ArrowIcon from "@/assets/icons/icon-select.svg";
import { OptionType } from "@/types";
import { cn } from "@/lib/utils.ts";

export type Props = {
  error?: boolean;
  disabled?: boolean;
  optionList: OptionType<string | number>[];
  selected?: OptionType<string | number>;
  className?: string | undefined;
  onChange: (selected: OptionType<string | number>) => void;
};

/** Dropdown UI 커스텀을 위해 기본 Select 에서 Button 형식의 Dropdown 으로 제작. */
export const Select = ({
  error = false,
  disabled = false,
  optionList = [],
  selected,
  className,
  onChange,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 외부 클릭 감지
    const handleClickOutside = (event: MouseEvent) => {
      if (!event) return;

      const target = event.target as HTMLElement;
      const dropdownElement = target.closest(".dropdown");
      const buttonElement = target.closest("button");

      if (!dropdownElement && !buttonElement) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // width 값을 상위 컴포넌트에 위임.
  return (
    <div className="flex flex-col gap-2.5 flex-1">
      <div className="relative w-full">
        <button
          type="button"
          className={`relative w-full h-10 ${selectVariants({
            error,
            disabled,
            haveValue: !!selected?.value,
            isOpen,
          })} flex justify-between gap-1 ${!disabled ? "cursor-pointer" : ""} ${cn(className)}`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <p className="break-all truncate">{selected?.label}</p>
          <img src={ArrowIcon} alt="arrow" />
        </button>

        {!disabled && (
          <>
            {isOpen && (
              <ul className="dropdown absolute overflow-y-scroll w-full bg-white my-2 flex flex-col outline outline-slate-200 z-30 text-sm">
                {optionList.map((option, index) => {
                  if (!option.value) return null;

                  return (
                    <li
                      key={`${option.label}-${option.value}-${index}`}
                      className={`py-2.5 pl-3 pr-5 break-all truncate hover:bg-slate-50 cursor-pointer`}
                      value={option.value as string}
                      onClick={() => {
                        onChange(option);
                        setIsOpen(false);
                      }}
                    >
                      {option.label}
                    </li>
                  );
                })}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
};
