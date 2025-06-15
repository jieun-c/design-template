import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "@/components/atom/button";

const meta: Meta<typeof Button> = {
  // 스토리북에 올릴 storybook 폴더 계층
  title: "Atom/Button",
  // 컴포넌트 연동
  component: Button,
  parameters: {
    layout: "centered",
    // design: {
    //   // 컴포넌트에 대한 개별 URL
    // },
    docs: {
      description: {
        component: "",
      },
    },
  },
  args: {
    onClick: fn(),
  },
  // argTypes: {
  //   test: { table: { disable: true } }, // Storybook Controls에서 `test` 숨기기
  // },
};
export default meta;

type Story = StoryObj<typeof Button>;
export const Base: Story = {
  args: {
    variant: "fill",
    color: "base",
    size: "medium",
    children: "Button",
  },
  parameters: {
    docs: {
      description: {
        story: "variant(fill), disabled(true, false)",
      },
    },
  },
};

export const Red: Story = {
  args: {
    variant: "fill",
    color: "red",
    size: "medium",
    children: "Button",
  },
  parameters: {
    docs: {
      description: {
        story:
          "variant(fill, line), disabled(true, false) // line 의 disabled 는 없음(figma-250313)",
      },
    },
  },
};

export const Blue: Story = {
  args: {
    variant: "fill",
    color: "blue",
    size: "medium",
    children: "Button",
  },
  parameters: {
    docs: {
      description: {
        story: "variant(fill, line) // disabled 는 없음(figma-250313)",
      },
    },
  },
};

export const White: Story = {
  args: {
    variant: "line",
    color: "white",
    size: "medium",
    children: "Button",
  },
  parameters: {
    docs: {
      description: {
        story: "variant(line) // disabled 는 없음(figma-250313)",
      },
    },
  },
};

export const Ghost: Story = {
  args: {
    variant: "fill",
    color: "ghost",
    size: "medium",
    children: "Button",
  },
  parameters: {
    docs: {
      description: {
        story: "variant(fill) // disabled 는 없음(figma-250313)",
      },
    },
  },
};

export const LightGray: Story = {
  args: {
    variant: "fill",
    color: "lightGray",
    size: "medium",
    children: "Button",
  },
  parameters: {
    docs: {
      description: {
        story: "variant(fill) // disabled 는 없음(figma-250313)",
      },
    },
  },
};
