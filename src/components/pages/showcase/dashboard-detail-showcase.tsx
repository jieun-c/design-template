import { DetailLayout } from "@/components/templates/detail-layout";
import { FormFieldShowcase } from "./form-field-showcase";

export const DashboardDetailShowcase = () => {
  return (
    <DetailLayout title={"사용자 등록"} contentArea={<FormFieldShowcase />} />
  );
};
