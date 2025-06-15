import { getCookie, removeCookie } from "@/common/cookie";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { MENUS } from "@/common/constants";
import { MenuItem } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Util = {
  formatHHMMSS: (time: number) => {
    const hours = String(Math.floor(time / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  },
  /** JWT 토큰 파싱 */
  parseToken: (token: string) => {
    try {
      const base64Url = token.split(".")[1]; // JWT의 payload 부분 추출
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/"); // Base64 URL 변환
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join(""),
      );

      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("Invalid Token:", error);
      return null;
    }
  },
  /** 토큰의 만료시간 구하기 */
  getTokenExp: (key: string) => {
    const tokenCookie = getCookie(key);
    const token = Util.parseToken(tokenCookie);

    if (!token) return 0;

    // 밀리초 단위로 변환
    return token.exp * 1000;
  },
  /** 잔여시간 구하기 */
  getRemaining: (expirationTime: number) => {
    const now = new Date().getTime();

    const expiration = new Date(expirationTime).getTime();
    const difference = expiration - now;

    // 만료되었거나 잘못된 시간인 경우 0 반환
    const remainingTime = Math.max(0, Math.floor(difference / 1000));
    const remainingText = Util.formatHHMMSS(remainingTime);
    return {
      remainingTime,
      remainingText,
    };
  },
  /** 로그아웃시 사용되는 cacheClear */
  cacheClear: async (): Promise<void> => {
    try {
      const refreshToken = getCookie("refreshToken");
      if (refreshToken) {
        await Util.testService({ refreshToken });
      }
    } catch (error) {
      console.log(error);
    } finally {
      removeCookie("refreshToken");
      removeCookie("accessToken");
      removeCookie("expiresAt");
      removeCookie("me");
      removeCookie("lang");
      removeCookie("timeZone");
      localStorage.clear();
    }
  },

  /** 숫자 제외 제거 */
  numberOnly: (value: string) => value.replace(/[^0-9]/g, ""),
  /** 대표전화번호: 자릿수 3-4-4 또는 3-3-4 */
  formatPhoneNumber: (value: string): string => {
    const number = Util.numberOnly(value);
    if (number.length <= 4) return number;
    if (number.length <= 10)
      return `${number.slice(0, 3)}-${number.slice(3, 6)}-${number.slice(6)}`;

    return `${number.slice(0, 3)}-${number.slice(3, 7)}-${number.slice(7, 11)}`;
  },
  /** 휴대전화번호 : 자릿수 3-4-4 */
  formatMobilePhoneNumber: (value: string): string => {
    const number = Util.numberOnly(value);
    if (number.length <= 4) return number;
    if (number.length <= 7) return `${number.slice(0, 3)}-${number.slice(3)}`;
    return `${number.slice(0, 3)}-${number.slice(3, 7)}-${number.slice(7, 11)}`;
  },
  /** 원내전화번호: 자릿수 4 또는, 3-4-4 또는 3-3-4 */
  formatInternalPhoneNumber: (value: string): string => {
    const number = Util.numberOnly(value);
    if (number.length <= 4) return number;
    if (number.length <= 10)
      return `${number.slice(0, 3)}-${number.slice(3, 6)}-${number.slice(6)}`;

    return `${number.slice(0, 3)}-${number.slice(3, 7)}-${number.slice(7, 11)}`;
  },
  /** 하이픈 포함 포맷팅 */
  formatPhone: (
    value: string | undefined,
    filteredTypes: string[] = ["MOBILE", "SEOUL", "REGIONAL", "EXTENSION"],
  ): string => {
    if (!value) {
      return "";
    }
    let digits = value;
    // 내선번호 처리: 휴대폰/지역번호/서울번호가 아니고 8자리 이하일 경우
    if (
      filteredTypes.includes("EXTENSION") &&
      (digits.length <= 8 || filteredTypes.length == 1)
    ) {
      if (digits.length <= 3) return digits;
      if (digits.length <= 7)
        return digits.replace(/(\d{3})(\d{1,4})/, "$1-$2");
      return digits.replace(/(\d{4})(\d{4})/, "$1-$2");
    }

    // 휴대폰
    if (
      filteredTypes.includes("MOBILE") &&
      (/^01[016789]/.test(digits) || filteredTypes.length == 1)
    ) {
      digits = digits.slice(0, 11);
      if (digits.length <= 3) return digits;
      if (digits.length <= 7)
        return digits.replace(/(01[016789])(\d{1,4})/, "$1-$2");
      return digits.replace(/(01[016789])(\d{3,4})(\d{1,4})/, "$1-$2-$3");
    }

    // 서울
    if (
      filteredTypes.includes("SEOUL") &&
      (digits.startsWith("02") || filteredTypes.length == 1)
    ) {
      digits = digits.slice(0, 10);
      if (digits.length <= 2) return digits;
      if (digits.length <= 5) return digits.replace(/(02)(\d{1,3})/, "$1-$2");
      if (digits.length <= 9)
        return digits.replace(/(02)(\d{3})(\d{1,4})/, "$1-$2-$3");
      return digits.replace(/(02)(\d{3,4})(\d{1,4})/, "$1-$2-$3");
    }

    // 지역번호
    if (
      filteredTypes.includes("REGIONAL") &&
      (/^0[3-9][0-9]/.test(digits) || filteredTypes.length == 1)
    ) {
      digits = digits.slice(0, 11);
      if (digits.length <= 3) return digits;
      if (digits.length <= 6)
        return digits.replace(/(0\d{2})(\d{1,3})/, "$1-$2");
      if (digits.length <= 10)
        return digits.replace(/(0\d{2})(\d{3})(\d{1,4})/, "$1-$2-$3");
      return digits.replace(/(0\d{2})(\d{4})(\d{1,4})/, "$1-$2-$3");
    }

    return digits;
  },
  /** object 를 form-data 로 변환 */
  convertFormData: (obj: Record<string, any>): FormData => {
    const formData = new FormData();
    const REQUEST_KEY = `request`;

    for (const key in obj) {
      if (obj[key] !== undefined && obj[key] !== null) {
        if (key === REQUEST_KEY) {
          formData.append(
            REQUEST_KEY,
            new Blob([JSON.stringify(obj[key])], { type: "application/json" }),
          );
        } else {
          formData.append(key, obj[key]);
        }
      }
    }
    return formData;
  },
  /** testService */
  testService: async (data: any) => {
    /*
        사용 컴포넌트 예시:
        const testMutation = useMutation({
          mutationFn: (data) => Util.testService(data),
        });
    */
    await new Promise((resolve: any) => {
      setTimeout(() => {
        console.log(data);
        alert("success");
        resolve();
      }, 5000);
    });
  },
  /** 새창으로 띄우기 */
  openPopup: (
    url: string,
    target = "popup",
    features = "width=800, height=800, resizable=0, scrollbars=no, status=0, titlebar=0, toolbar=0, left=50%, top=50%",
  ) => {
    window.open(url, target, features);
  },
  /** 다운로드 */
  download: (response: any) => {
    if (!response) return;

    const url = window.URL.createObjectURL(
      new Blob([response.data], {
        type: response.headers["content-type"],
      }),
    );

    const link = document.createElement("a");
    link.href = url;
    const filename = response.headers["content-disposition"]
      .split(";")[1]
      .split("=")[1];
    link.setAttribute("download", decodeURI(filename));
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  },
  getMe: () => {
    const me: { userTypeNo: number } | undefined = getCookie("me");
    return me;
  },
  calculateBmi: (height: number, weight: number) => {
    if (height === 0 || weight === 0) return "00.0";
    const heightInMeters = height / 100; // 키를 미터 단위로 변환
    const bmi = weight / (heightInMeters * heightInMeters);

    if (bmi > 99.9) return "00.0";

    return bmi.toFixed(1); // 소수점 첫째 자리까지 반올림
  },
  getMySidebarMenus: () => {
    const me = Util.getMe();
    return MENUS.filter((item) =>
      item?.roles.includes(me?.userTypeNo ?? 0),
    ).map(({ label, value }) => ({ label, value }));
  },
  getMyFirstMenu: () => {
    const myMenus = Util.getMySidebarMenus();
    if (myMenus.length === 0) {
      return undefined;
    } else {
      return myMenus[0];
    }
  },
  /** 경로 매칭 */
  matchPath: (template: string, actual: string): boolean => {
    const templateSegments = template.split("/").filter(Boolean);
    const actualSegments = actual.split("/").filter(Boolean);

    // 길이가 다르면 매칭 불가
    if (templateSegments.length !== actualSegments.length) return false;

    return templateSegments.every((seg, idx) => {
      if (seg.startsWith(":")) return true;
      return seg === actualSegments[idx];
    });
  },
  /** 메뉴 라벨 찾기 */
  findBreadcrumbs: (
    pathname: string,
    menus: MenuItem[],
    parentTrail: MenuItem[] = [],
  ): MenuItem[] | null => {
    for (const menu of menus) {
      const fullTrail = [
        ...parentTrail,
        { label: menu.label, value: menu.value },
      ];
      if (Util.matchPath(menu.value, pathname)) {
        return fullTrail;
      }

      if (menu.children) {
        const found = Util.findBreadcrumbs(pathname, menu.children, fullTrail);
        if (found) return found;
      }
    }

    return null;
  },
  /** 메뉴 라벨 생성 */
  generateBreadcrumbs: (pathname: string, menus = MENUS): MenuItem[] => {
    const matched = Util.findBreadcrumbs(pathname, menus);
    return matched ?? [];
  },
  /** 첫번째 경로 이름 찾기 */
  getFirstPathName: (pathname: string): string | null => {
    return pathname.split("/").filter(Boolean)[0] || null;
  },
};
