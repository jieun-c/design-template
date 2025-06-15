import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "flex justify-center items-center rounded-none transition-colors",
  {
    variants: {
      variant: {
        fill: "",
        line: "outline",
      },
      color: {
        base: "",
        red: "",
        blue: "",
        white: "",
        ghost: "",
        lightGray: "",
      },
      size: {
        small: "p-2 text-xs",
        medium: "p-3 text-sm",
        large: "p-4 text-base",
      },
      disabled: {
        true: "",
        false: "cursor-pointer",
      },
    },
    compoundVariants: [
      // fill 스타일
      {
        variant: "fill",
        color: "base",
        disabled: false,
        class: "bg-gray-80 hover:bg-gray-90 text-white",
      },
      {
        variant: "fill",
        color: "red",
        disabled: false,
        class: "bg-red-50 hover:bg-red-70 text-white",
      },
      {
        variant: "fill",
        color: "blue",
        disabled: false,
        class: "bg-primary-50 hover:bg-primary-70 text-white",
      },
      {
        variant: "fill",
        color: "ghost",
        disabled: false,
        class: "bg-white hover:bg-gray-10",
      },
      {
        variant: "fill",
        color: "lightGray",
        disabled: false,
        class: "bg-gray-10 hover:bg-gray-20",
      },
      {
        variant: "line",
        color: "white",
        disabled: false,
        class: "bg-white outline-gray-30 hover:bg-gray-10",
      },
      {
        disabled: true,
        variant: "fill",
        class: "bg-gray-20 text-gray-40",
      },
      {
        disabled: true,
        variant: "line",
        class: "bg-white outline-gray-20 text-gray-40",
      },
    ],
    defaultVariants: {
      variant: "fill",
      color: "blue",
      size: "medium",
      disabled: false,
    },
  },
);
