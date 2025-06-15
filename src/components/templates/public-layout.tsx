import { cn } from "@/lib/utils";
import { Footer } from "../organisms/footer";
import BackgroundImage from "@/assets/bg.jpg";
import Logo from "@/assets/logo.png";

export const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col">
      <img
        src={BackgroundImage}
        alt="bg-image"
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      <header className="flex justify-center items-center flex-wrap p-10">
        {/* <div className="w-[113px]" /> */}
        {/* <div className="w-[152.32px] h-[32px]"> */}
        <img src={Logo} alt="logo" className="h-[48px]" />
        {/* </div> */}
        {/* <div /> */}
      </header>

      {/* 모달 형태 */}
      <div className="px-4">
        <div className="w-full max-w-md max-h-[calc(100vh-200px)] overflow-y-auto mx-auto p-6 bg-white border border-gray-10 rounded-2xl shadow-2xl">
          <p className="text-gray-40 text-xs font-medium text-right">
            version 0.0.1
          </p>

          <div>{children}</div>
        </div>
      </div>

      <div className="flex-1" />

      <Footer />
    </div>
  );
};

export const PublicLayoutTitle = ({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) => {
  return (
    <div
      className={cn("pt-8 flex flex-col gap-1.5", subtitle ? "pb-14" : "pb-11")}
    >
      {title && (
        <h1 className="text-gray-90 text-3xl font-semibold text-center">
          {title}
        </h1>
      )}

      {subtitle && (
        <h3 className="text-gray-50 text-sm font-medium text-center">
          {subtitle}
        </h3>
      )}
    </div>
  );
};
