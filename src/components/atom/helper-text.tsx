import { helperTextVariants } from "./variants/helper-text";

type Props = {
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
};

export const HelperText = ({ error, helperText, disabled }: Props) => {
  return (
    <p className={helperTextVariants({ error, disabled })}>{helperText}</p>
  );
};
