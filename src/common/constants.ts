export const DEFAULT_PAGINATION = {
  PAGE: 0,
  SIZE: 10,
  PAGE_SIZES: [5, 10, 20] as const,
} as const;

export const DEFAULT_PAGINATION_OPTIONS = DEFAULT_PAGINATION.PAGE_SIZES.map(
  (size) => ({ label: String(size), value: String(size) }),
);

export const MENUS = [
  {
    label: "목록 템플릿",
    value: "/list",
    roles: [1],
    children: [
      {
        label: "상세 템플릿",
        value: "/list/detail",
        roles: [1],
      },
    ],
  },

  {
    label: "퍼블릭 템플릿",
    value: "/public",
    roles: [1],
  },
  {
    label: "컴포넌트",
    value: "/showcase",
    roles: [1],
    children: [],
  },
  {
    label: "기본스타일",
    value: "/default-style",
    roles: [1],
    children: [],
  },
];

export const DROPBOX_MENUS = [
  { label: "menu1", value: "menu1" },
  { label: "menu2", value: "menu2" },
  { label: "menu3", value: "menu3" },
];
