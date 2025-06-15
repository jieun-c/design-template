import { Button } from "@/components/atom/button";
import {
  PublicLayout,
  PublicLayoutTitle,
} from "@/components/templates/public-layout";
import { Link } from "@tanstack/react-router";

export const PublicLayoutShowcase = () => {
  return (
    <PublicLayout>
      <PublicLayoutTitle
        title="로그인"
        subtitle="퍼블릭 레이아웃 페이지입니다. 환영합니다."
      />

      <div className="flex flex-col">
        <Link
          to="/list"
          search={{
            page: 0,
            size: 10,
            keyword: "",
            startDate: "",
            endDate: "",
          }}
          className="w-full"
        >
          <Button className="w-full">대시보드로 이동</Button>
        </Link>
      </div>
    </PublicLayout>
  );
};
