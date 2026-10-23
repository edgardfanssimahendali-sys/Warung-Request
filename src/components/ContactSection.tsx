import React, { useState } from 'react';
import { MessageCircle, Copy, Check, MapPin, Clock } from 'lucide-react';
import { WA_PHONE, WA_DISPLAY, CONTACT_PERSON } from '../data/menu';

interface ContactSectionProps {
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(WA_DISPLAY).then(() => {
      setCopied(true);
      onShowToast('Nomor WhatsApp berhasil disalin!');
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      onShowToast('Gagal menyalin nomor secara otomatis.');
    });
  };

  const directWaUrl = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent('Halo WAREQ (' + CONTACT_PERSON + '), saya mau tanya mengenai pesanan.')}`;

  return (
    <section id="kontak" className="py-16 sm:py-24 bg-[var(--green)] text-[var(--on-green)] scroll-mt-16 transition-colors">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading and info */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[var(--yellow)]">
              Kontak Langsung
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--on-green)] leading-tight">
              Mau makan apa? <br />
              <span className="text-[var(--yellow)]">WAREQ aja!</span>
            </h2>
            <p className="text-[var(--on-green)]/90 text-base sm:text-lg max-w-xl leading-relaxed">
              Hubungi kami langsung via WhatsApp untuk pesan makanan, tanya ketersediaan menu hari ini, reservasi tempat untuk teman sekelas, atau request menu spesial.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-black/15 border border-white/10 rounded-2xl p-4">
                <MapPin className="w-5 h-5 text-[var(--yellow)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[var(--on-green)]">Lokasi</h4>
                  <p className="text-xs sm:text-sm text-[var(--on-green)]/80 mt-0.5">
                    Area Kampus Politeknik Internasional Bali (PIB), Tabanan, Bali
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-black/15 border border-white/10 rounded-2xl p-4">
                <Clock className="w-5 h-5 text-[var(--yellow)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[var(--on-green)]">Jam Operasional</h4>
                  <p className="text-xs sm:text-sm text-[var(--on-green)]/80 mt-0.5">
                    Senin – Sabtu: 10.00 – 21.00 WITA <br />
                    (Minggu: Khusus katering/pesanan)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: WhatsApp Contact Card */}
          <div className="lg:col-span-5">
            <div className="bg-[var(--surface)] text-[var(--fg)] border-2 border-[var(--line)] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                  WhatsApp Hotline Resmi
                </span>
                <p className="text-2xl sm:text-3xl font-display font-bold text-[var(--fg)] mt-1 tracking-tight">
                  {WA_DISPLAY}
                </p>
                <p className="text-sm font-bold text-[var(--orange-text)] mt-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Admin: {CONTACT_PERSON} (Aktif Melayani)</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch gap-3">
                <a
                  href={directWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-5 rounded-full bg-[var(--btn)] text-[var(--btn-fg)] font-bold text-sm flex items-center justify-center gap-2 shadow hover:brightness-105 active:scale-95 transition-all text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Buka WhatsApp</span>
                </a>

                <button
                  onClick={handleCopy}
                  type="button"
                  className="py-3.5 px-5 rounded-full border-2 border-[var(--fg)] bg-transparent text-[var(--fg)] font-bold text-sm flex items-center justify-center gap-2 hover:bg-[var(--bg-alt)] active:scale-95 transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Salin Nomor</span>
                    </>
                  )}
                </button>
              </div>

              <div className="border-t border-[var(--line)] pt-4 text-xs text-[var(--muted)] leading-relaxed">
                💡 <em>Tips:</em> Simpan nomor kontak WAREQ di WhatsApp agar sewaktu-waktu mau makan siang atau ngemil pas nugas, tinggal kirim chat pesan!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
