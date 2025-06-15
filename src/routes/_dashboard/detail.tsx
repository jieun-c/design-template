import { DashboardDetailShowcase } from "@/components/pages/showcase/dashboard-detail-showcase";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard/detail")({
  component: DashboardDetailShowcase,
});
