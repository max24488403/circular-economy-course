/*
  DESIGN: Clean Presentation Style
  ModulesSection: White background, clean module cards
*/
import { MODULES } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Clock, BookOpen } from "lucide-react";

export default function ModulesSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section id="modules" className="py-20 bg-white">
      <div className="container">
        {/* Section title */}
        <div ref={titleRef} className={`mb-14 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-xs tracking-[0.2em] text-pres-green uppercase mb-3">課程架構</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-pres-dark leading-tight">
            四大核心模組 &middot; 18 小時學習旅程
          </h2>
          <p className="text-base text-pres-text-secondary mt-3 max-w-2xl">
            從觀念翻轉到行動方案，每一個模組都對應企業循環轉型的關鍵階段。
          </p>
          <div className="w-12 h-0.5 bg-pres-green mt-6" />
        </div>

        {/* Module cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {MODULES.map((mod, i) => (
            <ModuleCard key={mod.id} mod={mod} index={i} />
          ))}
        </div>

        {/* Total hours summary */}
        <div className="mt-10 p-5 bg-pres-light-gray border border-pres-border flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <Clock size={18} className="text-pres-green" />
            <span className="text-sm text-pres-text">
              總計 <strong className="text-pres-dark">18 小時</strong>完整學習旅程
            </span>
          </div>
          <div className="flex items-center gap-3">
            <BookOpen size={18} className="text-pres-green" />
            <span className="text-sm text-pres-text">
              含實作演練、案例分析、行動方案制定
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ModuleCard({
  mod,
  index,
}: {
  mod: (typeof MODULES)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`border border-pres-border bg-white transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Module header */}
      <div className="p-5 border-b border-pres-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center bg-pres-green text-white text-sm font-bold">
            {mod.id}
          </span>
          <div>
            <h3 className="text-base font-bold text-pres-dark">{mod.title}</h3>
            <p className="text-xs text-pres-text-secondary">{mod.subtitle}</p>
          </div>
        </div>
        <div className="text-right shrink-0">
          <span className="text-lg font-black text-pres-green">{mod.hours}</span>
          <span className="text-xs text-pres-text-secondary ml-1">小時</span>
        </div>
      </div>

      {/* Topics */}
      <div className="p-5">
        <ul className="space-y-2.5">
          {mod.topics.map((topic, j) => (
            <li key={j} className="flex items-start gap-2.5 text-sm text-pres-text">
              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-pres-green mt-2" />
              <span className="leading-relaxed">{topic}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
