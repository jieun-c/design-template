import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages/home-page";

// Redirect 만 관여합니다.
export const Route = createFileRoute("/")({
  component: HomePage,
});
