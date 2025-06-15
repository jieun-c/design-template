export interface DefaultResponse<T = unknown> {
  data?: T;
  message?: string;
  status?: number;
}

export const YnEnum = {
  N: "N",
  Y: "Y",
} as const;
export type YnEnum = (typeof YnEnum)[keyof typeof YnEnum];

export type OptionType<T> = {
  label: string;
  value: T;
};
export interface MenuItem {
  label: string;
  value: string;
  children?: MenuItem[];
}

export interface CommonParamsType {
  page: number;
  size: number;
  keyword: string;
  startDate: string;
  endDate: string;
}
