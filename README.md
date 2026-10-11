# 🎓 EduPintar Malaysia - Portal Pembelajaran KSSR & KSSM

> **Platform Web Pembelajaran Silibus Sekolah Rendah & Sekolah Menengah Malaysia (KSSR Semakan & KSSM / SPM)**  
> Dibina dengan seni bina modular (Website-First), responsif untuk telefon pintar, dan sedia untuk dibungkus menjadi aplikasi Android/iOS.

---

## 🌟 Ciri-Ciri Utama (Core Features)

1. **Struktur Silibus Rasmi KPM (Kementerian Pendidikan Malaysia)**
   - **Sekolah Rendah (KSSR Semakan):** Tahap 1 (Tahun 1–3) dan Tahap 2 (Tahun 4–6 / UASA).
     - *Modul Pilihan:* **Tahun 5 Sains** (Sistem Peredaran Darah & Sistem Rangka) & **Tahun 6 Matematik** (Pecahan, Perpuluhan & Peratus).
   - **Sekolah Menengah (KSSM):** Menengah Rendah (Tingkatan 1–3 / UASA) dan Menengah Atas (Tingkatan 4–5 / SPM).
     - *Modul Pilihan:* **Tingkatan 4 Sejarah SPM** (Bab 2: Kebangkitan Nasionalisme), **Tingkatan 4 Matematik SPM** (Bab 1: Fungsi & Persamaan Kuadratik), dan **Tingkatan 5 Sejarah SPM** (Bab 1: Kedaulatan Negara).
   - **Dual Language Programme (DLP):** Label dan sokongan dwibahasa bagi subjek Sains dan Matematik.

2. **Nota Padat & Konsep Penting (Bite-sized Notes)**
   - Rumusan konsep padat mengikut subtopik.
   - **Akronim & Mnemonik Pintar** (contoh: Formula TMUA Kedaulatan, Akronim Ingat Rangka).
   - **Tip Peperiksaan SPM & UASA** (Panduan menjawab Kertas 1 & Kertas 2 KBAT).

3. **Kuiz Interaktif Berformat Peperiksaan (Interactive Quizzes)**
   - Pemasa undur masa (Countdown Timer) autentik peperiksaan.
   - Format soalan aneka pilihan (MCQ).
   - Pengiraan skor masa-nyata & gred lulus.
   - **Ulasan Terperinci Jawapan:** Menerangkan secara saintifik/fakta mengapa pilihan tersebut betul dan kesilapan lazim murid.

4. **Sistem Gamifikasi & Kemajuan Murid (Gamification Engine)**
   - **Mata Ganjaran (XP):** +50 XP untuk pembacaan nota, +100 XP untuk kuiz selesai, bonus untuk markah 100%.
   - **Streak Harian (Daily Streak):** Mengira hari berturut-turut murid mengulang kaji pelajaran.
   - **Pangkat Murid (Level 1–6):** *Murid Permulaan* ➔ *Penuntut Bersemangat* ➔ *Bintang Kelas* ➔ *Wira Ilmuwan* ➔ *Jaguh Harapan* ➔ *Cendekiawan Pintar*.
   - **Koleksi Lencana:** *Langkah Pertama*, *Juara Kuiz*, *Jaguh SPM*, *Wira Sains Cilik*, *Rajin Berterusan*, *Skor Sempurna 100%*.
   - Penyimpanan data automatik dalam pelayar (`localStorage`).

5. **Video Pembelajaran & Lembaran Kerja PDF**
   - Paparan pemain video kuliah interaktif dengan penanda masa (*timestamps*).
   - Butang **Cetak / Simpan PDF** dengan templat reka letak khas (`print.css`) untuk salinan fizikal tanpa gangguan navigasi web.

6. **Antara Muka Sedia Aplikasi Mudah Alih (Mobile-Ready UI)**
   - Bar navigasi bawah khas (*Bottom Navigation Bar*) untuk paparan telefon pintar.
   - Fail `manifest.json` disediakan untuk pemasangan segera sebagai **PWA (Progressive Web App)** di Android dan iOS.

---

## 📂 Struktur Fail Projek

```
edupintar-malaysia/
├── index.html               # Halaman utama aplikasi web (Responsive SPA)
├── manifest.json            # Konfigurasi PWA untuk pemasangan di telefon
├── css/
│   ├── style.css            # Penggayaan visual moden, font, animasi & mobile bottom nav
│   └── print.css            # Penggayaan khas cetakan nota & eksport ke PDF
├── js/
│   ├── app.js               # Pengawal aplikasi (Routing, carian topik, penukaran tab & peringkat)
│   ├── syllabus-data.js     # Pangkalan data silibus KSSR Semakan & KSSM
│   ├── quiz-engine.js       # Enjin kuiz interaktif, pemasa & analisis jawapan
│   └── gamification.js      # Enjin XP, streak, tahap murid & lencana pencapaian
└── README.md                # Dokumentasi panduan penggunaan & pembangunan aplikasi
```

---

## 🚀 Cara Menjalankan Laman Web Ini

### Kaedah 1: Buka Terus Dalam Pelayar Web (Paling Pantas)
Klik dua kali pada fail `index.html` atau buka menggunakan pelayar pilihan anda (Google Chrome, Microsoft Edge, Safari, Firefox):
```powershell
Start-Process "C:\Users\User\.gemini\antigravity\scratch\edupintar-malaysia\index.html"
```

### Kaedah 2: Jalankan Melalui Pelayan Tempatan Ringan (Local Server)
Jika anda memasang Python atau Node.js:

- **Menggunakan Python:**
  ```powershell
  python -m http.server 8000
  # Buka pelayar di http://localhost:8000
  ```

- **Menggunakan Node.js / npx:**
  ```powershell
  npx serve .
  ```

---

## 📱 Panduan Menukar Laman Web Kepada Aplikasi Telefon (Website ➔ Mobile App)

Memandangkan anda ingin **bina laman web dahulu** dan kemudian **bina aplikasi telefon**, kod ini telah direka khas agar sangat mudah ditukar kepada aplikasi mudah alih:

### Langkah A: Pasang sebagai PWA (Progressive Web App) — Tanpa Kos & Serta-merta
1. Hoskan laman web ini (contohnya di Vercel, Netlify, atau GitHub Pages secara percuma).
2. Murid membuka pautan pada telefon mereka (Chrome / Safari).
3. Murid klik **"Add to Home Screen"** / **"Pasang Aplikasi"**.
4. Aplikasi akan muncul di skrin telefon dengan ikon sendiri dan boleh dibuka skrin penuh tanpa bar URL pelayar.

### Langkah B: Menukar kepada Android APK & iOS Menggunakan Capacitor (Disyorkan)
Capacitor membolehkan kod HTML/CSS/JS ini dibungkus terus menjadi aplikasi natif sebenar yang boleh dimuat naik ke Google Play Store dan Apple App Store:

1. Di dalam direktori projek:
   ```bash
   npm init -y
   npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/ios
   npx cap init EduPintar com.edupintar.malaysia --web-dir .
   ```
2. Tambah platform Android:
   ```bash
   npx cap add android
   npx cap open android
   ```
3. Buka Android Studio dan klik **"Build APK"**!

### Langkah C: Integrasi Backend Penuh Pada Masa Hadapan (Jika Ingin Tambah Pangkalan Data Guru & Akaun Murid)
- Pangkalan Data: **Supabase** atau **Firebase** (untuk pengesahan login emel, penyimpanan markah murid di pelayan awan, dan papan pendahulu kebangsaan).
- Antara Muka Guru: Dashboard untuk guru memuat naik soalan kuiz dan nota baharu secara dinamik.

---

## 📌 Cadangan Tetapan Ruang Kerja (Workspace)
Sila tetapkan direktori projek ini sebagai ruang kerja aktif anda:  
`C:\Users\User\.gemini\antigravity\scratch\edupintar-malaysia`
