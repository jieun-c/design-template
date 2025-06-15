import type { Preview } from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
  // 스토리북에 대한 메타데이터 정보
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // 전역 기본 설정 링크
    // design: {
    //   type: "figma",
    //   url: "",
    // },
  },
};

export default preview;
