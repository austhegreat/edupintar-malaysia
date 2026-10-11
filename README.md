# 🎓 EduPintar Malaysia - Portal Pembelajaran KSSR & KSSM

> **Platform Web Pembelajaran Silibus Sekolah Rendah & Sekolah Menengah Malaysia (KSSR Semakan & KSSM / SPM)**  
> Dibina dengan seni bina modular (Website-First), responsif untuk telefon pintar, dan sedia untuk dilancarkan secara langsung di **Render.com**.

---

## 🌐 Cara Pelancaran Langsung ke Render.com (Go Live Online)

EduPintar Malaysia kini dilengkapi dengan fail konfigurasi [`render.yaml`](file:///C:/Users/User/.gemini/antigravity/scratch/edupintar-malaysia/render.yaml) dan pelayan pengeluaran [`server.js`](file:///C:/Users/User/.gemini/antigravity/scratch/edupintar-malaysia/server.js). Anda boleh menjadikannya boleh diakses oleh semua murid dan guru di seluruh Malaysia secara percuma dalam masa 2 minit!

### Langkah 1: Muat Naik Kod ke GitHub
1. Buka [GitHub.com](https://github.com) dan cipta repositori baharu bernama `edupintar-malaysia`.
2. Buka terminal di direktori projek ini dan jalankan arahan berikut (gantikan URL dengan pautan GitHub anda):
   ```bash
   git remote add origin https://github.com/<username-anda>/edupintar-malaysia.git
   git branch -M main
   git push -u origin main
   ```

### Langkah 2: Sambungkan ke Render.com (Percuma)
1. Pergi ke [Render.com](https://render.com) dan daftar masuk / log masuk menggunakan akaun GitHub anda.
2. Klik butang **"New +"** di bahagian atas kanan dan pilih **"Web Service"** (atau guna **"Blueprint"**).
3. Pilih repositori `edupintar-malaysia` yang anda muat naik tadi.
4. Render akan mengesan konfigurasi secara automatik daripada `render.yaml` & `package.json`:
   - **Environment:** Node
   - **Region:** Singapore *(paling pantas untuk pengguna di Malaysia)*
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free ($0)
5. Klik **"Deploy Web Service"**!
6. Dalam masa 1–2 minit, Render akan memberikan pautan URL awam rasmi anda (contohnya: `https://edupintar-malaysia.onrender.com`). Anda boleh kongsikan pautan ini kepada murid, ibu bapa, dan guru untuk mula belajar secara langsung!

---

## 🌟 Ciri-Ciri Utama (Core Features)

1. **Struktur Silibus Rasmi KPM (Kementerian Pendidikan Malaysia)**
   - **Sekolah Rendah (KSSR Semakan):** Tahap 1 (Tahun 1–3) dan Tahap 2 (Tahun 4–6 / UASA).
     - **Tahun 4 Sains (Unit 2):** Organ Pernafasan Manusia, Perkumuhan vs Penyahtinjaan & Kadar Pernafasan.
     - **Tahun 5 Sains (Unit 2):** Sistem Peredaran Darah & Sistem Rangka Manusia.
     - **Tahun 6 Matematik (Unit 2):** Pecahan, Perpuluhan & Peratusan.
   - **Sekolah Menengah (KSSM / SPM):**
     - **Tingkatan 4 Sejarah SPM (Bab 2):** Kebangkitan Nasionalisme, Akhbar Kaum Muda, MPSI & Tokoh Pejuang.
     - **Tingkatan 4 Matematik SPM (Bab 1):** Fungsi & Persamaan Kuadratik dalam Satu Pemboleh Ubah.
     - **Tingkatan 4 Fizik SPM (DLP - Bab 2):** Daya & Gerakan I, Graf Gerakan Linear, Inersia, Momentum & 4 Persamaan Kinematik.
     - **Tingkatan 4 Kimia SPM (DLP - Bab 2):** Jirim & Struktur Atom, Keluk Pemanasan/Penyejukan, Model Atom Dalton-Chadwick & Isotop.
     - **Tingkatan 4 Bahasa Melayu SPM (Kertas 1 & 2):** Sistem & Aplikasi Bahasa, Morfologi, Sintaksis, Peribahasa & Formula Karangan Cemerlang IMBaKUP.
     - **Tingkatan 5 Sejarah SPM (Bab 1):** Kedaulatan Negara, Formula TMUA & Ciri-ciri Negara Berdaulat.

2. **Papan Pendahulu Kebangsaan & Profil Pelajar/Guru (National Leaderboard)**
   - Paparan 10 Murid Paling Cemerlang di seluruh Malaysia.
   - Murid boleh menamakan profil, memasukkan sekolah & negeri mereka.
   - Mod pilihan Pelajar atau Guru.
   - Skor XP disegerakkan secara langsung ke pelayan Render melalui endpoint `/api/leaderboard`.

3. **Nota Padat & Konsep Penting (Bite-sized Notes)**
   - Rumusan padat mengikut subtopik DSKP.
   - **Akronim & Mnemonik Pintar** (contoh: Formula TMUA Kedaulatan, Formula IMBaKUP BM, D-T-R-B-C Model Atom).
   - **Tip Peperiksaan SPM & UASA** (Panduan menjawab Kertas 1, Kertas 2 KBAT).

4. **Kuiz Interaktif Berformat Peperiksaan (Interactive Quizzes)**
   - Pemasa undur masa (*Countdown Timer*) format SPM / UASA.
   - Pengiraan skor masa-nyata & gred lulus.
   - **Ulasan Terperinci Jawapan:** Penjelasan konsep dan pembongkaran perangkap soalan peperiksaan.

5. **Sistem Gamifikasi & Kemajuan Murid (Gamification Engine)**
   - **Mata Ganjaran (XP):** +50 XP pembacaan nota, +100-150 XP kuiz selesai, bonus skor 100%.
   - **Streak Harian (Daily Streak):** Mengira hari berturut-turut murid mengulang kaji pelajaran.
   - **Pangkat Murid (Level 1–6):** *Murid Permulaan* ➔ *Penuntut Bersemangat* ➔ *Bintang Kelas* ➔ *Wira Ilmuwan* ➔ *Jaguh Harapan* ➔ *Cendekiawan Pintar*.
   - **9 Lencana Pencapaian:** *Langkah Pertama*, *Juara Kuiz*, *Jaguh SPM*, *Wira Sains Cilik*, *Pakar Fizik Kuantum*, *Ahli Kimia Pintar*, *Pujangga Melayu*, *Rajin Berterusan*, *Skor Sempurna 100%*.

6. **Video Pembelajaran & Lembaran Kerja PDF**
   - Paparan pemain video kuliah interaktif dengan penanda masa (*timestamps*).
   - Butang **Cetak / Simpan PDF** dengan templat reka letak khas (`print.css`).

7. **Antara Muka Sedia Aplikasi Mudah Alih (Mobile-Ready UI)**
   - Bar navigasi bawah khas (*Bottom Navigation Bar*) untuk paparan telefon pintar.
   - Fail `manifest.json` disediakan untuk pemasangan segera sebagai **PWA** di telefon.

---

## 📂 Struktur Fail Projek

```
edupintar-malaysia/
├── index.html               # Halaman utama aplikasi web (Responsive SPA)
├── server.js                # Pelayan pengeluaran Express & API Leaderboard untuk Render
├── package.json             # Konfigurasi dependensi Node.js
├── render.yaml              # Render Blueprint untuk pelancaran automatik 1-klik
├── manifest.json            # Konfigurasi PWA untuk pemasangan di telefon
├── .gitignore               # Peraturan pengabaian fail git
├── css/
│   ├── style.css            # Penggayaan visual moden, font, animasi & mobile bottom nav
│   └── print.css            # Penggayaan khas cetakan nota & eksport ke PDF
├── js/
│   ├── app.js               # Pengawal aplikasi (Routing, carian topik, Leaderboard sync)
│   ├── syllabus-data.js     # Pangkalan data silibus KSSR Semakan & KSSM
│   ├── quiz-engine.js       # Enjin kuiz interaktif, pemasa & analisis jawapan
│   └── gamification.js      # Enjin XP, streak, tahap murid & 9 lencana pencapaian
└── README.md                # Dokumentasi panduan penggunaan & pelancaran ke Render
```

---

## 💻 Cara Menguji Secara Tempatan (Local Testing)

Jalankan pelayan Node.js tempatan:
```powershell
npm start
```
Buka pelayar anda di: `http://localhost:3000`

---

## 📱 Panduan Masa Hadapan: Penukaran ke Aplikasi Telefon (APK)

Apabila anda selesai menguji versi web secara langsung di Render dan bersedia untuk membina fail aplikasi telefon (Android APK & iOS):

1. **PWA (Tersedia Sekarang):** Murid hanya perlu buka pautan Render di Chrome/Safari dan tekan **"Add to Home Screen"**.
2. **Capacitor (APK Natif):** Jalankan `npx cap init` dan `npx cap add android` untuk menghasilkan projek Android Studio dan membina APK.
