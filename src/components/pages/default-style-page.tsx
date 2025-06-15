import { useState } from "react";
import { Footer } from "../organisms/footer";

type ColorSection = {
  name: string;
  colors: { name: string; value: string }[];
};

const colorSections: ColorSection[] = [
  {
    name: "Primary Colors",
    colors: [
      { name: "Primary 10", value: "var(--color-primary-10)" },
      { name: "Primary 20", value: "var(--color-primary-20)" },
      { name: "Primary 30", value: "var(--color-primary-30)" },
      { name: "Primary 40", value: "var(--color-primary-40)" },
      { name: "Primary 50", value: "var(--color-primary-50)" },
      { name: "Primary 60", value: "var(--color-primary-60)" },
      { name: "Primary 70", value: "var(--color-primary-70)" },
      { name: "Primary 80", value: "var(--color-primary-80)" },
      { name: "Primary 90", value: "var(--color-primary-90)" },
      { name: "Primary 100", value: "var(--color-primary-100)" },
    ],
  },
  {
    name: "Gray Colors",
    colors: [
      { name: "Gray 5", value: "var(--color-gray-5)" },
      { name: "Gray 10", value: "var(--color-gray-10)" },
      { name: "Gray 20", value: "var(--color-gray-20)" },
      { name: "Gray 30", value: "var(--color-gray-30)" },
      { name: "Gray 40", value: "var(--color-gray-40)" },
      { name: "Gray 50", value: "var(--color-gray-50)" },
      { name: "Gray 60", value: "var(--color-gray-60)" },
      { name: "Gray 70", value: "var(--color-gray-70)" },
      { name: "Gray 80", value: "var(--color-gray-80)" },
      { name: "Gray 90", value: "var(--color-gray-90)" },
      { name: "Gray 95", value: "var(--color-gray-95)" },
    ],
  },
  {
    name: "Semantic Colors",
    colors: [
      { name: "Red", value: "var(--color-red-50)" },
      { name: "Orange", value: "var(--color-orange-50)" },
      { name: "Yellow", value: "var(--color-yellow-50)" },
      { name: "Green", value: "var(--color-green-50)" },
    ],
  },
];

const typographySizes = [
  { name: "xs", value: "var(--font-size-xs)" },
  { name: "sm", value: "var(--font-size-sm)" },
  { name: "base", value: "var(--font-size-base)" },
  { name: "lg", value: "var(--font-size-lg)" },
  { name: "xl", value: "var(--font-size-xl)" },
  { name: "2xl", value: "var(--font-size-2xl)" },
  { name: "3xl", value: "var(--font-size-3xl)" },
  { name: "4xl", value: "var(--font-size-4xl)" },
  { name: "5xl", value: "var(--font-size-5xl)" },
];

const fontWeights = [
  { name: "Thin", value: "var(--font-weight-thin)" },
  { name: "Extra Light", value: "var(--font-weight-extralight)" },
  { name: "Light", value: "var(--font-weight-light)" },
  { name: "Normal", value: "var(--font-weight-normal)" },
  { name: "Medium", value: "var(--font-weight-medium)" },
  { name: "Semibold", value: "var(--font-weight-semibold)" },
  { name: "Bold", value: "var(--font-weight-bold)" },
  { name: "Extra Bold", value: "var(--font-weight-extrabold)" },
  { name: "Black", value: "var(--font-weight-black)" },
];

const spacingSizes = [
  { name: "0", value: "var(--spacing-0)" },
  { name: "1", value: "var(--spacing-1)" },
  { name: "2", value: "var(--spacing-2)" },
  { name: "3", value: "var(--spacing-3)" },
  { name: "4", value: "var(--spacing-4)" },
  { name: "5", value: "var(--spacing-5)" },
  { name: "6", value: "var(--spacing-6)" },
  { name: "8", value: "var(--spacing-8)" },
  { name: "10", value: "var(--spacing-10)" },
  { name: "12", value: "var(--spacing-12)" },
  { name: "16", value: "var(--spacing-16)" },
  { name: "20", value: "var(--spacing-20)" },
  { name: "24", value: "var(--spacing-24)" },
];

const borderRadiusSizes = [
  { name: "none", value: "var(--radius-none)" },
  { name: "xs", value: "var(--radius-xs)" },
  { name: "sm", value: "var(--radius-sm)" },
  { name: "md", value: "var(--radius-md)" },
  { name: "lg", value: "var(--radius-lg)" },
  { name: "xl", value: "var(--radius-xl)" },
  { name: "2xl", value: "var(--radius-2xl)" },
  { name: "3xl", value: "var(--radius-3xl)" },
  { name: "full", value: "var(--radius-full)" },
];

export const DefaultStylePage = () => {
  const [activeTab, setActiveTab] = useState<
    "colors" | "typography" | "spacing" | "border-radius"
  >("colors");

  return (
    <div>
      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Default Theme Styles</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-20">
          <button
            className={`px-4 py-2 ${
              activeTab === "colors"
                ? "border-b-2 border-primary-50"
                : "text-gray-50"
            }`}
            onClick={() => setActiveTab("colors")}
          >
            Colors
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "typography"
                ? "border-b-2 border-primary-50"
                : "text-gray-50"
            }`}
            onClick={() => setActiveTab("typography")}
          >
            Typography
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "spacing"
                ? "border-b-2 border-primary-50"
                : "text-gray-50"
            }`}
            onClick={() => setActiveTab("spacing")}
          >
            Spacing
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "border-radius"
                ? "border-b-2 border-primary-50"
                : "text-gray-50"
            }`}
            onClick={() => setActiveTab("border-radius")}
          >
            Border Radius
          </button>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {activeTab === "colors" && (
            <div className="space-y-8">
              {colorSections.map((section) => (
                <div key={section.name}>
                  <h2 className="text-xl font-semibold mb-4">{section.name}</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {section.colors.map((color) => (
                      <div key={color.name} className="space-y-2">
                        <div
                          className="w-full h-24 rounded-lg"
                          style={{ backgroundColor: color.value }}
                        />
                        <div className="text-sm">
                          <p className="font-medium">{color.name}</p>
                          <p className="text-gray-50">{color.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "typography" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Font Sizes</h2>
                <div className="space-y-4">
                  {typographySizes.map((size) => (
                    <div key={size.name} className="flex items-center gap-4">
                      <div className="w-16 text-sm text-gray-50">
                        {size.name}
                      </div>
                      <div style={{ fontSize: size.value }} className="flex-1">
                        The quick brown fox jumps over the lazy dog
                      </div>
                      <div className="w-24 text-sm text-gray-50">
                        {size.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Font Weights</h2>
                <div className="space-y-4">
                  {fontWeights.map((weight) => (
                    <div key={weight.name} className="flex items-center gap-4">
                      <div className="w-24 text-sm text-gray-50">
                        {weight.name}
                      </div>
                      <div
                        style={{ fontWeight: weight.value }}
                        className="flex-1"
                      >
                        The quick brown fox jumps over the lazy dog
                      </div>
                      <div className="w-24 text-sm text-gray-50">
                        {weight.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "spacing" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Spacing Scale</h2>
              <div className="space-y-4">
                {spacingSizes.map((size) => (
                  <div key={size.name} className="flex items-center gap-4">
                    <div className="w-16 text-sm text-gray-50">{size.name}</div>
                    <div
                      className="bg-primary-50"
                      style={{ width: size.value, height: "24px" }}
                    />
                    <div className="w-24 text-sm text-gray-50">
                      {size.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "border-radius" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Border Radius</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {borderRadiusSizes.map((size) => (
                  <div key={size.name} className="space-y-2">
                    <div
                      className="w-full h-24 bg-primary-50"
                      style={{ borderRadius: size.value }}
                    />
                    <div className="text-sm">
                      <p className="font-medium">{size.name}</p>
                      <p className="text-gray-50">{size.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
