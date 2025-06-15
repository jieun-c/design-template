import { createFileRoute } from "@tanstack/react-router";
import { DashboardListShowcase } from "@/components/pages/showcase/dashboard-list-showcase";
import { CommonParamsType as ParamsType } from "@/types";
import { DEFAULT_PAGINATION } from "@/common/constants";

export const Route = createFileRoute("/_dashboard/list")({
  validateSearch: (search: ParamsType): ParamsType => {
    return {
      page: Number(search?.page ?? DEFAULT_PAGINATION.PAGE),
      size: Number(search?.size ?? DEFAULT_PAGINATION.SIZE),
      keyword: search?.keyword ?? "",
      startDate: search?.startDate ?? "",
      endDate: search?.endDate ?? "",
    };
  },
  component: DashboardListShowcase,
});
