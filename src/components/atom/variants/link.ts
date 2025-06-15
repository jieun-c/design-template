import { cva } from "class-variance-authority";

export const linkVariants = cva("text-xs font-normal hover:underline", {
  variants: {
    color: {
      base: "text-gray-60 hover:text-gray-70",
      blue: "text-primary-50 hover:primary-70",
    },
  },
});
