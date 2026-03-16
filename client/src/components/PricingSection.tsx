/*
  DESIGN: Clean Presentation Style
  PricingSection: Light gray background, clean pricing cards
*/
import { PACKAGES } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check } from "lucide-react";
import { toast } from "sonner";

export default function PricingSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section id="pricing" className="py-20 bg-pres-light-gray">
      <div className="container">
        {/* Section title */}
        <div ref={titleRef} className={`mb-14 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-xs tracking-[0.2em] text-pres-green uppercase mb-3">課程方案</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-pres-dark leading-tight">
            選擇適合您的學習方案
          </h2>
          <p className="text-base text-pres-text-secondary mt-3 max-w-2xl">
            從觀念啟蒙到企業包班，滿足不同階段的學習需求。
          </p>
          <div className="w-12 h-0.5 bg-pres-green mt-6" />
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {PACKAGES.map((pkg, i) => (
            <PricingCard key={pkg.name} pkg={pkg} index={i} />
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-pres-text-secondary">
            早鳥優惠進行中，名額有限。企業包班另有團體優惠，歡迎來電洽詢。
          </p>
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  pkg,
  index,
}: {
  pkg: (typeof PACKAGES)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`bg-white border flex flex-col transition-all duration-700 ${
        pkg.highlight ? "border-pres-green border-2" : "border-pres-border"
      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Highlight badge */}
      {pkg.highlight && (
        <div className="bg-pres-green text-white text-xs font-bold text-center py-1.5 tracking-wider">
          最受歡迎
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Package name */}
        <h3 className="text-lg font-bold text-pres-dark">{pkg.name}</h3>
        <p className="text-xs text-pres-text-secondary mt-1 mb-4">{pkg.description}</p>

        {/* Price */}
        <div className="mb-4">
          <span className="text-2xl font-black text-pres-dark">{pkg.price}</span>
          {pkg.originalPrice && (
            <span className="text-sm text-pres-text-secondary line-through ml-2">
              {pkg.originalPrice}
            </span>
          )}
        </div>

        {/* Duration */}
        <p className="text-xs text-pres-text-secondary mb-5 pb-5 border-b border-pres-border">
          課程時數：{pkg.duration}
        </p>

        {/* Includes */}
        <ul className="space-y-2.5 mb-6 flex-1">
          {pkg.includes.map((item, j) => (
            <li key={j} className="flex items-start gap-2.5 text-sm text-pres-text">
              <Check size={14} className="shrink-0 mt-0.5 text-pres-green" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <button
          onClick={() => toast("報名功能即將開放，敬請期待！")}
          className={`w-full py-3 text-sm font-medium transition-colors ${
            pkg.highlight
              ? "bg-pres-green text-white hover:bg-pres-green-light"
              : "bg-pres-light-gray text-pres-dark hover:bg-pres-border"
          }`}
        >
          {pkg.price === "專案報價" ? "聯繫我們" : "立即報名"}
        </button>
      </div>
    </div>
  );
}
