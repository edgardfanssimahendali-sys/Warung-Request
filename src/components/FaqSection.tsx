import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/menu';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 scroll-mt-16 transition-colors">
      <div className="max-w-[840px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[var(--orange-text)] mb-2">
            <HelpCircle className="w-4 h-4 text-[var(--orange)]" />
            <span>Tanya Jawab</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--fg)]">
            Pertanyaan yang Sering Muncul
          </h2>
          <p className="text-[var(--muted)] text-base mt-2">
            Hal-hal yang sering ditanyakan seputar porsi, pemesanan WhatsApp, dan layanan request menu WAREQ.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-[var(--surface)] border-2 border-[var(--line)] rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[var(--fg)] hover:text-[var(--orange-text)] transition-colors focus-visible:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[var(--bg-alt)] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[var(--green)] text-[var(--on-green)]' : 'text-[var(--muted)]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-[var(--muted)] leading-relaxed border-t border-[var(--line)]/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
