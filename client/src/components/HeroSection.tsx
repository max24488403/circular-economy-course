/*
  DESIGN: Terra Narrativa — 大地敘事
  Hero: Full-viewport immersive dark scene with parallax, grain texture
*/
import { CDN } from "@/lib/constants";
import { useParallax } from "@/hooks/useScrollAnimation";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollY = useParallax();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <img
          src={CDN.heroBg}
          alt=""
          className="w-full h-[120%] object-cover"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-terra-charcoal/70 via-terra-charcoal/50 to-terra-charcoal/90" />
      </div>

      {/* Grain texture */}
      <div className="absolute inset-0 z-[1] grain-overlay" />

      {/* Content */}
      <div className="relative z-10 container text-center px-4 pt-20">
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-white/15 rounded-sm bg-white/5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-terra-forest-light animate-pulse" />
          <span className="font-body text-sm text-white/70 tracking-widest uppercase">
            循環台灣基金會 × 顧問團隊
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-6">
          <span className="block">從</span>
          <span className="block mt-2">
            <span className="text-terra-terracotta-light">好主意</span>
            <span className="mx-3 text-white/30">到</span>
            <span className="text-terra-forest-light">好生意</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-body text-lg sm:text-xl md:text-2xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed mb-4">
          循環經濟不是環保義務，而是企業基業長青的核心競爭力
        </p>

        {/* Quote */}
        <blockquote className="font-quote italic text-base sm:text-lg text-white/40 max-w-2xl mx-auto mb-12">
          「循環三部曲的核心，是把發展順序倒過來：不是從好生意出發，而是從循環好主意出發。」
          <cite className="block mt-2 text-sm not-italic text-white/30">—— 黃育徵，循環台灣基金會</cite>
        </blockquote>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-terra-terracotta text-white font-body text-base tracking-wider rounded-sm transition-all duration-500 hover:bg-terra-terracotta-light hover:shadow-xl hover:shadow-terra-terracotta/20 hover:-translate-y-0.5"
          >
            立即報名課程
          </button>
          <button
            onClick={() => document.querySelector("#pain-points")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 border border-white/20 text-white/80 font-body text-base tracking-wider rounded-sm transition-all duration-500 hover:bg-white/5 hover:border-white/40"
          >
            了解課程內容
          </button>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16 mb-12">
          {[
            { value: "18", unit: "小時", label: "完整課程" },
            { value: "4", unit: "大", label: "核心模組" },
            { value: "3", unit: "大", label: "迷思破除" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold text-white">
                {stat.value}
                <span className="text-lg text-white/40 ml-1">{stat.unit}</span>
              </div>
              <div className="font-body text-xs text-white/40 tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-body text-xs text-white/30 tracking-widest">SCROLL</span>
        <ChevronDown size={20} className="text-white/30" />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
