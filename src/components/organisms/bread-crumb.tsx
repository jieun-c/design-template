import { Util } from "@/lib/utils";
import { MenuItem } from "@/types";
import { Link, useLocation } from "@tanstack/react-router";

export const BreadCrumb = () => {
  const location = useLocation();
  // const breadcrumbs: MenuItem[] = Util.generateBreadcrumbs(location.pathname);
  const breadcrumbs: MenuItem[] = Util.generateBreadcrumbs(
    `/${location.pathname.split("/").slice(2).join("/")}`,
  );

  return (
    <div className="flex items-center">
      <div className="flex items-center h-fit">
        <Link to="/" className="text-gray-60 text-xs p-1">
          home
        </Link>
      </div>
      {breadcrumbs.map((breadcrumb, idx) => {
        const isLast = idx === breadcrumbs.length - 1;

        if (isLast) {
          return (
            <div
              key={`breadcrumb-${breadcrumb.value}-${idx}`}
              className="flex gap-0.5 items-center h-fit"
            >
              <span className="text-gray-30 text-xs">/</span>
              <span className="text-gray-60 text-xs p-1">
                {breadcrumb.label}
              </span>
            </div>
          );
        } else {
          return (
            <div
              key={`breadcrumb-${breadcrumb.value}-${idx}`}
              className="flex gap-0.5 items-center h-fit"
            >
              <span className="text-gray-30 text-xs">/</span>
              <Link to={breadcrumb.value} className="text-gray-60 text-xs p-1">
                {breadcrumb.label}
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
};
