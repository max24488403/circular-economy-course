/*
  DESIGN: Clean Presentation Style
  InstructorsSection: White background, simple text-based instructor cards
*/
import { INSTRUCTORS } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { User } from "lucide-react";

export default function InstructorsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section id="instructors" className="py-20 bg-white">
      <div className="container">
        {/* Section title */}
        <div ref={titleRef} className={`mb-14 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-xs tracking-[0.2em] text-pres-green uppercase mb-3">師資陣容</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-pres-dark leading-tight">
            理論深度 &times; 實戰經驗
          </h2>
          <p className="text-base text-pres-text-secondary mt-3 max-w-2xl">
            結合循環經濟思想領袖與產業實務專家，提供兼具深度與可執行性的學習體驗。
          </p>
          <div className="w-12 h-0.5 bg-pres-green mt-6" />
        </div>

        {/* Instructor cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {INSTRUCTORS.map((instructor, i) => (
            <InstructorCard key={instructor.name} instructor={instructor} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function InstructorCard({
  instructor,
  index,
}: {
  instructor: (typeof INSTRUCTORS)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`border border-pres-border bg-white p-6 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Avatar placeholder */}
      <div className="w-14 h-14 bg-pres-light-gray flex items-center justify-center mb-4">
        <User size={24} className="text-pres-text-secondary" />
      </div>

      {/* Name & title */}
      <h3 className="text-base font-bold text-pres-dark">{instructor.name}</h3>
      <p className="text-xs text-pres-green font-medium mt-1 mb-3">{instructor.title}</p>

      {/* Bio */}
      <p className="text-sm text-pres-text leading-relaxed">{instructor.bio}</p>
    </div>
  );
}
