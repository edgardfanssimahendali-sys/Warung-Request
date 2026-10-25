import React from 'react';
import { ArrowRight } from 'lucide-react';
import { MenuItem } from '../types';
import { formatRupiah } from '../data/menu';

interface FloatingCartDockProps {
  cart: Record<string, number>;
  menuItems: MenuItem[];
  onOpenCart: () => void;
}

export const FloatingCartDock: React.FC<FloatingCartDockProps> = ({
  cart,
  menuItems,
  onOpenCart
}) => {
  const itemMap = new Map<string, MenuItem>(menuItems.map((m) => [m.id, m]));
  const cartEntries = Object.entries(cart).filter(([_, qty]) => qty > 0);

  const totalCount = cartEntries.reduce((sum, [_, qty]) => sum + qty, 0);
  if (totalCount === 0) return null;

  const totalAmount = cartEntries.reduce((sum, [id, qty]) => {
    const item = itemMap.get(id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  return (
    <aside
      aria-label="Keranjang pesanan cepat"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-md pointer-events-auto shadow-2xl"
    >
      <button
        onClick={onOpenCart}
        type="button"
        className="w-full py-3.5 px-6 rounded-full bg-[var(--btn)] text-[var(--btn-fg)] font-bold text-sm sm:text-base flex items-center justify-between gap-4 border-2 border-white/20 hover:brightness-105 active:scale-[0.98] transition-all shadow-xl"
        aria-label={`Buka pesanan, ${totalCount} item, total ${formatRupiah(totalAmount)}`}
      >
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-[var(--yellow)] text-stone-900 flex items-center justify-center font-black text-xs sm:text-sm tabular-nums shadow-sm">
            {totalCount}
          </div>
          <span className="font-bold">Lihat Pesanan</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-display font-semibold text-base sm:text-lg text-[var(--yellow)] tabular-nums">
            {formatRupiah(totalAmount)}
          </span>
          <ArrowRight className="w-4 h-4 text-[var(--yellow)]" />
        </div>
      </button>
    </aside>
  );
};
