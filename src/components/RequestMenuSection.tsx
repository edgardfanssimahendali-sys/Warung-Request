import React, { useState } from 'react';
import { Send, Sparkles, MessageSquare, CheckCircle2 } from 'lucide-react';
import { WA_PHONE, CONTACT_PERSON } from '../data/menu';

export const RequestMenuSection: React.FC = () => {
  const [name, setName] = useState('');
  const [requestedMenu, setRequestedMenu] = useState('');
  const [portion, setPortion] = useState('1 porsi');
  const [notes, setNotes] = useState('');

  const quickSuggestions = [
    'Nasi Goreng Ayam + Telur Dadar',
    'Capcay Kuah Hangat',
    'Ayam Bakar Madu Pedas Manis',
    'Mie Kuah Pedas Spesial',
    'Tempe Orek & Sayur Sop Rumahan'
  ];

  const handleSuggestionClick = (sug: string) => {
    if (!requestedMenu) {
      setRequestedMenu(sug);
    } else {
      setRequestedMenu((prev) => `${prev}, ${sug}`);
    }
  };

  const generateWhatsAppUrl = () => {
    const lines = [
      `Halo WAREQ (${CONTACT_PERSON}), saya mau request menu khusus:`,
      `• Menu: ${requestedMenu.trim() || 'Menu khusus'}`,
      `• Jumlah: ${portion}`
    ];

    if (name.trim()) {
      lines.push(`• Dari: ${name.trim()}`);
    }

    if (notes.trim()) {
      lines.push(`• Catatan: ${notes.trim()}`);
    }

    lines.push('\nMohon dicek ya ketersediaannya. Terima kasih!');

    const encoded = encodeURIComponent(lines.join('\n'));
    return `https://wa.me/${WA_PHONE}?text=${encoded}`;
  };

  const isFormValid = requestedMenu.trim().length > 0;

  return (
    <section id="pesan" className="py-16 sm:py-24 bg-[var(--green)] text-[var(--on-green)] scroll-mt-16 transition-colors">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading & Explanation */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[var(--yellow)]">
              <Sparkles className="w-4 h-4" />
              <span>Layanan Spesial Anak Kampus</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--on-green)] leading-tight">
              Punya menu favorit? Mau yang lain? <br />
              <span className="text-[var(--yellow)]">Yuk request aja!</span>
            </h2>

            <p className="text-[var(--on-green)]/90 text-base sm:text-lg leading-relaxed">
              Kangen masakan rumah, pengen menu tertentu pas nugas kelompok, atau ada pantangan makanan? 
              Tulis saja menu yang kamu mau. WhatsApp akan langsung terbuka dengan pesan yang sudah siap dikirim ke {CONTACT_PERSON}.
            </p>

            {/* Guarantees */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm font-semibold text-[var(--on-green)]/95">
                <CheckCircle2 className="w-5 h-5 text-[var(--yellow)] shrink-0" />
                <span>Bebas custom lauk, sambal, atau porsi</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-[var(--on-green)]/95">
                <CheckCircle2 className="w-5 h-5 text-[var(--yellow)] shrink-0" />
                <span>Konfirmasi langsung dalam beberapa menit</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-[var(--on-green)]/95">
                <CheckCircle2 className="w-5 h-5 text-[var(--yellow)] shrink-0" />
                <span>Harga tetap bersahabat untuk anak kos</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Card Form */}
          <div className="lg:col-span-7">
            <div className="bg-[var(--surface)] text-[var(--fg)] border-2 border-[var(--line)] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--green)] text-[var(--yellow)] flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[var(--fg)]">
                      Formulir Request Menu
                    </h3>
                    <p className="text-xs text-[var(--muted)]">
                      Terkoneksi langsung ke WhatsApp WAREQ
                    </p>
                  </div>
                </div>
              </div>

              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="reqName" className="block text-sm font-bold text-[var(--fg)]">
                  Nama Kamu
                </label>
                <input
                  id="reqName"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Budi (Kosan Merpati / Jurusan Hospitality)"
                  className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg)] border border-[var(--line)] text-[var(--fg)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--focus)] text-sm transition-colors"
                />
              </div>

              {/* Requested Dish */}
              <div className="space-y-1.5">
                <label htmlFor="reqMenu" className="block text-sm font-bold text-[var(--fg)]">
                  Menu yang Kamu Mau <span className="text-[var(--orange)]">*</span>
                </label>
                <textarea
                  id="reqMenu"
                  rows={3}
                  value={requestedMenu}
                  onChange={(e) => setRequestedMenu(e.target.value)}
                  placeholder="Contoh: Nasi goreng kampung ekstra pedas, pakai telur ceplok setengah matang dan es teh"
                  className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg)] border border-[var(--line)] text-[var(--fg)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--focus)] text-sm transition-colors resize-y"
                />

                {/* Suggestions */}
                <div className="pt-1">
                  <p className="text-xs font-bold text-[var(--muted)] mb-1.5">
                    Inspirasi request populer:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {quickSuggestions.map((sug, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleSuggestionClick(sug)}
                        className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--bg-alt)] hover:bg-[var(--line)] text-[var(--fg)] transition-colors"
                      >
                        + {sug}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Portions & Notes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="reqPortion" className="block text-sm font-bold text-[var(--fg)]">
                    Perkiraan Porsi
                  </label>
                  <input
                    id="reqPortion"
                    type="text"
                    value={portion}
                    onChange={(e) => setPortion(e.target.value)}
                    placeholder="Contoh: 1 porsi / 3 porsi"
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg)] border border-[var(--line)] text-[var(--fg)] text-sm focus:outline-none focus:border-[var(--focus)]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="reqNotes" className="block text-sm font-bold text-[var(--fg)]">
                    Waktu / Catatan Tambahan
                  </label>
                  <input
                    id="reqNotes"
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Contoh: Diambil jam 12.30 siang"
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg)] border border-[var(--line)] text-[var(--fg)] text-sm focus:outline-none focus:border-[var(--focus)]"
                  />
                </div>
              </div>

              {/* Submit CTA via WhatsApp */}
              <div className="pt-2">
                <a
                  href={isFormValid ? generateWhatsAppUrl() : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-6 rounded-full font-bold text-base flex items-center justify-center gap-2 shadow-md transition-all ${
                    isFormValid
                      ? 'bg-[var(--btn)] text-[var(--btn-fg)] hover:brightness-105 active:scale-[0.99] cursor-pointer'
                      : 'bg-stone-300 text-stone-500 cursor-not-allowed opacity-60'
                  }`}
                  aria-disabled={!isFormValid}
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Request lewat WhatsApp</span>
                </a>
                <p className="text-center text-xs text-[var(--muted)] mt-2">
                  Request baru resmi terkirim setelah kamu menekan tombol kirim di aplikasi WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
