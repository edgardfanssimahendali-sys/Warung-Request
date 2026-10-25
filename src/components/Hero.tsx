import React from 'react';
import { ArrowRight, MessageSquarePlus, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onRequestMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onRequestMenu }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:py-20">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[var(--orange-text)] bg-[var(--surface)] border border-[var(--line)] px-4 py-1.5 rounded-full shadow-sm">
            <Sparkles className="w-4 h-4 text-[var(--yellow)] shrink-0" />
            <span>Warung Makan Dekat Kampus PIB Tabanan</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--fg)] leading-[1.08]">
            Mau makan apa? <br />
            <span className="text-[var(--orange)] underline decoration-[var(--yellow)] decoration-wavy decoration-3 underline-offset-8">
              WAREQ
            </span>{' '}
            aja!
          </h1>

          <p className="text-lg sm:text-xl text-[var(--muted)] leading-relaxed max-w-2xl">
            Ayam goreng sambal matah otentik Bali, chicken curry kuah rempah, dan aneka snack hangat renyah. 
            Semua menu makanan sudah komplit dengan nasi, dan menu favoritmu bebas di-request.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <a
              href="#menu"
              onClick={onExploreMenu}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[var(--btn)] text-[var(--btn-fg)] font-bold text-base shadow-md hover:-translate-y-0.5 transition-all"
            >
              <span>Pilih Menu Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#pesan"
              onClick={onRequestMenu}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-[var(--fg)] text-[var(--fg)] bg-transparent font-bold text-base hover:bg-[var(--bg-alt)] hover:-translate-y-0.5 transition-all"
            >
              <MessageSquarePlus className="w-4 h-4 text-[var(--orange)]" />
              <span>Request Menu Khusus</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
