/*
  DESIGN: Clean Presentation Style
  PainPointsSection: Light gray background, card-based pain points, linear economy analysis
*/
import { PAIN_POINTS, LINEAR_TRAITS } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrendingDown, FileX, CloudFog } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  TrendingDown: <TrendingDown size={24} />,
  FileX: <FileX size={24} />,
  CloudFog: <CloudFog size={24} />,
};

export default function PainPointsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: linearRef, isVisible: linearVisible } = useScrollAnimation();

  return (
    <section id="pain-points" className="py-20 bg-pres-light-gray">
      <div className="container">
        {/* Section title */}
        <div ref={titleRef} className={`mb-14 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-xs tracking-[0.2em] text-pres-green uppercase mb-3">單元一</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-pres-dark leading-tight">
            為何現在必須談循環經濟？
          </h2>
          <p className="text-base text-pres-text-secondary mt-3 max-w-2xl">
            以企業經營痛點引發共鳴，揭示線性經濟的結構性缺陷。這些不是「環保問題」，而是攸關企業存亡的「經營問題」。
          </p>
          <div className="w-12 h-0.5 bg-pres-green mt-6" />
        </div>

        {/* Pain point cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 mb-16">
          {PAIN_POINTS.map((point, i) => (
            <div
              key={point.title}
              className={`bg-white p-6 border border-pres-border transition-all duration-700 ${
                cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-pres-green">{iconMap[point.icon]}</div>
                <div>
                  <h3 className="text-lg font-bold text-pres-dark">{point.title}</h3>
                  <p className="text-xs text-pres-text-secondary">{point.subtitle}</p>
                </div>
              </div>
              <p className="text-sm text-pres-text leading-relaxed mb-5">{point.description}</p>
              <div className="pt-4 border-t border-pres-border">
                <div className="text-2xl font-black text-pres-green">{point.stat}</div>
                <div className="text-xs text-pres-text-secondary mt-1">{point.statLabel}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Linear economy analysis */}
        <div ref={linearRef} className={`transition-all duration-700 ${linearVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="bg-white p-8 border border-pres-border">
            <h3 className="text-lg font-bold text-pres-dark mb-2">
              二、清楚對比：線性經濟 vs 循環經濟
            </h3>
            <p className="text-sm text-pres-text-secondary mb-6">
              線性經濟的價值邏輯是「<strong className="text-pres-dark">利潤/利益私有化，成本與風險公有化</strong>」。這種模式可能創造短期「好生意」，卻未必是長期的「好主意」。
            </p>

            <p className="text-sm font-semibold text-pres-dark mb-4">線性經濟的三個結構特質：</p>

            <div className="space-y-4">
              {LINEAR_TRAITS.map((trait) => (
                <div
                  key={trait.trait}
                  className="flex gap-4 p-4 bg-pres-light-gray border-l-3 border-pres-terracotta"
                >
                  <div className="shrink-0">
                    <span className="inline-block text-sm font-bold text-pres-terracotta">{trait.trait}</span>
                  </div>
                  <div>
                    <p className="text-sm text-pres-text">{trait.description}</p>
                    <p className="text-xs text-pres-text-secondary mt-1">企業影響：{trait.impact}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-pres-green-bg border-l-4 border-pres-green">
              <p className="text-sm font-semibold text-pres-green mb-1">循環經濟的三個核心特質：</p>
              <p className="text-sm text-pres-text">
                再生型（Regenerative）+ 恢復型（Restorative）+ 包容性（Inclusive）
              </p>
              <p className="text-xs text-pres-text-secondary mt-2">
                這不只是效率優化，而是整個更上位「社·政·經·貿」發展與「國家安全」的重塑。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
