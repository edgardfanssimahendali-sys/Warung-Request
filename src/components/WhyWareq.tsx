import React from 'react';
import { Flame, MessageCircle, Wallet, Clock } from 'lucide-react';

export const WhyWareq: React.FC = () => {
  const points = [
    {
      icon: Flame,
      title: 'Rasa Enak & Beragam',
      description: 'Sambal matah khas Bali segar, ayam goreng ketumbar gurih, cabe garam pedas, sampai chicken curry kuah rempah kaya rasa.'
    },
    {
      icon: MessageCircle,
      title: 'Bisa Request Menu',
      description: 'Punya menu kangen masakan rumah atau resep favorit yang belum ada di daftar? Tulis saja, kami masakkan sesuai seleramu.'
    },
    {
      icon: Wallet,
      title: 'Harga Ramah Mahasiswa',
      description: 'Makanan utama Rp25.000 sudah sepaket nasi putih pulen hangat. Aneka snack renyah mulai dari Rp8.000 saja.'
    },
    {
      icon: Clock,
      title: 'Cepat, Dekat & Ramah',
      description: 'Sangat dekat dari kampus Politeknik Internasional Bali (PIB). Pas untuk jam istirahat kuliah yang padat tanpa ribet.'
    }
  ];

  return (
    <section id="keunggulan" className="py-16 sm:py-20 scroll-mt-20">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[var(--orange-text)] mb-2">
            Kenapa WAREQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--fg)]">
            Makan enak tidak perlu mahal dan jauh
          </h2>
          <p className="text-[var(--muted)] text-base sm:text-lg mt-3 leading-relaxed">
            Didedikasikan untuk mahasiswa PIB, pelajar, dan warga sekitar yang menginginkan hidangan hangat, lezat, dan mengenyangkan setiap hari.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-[var(--surface)] border-2 border-[var(--line)] rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:border-[var(--green)] hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--green)] text-[var(--yellow)] flex items-center justify-center shrink-0 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[var(--fg)]">
                  {p.title}
                </h3>
                <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
