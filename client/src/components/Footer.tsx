/*
  DESIGN: Clean Presentation Style
  Footer: Simple, minimal footer
*/
import { CDN } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="py-10 bg-pres-light-gray border-t border-pres-border">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={CDN.ctLogo} alt="循環台灣基金會" className="h-6 w-auto" />
            <span className="text-xs text-pres-text-secondary">
              循環台灣基金會 &times; 顧問團隊
            </span>
          </div>
          <p className="text-xs text-pres-text-secondary">
            &copy; {new Date().getFullYear()} Circular Taiwan Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
