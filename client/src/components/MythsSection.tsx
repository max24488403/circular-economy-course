/*
  DESIGN: Clean Presentation Style
  MythsSection: White background, structured myth-busting cards
*/
import { MYTHS } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { XCircle, CheckCircle, ArrowRight } from "lucide-react";

export default function MythsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section id="myths" className="py-20 bg-white">
      <div className="container">
        {/* Section title */}
        <div ref={titleRef} className={`mb-14 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-xs tracking-[0.2em] text-pres-green uppercase mb-3">單元二</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-pres-dark leading-tight">
            循環經濟不是您想的那樣！
          </h2>
          <p className="text-base text-pres-text-secondary mt-3 max-w-2xl">
            破除三大迷思，對應三大「超越」揭示商機。每一個迷思的破除，都對應著一個全新的商機視野。
          </p>
          <div className="w-12 h-0.5 bg-pres-green mt-6" />
        </div>

        {/* Three super-transcendences intro */}
        <div className="mb-12 p-6 bg-pres-light-gray border border-pres-border">
          <h3 className="text-base font-bold text-pres-dark mb-3">循環經濟：三大「超越」</h3>
          <p className="text-sm text-pres-text leading-relaxed mb-4">
            循環經濟不是多回收，而是三個發展「超越」的觀念轉移。這不是某個產業的優化，而是整體經濟邏輯從線性走向循環的轉型。
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {MYTHS.map((myth) => (
              <div key={myth.number} className="p-4 bg-white border border-pres-border">
                <p className="text-xs text-pres-text-secondary mb-1">超越 {myth.number}</p>
                <p className="text-sm font-bold text-pres-dark">{myth.truth}</p>
                <p className="text-xs text-pres-green mt-1">{myth.englishTruth}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Myth cards */}
        <div className="space-y-8">
          {MYTHS.map((myth, i) => (
            <MythCard key={myth.number} myth={myth} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MythCard({
  myth,
  index,
}: {
  myth: (typeof MYTHS)[number];
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
      {/* Myth header */}
      <div className="p-6 border-b border-pres-border">
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-pres-terracotta-bg text-pres-terracotta">
            <XCircle size={20} />
          </div>
          <div>
            <p className="text-xs text-pres-text-secondary mb-1">迷思 {myth.number}</p>
            <h3 className="text-lg font-bold text-pres-dark">「{myth.myth}」</h3>
          </div>
        </div>
        <p className="text-sm text-pres-text leading-relaxed mt-3 ml-14">{myth.description}</p>
      </div>

      {/* Truth */}
      <div className="p-6 border-b border-pres-border bg-pres-green-bg">
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-white text-pres-green">
            <CheckCircle size={20} />
          </div>
          <div>
            <p className="text-xs text-pres-green mb-1">觀念釋疑</p>
            <h4 className="text-base font-bold text-pres-dark">{myth.truth}</h4>
            <p className="text-sm text-pres-text leading-relaxed mt-2">{myth.opportunity}</p>
          </div>
        </div>
      </div>

      {/* Comparison table */}
      <div className="p-6">
        <p className="text-xs font-semibold text-pres-text-secondary mb-3 uppercase tracking-wider">思維對比</p>
        <div className="space-y-3">
          {myth.comparison.map((c, j) => (
            <div key={j} className="flex items-start gap-3 text-sm">
              <div className="flex-1 p-3 bg-pres-light-gray text-pres-text-secondary">
                <p className="text-xs text-pres-terracotta font-medium mb-1">舊思維</p>
                {c.old}
              </div>
              <ArrowRight size={16} className="shrink-0 mt-4 text-pres-green" />
              <div className="flex-1 p-3 bg-pres-green-bg text-pres-text">
                <p className="text-xs text-pres-green font-medium mb-1">新思維</p>
                {c.new}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
