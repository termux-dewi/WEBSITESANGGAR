/**
 * Data and Assets for Asthapura Nusantara Rinjani Foundation
 */

export interface Pillar {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  image: string;
  goals: string[];
  projects: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  readTime: string;
}

export const PILLARS: Pillar[] = [
  {
    id: "rinjani-green",
    title: "Rinjani Green",
    shortDesc: "Konservasi ekologi, reboisasi lereng Rinjani, dan edukasi pengelolaan sampah (zero waste).",
    fullDesc: "Program Rinjani Green difokuskan pada pemulihan ekosistem hutan Gunung Rinjani yang terdampak kebakaran dan pembalakan liar, perlindungan sumber mata air vital bagi masyarakat Lombok, serta penciptaan sistem pengelolaan sampah mandiri di desa-desa wisata.",
    icon: "Sprout",
    image: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80",
    goals: [
      "Penanaman 50.000 bibit pohon endemik di zona kritis Rinjani.",
      "Pembangunan 5 unit Pusat Edukasi Sampah Desa (Zero Waste Hub).",
      "Perlindungan 12 mata air pegunungan melalui penanaman bambu."
    ],
    projects: [
      "Reboisasi Sembalun & Senaru",
      "Satgas Sampah Rinjani (Rinjani Clean-up)",
      "Adopsi Pohon Asuh Nusantara"
    ]
  },
  {
    id: "nusantara-edu",
    title: "Nusantara Edu",
    shortDesc: "Pembangunan rumah baca (Pojok Baca), literasi digital, dan beasiswa untuk anak-anak desa lingkar Rinjani.",
    fullDesc: "Nusantara Edu berkomitmen membuka akses pendidikan berkualitas, menumbuhkan minat baca melalui penyediaan buku-buku bermutu, serta melatih kecakapan digital dasar bagi pemuda desa agar berdaya saing secara global tanpa meninggalkan tanah kelahirannya.",
    icon: "BookOpen",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    goals: [
      "Mendirikan 10 Pojok Baca interaktif di desa-desa binaan terpencil.",
      "Menyalurkan 500+ Paket Beasiswa untuk siswa kurang mampu dan berprestasi.",
      "Menyelenggarakan Kelas Literasi Digital & Bahasa Inggris mingguan."
    ],
    projects: [
      "Rumah Belajar Sembalun",
      "Beasiswa Pelopor Rinjani",
      "Konektivitas Edukasi Desa (Digital Class)"
    ]
  },
  {
    id: "asthapura-culture",
    title: "Asthapura Culture",
    shortDesc: "Pemberdayaan pengrajin tenun Sasak tradisional dan pelestarian seni budaya adat Lombok.",
    fullDesc: "Melalui Asthapura Culture, kami berupaya melestarikan warisan leluhur tenun ikat dan songket Sasak, memberdayakan perempuan pengrajin (penenun) lokal melalui koperasi adil-perdagangan (fair trade), serta mendokumentasikan tradisi tutur dan tari adat Lombok.",
    icon: "Award",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    goals: [
      "Pemberdayaan 150+ ibu-ibu penenun Sasak di Lombok Timur.",
      "Penyediaan bahan benang organik bebas kimia dan pewarna alam ramah lingkungan.",
      "Pameran seni budaya tahunan Rinjani Festival Kebudayaan."
    ],
    projects: [
      "Koperasi Tenun Sasak Lestari",
      "Dokumentasi Warisan Tutur Sasak",
      "Festival Budaya Asthapura Nusantara"
    ]
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: "blog-1",
    title: "Aksi Nyata Reboisasi Lereng Rinjani: Menanam Masa Depan Bersama Masyarakat Sembalun",
    date: "12 Juni 2026",
    excerpt: "Sebanyak 2.500 bibit pohon beringin dan cemara gunung berhasil ditanam kembali di area sabana Sembalun yang kritis.",
    content: "Upaya penyelamatan lereng Gunung Rinjani terus berlanjut. Bersama dengan puluhan relawan lokal dan internasional, masyarakat adat Sembalun bahu-membahu menanam ribuan bibit pohon di lahan kritis akibat deforestasi. Kegiatan ini bertujuan mengembalikan fungsi hidrologis kawasan Rinjani guna menjaga ketersediaan air bersih bagi ratusan ribu warga Lombok.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
    category: "Rinjani Green",
    readTime: "4 menit baca"
  },
  {
    id: "blog-2",
    title: "Membuka Jendela Dunia: Pojok Baca Pertama Nusantara Edu Hadir di Desa Terpencil",
    date: "28 Mei 2026",
    excerpt: "Anak-anak Desa Binaan kini memiliki akses ke ratusan buku edukatif, ensiklopedia, dan ruang belajar interaktif yang nyaman.",
    content: "Pojok Baca pertama diresmikan di Desa Sajang. Ruang belajar ini dirancang dengan gaya ramah anak menggunakan material bambu lokal. Selain menyediakan buku fisik berkualitas, Pojok Baca ini dilengkapi tablet edukasi berisi program interaktif untuk menunjang literasi digital dasar, dipandu oleh mentor relawan mengajar.",
    image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=800&q=80",
    category: "Nusantara Edu",
    readTime: "3 menit baca"
  },
  {
    id: "blog-3",
    title: "Menjaga Tradisi Tenun Ikat Sasak: Sentuhan Tangan Perempuan Penggerak Ekonomi Desa",
    date: "14 Mei 2026",
    excerpt: "Kisah inspiratif para penenun perempuan di desa adat yang melestarikan motif kuno sekaligus menopang ekonomi keluarga.",
    content: "Tenun bukan sekadar kain, melainkan naskah sejarah yang ditenun helai demi helai. Asthapura Culture mendukung kelompok perempuan perajin dengan menyediakan benang berkualitas tinggi dan membuka akses pasar digital langsung ke konsumen internasional. Program ini berhasil menaikkan pendapatan perajin hingga 40% tanpa menghilangkan esensi budaya.",
    image: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=800&q=80",
    category: "Asthapura Culture",
    readTime: "5 menit baca"
  }
];

export const HTML_TEMPLATE = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Asthapura Nusantara Rinjani Foundation | Menjaga Alam, Merawat Semesta</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Google Fonts: Plus Jakarta Sans & Playfair Display -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            serif: ['"Playfair Display"', 'serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          },
          colors: {
            earthy: {
              50: '#f4f7f5',
              100: '#e5eee9',
              800: '#143d28',
              900: '#0c2719', // Deep Forest Green
            },
            terracotta: {
              600: '#d95a2b',
              700: '#bf4b20', // Primary Warm Orange-Brown
              800: '#a33e19',
            }
          }
        }
      }
    }
  </script>
  <style>
    /* Smooth Scroll */
    html {
      scroll-behavior: smooth;
    }
    .text-shadow-md {
      text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6);
    }
  </style>
</head>
<body class="font-sans bg-white text-gray-800 antialiased selection:bg-terracotta-600 selection:text-white">

  <!-- ==================== A. STICKY HEADER / NAVBAR ==================== -->
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-shadow duration-300 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-2">
          <svg class="w-8 h-8 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"></path>
          </svg>
          <div class="flex flex-col">
            <span class="font-serif text-lg md:text-xl font-bold tracking-tight text-earthy-900 leading-tight">Asthapura Nusantara</span>
            <span class="font-mono text-[10px] uppercase tracking-widest text-emerald-700 font-semibold -mt-0.5">Rinjani Foundation</span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-8">
          <a href="#beranda" class="text-sm font-semibold text-emerald-900 hover:text-terracotta-700 transition">Beranda</a>
          <a href="#tentang-kami" class="text-sm font-medium text-gray-600 hover:text-emerald-900 transition">Tentang Kami</a>
          <a href="#program" class="text-sm font-medium text-gray-600 hover:text-emerald-900 transition">Program</a>
          <a href="#media" class="text-sm font-medium text-gray-600 hover:text-emerald-900 transition">Media</a>
          <a href="#kontak" class="text-sm font-medium text-gray-600 hover:text-emerald-900 transition">Kontak</a>
        </nav>

        <!-- CTA & Mobile Toggle -->
        <div class="flex items-center gap-4">
          <a href="#kontak" class="hidden sm:inline-flex items-center justify-center px-5 h-11 text-xs font-bold uppercase tracking-wider text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
            Hubungi Kami
          </a>
          <!-- Hamburger Button -->
          <button id="mobile-menu-btn" class="md:hidden flex items-center p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition focus:outline-none" aria-label="Toggle Menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path id="menu-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-gray-100">
      <div class="px-4 pt-2 pb-6 space-y-3">
        <a href="#beranda" class="block px-3 py-2.5 rounded-lg text-base font-semibold text-emerald-900 bg-emerald-50">Beranda</a>
        <a href="#tentang-kami" class="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-emerald-900">Tentang Kami</a>
        <a href="#program" class="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-emerald-900">Program</a>
        <a href="#media" class="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-emerald-900">Media</a>
        <a href="#kontak" class="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-emerald-900">Kontak</a>
        <div class="pt-4 border-t border-gray-100 px-3">
          <a href="#kontak" class="w-full inline-flex items-center justify-center px-5 h-12 text-sm font-bold uppercase tracking-wider text-white bg-emerald-800 rounded-lg shadow-md">
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  </header>


  <!-- ==================== B. HERO SECTION ==================== -->
  <section id="beranda" class="relative min-h-[90vh] flex items-center justify-center bg-gray-950 overflow-hidden">
    <!-- Unsplash Background Image -->
    <div class="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1585409600244-9e56f4144001?auto=format&fit=crop&w=1600&q=80" alt="Gunung Rinjani Lombok" class="w-full h-full object-cover object-center scale-105 filter saturate-110 brightness-95 animate-pulse-slow">
      <!-- Dark overlay gradient -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-emerald-950/75 mix-blend-multiply"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">

      <!-- Motto Badge -->
      <div class="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-500/30 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
        <span class="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></span>
        <span class="font-mono text-[9px] sm:text-xs font-bold uppercase tracking-widest text-emerald-300">
          "Bersatu untuk Seni & Budaya, Bersama untuk Bangsa"
        </span>
      </div>

      <!-- Headline -->
      <h1 class="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight sm:leading-none text-shadow-md mb-6">
        Menjaga Akar Budaya,<br>
        <span class="text-emerald-300">Merawat Semesta Nusantara.</span>
      </h1>

      <!-- Sub-headline -->
      <p class="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-200/90 leading-relaxed font-light mb-10">
        Menumbuhkan kesadaran kolektif demi pelestarian ekologi Gunung Rinjani, pemberdayaan ekonomi perempuan adat Sasak, serta penyediaan pendidikan berkualitas berlandaskan literasi bagi masa depan anak-anak pedesaan.
      </p>

      <!-- Call-to-Actions -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#program" class="w-full sm:w-auto inline-flex items-center justify-center px-8 h-14 text-sm font-bold uppercase tracking-wider text-white bg-terracotta-700 hover:bg-terracotta-800 rounded-lg shadow-xl hover:shadow-2xl transition duration-200">
          Pelajari Gerakan Kami
        </a>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 z-10 opacity-70">
      <span class="font-mono text-[9px] uppercase tracking-widest text-emerald-300">Skrol Ke Bawah</span>
      <div class="w-5 h-8 border-2 border-emerald-400 rounded-full flex justify-center p-1">
        <div class="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce"></div>
      </div>
    </div>
  </section>


  <!-- ==================== C. IMPACT STATISTICS SECTION ==================== -->
  <section class="relative z-20 -mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
        
        <!-- Stat 1 -->
        <div class="p-8 text-center flex flex-col items-center justify-center group hover:bg-emerald-50/20 transition duration-300">
          <div class="w-12 h-12 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
          </div>
          <span class="font-mono text-3xl md:text-4xl font-extrabold text-emerald-900 tracking-tight">15K+</span>
          <span class="text-xs font-semibold text-emerald-700 uppercase tracking-wider mt-1.5">Bibit Pohon Tertanam</span>
          <span class="text-xs text-gray-400 mt-1">Lereng Gunung Rinjani</span>
        </div>

        <!-- Stat 2 -->
        <div class="p-8 text-center flex flex-col items-center justify-center group hover:bg-emerald-50/20 transition duration-300">
          <div class="w-12 h-12 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
          </div>
          <span class="font-mono text-3xl md:text-4xl font-extrabold text-emerald-900 tracking-tight">12+</span>
          <span class="text-xs font-semibold text-emerald-700 uppercase tracking-wider mt-1.5">Desa Binaan</span>
          <span class="text-xs text-gray-400 mt-1">Kemandirian Budaya & Alam</span>
        </div>

        <!-- Stat 3 -->
        <div class="p-8 text-center flex flex-col items-center justify-center group hover:bg-emerald-50/20 transition duration-300">
          <div class="w-12 h-12 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <span class="font-mono text-3xl md:text-4xl font-extrabold text-emerald-900 tracking-tight">100%</span>
          <span class="text-xs font-semibold text-emerald-700 uppercase tracking-wider mt-1.5">Transparan</span>
          <span class="text-xs text-gray-400 mt-1">Laporan Keuangan Audit Publik</span>
        </div>

      </div>
    </div>
  </section>


  <!-- ==================== D. TIGA PILAR GERAKAN (CORE PILLARS) ==================== -->
  <section id="program" class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <span class="font-mono text-xs font-bold uppercase tracking-widest text-emerald-700">Pilar Utama Kegiatan</span>
        <h2 class="font-serif text-3xl md:text-4xl font-bold text-earthy-900 mt-2 mb-4">
          Tiga Pilar Gerakan Asthapura
        </h2>
        <div class="w-16 h-1 bg-terracotta-700 mx-auto mb-6"></div>
        <p class="text-gray-600 text-sm md:text-base leading-relaxed">
          Dedikasi kami diwujudkan melalui tiga ranah perjuangan yang berkesinambungan demi keseimbangan ekologi, intelektualitas, dan martabat kebudayaan Nusantara.
        </p>
      </div>

      <!-- Pillar Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Pillar 1: Rinjani Green -->
        <div class="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col group">
          <div class="relative h-56 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80" alt="Rinjani Green" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <span class="absolute bottom-4 left-4 font-mono text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded">
              Konservasi Alam
            </span>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="font-serif text-xl font-bold text-emerald-900 mb-3 group-hover:text-terracotta-700 transition">
                Rinjani Green
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-6">
                Gerakan aktif reboisasi hutan Gunung Rinjani, perlindungan ekosistem mata air, mitigasi sampah jalur pendakian, dan pembinaan desa ramah lingkungan.
              </p>
            </div>
            <a href="#donasi-section" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 hover:text-terracotta-700 transition">
              Dukung Program Ini
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- Pillar 2: Nusantara Edu -->
        <div class="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col group">
          <div class="relative h-56 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80" alt="Nusantara Edu" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <span class="absolute bottom-4 left-4 font-mono text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-950/80 px-2.5 py-1 rounded">
              Pemberdayaan Literasi
            </span>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="font-serif text-xl font-bold text-emerald-900 mb-3 group-hover:text-terracotta-700 transition">
                Nusantara Edu
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-6">
                Pendirian rumah baca interaktif (Pojok Baca), beasiswa sekolah bagi putra-putri lingkar Rinjani, serta pelatihan kecakapan digital dasar bagi pemuda desa.
              </p>
            </div>
            <a href="#donasi-section" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 hover:text-terracotta-700 transition">
              Dukung Program Ini
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- Pillar 3: Asthapura Culture -->
        <div class="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col group">
          <div class="relative h-56 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80" alt="Asthapura Culture" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <span class="absolute bottom-4 left-4 font-mono text-xs font-bold uppercase tracking-wider text-rose-300 bg-rose-950/80 px-2.5 py-1 rounded">
              Warisan Tradisi
            </span>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="font-serif text-xl font-bold text-emerald-900 mb-3 group-hover:text-terracotta-700 transition">
                Asthapura Culture
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-6">
                Edukasi & pendampingan koperasi penenun Sasak tradisional Lombok Timur, pelestarian adat istiadat leluhur, dan pameran kesenian Nusantara.
              </p>
            </div>
            <a href="#donasi-section" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 hover:text-terracotta-700 transition">
              Dukung Program Ini
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>


  <!-- ==================== E. NARRATIVE SECTION ("Mengapa Rinjani?") ==================== -->
  <section id="tentang-kami" class="py-24 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left Column: Landscape Image decoration -->
        <div class="lg:col-span-5 relative">
          <!-- Main Image -->
          <div class="relative rounded-2xl overflow-hidden shadow-2xl z-10">
            <img src="https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=800&q=80" alt="Kearifan Lokal Sasak Lombok" class="w-full object-cover aspect-[4/5] object-center">
          </div>
          <!-- Decorative Background Blocks -->
          <div class="absolute -top-6 -left-6 w-32 h-32 bg-emerald-100 rounded-2xl -z-10 animate-pulse-slow"></div>
          <div class="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-900 rounded-2xl -z-10 opacity-10"></div>
          <!-- Label Overlay -->
          <div class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-xs p-5 rounded-xl shadow-lg border border-emerald-50/50 z-20 max-w-[280px]">
            <p class="font-serif text-sm font-semibold text-emerald-950">"Kearifan Sasak mengajarkan kita bahwa semesta dan manusia menari dalam ketukan yang sama."</p>
            <p class="font-mono text-[9px] uppercase tracking-wider text-emerald-700 font-bold mt-2">— Ibu Sairah, Penenun Adat</p>
          </div>
        </div>

        <!-- Right Column: Emotional Narrative -->
        <div class="lg:col-span-7 lg:pl-6">
          <span class="font-mono text-xs font-bold uppercase tracking-widest text-emerald-700">Hubungan Ekologi & Jiwa</span>
          <h2 class="font-serif text-3xl md:text-4xl font-bold text-earthy-900 mt-2 mb-6">
            Mengapa Rinjani Menjadi Denyut Nadi Kami?
          </h2>
          
          <div class="space-y-5 text-gray-600 text-sm md:text-base leading-relaxed font-light">
            <p>
              Bagi masyarakat Lombok, Gunung Rinjani bukanlah sekadar gundukan tanah tinggi yang menjulang gagah. Rinjani adalah <strong class="text-emerald-900 font-medium">ibu spiritual, penopang kehidupan, dan penjaga ekosistem alam raya.</strong> Air jernih yang membasahi sawah-sawah warga berasal dari rahim Danau Segara Anak yang tenang. 
            </p>
            <p>
              Namun, dinamika modernisasi perlahan mengikis jalinan keramat ini. Hutan-hutan berkurang, sampah plastik mencemari jalur pendakian sacral, dan generasi muda berbondong meninggalkan warisan tenun luhur Sasak demi impian urban yang belum pasti. 
            </p>
            <p>
              Asthapura Nusantara Rinjani lahir dari kepedulian mendalam. Kami percaya, menyelamatkan Rinjani tidak bisa dilakukan secara parsial. <strong class="text-emerald-900 font-medium">Merawat alamnya berarti juga menyekolahkan anaknya dan memuliakan kebudayaan ibunya.</strong> Melalui keselarasan tiga aspek inilah, kemakmuran sejati yang berkelanjutan dapat terwujud bagi Nusantara.
            </p>
          </div>

          <!-- Mini Checklist -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-100">
            <div class="flex items-start gap-3">
              <span class="w-5 h-5 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">✓</span>
              <div>
                <h4 class="text-sm font-bold text-emerald-900">Pendekatan Holistik</h4>
                <p class="text-xs text-gray-500">Menghubungkan manusia, alam, dan tradisi secara utuh.</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="w-5 h-5 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">✓</span>
              <div>
                <h4 class="text-sm font-bold text-emerald-900">Kedaulatan Lokal</h4>
                <p class="text-xs text-gray-500">Seluruh program digerakkan langsung oleh komunitas adat.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>





  <!-- ==================== F. BERITA & CERITA LAPANGAN (BLOG GRID) ==================== -->
  <section id="media" class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <span class="font-mono text-xs font-bold uppercase tracking-widest text-emerald-700">Warta Terkini</span>
        <h2 class="font-serif text-3xl md:text-4xl font-bold text-earthy-900 mt-2 mb-4">
          Berita & Cerita Lapangan
        </h2>
        <div class="w-16 h-1 bg-terracotta-700 mx-auto mb-6"></div>
        <p class="text-gray-600 text-sm md:text-base">
          Melihat secara dekat seluruh aktivitas relawan, cerita kegembiraan anak-anak desa, serta proses restorasi alam yang sedang berlangsung.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Post 1 -->
        <article class="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col group">
          <div class="relative h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80" alt="Reboisasi Rinjani" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
            <span class="absolute top-4 left-4 font-mono text-[9px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded">
              12 Juni 2026
            </span>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <span class="text-xs font-bold text-emerald-700 uppercase tracking-widest font-mono">Rinjani Green</span>
              <h3 class="font-serif text-lg font-bold text-emerald-950 mt-1 mb-3 leading-snug group-hover:text-terracotta-700 transition">
                Aksi Nyata Reboisasi Lereng Rinjani Bersama Warga Sembalun
              </h3>
              <p class="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
                Sebanyak 2.500 bibit pohon beringin dan cemara gunung berhasil ditanam kembali di area sabana Sembalun guna mengembalikan keseimbangan mata air...
              </p>
            </div>
            <button onclick="readFullStory('Aksi Nyata Reboisasi Lereng Rinjani Bersama Warga Sembalun', 'Upaya penyelamatan lereng Gunung Rinjani terus berlanjut. Bersama dengan puluhan relawan lokal dan internasional, masyarakat adat Sembalun bahu-membahu menanam ribuan bibit pohon di lahan kritis akibat deforestasi. Kegiatan ini bertujuan mengembalikan fungsi hidrologis kawasan Rinjani guna menjaga ketersediaan air bersih bagi ratusan ribu warga Lombok.')" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 hover:text-terracotta-700 transition">
              Baca Selengkapnya
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </article>

        <!-- Post 2 -->
        <article class="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col group">
          <div class="relative h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=800&q=80" alt="Pojok Baca Rinjani" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
            <span class="absolute top-4 left-4 font-mono text-[9px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded">
              28 Mei 2026
            </span>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <span class="text-xs font-bold text-amber-700 uppercase tracking-widest font-mono">Nusantara Edu</span>
              <h3 class="font-serif text-lg font-bold text-emerald-950 mt-1 mb-3 leading-snug group-hover:text-terracotta-700 transition">
                Membuka Jendela Dunia: Pojok Baca Pertama Hadir di Desa Terpencil
              </h3>
              <p class="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
                Anak-anak desa Sajang kini memiliki akses ke ratusan buku edukatif dan program literasi digital dasar gratis yang digerakkan oleh mentor relawan mengajar...
              </p>
            </div>
            <button onclick="readFullStory('Membuka Jendela Dunia: Pojok Baca Pertama Hadir di Desa Terpencil', 'Pojok Baca pertama diresmikan di Desa Sajang. Ruang belajar ini dirancang dengan gaya ramah anak menggunakan material bambu lokal. Selain menyediakan buku fisik berkualitas, Pojok Baca ini dilengkapi tablet edukasi berisi program interaktif untuk menunjang literasi digital dasar, dipandu oleh mentor relawan mengajar.')" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 hover:text-terracotta-700 transition">
              Baca Selengkapnya
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </article>

        <!-- Post 3 -->
        <article class="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col group">
          <div class="relative h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=800&q=80" alt="Tenun Sasak" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
            <span class="absolute top-4 left-4 font-mono text-[9px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded">
              14 Mei 2026
            </span>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <span class="text-xs font-bold text-rose-700 uppercase tracking-widest font-mono">Asthapura Culture</span>
              <h3 class="font-serif text-lg font-bold text-emerald-950 mt-1 mb-3 leading-snug group-hover:text-terracotta-700 transition">
                Menjaga Tradisi Tenun Ikat Sasak: Sentuhan Tangan Perempuan Penggerak
              </h3>
              <p class="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
                Kisah perjuangan kelompok penenun perempuan di desa adat Lombok Timur yang mandiri berkat pendampingan koperasi benang organik bebas kimia...
              </p>
            </div>
            <button onclick="readFullStory('Menjaga Tradisi Tenun Ikat Sasak: Sentuhan Tangan Perempuan Penggerak', 'Tenun bukan sekadar kain, melainkan naskah sejarah yang ditenun helai demi helai. Asthapura Culture mendukung kelompok perempuan perajin dengan menyediakan benang berkualitas tinggi dan membuka akses pasar digital langsung ke konsumen internasional. Program ini berhasil menaikkan pendapatan perajin hingga 40% tanpa menghilangkan esensi budaya.')" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 hover:text-terracotta-700 transition">
              Baca Selengkapnya
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </article>

      </div>
    </div>
  </section>


  <!-- ==================== G. FINAL CALL-TO-ACTION & FOOTER ==================== -->
  <section id="kontak" class="relative py-24 bg-emerald-950 text-white overflow-hidden">
    <div class="absolute inset-0 bg-emerald-900/10 z-0"></div>
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
        Mari Bersama Merawat Semesta Rinjani
      </h2>
      <p class="max-w-2xl mx-auto text-emerald-100/80 text-sm md:text-base font-light mb-10 leading-relaxed">
        Pendidikan anak desa, konservasi lereng gunung, dan kedaulatan budaya Sasak tidak bisa tegak sendirian. Jadilah bagian penting dari peradaban baru Nusantara yang lestari.
      </p>

      <!-- Moto Sanggar Box -->
      <div class="max-w-2xl mx-auto bg-emerald-900/60 p-10 rounded-2xl border border-emerald-800/80 shadow-2xl backdrop-blur-md mb-16 text-center">
        <span class="font-mono text-xs font-bold uppercase tracking-widest text-emerald-300">Filosofi & Moto Sanggar</span>
        <h3 class="font-serif text-xl sm:text-2xl font-bold text-white mt-2 mb-6 leading-relaxed">
          "Bersatu Untuk Seni Dan Budaya, Bersama Untuk Bangsa"
        </h3>
        
        <p class="italic text-emerald-100/90 font-serif text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8 border-l-4 border-orange-600 pl-4 text-left">
          "Tindih lan Bakti ring Semesta Rinjani, Saling Jaga lan Saling Asuh ring Sesama"
          <span class="block not-italic text-xs font-mono tracking-wider text-emerald-400 font-bold uppercase mt-2">
            — Filosofi Leluhur Sasak Lombok (Tindih, Bakti, Lestari)
          </span>
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left pt-6 border-t border-emerald-800/50">
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <span class="text-orange-500 text-lg">✦</span>
              <h4 class="text-sm font-bold text-emerald-200 uppercase tracking-wider">Tindih</h4>
            </div>
            <p class="text-xs text-emerald-100/70 leading-relaxed font-light">
              Kesetiaan luhur menjunjung tinggi kebenaran, integritas moral, serta kehormatan nilai adat pusaka.
            </p>
          </div>

          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <span class="text-orange-500 text-lg">✦</span>
              <h4 class="text-sm font-bold text-emerald-200 uppercase tracking-wider">Bakti</h4>
            </div>
            <p class="text-xs text-emerald-100/70 leading-relaxed font-light">
              Pengabdian tulus tanpa pamrih untuk memuliakan sesama, mengayomi anak-anak pedesaan, dan merawat budaya.
            </p>
          </div>

          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <span class="text-orange-500 text-lg">✦</span>
              <h4 class="text-sm font-bold text-emerald-200 uppercase tracking-wider">Lestari</h4>
            </div>
            <p class="text-xs text-emerald-100/70 leading-relaxed font-light">
              Tanggung jawab suci melestarikan kesucian dan kelestarian ekosistem Gunung Rinjani untuk generasi mendatang.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="bg-earthy-900 text-gray-400 border-t border-emerald-950 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12">
        
        <!-- Column 1: Brand Info -->
        <div class="md:col-span-4 space-y-4">
          <div class="flex items-center gap-2 text-white">
            <svg class="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"></path>
            </svg>
            <span class="font-serif text-lg font-bold tracking-tight text-white leading-tight">Asthapura Rinjani</span>
          </div>
          <p class="text-xs leading-relaxed text-gray-400">
            Yayasan nirlaba yang berfokus pada konservasi holistik pegunungan Rinjani, literasi pedesaan, dan pemberdayaan perajin adat tenun Sasak di Lombok, Nusa Tenggara Barat.
          </p>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="md:col-span-2 space-y-3 text-xs">
          <h4 class="font-mono text-white uppercase tracking-widest font-bold">Navigasi</h4>
          <ul class="space-y-2">
            <li><a href="#beranda" class="hover:text-emerald-300 transition">Beranda</a></li>
            <li><a href="#tentang-kami" class="hover:text-emerald-300 transition">Tentang Kami</a></li>
            <li><a href="#program" class="hover:text-emerald-300 transition">Program Kami</a></li>
            <li><a href="#media" class="hover:text-emerald-300 transition">Berita Warta</a></li>
          </ul>
        </div>

        <!-- Column 3: Contact details -->
        <div class="md:col-span-3 space-y-3 text-xs">
          <h4 class="font-mono text-white uppercase tracking-widest font-bold">Kantor Operasional</h4>
          <p class="leading-relaxed">
            Jl. Raya Sembalun Lawang, Kec. Sembalun, Kabupaten Lombok Timur, Nusa Tenggara Barat, Indonesia, 83656
          </p>
          <p class="text-[10px] font-mono mt-1 text-emerald-400">
            ✉ info@asthapurarinjani.org<br>
            📞 +62 812-3456-7890
          </p>
        </div>

        <!-- Column 4: Newsletter -->
        <div class="md:col-span-3 space-y-3 text-xs">
          <h4 class="font-mono text-white uppercase tracking-widest font-bold">Kabar Baik Rinjani</h4>
          <p>Mendapatkan buletin aktivitas bulanan relawan & transparansi donasi langsung ke email Anda.</p>
          <form onsubmit="submitNewsletter(event)" class="flex gap-2">
            <input type="email" id="news-email" required placeholder="Alamat Email Anda" class="bg-emerald-950 border border-emerald-900 focus:border-emerald-500 rounded-lg px-3 py-2 text-xs w-full text-white focus:outline-none">
            <button type="submit" class="px-4 bg-terracotta-700 hover:bg-terracotta-800 text-white rounded-lg text-xs font-bold">✓</button>
          </form>
        </div>

      </div>

      <!-- Divider -->
      <div class="pt-8 border-t border-emerald-950 text-center flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
        <p>© 2026 Asthapura Nusantara Rinjani Foundation. Hak Cipta Dilindungi Undang-Undang.</p>
        <div class="flex items-center gap-4">
          <a href="#" class="hover:text-white transition">Kebijakan Privasi</a>
          <span>•</span>
          <a href="#" class="hover:text-white transition">Laporan Keuangan</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Toast Notification System -->
  <div id="toast-notif" class="fixed bottom-6 right-6 z-50 transform translate-y-24 opacity-0 transition-all duration-300 ease-out bg-emerald-900 border border-emerald-500 text-white px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-2.5 max-w-sm">
    <span class="text-xl">✨</span>
    <span id="toast-text" class="text-xs font-medium">Terima kasih atas kontribusi Anda!</span>
  </div>

  <!-- Blog Detail Modal -->
  <div id="blog-modal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
    <div class="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-100 animate-scale-up">
      <div class="p-6">
        <div class="flex justify-between items-start mb-4">
          <h3 id="modal-title" class="font-serif text-xl font-bold text-emerald-950 leading-snug">Detail Warta</h3>
          <button onclick="closeBlogModal()" class="text-gray-400 hover:text-gray-600 focus:outline-none p-1">✕</button>
        </div>
        <p id="modal-content" class="text-gray-600 text-sm leading-relaxed mb-6 font-light">Isi konten...</p>
        <div class="flex justify-end">
          <button onclick="closeBlogModal()" class="px-5 py-2 rounded-lg bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-900 transition">Tutup Berita</button>
        </div>
      </div>
    </div>
  </div>


  <!-- JavaScript for Interactive Simulation, Toggle Drawer, Modals, Forms -->
  <script>
    // 1. Mobile Menu Toggle Logic
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      if (mobileMenu.classList.contains('hidden')) {
        menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
      } else {
        menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
      }
    });

    // Close mobile menu on click link
    document.querySelectorAll('#mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
      });
    });

    // 3. Simple Form Handlers

    function submitNewsletter(event) {
      event.preventDefault();
      showToast("Berhasil berlangganan! Kabar baik Rinjani akan segera masuk ke email Anda.");
      event.target.reset();
    }

    // 4. Toast Notification
    function showToast(msg) {
      const toast = document.getElementById('toast-notif');
      const toastText = document.getElementById('toast-text');
      toastText.innerText = msg;
      
      toast.classList.remove('translate-y-24', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');

      setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-24', 'opacity-0');
      }, 5000);
    }

    // 5. Blog Modal Handlers
    function readFullStory(title, content) {
      document.getElementById('modal-title').innerText = title;
      document.getElementById('modal-content').innerText = content;
      document.getElementById('blog-modal').classList.remove('hidden');
    }

    function closeBlogModal() {
      document.getElementById('blog-modal').classList.add('hidden');
    }
  </script>
</body>
</html>`;
