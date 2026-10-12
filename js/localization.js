/* Global UI localization. Lesson content uses its curated English fields when present. */
(function () {
  const bmToEn = {
    "Ruang belajar peribadi anda": "Your personal learning world",
    "Cari subjek, bab atau konsep... (cth: Sejarah, Fizik, Kuadratik, Darah)": "Search subjects, lessons, or ideas… (e.g. History, Physics, Quadratics)",
    "Cari subjek, bab atau topik...": "Search subjects, lessons, or topics…",
    "Bunyi: Hidup": "Sound: On", "Bunyi: Mati": "Sound: Off",
    "Papan Pendahulu": "Leaderboard", "Lihat Lencana →": "View badges →",
    "Lobi": "Home", "Silibus": "Learning map", "Game": "Games", "Kuiz": "Quizzes", "Profil": "Profile",
    "Pilih Mata Pelajaran": "Choose a learning zone", "Pilih subjek dan sambung belajar dari bab yang anda perlukan.": "Pick a zone and continue where you left off.",
    "Kelas pembelajaran anda": "Your class", "Tetapkan tahun atau tingkatan": "Choose your year or form", "Tukar kelas": "Change class",
    "Pilih mana-mana subjek untuk membuka Arena Pembelajaran Interaktif 3D": "Choose a learning zone to begin your adventure",
    "Klik untuk Terokai Modul": "Choose a world to explore", "Masuk Arena →": "Explore zone →",
    "bab tersedia": "lessons ready", "draf": "in progress", "Kandungan sedang disediakan": "Lessons coming soon",
    "Peta Misi Bab (Roadmap)": "Learning path", "Pilih mana-mana bab untuk membuka nota padat, kad imbasan 3D dan kuiz": "Choose a lesson to see notes, visuals, and practice",
    "Kembali ke Lobi Silibus": "Back to learning world", "Pilih Bab untuk Mula Belajar": "Choose a lesson to get started",
    "Kandungan pelajaran sedang disediakan": "Lesson being prepared", "Kandungan bab ini masih draf dan belum disemak.": "This lesson is still being prepared and reviewed.",
    "Modul Pembelajaran Lengkap (A-Z)": "Lesson", "Bilik Kuliah AI: Cikgu Aus": "Cikgu Aus classroom",
    "Latihan Kuiz Interaktif": "Practice quiz", "Zon Game / Duel": "Game zone", "Cetak / PDF": "Print / PDF",
    "Belajar satu konsep pada satu masa": "Learn one idea at a time", "Subtopik": "Subtopics", "Teroka konsep ini": "Explore this idea",
    "Masa Bacaan:": "Reading time:", "English Mode": "English", "Pilih subjek atau bab": "Choose a subject or lesson",
    "Kandungan pelajaran sedang disediakan": "Lesson content is being prepared",
    "Log masuk untuk belajar": "Log in to learn", "Cipta akaun EduPintar": "Create your EduPintar account",
    "Simpan kemajuan anda dan bawa profil ke mana-mana peranti.": "Save your progress and access your profile on any device.",
    "Nama pengguna": "Username", "E-mel": "Email", "Kata laluan": "Password", "Log Masuk": "Log in", "Cipta Akaun": "Create account",
    "Pengguna baharu? Cipta akaun": "New here? Create an account", "Sudah ada akaun? Log masuk": "Already have an account? Log in",
    "Pilih kelas anda": "Choose your class", "Tahun / Tingkatan": "Year / Form", "Sekolah Rendah": "Primary school", "Sekolah Menengah": "Secondary school",
    "Simpan pilihan": "Save choice", "Batal": "Cancel", "Simpan perubahan": "Save changes", "Tukar gambar profil": "Change profile picture",
    "Papar di papan pendahulu": "Show me on the leaderboard", "Belum dipilih": "Not selected", "Selesai Dibaca": "Lesson complete",
    "Pilih tahun atau tingkatan untuk mula": "Choose your year or form to begin", "Selamat belajar": "Welcome back",
    "Pilih kelas anda untuk membuka bahan pembelajaran.": "Choose your class to open your learning materials.",
    "Pilihan ini menentukan bab, kuiz dan cabaran yang dipaparkan.": "Your choice sets which lessons, quizzes, and challenges you see.",
    "Kedudukan murid dalam kelas anda": "Your class leaderboard", "Tiada murid dipaparkan buat masa ini.": "No learners to show yet.",
    "100% Format Rasmi KPM": "KPM-aligned learning", "Interaktif 3D & Kad Imbasan": "Interactive visuals & flashcards", "UASA & SPM Ready": "Practice for UASA & SPM",
    "Lihat Modul Contoh Lengkap": "View a sample learning zone", "Modul Tambahan Sedang Dikemaskini": "More learning zones are on the way",
    "Mata pelajaran": "Learning zones", "Pilih mata pelajaran": "Choose a learning zone", "Belum ada nota untuk bab ini.": "Notes for this lesson are not available yet."
    ,"Bahasa Melayu": "Malay Language", "Matematik (DLP)": "Mathematics", "Matematik (DLP/BM)": "Mathematics", "Matematik (SPM)": "Mathematics (SPM)",
    "Sains (DLP)": "Science", "Sains (DLP/BM)": "Science", "Sejarah": "History", "Sejarah (KSSM)": "History", "Sejarah (SPM)": "History (SPM)",
    "Geografi (KSSM)": "Geography", "Reka Bentuk & Teknologi": "Design & Technology", "Reka Bentuk & Teknologi (RBT)": "Design & Technology",
    "Pendidikan Islam": "Islamic Education", "Pendidikan Islam (SPM)": "Islamic Education (SPM)", "Bahasa Melayu (KSSM)": "Malay Language (KSSM)",
    "Bahasa Melayu (KSSM / UASA)": "Malay Language (KSSM / UASA)", "Bahasa Melayu (SPM)": "Malay Language (SPM)", "English (CEFR)": "English (CEFR)",
    "Bahasa Inggeris (SPM/CEFR)": "English (SPM/CEFR)", "Fizik (DLP/BM)": "Physics", "Kimia (DLP/BM)": "Chemistry", "Biologi (DLP/BM)": "Biology",
    "Sains Teras (SPM)": "Core Science (SPM)", "Perniagaan (SPM)": "Business (SPM)", "Nombor Nisbah": "Rational Numbers", "Faktor dan Gandaan": "Factors and Multiples",
    "KSSR Semakan": "KSSR (Revised)", "KSSM": "KSSM", "KSSR": "KSSR", "Sekolah Rendah": "Primary school", "Sekolah Menengah": "Secondary school",
    "Bab Lain:": "Other lessons:", "Kandungan dalam proses": "Content in progress", "Kandungan pelajaran sedang disediakan": "Lesson content is being prepared",
    "⭐ Selesai": "⭐ Completed", "🎯 Aktif": "🎯 Active", "Sedang Dibuka": "Open now", "Buka Bab →": "Open lesson →", "Akan datang": "Coming soon",
    "Modul Tambahan Sedang Dikemaskini": "More learning zones are on the way", "Sukatan pelajaran rasmi KPM sedang dimasukkan ke dalam pangkalan data EduPintar.": "More curriculum content is being added to EduPintar.",
    "Kuasa Dua, Punca Kuasa Dua, Kuasa Tiga dan Punca Kuasa Tiga": "Squares, Square Roots, Cubes and Cube Roots", "Nisbah, Kadar dan Kadaran": "Ratios, Rates and Proportions",
    "Ungkapan Algebra": "Algebraic Expressions", "Persamaan Linear": "Linear Equations", "Ketaksamaan Linear": "Linear Inequalities", "Garis dan Sudut": "Lines and Angles",
    "Poligon Asas": "Basic Polygons", "Perimeter dan Luas": "Perimeter and Area", "Pengenalan Set": "Introduction to Sets", "Pengendalian Data": "Data Handling",
    "Teorem Pythagoras": "Pythagoras' Theorem", "Pola dan Jujukan": "Patterns and Sequences", "Pemfaktoran dan Pecahan Algebra": "Factorisation and Algebraic Fractions",
    "Rumus Algebra": "Algebraic Formulae", "Poligon": "Polygons", "Bulatan": "Circles", "Bentuk Geometri Tiga Dimensi": "Three-Dimensional Geometrical Shapes",
    "Koordinat": "Coordinates", "Graf Fungsi": "Graphs of Functions", "Laju dan Pecutan": "Speed and Acceleration", "Kecerunan Garis Lurus": "Gradient of a Straight Line",
    "Transformasi Isometri": "Isometric Transformations", "Ukuran Kecenderungan Memusat": "Measures of Central Tendency", "Kebarangkalian Mudah": "Simple Probability",
    "Indeks": "Indices", "Bentuk Piawai": "Standard Form", "Matematik Pengguna: Simpanan, Pelaburan, Kredit dan Hutang": "Consumer Mathematics: Savings, Investments, Credit and Debt",
    "Lukisan Berskala": "Scale Drawings", "Nisbah Trigonometri": "Trigonometric Ratios", "Sudut dan Tangen Bulatan": "Angles and Tangents of Circles",
    "Pelan dan Dongakan": "Plans and Elevations", "Lokus dalam Dua Dimensi": "Loci in Two Dimensions", "Garis Lurus": "Straight Lines",
    "Tukar Bahasa / Switch to English": "Switch to Bahasa Malaysia", "Tukar ke Bahasa Melayu": "Switch to Bahasa Malaysia", "Sambung belajar": "Continue learning",
    "Tukar ke Bahasa Malaysia / Switch to English": "Switch to Bahasa Malaysia / English", "Zon Game": "Game zone", "Kelas pembelajaran anda": "Your class",
    "Tahap sekolah": "School level", "Simpan kelas saya": "Save my class", "Tukar": "Change", "Nama pengguna unik:": "Unique username:",
    "Paparkan nama pengguna, gambar profil dan XP saya pada papan pendahulu awam. E-mel tidak dipaparkan.": "Show my username, profile picture, and XP on the public leaderboard. My email will not be shown.",
    "Jumlah Mata Ganjaran": "Total points", "Streak Belajar": "Learning streak", "Disimpan ke akaun anda": "Saved to your account", "Log keluar": "Log out",
    "Papan Pendahulu Kebangsaan Malaysia": "Malaysia leaderboard", "Kemas kini masa nyata dari pelayan Render": "Live updates from Render",
    "Kami akan tunjukkan subjek, bab dan cabaran untuk kelas ini sahaja. Anda boleh mengubahnya kemudian melalui profil.": "We will show lessons and challenges for this class. You can change it later in your profile.",
    "Portal Sukatan Pelajaran Rasmi KSSR Semakan & KSSM (KPM)": "KSSR and KSSM learning portal",
    "Tarikh Cetakan: 11 Oktober 2026": "Printed: 11 October 2026", "Hak Cipta Terpelihara": "All rights reserved",
    "Terokai Konsep Sains & Matematik dalam 3D!": "Explore science and maths in 3D!", "Putar dengan tetikus / sentuhan": "Rotate with mouse or touch",
    "Grafik WebGL Masa-Nyata": "Interactive 3D graphics", "Tutup Paparan Profil": "Close profile", "Memuatkan data kedudukan kebangsaan...": "Loading leaderboard…",
    "Muat Semula": "Refresh", "Murid Pintar": "Smart learner", "Kandungan sedang disediakan": "Content is being prepared",
    "Klik mana-mana subjek untuk membuka Arena Pembelajaran Interaktif 3D": "Choose a learning zone to begin",
    "Hutan Ilmu": "Knowledge Grove", "Makmal Ciptaan": "Discovery Lab", "Pulau Cerita": "Story Island", "Puncak Teka-teki": "Puzzle Peak",
    "DUNIA PEMBELAJARAN ANDA": "YOUR LEARNING WORLD", "AKAN DATANG": "COMING SOON",
    "Tahun 1": "Year 1", "Tahun 2": "Year 2", "Tahun 3": "Year 3", "Tahun 4": "Year 4", "Tahun 5": "Year 5", "Tahun 6": "Year 6",
    "Tingkatan 1": "Form 1", "Tingkatan 2": "Form 2", "Tingkatan 3": "Form 3", "Tingkatan 4": "Form 4", "Tingkatan 5": "Form 5",
    "Bab 1": "Chapter 1", "Bab 2": "Chapter 2", "Bab 3": "Chapter 3", "Bab 4": "Chapter 4", "Bab 5": "Chapter 5",
    "Bab 6": "Chapter 6", "Bab 7": "Chapter 7", "Bab 8": "Chapter 8", "Bab 9": "Chapter 9", "Bab 10": "Chapter 10",
    "Selamat belajar": "Welcome back", "Kandungan bab ini masih draf dan belum disemak.": "This lesson is still being prepared and reviewed.",
    "Tahap 1": "Level 1", "Tahap 2": "Level 2", "Tahap 3": "Level 3", "Tahap 4": "Level 4", "Tahap 5": "Level 5", "Tahap 6": "Level 6",
    "Maksud persamaan": "What an equation means", "Menyelesaikan persamaan": "Solving equations", "Menyemak jawapan": "Checking solutions",
    "Bahasa algebra": "Algebraic language", "Memudahkan ungkapan": "Simplifying expressions", "Pengembangan": "Expansion",
    "Integer": "Integers", "Operasi integer": "Integer operations", "Nombor nisbah": "Rational numbers", "Faktor dan gandaan": "Factors and multiples",
    "Nombor perdana": "Prime numbers", "FSTB dan GSTK": "HCF and LCM", "Kuasa dua dan punca kuasa dua": "Squares and square roots",
    "Kuasa tiga dan punca kuasa tiga": "Cubes and cube roots", "Anggaran punca": "Estimating roots", "Nisbah": "Ratios", "Kadar": "Rates", "Kadaran": "Proportion",
    "Simbol ketaksamaan": "Inequality symbols", "Menyelesaikan ketaksamaan": "Solving inequalities", "Garis nombor": "Number lines",
    "Jenis sudut": "Types of angles", "Hubungan sudut": "Angle relationships", "Garis selari": "Parallel lines", "Poligon": "Polygons",
    "Segi tiga": "Triangles", "Segi empat": "Quadrilaterals", "Perimeter": "Perimeter", "Luas segi empat dan segi tiga": "Area of rectangles and triangles",
    "Luas bentuk gabungan": "Area of composite shapes", "Notasi set": "Set notation", "Kesatuan dan persilangan": "Union and intersection",
    "Rajah Venn": "Venn diagrams", "Mengumpul dan menyusun data": "Collecting and organising data", "Carta dan graf": "Charts and graphs",
    "Mentafsir data": "Interpreting data", "Teorem": "The theorem", "Mencari hipotenus": "Finding the hypotenuse", "Mencari sisi tegak": "Finding a shorter side"
    ,"Format UASA Bahagian A, B dan C, Karangan Respons Terbuka, Peribahasa dan Tatabahasa Lanjutan.": "UASA Sections A, B and C, open-response essays, proverbs, and advanced grammar.",
    "Welcome routines, telling time, present continuous tense, year in year out, and jobs.": "Everyday greetings, telling the time, present continuous, routines, and jobs.",
    "Nombor hingga 10 000 000 (juta & pecahan juta), pecahan & peratus, wang (untung, rugi, diskaun, invois, aset), dan koordinat.": "Numbers to 10,000,000, fractions and percentages, money, profit and loss, discounts, invoices, assets, and coordinates.",
    "Mikroorganisma, interaksi antara hidupan (simbiosis), pemuliharaan, daya geseran, kelajuan, dan pengawetan makanan.": "Microorganisms, interactions between organisms, conservation, friction, speed, and food preservation.",
    "Akidah: Beriman kepada Hari Akhirat dan Qada' & Qadar, Feqah: Solat Sunat Aidilfitri, Aidiladha, dan Hajat.": "Faith: belief in the Hereafter and divine decree. Fiqh: Eid and need-based voluntary prayers.",
    "Wonders of the world, passive voice constructions, relative clauses, and argumentative essay writing.": "World wonders, passive voice, relative clauses, and argumentative essays.",
    "Pembentukan Malaysia 1963, 13 Negeri & 3 Wilayah Persekutuan, Rukun Negara, dan Pemimpin Perdana Menteri Malaysia.": "The formation of Malaysia in 1963, its states and federal territories, the Rukun Negara, and Malaysian prime ministers.",
    "Aplikasi elektromekanikal, asas robotik & sensor penderia, dan seni reka bentuk makanan (plating).": "Electromechanical applications, robotics and sensors, and food presentation design.",
    "Sintaksis: 4 pola ayat dasar (FN+FN, FN+FK, FN+FA, FN+FS), ayat majmuk dan peribahasa.": "Syntax: four basic sentence patterns, compound sentences, and proverbs.",
    "Bab 1: Indeks (Hukum Indeks, Indeks Pecahan), Bentuk Piawai, dan Matematik Pengguna Simpanan & Pelaburan.": "Indices and index laws, fractional indices, standard form, and consumer mathematics for savings and investments.",
    "Bab 1: Rangsangan dan Gerak Balas (Sistem Saraf Manusia, Mekanisme Deria Penglihatan & Pendengaran).": "Stimuli and responses, the human nervous system, and the senses of sight and hearing.",
    "Bab 1: Kedatangan Kuasa Barat ke Tanah Melayu, faktor kemajuan industri, dan strategi peluasan kuasa British.": "The arrival of Western powers in Malaya, industrial growth, and British expansion strategies.",
    "Sumber semula jadi di Malaysia (sumber boleh baharu vs tidak boleh baharu), kegiatan ekonomi dan kelestarian alam.": "Malaysia's renewable and non-renewable resources, economic activities, and environmental sustainability.",
    "Bab 1: Reka Bentuk Mekatronik (Sistem Mekanikal, Elektrik, Elektronik dan Kawalan Pengaturcaraan).": "Mechatronic design: mechanical, electrical, electronic, and programmable control systems.",
    "Sistem bahasa Menengah Rendah, teknik ringkasan cemerlang, novel Komsas, dan karangan respons terbuka.": "Lower-secondary language skills, summary writing, KOMSAS novels, and open-response essays.",
    "Kedaulatan negara, perlembagaan, raja berperlembagaan, dan pembinaan Malaysia.": "National sovereignty, the constitution, constitutional monarchy, and the formation of Malaysia.",
    "Ubah langsung & songsang, matriks, matematik pengguna, dan pemodelan matematik.": "Direct and inverse variation, matrices, consumer mathematics, and mathematical modelling.",
    "Bab 1: Daya dan Gerakan II (Daya Paduan, Leraian Daya Fx = F cos θ, dan Keseimbangan Daya).": "Forces and Motion II: resultant forces, resolving forces, and equilibrium.",
    "Bab 1: Keseimbangan Redoks, Sel Kimia & Sel Elektrolisis, Kakisan Logam dan Siri Elektrokimia.": "Redox equilibrium, chemical and electrolytic cells, metal corrosion, and the electrochemical series.",
    "Kertas 1 (Karangan Bahagian A & B) & Kertas 2 (Morfologi, Sintaksis, Penyuntingan, Bahasa Melayu Standard).": "Paper 1 essays and Paper 2 morphology, syntax, editing, and Standard Malay.",
    "CEFR C1 level vocabulary, report and review writing format, and reading paper 1 gapped text strategy.": "CEFR C1 vocabulary, report and review writing, and gapped-text reading strategies.",
    "Bab 1: Organisasi Tisu Tumbuhan dan Pertumbuhan (Tisu Meristem Apeks & Meristem Sisi).": "Plant tissue organisation and growth, including apical and lateral meristems.",
    "Bab 1: Mikroorganisma (Bakteria, Fungi, Protozoa, Virus, Alga) dan aplikasi bioteknologi serta antibiotik.": "Microorganisms—bacteria, fungi, protozoa, viruses, and algae—and biotechnology and antibiotics.",
    "Bab 1: Pengurusan Sumber Manusia (Peranan, Standard Prestasi dan Ganjaran Pekerja).": "Human resource management: roles, performance standards, and employee rewards.",
    "Muamalat Islam: Konsep Jual Beli, Riba, Gharar, Murabahah, Takaful dan Khilafah ar-Rasyidin.": "Islamic transactions: trade, riba, gharar, murabahah, takaful, and the Rashidun Caliphate."
  };
  const attrNames = ["placeholder", "title", "aria-label"];
  const originalText = new WeakMap();
  const originalAttrs = new WeakMap();
  let language = "bm";

  function englishFor(value) {
    const key = String(value || "").replace(/\s+/g, " ").trim();
    if (bmToEn[key]) return bmToEn[key];
    const ready = key.match(/^(\d+) bab tersedia(?: · (\d+) draf)?$/i);
    if (ready) return `${ready[1]} lessons ready${ready[2] ? ` · ${ready[2]} in progress` : ""}`;
    const chapterCount = key.match(/^(\d+) Bab Tersedia$/i);
    if (chapterCount) return `${chapterCount[1]} lessons available`;
    const days = key.match(/^(\d+) Hari$/);
    if (days) return `${days[1]} days`;
    const badges = key.match(/^Tahap (\d+): (.+)$/);
    if (badges) return `Level ${badges[1]}: ${badges[2]}`;
    const chapter = key.match(/^Bab (\d+)(.*)$/);
    if (chapter) return `Chapter ${chapter[1]}${chapter[2]}`;
    const form = key.match(/^Tingkatan (\d+)(.*)$/);
    if (form) return `Form ${form[1]}${form[2]}`;
    const year = key.match(/^Tahun (\d+)(.*)$/);
    if (year) return `Year ${year[1]}${year[2]}`;
    const placement = key.match(/^(Tingkatan|Tahun) (\d+)\s*[·•]\s*(Sekolah Rendah|Sekolah Menengah)(.*)$/);
    if (placement) return `${placement[1] === "Tingkatan" ? "Form" : "Year"} ${placement[2]} · ${placement[3] === "Sekolah Rendah" ? "Primary school" : "Secondary school"}${placement[4]}`;
    const dayCount = key.match(/^(\d+) Hari Berturut-turut$/);
    if (dayCount) return `${dayCount[1]} day streak`;
    return null;
  }

  function translateNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const source = originalText.get(node);
      if (language === "en") {
        const translated = englishFor(source);
        if (translated !== null) node.nodeValue = source.replace(source.trim(), translated);
      } else if (source !== node.nodeValue) node.nodeValue = source;
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE || /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/.test(node.tagName)) return;
    for (const attribute of attrNames) {
      if (!node.hasAttribute(attribute)) continue;
      let originals = originalAttrs.get(node);
      if (!originals) { originals = {}; originalAttrs.set(node, originals); }
      if (!(attribute in originals)) originals[attribute] = node.getAttribute(attribute);
      const source = originals[attribute];
      if (language === "en") node.setAttribute(attribute, englishFor(source) || source);
      else node.setAttribute(attribute, source);
    }
    for (const child of node.childNodes) translateNode(child);
  }

  function apply(nextLanguage) {
    language = nextLanguage === "en" ? "en" : "bm";
    document.documentElement.lang = language === "en" ? "en" : "ms";
    document.title = language === "en" ? "EduPintar Malaysia | Your Learning World" : "EduPintar Malaysia - Portal Pembelajaran KSSR Semakan & KSSM SPM";
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = language === "en"
      ? "A playful learning world for Malaysian primary and secondary students, with lessons, interactive visuals, and progress tracking."
      : "Dunia pembelajaran interaktif untuk murid sekolah rendah dan menengah Malaysia, dengan nota, visual dan kemajuan pembelajaran.";
    if (document.body) translateNode(document.body);
  }

  const observer = new MutationObserver(records => {
    for (const record of records) {
      if (record.type === "characterData") translateNode(record.target);
      for (const node of record.addedNodes || []) translateNode(node);
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
    let savedLanguage = "bm";
    try { savedLanguage = localStorage.getItem("edupintar_language") || window.app?.currentLanguage || "bm"; } catch (_) { savedLanguage = window.app?.currentLanguage || "bm"; }
    apply(savedLanguage);
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  }, { once: true });

  window.eduI18n = { apply, get language() { return language; } };
})();
