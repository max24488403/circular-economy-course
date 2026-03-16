/*
  DESIGN: Clean Presentation Style
  HeroSection: Light background, bold typography, no images
*/
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="pt-28 pb-20 bg-white" ref={ref}>
      <div className="container">
        {/* Top label */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-xs tracking-[0.3em] text-pres-text-secondary uppercase mb-8">
            循環台灣基金會 &times; 顧問團隊
          </p>
        </div>

        {/* Main title */}
        <div
          className={`transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-pres-dark leading-tight tracking-tight">
            「五加二」與「循環三部曲」
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-pres-green mt-3 leading-snug">
            從產業創新到國家升級的結構轉型指南
          </h2>
        </div>

        {/* Divider line */}
        <div
          className={`w-16 h-0.5 bg-pres-green mt-8 mb-8 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          } origin-left`}
        />

        {/* Subtitle paragraph */}
        <div
          className={`max-w-2xl transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-base text-pres-text leading-relaxed">
            循環經濟與新農業並非單一產業政策，而是台灣未來發展的兩大支柱，彼此相互連動、相互強化。它們所牽動的，不只是某一個產業，而是百行百業的制度重組與發展邏輯轉換。
          </p>
          <p className="text-sm text-pres-text-secondary mt-4">
            ——黃育徵，循環台灣基金會
          </p>
        </div>

        {/* Key concept box */}
        <div
          className={`mt-12 p-6 bg-pres-light-gray border-l-4 border-pres-green transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-sm font-semibold text-pres-green mb-2">核心觀點</p>
          <p className="text-base text-pres-text leading-relaxed">
            從這個角度來看，「5+2」其實更接近「5&times;2」，是「乘效」的關係。「五」是產業升級，「二」是國家升級——循環經濟與新農業，決定的是台灣未來的能源結構、資源利用模式、產業空間布局，以及城鄉發展平衡。
          </p>
        </div>

        {/* Stats bar */}
        <div
          className={`mt-12 grid grid-cols-3 gap-6 transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {[
            { value: "18", unit: "小時", label: "完整課程" },
            { value: "4", unit: "大", label: "核心模組" },
            { value: "3", unit: "部曲", label: "循環框架" },
          ].map((stat) => (
            <div key={stat.label} className="text-center py-4 border-t-2 border-pres-border">
              <div className="text-2xl sm:text-3xl font-black text-pres-dark">
                {stat.value}
                <span className="text-sm font-normal text-pres-text-secondary ml-1">{stat.unit}</span>
              </div>
              <div className="text-xs text-pres-text-secondary mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div
          className={`mt-16 flex items-center gap-2 text-pres-text-secondary transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <ArrowDown size={14} className="animate-bounce" />
          <span className="text-xs tracking-wider">向下瀏覽完整課程內容</span>
        </div>
      </div>
    </section>
  );
}
