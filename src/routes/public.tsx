import { createFileRoute } from "@tanstack/react-router";
import { PublicLayoutShowcase } from "@/components/pages/showcase/public-layout-showcase";

export const Route = createFileRoute("/public")({
  component: () => <PublicLayoutShowcase />,
});
