import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
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
      aria-label="Keranjang belanja cepat"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-md animate-in fade-in slide-in-from-bottom-4 duration-300 pointer-events-auto"
    >
      <button
        onClick={onOpenCart}
        type="button"
        className="w-full py-3.5 px-5 rounded-full bg-[var(--btn)] text-[var(--btn-fg)] font-bold text-sm shadow-2xl flex items-center justify-between gap-4 border-2 border-white/20 hover:brightness-105 active:scale-[0.98] transition-all"
        aria-label={`Buka pesanan, total ${totalCount} item senilai ${formatRupiah(totalAmount)}`}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-[var(--yellow)] text-stone-900 flex items-center justify-center font-extrabold text-xs">
            {totalCount}
          </div>
          <span>Lihat Pesanan</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-display font-semibold text-base text-[var(--yellow)] tabular-nums">
            {formatRupiah(totalAmount)}
          </span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </button>
    </aside>
  );
};
