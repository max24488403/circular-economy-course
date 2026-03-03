/*
  DESIGN: Terra Narrativa — 大地敘事
  Pain Points: Dark immersive section with dramatic imagery
*/
import { PAIN_POINTS, LINEAR_TRAITS, CDN } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrendingDown, FileX, CloudFog, Flame, Scale } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  TrendingDown,
  FileX,
  CloudFog,
  Flame,
  Scale,
};

function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className="transition-all duration-1000 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function PainPointsSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.05);

  return (
    <section id="pain-points" className="relative">
      {/* Intro question - ivory bg */}
      <div className="py-24 lg:py-32">
        <div className="container">
          <AnimatedCard>
            <div className="max-w-4xl mx-auto text-center">
              <span className="font-body text-sm tracking-[0.3em] text-terra-terracotta uppercase mb-6 block">
                單元一
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-terra-charcoal leading-tight mb-8">
                為何現在必須談<br />
                <span className="text-terra-forest">循環經濟？</span>
              </h2>
              <p className="font-body text-lg text-terra-charcoal/60 leading-relaxed max-w-2xl mx-auto">
                這些是單純的「環保問題」，還是攸關企業存亡的「經營問題」？
              </p>
            </div>
          </AnimatedCard>
        </div>
      </div>

      {/* Pain points - dark bg with dramatic image */}
      <div className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={CDN.painPointsBg}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-terra-charcoal/85" />
        </div>
        <div className="absolute inset-0 grain-overlay" />

        <div ref={sectionRef} className="relative z-10 container">
          {/* Pain point cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-24">
            {PAIN_POINTS.map((point, i) => {
              const Icon = iconMap[point.icon];
              return (
                <AnimatedCard key={point.title} delay={i * 200}>
                  <div className="group relative p-8 lg:p-10 bg-white/[0.03] border border-white/[0.06] rounded-sm backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700">
                    {/* Stat */}
                    <div className="font-display text-5xl lg:text-6xl font-bold text-terra-terracotta/30 mb-4 group-hover:text-terra-terracotta/50 transition-colors duration-700">
                      {point.stat}
                    </div>
                    <div className="font-body text-xs text-white/30 tracking-wider mb-6">
                      {point.statLabel}
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-center gap-3 mb-4">
                      {Icon && <Icon size={20} className="text-terra-terracotta-light" />}
                      <h3 className="font-display text-2xl font-semibold text-white">
                        {point.title}
                      </h3>
                    </div>
                    <p className="font-body text-sm text-white/40 mb-4">{point.subtitle}</p>
                    <p className="font-body text-base text-white/60 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>

          {/* Linear economy diagnosis */}
          <AnimatedCard>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                問題的根源：<span className="text-terra-terracotta-light">線性經濟的結構性缺陷</span>
              </h3>
              <p className="font-quote italic text-lg text-white/40 max-w-2xl mx-auto">
                「利潤與利益私有化，成本與風險公有化」——這就是線性經濟的價值邏輯。
              </p>
            </div>
          </AnimatedCard>

          {/* Linear traits */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {LINEAR_TRAITS.map((trait, i) => {
              const Icon = iconMap[trait.icon];
              return (
                <AnimatedCard key={trait.trait} delay={i * 150}>
                  <div className="text-center p-8 border border-white/[0.06] rounded-sm bg-white/[0.02]">
                    {Icon && <Icon size={28} className="text-terra-terracotta/60 mx-auto mb-4" />}
                    <h4 className="font-display text-xl font-semibold text-white mb-3">
                      {trait.trait}
                    </h4>
                    <p className="font-body text-sm text-white/50 mb-4">{trait.description}</p>
                    <div className="w-12 h-px bg-white/10 mx-auto mb-4" />
                    <p className="font-body text-xs text-terra-terracotta-light/70">{trait.impact}</p>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
