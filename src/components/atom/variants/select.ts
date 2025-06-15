import { cva } from "class-variance-authority";

export const selectVariants = cva("relative py-2 pl-3 text-sm text-left", {
  variants: {
    error: {
      true: "bg-white outline-2 outline-red-500 text-red-500 placeholder-inherit focus:outline-red-500",
      false: "",
    },
    disabled: {
      true: "!bg-slate-50 outline outline-slate-200 text-slate-500",
      false: "",
    },
    haveValue: {
      true: "",
      false: "",
    },
    isOpen: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      error: false,
      disabled: false,
      haveValue: true,
      isOpen: false,
      class: "bg-white outline outline-slate-700 text-slate-900",
    },
    {
      error: false,
      disabled: false,
      haveValue: false,
      isOpen: false,
      class: "bg-slate-50 outline outline-slate-200 placeholder-slate-700",
    },
    {
      error: false,
      disabled: false,
      haveValue: true,
      isOpen: true,
      class: "bg-white outline-2 outline-blue-500",
    },
    {
      error: false,
      disabled: false,
      haveValue: false,
      isOpen: true,
      class: "bg-slate-50 outline-2 outline-blue-500",
    },
  ],
});
