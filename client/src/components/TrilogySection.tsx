/*
  DESIGN: Clean Presentation Style
  TrilogySection: Light gray background, clean numbered cards for the trilogy
*/
import { TRILOGY } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const colorAccents = [
  { border: "border-pres-green", bg: "bg-pres-green-bg", text: "text-pres-green" },
  { border: "border-pres-amber", bg: "bg-pres-amber-bg", text: "text-pres-amber" },
  { border: "border-pres-terracotta", bg: "bg-pres-terracotta-bg", text: "text-pres-terracotta" },
];

export default function TrilogySection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section id="trilogy" className="py-20 bg-pres-light-gray">
      <div className="container">
        {/* Section title */}
        <div ref={titleRef} className={`mb-14 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-xs tracking-[0.2em] text-pres-green uppercase mb-3">單元三</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-pres-dark leading-tight">
            循環三部曲：從好主意到好生意
          </h2>
          <p className="text-base text-pres-text-secondary mt-3 max-w-2xl">
            循環三部曲的核心，是把發展順序倒過來：不是從好生意出發，而是從循環好主意出發。
          </p>
          <div className="w-12 h-0.5 bg-pres-green mt-6" />
        </div>

        {/* Flow indicator */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-12 flex-wrap">
          {TRILOGY.map((item, i) => (
            <div key={item.number} className="flex items-center gap-3 sm:gap-4">
              <div className={`px-4 py-2 text-sm font-bold ${colorAccents[i].bg} ${colorAccents[i].text} border ${colorAccents[i].border}`}>
                {item.subtitle}
              </div>
              {i < TRILOGY.length - 1 && (
                <span className="text-pres-text-secondary text-lg">&rarr;</span>
              )}
            </div>
          ))}
        </div>

        {/* Trilogy cards */}
        <div className="space-y-6">
          {TRILOGY.map((item, i) => (
            <TrilogyCard key={item.number} item={item} index={i} accent={colorAccents[i]} />
          ))}
        </div>

        {/* Bottom quote */}
        <div className="mt-12 p-6 bg-white border border-pres-border border-l-4 border-l-pres-green">
          <p className="text-sm text-pres-text leading-relaxed">
            <strong className="text-pres-dark">「5+2」其實更接近「5&times;2」</strong>——「五」是產業升級，「二」是國家升級。循環經濟與新農業，決定的是台灣未來的能源結構、資源利用模式、產業空間布局，以及城鄉發展平衡。
          </p>
          <p className="text-xs text-pres-text-secondary mt-2">——黃育徵，循環台灣基金會</p>
        </div>
      </div>
    </section>
  );
}

function TrilogyCard({
  item,
  index,
  accent,
}: {
  item: (typeof TRILOGY)[number];
  index: number;
  accent: { border: string; bg: string; text: string };
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`bg-white border border-pres-border transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`shrink-0 w-12 h-12 flex items-center justify-center text-lg font-black ${accent.bg} ${accent.text} border ${accent.border}`}>
            {item.number}
          </div>
          <div>
            <h3 className="text-xl font-bold text-pres-dark">{item.title}</h3>
            <p className={`text-sm ${accent.text} font-medium`}>{item.subtitle}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-pres-text leading-relaxed mb-5">{item.description}</p>

        {/* Traits */}
        <div className="flex flex-wrap gap-2 mb-5">
          {item.traits.map((trait) => (
            <span
              key={trait}
              className={`text-xs px-3 py-1.5 ${accent.bg} ${accent.text} border ${accent.border}`}
            >
              {trait}
            </span>
          ))}
        </div>

        {/* Quote */}
        <div className={`p-4 ${accent.bg} border-l-3 ${accent.border}`}>
          <p className="text-sm text-pres-text italic">「{item.quote}」</p>
        </div>
      </div>
    </div>
  );
}
