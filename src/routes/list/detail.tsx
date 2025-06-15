import { createFileRoute } from "@tanstack/react-router";
import { DashboardDetailShowcase } from "@/components/pages/showcase/dashboard-detail-showcase";
import { DashLayout } from "@/components/templates/dashboard-layout";

export const Route = createFileRoute("/list/detail")({
  component: () => (
    <DashLayout>
      <DashboardDetailShowcase />
    </DashLayout>
  ),
});
