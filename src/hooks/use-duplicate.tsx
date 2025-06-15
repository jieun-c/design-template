import { YnEnum } from "@/types";
import { useEffect, useState } from "react";

export const useDuplicate = (defaultValue?: YnEnum) => {
  const [isDuplicated, setIsDuplicated] = useState<YnEnum | undefined>();

  /** 중복확인 버튼 */
  const handleDuplicateButton = async (
    key: string,
    value: string,
    checkDuplicate: (id: string) => Promise<YnEnum>,
    setError: any,
    t: (key: string) => string,
    regExp: RegExp,
  ) => {
    // 기본 validation 체크
    if (!value) {
      setError(key, {
        type: "required",
        message: t(`form.${key}.validation.required`),
      });
      return;
    }

    // 유효성 체크
    if (!regExp.test(value)) {
      setError(key, {
        type: "pattern",
        message: t(`form.${key}.validation.pattern`),
      });
      return;
    }

    const isYn = await checkDuplicate(value);
    if (!isYn) return;

    setIsDuplicated(isYn);
  };

  /** 다시입력 버튼 */
  const cancelDuplicatedCheck = () => {
    if (isDuplicated === "N") {
      setIsDuplicated(undefined);
    }
  };

  /** 강제 중복 통과 */
  const forceDuplicatedCheck = () => {
    setIsDuplicated("N");
  };

  useEffect(() => {
    if (defaultValue) {
      setIsDuplicated(defaultValue);
    }
  }, [defaultValue]);

  return {
    isDuplicated,
    handleDuplicateButton,
    cancelDuplicatedCheck,
    forceDuplicatedCheck,
  };
};
