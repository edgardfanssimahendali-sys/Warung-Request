import React from 'react';
import { ArrowRight, MessageSquarePlus, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onRequestMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onRequestMenu }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:py-20">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[var(--orange-text)]">
              <Sparkles className="w-4 h-4 text-[var(--yellow)] shrink-0" />
              <span>Warung Makan Dekat Kampus PIB Tabanan</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--fg)] leading-[1.08]">
              Mau makan apa? <br />
              <span className="text-[var(--orange)] underline decoration-[var(--yellow)] decoration-wavy decoration-3 underline-offset-8">
                WAREQ
              </span>{' '}
              aja!
            </h1>

            <p className="text-lg sm:text-xl text-[var(--muted)] leading-relaxed max-w-xl">
              Ayam goreng sambal matah otentik Bali, chicken curry kuah rempah, dan aneka snack hangat renyah. 
              Semua menu makanan sudah komplit dengan nasi, dan menu favoritmu bebas di-request.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#menu"
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[var(--btn)] text-[var(--btn-fg)] font-bold text-base shadow-md hover:-translate-y-0.5 transition-all"
              >
                <span>Pilih Menu Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#pesan"
                onClick={onRequestMenu}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[var(--fg)] text-[var(--fg)] bg-transparent font-bold text-base hover:bg-[var(--bg-alt)] hover:-translate-y-0.5 transition-all"
              >
                <MessageSquarePlus className="w-4 h-4 text-[var(--orange)]" />
                <span>Request Menu Khusus</span>
              </a>
            </div>

            {/* Unboxed Metadata / Value Proof */}
            <div className="flex flex-wrap items-center gap-2.5 text-sm font-bold text-[var(--muted)] pt-2 border-t border-[var(--line)]">
              <span className="text-[var(--fg)]">Rasa Mantap</span>
              <span aria-hidden="true" className="text-[var(--orange)]">·</span>
              <span>Harga Ramah Mahasiswa</span>
              <span aria-hidden="true" className="text-[var(--orange)]">·</span>
              <span>Cepat & Dekat Kampus</span>
            </div>
          </div>

          {/* Right Column: Visual Anchor */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[420px] aspect-square">
              {/* Organic decorative background splash */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[var(--yellow)]/30 rounded-[40px] transform rotate-3 scale-105 transition-transform duration-300 pointer-events-none"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[var(--green)]/15 rounded-[36px] transform -rotate-2 scale-102 pointer-events-none"
              />

              <div className="relative w-full h-full rounded-[32px] overflow-hidden border-4 border-[var(--surface)] shadow-2xl bg-[var(--surface)] flex items-center justify-center">
                <img
                  src="/src/assets/images/wareq_logo_hero_1792738429939.jpg"
                  alt="Emblem WAREQ Warung Makan: Panci hijau hangat beruap"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute bottom-3 left-3 right-3 bg-[var(--surface)]/95 backdrop-blur-md rounded-2xl p-3 border border-[var(--line)] shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[var(--orange-text)]">
                      Spesial Hari Ini
                    </p>
                    <p className="text-sm font-bold text-[var(--fg)]">
                      Ayam Sambal Matah + Nasi
                    </p>
                  </div>
                  <span className="font-display font-bold text-lg text-[var(--orange-text)] tabular-nums">
                    Rp25.000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
