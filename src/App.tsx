import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sprout,
  BookOpen,
  Award,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Copy,
  Check,
  Heart,
  Mountain,
  FileCode,
  Globe,
  Share2
} from "lucide-react";
import { PILLARS, BLOGS, HTML_TEMPLATE, Pillar, BlogPost } from "./data";
// @ts-ignore
import logoUrl from "./assets/images/asthapura_logo_1783229473605.jpg";
import GallerySection from "./components/GallerySection";

export default function App() {
  // Mobile Nav Drawer State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Donation interactive state
  const [selectedPreset, setSelectedPreset] = useState<number>(100000);
  const [customAmount, setCustomAmount] = useState<number>(100000);
  const [isCustom, setIsCustom] = useState(false);

  // Pillar Detail Modal State
  const [activePillar, setActivePillar] = useState<Pillar | null>(null);

  // Blog Read Modal State
  const [activeBlog, setActiveBlog] = useState<BlogPost | null>(null);

  // Copy HTML Source Modal State
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // User input states (Mock database logs)
  const [volName, setVolName] = useState("");
  const [volEmail, setVolEmail] = useState("");
  const [volProgram, setVolProgram] = useState("Rinjani Green");
  const [volMessage, setVolMessage] = useState("");

  const [newsletterEmail, setNewsletterEmail] = useState("");

  // Toast System
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  // Helper calculation for donation impact
  const calculateImpact = (amount: number) => {
    const pohon = Math.floor(amount / 25000);
    const buku = Math.floor(amount / 50000);
    const penenun = Math.floor(amount / 100000) || 1;
    return { pohon, buku, penenun };
  };

  const currentAmount = isCustom ? customAmount : selectedPreset;
  const impact = calculateImpact(currentAmount);

  // Copier Handler
  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(HTML_TEMPLATE);
      setIsCopied(true);
      triggerToast("✓ Kode HTML5 & Tailwind CDN lengkap telah disalin ke clipboard!");
      setTimeout(() => setIsCopied(false), 3000);
    } catch (err) {
      triggerToast("❌ Gagal menyalin kode. Silakan salin teks secara manual.");
    }
  };

  // Donation Submission Handler
  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerToast(
      `✨ Simulasi Pembayaran Sukses! Donasi Rp ${currentAmount.toLocaleString(
        "id-ID"
      )} Anda akan ditransformasikan menjadi aksi nyata.`
    );
  };

  // Volunteer form Submission Handler
  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerToast(
      `💖 Terima kasih ${volName}! Keinginan Anda mendukung program ${volProgram} telah kami catat dalam simulasi.`
    );
    setVolName("");
    setVolEmail("");
    setVolMessage("");
  };

  // Newsletter Submission Handler
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerToast(
      `✉ Email ${newsletterEmail} berhasil terdaftar untuk menerima Kabar Baik Rinjani!`
    );
    setNewsletterEmail("");
  };

  return (
    <div className="font-sans bg-white text-gray-800 antialiased selection:bg-orange-700 selection:text-white min-h-screen flex flex-col justify-between">
      
      {/* Toast Banner */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-[99] bg-emerald-950 text-white px-5 py-4 rounded-xl shadow-2xl border border-emerald-500/30 flex items-center gap-3 max-w-md"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-900 flex items-center justify-center text-sm shrink-0">
              ✨
            </div>
            <p className="text-xs md:text-sm font-medium pr-2">{toastMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==================== A. STICKY HEADER / NAVBAR ==================== */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20" id="navbar-container">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-emerald-900/10 group-hover:border-emerald-800 transition-all duration-300 shrink-0">
                <img src={logoUrl} alt="Logo Asthapura Nusantara Rinjani Foundation" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xxl md:text-3xl font-bold tracking-tight text-emerald-950 leading-tight">
                  Asthapura Nusantara
                </span>
                <span className="font-mono text-[6.5px] sm:text-[7px] uppercase tracking-widest text-emerald-700 font-bold -mt-0.5">
                  Rinjani Foundation
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#beranda" className="text-sm font-semibold text-emerald-900 hover:text-orange-700 transition-colors">
                Beranda
              </a>
              <a href="#tentang-kami" className="text-sm font-medium text-gray-600 hover:text-emerald-900 transition-colors">
                Tentang Kami
              </a>
              <a href="#program" className="text-sm font-medium text-gray-600 hover:text-emerald-900 transition-colors">
                Program
              </a>
              <a href="#galeri" className="text-sm font-medium text-gray-600 hover:text-emerald-900 transition-colors">
                Galeri
              </a>
              <a href="#media" className="text-sm font-medium text-gray-600 hover:text-emerald-900 transition-colors">
                Media
              </a>
              <a href="#kontak" className="text-sm font-medium text-gray-600 hover:text-emerald-900 transition-colors">
                Kontak
              </a>
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="#kontak"
                className="hidden sm:inline-flex items-center justify-center px-5 h-11 text-xs font-bold uppercase tracking-wider text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Hubungi Kami
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden flex items-center p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-3">
                <a
                  href="#beranda"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-semibold text-emerald-900 bg-emerald-50"
                >
                  Beranda
                </a>
                <a
                  href="#tentang-kami"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-emerald-900"
                >
                  Tentang Kami
                </a>
                <a
                  href="#program"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-emerald-900"
                >
                  Program
                </a>
                <a
                  href="#galeri"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-emerald-900"
                >
                  Galeri
                </a>
                <a
                  href="#media"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-emerald-900"
                >
                  Media
                </a>
                <a
                  href="#kontak"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-emerald-900"
                >
                  Kontak
                </a>
                <div className="pt-4 border-t border-gray-100 px-3">
                  <a
                    href="#kontak"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full inline-flex items-center justify-center px-5 h-12 text-sm font-bold uppercase tracking-wider text-white bg-emerald-800 rounded-lg shadow-md"
                  >
                    Hubungi Kami
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ==================== B. HERO SECTION ==================== */}
      <section id="beranda" className="relative min-h-[90vh] flex items-center justify-center bg-gray-950 overflow-hidden">
        {/* Unsplash Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1585409600244-9e56f4144001?auto=format&fit=crop&w=1600&q=80"
            alt="Gunung Rinjani Lombok"
            className="w-full h-full object-cover object-center filter saturate-110 brightness-75 scale-105"
          />
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-emerald-950/70" />
        </div>

        {/* Content with elegant animations */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">

          {/* Motto Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-500/30 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
            <span className="font-mono text-[9px] sm:text-xs font-bold uppercase tracking-widest text-emerald-300">
              "Bersatu untuk Seni & Budaya, Bersama untuk Bangsa"
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight sm:leading-none mb-6 drop-shadow-md"
          >
            Menjaga Akar Budaya,<br />
            <span className="text-emerald-300">Merawat Semesta Nusantara.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-200/95 leading-relaxed font-light mb-10"
          >
            Menumbuhkan kesadaran kolektif demi pelestarian ekologi Gunung Rinjani, pemberdayaan ekonomi perempuan adat Sasak, serta penyediaan pendidikan berkualitas berlandaskan literasi bagi masa depan anak-anak pedesaan.
          </motion.p>

          {/* Call-to-Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#program"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 h-14 text-sm font-bold uppercase tracking-wider text-white bg-orange-700 hover:bg-orange-800 rounded-lg shadow-xl hover:shadow-2xl transition duration-200 hover:-translate-y-0.5"
            >
              Pelajari Gerakan Kami
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 z-10 opacity-75">
          <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-300">Skrol Ke Bawah</span>
          <div className="w-5 h-8 border-2 border-emerald-400 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
            />
          </div>
        </div>
      </section>

      {/* ==================== C. ANGKA DAMPAK (IMPACT STATISTICS) ==================== */}
      <section className="relative z-20 -mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            
            {/* Stat 1 */}
            <div className="p-8 text-center flex flex-col items-center justify-center group hover:bg-emerald-50/20 transition duration-300">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                <Sprout className="w-6 h-6" />
              </div>
              <span className="font-mono text-3xl md:text-4xl font-extrabold text-emerald-900 tracking-tight">
                15K+
              </span>
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mt-1.5">
                Bibit Pohon Tertanam
              </span>
              <span className="text-xs text-gray-400 mt-1">Lereng Gunung Rinjani</span>
            </div>

            {/* Stat 2 */}
            <div className="p-8 text-center flex flex-col items-center justify-center group hover:bg-emerald-50/20 transition duration-300">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="font-mono text-3xl md:text-4xl font-extrabold text-emerald-900 tracking-tight">
                12+
              </span>
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mt-1.5">
                Desa Binaan
              </span>
              <span className="text-xs text-gray-400 mt-1">Kemandirian Budaya & Alam</span>
            </div>

            {/* Stat 3 */}
            <div className="p-8 text-center flex flex-col items-center justify-center group hover:bg-emerald-50/20 transition duration-300">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                <CheckCircle className="w-6 h-6" />
              </div>
              <span className="font-mono text-3xl md:text-4xl font-extrabold text-emerald-900 tracking-tight">
                100%
              </span>
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mt-1.5">
                Transparan
              </span>
              <span className="text-xs text-gray-400 mt-1">Laporan Keuangan Diaudit Publik</span>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== D. TIGA PILAR GERAKAN (CORE PILLARS) ==================== */}
      <section id="program" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-700">Pilar Utama Kegiatan</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-emerald-950 mt-2 mb-4">
              Tiga Pilar Gerakan Asthapura
            </h2>
            <div className="w-16 h-1 bg-orange-700 mx-auto mb-6"></div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Dedikasi kami diwujudkan melalui tiga ranah perjuangan yang berkesinambungan demi keseimbangan ekologi, intelektualitas, dan martabat kebudayaan Nusantara.
            </p>
          </div>

          {/* Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS.map((pillar) => (
              <motion.div
                key={pillar.id}
                whileHover={{ y: -6 }}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
                onClick={() => setActivePillar(pillar)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded">
                    {pillar.id === "rinjani-green" ? "Konservasi Alam" : pillar.id === "nusantara-edu" ? "Literasi Pendidikan" : "Warisan Tradisi"}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-emerald-900 mb-3 group-hover:text-orange-700 transition">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {pillar.shortDesc}
                    </p>
                  </div>
                  <button className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 group-hover:text-orange-700 transition">
                    Pelajari Selengkapnya
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== E. NARRATIVE SECTION ("Mengapa Rinjani?") ==================== */}
      <section id="tentang-kami" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Image decoration */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10">
                <img
                  src="https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=800&q=80"
                  alt="Kearifan Lokal Sasak Lombok"
                  className="w-full object-cover aspect-[4/5] object-center"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-100 rounded-2xl -z-10 animate-pulse" />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-950 rounded-2xl -z-10 opacity-10" />
              
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-xs p-5 rounded-xl shadow-lg border border-emerald-50/50 z-20 max-w-[280px]">
                <p className="font-serif text-sm font-semibold text-emerald-950 italic">
                  "Kearifan Sasak mengajarkan kita bahwa semesta dan manusia menari dalam ketukan yang sama."
                </p>
                <p className="font-mono text-[9px] uppercase tracking-wider text-emerald-700 font-bold mt-2">
                  — Ibu Sairah, Penenun Adat
                </p>
              </div>
            </div>

            {/* Right Column: Emotional Narrative */}
            <div className="lg:col-span-7 lg:pl-6">
              <span class="font-mono text-xs font-bold uppercase tracking-widest text-emerald-700">Hubungan Ekologi & Jiwa</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-emerald-950 mt-2 mb-6">
                Mengapa Rinjani Menjadi Denyut Nadi Kami?
              </h2>
              
              <div className="space-y-5 text-gray-600 text-sm md:text-base leading-relaxed font-light">
                <p>
                  Bagi masyarakat Lombok, Gunung Rinjani bukanlah sekadar gundukan tanah tinggi yang menjulang gagah. Rinjani adalah <strong className="text-emerald-900 font-semibold">ibu spiritual, penopang kehidupan, dan penjaga ekosistem alam raya.</strong> Air jernih yang membasahi sawah-sawah warga berasal dari rahim Danau Segara Anak yang tenang. 
                </p>
                <p>
                  Namun, dinamika modernisasi perlahan mengikis jalinan keramat ini. Hutan-hutan berkurang, sampah plastik mencemari jalur pendakian sakral, dan generasi muda berbondong meninggalkan warisan tenun luhur Sasak demi impian urban yang belum pasti. 
                </p>
                <p>
                  Asthapura Nusantara Rinjani lahir dari kepedulian mendalam. Kami percaya, menyelamatkan Rinjani tidak bisa dilakukan secara parsial. <strong className="text-emerald-900 font-semibold">Merawat alamnya berarti juga menyekolahkan anaknya dan memuliakan kebudayaan ibunya.</strong> Melalui keselarasan tiga aspek inilah, kemakmuran sejati yang berkelanjutan dapat terwujud bagi Nusantara.
                </p>
              </div>

              {/* Mini Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-100">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-emerald-950">Pendekatan Holistik</h4>
                    <p className="text-xs text-gray-500">Menghubungkan manusia, alam, dan tradisi secara utuh.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-emerald-950">Kedaulatan Lokal</h4>
                    <p className="text-xs text-gray-500">Seluruh program digerakkan langsung oleh komunitas adat.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== INTERACTIVE GALLERY SECTION ==================== */}
      <GallerySection />

      {/* ==================== F. BERITA & CERITA LAPANGAN (BLOG GRID) ==================== */}
      <section id="media" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-700">Warta Terkini</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-emerald-950 mt-2 mb-4">
              Berita & Cerita Lapangan
            </h2>
            <div className="w-16 h-1 bg-orange-700 mx-auto mb-6"></div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Melihat secara dekat seluruh aktivitas relawan, cerita kegembiraan anak-anak desa, serta proses restorasi alam yang sedang berlangsung.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOGS.map((blog) => (
              <article key={blog.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <span className="absolute top-4 left-4 font-mono text-[9px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded">
                      {blog.date}
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest font-mono">
                      {blog.category}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-emerald-950 mt-1 mb-3 leading-snug group-hover:text-orange-700 transition">
                      {blog.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setActiveBlog(blog)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 hover:text-orange-700 transition"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== G. FINAL CALL-TO-ACTION & CONTACT ==================== */}
      <section id="kontak" className="relative py-24 bg-emerald-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-emerald-900/10 z-0" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Mari Bersama Merawat Semesta Rinjani
          </h2>
          <p className="max-w-2xl mx-auto text-emerald-100/80 text-sm md:text-base font-light mb-10 leading-relaxed">
            Pendidikan anak desa, konservasi lereng gunung, dan kedaulatan budaya Sasak tidak bisa tegak sendirian. Jadilah bagian penting dari peradaban baru Nusantara yang lestari.
          </p>

          {/* Moto Sanggar Box */}
          <div className="max-w-2xl mx-auto bg-emerald-900/40 p-10 rounded-2xl border border-emerald-800/80 shadow-2xl backdrop-blur-md mb-16 text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-300">Filosofi & Moto Sanggar</span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-2 mb-6 leading-relaxed">
              "Bersatu Untuk Seni Dan Budaya, Bersama Untuk Bangsa"
            </h3>
            
            <p className="italic text-emerald-100/90 font-serif text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8 border-l-4 border-orange-600 pl-4 text-left">
              "Tindih lan Bakti ring Semesta Rinjani, Saling Jaga lan Saling Asuh ring Sesama"
              <span className="block not-italic text-xs font-mono tracking-wider text-emerald-400 font-bold uppercase mt-2">
                — Filosofi Leluhur Sasak Lombok (Tindih, Bakti, Lestari)
              </span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left pt-6 border-t border-emerald-800/50">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-orange-500 text-lg">✦</span>
                  <h4 className="text-sm font-bold text-emerald-200 uppercase tracking-wider">Tindih</h4>
                </div>
                <p className="text-xs text-emerald-100/70 leading-relaxed font-light">
                  Kesetiaan luhur menjunjung tinggi kebenaran, integritas moral, serta kehormatan nilai adat pusaka.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-orange-500 text-lg">✦</span>
                  <h4 className="text-sm font-bold text-emerald-200 uppercase tracking-wider">Bakti</h4>
                </div>
                <p className="text-xs text-emerald-100/70 leading-relaxed font-light">
                  Pengabdian tulus tanpa pamrih untuk memuliakan sesama, mengayomi anak-anak pedesaan, dan merawat budaya.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-orange-500 text-lg">✦</span>
                  <h4 className="text-sm font-bold text-emerald-200 uppercase tracking-wider">Lestari</h4>
                </div>
                <p className="text-xs text-emerald-100/70 leading-relaxed font-light">
                  Tanggung jawab suci melestarikan kesucian dan kelestarian ekosistem Gunung Rinjani untuk generasi mendatang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-emerald-950 text-gray-400 border-t border-emerald-900/60 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12">
            
            {/* Col 1: Brand Info */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-3 text-white">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 shrink-0">
                  <img src={logoUrl} alt="Logo Asthapura Nusantara Rinjani Foundation" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-white leading-tight">
                    Asthapura Nusantara
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-400 font-bold -mt-0.5">
                    Rinjani Foundation
                  </span>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-gray-400">
                Yayasan nirlaba yang berfokus pada konservasi holistik pegunungan Rinjani, literasi pedesaan, dan pemberdayaan perajin adat tenun Sasak di Lombok, Nusa Tenggara Barat.
              </p>
            </div>

            {/* Col 2: Quick Links */}
            <div className="md:col-span-2 space-y-3 text-xs">
              <h4 className="font-mono text-white uppercase tracking-widest font-bold">Navigasi</h4>
              <ul className="space-y-2">
                <li><a href="#beranda" className="hover:text-emerald-300 transition-colors">Beranda</a></li>
                <li><a href="#tentang-kami" className="hover:text-emerald-300 transition-colors">Tentang Kami</a></li>
                <li><a href="#program" className="hover:text-emerald-300 transition-colors">Program Kami</a></li>
                <li><a href="#media" className="hover:text-emerald-300 transition-colors">Berita Warta</a></li>
              </ul>
            </div>

            {/* Col 3: Addresses */}
            <div className="md:col-span-3 space-y-3 text-xs">
              <h4 className="font-mono text-white uppercase tracking-widest font-bold">Kantor Operasional</h4>
              <p className="leading-relaxed text-gray-400">
                Jl. Raya Sembalun Lawang, Kec. Sembalun, Kabupaten Lombok Timur, Nusa Tenggara Barat, Indonesia, 83656
              </p>
              <div className="space-y-1 text-[10px] font-mono mt-2 text-emerald-400">
                <p className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 shrink-0" /> info@asthapurarinjani.org
                </p>
                <p className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 shrink-0" /> +62 812-3456-7890
                </p>
              </div>
            </div>

            {/* Col 4: Newsletter */}
            <div className="md:col-span-3 space-y-3 text-xs">
              <h4 className="font-mono text-white uppercase tracking-widest font-bold">Kabar Baik Rinjani</h4>
              <p className="text-gray-400">Dapatkan bulletin perkembangan konservasi langsung di inbox surat elektronik Anda.</p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Email Anda..."
                  className="bg-emerald-950 border border-emerald-900 focus:border-emerald-500 rounded-lg px-3 py-2 text-xs w-full text-white focus:outline-none placeholder-gray-600"
                />
                <button type="submit" className="px-3 bg-orange-700 hover:bg-orange-800 text-white rounded-lg text-xs font-bold shrink-0">
                  ✓
                </button>
              </form>
            </div>

          </div>

          {/* Divider & Copyright */}
          <div className="pt-8 border-t border-emerald-900/60 text-center flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
            <p>© 2026 Asthapura Nusantara Rinjani Foundation. Hak Cipta Dilindungi.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Laporan Audit</a>
            </div>
          </div>

        </div>
      </footer>

      {/* ==================== DETAIL MODALS ==================== */}
      
      {/* 1. Pillar Detail Modal */}
      <AnimatePresence>
        {activePillar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100"
            >
              {/* Header Image */}
              <div className="relative h-60">
                <img
                  src={activePillar.image}
                  alt={activePillar.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <button
                  onClick={() => setActivePillar(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center focus:outline-none transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950/70 px-2 py-1 rounded">
                    Pilar Utama
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                    {activePillar.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 space-y-6 text-left">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                  {activePillar.fullDesc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Goals */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 shrink-0" /> Target Utama Program:
                    </h4>
                    <ul className="space-y-2">
                      {activePillar.goals.map((goal, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Active Projects */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                      <Heart className="w-4 h-4 shrink-0" /> Kegiatan Aktif Sekarang:
                    </h4>
                    <ul className="space-y-2">
                      {activePillar.projects.map((proj, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-700 shrink-0" />
                          <span>{proj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom buttons */}
                <div className="pt-6 border-t border-gray-100 flex justify-between items-center gap-4">
                  <a
                    href="#kontak"
                    onClick={() => setActivePillar(null)}
                    className="inline-flex items-center justify-center px-5 h-11 text-xs font-bold uppercase tracking-wider text-white bg-emerald-850 hover:bg-emerald-900 rounded-lg transition"
                  >
                    Hubungi Kami
                  </a>
                  <button
                    onClick={() => setActivePillar(null)}
                    className="px-5 py-2.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 text-xs font-semibold uppercase tracking-wider transition"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Blog Detail Modal */}
      <AnimatePresence>
        {activeBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={activeBlog.image}
                  alt={activeBlog.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveBlog(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 text-left">
                <div className="flex justify-between items-center text-xs font-mono text-gray-400 mb-2">
                  <span className="text-emerald-800 font-bold uppercase">{activeBlog.category}</span>
                  <span>{activeBlog.date}</span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-emerald-950 mb-4 leading-snug">
                  {activeBlog.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light mb-6">
                  {activeBlog.content}
                </p>
                <div className="flex justify-end pt-4 border-t border-gray-100">
                  <button
                    onClick={() => setActiveBlog(null)}
                    className="px-5 py-2 rounded-lg bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-900 transition"
                  >
                    Tutup Bacaan
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Code Preview / Copy Code Modal */}
      <AnimatePresence>
        {showCodeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-gray-900 text-gray-200 rounded-2xl max-w-4xl w-full h-[85vh] flex flex-col justify-between shadow-2xl border border-gray-800 overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 bg-gray-950 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <span className="font-mono text-xs text-gray-400 ml-2">index.html (HTML5 + Tailwind CSS CDN)</span>
                </div>
                <button
                  onClick={() => setShowCodeModal(false)}
                  className="text-gray-400 hover:text-white transition focus:outline-none"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Code Panel */}
              <div className="p-6 overflow-y-auto font-mono text-xs text-left text-emerald-400 bg-gray-950 leading-relaxed flex-1 whitespace-pre-wrap select-all selection:bg-orange-800 selection:text-white">
                {HTML_TEMPLATE}
              </div>

              {/* Footer */}
              <div className="p-6 bg-gray-900 border-t border-gray-800 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <p className="text-xs text-gray-500 font-sans leading-relaxed text-left max-w-lg">
                  Gunakan template murni di atas dengan cara menyalin seluruh teks dan menempelkannya ke file <code className="font-mono text-emerald-400">index.html</code> pada komputer Anda. Semuanya sudah dikonfigurasi lengkap beserta CDN & Javascript menu.
                </p>
                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    onClick={handleCopyCode}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-orange-700 hover:bg-orange-800 text-white text-xs font-bold uppercase tracking-wider transition"
                  >
                    {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {isCopied ? "Berhasil Disalin!" : "Salin Semua Kode"}
                  </button>
                  <button
                    onClick={() => setShowCodeModal(false)}
                    className="w-full sm:w-auto px-5 py-3 rounded-lg border border-gray-800 text-gray-400 hover:bg-gray-800 hover:text-white text-xs font-semibold uppercase tracking-wider transition"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
