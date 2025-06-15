import { cva } from "class-variance-authority";

export const helperTextVariants = cva("text-sm min-h-[16px] leading-none", {
  variants: {
    error: {
      true: "text-red-600",
      false: "",
    },
    disabled: {
      true: "!text-slate-400",
      false: "",
    },
  },
  compoundVariants: [
    {
      error: false,
      disabled: false,
      class: "text-slate-700",
    },
  ],
  // defaultVariants: {
  //   error: false,
  //   disabled: false,
  //   haveValue: false,
  // },
});
