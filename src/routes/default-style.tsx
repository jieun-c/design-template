import { createFileRoute } from "@tanstack/react-router";
import { DefaultStylePage } from "@/components/pages/default-style-page";

export const Route = createFileRoute("/default-style")({
  component: DefaultStylePage,
});
