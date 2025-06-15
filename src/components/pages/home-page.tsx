import { useNavigate } from "@tanstack/react-router";
import { Footer } from "@/components/organisms/footer";

export const HomePage = () => {
  const navigate = useNavigate();

  const navigationCards = [
    {
      title: "Component Showcase",
      description: "디자인 시스템의 컴포넌트를 확인하세요",
      path: "/showcase",
      icon: "🎨",
      gradient: "from-primary-50 to-primary-60",
    },
    {
      title: "Default Styles",
      description: "디자인 시스템의 기본 테마 스타일과 토큰을 확인하세요",
      path: "/default-style",
      icon: "🎯",
      gradient: "from-gray-80 to-gray-90",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-5 flex flex-col">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary-50 to-primary-70 bg-clip-text text-transparent">
            디자인 시스템
          </h1>
          <p className="text-xl text-gray-50 max-w-2xl mx-auto">
            디자인 시스템 문서를 확인하세요. 일관된 인터페이스를 만드는 데
            도움이 됩니다.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {navigationCards.map((card) => (
            <button
              key={card.path}
              onClick={() => navigate({ to: `${card.path}` })}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative z-10">
                <span className="text-4xl mb-4 block">{card.icon}</span>
                <h2 className="text-white text-2xl font-bold mb-2">
                  {card.title}
                </h2>
                <p className="text-white">{card.description}</p>
              </div>
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
              />
            </button>
          ))}
        </div>

        <div className="mt-16 text-center text-gray-50">
          <p>위의 섹션을 선택하여 시작하세요</p>
        </div>
      </div>

      <div className="flex-1" />

      <Footer />
    </div>
  );
};
