import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/menu';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[var(--bg-alt)] transition-colors">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[var(--orange-text)] mb-2">
            Kata Mereka
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--fg)]">
            Cerita Mahasiswa & Pelanggan WAREQ
          </h2>
          <p className="text-[var(--muted)] text-base sm:text-lg mt-3 leading-relaxed">
            Dari anak kuliah PIB sampai warga sekitar, ini alasan mereka selalu balik lagi ke WAREQ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[var(--surface)] border-2 border-[var(--line)] rounded-2xl p-6 shadow-sm flex flex-col justify-between gap-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[var(--line)]" />
                </div>
                <p className="text-sm sm:text-base text-[var(--fg)] leading-relaxed italic">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--line)]">
                <p className="font-bold text-sm text-[var(--fg)]">{t.name}</p>
                <p className="text-xs text-[var(--muted)]">{t.role} · {t.program}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
