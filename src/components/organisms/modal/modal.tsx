import { Dialog, DialogContent } from "@/components/atom/dialog";
import { cn } from "@/lib/utils";
import { DialogTitle } from "@radix-ui/react-dialog";
import CloseIcon from "@/assets/icons/close.svg";

type Props = {
  isOpen?: boolean;
  width?: string;
  component?: React.ReactNode;
  title?: string;
  buttonArea?: React.ReactNode;
  closeModal?: () => void;
};

export default function Modal({
  isOpen,
  width,
  component,
  title,
  buttonArea,
  closeModal,
}: Props) {
  return (
    <Dialog open={isOpen}>
      <DialogContent
        className={cn(width ? width : "w-[528px]", "bg-white p-6 shadow-lg")}
        aria-describedby="modal-description"
      >
        <DialogTitle asChild>
          {/*Radix UI는 <DialogContent> 안에 반드시 <DialogTitle> 이 있어야 접근성(스크린리더)이 보장된다고 판단해서 이걸 추가하지 않았을때 경고가 뜸. */}
          <h3 className="flex justify-between items-center mb-4">
            <span className="text-xl text-subtitle2 font-bold tracking-subtitle2 leading-lognText">
              {title}
            </span>
            <button
              className="w-6 h-6 cursor-pointer"
              onClick={() => {
                if (closeModal) {
                  closeModal();
                }
              }}
            >
              <img src={CloseIcon} alt="close" />
            </button>
          </h3>
        </DialogTitle>

        <main className="max-h-[560px] flex flex-col gap-6 text-[16px]">
          {component}
        </main>

        {buttonArea && <div className="mt-8">{buttonArea}</div>}
      </DialogContent>
    </Dialog>
  );
}
