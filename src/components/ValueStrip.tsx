import React from 'react';

export const ValueStrip: React.FC = () => {
  return (
    <div className="bg-[var(--green)] text-[var(--on-green)] py-4 border-y border-[var(--line)] shadow-inner">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm sm:text-base font-bold">
          <div className="flex items-center gap-2">
            <span className="font-display font-semibold text-xl text-[var(--yellow)]">Rp25.000</span>
            <span>Menu Makanan Lengkap Nasi</span>
          </div>

          <div className="flex items-center gap-2">
            <span>Snack Mulai</span>
            <span className="font-display font-semibold text-xl text-[var(--yellow)]">Rp8.000</span>
          </div>

          <div className="flex items-center gap-2">
            <span>Bebas</span>
            <span className="font-display font-semibold text-xl text-[var(--yellow)]">Request Menu</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-[var(--yellow)] font-display text-lg">
            <span>Good Food, Good Mood ✨</span>
          </div>
        </div>
      </div>
    </div>
  );
};
