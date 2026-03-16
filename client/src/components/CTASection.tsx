/*
  DESIGN: Clean Presentation Style
  CTASection: White background, simple call-to-action
*/
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast } from "sonner";

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="cta" className="py-20 bg-white">
      <div className="container">
        <div
          ref={ref}
          className={`p-8 sm:p-12 bg-pres-green-bg border border-pres-green transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-pres-dark leading-tight mb-4">
              準備好啟動您的循環轉型了嗎？
            </h2>
            <p className="text-base text-pres-text leading-relaxed mb-3">
              企業主不缺環保知識，缺的是策略思維與行動框架。從「循環經濟是成本」到「循環經濟是商機」，從「被動合規」到「主動創新」——這正是本課程要帶給您的根本轉變。
            </p>
            <p className="text-sm text-pres-text-secondary mb-6">
              循環經濟不是未來的選項，而是現在的必修課。從「好主意」出發，讓循環經濟成為企業基業長青的核心競爭力。
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => toast("報名功能即將開放，敬請期待！")}
                className="px-8 py-3 bg-pres-green text-white text-sm font-medium hover:bg-pres-green-light transition-colors"
              >
                立即報名課程
              </button>
              <button
                onClick={() => toast("諮詢功能即將開放，敬請期待！")}
                className="px-8 py-3 border border-pres-green text-pres-green text-sm font-medium hover:bg-white transition-colors"
              >
                預約免費諮詢
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
