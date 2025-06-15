// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
  notFoundComponent: () => {
    return <p>ROOT 404 Not Found</p>;
  },
});
