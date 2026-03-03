/*
  DESIGN: Terra Narrativa — 大地敘事
  Footer: Minimal, dark, elegant
*/
import { CDN } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-terra-charcoal py-16 lg:py-20">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={CDN.ctLogo}
                alt="循環台灣基金會"
                className="h-8 w-auto object-contain"
              />
              <span className="font-display text-lg font-semibold text-terra-ivory tracking-wide">
                循環經濟學院
              </span>
            </div>
            <p className="font-body text-sm text-white/35 leading-relaxed max-w-xs">
              循環台灣基金會 × 顧問團隊，以企業經營痛點出發，導入循環三部曲核心框架，讓循環經濟成為企業基業長青的核心競爭力。
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-base font-semibold text-white mb-6">課程導覽</h4>
            <div className="space-y-3">
              {[
                { label: "企業痛點分析", href: "#pain-points" },
                { label: "觀念釋疑", href: "#myths" },
                { label: "循環三部曲", href: "#trilogy" },
                { label: "課程模組", href: "#modules" },
                { label: "師資陣容", href: "#instructors" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                  className="block font-body text-sm text-white/35 hover:text-terra-terracotta-light transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-semibold text-white mb-6">聯繫我們</h4>
            <div className="space-y-3 font-body text-sm text-white/35">
              <p>循環台灣基金會</p>
              <p>Circular Taiwan Network</p>
              <p className="text-terra-terracotta-light/70 hover:text-terra-terracotta-light transition-colors">
                info@circular-taiwan.org
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/20">
            &copy; {new Date().getFullYear()} 循環台灣基金會. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/20">
            課程設計：循環台灣基金會 × 顧問團隊
          </p>
        </div>
      </div>
    </footer>
  );
}
