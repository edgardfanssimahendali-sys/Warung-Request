/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueStrip } from './components/ValueStrip';
import { WhyWareq } from './components/WhyWareq';
import { MenuSection } from './components/MenuSection';
import { RequestMenuSection } from './components/RequestMenuSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { FloatingCartDock } from './components/FloatingCartDock';
import { MENU_ITEMS } from './data/menu';

export default function App() {
  // Theme state
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const saved = localStorage.getItem('wareq-theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    } catch {
      return 'light';
    }
  });

  // Cart state: item id -> quantity
  const [cart, setCart] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem('wareq-cart');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync theme attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('wareq-theme', theme);
    } catch {
      // ignore
    }
  }, [theme]);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('wareq-cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      const currentQty = prev[id] || 0;
      const newQty = Math.max(0, Math.min(99, currentQty + delta));
      const next = { ...prev };
      if (newQty === 0) {
        delete next[id];
      } else {
        next[id] = newQty;
      }
      return next;
    });

    if (delta > 0) {
      showToast('Menu ditambahkan ke pesanan!');
    }
  };

  const handleClearCart = () => {
    setCart({});
    showToast('Pesanan telah dikosongkan.');
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2500);
  };

  const cartTotalCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <div id="atas" className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--fg)] relative selection:bg-orange-500 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onExploreMenu={() => {
            const el = document.getElementById('menu');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onRequestMenu={() => {
            const el = document.getElementById('pesan');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <ValueStrip />

        <WhyWareq />

        <MenuSection
          cart={cart}
          onUpdateQuantity={handleUpdateQuantity}
          onRequestMenuClick={() => {
            const el = document.getElementById('pesan');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <RequestMenuSection />

        <TestimonialsSection />

        <FaqSection />

        <ContactSection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        menuItems={MENU_ITEMS}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      {/* Floating Bottom Cart Dock */}
      <FloatingCartDock
        cart={cart}
        menuItems={MENU_ITEMS}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <aside
          role="status"
          aria-live="polite"
          className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 py-2.5 px-5 rounded-full bg-[var(--fg)] text-[var(--bg)] text-xs sm:text-sm font-bold shadow-2xl animate-in fade-in zoom-in-95 pointer-events-none"
        >
          {toastMessage}
        </aside>
      )}
    </div>
  );
}
