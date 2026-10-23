export type Category = 'semua' | 'makanan' | 'snack' | 'minuman';

export interface MenuItem {
  id: string;
  cat: 'makanan' | 'snack' | 'minuman';
  name: string;
  desc: string;
  price: number;
  image?: string;
  isPopular?: boolean;
  spicyLevel?: number; // 0 to 3
  tags?: string[];
  includesRice?: boolean;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export type OrderMode = 'Makan di tempat' | 'Bawa pulang';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  program: string;
  content: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}
