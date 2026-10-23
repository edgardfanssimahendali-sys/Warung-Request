import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, Send, ShoppingBag } from 'lucide-react';
import { MenuItem, OrderMode } from '../types';
import { WA_PHONE, formatRupiah, CONTACT_PERSON } from '../data/menu';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: Record<string, number>;
  menuItems: MenuItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  menuItems,
  onUpdateQuantity,
  onClearCart
}) => {
  const [orderMode, setOrderMode] = useState<OrderMode>('Makan di tempat');
  const [customerName, setCustomerName] = useState('');
  const [orderNote, setOrderNote] = useState('');

  if (!isOpen) return null;

  const itemMap = new Map<string, MenuItem>(menuItems.map((m) => [m.id, m]));
  const cartEntries = Object.entries(cart).filter(([_, qty]) => qty > 0);

  const totalAmount = cartEntries.reduce((sum, [id, qty]) => {
    const item = itemMap.get(id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const generateWhatsAppUrl = () => {
    const orderLines = cartEntries.map(([id, qty]) => {
      const item = itemMap.get(id);
      const subtotal = item ? item.price * qty : 0;
      return `• ${qty}x ${item?.name || id} (${formatRupiah(subtotal)})`;
    });

    const lines = [
      `Halo WAREQ (${CONTACT_PERSON}), saya mau pesan:`,
      ...orderLines,
      `\nTotal: ${formatRupiah(totalAmount)}`,
      `Pesan untuk: ${orderMode}`
    ];

    if (customerName.trim()) {
      lines.push(`Atas nama: ${customerName.trim()}`);
    }

    if (orderNote.trim()) {
      lines.push(`Catatan: ${orderNote.trim()}`);
    }

    lines.push('\nMohon segera diproses ya. Terima kasih!');

    const encoded = encodeURIComponent(lines.join('\n'));
    return `https://wa.me/${WA_PHONE}?text=${encoded}`;
  };

  const hasItems = cartEntries.length > 0;

  return (
    <div
      className="fixed inset-0 z-50 bg-[var(--scrim)] backdrop-blur-sm flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cartDrawerTitle"
      onClick={onClose}
    >
      <div
        className="bg-[var(--bg)] text-[var(--fg)] w-full max-w-md h-full flex flex-col shadow-2xl border-l-2 border-[var(--line)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[var(--line)] flex items-center justify-between bg-[var(--surface)]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[var(--green)] text-[var(--yellow)] flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <h2 id="cartDrawerTitle" className="text-xl font-bold font-display text-[var(--fg)]">
              Pesananmu
            </h2>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="w-9 h-9 rounded-full bg-[var(--bg-alt)] border border-[var(--line)] flex items-center justify-center text-[var(--fg)] hover:border-[var(--fg)] transition-colors"
            aria-label="Tutup keranjang"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {!hasItems ? (
            <div className="bg-[var(--surface)] border border-dashed border-[var(--line)] rounded-2xl p-8 text-center space-y-3 my-4">
              <p className="font-bold text-base text-[var(--fg)]">
                Keranjang masih kosong
              </p>
              <p className="text-xs sm:text-sm text-[var(--muted)]">
                Pilih menu lezat kami dari daftar menu, lalu tekan &ldquo;Tambah&rdquo; untuk mulai memesan.
              </p>
              <button
                onClick={onClose}
                className="py-2.5 px-5 rounded-full bg-[var(--green)] text-[var(--on-green)] font-bold text-xs shadow hover:opacity-95"
              >
                Lihat Daftar Menu
              </button>
            </div>
          ) : (
            <>
              {/* Item Lines */}
              <div className="space-y-3">
                {cartEntries.map(([id, qty]) => {
                  const item = itemMap.get(id);
                  if (!item) return null;
                  const lineTotal = item.price * qty;

                  return (
                    <div
                      key={id}
                      className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-3.5 flex items-center justify-between gap-3 shadow-sm"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-sm text-[var(--fg)] truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-[var(--muted)] mt-0.5">
                          {formatRupiah(item.price)} × {qty} ={' '}
                          <span className="font-bold text-[var(--orange-text)]">
                            {formatRupiah(lineTotal)}
                          </span>
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 bg-[var(--bg)] border border-[var(--line)] rounded-full p-1 shrink-0">
                        <button
                          onClick={() => onUpdateQuantity(id, -1)}
                          type="button"
                          className="w-7 h-7 rounded-full bg-[var(--green)] text-[var(--on-green)] flex items-center justify-center font-bold text-sm active:scale-95"
                          aria-label={`Kurangi ${item.name}`}
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-6 text-center font-bold text-xs tabular-nums">
                          {qty}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(id, 1)}
                          type="button"
                          className="w-7 h-7 rounded-full bg-[var(--green)] text-[var(--on-green)] flex items-center justify-center font-bold text-sm active:scale-95"
                          aria-label={`Tambah ${item.name}`}
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Subtotal & Total */}
              <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-4 space-y-2">
                <div className="flex items-center justify-between text-sm text-[var(--muted)]">
                  <span>Jumlah Item</span>
                  <span className="font-bold text-[var(--fg)] tabular-nums">
                    {cartEntries.reduce((acc, [_, q]) => acc + q, 0)} porsi
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-[var(--line)]">
                  <span className="font-bold text-base text-[var(--fg)]">Total Pembayaran</span>
                  <span className="font-display font-semibold text-2xl text-[var(--orange-text)] tabular-nums">
                    {formatRupiah(totalAmount)}
                  </span>
                </div>
              </div>

              {/* Order Options */}
              <div className="space-y-4 pt-1">
                {/* Dining Mode */}
                <div className="space-y-2">
                  <span className="block text-xs font-bold uppercase tracking-wider text-[var(--muted)]">
                    Cara Menikmati Pesanan
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {(['Makan di tempat', 'Bawa pulang'] as OrderMode[]).map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setOrderMode(mode)}
                        className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                          orderMode === mode
                            ? 'border-[var(--green)] bg-[var(--green)] text-[var(--on-green)] shadow-sm'
                            : 'border-[var(--line)] bg-[var(--surface)] text-[var(--fg)] hover:border-[var(--muted)]'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div className="space-y-1">
                  <label htmlFor="ordName" className="block text-xs font-bold text-[var(--fg)]">
                    Atas Nama
                  </label>
                  <input
                    id="ordName"
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Nama kamu (contoh: Alex PIB)"
                    className="w-full px-3.5 py-2 text-sm rounded-xl bg-[var(--surface)] border border-[var(--line)] text-[var(--fg)] focus:outline-none focus:border-[var(--focus)]"
                  />
                </div>

                {/* Notes */}
                <div className="space-y-1">
                  <label htmlFor="ordNote" className="block text-xs font-bold text-[var(--fg)]">
                    Catatan Khusus
                  </label>
                  <textarea
                    id="ordNote"
                    rows={2}
                    value={orderNote}
                    onChange={(e) => setOrderNote(e.target.value)}
                    placeholder="Contoh: Sambal dipisah, nasi dibungkus rapat"
                    className="w-full px-3.5 py-2 text-sm rounded-xl bg-[var(--surface)] border border-[var(--line)] text-[var(--fg)] focus:outline-none focus:border-[var(--focus)] resize-none"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Actions */}
        {hasItems && (
          <div className="p-4 sm:p-5 bg-[var(--surface)] border-t border-[var(--line)] space-y-2.5">
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-full bg-[var(--btn)] text-[var(--btn-fg)] font-bold text-sm shadow hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Pesanan lewat WhatsApp</span>
            </a>

            <div className="flex items-center justify-between text-xs text-[var(--muted)] pt-1">
              <button
                onClick={onClearCart}
                type="button"
                className="text-stone-500 hover:text-red-600 font-bold flex items-center gap-1 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Kosongkan Pesanan</span>
              </button>
              <span>Langsung chat ke {CONTACT_PERSON}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
