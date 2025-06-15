import { useState } from "react";
import { Button } from "../../atom/button";
import Modal from "../../organisms/modal/modal";

export const ModalShowcase = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Dialog</h3>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      <Modal
        title="모달 타이틀"
        component={<div>샘플 모달 컨텐츠입니다.</div>}
        isOpen={isOpen}
        width="w-[528px]"
        closeModal={() => setIsOpen(false)}
        buttonArea={
          <div className="flex justify-end gap-2.5">
            <Button size="small" onClick={() => setIsOpen(false)}>
              확인
            </Button>
          </div>
        }
      />
    </div>
  );
};
