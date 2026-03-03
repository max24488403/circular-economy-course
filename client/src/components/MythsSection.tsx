/*
  DESIGN: Terra Narrativa — 大地敘事
  Myths: Ivory bg, alternating left-right layout with comparison tables
*/
import { MYTHS, CDN } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Lightbulb, X, Check } from "lucide-react";

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

export default function MythsSection() {
  return (
    <section id="myths" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container">
        {/* Section header */}
        <AnimatedCard>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="font-body text-sm tracking-[0.3em] text-terra-terracotta uppercase mb-6 block">
              單元二
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-terra-charcoal leading-tight mb-8">
              循環經濟<br />
              <span className="text-terra-forest">不是您想的那樣</span>
            </h2>
            <p className="font-body text-lg text-terra-charcoal/50 leading-relaxed max-w-2xl mx-auto">
              破除三大迷思，看見三大商機——每一個迷思的破除，都對應著一個全新的商業價值創造途徑。
            </p>
          </div>
        </AnimatedCard>

        {/* Linear vs Circular image */}
        <AnimatedCard>
          <div className="max-w-5xl mx-auto mb-24 rounded-sm overflow-hidden shadow-2xl shadow-terra-charcoal/10">
            <img
              src={CDN.linearVsCircular}
              alt="線性經濟 vs 循環經濟"
              className="w-full h-auto"
            />
          </div>
        </AnimatedCard>

        {/* Myths */}
        <div className="space-y-24 lg:space-y-32">
          {MYTHS.map((myth, i) => (
            <AnimatedCard key={myth.number}>
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}>
                {/* Left: Myth info */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  {/* Number & myth */}
                  <div className="flex items-start gap-4 mb-6">
                    <span className="font-display text-6xl lg:text-7xl font-bold text-terra-charcoal/[0.06] leading-none">
                      {myth.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <X size={16} className="text-red-400" />
                        <span className="font-body text-sm text-red-400 tracking-wider">迷思</span>
                      </div>
                      <h3 className="font-display text-2xl lg:text-3xl font-bold text-terra-charcoal">
                        「{myth.myth}」
                      </h3>
                    </div>
                  </div>

                  {/* Truth */}
                  <div className="flex items-center gap-2 mb-4 pl-2">
                    <ArrowRight size={16} className="text-terra-forest" />
                    <span className="font-body text-base font-medium text-terra-forest tracking-wider">
                      {myth.truth}
                    </span>
                  </div>

                  <p className="font-body text-base text-terra-charcoal/60 leading-relaxed mb-8 pl-2">
                    {myth.description}
                  </p>

                  {/* Opportunity */}
                  <div className="p-6 bg-terra-forest/[0.04] border-l-2 border-terra-forest/30 rounded-r-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb size={16} className="text-terra-amber" />
                      <span className="font-body text-sm font-medium text-terra-amber tracking-wider">商機揭示</span>
                    </div>
                    <p className="font-body text-sm text-terra-charcoal/70 leading-relaxed">
                      {myth.opportunity}
                    </p>
                  </div>
                </div>

                {/* Right: Comparison table */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-terra-charcoal rounded-sm p-8 lg:p-10">
                    <h4 className="font-display text-xl font-semibold text-white mb-8">
                      思維對照
                    </h4>
                    <div className="space-y-6">
                      {myth.comparison.map((item, j) => (
                        <div key={j} className="space-y-3">
                          <div className="flex items-start gap-3">
                            <X size={14} className="text-red-400/60 mt-1 shrink-0" />
                            <p className="font-body text-sm text-white/40 leading-relaxed line-through decoration-white/10">
                              {item.old}
                            </p>
                          </div>
                          <div className="flex items-start gap-3">
                            <Check size={14} className="text-terra-forest-light mt-1 shrink-0" />
                            <p className="font-body text-sm text-white/80 leading-relaxed">
                              {item.new}
                            </p>
                          </div>
                          {j < myth.comparison.length - 1 && (
                            <div className="w-full h-px bg-white/[0.06] mt-3" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
