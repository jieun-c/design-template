import Logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <div className="w-full bg-gray-10 flex justify-center items-center px-6 py-1.5">
      <img src={Logo} alt="logo" className="h-6" />
      <p className="text-center text-gray-50 text-xs">
        Copyright 2025. jieun-c All rights reserved.
      </p>
    </div>
  );
};
