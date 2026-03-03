/*
  DESIGN: Terra Narrativa — 大地敘事
  Comparison: Market differentiation table
*/
import { COMPARISON } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className="transition-all duration-1000 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function ComparisonSection() {
  return (
    <section className="py-24 lg:py-32 bg-terra-charcoal relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay" />

      <div className="relative z-10 container">
        <AnimatedCard>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="font-body text-sm tracking-[0.3em] text-terra-terracotta-light uppercase mb-6 block">
              市場差異化
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              為何選擇<span className="text-terra-forest-light">這門課程？</span>
            </h2>
            <p className="font-body text-lg text-white/40 leading-relaxed max-w-2xl mx-auto">
              我們不只傳遞知識，更致力於翻轉思維——從義務導向到價值導向的根本轉變。
            </p>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={200}>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 lg:p-6 font-body text-sm text-white/30 tracking-wider border-b border-white/[0.06]">
                    比較維度
                  </th>
                  <th className="text-left p-4 lg:p-6 font-body text-sm text-white/30 tracking-wider border-b border-white/[0.06]">
                    市場現有課程
                  </th>
                  <th className="text-left p-4 lg:p-6 font-body text-sm text-terra-forest-light tracking-wider border-b border-terra-forest/20">
                    本課程設計
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={i} className="group hover:bg-white/[0.02] transition-colors duration-300">
                    <td className="p-4 lg:p-6 font-body text-sm font-medium text-white/70 border-b border-white/[0.04]">
                      {row.dimension}
                    </td>
                    <td className="p-4 lg:p-6 font-body text-sm text-white/35 border-b border-white/[0.04]">
                      {row.market}
                    </td>
                    <td className="p-4 lg:p-6 font-body text-sm text-terra-forest-light border-b border-terra-forest/10">
                      {row.ours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
