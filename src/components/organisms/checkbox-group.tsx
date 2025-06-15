import { Checkbox } from "@/components/molecules/checkbox";
import { OptionType } from "@/types";
import { Input } from "@/components/atom/input.tsx";
import { HelperText } from "@/components/atom/helper-text.tsx";

interface CheckboxGroupProps<T> {
  title?: string; // ✅ 타이틀 텍스트
  titlePosition?: "row" | "col"; // ✅ 타이틀 위치 (row = 위, col = 왼쪽)
  direction?: "col" | "row";
  options: OptionType<T>[];
  values: T[] | undefined; // 현재 체크된 값들
  onChange: (updated: T[]) => void;
  disabled?: boolean;
  etc?: EtcProps;
  error?: boolean;
  helperText?: string;
}
interface EtcProps {
  onEtcInputChange?: (text: string) => void; // 기타 입력값 콜백
  value?: string | undefined; // 기타 입력값
  isChecked?: boolean | undefined;
  onChecked?: (flag: boolean) => void;
  label?: string;
  error?: boolean;
  helperText?: string;
}

export const CheckboxGroup = <T,>({
  title,
  titlePosition = "row",
  direction,
  options,
  values = [],
  onChange,
  disabled = false,
  etc,
  error,
  helperText,
}: CheckboxGroupProps<T>) => {
  const handleChange = (value: T, checked: boolean) => {
    // 여기서 값 컨트롤, 체크박스 클릭할때마다 호출
    if (checked) {
      onChange([...values, value]); // 선택되면 추가
    } else {
      onChange(values.filter((v) => v !== value)); // 해제되면 제거
    }
  };
  const handleEtcChange = (checked: boolean) => {
    // 지금 해제된 체크박스의 value가 뭔지 확인하고 options 배열에서 해당 항목을 찾음
    etc?.onChecked?.(checked);
    etc?.onEtcInputChange?.(""); // 기타 입력 리셋
  };
  return (
    <div className="flex flex-col gap-2.5 flex-1">
      <div className={`flex ${error ? "outline-2 outline-red-500" : ""}`}>
        <div
          className={`flex ${
            titlePosition === "col"
              ? "flex-row items-start gap-4"
              : "flex-col gap-4"
          }`}
        >
          {title && (
            <div className="min-w-[80px] text-sm font-medium text-gray-800 mt-1">
              {title}
            </div>
          )}
          <div className="flex flex-wrap gap-3">
            {options.map((opt, idx) => {
              const isChecked = values.includes(opt.value);
              return (
                <div
                  key={`check-${opt.value}-${idx}`}
                  className={`flex items-center gap-2 mb-1 ${direction == "row" ? "w-full mt-2" : "w-fit"}`}
                >
                  <Checkbox
                    checked={isChecked}
                    onChange={(checked) => handleChange(opt.value, checked)}
                    label={opt.label}
                    disabled={disabled}
                  />
                </div>
              );
            })}
            {etc && (
              <div className={`flex items-center gap-2 mb-1 w-full mt-2`}>
                {/* 기타 항목은 줄 바꿈 + 가로 전체*/}
                <Checkbox
                  checked={etc.isChecked}
                  onChange={(checked) => handleEtcChange(checked)}
                  label={etc.label}
                  disabled={disabled}
                />
                {etc.isChecked && (
                  <Input
                    error={etc.error}
                    value={etc.value}
                    onChange={(e) => etc.onEtcInputChange?.(e.target.value)}
                    placeholder="기타 사유 입력"
                    className="ml-2"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {helperText && (
        <HelperText error={error} disabled={disabled} helperText={helperText} />
      )}
    </div>
  );
};
