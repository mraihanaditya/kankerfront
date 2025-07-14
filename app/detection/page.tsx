"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

export default function DetectionPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  // Pindahkan fungsi startCamera keluar dari useEffect agar bisa dipanggil dari fungsi lain
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment",
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      setError("Tidak dapat mengakses kamera. Pastikan Anda memberikan izin.");
    }
  };

  // Auto-start kamera saat komponen mount
  useEffect(() => {
    startCamera();

    // Cleanup function
    return () => {
      if (videoRef.current?.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const captureImage = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const imageDataUrl = canvas.toDataURL("image/jpeg");
        setImage(imageDataUrl);
      }
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validasi tipe file
    if (!file.type.match("image/jpeg") && !file.type.match("image/jpg")) {
      setError("Hanya file JPG/JPEG yang diizinkan");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setImage(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const analyzeImage = async () => {
    if (!image) return;

    setIsAnalyzing(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image_base64: image }),
      });

      if (!response.ok) {
        throw new Error("Gagal menerima hasil dari server.");
      }

      const data = await response.json();
      setResult({
        diagnosis: data.diagnosis,
        confidence: data.confidence,
        recommendation: data.recommendation,
      });
    } catch (err) {
      setError("Terjadi kesalahan saat menghubungi server.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Modifikasi fungsi resetDetection untuk menghidupkan kamera kembali
  const resetDetection = () => {
    setImage(null);
    setResult(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    // Hidupkan kamera kembali setelah reset
    startCamera();
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 font-jacques">
      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 bg-[#D5DADE] px-6 py-4 flex justify-between items-center shadow-md z-50">
        <Link href="/" className="text-xl font-bold tracking-wide">
          Scanecer
        </Link>
      </nav>

      {/* Konten Utama */}
      <div className="pt-20 px-4 pb-6">
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Deteksi Kanker Kulit
          </h2>

          <div className="bg-[#F5F7FA] rounded-lg p-6 shadow-md">
            {/* Tampilkan Error jika ada */}
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                {error}
                <button
                  onClick={() => window.location.reload()}
                  className="ml-2 underline"
                >
                  Coba Lagi
                </button>
              </div>
            )}

            {/* Tampilan Kamera Langsung */}
            {!image && (
              <div className="space-y-6">
                <div className="relative aspect-video bg-black rounded-md overflow-hidden">
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center gap-4 flex-wrap">
                  <button
                    onClick={captureImage}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
                  >
                    Ambil Gambar
                  </button>
                  <button
                    onClick={triggerFileInput}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
                  >
                    Unggah Foto
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept=".jpg,.jpeg"
                    className="hidden"
                  />
                </div>
              </div>
            )}

            {/* Tampilan Setelah Ambil Gambar */}
            {image && !result && (
              <div className="space-y-6">
                <div className="relative aspect-video bg-black rounded-md overflow-hidden">
                  <img
                    src={image}
                    alt="Captured skin"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={analyzeImage}
                    disabled={isAnalyzing}
                    className={`bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition-colors ${
                      isAnalyzing ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {isAnalyzing ? "Menganalisis..." : "Analisis Gambar"}
                  </button>
                  <button
                    onClick={resetDetection}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-md font-medium transition-colors"
                  >
                    {fileInputRef.current?.value
                      ? "Unggah Foto Baru"
                      : "Ambil Gambar Baru"}
                  </button>
                </div>
              </div>
            )}

            {/* Tampilan Hasil */}
            {result && (
              <div className="space-y-6">
                <div className="relative aspect-video bg-black rounded-md overflow-hidden">
                  <img
                    src={image || ""}
                    alt="Analysed skin"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-white p-4 rounded-md shadow">
                  <h3 className="text-xl font-bold mb-2">Hasil Analisis:</h3>
                  <div className="mb-3">
                    <span className="font-semibold">Diagnosis:</span>{" "}
                    {result.diagnosis}
                  </div>
                  <div className="mb-3">
                    <span className="font-semibold">Prediksi:</span>{" "}
                    {result.confidence}%
                  </div>
                  <div>
                    <span className="font-semibold">Rekomendasi:</span>{" "}
                    {result.recommendation}
                  </div>
                </div>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={resetDetection}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
                  >
                    Periksa Lagi
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Petunjuk Penggunaan */}
          <div className="mt-8 bg-[#F5F7FA] rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Panduan Pemeriksaan Kulit
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Tips Pemeriksaan */}
              <div>
                <h4 className="font-medium text-lg mb-3 text-blue-600">
                  Tips Pemeriksaan:
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Gunakan pencahayaan alami yang cukup</li>
                  <li>Fokuskan pada area dengan perubahan warna/textur</li>
                  <li>Periksa tahi lalat dengan bentuk tidak beraturan</li>
                  <li>Perhatikan luka yang tidak kunjung sembuh</li>
                  <li>
                    Hasil lebih akurat untuk area kulit yang tidak berambut
                  </li>
                  <li>Jaga jarak kamera sekitar 15-20 cm dari kulit</li>
                  <li>Hindari bayangan pada area yang diperiksa</li>
                </ul>
              </div>
            </div>

            {/* Catatan Penting */}
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <h4 className="font-medium text-lg mb-2 text-yellow-700">
                Perhatian:
              </h4>
              <p className="text-sm">
                Hasil deteksi ini bersifat prediktif dan tidak menggantikan
                diagnosis dokter. Jika menemukan kelainan kulit yang
                mencurigakan, segera konsultasikan ke dokter spesialis kulit.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
