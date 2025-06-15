interface Props {
  id?: string;
  name: string;
  value: string | number;
  label?: string;
  checked: boolean;
  onChange: (value: string | number) => void;
  disabled?: boolean;
  className?: string;
}

export const Radio = ({
  id,
  name,
  value,
  label,
  checked,
  onChange,
  disabled = false,
  className = "",
}: Props) => {
  const radioId = id ?? `radio-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-start gap-2">
        <RadioInput
          id={radioId}
          name={name}
          value={value}
          checked={checked}
          onChange={() => onChange(value)}
          disabled={disabled}
        />
        <RadioLabel
          htmlFor={radioId}
          label={label}
          checked={checked}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

type RadioInputProps = React.InputHTMLAttributes<HTMLInputElement>;
const RadioInput = (props: RadioInputProps) => {
  return <input type="radio" className="peer hidden" {...props} />;
};

interface RadioLabelProps {
  htmlFor: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
}
const RadioLabel = ({
  htmlFor,
  label,
  checked = false,
  disabled = false,
}: RadioLabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className="flex items-center gap-2 cursor-pointer select-none"
    >
      {/* 커스텀 라디오 UI */}
      <div
        className={`w-[16px] h-[16px] rounded-full border-[1px] flex items-center justify-center transition-colors border-slate-300
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {checked && (
          <div className="w-[10px] h-[10px] rounded-full bg-primary-60" />
        )}
      </div>

      {/* 라벨 텍스트 */}
      {label && (
        <span
          className={`${disabled ? "text-gray-400" : "text-black"} text-sm`}
        >
          {label}
        </span>
      )}
    </label>
  );
};
