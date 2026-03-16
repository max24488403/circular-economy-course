/*
  DESIGN: Clean Presentation Style
  ComparisonSection: Light gray background, clean comparison table
*/
import { COMPARISON } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ComparisonSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: tableRef, isVisible: tableVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-pres-light-gray">
      <div className="container">
        {/* Section title */}
        <div ref={titleRef} className={`mb-14 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-xs tracking-[0.2em] text-pres-green uppercase mb-3">市場定位</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-pres-dark leading-tight">
            與市場現有課程的差異化比較
          </h2>
          <p className="text-base text-pres-text-secondary mt-3 max-w-2xl">
            本課程以「價值導向」取代「義務導向」，從企業經營痛點出發，而非從法規要求出發。
          </p>
          <div className="w-12 h-0.5 bg-pres-green mt-6" />
        </div>

        {/* Comparison table */}
        <div
          ref={tableRef}
          className={`bg-white border border-pres-border overflow-hidden transition-all duration-700 ${
            tableVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Table header */}
          <div className="grid grid-cols-3 border-b border-pres-border bg-pres-light-gray">
            <div className="p-4 text-xs font-bold text-pres-text-secondary uppercase tracking-wider">
              比較維度
            </div>
            <div className="p-4 text-xs font-bold text-pres-text-secondary uppercase tracking-wider border-l border-pres-border">
              市場現有課程
            </div>
            <div className="p-4 text-xs font-bold text-pres-green uppercase tracking-wider border-l border-pres-border">
              本課程
            </div>
          </div>

          {/* Table rows */}
          {COMPARISON.map((row, i) => (
            <div
              key={row.dimension}
              className={`grid grid-cols-3 ${
                i < COMPARISON.length - 1 ? "border-b border-pres-border" : ""
              }`}
            >
              <div className="p-4 text-sm font-semibold text-pres-dark">
                {row.dimension}
              </div>
              <div className="p-4 text-sm text-pres-text-secondary border-l border-pres-border">
                {row.market}
              </div>
              <div className="p-4 text-sm text-pres-text border-l border-pres-border bg-pres-green-bg">
                <strong className="text-pres-green">{row.ours}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
