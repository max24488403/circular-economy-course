/*
  DESIGN: Terra Narrativa — 大地敘事
  Modules: Ivory bg, clean modular layout
*/
import { MODULES } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Clock, BookOpen } from "lucide-react";

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

const moduleColors = [
  { accent: "bg-terra-forest", text: "text-terra-forest", border: "border-terra-forest/20", light: "bg-terra-forest/5" },
  { accent: "bg-terra-terracotta", text: "text-terra-terracotta", border: "border-terra-terracotta/20", light: "bg-terra-terracotta/5" },
  { accent: "bg-terra-amber", text: "text-terra-amber", border: "border-terra-amber/20", light: "bg-terra-amber/5" },
  { accent: "bg-terra-charcoal", text: "text-terra-charcoal", border: "border-terra-charcoal/20", light: "bg-terra-charcoal/5" },
];

export default function ModulesSection() {
  return (
    <section id="modules" className="py-24 lg:py-32 bg-background">
      <div className="container">
        {/* Section header */}
        <AnimatedCard>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="font-body text-sm tracking-[0.3em] text-terra-terracotta uppercase mb-6 block">
              課程架構
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-terra-charcoal leading-tight mb-8">
              四大核心模組<br />
              <span className="text-terra-forest">18 小時完整學習旅程</span>
            </h2>
            <p className="font-body text-lg text-terra-charcoal/50 leading-relaxed max-w-2xl mx-auto">
              從觀念翻轉到實戰演練，循序漸進地建構您的循環經濟策略能力。
            </p>
          </div>
        </AnimatedCard>

        {/* Module cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {MODULES.map((mod, i) => {
            const color = moduleColors[i];
            return (
              <AnimatedCard key={mod.id} delay={i * 150}>
                <div className={`group relative p-8 lg:p-10 border ${color.border} rounded-sm ${color.light} hover:shadow-xl transition-all duration-700 h-full`}>
                  {/* Module ID badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 ${color.accent} rounded-sm flex items-center justify-center`}>
                      <span className="font-display text-xl font-bold text-white">{mod.id}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-terra-charcoal/30" />
                      <span className="font-body text-sm text-terra-charcoal/40">{mod.hours} 小時</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-terra-charcoal mb-2">
                    {mod.title}
                  </h3>
                  <p className={`font-body text-sm ${color.text} tracking-wider mb-6`}>
                    {mod.subtitle}
                  </p>

                  {/* Topics */}
                  <div className="space-y-3">
                    {mod.topics.map((topic, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <BookOpen size={14} className="text-terra-charcoal/20 mt-1 shrink-0" />
                        <span className="font-body text-sm text-terra-charcoal/60 leading-relaxed">
                          {topic}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
