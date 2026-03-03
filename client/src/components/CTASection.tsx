/*
  DESIGN: Terra Narrativa — 大地敘事
  CTA: Full-width immersive call to action with future vision image
*/
import { CDN } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast } from "sonner";

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

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={CDN.futureVision}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-terra-charcoal/75" />
      </div>
      <div className="absolute inset-0 grain-overlay" />

      <div className="relative z-10 container">
        <AnimatedCard>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
              企業主不缺環保知識<br />
              <span className="text-terra-terracotta-light">缺的是策略思維與行動框架</span>
            </h2>
            <p className="font-body text-lg text-white/50 leading-relaxed mb-12 max-w-2xl mx-auto">
              從「循環經濟是成本」到「循環經濟是商機」，從「被動合規」到「主動創新」，
              從追求短期的「好生意」到思考長期的「好主意」——這正是本課程要帶給您的根本轉變。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => toast("報名功能即將開放，敬請期待！")}
                className="px-10 py-4 bg-terra-terracotta text-white font-body text-base tracking-wider rounded-sm transition-all duration-500 hover:bg-terra-terracotta-light hover:shadow-xl hover:shadow-terra-terracotta/20 hover:-translate-y-0.5"
              >
                立即報名，開啟轉型之旅
              </button>
              <button
                onClick={() => toast("下載功能即將開放，敬請期待！")}
                className="px-10 py-4 border border-white/20 text-white/80 font-body text-base tracking-wider rounded-sm transition-all duration-500 hover:bg-white/5 hover:border-white/40"
              >
                下載課程簡章
              </button>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
