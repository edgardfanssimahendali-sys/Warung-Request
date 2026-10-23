import React from 'react';
import { X, Flame, Plus, Minus, Check } from 'lucide-react';
import { MenuItem } from '../types';
import { formatRupiah } from '../data/menu';

interface DishDetailModalProps {
  item: MenuItem | null;
  quantity: number;
  onClose: () => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  item,
  quantity,
  onClose,
  onUpdateQuantity
}) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[var(--scrim)] backdrop-blur-sm flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dishDetailTitle"
      onClick={onClose}
    >
      <div
        className="bg-[var(--surface)] text-[var(--fg)] border-2 border-[var(--line)] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-[var(--surface)]/90 backdrop-blur border border-[var(--line)] text-[var(--fg)] flex items-center justify-center hover:bg-[var(--bg-alt)] transition-colors"
          aria-label="Tutup detail menu"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image / Header */}
        <div className="relative w-full h-56 sm:h-64 bg-[var(--bg-alt)] shrink-0 overflow-hidden">
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center font-display text-4xl text-[var(--green)]">
              WAREQ
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-[var(--green)] text-[var(--on-green)]">
              {item.cat === 'makanan' ? 'Makanan Utama' : item.cat === 'snack' ? 'Snack Hangat' : 'Minuman Segar'}
            </span>
            {item.spicyLevel !== undefined && item.spicyLevel > 0 && (
              <div className="flex items-center gap-1 bg-red-600/90 text-white px-2.5 py-1 rounded-full text-xs font-bold">
                <Flame className="w-3.5 h-3.5 fill-current" />
                <span>Level {item.spicyLevel}</span>
              </div>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div>
            <h3 id="dishDetailTitle" className="text-2xl font-bold text-[var(--fg)]">
              {item.name}
            </h3>
            <p className="text-2xl font-display font-semibold text-[var(--orange-text)] mt-1 tabular-nums">
              {formatRupiah(item.price)}
              {item.includesRice && (
                <span className="text-xs font-body font-bold text-[var(--muted)] ml-2">
                  (Sudah termasuk nasi putih)
                </span>
              )}
            </p>
          </div>

          <p className="text-[var(--muted)] text-base leading-relaxed">
            {item.desc}
          </p>

          {/* Highlights */}
          <div className="bg-[var(--bg)] border border-[var(--line)] rounded-2xl p-4 space-y-2">
            <h4 className="text-sm font-bold text-[var(--fg)]">Keistimewaan Menu:</h4>
            <ul className="text-sm text-[var(--muted)] space-y-1">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dimasak fresh dengan bumbu rempah tradisional</span>
              </li>
              {item.includesRice && (
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sudah termasuk 1 porsi nasi putih pulen hangat</span>
                </li>
              )}
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bisa request tingkat kepedasan atau sambal dipisah</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-[var(--bg-alt)] border-t border-[var(--line)] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 bg-[var(--surface)] border border-[var(--line)] rounded-full p-1">
            <button
              onClick={() => onUpdateQuantity(item.id, -1)}
              type="button"
              className="w-9 h-9 rounded-full bg-[var(--green)] text-[var(--on-green)] flex items-center justify-center font-bold text-lg hover:opacity-90 active:scale-95 transition-transform"
              aria-label={`Kurangi ${item.name}`}
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-10 text-center font-extrabold text-base tabular-nums">
              {quantity}
            </span>
            <button
              onClick={() => onUpdateQuantity(item.id, 1)}
              type="button"
              className="w-9 h-9 rounded-full bg-[var(--green)] text-[var(--on-green)] flex items-center justify-center font-bold text-lg hover:opacity-90 active:scale-95 transition-transform"
              aria-label={`Tambah ${item.name}`}
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => {
              if (quantity === 0) {
                onUpdateQuantity(item.id, 1);
              }
              onClose();
            }}
            type="button"
            className="flex-1 py-3 px-5 rounded-full bg-[var(--btn)] text-[var(--btn-fg)] font-bold text-sm shadow hover:brightness-105 active:scale-95 transition-all text-center"
          >
            {quantity > 0 ? `Simpan Pesanan (${quantity})` : 'Tambah ke Pesanan'}
          </button>
        </div>
      </div>
    </div>
  );
};
