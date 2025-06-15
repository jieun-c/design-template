import { ButtonShowcase } from "./showcase/button-showcase";
import { InputShowcase } from "./showcase/input-showcase";
import { CalendarShowcase } from "./showcase/calendar-showcase";
import { CalendarRangeShowcase } from "./showcase/calendar-range-showcase";
import { ModalShowcase } from "./showcase/modal-showcase";
import { LinkShowcase } from "./showcase/link-showcase";
import { SelectShowcase } from "./showcase/select-showcase";
import { TextareaShowcase } from "./showcase/textarea-showcase";
import { FormFieldShowcase } from "./showcase/form-field-showcase";
import { ToggleSwitchesShowcase } from "./showcase/toggle-switches-showcase";
import { RadioGroupShowcase } from "./showcase/radio-group-showcase";
import { CheckboxGroupShowcase } from "./showcase/checkbox-group-showcase";
import { BreadCrumbShowcase } from "./showcase/bread-crumb-showcase";
import { StepperShowcase } from "./showcase/stepper-showcase";
import { Link } from "@tanstack/react-router";
import { Footer } from "../organisms/footer";

export const ShowcasePage = () => {
  return (
    <div>
      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Component Showcase</h1>
        <p className="text-md text-gray-500 mb-8">
          Atomic Design 을 기반으로 제작하였습니다.
        </p>

        {/* Atoms Section */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-4 bg-gray-10 p-4">Atoms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ModalShowcase />
            <ButtonShowcase />
            <LinkShowcase />
            <InputShowcase />
            <CalendarShowcase />
            <CalendarRangeShowcase />
            <SelectShowcase />
            <TextareaShowcase />
          </div>
        </section>

        {/* Molecules Section */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-4 bg-gray-10 p-4">
            Molecules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormFieldShowcase />
            <ToggleSwitchesShowcase />
          </div>
        </section>

        {/* Organisms Section */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-4 bg-gray-10 p-4">
            Organisms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RadioGroupShowcase />
            <CheckboxGroupShowcase />
            <BreadCrumbShowcase />
            <StepperShowcase />
          </div>
        </section>

        {/* Templates Section */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold mb-4 bg-gray-10 p-4">
            Templates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 
          1. public layout
          2. dashboard list layout
          3. dashboard detail layout

          링크 클릭 후 이동
          */}
            {/* css 꾸미기 */}
            <Link to="/public" className="text-primary-80 hover:underline">
              퍼블릭 템플릿
            </Link>
            <Link
              to="/list"
              search={{
                page: 0,
                size: 10,
                keyword: "",
                startDate: "",
                endDate: "",
              }}
              className="text-primary-80 hover:underline"
            >
              대시보드 목록 템플릿
            </Link>
            <Link to="/detail" className="text-primary-80 hover:underline">
              대시보드 상세 템플릿
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
