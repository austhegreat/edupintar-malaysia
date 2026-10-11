/**
 * EduPintar Malaysia - Data Sukatan Pelajaran (KSSR & KSSM)
 * Merangkumi kurikulum Sekolah Rendah (KSSR Semakan) dan Sekolah Menengah (KSSM / SPM)
 */

const SYLLABUS_DATA = {
  primary: {
    name: "Sekolah Rendah",
    curriculum: "KSSR Semakan",
    grades: [
      { id: "t1", name: "Tahun 1", badge: "Tahap 1" },
      { id: "t2", name: "Tahun 2", badge: "Tahap 1" },
      { id: "t3", name: "Tahun 3", badge: "Tahap 1" },
      { id: "t4", name: "Tahun 4", badge: "Tahap 2 (UASA)", isFeatured: true },
      { id: "t5", name: "Tahun 5", badge: "Tahap 2 (UASA)", isFeatured: true },
      { id: "t6", name: "Tahun 6", badge: "Tahap 2 (UASA)", isFeatured: true }
    ],
    subjects: {
      "t4": [
        {
          id: "t4-sains",
          name: "Sains",
          code: "SN-T4",
          icon: "🫁",
          color: "from-emerald-500 to-teal-600",
          theme: "emerald",
          hasDlp: true,
          chaptersCount: 10,
          description: "Meneroka organ pernafasan, perkumuhan manusia, dan kemandirian tumbuhan.",
          chapters: [
            {
              id: "t4-sn-c2",
              number: "Unit 2",
              title: "Manusia: Pernafasan & Perkumuhan",
              summary: "Memahami laluan udara semasa menarik dan menghembus nafas serta organ perkumuhan dan penyahtinjaan.",
              xpReward: 140,
              badgeReward: "Wira Sains Cilik",
              notes: {
                title: "Unit 2: Pernafasan dan Perkumuhan Manusia",
                readTime: "6 minit",
                dlpAvailable: true,
                sections: [
                  {
                    heading: "1. Organ Pernafasan Manusia & Laluan Udara",
                    content: "Manusia bernafas menggunakan <strong>peparu</strong> untuk menyedut oksigen dan membebaskan karbon dioksida.",
                    bulletPoints: [
                      "<strong>Laluan Udara Menarik Nafas:</strong> Hidung ➔ Trakea ➔ Peparu (Dada naik dan mengembang).",
                      "<strong>Laluan Udara Menghembus Nafas:</strong> Peparu ➔ Trakea ➔ Hidung (Dada turun dan mengempis).",
                      "<strong>Kadar Pernafasan:</strong> Bilangan pergerakan dada naik dan turun dalam satu minit. Lebih cergas aktiviti, lebih tinggi kadar pernafasan!"
                    ],
                    mnemonic: "💡 <strong>Formula Ingat:</strong> Tarik Nafas = H-T-P (Hidung ➔ Trakea ➔ Peparu). Hembus Nafas = P-T-H (Peparu ➔ Trakea ➔ Hidung)!"
                  },
                  {
                    heading: "2. Perkumuhan & Penyahtinjaan",
                    content: "Tubuh kita menyingkirkan bahan buangan toksik untuk kekal sihat.",
                    bulletPoints: [
                      "<strong>Peparu:</strong> Menyingkirkan karbon dioksida dan wap air melalui hembusan nafas.",
                      "<strong>Ginjal (Buah Pinggang):</strong> Menyingkirkan air kencing (urea, garam mineral, air).",
                      "<strong>Kulit:</strong> Menyingkirkan peluh melalui liang peluh.",
                      "<strong>Penyahtinjaan:</strong> Penyingkiran tinja (sisa makanan yang tidak tercerna) melalui dubur."
                    ],
                    examTip: "⭐ <strong>Tip UASA:</strong> Jangan keliru antara <em>perkumuhan</em> (penyingkiran bahan toksik daripada sel tubuh) dan <em>penyahtinjaan</em> (penyingkiran tinja melalui dubur)!"
                  }
                ]
              },
              video: {
                title: "Sains Tahun 4: Laluan Udara & Organ Perkumuhan",
                duration: "7:45 minit",
                presenter: "Cikgu Farah (Guru Sains Inovatif)",
                embedUrl: "https://www.youtube.com/embed/f9ONXd_-anM",
                highlights: [
                  "0:30 - Laluan Udara Menarik & Menghembus Nafas",
                  "2:40 - Eksperimen Kadar Pernafasan",
                  "5:15 - 3 Organ Perkumuhan Utama"
                ]
              },
              worksheet: {
                title: "Lembaran Latihan UASA Sains Tahun 4 (Unit 2)",
                pages: 2,
                itemsCount: 8,
                fileType: "PDF Interaktif",
                downloadUrl: "#",
                previewItems: [
                  "Menyusun urutan laluan udara menarik nafas",
                  "Memadankan organ dengan hasil perkumuhan",
                  "Soalan situasi kadar pernafasan selepas berlari"
                ]
              },
              quiz: {
                id: "quiz-t4-sn-c2",
                title: "Kuiz Interaktif: Pernafasan & Perkumuhan Manusia",
                timeLimitMinutes: 8,
                passingScore: 60,
                xpPoints: 100,
                questions: [
                  {
                    id: 1,
                    question: "Apakah laluan udara yang betul semasa manusia menarik nafas?",
                    options: [
                      "Hidung ➔ Trakea ➔ Peparu",
                      "Peparu ➔ Trakea ➔ Hidung",
                      "Hidung ➔ Peparu ➔ Jantung",
                      "Mulut ➔ Perut ➔ Peparu"
                    ],
                    correctIndex: 0,
                    explanation: "Semasa menarik nafas, udara kaya oksigen masuk melalui hidung, menuruni trakea dan memenuhi peparu."
                  },
                  {
                    id: 2,
                    question: "Organ manakah yang bertanggungjawab menyingkirkan peluh?",
                    options: ["Peparu", "Kulit", "Ginjal", "Hati"],
                    correctIndex: 1,
                    explanation: "Kulit menyingkirkan peluh yang mengandungi air, urea dan garam mineral melalui liang peluh."
                  },
                  {
                    id: 3,
                    question: "Mengapakah kadar pernafasan seseorang meningkat selepas berlari 100 meter?",
                    options: [
                      "Kerana tubuh memerlukan lebih banyak gas karbon dioksida",
                      "Kerana tubuh memerlukan lebih banyak oksigen dengan segera untuk menjana tenaga",
                      "Kerana otot kaki menjadi lebih panjang",
                      "Kerana suhu badan menurun"
                    ],
                    correctIndex: 1,
                    explanation: "Aktiviti cergas memerlukan lebih banyak tenaga, maka sel badan memerlukan lebih banyak bekalan oksigen menyebabkan dada bernafas lebih laju."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "t4-mt",
          name: "Matematik",
          code: "MT-T4",
          icon: "📐",
          color: "from-blue-500 to-indigo-600",
          theme: "blue",
          hasDlp: true,
          chaptersCount: 8,
          description: "Nombor hingga 100 000, operasi asas, pecahan dan perpuluhan.",
          chapters: []
        }
      ],
      "t5": [
        {
          id: "t5-sains",
          name: "Sains",
          code: "SN-T5",
          icon: "🔬",
          color: "from-emerald-500 to-teal-600",
          theme: "emerald",
          hasDlp: true,
          chaptersCount: 10,
          description: "Meneroka sains hayat, sains fizikal, bahan dan teknologi.",
          chapters: [
            {
              id: "t5-sn-c2",
              number: "Unit 2",
              title: "Manusia: Sistem Peredaran Darah & Sistem Rangka",
              summary: "Memahami struktur rangka utama manusia dan bagaimana jantung mengepam darah beroksigen ke seluruh tubuh.",
              xpReward: 150,
              badgeReward: "Wira Sains Cilik",
              notes: {
                title: "Unit 2: Sistem Manusia (Rangka & Peredaran Darah)",
                readTime: "7 minit",
                dlpAvailable: true,
                sections: [
                  {
                    heading: "1. Sistem Rangka Manusia dan Fungsinya",
                    content: "Tubuh manusia disokong oleh sistem rangka. Tanpa rangka, kita akan lembik seperti obor-obor!",
                    bulletPoints: [
                      "<strong>Tengkorak (Cranium):</strong> Melindungi otak kita daripada kecederaan.",
                      "<strong>Tulang Belakang:</strong> Menyokong tubuh dan membolehkan kita berdiri tegak dan membongkok.",
                      "<strong>Tulang Rusuk:</strong> Membentuk sangkar rusuk untuk melindungi organ utama seperti jantung dan paru-paru.",
                      "<strong>Tulang Tangan dan Kaki:</strong> Berfungsi sebagai sokongan dan membolehkan pergerakan harian."
                    ],
                    mnemonic: "💡 <strong>Akronim Ingat Rangka (T-B-R-T):</strong> <u>T</u>engkorak lindung otak, <u>B</u>elakang tegak, <u>R</u>usuk lindung jantung, <u>T</u>angan-kaki gerak pantas!"
                  },
                  {
                    heading: "2. Sistem Peredaran Darah Manusia",
                    content: "Sistem peredaran darah terdiri daripada tiga bahagian utama iaitu <strong>Jantung</strong>, <strong>Salur Darah</strong>, dan <strong>Darah</strong>.",
                    bulletPoints: [
                      "<strong>Jantung:</strong> Berfungsi mengepam darah ke seluruh tubuh dan ke peparu. Jantung manusia ada 4 ruang.",
                      "<strong>Salur Darah:</strong> Tiub pengangkutan darah. Terbahagi kepada <em>Arteri</em> (bawa darah keluar dari jantung) dan <em>Vena</em> (bawa darah kembali ke jantung).",
                      "<strong>Darah Beroksigen:</strong> Kaya dengan oksigen, berwarna merah cerah, dipam dari peparu ke jantung lalu ke seluruh tubuh.",
                      "<strong>Darah Kurang Oksigen:</strong> Kaya dengan karbon dioksida, dipam dari seluruh tubuh ke peparu untuk disingkirkan."
                    ],
                    examTip: "⭐ <strong>Tip UASA:</strong> Soalan format UASA Bahagian B sering menyoal laluan peredaran darah: <em>Tubuh manusia ➔ Peparu ➔ Jantung ➔ Seluruh tubuh</em>. Pastikan faham perbezaan darah beroksigen dan kurang oksigen!"
                  }
                ]
              },
              video: {
                title: "Animasi 3D: Laluan Peredaran Darah Manusia",
                duration: "8:25 minit",
                presenter: "Cikgu Farah (Guru Sains Inovatif)",
                embedUrl: "https://www.youtube.com/embed/f9ONXd_-anM",
                highlights: [
                  "0:30 - Pengenalan Fungsi Jantung 4 Ruang",
                  "2:15 - Arteri vs Vena: Apa Bezanya?",
                  "5:10 - Laluan Darah Beroksigen ke Otak dan Otot",
                  "7:00 - Soalan Latihan UASA Klon"
                ]
              },
              worksheet: {
                title: "Lembaran Latihan UASA Sains Tahun 5 (Unit 2)",
                pages: 2,
                itemsCount: 10,
                fileType: "PDF Interaktif",
                downloadUrl: "#",
                previewItems: [
                  "Melabel rajah rangka manusia (Tengkorak, Rusuk, Tulang Belakang)",
                  "Melukis anak panah laluan peredaran darah manusia",
                  "Soalan situasi KBAT: Kesan jika salur darah tersumbat oleh kolesterol"
                ]
              },
              quiz: {
                id: "quiz-t5-sn-c2",
                title: "Kuiz Interaktif: Sistem Rangka & Darah Manusia",
                timeLimitMinutes: 10,
                passingScore: 60,
                xpPoints: 120,
                questions: [
                  {
                    id: 1,
                    question: "Apakah fungsi utama tulang rusuk pada tubuh manusia?",
                    options: [
                      "Melindungi otak daripada hentakan",
                      "Melindungi organ dalaman seperti peparu dan jantung",
                      "Membantu tubuh berdiri tegak",
                      "Menghasilkan cecair hempedu"
                    ],
                    correctIndex: 1,
                    explanation: "Tulang rusuk membentuk sangkar rusuk yang berfungsi melindungi organ lembut di rongga dada iaitu peparu dan jantung."
                  },
                  {
                    id: 2,
                    question: "Organ manakah yang bertanggungjawab mengepam darah ke seluruh tubuh?",
                    options: [
                      "Peparu",
                      "Buah Pinggang",
                      "Jantung",
                      "Hati"
                    ],
                    correctIndex: 2,
                    explanation: "Jantung bertindak seperti pam berotot yang mengepam darah beroksigen dan darah kurang oksigen ke seluruh sistem peredaran darah."
                  },
                  {
                    id: 3,
                    question: "Darah yang bergerak dari peparu ke jantung adalah darah yang kaya dengan...",
                    options: [
                      "Gas Karbon Dioksida",
                      "Gas Oksigen",
                      "Gas Nitrogen",
                      "Bahan Kumuh Toksik"
                    ],
                    correctIndex: 1,
                    explanation: "Di peparu berlaku pertukaran gas. Darah menyerap gas oksigen dan menyingkirkan karbon dioksida sebelum dipam ke jantung untuk disebarkan ke tubuh."
                  },
                  {
                    id: 4,
                    question: "Apakah yang akan berlaku jika sendi pada siku tangan kita tidak wujud?",
                    options: [
                      "Tangan tidak dapat membengkok atau digerakkan dengan fleksibel",
                      "Jantung tidak dapat mengepam darah",
                      "Kulit tangan menjadi kering",
                      "Tulang rusuk akan retak"
                    ],
                    correctIndex: 0,
                    explanation: "Sendi ialah tempat pertemuan antara dua atau lebih tulang yang membolehkan pergerakan dan kebolehlenturan anggota badan."
                  },
                  {
                    id: 5,
                    question: "Antara amalan berikut, yang manakah menjaga kesihatan sistem peredaran darah kita?",
                    options: [
                      "Banyak memakan makanan segera berminyak",
                      "Bersenam secara berkala dan makan sayur-sayuran",
                      "Tidur kurang daripada 4 jam sehari",
                      "Minum air manis berkarbonat setiap hari"
                    ],
                    correctIndex: 1,
                    explanation: "Senaman kardiovaskular dan diet seimbang menguatkan otot jantung dan menghalang pengumpulan plak lemak dalam salur darah."
                  }
                ]
              }
            },
            {
              id: "t5-sn-c3",
              number: "Unit 3",
              title: "Haiwan: Kemandirian Spesies Haiwan",
              summary: "Cara haiwan memastikan kelangsungan spesies mereka melalui adaptasi ciri khas dan tingkah laku khas.",
              xpReward: 120,
              badgeReward: "Sahabat Alam",
              notes: {
                title: "Unit 3: Kemandirian Spesies Haiwan",
                readTime: "5 minit",
                dlpAvailable: true,
                sections: [
                  {
                    heading: "Ciri Khas Haiwan Melindungi Diri daripada Musuh",
                    content: "Haiwan dianugerahkan ciri khas seperti duri tajam (landak), cangkerang keras (penyu), sengat berbisa (kala jengking), dan penyamaran (sesumpah).",
                    bulletPoints: [
                      "<strong>Duri Tajam:</strong> Landak dan ikan buntal",
                      "<strong>Bercangkerang:</strong> Kura-kura dan ketam",
                      "<strong>Sengat Berbisa:</strong> Tebuan dan ular",
                      "<strong>Penyamaran (Camouflage):</strong> Belalang daun dan sesumpah"
                    ]
                  }
                ]
              },
              quiz: {
                id: "quiz-t5-sn-c3",
                title: "Kuiz Pantas: Kemandirian Haiwan",
                timeLimitMinutes: 5,
                passingScore: 60,
                xpPoints: 80,
                questions: [
                  {
                    id: 1,
                    question: "Haiwan manakah melindungi diri dengan cara menyemburkan dakwat hitam?",
                    options: ["Sotong", "Kura-kura", "Ikan buntal", "Landak"],
                    correctIndex: 0,
                    explanation: "Sotong menyemburkan cecair gelap untuk mengelirukan pemangsa semasa melarikan diri."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "t5-mt",
          name: "Matematik",
          code: "MT-T5",
          icon: "📐",
          color: "from-blue-500 to-indigo-600",
          theme: "blue",
          hasDlp: true,
          chaptersCount: 8,
          description: "Nombor bulat sehingga 1 000 000, pecahan, wang, dan ukuran geometri.",
          chapters: [
            {
              id: "t5-mt-c1",
              number: "Unit 1",
              title: "Nombor Hingga 1 000 000 (Satu Juta)",
              summary: "Membaca, menulis, membanding dan membundar nombor hingga 1 000 000.",
              xpReward: 100,
              badgeReward: "Pakar Nombor",
              notes: {
                title: "Unit 1: Nombor dan Operasi Hingga 1 Juta",
                readTime: "6 minit",
                dlpAvailable: true,
                sections: [
                  {
                    heading: "Nilai Tempat dan Nilai Digit",
                    content: "Pastikan faham perbezaan Nilai Tempat (perkataan e.g. Ratus Ribu) dan Nilai Digit (nombor e.g. 500 000).",
                    bulletPoints: [
                      "Contoh Nombor: 742 819",
                      "Nilai tempat bagi digit 4 = Puluh Ribu",
                      "Nilai digit bagi digit 4 = 40 000"
                    ]
                  }
                ]
              },
              quiz: {
                id: "quiz-t5-mt-c1",
                title: "Latihan Pantas Nilai Tempat",
                timeLimitMinutes: 5,
                passingScore: 60,
                xpPoints: 80,
                questions: [
                  {
                    id: 1,
                    question: "Apakah nilai digit bagi 6 dalam nombor 562 301?",
                    options: ["600", "6 000", "60 000", "600 000"],
                    correctIndex: 2,
                    explanation: "Digit 6 berada pada nilai tempat puluh ribu, jadi nilai digitnya ialah 60 000."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "t5-bm",
          name: "Bahasa Melayu",
          code: "BM-T5",
          icon: "📚",
          color: "from-amber-500 to-orange-600",
          theme: "amber",
          hasDlp: false,
          chaptersCount: 8,
          description: "Tatabahasa, pemahaman petikan, peribahasa dan karangan berformat UASA.",
          chapters: []
        },
        {
          id: "t5-bi",
          name: "English",
          code: "BI-T5",
          icon: "🌍",
          color: "from-sky-500 to-cyan-600",
          theme: "sky",
          hasDlp: false,
          chaptersCount: 10,
          description: "Grammar, Reading Comprehension, Vocabulary, and Writing essays.",
          chapters: []
        },
        {
          id: "t5-sej",
          name: "Sejarah",
          code: "SEJ-T5",
          icon: "🏛️",
          color: "from-red-500 to-rose-600",
          theme: "rose",
          hasDlp: false,
          chaptersCount: 6,
          description: "Warisan kedaulatan negara, perjuangan tokoh kemerdekaan, dan lambang kebangsaan.",
          chapters: []
        }
      ],
      "t6": [
        {
          id: "t6-mt",
          name: "Matematik",
          code: "MT-T6",
          icon: "🧮",
          color: "from-blue-600 to-cyan-600",
          theme: "blue",
          hasDlp: true,
          chaptersCount: 8,
          description: "Pecahan, perpuluhan, peratus, wang dan penyelesaian masalah berayat.",
          chapters: [
            {
              id: "t6-mt-c2",
              number: "Unit 2",
              title: "Pecahan, Perpuluhan & Peratus",
              summary: "Operasi gabungan pecahan, penukaran nombor bercampur dan pengiraan peratusan untung/rugi.",
              xpReward: 140,
              badgeReward: "Kalkulator Kilat",
              notes: {
                title: "Unit 2: Pecahan dan Peratusan Mudah Faham",
                readTime: "6 minit",
                dlpAvailable: true,
                sections: [
                  {
                    heading: "Operasi Darab Pecahan",
                    content: "Untuk mendarab pecahan, darabkan pengangka dengan pengangka, dan penyebut dengan penyebut.",
                    bulletPoints: [
                      "Formula: (a/b) × (c/d) = (a × c) / (b × d)",
                      "Pastikan pecahan akhir dipermudahkan kepada bentuk termudah!"
                    ],
                    mnemonic: "💡 Ingat: 'Atas darab Atas, Bawah darab Bawah, permudah jangan lupa!'"
                  }
                ]
              },
              quiz: {
                id: "quiz-t6-mt-c2",
                title: "Kuiz Cabaran Pecahan & Peratus",
                timeLimitMinutes: 8,
                passingScore: 60,
                xpPoints: 100,
                questions: [
                  {
                    id: 1,
                    question: "Berapakah 25% daripada RM 240?",
                    options: ["RM 48", "RM 60", "RM 80", "RM 50"],
                    correctIndex: 1,
                    explanation: "25% = 1/4. Jadi 1/4 × RM 240 = RM 60."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "t6-sn",
          name: "Sains",
          code: "SN-T6",
          icon: "🚀",
          color: "from-emerald-500 to-teal-600",
          theme: "emerald",
          hasDlp: true,
          chaptersCount: 10,
          description: "Mikroorganisma, interaksi antara hidupan, daya dan mesin.",
          chapters: []
        }
      ]
    }
  },
  secondary: {
    name: "Sekolah Menengah",
    curriculum: "KSSM",
    grades: [
      { id: "f1", name: "Tingkatan 1", badge: "Menengah Rendah (UASA)" },
      { id: "f2", name: "Tingkatan 2", badge: "Menengah Rendah (UASA)" },
      { id: "f3", name: "Tingkatan 3", badge: "Menengah Rendah (UASA)" },
      { id: "f4", name: "Tingkatan 4", badge: "SPM Menengah Atas", isFeatured: true },
      { id: "f5", name: "Tingkatan 5", badge: "SPM Menengah Atas", isFeatured: true }
    ],
    subjects: {
      "f4": [
        {
          id: "f4-sej",
          name: "Sejarah (SPM)",
          code: "1249",
          icon: "📜",
          color: "from-amber-600 to-red-700",
          theme: "amber",
          hasDlp: false,
          chaptersCount: 10,
          description: "Subjek Wajib Lulus SPM: Warisan bangsa, nasionalisme, dan pembinaan negara merdeka.",
          chapters: [
            {
              id: "f4-sej-c2",
              number: "Bab 2",
              title: "Kebangkitan Nasionalisme",
              summary: "Mengkaji perkembangan idea nasionalisme di Barat, Asia Tenggara, dan penentangan penjajahan di Tanah Melayu.",
              xpReward: 180,
              badgeReward: "Jaguh Sejarah SPM",
              notes: {
                title: "Bab 2: Kebangkitan Nasionalisme (KSSM Tingkatan 4)",
                readTime: "9 minit",
                dlpAvailable: false,
                sections: [
                  {
                    heading: "1. Maksud & Intipati Nasionalisme",
                    content: "Nasionalisme ialah perasaan cinta yang mendalam terhadap bangsa dan negara, serta gerakan menentang penjajahan untuk mencapai kemerdekaan.",
                    bulletPoints: [
                      "<strong>Profesor Emeritus Tan Sri Dr. Khoo Kay Kim:</strong> Nasionalisme merujuk perjuangan orang Melayu bagi mengembalikan kedudukan unggul mereka.",
                      "<strong>Dr. R. Suntharalingam:</strong> Fenomena sejagat yang mengiktiraf hak setiap bangsa untuk memerintah negara sendiri.",
                      "<strong>Dato' Onn Jaafar:</strong> Mengajak orang Melayu bersatu padu bagi memulihkan martabat bangsa di tanah air sendiri."
                    ],
                    mnemonic: "💡 <strong>Akronim Tokoh SPM:</strong> <u>KHOO</u> (Kedudukan Melayu), <u>SUNTHAR</u> (Sejagat bangsa), <u>ONN</u> (Orang Melayu bersatu)."
                  },
                  {
                    heading: "2. Faktor Kemunculan Gerakan Nasionalisme di Tanah Melayu",
                    content: "Terdapat 6 faktor utama pemangkin kesedaran nasionalisme di Tanah Melayu:",
                    bulletPoints: [
                      "<strong>1. Peranan Agama:</strong> Gerakan Islah dipelopori Kaum Muda (Sheikh Muhammad Tahir Jalaluddin, Syed Syeikh al-Hadi) membangkitkan kesedaran Islam yang progresif.",
                      "<strong>2. Penulisan Kreatif:</strong> Novel, cerpen, dan puisi meniupkan semangat cintakan tanah air (contoh: novel <em>Putera Gunung Tahan</em> oleh Pak Sako).",
                      "<strong>3. Media Cetak (Akhbar & Majalah):</strong> <em>Al-Imam</em>, <em>Neracha</em>, <em>Utusan Melayu</em>, <em>Warta Malaya</em> menjadi lidah rasmi menyuarakan nasib rakyat.",
                      "<strong>4. Sistem Pendidikan:</strong> Maktab Perguruan Sultan Idris (MPSI) melahirkan intelektual dan pejuang berjiwa bangsa.",
                      "<strong>5. Kemunculan Golongan Intelektual:</strong> Lepasan Timur Tengah, lepasan Inggeris, dan lepasan maktab perguruan.",
                      "<strong>6. Pengaruh Luar:</strong> Revolusi Turki Uthmaniyah, Gerakan Pan-Islamisme, dan kemenangan Jepun menewaskan Rusia (1905)."
                    ],
                    examTip: "🎯 <strong>Fokus Kertas 1 SPM & KBAT Kertas 2:</strong> Soalan sering bertanya sumbangan Kaum Muda melalui majalah <em>Al-Imam</em> dan peranan MPSI sebagai 'The Factory of Leaders'."
                  }
                ]
              },
              video: {
                title: "Masterclass SPM Sejarah: Bab 2 Formula Hafal Tokoh & Akhbar",
                duration: "12:40 minit",
                presenter: "Cikgu Roslan (Pakar Sejarah SPM)",
                embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                highlights: [
                  "1:15 - Pengertian Nasionalisme mengikut tokoh",
                  "4:30 - Faktor Agama: Gerakan Islah & Kaum Muda",
                  "7:50 - Peranan Akhbar Utama (Al-Imam, Utusan Melayu)",
                  "10:15 - Analisis Format Soalan KBAT SPM"
                ]
              },
              worksheet: {
                title: "Modul Gerempur SPM Sejarah Bab 2: Peta Minda & Soalan Struktur",
                pages: 3,
                itemsCount: 15,
                fileType: "Nota & Latihan PDF",
                downloadUrl: "#",
                previewItems: [
                  "Peta I-Think: Faktor Kemunculan Nasionalisme Tanah Melayu",
                  "Latihan Padanan: Tokoh Intelektual dan Pertubuhan Kebangsaan",
                  "Soalan Esei Klon SPM: Langkah generasi muda memupuk jati diri patriotik"
                ]
              },
              quiz: {
                id: "quiz-f4-sej-c2",
                title: "Simulasi SPM Kertas 1: Sejarah Bab 2",
                timeLimitMinutes: 12,
                passingScore: 60,
                xpPoints: 150,
                questions: [
                  {
                    id: 1,
                    question: "Gerakan Islah yang dipelopori oleh Kaum Muda di Tanah Melayu menyebarkan idea mereka melalui media cetak utama iaitu...",
                    options: [
                      "Akhbar Utusan Melayu",
                      "Majalah Al-Imam",
                      "Warta Melayu",
                      "Majlis"
                    ],
                    correctIndex: 1,
                    explanation: "Majalah Al-Imam diterbitkan pada tahun 1906 di Singapura sebagai wadah utama Kaum Muda untuk membangkitkan kesedaran Islam progresif dan kemajuan umat."
                  },
                  {
                    id: 2,
                    question: "Karya sastera novel 'Putera Gunung Tahan' yang mengkritik dasar imperialisme British ditulis oleh tokoh nasionalis...",
                    options: [
                      "Harun Aminurrashid",
                      "Ishak Haji Muhammad (Pak Sako)",
                      "Zaba (Zainal Abidin Ahmad)",
                      "Ibrahim Haji Yaakob"
                    ],
                    correctIndex: 1,
                    explanation: "Ishak Haji Muhammad atau lebih dikenali sebagai Pak Sako menghasilkan karya satira tajam 'Putera Gunung Tahan' dan 'Anak Mat Lela Gila' untuk mengkritik penjajah British."
                  },
                  {
                    id: 3,
                    question: "Institusi pendidikan manakah yang terkenal sebagai 'The Cradle of Malay Nationalism' yang melahirkan ramai tokoh pemimpin guru dan penulis?",
                    options: [
                      "Maktab Melayu Kuala Kangsar (MCKK)",
                      "Maktab Perguruan Sultan Idris (MPSI), Tanjung Malim",
                      "Penang Free School",
                      "Kolej Islam Malaya"
                    ],
                    correctIndex: 1,
                    explanation: "MPSI (kini UPSI) di Tanjung Malim memainkan peranan penting melahirkan guru-guru berjiwa pejuang yang membakar semangat nasionalisme di seluruh pelusuk tanah air."
                  },
                  {
                    id: 4,
                    question: "Peristiwa antarabangsa manakah yang membuktikan bahawa kuasa kecil Asia mampu menewaskan kuasa besar Barat dan menyuntik keberanian bangsa Timur?",
                    options: [
                      "Kemenangan Jepun menewaskan Rusia pada tahun 1905",
                      "Revolusi Perancis 1789",
                      "Perang Kemerdekaan Amerika 1776",
                      "Penubuhan Liga Bangsa"
                    ],
                    correctIndex: 0,
                    explanation: "Kejayaan Jepun mengalahkan gergasi Eropah iaitu Rusia dalam perang 1904-1905 memecahkan mitos bahawa kuasa Barat tidak boleh ditewaskan."
                  },
                  {
                    id: 5,
                    question: "Apakah matlamat penubuhan Kesatuan Melayu Muda (KMM) oleh Ibrahim Haji Yaakob pada tahun 1938?",
                    options: [
                      "Membantu British memungut cukai",
                      "Menuntut kemerdekaan Tanah Melayu dan idea penyatuan Melayu Raya",
                      "Menubuhkan sekolah berasrama penuh",
                      "Menggalakkan perniagaan bijih timah sahaja"
                    ],
                    correctIndex: 1,
                    explanation: "KMM merupakan pertubuhan Melayu bersifat politik pertama yang memperjuangkan kemerdekaan melalui konsep Melayu Raya (Indonesia-Tanah Melayu)."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "f4-mt",
          name: "Matematik (SPM)",
          code: "1449",
          icon: "📈",
          color: "from-blue-600 to-indigo-800",
          theme: "indigo",
          hasDlp: true,
          chaptersCount: 10,
          description: "Subjek Wajib Lulus SPM: Fungsi kuadratik, asas nombor, penaakulan logik, dan operasi set.",
          chapters: [
            {
              id: "f4-mt-c1",
              number: "Bab 1",
              title: "Fungsi & Persamaan Kuadratik dalam Satu Pemboleh Ubah",
              summary: "Bentuk am ax² + bx + c = 0, bentuk graf parabola (senyum/masam), titik punca, dan pemfaktoran.",
              xpReward: 170,
              badgeReward: "Pakar Kuadratik SPM",
              notes: {
                title: "Bab 1: Fungsi & Persamaan Kuadratik Lengkap",
                readTime: "8 minit",
                dlpAvailable: true,
                sections: [
                  {
                    heading: "1. Bentuk Am Fungsi Kuadratik",
                    content: "Fungsi kuadratik ditulis dalam bentuk: <code>f(x) = ax² + bx + c</code>, di mana a, b, dan c ialah pemalar serta <code>a ≠ 0</code>.",
                    bulletPoints: [
                      "Kuasa tertinggi bagi pemboleh ubah x mestilah <strong>2</strong>.",
                      "Hanya mempunyai <strong>satu pemboleh ubah</strong> sahaja (contohnya x atau y).",
                      "Bukan kuadratik jika ada x³ atau x⁻¹ atau pemboleh ubah di bawah pecahan."
                    ],
                    mnemonic: "💡 <strong>Bentuk Graf:</strong><br>• Jika <code>a > 0</code> (positif) ➔ Graf bentuk <strong>SENYUM (∪)</strong>, mempunyai titik <strong>MINIMUM</strong>.<br>• Jika <code>a < 0</code> (negatif) ➔ Graf bentuk <strong>MASAM (∩)</strong>, mempunyai titik <strong>MAKSIMUM</strong>."
                  },
                  {
                    heading: "2. Kaedah Mencari Punca Persamaan Kuadratik",
                    content: "Punca persamaan kuadratik <code>ax² + bx + c = 0</code> ialah nilai-nilai x yang memuaskan persamaan tersebut (titik persilangan pada paksi-x).",
                    bulletPoints: [
                      "<strong>Kaedah 1 - Pemfaktoran:</strong> Contoh <code>x² - 5x + 6 = 0</code> ➔ <code>(x - 2)(x - 3) = 0</code> ➔ <code>x = 2</code> atau <code>x = 3</code>.",
                      "<strong>Kaedah 2 - Formula Kuadratik:</strong> <code>x = [-b ± √(b² - 4ac)] / (2a)</code>.",
                      "<strong>Semakan Pantas Menggunakan Kalkulator:</strong> Tekan MODE ➔ EQN ➔ Degree 2."
                    ],
                    examTip: "⚡ <strong>Tip Kertas 2 Bahagian A:</strong> Tulis jalan kerja pemfaktoran dengan lengkap <code>(x ± p)(x ± q) = 0</code> sebelum menyatakan nilai akhir x untuk mendapat markah penuh!"
                  }
                ]
              },
              video: {
                title: "Teknik Skor A SPM: Selesaikan Persamaan Kuadratik Tanpa Silap",
                duration: "10:15 minit",
                presenter: "Cikgu Alex (Guru Cemerlang Matematik)",
                embedUrl: "https://www.youtube.com/embed/f9ONXd_-anM",
                highlights: [
                  "0:45 - Mengenal pasti graf Senyum vs Masam",
                  "3:20 - Tip Pemfaktoran Pantas Silang / Kalkulator",
                  "6:40 - Soalan KBAT Penyelesaian Masalah Geometri"
                ]
              },
              worksheet: {
                title: "Koleksi Soalan Percubaan SPM: Bab 1 Kuadratik",
                pages: 3,
                itemsCount: 8,
                fileType: "Lembaran Kerja PDF",
                downloadUrl: "#",
                previewItems: [
                  "Menentukan sama ada ungkapan ialah kuadratik atau bukan",
                  "Mencari titik maksimum dan paksi simetri",
                  "Soalan masalah berayat: Luas padang berbentuk segiempat tepat"
                ]
              },
              quiz: {
                id: "quiz-f4-mt-c1",
                title: "Ujian Formatif: Kuadratik SPM 1449",
                timeLimitMinutes: 10,
                passingScore: 60,
                xpPoints: 140,
                questions: [
                  {
                    id: 1,
                    question: "Antara ungkapan berikut, yang manakah merupakan ungkapan kuadratik dalam satu pemboleh ubah?",
                    options: [
                      "3x² + 2y - 5",
                      "4x³ - x + 1",
                      "2x² - 7x + 3",
                      "5/x² + 4"
                    ],
                    correctIndex: 2,
                    explanation: "2x² - 7x + 3 mempunyai hanya satu pemboleh ubah (x) dan kuasa tertinggi pemboleh ubah ialah 2."
                  },
                  {
                    id: 2,
                    question: "Jika fungsi f(x) = -2x² + 8x - 3, apakah bentuk graf dan jenis titik yang terhasil?",
                    options: [
                      "Graf bentuk ∪ (senyum) dan mempunyai titik minimum",
                      "Graf bentuk ∩ (masam) dan mempunyai titik maksimum",
                      "Garis lurus cerun positif",
                      "Graf bulatan dengan jejari 3"
                    ],
                    correctIndex: 1,
                    explanation: "Kerana nilai a = -2 (negatif), bentuk graf adalah melengkung ke bawah (masam / ∩) dan mempunyai titik MAKSIMUM."
                  },
                  {
                    id: 3,
                    question: "Selesaikan persamaan kuadratik x² - 9 = 0. Apakah nilai-nilai bagi x?",
                    options: [
                      "x = 3 sahaja",
                      "x = 9 dan x = -9",
                      "x = 3 dan x = -3",
                      "x = 0"
                    ],
                    correctIndex: 2,
                    explanation: "x² - 9 = 0 ➔ (x - 3)(x + 3) = 0. Maka x = 3 atau x = -3."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "f4-fiz",
          name: "Fizik (DLP/BM)",
          code: "4531",
          icon: "⚡",
          color: "from-purple-600 to-indigo-800",
          theme: "purple",
          hasDlp: true,
          chaptersCount: 7,
          description: "Pengukuran, daya dan gerakan, kegravitian, haba, gelombang dan cahaya.",
          chapters: [
            {
              id: "f4-fiz-c2",
              number: "Bab 2",
              title: "Daya dan Gerakan I (Linear Motion)",
              summary: "Gerakan linear, graf halaju-masa, inersia, momentum dan 4 persamaan kinematik linear.",
              xpReward: 190,
              badgeReward: "Pakar Fizik Kuantum",
              notes: {
                title: "Bab 2: Daya dan Gerakan I (KSSM / DLP Physics)",
                readTime: "9 minit",
                dlpAvailable: true,
                sections: [
                  {
                    heading: "1. Konsep Asas Gerakan Linear (Linear Motion)",
                    content: "Fizik gerakan melibatkan kuantiti skalar (magnitud sahaja) dan kuantiti vektor (magnitud + arah).",
                    bulletPoints: [
                      "<strong>Jarak (Distance) vs Sesaran (Displacement):</strong> Jarak ialah jumlah panjang lintasan (skalar), manakala sesaran ialah jarak terpendek antara titik awal dan akhir pada arah tertentu (vektor).",
                      "<strong>Laju (Speed) vs Halaju (Velocity):</strong> Laju = Jarak / Masa. Halaju = Sesaran / Masa (ms⁻¹).",
                      "<strong>Pecutan (Acceleration, a):</strong> Kadar perubahan halaju: <code>a = (v - u) / t</code> (ms⁻²)."
                    ],
                    mnemonic: "💡 <strong>4 Formula Kinematik Wajib SPM:</strong><br>1. <code>v = u + at</code><br>2. <code>s = ut + ½at²</code><br>3. <code>v² = u² + 2as</code><br>4. <code>s = ½(u + v)t</code>"
                  },
                  {
                    heading: "2. Hukum Gerakan Newton & Inersia",
                    content: "Inersia ialah kecenderungan suatu objek untuk mengekalkan keadaan asalnya sama ada pegun atau bergerak dalam garis lurus.",
                    bulletPoints: [
                      "<strong>Hukum Gerakan Newton Pertama:</strong> Objek akan kekal pegun atau bergerak dengan halaju seragam kecuali jika dikenakan daya luar.",
                      "<strong>Hubungan Jisim dan Inersia:</strong> Semakin besar jisim sesuatu objek, semakin besar inersianya (contoh: lori sarat muatan sukar berhenti berbanding kereta kancil).",
                      "<strong>Momentum (p):</strong> Hasil darab jisim dan halaju: <code>p = m × v</code> (kg ms⁻¹)."
                    ],
                    examTip: "🎯 <strong>Tip Kertas 2 Bahagian B:</strong> Soalan reka bentuk kenderaan selamat sering menyoal fungsi zon remuk (crush zone) dan beg udara untuk memanjangkan masa hentaman seterusnya mengurangkan daya impuls!"
                  }
                ]
              },
              video: {
                title: "SPM Physics Masterclass: Linear Motion & Newton's Law",
                duration: "14:10 minit",
                presenter: "Sir Brian (Guru Fizik Cemerlang)",
                embedUrl: "https://www.youtube.com/embed/f9ONXd_-anM",
                highlights: [
                  "1:20 - Scalar vs Vector Quantities",
                  "5:00 - Ticker Tape & Velocity-Time Graphs",
                  "8:30 - Solving the 4 Kinematics Equations",
                  "12:00 - SPM Calculation Pitfalls"
                ]
              },
              worksheet: {
                title: "Modul Soalan Klon SPM Fizik Kertas 2: Gerakan Linear",
                pages: 3,
                itemsCount: 10,
                fileType: "Lembaran Latihan PDF",
                downloadUrl: "#",
                previewItems: [
                  "Mentafsir graf halaju-masa dan mengira luas di bawah graf (sesaran)",
                  "Menyelesaikan masalah kenderaan membrek menggunakan formula kuadratik kinematik",
                  "Menjelaskan prinsip keabadian momentum dalam perlanggaran kenyal"
                ]
              },
              quiz: {
                id: "quiz-f4-fiz-c2",
                title: "Simulasi SPM Fizik 4531: Gerakan Linear",
                timeLimitMinutes: 12,
                passingScore: 60,
                xpPoints: 160,
                questions: [
                  {
                    id: 1,
                    question: "Sebuah kereta memecut secara seragam daripada pegun (u = 0 ms⁻¹) sehingga mencapai halaju 20 ms⁻¹ dalam masa 5 saat. Berapakah pecutan kereta tersebut?",
                    options: [
                      "2 ms⁻²",
                      "4 ms⁻²",
                      "10 ms⁻²",
                      "100 ms⁻²"
                    ],
                    correctIndex: 1,
                    explanation: "Gunakan formula a = (v - u) / t. Maka a = (20 - 0) / 5 = 4 ms⁻²."
                  },
                  {
                    id: 2,
                    question: "Kecerunan bagi graf halaju melawan masa (v-t) mewakili kuantiti fizik apakah?",
                    options: [
                      "Sesaran objek",
                      "Pecutan objek",
                      "Jumlah momentum",
                      "Daya impuls"
                    ],
                    correctIndex: 1,
                    explanation: "Kecerunan graf v-t ialah perubahan halaju dibahagikan masa (dv/dt), iaitu pecutan objek."
                  },
                  {
                    id: 3,
                    question: "Antara ciri berikut, yang manakah menentukan magnitud inersia bagi suatu objek?",
                    options: [
                      "Ketumpatan objek",
                      "Jisim objek",
                      "Isipadu objek",
                      "Bentuk geometri objek"
                    ],
                    correctIndex: 1,
                    explanation: "Inersia bergantung sepenuhnya kepada jisim objek. Semakin besar jisim, semakin besar rintangan objek terhadap perubahan keadaan gerakannya."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "f4-kim",
          name: "Kimia (DLP/BM)",
          code: "4541",
          icon: "🧪",
          color: "from-teal-600 to-emerald-800",
          theme: "teal",
          hasDlp: true,
          chaptersCount: 8,
          description: "Jirim dan struktur atom, konsep mol, jadual berkala, dan ikatan kimia.",
          chapters: [
            {
              id: "f4-kim-c2",
              number: "Bab 2",
              title: "Jirim dan Struktur Atom",
              summary: "Teori zarah jirim, takat lebur/beku, perkembangan model atom, nombor proton & nukleon, serta isotop.",
              xpReward: 180,
              badgeReward: "Ahli Kimia Pintar",
              notes: {
                title: "Bab 2: Jirim dan Struktur Atom Lengkap (SPM 4541)",
                readTime: "8 minit",
                dlpAvailable: true,
                sections: [
                  {
                    heading: "1. Teori Kinetik Jirim & Keluk Pemanasan",
                    content: "Jirim terdiri daripada zarah-zarah halus dan diskret yang sentiasa bergerak secara rawak.",
                    bulletPoints: [
                      "<strong>3 Keadaan Jirim:</strong> Pepejal (zarah tersusun padat bergetar pada kedudukan tetap), Cecair (tersusun longgar, menggelongsor), Gas (berjauhan, bergerak rawak laju).",
                      "<strong>Suhu Kekal Semasa Peleburan:</strong> Tenaga haba diserap digunakan untuk mengatasi daya tarikan antara zarah, bukan untuk menaikkan suhu.",
                      "<strong>Suhu Kekal Semasa Pembekuan:</strong> Tenaga haba yang dibebaskan ke persekitaran diimbangi oleh tenaga haba yang terbebas apabila ikatan terbentuk."
                    ],
                    mnemonic: "💡 <strong>Ingat Tokoh Model Atom (D-T-R-B-C):</strong><br><u>D</u>alton (Bebola pejal) ➔ <u>T</u>homson (Elektron/Puding plum) ➔ <u>R</u>utherford (Nukleus positif) ➔ <u>B</u>ohr (Petala elektron) ➔ <u>C</u>hadwick (Neutron)!"
                  },
                  {
                    heading: "2. Struktur Atom & Isotop",
                    content: "Atom terdiri daripada 3 zarah subatom: Proton (positif), Neutron (neutral), dan Elektron (negatif).",
                    bulletPoints: [
                      "<strong>Nombor Proton (Z):</strong> Bilangan proton dalam nukleus suatu atom.",
                      "<strong>Nombor Nukleon (A):</strong> Jumlah bilangan proton dan neutron dalam nukleus: <code>A = Bilangan Proton + Bilangan Neutron</code>.",
                      "<strong>Definisi Isotop SPM:</strong> Atom-atom bagi unsur yang sama yang mempunyai bilangan proton yang sama tetapi bilangan neutron yang berbeza.",
                      "<strong>Kegunaan Isotop:</strong> Kobalt-60 (radioterapi kanser), Karbon-14 (menganggar usia fosil), Iodin-131 (rawatan kelenjar tiroid)."
                    ],
                    examTip: "⚡ <strong>Soalan Lazim Kertas 2:</strong> Pastikan anda hafal takrifan isotop perkataan demi perkataan! Jangan lupa sebut 'atom-atom bagi unsur yang sama'."
                  }
                ]
              },
              video: {
                title: "Kimia SPM: Struktur Atom & Formula Mudah Kuasai Keluk Pemanasan",
                duration: "11:30 minit",
                presenter: "Cikgu Suhana (Pakar Kimia SPM)",
                embedUrl: "https://www.youtube.com/embed/f9ONXd_-anM",
                highlights: [
                  "1:00 - Keluk Pemanasan & Penyejukan Naftalena",
                  "4:20 - Kronologi Model Atom dari Dalton ke Chadwick",
                  "7:50 - Mengira Zarah Subatom & Susunan Elektron",
                  "9:45 - 4 Kegunaan Penting Isotop dalam Industri"
                ]
              },
              worksheet: {
                title: "Modul Soalan Struktur Kimia Bab 2: Struktur Atom",
                pages: 2,
                itemsCount: 8,
                fileType: "Lembaran Kerja PDF",
                downloadUrl: "#",
                previewItems: [
                  "Melukis susunan elektron atom natrium dan ion natrium",
                  "Menentukan bilangan neutron bagi isotop klorin-35 dan klorin-37",
                  "Menerangkan mengapa suhu tidak berubah semasa peleburan"
                ]
              },
              quiz: {
                id: "quiz-f4-kim-c2",
                title: "Kuiz Formatif: Kimia SPM Bab 2",
                timeLimitMinutes: 10,
                passingScore: 60,
                xpPoints: 150,
                questions: [
                  {
                    id: 1,
                    question: "Tokoh saintis manakah yang menemukan zarah neutral iaitu neutron dalam nukleus atom?",
                    options: [
                      "John Dalton",
                      "J.J. Thomson",
                      "Ernest Rutherford",
                      "James Chadwick"
                    ],
                    correctIndex: 3,
                    explanation: "James Chadwick menemukan neutron pada tahun 1932, melengkapkan model atom nukleus moden."
                  },
                  {
                    id: 2,
                    question: "Suatu atom unsur X mempunyai 11 proton dan 12 neutron. Apakah nombor nukleon bagi unsur X?",
                    options: [
                      "11",
                      "12",
                      "23",
                      "1"
                    ],
                    correctIndex: 2,
                    explanation: "Nombor nukleon ialah jumlah bilangan proton dan neutron: 11 + 12 = 23 (iaitu Natrium, Na)."
                  },
                  {
                    id: 3,
                    question: "Isotop Kobalt-60 lazimnya digunakan dalam bidang perubatan untuk...",
                    options: [
                      "Merawat kanser melalui radioterapi",
                      "Mengesan kebocoran paip bawah tanah",
                      "Menjana tenaga elektrik dalam reaktor",
                      "Menganggar usia artifak purba"
                    ],
                    correctIndex: 0,
                    explanation: "Kobalt-60 memancarkan sinar gama yang digunakan untuk memusnahkan sel kanser dalam radioterapi."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "f4-bm",
          name: "Bahasa Melayu (SPM)",
          code: "1103",
          icon: "📖",
          color: "from-red-600 to-pink-700",
          theme: "red",
          hasDlp: false,
          chaptersCount: 6,
          description: "Karangan respon terbuka, morfologi, sintaksis, peribahasa, dan rumusan format baharu.",
          chapters: [
            {
              id: "f4-bm-c1",
              number: "Bahagian A & B",
              title: "Sistem Bahasa & Teknik Karangan Cemerlang",
              summary: "Menguasai golongan kata (morfologi), ayat aktif/pasif (sintaksis), peribahasa dan formula karangan IMBaKUP.",
              xpReward: 170,
              badgeReward: "Pujangga Melayu",
              notes: {
                title: "Sistem & Aplikasi Bahasa serta Penulisan Esei SPM",
                readTime: "8 minit",
                dlpAvailable: false,
                sections: [
                  {
                    heading: "1. Formula Perenggan Isi Karangan Cemerlang (IMBaKUP)",
                    content: "Untuk memperoleh markah Cemerlang (Gred A/A+) dalam Kertas 1 SPM, setiap perenggan isi mestilah matang dan berkembang.",
                    bulletPoints: [
                      "<strong>I (Isi Utama):</strong> Nyatakan idea pokok dengan jelas menggunakan penanda wacana.",
                      "<strong>M (Mengapa):</strong> Huraikan punca atau sebab mengapa isi tersebut penting.",
                      "<strong>Ba (Bagaimana):</strong> Berikan contoh konkrit, program atau statistik semasa.",
                      "<strong>K (Kesan):</strong> Jelaskan impak positif atau negatif kepada individu, masyarakat atau negara.",
                      "<strong>U (Ungkapan Menarik):</strong> Selitkan peribahasa, cogan kata atau kata-kata tokoh.",
                      "<strong>P (Penegas):</strong> Simpulkan kembali isi utama dalam ayat penutup perenggan."
                    ],
                    mnemonic: "💡 <strong>Formula Karangan A+:</strong> <u>I</u>-<u>M</u>-<u>Ba</u>-<u>K</u>-<u>U</u>-<u>P</u> (Isu, Mengapa, Bagaimana, Kesan, Ungkapan menarik, Penegas)!"
                  },
                  {
                    heading: "2. Sistem Bahasa Kertas 2: Morfologi & Sintaksis",
                    content: "Kertas 2 menguji kefahaman tatabahasa secara tepat tanpa menokok tambah imbuhan sesuka hati.",
                    bulletPoints: [
                      "<strong>Golongan Kata:</strong> Kata Nama, Kata Kerja, Kata Adjektif, Kata Tugas.",
                      "<strong>Pola Ayat Dasar Bahasa Melayu:</strong><br>• FN + FN (Ali ialah guru)<br>• FN + FK (Ali sedang membaca buku)<br>• FN + FA (Rumah Ali sangat besar)<br>• FN + FS (Bapa Ali ke pejabat)",
                      "<strong>Penyuntingan Ejaan:</strong> Teliti kesalahan ejaan seperti <em>merbahaya ➔ berbahaya</em>, <em>tengahari ➔ tengah hari</em>, <em>atlit ➔ atlet</em>."
                    ],
                    examTip: "🎯 <strong>Tip Kertas 2 SPM:</strong> Semasa membina ayat dalam soalan Morfologi, pastikan ayat yang dibina jelas maksudnya dan mengandungi subjek serta predikat yang lengkap!"
                  }
                ]
              },
              video: {
                title: "Teknik Menulis Karangan SPM Skor A+ Bersama Guru Pakar",
                duration: "13:00 minit",
                presenter: "Cikgu Haslina (Guru Cemerlang BM)",
                embedUrl: "https://www.youtube.com/embed/f9ONXd_-anM",
                highlights: [
                  "1:00 - Struktur Perenggan Pendahuluan Format Terkini",
                  "4:30 - Aplikasi Formula IMBaKUP dalam Perenggan Isi",
                  "8:15 - Koleksi Peribahasa Berimpak Tinggi untuk SPM",
                  "11:00 - Analisis Kesalahan Lazim Morfologi Kertas 2"
                ]
              },
              worksheet: {
                title: "Modul Gerempur Kertas 2 SPM: Morfologi & Sintaksis",
                pages: 2,
                itemsCount: 6,
                fileType: "Lembaran Latihan PDF",
                downloadUrl: "#",
                previewItems: [
                  "Membina ayat bagi pasangan kata ganda",
                  "Menukarkan ayat aktif kepada ayat pasif",
                  "Mengenal pasti pola ayat dasar bagi 4 ayat contoh"
                ]
              },
              quiz: {
                id: "quiz-f4-bm-c1",
                title: "Ujian Formatif: Sistem Bahasa SPM 1103",
                timeLimitMinutes: 10,
                passingScore: 60,
                xpPoints: 140,
                questions: [
                  {
                    id: 1,
                    question: "Antara berikut, pasangan ejaan manakah yang semuanya dieja dengan betul mengikut Dewan Bahasa dan Pustaka (DBP)?",
                    options: [
                      "Tengahari, merbahaya, ko-kurikulum",
                      "Tengah hari, berbahaya, kokurikulum",
                      "Tengah-hari, bahaya, ko kurikulum",
                      "Tengahari, berbaaya, kokurikulum"
                    ],
                    correctIndex: 1,
                    explanation: "'Tengah hari' dieja dua patah perkataan, imbuhan awalan bagi bahaya ialah 'berbahaya' (bukan merbahaya), dan 'kokurikulum' dieja serangkai."
                  },
                  {
                    id: 2,
                    question: "Ayat 'Pemandangan di puncak bukit itu sungguh indah' tergolong dalam pola ayat dasar yang manakah?",
                    options: [
                      "Frasa Nama + Frasa Nama (FN + FN)",
                      "Frasa Nama + Frasa Kerja (FN + FK)",
                      "Frasa Nama + Frasa Adjektif (FN + FA)",
                      "Frasa Nama + Frasa Sendi Nama (FN + FS)"
                    ],
                    correctIndex: 2,
                    explanation: "'Pemandangan di puncak bukit itu' ialah Frasa Nama (subjek), manakala 'sungguh indah' ialah Frasa Adjektif (predikat). Maka polanya ialah FN + FA."
                  },
                  {
                    id: 3,
                    question: "Peribahasa yang manakah paling tepat digunakan untuk menggambarkan sikap generasi muda yang mudah melupakan asal usul dan jasa ibu bapa?",
                    options: [
                      "Bagai aur dengan tebing",
                      "Kacang lupakan kulit",
                      "Alang-alang menyeluk pekasam",
                      "Hujan emas di negeri orang"
                    ],
                    correctIndex: 1,
                    explanation: "'Kacang lupakan kulit' bermaksud orang yang tidak mengenang budi atau melupakan jasa mereka yang telah membantunya."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "f4-bi",
          name: "Bahasa Inggeris (SPM/CEFR)",
          code: "1119",
          icon: "🌐",
          color: "from-blue-500 to-sky-700",
          theme: "sky",
          hasDlp: false,
          chaptersCount: 8,
          description: "Reading & Use of English, Writing essays (Review, Article, Story), Speaking, Listening.",
          chapters: []
        }
      ],
      "f5": [
        {
          id: "f5-sej",
          name: "Sejarah (SPM)",
          code: "1249",
          icon: "👑",
          color: "from-amber-600 to-yellow-700",
          theme: "amber",
          hasDlp: false,
          chaptersCount: 10,
          description: "Kedaulatan negara, perlembagaan, raja berpelembagaan, dan pembinaan Malaysia.",
          chapters: [
            {
              id: "f5-sej-c1",
              number: "Bab 1",
              title: "Kedaulatan Negara",
              summary: "Konsep kedaulatan tradisional, moden, undang-undang, dan antarabangsa serta ciri negara berdaulat.",
              xpReward: 180,
              badgeReward: "Benteng Kedaulatan",
              notes: {
                title: "Bab 1: Kedaulatan Negara (Sejarah Tingkatan 5)",
                readTime: "7 minit",
                dlpAvailable: false,
                sections: [
                  {
                    heading: "1. Konsep Kedaulatan Mengikut Takrifan Bahasa & Tokoh",
                    content: "Kedaulatan ditakrifkan sebagai kekuasaan tertinggi dan kewibawaan sesebuah negara bebas yang merdeka.",
                    bulletPoints: [
                      "<strong>Bahasa Melayu:</strong> Berasal daripada perkataan 'Daulat' yang bermaksud kekuasaan dan hak mutlak.",
                      "<strong>Bahasa Arab:</strong> Berasal daripada perkataan 'Daulah' yang bermaksud kuasa pemerintahan.",
                      "<strong>Bahasa Yunani:</strong> Berasal daripada 'Supernuus' yang bermaksud agung atau tertinggi.",
                      "<strong>Jean Bodin:</strong> Kedaulatan ialah kuasa tertinggi dalam sesebuah negara yang bersifat kekal dan tidak terhad."
                    ],
                    mnemonic: "💡 <strong>Formula 4 Jenis Kedaulatan:</strong> <u>T</u>radisional (Raja), <u>M</u>oden (Rakyat & Demokrasi), <u>U</u>ndang-undang (Keluhuran undang-undang), <u>A</u>ntarabangsa (Diiktiraf PBB)."
                  },
                  {
                    heading: "2. Ciri-ciri Negara yang Berdaulat",
                    content: "Malaysia sebagai negara yang berdaulat mempunyai 4 ciri utama:",
                    bulletPoints: [
                      "<strong>Mempunyai Pemerintah:</strong> Menjamin kestabilan politik, diterajui Yang di-Pertuan Agong dan Perdana Menteri.",
                      "<strong>Mempunyai Sempadan:</strong> Garis pemisah tanah air, laut dan udara yang diiktiraf di peringkat antarabangsa.",
                      "<strong>Mempunyai Perundangan:</strong> Berpandukan Perlembagaan Persekutuan sebagai undang-undang tertinggi.",
                      "<strong>Mempunyai Rakyat:</strong> Terdiri daripada pelbagai kaum yang disatukan melalui Bahasa Kebangsaan dan Rukun Negara."
                    ],
                    examTip: "🎯 <strong>Fokus SPM Kertas 2:</strong> Jelaskan langkah-langkah mempertahankan kedaulatan negara (KBAT: Mewujudkan kestabilan politik, memupuk perpaduan kaum, dan memperkukuh pertahanan negara)."
                  }
                ]
              },
              video: {
                title: "Tingkatan 5 SPM: Bab 1 Kedaulatan Negara Kupasan Pantas",
                duration: "9:50 minit",
                presenter: "Cikgu Roslan (Pakar Sejarah SPM)",
                embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                highlights: [
                  "0:30 - Maksud Kedaulatan Bahasa & Tokoh",
                  "3:10 - 4 Jenis Kedaulatan (Formula TMUA)",
                  "5:45 - 4 Ciri Negara Berdaulat",
                  "8:00 - Soalan KBAT SPM 8 Markah"
                ]
              },
              worksheet: {
                title: "Modul Ulang Kaji Kedaulatan Negara Bab 1",
                pages: 2,
                itemsCount: 10,
                fileType: "Nota Poket PDF",
                downloadUrl: "#",
                previewItems: [
                  "Jadual perbandingan jenis kedaulatan",
                  "Rajah 4 Ciri Negara Berdaulat Malaysia",
                  "Latihan esei respons terbuka"
                ]
              },
              quiz: {
                id: "quiz-f5-sej-c1",
                title: "Simulasi SPM Kertas 1: Kedaulatan Negara",
                timeLimitMinutes: 10,
                passingScore: 60,
                xpPoints: 150,
                questions: [
                  {
                    id: 1,
                    question: "Perkataan kedaulatan dalam Bahasa Arab diterbitkan daripada perkataan 'Daulah' yang membawa maksud...",
                    options: [
                      "Kuasa tertinggi sesebuah kerajaan atau negara",
                      "Kedaulatan raja mutlak",
                      "Sistem perlembagaan bertulis",
                      "Perpaduan rakyat berbilang bangsa"
                    ],
                    correctIndex: 0,
                    explanation: "Dalam Bahasa Arab, perkataan 'Daulah' merujuk kepada kuasa pemerintahan sesebuah kerajaan atau negara."
                  },
                  {
                    id: 2,
                    question: "Kedaulatan tradisional sesebuah negeri di Tanah Melayu berpusat kepada kekuasaan dan kewibawaan...",
                    options: [
                      "Raja atau Sultan",
                      "Menteri Besar",
                      "Dewan Undangan Negeri",
                      "Majlis Raja-Raja"
                    ],
                    correctIndex: 0,
                    explanation: "Kedaulatan tradisional berpusat kepada kedaulatan Raja-raja Melayu di mana kekuasaan dan kewibawaan raja diperkukuh oleh taat setia rakyat."
                  },
                  {
                    id: 3,
                    question: "Apakah dokumen perundangan tertinggi yang menjadi asas kedaulatan dan pentadbiran di Malaysia?",
                    options: [
                      "Akta Parlimen",
                      "Perlembagaan Persekutuan",
                      "Deklarasi Kemerdekaan 1957",
                      "Rukun Negara"
                    ],
                    correctIndex: 1,
                    explanation: "Perlembagaan Persekutuan ialah undang-undang tertinggi persekutuan di Malaysia yang mengatasi mana-mana undang-undang lain."
                  }
                ]
              }
            }
          ]
        },
        {
          id: "f5-mt",
          name: "Matematik (SPM)",
          code: "1449",
          icon: "📊",
          color: "from-blue-600 to-indigo-700",
          theme: "indigo",
          hasDlp: true,
          chaptersCount: 8,
          description: "Ubah langsung & songsang, matriks, matematik pengguna, dan pemodelan matematik.",
          chapters: []
        }
      ]
    }
  }
};
