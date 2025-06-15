import { DashLayout } from "@/components/templates/dashboard-layout";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboard")({
  component: () => (
    <DashLayout>
      <Outlet />
    </DashLayout>
  ),
});
