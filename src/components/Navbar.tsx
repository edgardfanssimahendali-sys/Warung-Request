import React from 'react';
import { ShoppingBag, Sun, Moon, Utensils } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  theme,
  onToggleTheme
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[var(--bg)]/95 backdrop-blur-md border-b border-[var(--line)] transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#atas"
          className="flex items-center gap-2.5 font-display text-2xl font-bold tracking-tight text-[var(--fg)] hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
          aria-label="WAREQ Beranda"
        >
          <div className="w-9 h-9 rounded-full bg-[var(--green)] flex items-center justify-center text-[var(--yellow)] shadow-sm">
            <Utensils className="w-5 h-5" />
          </div>
          <span>WAREQ</span>
        </a>

        {/* Zone 2: Nav Links (Clean single line typography) */}
        <nav className="hidden md:flex items-center gap-6 text-[15px] font-bold text-[var(--muted)]" aria-label="Navigasi Utama">
          <a href="#menu" className="hover:text-[var(--fg)] transition-colors whitespace-nowrap">
            Menu
          </a>
          <a href="#keunggulan" className="hover:text-[var(--fg)] transition-colors whitespace-nowrap">
            Keunggulan
          </a>
          <a href="#pesan" className="hover:text-[var(--fg)] transition-colors whitespace-nowrap">
            Request
          </a>
          <a href="#faq" className="hover:text-[var(--fg)] transition-colors whitespace-nowrap">
            Tanya Jawab
          </a>
          <a href="#kontak" className="hover:text-[var(--fg)] transition-colors whitespace-nowrap">
            Kontak
          </a>
        </nav>

        {/* Zone 3: Actions (Theme toggle + Shopping Bag) */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onToggleTheme}
            type="button"
            className="w-10 h-10 rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--fg)] flex items-center justify-center hover:border-[var(--fg)] transition-colors"
            aria-label={theme === 'dark' ? 'Ganti ke tema terang' : 'Ganti ke tema gelap'}
            title="Ganti Tema"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-emerald-800" />
            )}
          </button>

          <button
            onClick={onOpenCart}
            type="button"
            className="relative flex items-center gap-2 h-10 px-3.5 sm:px-4 rounded-full bg-[var(--btn)] text-[var(--btn-fg)] font-bold text-sm shadow-sm hover:brightness-105 active:scale-95 transition-transform"
            aria-label={`Keranjang belanja, ${cartCount} item`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Pesanan</span>
            {cartCount > 0 && (
              <span className="min-w-5 h-5 px-1.5 rounded-full bg-[var(--yellow)] text-stone-900 font-extrabold text-xs flex items-center justify-center tabular-nums">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
