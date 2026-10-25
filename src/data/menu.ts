import { MenuItem, FaqItem, Testimonial } from '../types';

export const WA_PHONE = '6287729723527';
export const WA_DISPLAY = '+62 877-2972-3527';
export const CONTACT_PERSON = 'Caca';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'sambal-matah',
    cat: 'makanan',
    name: 'Ayam Goreng Sambal Matah',
    desc: 'Ayam goreng renyah bumbu kuning dengan topping sambal matah khas Bali (bawang merah iris, cabai rawit segar, serai, perasan jeruk limau).',
    price: 25000,
    image: '/src/assets/images/ayam_sambal_matah_1792738429723.jpg',
    isPopular: true,
    spicyLevel: 2,
    tags: ['Favorit PIB', 'Segar', 'Pedas'],
    includesRice: true
  },
  {
    id: 'curry',
    cat: 'makanan',
    name: 'Chicken Curry',
    desc: 'Daging ayam empuk dengan kuah kari rempah kuning kental khas Nusantara, harum daun kari, dan taburan bawang goreng gurih.',
    price: 25000,
    image: '/src/assets/images/chicken_curry_wareq_1792738431257.jpg',
    isPopular: true,
    spicyLevel: 1,
    tags: ['Kuah Rempah', 'Hangat & Gurih'],
    includesRice: true
  },
  {
    id: 'ketumbar',
    cat: 'makanan',
    name: 'Ayam Goreng Ketumbar',
    desc: 'Ayam goreng renyah beraroma ketumbar sangrai dan bawang putih harum, disajikan hangat dengan kremesan gurih dan sambal.',
    price: 25000,
    image: '/src/assets/images/ayam_goreng_ketumbar_1792949452382.jpg',
    isPopular: false,
    spicyLevel: 1,
    tags: ['Gurih Wangi', 'Tradisional'],
    includesRice: true
  },
  {
    id: 'cabe-garam',
    cat: 'makanan',
    name: 'Ayam Cabe Garam',
    desc: 'Potongan ayam goreng renyah ditumis dengan cabai rawit pedas, irisan daun bawang, dan racikan bawang putih gurih garam istimewa.',
    price: 25000,
    image: '/src/assets/images/ayam_cabe_garam_1792949452514.jpg',
    isPopular: true,
    spicyLevel: 3,
    tags: ['Ekstra Pedas', 'Renyah'],
    includesRice: true
  },
  {
    id: 'cireng',
    cat: 'snack',
    name: 'Cireng Crispy Rujak',
    desc: 'Gorengan aci kenyal di dalam, renyah di luar dengan cocolan bumbu rujak pedas manis asam yang bikin nagih.',
    price: 10000,
    image: '/src/assets/images/cireng_bumbu_rujak_1792949453189.jpg',
    isPopular: true,
    spicyLevel: 1,
    tags: ['Camilan Kampus', 'Bumbu Rujak'],
    includesRice: false
  },
  {
    id: 'pisang-nugget',
    cat: 'snack',
    name: 'Pisang Nugget Manis',
    desc: 'Pisang balut remah roti super crispy dengan siraman saus cokelat lumer, taburan keju cheddar parut, dan gula halus.',
    price: 15000,
    image: '/src/assets/images/pisang_nugget_keju_1792949455252.jpg',
    isPopular: true,
    spicyLevel: 0,
    tags: ['Manis Lumer', 'Topping Keju Cokelat'],
    includesRice: false
  },
  {
    id: 'pisang-goreng',
    cat: 'snack',
    name: 'Pisang Goreng Madu',
    desc: 'Pisang raja pilihan goreng tepung renyah dengan rasa manis alami, hangat dan cocok untuk teman nugas.',
    price: 12000,
    image: '/src/assets/images/pisang_goreng_madu_1792949454406.jpg',
    isPopular: false,
    spicyLevel: 0,
    tags: ['Hangat & Renyah'],
    includesRice: false
  },
  {
    id: 'tempe-goreng',
    cat: 'snack',
    name: 'Tempe Mendoan Gurih',
    desc: 'Tempe berbalut adonan tepung daun bawang berbumbu ketumbar, gurih sedap dengan cabe rawit hijau cocolan.',
    price: 8000,
    image: '/src/assets/images/tempe_mendoan_wareq_1792949455637.jpg',
    isPopular: false,
    spicyLevel: 1,
    tags: ['Harga Ramah', 'Gurih'],
    includesRice: false
  },
  {
    id: 'es-teh',
    cat: 'minuman',
    name: 'Es Teh Manis Jumbo',
    desc: 'Teh melati wangi diseduh segar dingin dengan es batu kristal, penghilang dahaga paling pas.',
    price: 4000,
    image: '/src/assets/images/es_teh_manis_jumbo_1792949456688.jpg',
    isPopular: true,
    spicyLevel: 0,
    tags: ['Segar Dingin', 'Ekstra Jumbo'],
    includesRice: false
  },
  {
    id: 'es-jeruk',
    cat: 'minuman',
    name: 'Es Jeruk Peras Asli',
    desc: 'Perasan jeruk segar asli dengan gula tebu asli dan es batu, kaya vitamin C alami.',
    price: 6000,
    image: '/src/assets/images/es_jeruk_peras_1792949456877.jpg',
    isPopular: false,
    spicyLevel: 0,
    tags: ['Jeruk Murni', 'Segar'],
    includesRice: false
  },
  {
    id: 'air-mineral',
    cat: 'minuman',
    name: 'Air Mineral Dingin (600ml)',
    desc: 'Air mineral kemasan botol higienis dan sejuk.',
    price: 4000,
    image: '/src/assets/images/air_mineral_dingin_1792949456861.jpg',
    isPopular: false,
    spicyLevel: 0,
    tags: ['Dingin'],
    includesRice: false
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Apakah harga makanan Rp25.000 sudah termasuk nasi?',
    answer: 'Ya! Semua menu makanan utama di WAREQ sudah komplit dengan nasi putih hangat pulen, jadi kamu tidak perlu bayar ekstra untuk nasi.'
  },
  {
    question: 'Bagaimana cara memesan lewat website ini?',
    answer: 'Cukup pilih menu yang kamu inginkan dengan menekan tombol Tambah, atur porsi di keranjang, pilih Makan di Tempat atau Bawa Pulang, lalu tekan "Kirim pesanan lewat WhatsApp". Pesan akan otomatis terisi dan siap dikirim ke WhatsApp Caca.'
  },
  {
    question: 'Bisakah saya request menu makanan yang tidak ada di daftar?',
    answer: 'Sangat bisa! WAREQ punya fitur Request Menu. Mau nasi goreng babat, sup ayam rumahan, tempe orek, atau menu kangen rumah lainnya? Tinggal tulis di formulir Request Menu, nanti kami konfirmasi ketersediaan bahan dan buatkan khusus untukmu.'
  },
  {
    question: 'Di mana lokasi WAREQ dan kapan jam bukanya?',
    answer: 'WAREQ berlokasi sangat dekat dengan kampus Politeknik Internasional Bali (PIB), Tabanan. Buka setiap hari Senin sampai Sabtu dari jam 10:00 hingga 21:00 WITA.'
  },
  {
    question: 'Apakah melayani pesanan rombongan / katering acara kampus?',
    answer: 'Tentu saja! Kami sering melayani pesanan makan siang panitia acara kampus, rapat organisasi mahasiswa, atau kumpul teman kos. Silakan chat via WhatsApp untuk pesan jumlah banyak.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Gede Arya',
    role: 'Mahasiswa PIB',
    program: 'Culinary Arts',
    content: 'Sambal matahnya beneran otentik Bali! Segar, irisan bawangnya melimpah, dan ayamnya crispy sampai ke dalam. Porsi 25 ribu udah kenyang banget sama nasi.',
    rating: 5
  },
  {
    id: '2',
    name: 'Devina Putri',
    role: 'Mahasiswi PIB',
    program: 'Hospitality Management',
    content: 'Penyelamat pas jam istirahat kuliah yang mepet. Pelayanannya cepet, Kak Caca ramah banget, dan bisa request tingkat kepedasan pas pesan lewat WA.',
    rating: 5
  },
  {
    id: '3',
    name: 'Kadek Mahendra',
    role: 'Alumni PIB',
    program: 'Digital Business',
    content: 'Cireng bumbu rujak sama Chicken Curry-nya the best. Kuah karinya rich bumbu rempah dan gurih santannya pas di lidah. Wajib mampir tiap ke kampus.',
    rating: 5
  }
];

export function formatRupiah(amount: number): string {
  return 'Rp' + amount.toLocaleString('id-ID');
}
