import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Filter, Image as ImageIcon, Sparkles } from "lucide-react";
// @ts-ignore
import belajarAksaraUrl from "../assets/images/aksara.jpg";
import english from "../assets/images/english.jpeg";
import tariremaja from "../assets/images/tari.jpeg";
import hadroh from "../assets/images/hadroh.jpg";
import museum from "../assets/images/museum.jpeg";

export interface GalleryItem {
  id: string;
  title: string;
  category: "Rinjani Green" | "Nusantara Edu" | "Asthapura Culture";
  description: string;
  fullStory: string;
  image: string;
  date: string;
  location: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-10",
    title: "Belajar Aksara Sasak",
    category: "Asthapura Culture",
    description: "Sesi pelestarian sastra dan aksara klasik Sasak di pendopo sanggar bersama anak-anak dan pemuda adat.",
    fullStory: "Dibimbing oleh instruktur adat, para pemuda dan anak-anak sanggar berkumpul menggunakan meja belajar kayu tradisional (rehal/meja ngaji) untuk mempelajari kembali seni membaca dan menulis Aksara Jejawan Sasak purba yang tertulis di naskah lontar kuno, memastikan warisan literatur luhur Sasak tidak punah dimakan zaman.",
    image: belajarAksaraUrl,
    date: "18 Juni 2026",
    location: "LKP-Sanggar Seni Gedeng Sastra, Lombok Timur"
  },
  {
    id: "gal-1",
    title: "Museum Asthapura Rinjani",
    category: "NUsantara Edu",
    description: "",
    fullStory: "Museum Asthapura Rinjani merupakan sebuah museum kebudayaan (etnografi) lokal yang berfungsi sebagai pusat penyelamatan, perawatan, dan pelestarian warisan sejarah masyarakat Lombok, khususnya kebudayaan suku Sasak. Museum ini memfokuskan fungsinya untuk menjaga benda-benda pusaka tradisi agar tidak punah dan tetap bisa dipelajari oleh generasi mendatang.",
    image: museum,
    date: "12 Juni 2026",
    location: "Lereng Sabana Sembalun, Lombok Timur"
  },
  {
    id: "gal-2",
    title: "Aksi Clean-Up Jalur Pendakian",
    category: "Rinjani Green",
    description: "Operasi pembersihan sampah plastik di sepanjang jalur pendakian sakral Rinjani.",
    fullStory: "Satgas Sampah Rinjani menyisir area perkemahan Plawangan Sembalun dan mengangkut lebih dari 350 kg sampah non-organik untuk diolah kembali di Zero Waste Hub terdekat.",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=1200&q=80",
    date: "04 Juni 2026",
    location: "Plawangan Sembalun, Gunung Rinjani"
  },
  {
    id: "gal-3",
    title: "Pembibitan Endemik di Sanggar",
    category: "Rinjani Green",
    description: "Proses persemaian dan perawatan bibit pohon endemik di green house utama.",
    fullStory: "Tim relawan lingkungan mengelola ribuan benih pohon khas hutan pegunungan Lombok, mendidik anak-anak sanggar cara menyiram, merawat tanah, dan memahami ekosistem sejak usia dini.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80",
    date: "22 Mei 2026",
    location: "Green House Sanggar Sembalun"
  },
  {
    id: "gal-4",
    title: "Belajar Bersama di Pojok Baca",
    category: "Nusantara Edu",
    description: "Antusiasme anak-anak membaca buku dongeng Nusantara dan ensiklopedia sains.",
    fullStory: "Pojok Baca kami dirancang dengan struktur bambu terbuka agar menyatu dengan alam. Setiap akhir pekan, puluhan anak berkumpul untuk membaca bersama, melatih imajinasi, dan mengikuti sesi diskusi interaktif.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    date: "28 Mei 2026",
    location: "Pojok Baca Sajang, Lombok Utara"
  },
  {
    id: "gal-5",
    title: "Kelas Bahasa Inggris",
    category: "Nusantara Edu",
    description: "Metode belajar bahasa melalui lagu, cerita rakyat, dan permainan interaktif.",
    fullStory: "Relawan internasional dan lokal mengajar bahasa Inggris dengan mengintegrasikan nilai-nilai lokal, mempersiapkan anak-anak desa wisata agar cakap menyapa dunia tanpa kehilangan jati dirinya.",
    image: english,
    date: "15 Mei 2026",
    location: "Pusat Edukasi Asthapura Sembalun"
  },
  {
    id: "gal-6",
    title: "Workshop Literasi Digital Desa",
    category: "Nusantara Edu",
    description: "Pelatihan komputer dan pemanfaatan internet sehat untuk pemuda desa.",
    fullStory: "Sesi edukasi teknologi digital untuk anak muda dan pengurus desa adat, mengajarkan penulisan kreatif, pengelolaan website desa, serta literasi informasi untuk menangkal hoaks.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80",
    date: "02 Mei 2026",
    location: "Laboratorium Komputer Sanggar"
  },
  {
    id: "gal-7",
    title: "Melestarikan Tenun Kuno Sasak",
    category: "Asthapura Culture",
    description: "Dokumentasi ibu-ibu menganyam benang warna alam menjadi kain bermotif sakral.",
    fullStory: "Proses pewarnaan alami menggunakan daun jati dan kulit kayu, dilanjutkan dengan penenunan tradisional manual (Gedogan) oleh barisan penenun wanita terampil binaan Asthapura Culture.",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    date: "14 Mei 2026",
    location: "Koperasi Tenun Sasak Lestari, Lombok Timur"
  },
  {
    id: "gal-8",
    title: "Kelas Tari Untuk Remaja",
    category: "Asthapura Culture",
    description: "Anak-anak sanggar berlatih gerakan tari penyambutan tamu khas adat Sasak.",
    fullStory: "Setiap sore, sanggar kami dipenuhi gelak tawa dan langkah ritmis anak-anak yang tekun menghafalkan tari Gandrung Sasak dari instruktur penari senior, menjaga tradisi agar tetap hidup segar.",
    image: tariremaja,
    date: "10 Mei 2026",
    location: "Pendopo Utama Sanggar Asthapura"
  },
  {
    id: "gal-9",
    title: "Pementasan Musik Hadroh",
    category: "Asthapura Culture",
    description: "Permainan alat musik arab yang di ikuti dengan lantunan sholawat.",
    fullStory: "Dalam menyambut atau merayakan acara keagamaan, pemuda sanggar menampilkan kelihaian nya dalam memainkan alat musik hadroh mengikuti alunan sholawat, merayakan hari besar atau acara keagamaan.",
    image: hadroh,
    date: "01 Mei 2026",
    location: "Pelataran Candi Budaya Asthapura"
  }
];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === "Semua"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
    }
  };

  const categories = ["Semua", "Rinjani Green", "Nusantara Edu", "Asthapura Culture"];

  return (
    <section id="galeri" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-emerald-50 rounded-full blur-3xl -z-10 opacity-60" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl -z-10 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-widest mb-3">
            <ImageIcon className="w-3.5 h-3.5" /> Galeri Kegiatan
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-emerald-950 leading-tight">
            Langkah Nyata & Kilas Kegiatan Sanggar
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light mt-4">
            Abadikan setiap momentum pengabdian sosial, kelestarian ekologi Rinjani, dan semarak ekspresi kebudayaan tradisional Sasak yang kami asuh bersama warga.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                selectedCategory === cat
                  ? "bg-emerald-900 border-emerald-900 text-white shadow-md shadow-emerald-900/10"
                  : "bg-gray-50 hover:bg-emerald-50/50 border-gray-200/80 text-gray-600 hover:text-emerald-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              // Map categories to specific visual indicator badges
              const badgeColors = {
                "Rinjani Green": "bg-emerald-50 text-emerald-800 border-emerald-100",
                "Nusantara Edu": "bg-blue-50 text-blue-800 border-blue-100",
                "Asthapura Culture": "bg-orange-50 text-orange-800 border-orange-100"
              };

              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setLightboxIndex(index)}
                  className="group cursor-pointer bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Image wrapper */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-emerald-950/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-11 h-11 rounded-full bg-white/95 backdrop-blur-md text-emerald-900 flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <Sparkles className="w-5 h-5 animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 flex flex-col flex-grow text-left">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${badgeColors[item.category]}`}>
                        {item.category}
                      </span>
                      <span className="text-[10px] font-mono text-gray-400">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors mb-2 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mt-auto">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
            <p className="text-gray-400 text-sm font-light">Tidak ada foto kegiatan untuk kategori ini.</p>
          </div>
        )}
      </div>

      {/* Lightbox / Details Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Image side */}
              <div className="md:w-1/2 relative bg-gray-950 flex items-center justify-center min-h-[30vh] md:min-h-0">
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="w-full h-full object-cover max-h-[45vh] md:max-h-[90vh]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Navigation arrows */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition focus:outline-none"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition focus:outline-none"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Detail Info Side */}
              <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto text-left">
                {/* Close Button inside panel for better reach */}
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="absolute top-4 right-4 md:static md:self-end w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition mb-4 shadow-sm"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-100">
                      {filteredItems[lightboxIndex].category}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full">
                      {filteredItems[lightboxIndex].date}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 leading-tight">
                    {filteredItems[lightboxIndex].title}
                  </h3>

                  <div className="space-y-1 bg-emerald-50/40 p-3.5 rounded-xl border border-emerald-100 text-xs text-emerald-900 font-medium">
                    <p className="flex items-center gap-2">
                      <span className="text-orange-500">📍</span>
                      <span>Lokasi: <strong className="font-semibold">{filteredItems[lightboxIndex].location}</strong></span>
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Kilas Pengabdian</h4>
                    <p className="text-sm text-gray-600 leading-relaxed font-light">
                      {filteredItems[lightboxIndex].fullStory}
                    </p>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                  <span>Foto {lightboxIndex + 1} dari {filteredItems.length}</span>
                  <button
                    onClick={() => setLightboxIndex(null)}
                    className="text-emerald-800 hover:underline font-semibold"
                  >
                    Kembali ke Galeri
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
