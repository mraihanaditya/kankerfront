import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ActinicKeratosisPage() {
  return (
    <div className="bg-white min-h-screen  text-gray-900 font-jacques relative">
      {/* Navbar */}
      {/* Navbar fixed - SAMA PERSIS dengan kodingan pertama */}
      <nav className="w-full fixed top-0 left-0 bg-[#D5DADE] px-6 py-4 flex justify-between items-center shadow-md z-50">
        <h1 className="text-xl font-bold tracking-wide">Scanecer</h1>
      </nav>

      {/* Hero Image with Overlay */}
      <div className="relative w-full h-[60vh] min-h-[400px] bg-gray-100">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white via-white/30 z-10" />
        <Image
          src="/bcc.jpg"
          alt="Basa Cell Carcinoma"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />
      </div>

      {/* Content Card */}
      <div className="max-w-4xl mx-auto px-5 sm:px-6 -mt-20 relative z-20 mb-16">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
          {/* Floating Image Badge */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-lg">
            <Image
              src="/bcc.jpg"
              alt="BCC Closeup"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="pt-20 pb-10 px-6 sm:px-10">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
              Basa Cell Carcinoma
              {/* <span className="text-[#A8B4BE]">Keratosis</span> */}
            </h2>
            <p className="text-center text-gray-500 mb-8">
              Kondisi Pra-Kanker Kulit
            </p>

            <div className="prose max-w-none text-gray-700">
              <p className="text-lg mb-6">
                Karsinoma Sel Basal (Basal Cell Carcinoma) merupakan jenis
                kanker kulit non-melanoma yang paling sering ditemukan. Kanker
                ini berasal dari sel basal, yaitu sel-sel keratinosit yang
                terletak pada lapisan terdalam epidermis. Meskipun tergolong
                kanker, BCC biasanya tumbuh lambat dan jarang menyebar ke bagian
                tubuh lain.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Ciri-ciri BCC:
              </h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  Warna perak/merah muda, mengkilap, tampak pembuluh darah
                  halus.
                </li>
                <li>Sering berdarah atau berkerak.</li>
                <li>
                  Plak datar, nodul, atau ulkus dangkal dengan tepi keras.
                </li>
                <li>Berkembang dalam bulan atau tahun (pertumbuhan lambat).</li>
                <li>
                  Biasa terletak di Wajah (hidung, pipi, mata), leher, lengan.
                </li>
                <li>
                  Biasanya lesi BCC tidak menimbulkan rasa sakit kecuali terjadi
                  infeksi atau trauma.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Scanecer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
