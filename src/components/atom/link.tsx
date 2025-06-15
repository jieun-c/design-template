import {
  LinkComponentProps,
  Link as TanstackLink,
} from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { linkVariants } from "./variants/link";

type Props = LinkComponentProps & { color?: "base" | "blue" };

export const Link = ({
  className,
  children,
  color = "base",
  ...props
}: Props) => {
  return (
    <TanstackLink {...props} className={cn(linkVariants({ color }), className)}>
      {children}
    </TanstackLink>
  );
};
