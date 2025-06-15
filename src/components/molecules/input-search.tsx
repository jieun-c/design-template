import { useState, useCallback, useEffect } from "react";
import { Input } from "../atom/input";
import { debounce } from "lodash";
import { Label } from "../atom/label";
import { HelperText } from "../atom/helper-text";

type Props = {
  optionList?: { label: string; value: string }[];
  selected?: { label: string; value: string };
  onChangeSelect?: (selected: {
    label: string;
    value: string;
    info?: any;
  }) => void;
  onChangeValue: (value: string) => void;
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  helperText?: string;
  labelMinWidth?: string;
  placeholder?: string;
  maxLength?: number;
  direction?: "row" | "col";
};

export const InputSearch = ({
  error = false,
  disabled = false,
  required = false,
  label = "",
  helperText = "",
  labelMinWidth,
  optionList = [],
  onChangeSelect,
  onChangeValue,
  maxLength,
  placeholder,
  direction = "col",
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const debouncedonChangeValue = useCallback(
    (value: string) => {
      if (value) {
        onChangeValue(value);
      }
    },
    [onChangeValue],
  );

  useEffect(() => {
    const debounced = debounce(debouncedonChangeValue, 300);
    debounced(searchValue);

    return () => {
      debounced.cancel();
    };
  }, [searchValue, debouncedonChangeValue]);

  const handleOptionClick = (option: { label: string; value: string }) => {
    setSearchValue(option.label);
    if (onChangeSelect) {
      onChangeSelect(option);
    }
    setIsOpen(false);
  };

  return (
    <div>
      {direction === "col" && (
        <>
          <div className="flex flex-col gap-2.5">
            {label && (
              <Label
                label={label}
                required={required}
                labelMinWidth={labelMinWidth}
              />
            )}

            <div className="relative flex-1">
              <Input
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                onFocus={() => setIsOpen(true)}
                onBlur={() => setTimeout(() => setIsOpen(false), 200)}
                className="w-full"
                disabled={disabled}
                error={error}
                maxLength={maxLength}
                {...(placeholder && { placeholder })}
              />

              {!disabled && isOpen && searchValue && optionList.length > 0 && (
                <ul className="dropdown absolute overflow-y-scroll w-full bg-white my-2 flex flex-col outline outline-slate-200 z-30 text-sm">
                  {optionList.map((option, index) => {
                    if (!option.value) return null;

                    return (
                      <li
                        key={`${option.label}-${option.value}-${index}`}
                        className={`p-3 break-all truncate hover:bg-slate-50 cursor-pointer`}
                        onClick={() => handleOptionClick(option)}
                      >
                        {option.label}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            {helperText && (
              <div>
                <HelperText helperText={helperText} error={error} />
              </div>
            )}
          </div>
        </>
      )}
      {direction === "row" && (
        <>
          <div className="flex flex-row gap-3">
            {label && (
              <div className="h-10 flex items-center">
                <Label
                  label={label}
                  required={required}
                  labelMinWidth={labelMinWidth}
                />
              </div>
            )}
            <div className="relative flex-1">
              <Input
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                onFocus={() => setIsOpen(true)}
                onBlur={() => setTimeout(() => setIsOpen(false), 200)}
                className="w-full"
                disabled={disabled}
                error={error}
                maxLength={maxLength}
                {...(placeholder && { placeholder })}
              />

              {!disabled && isOpen && searchValue && optionList.length > 0 && (
                <ul className="dropdown absolute overflow-y-scroll w-full bg-white my-2 flex flex-col outline outline-slate-200 z-30 text-sm">
                  {optionList.map((option, index) => {
                    if (!option.value) return null;

                    return (
                      <li
                        key={`${option.label}-${option.value}-${index}`}
                        className="p-3 break-all truncate hover:bg-slate-50 cursor-pointer"
                        onClick={() => handleOptionClick(option)}
                      >
                        {option.label}
                      </li>
                    );
                  })}
                </ul>
              )}
              {helperText && (
                <div className="pt-2.5">
                  <HelperText helperText={helperText} error={error} />
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
