"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-jacques">
      {/* Navbar fixed */}
      <nav className="w-full fixed top-0 left-0 bg-[#D5DADE] px-6 py-4 flex justify-between items-center shadow-md z-50">
        <h1 className="text-xl font-bold tracking-wide">Scanecer</h1>
      </nav>

      {/* Spacer agar konten tidak tertutup navbar */}
      <div className="pt-20 px-4 pb-6">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between mb-20 gap-8">
          <div className="lg:w-2/3 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Deteksi Dini Kanker Kulit <br className="hidden sm:block" />
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Dengan teknologi AI terkini, kami membantu mendeteksi berbagai
              jenis kanker kulit termasuk
              <span className="font-semibold">
                {" "}
                AK, BKL, BCC, Melanoma, Nevus,{" "}
              </span>
              dan kondisi kulit normal melalui analisis gambar kulit Anda.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="/detection">
                <button className="bg-[#D5DADE] hover:bg-[#c5ced5] text-gray-800 px-6 py-3 rounded-md font-medium transition-colors shadow-md">
                  Mulai Deteksi Sekarang
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-[#D5DADE] rounded-full opacity-40"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="/doctor.png"
                  alt="Doctor Illustration"
                  width={280}
                  height={280}
                  className="rounded-full object-cover border-4 border-white shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Cancer Section */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold text-center mb-6 relative w-fit mx-auto after:block after:w-12 after:h-1 after:mx-auto after:bg-gray-900 after:rounded-full after:mt-1">
            About Cancer
          </h3>
          <div className="flex flex-wrap justify-center gap-10 w-full px-4">
            {" "}
            {/* Tambah gap-4 dan padding horizontal */}
            {[
              {
                src: "/ak.jpg",
                label: "Actinic Keratosis",
                link: "/diagnosis/ak",
              },
              {
                src: "/bcc.jpg",
                label: "Basal Cell Carcinoma",
                link: "/diagnosis/bcc",
              },
              {
                src: "/bkl.jpg",
                label: "Benign Keratosis-like Lesions",
                link: "/diagnosis/bkl",
              },
              {
                src: "/mel.jpg",
                label: "Melanoma",
                link: "/diagnosis/mel",
              },
              { src: "/nev.jpg", label: "Nevus", link: "/diagnosis/nev" },
            ].map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="text-center flex-1 min-w-[200px] max-w-[300px] hover:scale-105 transition-transform"
              >
                <div className="w-full h-48 relative rounded-md overflow-hidden shadow-lg">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="mt-2 text-sm font-medium leading-tight">
                  {item.label}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 px-4 pb-8">
          <div className="max-w-4xl mx-auto">
            <h4 className="text-xl font-semibold text-center mb-6 relative w-fit mx-auto after:block after:w-12 after:h-1 after:mx-auto after:bg-gray-900 after:rounded-full after:mt-1">
              About Us
            </h4>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-6">
              <Link
                href="https://instagram.com"
                target="_blank"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              >
                <svg
                  className="w-6 h-6 text-gray-700 hover:text-pink-600 transition"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm10.25 2.25a.75.75 0 01.75.75v2a.75.75 0 01-1.5 0v-2a.75.75 0 01.75-.75zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
                </svg>
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              >
                <svg
                  className="w-6 h-6 text-gray-700 hover:text-blue-600 transition"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.5 9H15V6h-1.5C11.57 6 11 7.07 11 8.5V9H9v3h2v6h3v-6h2.25L17 9h-3.5z" />
                </svg>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
              >
                <svg
                  className="w-6 h-6 text-gray-700 hover:text-blue-400 transition"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.73.33-1.52.55-2.35.65.84-.5 1.49-1.3 1.8-2.23-.79.47-1.67.81-2.6 1-.75-.8-1.82-1.3-3-1.3-2.28 0-4.13 1.85-4.13 4.13 0 .32.04.63.11.93-3.44-.17-6.48-1.82-8.52-4.33-.35.6-.56 1.3-.56 2.05 0 1.42.72 2.68 1.82 3.42-.67-.02-1.3-.21-1.85-.51v.05c0 2 1.42 3.67 3.31 4.05-.35.09-.72.14-1.1.14-.27 0-.53-.03-.79-.08.53 1.65 2.07 2.85 3.9 2.88-1.43 1.12-3.23 1.79-5.19 1.79-.34 0-.67-.02-1-.06 1.82 1.17 4 1.85 6.33 1.85" />
                </svg>
              </Link>
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">
              <p>© {new Date().getFullYear()} Scanecer. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
