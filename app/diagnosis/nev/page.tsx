import Image from "next/image";
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
          src="/nev.jpg"
          alt="Nevus"
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
              src="/nev.jpg"
              alt="NEV Closeup"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="pt-20 pb-10 px-6 sm:px-10">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
              Nevus
              {/* <span className="text-[#A8B4BE]">Keratosis</span> */}
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p className="text-lg mb-6">
                Nevus merupakan bercak atau benjolan pada kulit yang berasal
                dari sel melanosit, yaitu sel yang memproduksi melanin, pigmen
                yang memberikan warna pada kulit dan rambut atau yang biasa
                disebut dengan tahi lalat.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Ciri-ciri NEV:
              </h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  Berwarna Coklat, hitam, abu, atau biru; batas bisa jelas atau
                  tidak teratur.
                </li>
                <li>
                  Berukuran Dari kecil hingga sangat besar (khususnya nevus
                  kongenital).
                </li>
                <li>Permukaan Halus, menonjol, atau kasar (verukosa).</li>
                <li>
                  Umumnya tidak bergejala; waspadai perubahan warna, bentuk,
                  atau luka.
                </li>
                <li>Lokal atau menyebar; kadang mengikuti garis Blaschko.</li>
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
