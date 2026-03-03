/*
  DESIGN: Terra Narrativa — 大地敘事
  Trilogy: Dark immersive section with the three-part framework
*/
import { TRILOGY, CDN } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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

const colorMap: Record<string, { border: string; text: string; bg: string; glow: string }> = {
  forest: {
    border: "border-terra-forest/30",
    text: "text-terra-forest-light",
    bg: "bg-terra-forest/10",
    glow: "shadow-terra-forest/10",
  },
  amber: {
    border: "border-terra-amber/30",
    text: "text-terra-amber",
    bg: "bg-terra-amber/10",
    glow: "shadow-terra-amber/10",
  },
  terracotta: {
    border: "border-terra-terracotta/30",
    text: "text-terra-terracotta-light",
    bg: "bg-terra-terracotta/10",
    glow: "shadow-terra-terracotta/10",
  },
};

export default function TrilogySection() {
  return (
    <section id="trilogy" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={CDN.trilogyBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-terra-charcoal/80" />
      </div>
      <div className="absolute inset-0 grain-overlay" />

      <div className="relative z-10 container">
        {/* Section header */}
        <AnimatedCard>
          <div className="max-w-4xl mx-auto text-center mb-8">
            <span className="font-body text-sm tracking-[0.3em] text-terra-terracotta-light uppercase mb-6 block">
              單元三
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-8">
              循環三部曲<br />
              <span className="text-terra-terracotta-light">Circular Trilogy</span>
            </h2>
            <p className="font-body text-lg text-white/50 leading-relaxed max-w-3xl mx-auto mb-4">
              把發展順序倒過來——不是從「好生意」出發，而是從「循環好主意」出發。
              當「好主意」結合「好治理」，自然會產生真正的「好生意」。
            </p>
          </div>
        </AnimatedCard>

        {/* Formula */}
        <AnimatedCard delay={200}>
          <div className="flex items-center justify-center gap-3 sm:gap-6 mb-20 flex-wrap">
            <span className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-terra-forest-light">
              好主意
            </span>
            <span className="font-display text-2xl sm:text-3xl text-white/20">+</span>
            <span className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-terra-amber">
              好治理
            </span>
            <span className="font-display text-2xl sm:text-3xl text-white/20">=</span>
            <span className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-terra-terracotta-light">
              好生意
            </span>
          </div>
        </AnimatedCard>

        {/* Trilogy cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {TRILOGY.map((item, i) => {
            const colors = colorMap[item.color];
            return (
              <AnimatedCard key={item.number} delay={i * 200}>
                <div className={`relative p-8 lg:p-10 border ${colors.border} rounded-sm bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-700 hover:shadow-2xl ${colors.glow} h-full`}>
                  {/* Number */}
                  <div className={`font-display text-sm tracking-[0.3em] ${colors.text} mb-6`}>
                    第{item.number}部曲
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className={`font-body text-sm ${colors.text} tracking-wider mb-6`}>
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="font-body text-base text-white/55 leading-relaxed mb-8">
                    {item.description}
                  </p>

                  {/* Traits */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {item.traits.map((trait) => (
                      <span
                        key={trait}
                        className={`px-3 py-1 text-xs font-body tracking-wider ${colors.bg} ${colors.text} rounded-sm`}
                      >
                        {trait}
                      </span>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="border-t border-white/[0.06] pt-6">
                    <p className="font-quote italic text-sm text-white/35 leading-relaxed">
                      「{item.quote}」
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </div>

        {/* Bottom quote */}
        <AnimatedCard delay={600}>
          <div className="max-w-3xl mx-auto text-center mt-20">
            <blockquote className="font-quote italic text-xl sm:text-2xl text-white/40 leading-relaxed">
              「當好主意結合好治理，自然會產生真正的好生意。這樣的好生意，才真正支撐韌性台灣、淨零台灣、進步台灣。」
            </blockquote>
            <cite className="block mt-4 font-body text-sm text-white/25 not-italic">
              —— 黃育徵，循環台灣基金會
            </cite>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
