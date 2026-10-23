import React, { useState, useMemo } from 'react';
import { Search, Flame, Plus, Minus, ArrowRight, Info, Eye } from 'lucide-react';
import { MenuItem, Category } from '../types';
import { MENU_ITEMS, formatRupiah } from '../data/menu';
import { DishDetailModal } from './DishDetailModal';

interface MenuSectionProps {
  cart: Record<string, number>;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRequestMenuClick: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  cart,
  onUpdateQuantity,
  onRequestMenuClick
}) => {
  const [activeCategory, setActiveCategory] = useState<Category>('semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [showPrintModal, setShowPrintModal] = useState(false);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (activeCategory !== 'semua' && item.cat !== activeCategory) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchDesc = item.desc.toLowerCase().includes(query);
        const matchTags = item.tags?.some((t) => t.toLowerCase().includes(query));
        return matchName || matchDesc || matchTags;
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[var(--bg-alt)] scroll-mt-16 transition-colors">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[var(--orange-text)] mb-2">
              Menu Pilihan WAREQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--fg)]">
              Pilih menu, pesan langsung via WhatsApp
            </h2>
            <p className="text-[var(--muted)] text-base sm:text-lg mt-2 max-w-2xl">
              Tekan <strong className="text-[var(--fg)]">Tambah</strong> pada hidangan yang kamu mau, lalu buka keranjang di pojok kanan atas untuk mengirim pesanan ke Caca.
            </p>
          </div>

          {/* Quick Print Menu button */}
          <button
            onClick={() => setShowPrintModal(true)}
            type="button"
            className="inline-flex items-center gap-2 self-start md:self-auto px-4 py-2.5 rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--fg)] font-bold text-sm shadow-sm hover:border-[var(--fg)] transition-all"
          >
            <Eye className="w-4 h-4 text-[var(--orange)]" />
            <span>Papan Menu Cetak</span>
          </button>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Segmented Category Buttons */}
          <div className="inline-flex p-1 bg-[var(--surface)] border border-[var(--line)] rounded-full overflow-x-auto scrollbar-none shadow-sm">
            {(
              [
                { id: 'semua', label: 'Semua Menu' },
                { id: 'makanan', label: 'Makanan' },
                { id: 'snack', label: 'Snack' },
                { id: 'minuman', label: 'Minuman' }
              ] as const
            ).map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  type="button"
                  className={`px-4 sm:px-5 py-2 rounded-full font-bold text-sm transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[var(--green)] text-[var(--on-green)] shadow-sm'
                      : 'text-[var(--muted)] hover:text-[var(--fg)]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px] sm:max-w-xs w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--muted)] pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari menu (sambal, ayam, snack)..."
              className="w-full pl-10 pr-4 py-2 text-sm rounded-full bg-[var(--surface)] border border-[var(--line)] text-[var(--fg)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--focus)] transition-colors shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[var(--muted)] hover:text-[var(--fg)]"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Dishes Grid */}
        {filteredItems.length === 0 ? (
          <div className="bg-[var(--surface)] border-2 border-dashed border-[var(--line)] rounded-3xl p-12 text-center max-w-md mx-auto my-8 space-y-4">
            <p className="font-bold text-lg text-[var(--fg)]">
              Menu tidak ditemukan
            </p>
            <p className="text-sm text-[var(--muted)]">
              Tidak ada menu yang cocok dengan kata kunci &ldquo;{searchQuery}&rdquo;. Kamu bisa request menu favoritmu langsung!
            </p>
            <button
              onClick={onRequestMenuClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--btn)] text-[var(--btn-fg)] font-bold text-sm shadow hover:brightness-105"
            >
              Request Menu Sekarang
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((dish) => {
              const q = cart[dish.id] || 0;

              return (
                <article
                  key={dish.id}
                  className="bg-[var(--surface)] border-2 border-[var(--line)] rounded-2xl overflow-hidden flex flex-col shadow-sm hover:border-[var(--green)] hover:-translate-y-1 transition-all duration-200"
                >
                  {/* Dish Thumbnail */}
                  <div
                    onClick={() => setSelectedDish(dish)}
                    className="relative w-full aspect-[4/3] bg-[var(--bg)] cursor-pointer overflow-hidden group"
                  >
                    {dish.image ? (
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-display font-bold text-2xl text-[var(--green)]">
                        WAREQ
                      </div>
                    )}

                    {/* Category Label */}
                    <div className="absolute top-2.5 left-2.5 bg-[var(--surface)]/90 backdrop-blur-sm text-[var(--fg)] text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-md border border-[var(--line)]">
                      {dish.cat === 'makanan' ? 'Makanan' : dish.cat === 'snack' ? 'Snack' : 'Minuman'}
                    </div>

                    {/* Spicy Level Badge */}
                    {dish.spicyLevel !== undefined && dish.spicyLevel > 0 && (
                      <div className="absolute top-2.5 right-2.5 bg-red-600/90 text-white text-[11px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                        <Flame className="w-3 h-3 fill-current" />
                        <span>Lvl {dish.spicyLevel}</span>
                      </div>
                    )}
                  </div>

                  {/* Body Info */}
                  <div className="p-4 flex-1 flex flex-col justify-between gap-3">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3
                          onClick={() => setSelectedDish(dish)}
                          className="font-bold text-lg text-[var(--fg)] hover:text-[var(--orange-text)] cursor-pointer transition-colors leading-snug"
                        >
                          {dish.name}
                        </h3>
                        <button
                          onClick={() => setSelectedDish(dish)}
                          type="button"
                          className="text-[var(--muted)] hover:text-[var(--fg)] p-0.5"
                          title="Lihat detail menu"
                          aria-label={`Detail untuk ${dish.name}`}
                        >
                          <Info className="w-4 h-4" />
                        </button>
                      </div>

                      <p className="text-xs sm:text-sm text-[var(--muted)] line-clamp-2 mt-1 leading-relaxed">
                        {dish.desc}
                      </p>
                    </div>

                    {/* Price and Cart Controller */}
                    <div className="pt-2 border-t border-[var(--line)] flex items-center justify-between gap-3">
                      <div>
                        <div className="font-display font-semibold text-xl text-[var(--orange-text)] tabular-nums">
                          {formatRupiah(dish.price)}
                        </div>
                        {dish.includesRice && (
                          <div className="text-[11px] font-bold text-[var(--muted)]">
                            sudah termasuk nasi
                          </div>
                        )}
                      </div>

                      {q > 0 ? (
                        <div className="inline-flex items-center gap-1 bg-[var(--bg)] border border-[var(--line)] rounded-full p-1">
                          <button
                            onClick={() => onUpdateQuantity(dish.id, -1)}
                            type="button"
                            className="w-7 h-7 rounded-full bg-[var(--green)] text-[var(--on-green)] flex items-center justify-center font-bold hover:opacity-90 active:scale-95 transition-transform"
                            aria-label={`Kurangi ${dish.name}`}
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="min-w-6 text-center font-bold text-xs sm:text-sm tabular-nums">
                            {q}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(dish.id, 1)}
                            type="button"
                            className="w-7 h-7 rounded-full bg-[var(--green)] text-[var(--on-green)] flex items-center justify-center font-bold hover:opacity-90 active:scale-95 transition-transform"
                            aria-label={`Tambah ${dish.name}`}
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => onUpdateQuantity(dish.id, 1)}
                          type="button"
                          className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-[var(--btn)] text-[var(--btn-fg)] font-bold text-xs shadow-sm hover:brightness-105 active:scale-95 transition-all"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Tambah</span>
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Menu Note Callout */}
        <div className="mt-12 bg-[var(--surface)] border-2 border-dashed border-[var(--line)] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-bold text-base sm:text-lg text-[var(--fg)]">
              Semua menu makanan sudah termasuk nasi putih pulen hangat!
            </p>
            <p className="text-sm text-[var(--muted)]">
              Menu kangen masakan rumah yang kamu cari belum ada di daftar? Langsung request ke kami.
            </p>
          </div>
          <a
            href="#pesan"
            onClick={onRequestMenuClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[var(--fg)] text-[var(--fg)] font-bold text-sm hover:bg-[var(--bg-alt)] whitespace-nowrap transition-colors"
          >
            <span>Request Menu</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Dish Detail Modal */}
      {selectedDish && (
        <DishDetailModal
          item={selectedDish}
          quantity={cart[selectedDish.id] || 0}
          onClose={() => setSelectedDish(null)}
          onUpdateQuantity={onUpdateQuantity}
        />
      )}

      {/* Printed Menu Modal */}
      {showPrintModal && (
        <div
          className="fixed inset-0 z-50 bg-[var(--scrim)] backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setShowPrintModal(false)}
        >
          <div
            className="bg-[var(--surface)] border-2 border-[var(--line)] rounded-3xl max-w-2xl w-full p-6 sm:p-8 overflow-y-auto max-h-[90vh] shadow-2xl relative space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[var(--line)] pb-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--orange-text)]">
                  Papan Daftar Harga
                </span>
                <h3 className="text-2xl font-bold font-display text-[var(--fg)]">
                  Menu Cetak WAREQ
                </h3>
              </div>
              <button
                onClick={() => setShowPrintModal(false)}
                type="button"
                className="w-9 h-9 rounded-full bg-[var(--bg-alt)] border border-[var(--line)] flex items-center justify-center font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <div className="bg-[var(--bg)] border border-[var(--line)] rounded-2xl p-6 space-y-6">
              <div>
                <h4 className="font-display font-semibold text-lg text-[var(--green)] mb-3 pb-1 border-b border-[var(--line)]">
                  Makanan Utama (Sudah Termasuk Nasi)
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-[var(--fg)]">Ayam Goreng Sambal Matah</span>
                    <span className="font-display font-semibold text-[var(--orange-text)]">Rp25.000</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-[var(--fg)]">Chicken Curry Rempah</span>
                    <span className="font-display font-semibold text-[var(--orange-text)]">Rp25.000</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-[var(--fg)]">Ayam Goreng Ketumbar</span>
                    <span className="font-display font-semibold text-[var(--orange-text)]">Rp25.000</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-[var(--fg)]">Ayam Cabe Garam</span>
                    <span className="font-display font-semibold text-[var(--orange-text)]">Rp25.000</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-display font-semibold text-lg text-[var(--green)] mb-3 pb-1 border-b border-[var(--line)]">
                  Snack Hangat & Minuman
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-[var(--fg)]">Cireng Crispy Rujak</span>
                    <span className="font-display font-semibold text-[var(--orange-text)]">Rp10.000</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-[var(--fg)]">Pisang Nugget Manis</span>
                    <span className="font-display font-semibold text-[var(--orange-text)]">Rp15.000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[var(--fg)]">Pisang Goreng Madu</span>
                    <span className="font-display font-semibold text-[var(--orange-text)]">Rp12.000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[var(--fg)]">Tempe Mendoan Gurih</span>
                    <span className="font-display font-semibold text-[var(--orange-text)]">Rp8.000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[var(--fg)]">Es Teh Manis Jumbo</span>
                    <span className="font-display font-semibold text-[var(--orange-text)]">Rp4.000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[var(--fg)]">Es Jeruk Peras Asli</span>
                    <span className="font-display font-semibold text-[var(--orange-text)]">Rp6.000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => setShowPrintModal(false)}
                className="w-full py-3 rounded-full bg-[var(--green)] text-[var(--on-green)] font-bold text-sm hover:opacity-95"
              >
                Tutup & Mulai Pesan
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
