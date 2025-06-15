import { Select } from "@/components/atom/select";
import { DEFAULT_PAGINATION_OPTIONS } from "@/common/constants";

type Props = {
  error?: boolean;
  disabled?: boolean;
  optionList?: { label: string; value: string | number }[];
  selectedValue?: string | number;
  onChange: (selected: { label: string; value: string | number }) => void;
};

export const PageSize = ({
  optionList = DEFAULT_PAGINATION_OPTIONS,
  selectedValue,
  ...props
}: Props) => {
  return (
    <Select
      {...props}
      optionList={optionList}
      selected={optionList.find((item) => item.value === selectedValue)}
    />
  );
};
