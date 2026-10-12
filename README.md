# 🎓 EduPintar Malaysia - Portal Pembelajaran KSSR & KSSM

> **Platform Web Pembelajaran Silibus Sekolah Rendah & Sekolah Menengah Malaysia (KSSR Semakan & KSSM / SPM)**  
> Dibina dengan seni bina modular (Website-First), responsif untuk telefon pintar, dan sedia untuk dilancarkan secara langsung di **Render.com**.

## Akaun, profil dan simpanan kemajuan

Versi ini menggunakan Supabase Auth dan Postgres untuk akaun, nama pengguna, gambar profil dan kemajuan merentas peranti.

1. Cipta projek Supabase dan buka **SQL Editor**.
2. Jalankan keseluruhan fail `supabase-setup.sql` sekali. Ia menyediakan jadual profil, kawalan akses baris (RLS), paparan papan pendahulu dan storan gambar.
3. Dalam Supabase **Authentication → URL Configuration**, tetapkan Site URL kepada URL Render anda dan tambah URL itu ke Redirect URLs. Tetapkan pengesahan e-mel mengikut keperluan anda.
4. Dalam Render, buka **Environment** untuk web service dan tetapkan `SUPABASE_URL` kepada Project URL serta `SUPABASE_ANON_KEY` kepada anon/publishable key projek tersebut. Jangan gunakan atau dedahkan service-role key.
5. Deploy semula. Pelajar boleh mencipta akaun menggunakan e-mel dan kata laluan, memilih nama pengguna unik, memuat naik gambar, dan mengaktifkan paparan pada papan pendahulu secara pilihan.

### Pilihan kelas dan kandungan ikut tingkatan

- Untuk projek Supabase yang sudah disediakan, jalankan `supabase-grade-profile-upgrade.sql` sekali dalam SQL Editor sebelum deploy versi ini. Projek baharu boleh gunakan `supabase-setup.sql` yang terkini.
- Selepas log masuk pertama, murid memilih sekolah rendah/menengah dan Tahun/Tingkatan. Pilihan ini disimpan pada profil; carian, subjek, bab, kuiz dan senarai papan pendahulu ditapis kepada kelas tersebut.
- Murid boleh menukar kelas melalui butang **Tukar kelas** atau profil. XP keseluruhan kekal pada akaun, manakala papan pendahulu mengira XP yang diperoleh dalam kelas semasa sahaja. Untuk pertandingan yang memerlukan pencegahan penipuan, skor masih perlu disahkan di pelayan.
- Sekolah rendah kini mempunyai laluan pembelajaran khusus Tahun 1–6 bagi Matematik, Sains, Bahasa Melayu dan English. Sejarah dipaparkan untuk Tahun 4–6 mengikut kurikulum KSSR Semakan 2017 yang sedang digunakan.
- Setiap pelajaran sekolah rendah yang diterbitkan mempunyai subtopik, nota ringkas, latihan dan aktiviti interaktif berkaitan topik. Visual merangkumi model pecahan dan kubus CSS 3D, simulasi jatuh bebas, alat ukur, carta data, pembina ayat dan penerokaan sumber sejarah.
- 329 bab templat generik telah dibuang daripada fail silibus. Bab lain yang belum mempunyai kandungan substantif juga tidak dipaparkan sebagai pelajaran.
- Bahan sekolah rendah ialah bantuan pembelajaran yang dikarang untuk EduPintar; liputannya bukan pengganti DSKP penuh. Semak rujukan dan nota peralihan kurikulum dalam `CURRICULUM-SOURCES.md`.
- Liputan sekolah menengah masih belum lengkap. Kandungan Matematik Tingkatan 1–3 mempunyai nota BM; mata pelajaran dan bahasa lain perlu disemak sebelum dianggap lengkap.

Kemajuan disimpan pada profil akaun. Papan pendahulu hanya memaparkan pengguna yang memilih untuk menyertainya, menggunakan nama pengguna, gambar dan XP sahaja. Nama sebenar, sekolah dan e-mel tidak diminta atau dipaparkan.

### Antara muka, bahasa dan prestasi

- Bilik darjah menggunakan ilustrasi CSS 3D yang ringan. Pergerakan avatar 2D dan muat turun Three.js semasa permulaan telah dibuang.
- Butang `BM` / `EN` menukar bahasa antara Bahasa Malaysia dan English dan menyimpan pilihan dalam pelayar pada peranti itu.
- Aktiviti matematik dan sains menggunakan CSS, SVG atau Canvas tempatan; tiada imej besar atau enjin 3D luaran diperlukan untuk aktiviti itu.
- Fail CSS dan JavaScript tempatan menggunakan kunci versi pada URL. `index.html` tidak disimpan dalam cache jangka panjang supaya deployment baharu lebih mudah dimuatkan.
- Antara muka dan pelajaran sekolah rendah yang baharu tersedia dalam BM dan English. Tiada rentetan antara muka bahasa Cina dalam keluaran ini.

**Nota integriti skor:** XP masih dikira dalam pelayar. Untuk pertandingan berhadiah atau papan pendahulu kompetitif, pindahkan pengiraan ganjaran ke fungsi pelayan yang mengesahkan keputusan kuiz sebelum menganggap XP sebagai anti-penipuan.

---

## 🌐 Cara Pelancaran Langsung ke Render.com (Go Live Online)

EduPintar Malaysia menggunakan konfigurasi [`render.yaml`](render.yaml) dan pelayan pengeluaran [`server.js`](server.js). Sebelum mengaktifkan akaun di Render, ikut langkah Supabase di atas dan masukkan pemboleh ubah persekitaran yang diperlukan.

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

## Ciri-ciri keluaran ini

- Akaun pelajar, profil, pemilihan Tahun/Tingkatan dan kemajuan disimpan melalui Supabase.
- Laluan sekolah rendah untuk Matematik, Sains, Bahasa Melayu dan English (Tahun 1–6), serta Sejarah (Tahun 4–6 dalam KSSR Semakan 2017).
- Nota berbahagi subtopik, kuiz asas dan aktiviti visual yang sesuai dengan tajuk. Aktiviti 3D menggunakan CSS; simulasi graviti menggunakan Canvas.
- Kawalan bahasa BM/EN, susun atur responsif, cetakan nota dan manifest PWA.
- Papan pendahulu kekal pilihan. XP dikira pada pelayar dan belum sesuai untuk pertandingan yang memerlukan skor kalis manipulasi.

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
│   ├── app.js               # Pengawal aplikasi, routing dan paparan pelajaran
│   ├── syllabus-data.js     # Data KSSR Semakan & KSSM yang diterbitkan
│   ├── primary-curriculum.js # Laluan sekolah rendah Tahun 1–6
│   ├── visual-graphics.js   # Aktiviti SVG, CSS 3D dan Canvas
│   ├── quiz-engine.js       # Enjin kuiz interaktif, pemasa & analisis jawapan
│   └── gamification.js      # Enjin XP, streak, tahap murid & 9 lencana pencapaian
└── README.md                # Dokumentasi panduan penggunaan & pelancaran ke Render
```

## Bilik darjah dan aktiviti visual

Selepas murid memilih kelas, aplikasi memaparkan ilustrasi bilik darjah CSS 3D dengan Cikgu Aus. Pergerakan 2D dan muat turun enjin Three.js tidak digunakan. Visual bab dimuatkan bersama kandungan dan menggunakan kawalan HTML, CSS atau Canvas ringan; kandungan nota kekal boleh dibaca tanpa visual.

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
