import { Link, useLocation } from "@tanstack/react-router";
import { Footer } from "../organisms/footer";
import { BreadCrumb } from "../organisms/bread-crumb";
// import { Util } from "@/lib/utils";
import { useMemo } from "react";
import { MENUS } from "@/common/constants";
import Logo from "@/assets/logo.png";

export const DashLayout = ({ children }: { children: React.ReactNode }) => {
  const sidebarMenus = MENUS; // Util.getMySidebarMenus(); 권한 체크
  const location = useLocation();

  const firstPathName = useMemo(() => {
    // const firstPath = Util.getFirstPathName(location.pathname);

    const firstPath = location.pathname.split("/").filter(Boolean)[1] || null;
    return MENUS.find((item) => item.value === `/${firstPath}`)?.label || "";
  }, [location.pathname]);

  return (
    <div className="w-full h-full overflow-hidden flex max-w-[1920px]">
      {/* side bar */}
      <div className={`w-[240px] h-full border-r border-gray-20`}>
        {/* 로고 */}
        <div className="py-2">
          <img src={Logo} alt="logo" className="h-[45.5px] mx-auto" />
        </div>

        {/* 메뉴리스트 */}
        <div className="h-full flex flex-col gap-1 overflow-y-auto">
          {sidebarMenus.map((menu) => (
            <Link
              key={`menu-${menu.value}`}
              to={menu.value}
              inactiveProps={{
                className: `hover:bg-gray-100 text-base text-gray-950`,
              }}
              activeProps={{
                className: `bg-blue-50 text-base text-blue-500 font-bold`,
              }}
              className="w-full px-14 py-5 cursor-pointer"
            >
              {menu.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-x-auto">
        {/* app bar */}
        <div className="min-w-[1000px] w-full max-h-[72px] flex items-center gap-6 px-6 py-4 border-b border-gray-20">
          {/* 타이틀 */}
          <h1 className="text-xl font-semibold flex-1">{firstPathName}</h1>
        </div>

        {/* breadcrumb */}
        <div className="px-4 py-2">
          <BreadCrumb />
        </div>

        {/* 컨텐츠 */}
        <div className="h-full flex-1 flex flex-col min-w-[1000px] w-full overflow-y-scroll">
          <div className="flex-1 px-6 pt-4 pb-6">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
