/*
  DESIGN: Terra Narrativa — 大地敘事
  Pricing: Clean pricing cards with highlight
*/
import { PACKAGES } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check, Star } from "lucide-react";
import { toast } from "sonner";

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

export default function PricingSection() {
  return (
    <section id="cta" className="py-24 lg:py-32 bg-terra-warm-gray/30">
      <div className="container">
        <AnimatedCard>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="font-body text-sm tracking-[0.3em] text-terra-terracotta uppercase mb-6 block">
              方案與報名
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-terra-charcoal leading-tight mb-8">
              選擇適合您的<span className="text-terra-forest">學習方案</span>
            </h2>
            <p className="font-body text-lg text-terra-charcoal/50 leading-relaxed max-w-2xl mx-auto">
              無論您是初步探索或準備全面啟動轉型，我們都有適合的方案。
            </p>
          </div>
        </AnimatedCard>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          {PACKAGES.map((pkg, i) => (
            <AnimatedCard key={pkg.name} delay={i * 150}>
              <div
                className={`relative p-8 lg:p-10 rounded-sm h-full flex flex-col ${
                  pkg.highlight
                    ? "bg-terra-charcoal text-white border-2 border-terra-terracotta/30 shadow-2xl shadow-terra-charcoal/20"
                    : "bg-white border border-terra-charcoal/[0.06] shadow-lg shadow-terra-charcoal/5"
                }`}
              >
                {/* Highlight badge */}
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1 bg-terra-terracotta text-white text-xs font-body tracking-wider rounded-sm">
                    <Star size={12} />
                    最受歡迎
                  </div>
                )}

                {/* Package info */}
                <div className="mb-8">
                  <h3 className={`font-display text-xl font-semibold mb-2 ${
                    pkg.highlight ? "text-white" : "text-terra-charcoal"
                  }`}>
                    {pkg.name}
                  </h3>
                  <p className={`font-body text-sm mb-6 ${
                    pkg.highlight ? "text-white/50" : "text-terra-charcoal/40"
                  }`}>
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="mb-2">
                    <span className={`font-display text-3xl lg:text-4xl font-bold ${
                      pkg.highlight ? "text-terra-terracotta-light" : "text-terra-charcoal"
                    }`}>
                      {pkg.price}
                    </span>
                  </div>
                  {pkg.originalPrice && (
                    <span className={`font-body text-sm line-through ${
                      pkg.highlight ? "text-white/30" : "text-terra-charcoal/30"
                    }`}>
                      {pkg.originalPrice}
                    </span>
                  )}
                  <div className={`font-body text-sm mt-2 ${
                    pkg.highlight ? "text-white/40" : "text-terra-charcoal/40"
                  }`}>
                    {pkg.duration}
                  </div>
                </div>

                {/* Includes */}
                <div className="space-y-3 mb-8 flex-1">
                  {pkg.includes.map((item, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Check size={14} className={`mt-0.5 shrink-0 ${
                        pkg.highlight ? "text-terra-forest-light" : "text-terra-forest"
                      }`} />
                      <span className={`font-body text-sm ${
                        pkg.highlight ? "text-white/70" : "text-terra-charcoal/60"
                      }`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA button */}
                <button
                  onClick={() => toast("報名功能即將開放，敬請期待！")}
                  className={`w-full py-3.5 font-body text-sm tracking-wider rounded-sm transition-all duration-500 ${
                    pkg.highlight
                      ? "bg-terra-terracotta text-white hover:bg-terra-terracotta-light hover:shadow-lg"
                      : "bg-terra-charcoal text-white hover:bg-terra-charcoal/90 hover:shadow-lg"
                  }`}
                >
                  {pkg.price === "專案報價" ? "聯繫我們" : "立即報名"}
                </button>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Early bird note */}
        <AnimatedCard delay={400}>
          <div className="max-w-2xl mx-auto text-center mt-12">
            <p className="font-body text-sm text-terra-charcoal/40">
              早鳥優惠進行中，名額有限。企業包班另有團體優惠，歡迎來電洽詢。
            </p>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
