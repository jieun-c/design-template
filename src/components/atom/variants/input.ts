import { cva } from "class-variance-authority";

export const inputVariants = cva(
  "flex justify-start items-center h-10 relative pt-2 pb-2 px-3 text-sm text-left focus:outline-2 focus:outline-blue-500 w-full",
  {
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
    },
    compoundVariants: [
      {
        error: false,
        disabled: false,
        haveValue: true,
        class: "bg-white outline outline-slate-700 text-slate-900",
      },
      {
        error: false,
        disabled: false,
        haveValue: false,
        class: "bg-slate-50 outline outline-slate-200 placeholder-gray-40",
      },
    ],
    // defaultVariants: {
    //   error: false,
    //   disabled: false,
    //   haveValue: false,
    // },
  },
);
