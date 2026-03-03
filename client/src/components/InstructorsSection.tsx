/*
  DESIGN: Terra Narrativa — 大地敘事
  Instructors: Ivory bg, elegant portrait cards
*/
import { INSTRUCTORS } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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

export default function InstructorsSection() {
  return (
    <section id="instructors" className="py-24 lg:py-32 bg-background">
      <div className="container">
        <AnimatedCard>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="font-body text-sm tracking-[0.3em] text-terra-terracotta uppercase mb-6 block">
              師資陣容
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-terra-charcoal leading-tight mb-8">
              跨領域<span className="text-terra-forest">頂尖師資</span>
            </h2>
            <p className="font-body text-lg text-terra-charcoal/50 leading-relaxed max-w-2xl mx-auto">
              結合循環經濟思想領袖、產業轉型顧問與傳播策略專家，提供最完整的學習體驗。
            </p>
          </div>
        </AnimatedCard>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {INSTRUCTORS.map((instructor, i) => (
            <AnimatedCard key={instructor.name} delay={i * 200}>
              <div className="group text-center">
                {/* Portrait */}
                <div className="relative w-48 h-48 mx-auto mb-8 overflow-hidden rounded-sm">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-terra-forest/10 group-hover:bg-transparent transition-all duration-700" />
                </div>

                {/* Info */}
                <h3 className="font-display text-xl font-semibold text-terra-charcoal mb-1">
                  {instructor.name}
                </h3>
                <p className="font-body text-sm text-terra-forest tracking-wider mb-4">
                  {instructor.title}
                </p>
                <p className="font-body text-sm text-terra-charcoal/50 leading-relaxed max-w-xs mx-auto">
                  {instructor.bio}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
