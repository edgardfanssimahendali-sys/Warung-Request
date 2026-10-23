import React from 'react';
import { Utensils } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--green)] text-[var(--on-green)] border-t border-[var(--on-green)]/15 py-8 transition-colors">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-semibold">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[var(--yellow)] text-stone-900 flex items-center justify-center">
              <Utensils className="w-3.5 h-3.5" />
            </div>
            <span>
              <strong className="font-display font-bold text-base tracking-wide">WAREQ</strong> · Mau Makan Apa? WAREQ Aja!
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs sm:text-sm text-[var(--on-green)]/80">
            <span>Area Kampus PIB Tabanan, Bali</span>
            <span aria-hidden="true">·</span>
            <span className="text-[var(--yellow)] font-display">Good Food, Good Mood</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
