const SYLLABUS_DATA = {
  "primary": {
    "name": "Sekolah Rendah",
    "curriculum": "KSSR Semakan",
    "grades": [
      {
        "id": "t1",
        "name": "Tahun 1",
        "badge": "Tahap 1"
      },
      {
        "id": "t2",
        "name": "Tahun 2",
        "badge": "Tahap 1"
      },
      {
        "id": "t3",
        "name": "Tahun 3",
        "badge": "Tahap 1"
      },
      {
        "id": "t4",
        "name": "Tahun 4",
        "badge": "Tahap 2 (UASA)",
        "isFeatured": true
      },
      {
        "id": "t5",
        "name": "Tahun 5",
        "badge": "Tahap 2 (UASA)",
        "isFeatured": true
      },
      {
        "id": "t6",
        "name": "Tahun 6",
        "badge": "Tahap 2 (UASA)",
        "isFeatured": true
      }
    ],
    "subjects": {
      "t1": [
        {
          "id": "t1-bm",
          "name": "Bahasa Melayu",
          "code": "BM-T1",
          "icon": "📚",
          "color": "from-amber-500 to-orange-600",
          "theme": "amber",
          "hasDlp": false,
          "chaptersCount": 3,
          "description": "Membaca suku kata, mengenal huruf vokal dan konsonan, tatabahasa asas dan perbualan harian.",
          "chapters": [
            {
              "id": "t1-bm-c1",
              "number": "Unit 1",
              "title": "Keluarga Penyayang (Kata Nama Am)",
              "summary": "Mengenal kata nama am bagi manusia, haiwan, benda dan tempat di sekeliling rumah.",
              "xpReward": 100,
              "badgeReward": "Bintang Cilik BM",
              "notes": {
                "title": "Unit 1: Mari Kenali Kata Nama Am",
                "readTime": "4 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Maksud Kata Nama Am",
                    "content": "Kata Nama Am ialah perkataan yang digunakan untuk menyebut nama <strong>manusia</strong>, <strong>haiwan</strong>, <strong>benda</strong>, dan <strong>tempat</strong> secara umum. Dieja dengan huruf kecil kecuali pada permulaan ayat.",
                    "bulletPoints": [
                      "<strong>Manusia:</strong> ibu, bapa, adik, guru, polis",
                      "<strong>Haiwan:</strong> kucing, burung, arnab, ikan",
                      "<strong>Benda:</strong> buku, pensel, meja, baju",
                      "<strong>Tempat:</strong> rumah, sekolah, taman, padang"
                    ],
                    "mnemonic": "💡 <strong>Formula Ingat:</strong> M-H-B-T (Manusia, Haiwan, Benda, Tempat)!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t1-bm-c1",
                "title": "Kuiz Padanan Kata Nama Am",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 80,
                "questions": [
                  {
                    "id": 1,
                    "question": "Antara berikut, perkataan manakah merupakan Kata Nama Am bagi haiwan?",
                    "options": [
                      "kerusi",
                      "kucing",
                      "sekolah",
                      "cikgu"
                    ],
                    "correctIndex": 1,
                    "explanation": "Kucing ialah kata nama am yang merujuk kepada haiwan peliharaan."
                  },
                  {
                    "id": 2,
                    "question": "Pilih perkataan yang tergolong dalam Kata Nama Am bagi tempat:",
                    "options": [
                      "padang",
                      "kasut",
                      "adik",
                      "buku"
                    ],
                    "correctIndex": 0,
                    "explanation": "Padang merujuk kepada tempat lapang untuk bersukan dan beriadah."
                  }
                ]
              }
            },
            {
              "id": "t1-bm-c2",
              "number": "Unit 2",
              "title": "Masyarakat Muhibah",
              "summary": "Bertegur sapa dengan jiran tetangga dan rakan pelbagai kaum.",
              "xpReward": 100,
              "chaptersCount": 6,
              "notes": null,
              "quiz": null
            },
            {
              "id": "t1-bm-c3",
              "number": "Unit 3",
              "title": "Pentingkan Kebersihan dan Kesihatan",
              "summary": "Amalan membasuh tangan dan menggosok gigi setiap hari.",
              "xpReward": 100,
              "chaptersCount": 6,
              "notes": null,
              "quiz": null
            }
          ]
        },
        {
          "id": "t1-bi",
          "name": "English",
          "code": "BI-T1",
          "icon": "🌍",
          "color": "from-sky-500 to-cyan-600",
          "theme": "sky",
          "hasDlp": false,
          "chaptersCount": 3,
          "description": "Phonics, alphabet sounds, greetings, colours, classroom objects, and simple self-introductions.",
          "chapters": [
            {
              "id": "t1-bi-c2",
              "number": "Unit 2",
              "title": "At School (Classroom Objects)",
              "summary": "Learn the names of stationery and objects in the classroom: pen, pencil, rubber, ruler, book, desk.",
              "xpReward": 100,
              "badgeReward": "Junior Scholar",
              "notes": {
                "title": "Unit 2: My Classroom Stationery",
                "readTime": "4 minutes",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Things in My Pencil Case",
                    "content": "Let us learn the things we use in school every day!",
                    "bulletPoints": [
                      "<strong>Pen:</strong> used for writing in ink.",
                      "<strong>Pencil:</strong> used for drawing and writing.",
                      "<strong>Ruler:</strong> used for drawing straight lines.",
                      "<strong>Rubber / Eraser:</strong> used for cleaning mistakes.",
                      "<strong>Desk & Chair:</strong> where we sit and study."
                    ],
                    "mnemonic": "💡 <strong>Tip:</strong> We say 'a pen', 'a pencil', 'a ruler' but 'an eraser' because it starts with a vowel sound (e)!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t1-bi-c2",
                "title": "Quick Quiz: Classroom Objects",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 80,
                "questions": [
                  {
                    "id": 1,
                    "question": "What object do you use to draw straight lines?",
                    "options": [
                      "Rubber",
                      "Ruler",
                      "Bag",
                      "Crayon"
                    ],
                    "correctIndex": 1,
                    "explanation": "A ruler has straight edges and measurements used for drawing straight lines."
                  }
                ]
              }
            },
            {
              "id": "t1-bi-c1",
              "number": "Unit 1",
              "title": "Friends & Greetings",
              "summary": "Saying Hello, Good morning, and What's your name?",
              "xpReward": 100,
              "notes": null,
              "quiz": null
            },
            {
              "id": "t1-bi-c3",
              "number": "Unit 3",
              "title": "Let's Play (Toys & Colours)",
              "summary": "Ball, kite, doll, monster, bike, train, car.",
              "xpReward": 100,
              "notes": null,
              "quiz": null
            }
          ]
        },
        {
          "id": "t1-mt",
          "name": "Matematik (DLP)",
          "code": "MT-T1",
          "icon": "📐",
          "color": "from-blue-500 to-indigo-600",
          "theme": "blue",
          "hasDlp": true,
          "chaptersCount": 4,
          "description": "Nombor bulat hingga 100, tambah dan tolak asas, pecahan asas, wang hingga RM10, dan bentuk geometri.",
          "chapters": [
            {
              "id": "t1-mt-c1",
              "number": "Unit 1",
              "title": "Nombor Hingga 100 & Nilai Tempat",
              "summary": "Membilang, membanding, menulis nombor dalam angka & perkataan, serta memahami nilai tempat Sa dan Puluh.",
              "xpReward": 110,
              "badgeReward": "Kalkulator Cilik",
              "notes": {
                "title": "Unit 1: Nombor Hingga 100 & Nilai Tempat (Sa dan Puluh)",
                "readTime": "5 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Nilai Tempat: Puluh dan Sa",
                    "content": "Setiap nombor dua digit terdiri daripada rumah <strong>Puluh</strong> dan rumah <strong>Sa</strong>.",
                    "bulletPoints": [
                      "Contoh nombor: <strong>47</strong>",
                      "Digit 4 berada di rumah <strong>Puluh</strong>, nilainya <strong>40</strong>.",
                      "Digit 7 berada di rumah <strong>Sa</strong>, nilainya <strong>7</strong>."
                    ],
                    "mnemonic": "💡 <strong>Tip Ingat:</strong> Rumah Puluh di sebelah kiri, rumah Sa di sebelah kanan!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t1-mt-c1",
                "title": "Kuiz Nilai Tempat Sa & Puluh",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 80,
                "questions": [
                  {
                    "id": 1,
                    "question": "Dalam nombor 58, apakah nilai tempat bagi digit 5?",
                    "options": [
                      "Sa",
                      "Puluh",
                      "Ratus",
                      "Ribu"
                    ],
                    "correctIndex": 1,
                    "explanation": "Digit 5 berada di sebelah kiri nombor 2 digit, maka nilai tempatnya ialah Puluh (50)."
                  }
                ]
              }
            },
            {
              "id": "t1-mt-c2",
              "number": "Unit 2",
              "title": "Tambah dan Tolak Asas",
              "summary": "Operasi tambah dalam lingkungan 100 dan tolak mudah.",
              "xpReward": 100,
              "notes": null,
              "quiz": null
            },
            {
              "id": "t1-mt-c3",
              "number": "Unit 3",
              "title": "Pecahan Asas (Perdua & Perempat)",
              "summary": "Mengenal konsep satu perdua (separuh) dan satu perempat (suku).",
              "xpReward": 100,
              "notes": null,
              "quiz": null
            },
            {
              "id": "t1-mt-c4",
              "number": "Unit 4",
              "title": "Wang Hingga RM10",
              "summary": "Mengenal duit syiling 5 sen, 10 sen, 20 sen, 50 sen dan wang kertas RM1, RM5.",
              "xpReward": 100,
              "notes": null,
              "quiz": null
            }
          ]
        },
        {
          "id": "t1-sn",
          "name": "Sains (DLP)",
          "code": "SN-T1",
          "icon": "🔬",
          "color": "from-emerald-500 to-teal-600",
          "theme": "emerald",
          "hasDlp": true,
          "chaptersCount": 3,
          "description": "5 deria manusia, bahagian tubuh haiwan, bahagian tumbuhan, tarikan magnet, dan asas binaan.",
          "chapters": [
            {
              "id": "t1-sn-c4",
              "number": "Unit 4",
              "title": "Deria Manusia (5 Organ Deria)",
              "summary": "Mengenal organ deria penglihatan (mata), pendengaran (telinga), bau (hidung), rasa (lidah), dan sentuhan (kulit).",
              "xpReward": 120,
              "badgeReward": "Peneroka Sains Cilik",
              "notes": {
                "title": "Unit 4: 5 Deria Hebat Manusia",
                "readTime": "5 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "5 Organ Deria dan Fungsinya",
                    "content": "Manusia menggunakan organ deria untuk mengesan perubahan di sekeliling kita.",
                    "bulletPoints": [
                      "👀 <strong>Mata:</strong> Deria Penglihatan (melihat warna, saiz, dan bentuk)",
                      "👂 <strong>Telinga:</strong> Deria Pendengaran (mendengar bunyi lembut dan kuat)",
                      "👃 <strong>Hidung:</strong> Deria Bau (menghidu bau wangi dan busuk)",
                      "👅 <strong>Lidah:</strong> Deria Rasa (manis, masin, masam, pahit)",
                      "✋ <strong>Kulit:</strong> Deria Sentuhan (merasa panas, sejuk, kasar, licin, keras, lembut)"
                    ],
                    "mnemonic": "💡 <strong>Formula 5 Deria:</strong> Mata tengok, Telinga dengar, Hidung hidu, Lidah rasa, Kulit sentuh!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t1-sn-c4",
                "title": "Kuiz 5 Deria Manusia",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 80,
                "questions": [
                  {
                    "id": 1,
                    "question": "Organ manakah yang kita gunakan untuk merasa ais krim manis?",
                    "options": [
                      "Telinga",
                      "Lidah",
                      "Hidung",
                      "Mata"
                    ],
                    "correctIndex": 1,
                    "explanation": "Lidah mengandungi tunas rasa untuk mengesan rasa manis, masin, masam, dan pahit."
                  },
                  {
                    "id": 2,
                    "question": "Deria sentuhan dikesan oleh organ...",
                    "options": [
                      "Kulit",
                      "Rambut",
                      "Kuku",
                      "Gigi"
                    ],
                    "correctIndex": 0,
                    "explanation": "Kulit mempunyai reseptor deria sentuhan untuk mengesan suhu, tekanan, dan tekstur permukaan."
                  }
                ]
              }
            },
            {
              "id": "t1-sn-c5",
              "number": "Unit 5",
              "title": "Haiwan (Bahagian Tubuh)",
              "summary": "Paruh, sayap, sisik, bulu pelepah, cengkerang, ekor, tanduk.",
              "xpReward": 100,
              "notes": null,
              "quiz": null
            },
            {
              "id": "t1-sn-c7",
              "number": "Unit 7",
              "title": "Magnet",
              "summary": "Bentuk magnet, kutub utara dan selatan, bahan magnet dan bukan magnet.",
              "xpReward": 100,
              "notes": null,
              "quiz": null
            }
          ]
        },
        {
          "id": "t1-pi",
          "name": "Pendidikan Islam",
          "code": "PI-T1",
          "icon": "🕌",
          "color": "from-teal-600 to-emerald-700",
          "theme": "teal",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Asas huruf Hijaiyyah, 6 Rukun Iman, bersuci daripada hadas (istinjak), adab makan dan minum.",
          "chapters": [
            {
              "id": "t1-pi-c2",
              "number": "Unit 2",
              "title": "Akidah: 6 Rukun Iman",
              "summary": "Mengenal dan menghafal 6 Rukun Iman: Allah, Malaikat, Kitab, Rasul, Hari Kiamat, Qada' & Qadar.",
              "xpReward": 100,
              "badgeReward": "Anak Soleh",
              "notes": {
                "title": "Unit 2: Enam Rukun Iman Asas",
                "readTime": "4 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Senarai 6 Rukun Iman",
                    "content": "Setiap orang Islam wajib percaya dan yakin dengan 6 rukun iman:",
                    "bulletPoints": [
                      "1. Beriman kepada <strong>Allah SWT</strong>",
                      "2. Beriman kepada <strong>Malaikat</strong>",
                      "3. Beriman kepada <strong>Kitab-kitab Allah</strong>",
                      "4. Beriman kepada <strong>Rasul-rasul Allah</strong>",
                      "5. Beriman kepada <strong>Hari Kiamat</strong>",
                      "6. Beriman kepada <strong>Qada' dan Qadar</strong>"
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t1-pi-c2",
                "title": "Ujian Hafalan Rukun Iman",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 80,
                "questions": [
                  {
                    "id": 1,
                    "question": "Rukun Iman yang pertama ialah beriman kepada...",
                    "options": [
                      "Malaikat",
                      "Allah SWT",
                      "Kitab",
                      "Hari Akhirat"
                    ],
                    "correctIndex": 1,
                    "explanation": "Rukun Iman yang pertama dan terpenting ialah beriman serta yakin kepada keesaan Allah SWT."
                  }
                ]
              }
            }
          ]
        }
      ],
      "t2": [
        {
          "id": "t2-bm",
          "name": "Bahasa Melayu",
          "code": "BM-T2",
          "icon": "📚",
          "color": "from-amber-500 to-orange-600",
          "theme": "amber",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Kata Kerja Transitif & Tak Transitif, Imbuhan Awalan 'meN-', Kata Hubung, dan Membina Perenggan.",
          "chapters": [
            {
              "id": "t2-bm-c2",
              "number": "Unit 2",
              "title": "Amalan Bersih & Sihat (Kata Kerja & Imbuhan)",
              "summary": "Memahami kata kerja aktif transitif dan penggunaan imbuhan meN- dalam aktiviti harian.",
              "xpReward": 110,
              "badgeReward": "Bintang BM Tahun 2",
              "notes": {
                "title": "Unit 2: Kata Kerja Aktif Transitif & Imbuhan Awalan",
                "readTime": "5 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Kata Kerja Aktif Transitif",
                    "content": "Kata kerja aktif transitif ialah kata kerja yang mesti diikuti oleh <strong>objek</strong> (kata nama) untuk melengkapkan maksud ayat.",
                    "bulletPoints": [
                      "Contoh: Ali <em>membasuh</em> <u>tangan</u>. (tangan ialah objek)",
                      "Contoh: Ibu <em>memotong</em> <u>buah</u>. (buah ialah objek)",
                      "Contoh: Kakak <em>menyapu</em> <u>sampah</u>. (sampah ialah objek)"
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t2-bm-c2",
                "title": "Kuiz Kata Kerja Transitif",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 80,
                "questions": [
                  {
                    "id": 1,
                    "question": "Pilih ayat yang menggunakan kata kerja aktif transitif dengan betul:",
                    "options": [
                      "Adik tidur di bilik.",
                      "Ahmad membaca buku cerita.",
                      "Burung terbang tinggi.",
                      "Bapa tersenyum gembira."
                    ],
                    "correctIndex": 1,
                    "explanation": "'Membaca' ialah kata kerja transitif yang memerlukan objek 'buku cerita'."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "t2-bi",
          "name": "English",
          "code": "BI-T2",
          "icon": "🌍",
          "color": "from-sky-500 to-cyan-600",
          "theme": "sky",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Free Time & routines, rooms in a house, clothes & weather, abilities with can/can't.",
          "chapters": [
            {
              "id": "t2-bi-c5",
              "number": "Unit 5",
              "title": "Free Time & Days of the Week",
              "summary": "Monday to Sunday, favourite activities, and using 'On Mondays I play football'.",
              "xpReward": 110,
              "badgeReward": "English Star",
              "notes": {
                "title": "Unit 5: Days of the Week & Routine",
                "readTime": "4 minutes",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "The 7 Days of the Week",
                    "content": "Remember to always capitalise the first letter of days!",
                    "bulletPoints": [
                      "Monday, Tuesday, Wednesday, Thursday, Friday (Weekdays)",
                      "Saturday, Sunday (Weekend)",
                      "Sentence Pattern: <em>On Tuesdays, I go swimming.</em>"
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t2-bi-c5",
                "title": "Quiz: Days and Routines",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 80,
                "questions": [
                  {
                    "id": 1,
                    "question": "Which day comes right after Wednesday?",
                    "options": [
                      "Tuesday",
                      "Thursday",
                      "Friday",
                      "Sunday"
                    ],
                    "correctIndex": 1,
                    "explanation": "Thursday follows Wednesday in the calendar."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "t2-mt",
          "name": "Matematik (DLP)",
          "code": "MT-T2",
          "icon": "📐",
          "color": "from-blue-500 to-indigo-600",
          "theme": "blue",
          "hasDlp": true,
          "chaptersCount": 1,
          "description": "Nombor hingga 1000, operasi tambah, tolak, darab (sifir 2 hingga 10), bahagi dan wang hingga RM100.",
          "chapters": [
            {
              "id": "t2-mt-c3",
              "number": "Unit 3",
              "title": "Asas Darab & Penguasaan Sifir",
              "summary": "Memahami konsep darab sebagai penambahan berulang dan menguasai sifir 2, 3, 4, 5, dan 10.",
              "xpReward": 120,
              "badgeReward": "Jaguh Sifir",
              "notes": {
                "title": "Unit 3: Konsep Darab & Penambahan Berulang",
                "readTime": "5 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Darab ialah Penambahan Berulang",
                    "content": "Darab bermaksud kumpulan objek yang sama bilangannya dicampurkan berulang kali.",
                    "bulletPoints": [
                      "Contoh: 3 kumpulan, setiap kumpulan ada 4 biji epal.",
                      "Penambahan berulang: 4 + 4 + 4 = 12",
                      "Ayat matematik darab: 3 × 4 = 12"
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t2-mt-c3",
                "title": "Cabaran Sifir Pantas",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 90,
                "questions": [
                  {
                    "id": 1,
                    "question": "Berapakah hasil darab bagi 4 × 5?",
                    "options": [
                      "15",
                      "20",
                      "25",
                      "9"
                    ],
                    "correctIndex": 1,
                    "explanation": "4 × 5 bermaksud 4 kumpulan 5 (5 + 5 + 5 + 5 = 20)."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "t2-sn",
          "name": "Sains (DLP)",
          "code": "SN-T2",
          "icon": "🔬",
          "color": "from-emerald-500 to-teal-600",
          "theme": "emerald",
          "hasDlp": true,
          "chaptersCount": 1,
          "description": "Tumbesaran manusia, kitar hidup haiwan, keperluan asas biji benih, litar elektrik dan campuran.",
          "chapters": [
            {
              "id": "t2-sn-c4",
              "number": "Unit 4",
              "title": "Kitar Hidup Haiwan (Metamorfosis)",
              "summary": "Mengkaji kitar hidup haiwan seperti katak (telur, berudu, anak katak, katak dewasa) dan rama-rama.",
              "xpReward": 120,
              "badgeReward": "Pemerhati Alam",
              "notes": {
                "title": "Unit 4: Kitar Hidup Katak & Rama-rama",
                "readTime": "5 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Kitar Hidup Katak",
                    "content": "Katak mengalami perubahan bentuk fizikal yang ketara semasa membesar.",
                    "bulletPoints": [
                      "1. <strong>Telur:</strong> bertelur dalam air dalam rumpun berlendir.",
                      "2. <strong>Berudu:</strong> bernafas dengan insang dan berenang menggunakan ekor.",
                      "3. <strong>Anak Katak:</strong> mula tumbuh kaki belakang dan kaki hadapan.",
                      "4. <strong>Katak Dewasa:</strong> ekor hilang, bernafas menggunakan peparu dan kulit lembap di darat."
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t2-sn-c4",
                "title": "Kuiz Kitar Hidup Haiwan",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 80,
                "questions": [
                  {
                    "id": 1,
                    "question": "Apakah peringkat selepas telur dalam kitar hidup seekor katak?",
                    "options": [
                      "Anak katak",
                      "Berudu",
                      "Katak dewasa",
                      "Kompang"
                    ],
                    "correctIndex": 1,
                    "explanation": "Telur katak menetas menjadi berudu yang hidup di dalam air."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "t2-pi",
          "name": "Pendidikan Islam",
          "code": "PI-T2",
          "icon": "🕌",
          "color": "from-teal-600 to-emerald-700",
          "theme": "teal",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Asmaul Husna, tatacara wuduk yang sempurna, doa harian dan Sirah Nabi Muhammad.",
          "chapters": [
            {
              "id": "t2-pi-c1",
              "number": "Unit 1",
              "title": "Feqah: Solat Fardu 5 Waktu & Bilangan Rakaat",
              "summary": "Memahami kewajipan solat fardu lima waktu sehari semalam serta bilangan rakaat bagi setiap solat.",
              "xpReward": 100,
              "badgeReward": "Bintang Solat",
              "notes": {
                "title": "Unit 1: Solat Fardu Lima Waktu",
                "readTime": "4 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Kewajipan Solat 5 Waktu",
                    "content": "Solat ialah tiang agama. Setiap umat Islam yang baligh dan berakal wajib menunaikan solat lima waktu sehari semalam.",
                    "bulletPoints": [
                      "<strong>Subuh:</strong> 2 rakaat (waktu fajar)",
                      "<strong>Zohor:</strong> 4 rakaat (tengah hari gelincir matahari)",
                      "<strong>Asar:</strong> 4 rakaat (petang)",
                      "<strong>Maghrib:</strong> 3 rakaat (selepas terbenam matahari)",
                      "<strong>Isyak:</strong> 4 rakaat (malam)"
                    ],
                    "mnemonic": "💡 <strong>Formula Rakaat:</strong> 2 - 4 - 4 - 3 - 4 = Jumlah 17 Rakaat Sehari Semalam!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t2-pi-c1",
                "title": "Kuiz Solat Fardu 5 Waktu",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 80,
                "questions": [
                  {
                    "id": 1,
                    "question": "Berapakah bilangan rakaat bagi Solat Maghrib?",
                    "options": [
                      "2 rakaat",
                      "3 rakaat",
                      "4 rakaat",
                      "1 rakaat"
                    ],
                    "correctIndex": 1,
                    "explanation": "Solat Maghrib ditunaikan sebanyak 3 rakaat selepas matahari terbenam."
                  },
                  {
                    "id": 2,
                    "question": "Berapakah jumlah keseluruhan rakaat solat fardu dalam sehari semalam?",
                    "options": [
                      "15 rakaat",
                      "17 rakaat",
                      "20 rakaat",
                      "12 rakaat"
                    ],
                    "correctIndex": 1,
                    "explanation": "Jumlah keseluruhan rakaat solat fardu ialah 17 rakaat (Subuh 2 + Zohor 4 + Asar 4 + Maghrib 3 + Isyak 4)."
                  }
                ]
              }
            }
          ]
        }
      ],
      "t3": [
        {
          "id": "t3-bm",
          "name": "Bahasa Melayu",
          "code": "BM-T3",
          "icon": "📚",
          "color": "from-amber-500 to-orange-600",
          "theme": "amber",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Kata Hubung, Kata Sendi Nama, Kata Ganda, Peribahasa Asas dan Karangan Pendek.",
          "chapters": [
            {
              "id": "t3-bm-c3",
              "number": "Unit 3",
              "title": "Keselamatan Jalan Raya (Kata Sendi Nama)",
              "summary": "Memahami penggunaan kata sendi nama: di, ke, dari, daripada, pada, kepada, untuk.",
              "xpReward": 120,
              "badgeReward": "Pakar Tatabahasa T3",
              "notes": {
                "title": "Unit 3: Perbezaan 'Dari' dan 'Daripada'",
                "readTime": "5 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Formula Mengingat 'DARI' (A-T-M)",
                    "content": "Kata sendi nama <strong>DARI</strong> hanya digunakan untuk tiga perkara iaitu:",
                    "bulletPoints": [
                      "<strong>A:</strong> Arah (contoh: dari barat, dari atas)",
                      "<strong>T:</strong> Tempat (contoh: dari sekolah, dari Kuala Lumpur)",
                      "<strong>M:</strong> Masa / Waktu (contoh: dari pagi hingga petang, dari semalam)"
                    ],
                    "mnemonic": "💡 <strong>Formula ATM:</strong> Dari = Arah, Tempat, Masa. Selain ATM, gunakan 'DARIPADA' (orang, sumber bahan, perbandingan)!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t3-bm-c3",
                "title": "Kuiz Dari vs Daripada",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 90,
                "questions": [
                  {
                    "id": 1,
                    "question": "Meja belajar itu diperbuat ______ kayu jati yang bermutu tinggi.",
                    "options": [
                      "dari",
                      "daripada",
                      "kepada",
                      "pada"
                    ],
                    "correctIndex": 1,
                    "explanation": "Gunakan 'daripada' kerana ia menyatakan sumber bahan asal pembuatan meja."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "t3-bi",
          "name": "English",
          "code": "BI-T3",
          "icon": "🌍",
          "color": "from-sky-500 to-cyan-600",
          "theme": "sky",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Welcome routines, telling time, present continuous tense, year in year out, and jobs.",
          "chapters": [
            {
              "id": "t3-bi-c2",
              "number": "Module 2",
              "title": "Everyday (Telling Time & Routines)",
              "summary": "O'clock, half past, quarter past, quarter to, and daily routine descriptions.",
              "xpReward": 110,
              "badgeReward": "Grammar Whiz",
              "notes": {
                "title": "Module 2: Telling Time in English",
                "readTime": "5 minutes",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "How to Tell the Time",
                    "content": "Learn how to read analog clock faces:",
                    "bulletPoints": [
                      "8:00 = It is eight o'clock.",
                      "8:15 = It is quarter past eight.",
                      "8:30 = It is half past eight.",
                      "8:45 = It is quarter to nine."
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t3-bi-c2",
                "title": "Quiz: Telling Time",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 80,
                "questions": [
                  {
                    "id": 1,
                    "question": "What time is 7:30 in English?",
                    "options": [
                      "Seven o'clock",
                      "Half past seven",
                      "Quarter past seven",
                      "Quarter to seven"
                    ],
                    "correctIndex": 1,
                    "explanation": "30 minutes past the hour is expressed as 'half past seven'."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "t3-mt",
          "name": "Matematik (DLP)",
          "code": "MT-T3",
          "icon": "📐",
          "color": "from-blue-500 to-indigo-600",
          "theme": "blue",
          "hasDlp": true,
          "chaptersCount": 1,
          "description": "Nombor hingga 10 000, pecahan wajar dan tak wajar, perpuluhan, wang hingga RM10 000 dan masa.",
          "chapters": [
            {
              "id": "t3-mt-c3",
              "number": "Unit 3",
              "title": "Pecahan Wajar & Permudah Pecahan",
              "summary": "Mengenal pengangka dan penyebut, pecahan wajar, dan mempermudah pecahan kepada bentuk termudah.",
              "xpReward": 120,
              "badgeReward": "Pakar Pecahan T3",
              "notes": {
                "title": "Unit 3: Mempermudah Pecahan Wajar",
                "readTime": "5 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Anatomi Pecahan",
                    "content": "Pecahan ditulis sebagai <code>a / b</code> di mana:",
                    "bulletPoints": [
                      "Nombor di atas = <strong>Pengangka</strong> (bahagian yang diambil)",
                      "Nombor di bawah = <strong>Penyebut</strong> (jumlah semua bahagian)",
                      "Permudahkan pecahan dengan membahagi pengangka dan penyebut dengan faktor sepunya terbesar!"
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t3-mt-c3",
                "title": "Kuiz Permudah Pecahan",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 80,
                "questions": [
                  {
                    "id": 1,
                    "question": "Permudahkan pecahan 4/8 kepada bentuk termudah:",
                    "options": [
                      "1/4",
                      "1/2",
                      "2/3",
                      "4/8"
                    ],
                    "correctIndex": 1,
                    "explanation": "Bahagikan 4 dan 8 dengan 4: 4÷4 = 1, 8÷4 = 2. Bentuk termudah ialah 1/2."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "t3-sn",
          "name": "Sains (DLP)",
          "code": "SN-T3",
          "icon": "🔬",
          "color": "from-emerald-500 to-teal-600",
          "theme": "emerald",
          "hasDlp": true,
          "chaptersCount": 1,
          "description": "Gigi manusia, tabiat makan haiwan, pembiakan tumbuhan, ketumpatan, asid & alkali, dan sistem suria.",
          "chapters": [
            {
              "id": "t3-sn-c3",
              "number": "Unit 3",
              "title": "Manusia: Gigi Susu vs Gigi Kekal",
              "summary": "Struktur gigi manusia (enamel, dentin, saraf, salur darah) dan 3 jenis gigi (kacip, taring, geraham).",
              "xpReward": 130,
              "badgeReward": "Wira Kesihatan Gigi",
              "notes": {
                "title": "Unit 3: Jenis Gigi dan Fungsinya",
                "readTime": "5 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "3 Jenis Gigi Manusia",
                    "content": "Setiap jenis gigi mempunyai bentuk dan peranan khusus:",
                    "bulletPoints": [
                      "1. <strong>Gigi Kacip (Incisor):</strong> berbentuk pipih, berfungsi <em>memotong makanan</em>.",
                      "2. <strong>Gigi Taring (Canine):</strong> berbentuk tajam, berfungsi <em>mengoyak makanan</em>.",
                      "3. <strong>Gigi Geraham (Molar):</strong> permukaan lebar rata, berfungsi <em>melumatkan dan mengisar makanan</em>."
                    ],
                    "mnemonic": "💡 <strong>Formula K-T-G:</strong> <u>K</u>acip potong, <u>T</u>aring koyak, <u>G</u>eraham lumat!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t3-sn-c3",
                "title": "Kuiz Jenis & Fungsi Gigi",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 80,
                "questions": [
                  {
                    "id": 1,
                    "question": "Gigi yang tajam dan berfungsi mengoyak daging ialah...",
                    "options": [
                      "Gigi Kacip",
                      "Gigi Taring",
                      "Gigi Geraham",
                      "Gigi Susu"
                    ],
                    "correctIndex": 1,
                    "explanation": "Gigi taring mempunyai hujung yang runcing tajam untuk mengoyakkan makanan."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "t3-pi",
          "name": "Pendidikan Islam",
          "code": "PI-T3",
          "icon": "🕌",
          "color": "from-teal-600 to-emerald-700",
          "theme": "teal",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Kitab-kitab suci, solat fardu 5 waktu, rukun solat 13 perkara, dan adab berjiran.",
          "chapters": [
            {
              "id": "t3-pi-c1",
              "number": "Unit 1",
              "title": "Feqah: Bersuci daripada Hadas Kecil & Cara Berwuduk",
              "summary": "Mempelajari rukun wuduk, syarat sah wuduk, dan perkara yang membatalkan wuduk.",
              "xpReward": 100,
              "badgeReward": "Cahaya Wuduk",
              "notes": {
                "title": "Unit 1: Rukun Wuduk yang Sempurna",
                "readTime": "4 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Enam Rukun Wuduk Wajib",
                    "content": "Wuduk ialah perbuatan menyucikan anggota badan tertentu dengan air mutlak berserta niat.",
                    "bulletPoints": [
                      "1. <strong>Niat wuduk</strong> ketika membasuh muka",
                      "2. <strong>Membasuh muka</strong> dengan sempurna",
                      "3. <strong>Membasuh kedua-dua tangan</strong> hingga ke siku",
                      "4. <strong>Menyapu sebahagian kepala</strong> dengan air",
                      "5. <strong>Membasuh kedua-dua kaki</strong> hingga ke buku lali",
                      "6. <strong>Tertib</strong> (mengikut urutan)"
                    ],
                    "mnemonic": "💡 <strong>Formula Tertib:</strong> Niat + Muka + Tangan + Kepala + Kaki + Tertib!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t3-pi-c1",
                "title": "Kuiz Rukun & Tertib Wuduk",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 80,
                "questions": [
                  {
                    "id": 1,
                    "question": "Rukun wuduk yang pertama ialah...",
                    "options": [
                      "Membasuh telinga",
                      "Niat ketika membasuh muka",
                      "Membasuh kaki",
                      "Berkumur-kumur"
                    ],
                    "correctIndex": 1,
                    "explanation": "Rukun wuduk yang pertama wajib dilakukan dengan berniat ketika mula membasuh muka."
                  },
                  {
                    "id": 2,
                    "question": "Antara berikut, yang manakah membatalkan wuduk?",
                    "options": [
                      "Minum air kosong",
                      "Tidur nyenyak tanpa tetap punggung",
                      "Bercakap dengan kawan",
                      "Membaca buku"
                    ],
                    "correctIndex": 1,
                    "explanation": "Tidur yang tidak tetap punggung membatalkan wuduk kerana hilang kewaspadaan."
                  }
                ]
              }
            }
          ]
        }
      ],
      "t4": [
        {
          "id": "t4-bm",
          "name": "Bahasa Melayu",
          "code": "BM-T4",
          "icon": "📚",
          "color": "from-amber-500 to-orange-600",
          "theme": "amber",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Tatabahasa UASA, Penjodoh Bilangan, Peribahasa, Pemahaman Petikan dan Bina Ulasan.",
          "chapters": [
            {
              "id": "t4-bm-c1",
              "number": "Unit 1",
              "title": "Hidup Sepakat Membawa Berkat (Penjodoh Bilangan)",
              "summary": "Menguasai penjodoh bilangan lazim seperti utas, bentuk, bilah, keping, laras, pucuk dan carik.",
              "xpReward": 130,
              "badgeReward": "Pakar Bahasa UASA",
              "notes": {
                "title": "Unit 1: Penjodoh Bilangan Lazim Peperiksaan UASA",
                "readTime": "6 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Penjodoh Bilangan Penting",
                    "content": "Penjodoh bilangan digunakan bersama kata bilangan untuk menentukan benda:",
                    "bulletPoints": [
                      "<strong>Bilah:</strong> untuk benda tajam (pisau, keris, parang, gunting)",
                      "<strong>Pucuk:</strong> untuk surat dan senjata api (sepucuk surat, sepucuk pistol)",
                      "<strong>Utas:</strong> untuk benda panjang yang boleh digulung (seutas jam tangan, seutas tali, seutas rantai)",
                      "<strong>Keping:</strong> untuk benda nipis dan leper (sekeping roti, sekeping gambar, sekeping papan)"
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t4-bm-c1",
                "title": "Kuiz Penjodoh Bilangan UASA",
                "timeLimitMinutes": 6,
                "passingScore": 60,
                "xpPoints": 90,
                "questions": [
                  {
                    "id": 1,
                    "question": "Pahlawan Melaka itu menyelitkan se______ keris berlok tujuh di pinggangnya.",
                    "options": [
                      "pucuk",
                      "bilah",
                      "keping",
                      "batang"
                    ],
                    "correctIndex": 1,
                    "explanation": "Keris ialah senjata tajam, maka penjodoh bilangannya ialah 'bilah'."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "t4-bi",
          "name": "English (CEFR)",
          "code": "BI-T4",
          "icon": "🌍",
          "color": "from-sky-500 to-cyan-600",
          "theme": "sky",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Where Are You From, My Week, In the Past (Simple Past Tense), Celebrations, and Helping Out.",
          "chapters": [
            {
              "id": "t4-bi-c3",
              "number": "Unit 3",
              "title": "In the Past (Past Simple Tense)",
              "summary": "Regular verbs (-ed) and irregular past verbs (went, saw, ate, had, did, bought).",
              "xpReward": 130,
              "badgeReward": "Grammar Master T4",
              "notes": {
                "title": "Unit 3: Past Simple Tense - Regular vs Irregular",
                "readTime": "6 minutes",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Regular vs Irregular Past Verbs",
                    "content": "When talking about completed actions in the past (yesterday, last week, two days ago):",
                    "bulletPoints": [
                      "<strong>Regular (-ed):</strong> play ➔ played, watch ➔ watched, walk ➔ walked",
                      "<strong>Irregular (change spelling):</strong> go ➔ went, see ➔ saw, eat ➔ ate, buy ➔ bought, drink ➔ drank"
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t4-bi-c3",
                "title": "Quiz: Past Simple Verbs",
                "timeLimitMinutes": 6,
                "passingScore": 60,
                "xpPoints": 90,
                "questions": [
                  {
                    "id": 1,
                    "question": "Yesterday, Sarah and her mother ______ delicious nasi lemak at the night market.",
                    "options": [
                      "eat",
                      "eats",
                      "ate",
                      "eating"
                    ],
                    "correctIndex": 2,
                    "explanation": "Yesterday indicates past tense; the past form of 'eat' is 'ate'."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "t4-mt",
          "name": "Matematik (DLP)",
          "code": "MT-T4",
          "icon": "📐",
          "color": "from-blue-500 to-indigo-600",
          "theme": "blue",
          "hasDlp": true,
          "chaptersCount": 1,
          "description": "Nombor hingga 100 000, operasi asas & bergabung, pecahan tak wajar & nombor bercampur, wang hingga RM100 000.",
          "chapters": [
            {
              "id": "t4-mt-c1",
              "number": "Unit 1",
              "title": "Nombor Bulat Hingga 100 000 & Pembundaran",
              "summary": "Nilai tempat puluh ribu, cerakin nombor mengikut nilai digit, dan peraturan pembundaran.",
              "xpReward": 130,
              "badgeReward": "Kalkulator Cekap",
              "notes": {
                "title": "Unit 1: Pembundaran Nombor Hingga Puluh Ribu Terdekat",
                "readTime": "5 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Peraturan Pembundaran",
                    "content": "Langkah-langkah membundar nombor:",
                    "bulletPoints": [
                      "1. Gariskan digit pada nilai tempat yang hendak dibundarkan.",
                      "2. Lihat digit di sebelah kanannya (jiran sebelah).",
                      "3. Jika jiran <strong>0, 1, 2, 3, 4</strong> ➔ Digit yang digaris kekal sama.",
                      "4. Jika jiran <strong>5, 6, 7, 8, 9</strong> ➔ Tambah 1 pada digit yang digaris.",
                      "5. Semua digit di sebelah kanan menjadi sifar (0)."
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t4-mt-c1",
                "title": "Kuiz Pembundaran Nombor",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 80,
                "questions": [
                  {
                    "id": 1,
                    "question": "Bundarkan 47 628 kepada ribu yang terdekat:",
                    "options": [
                      "47 000",
                      "48 000",
                      "47 600",
                      "50 000"
                    ],
                    "correctIndex": 1,
                    "explanation": "Digit ribu ialah 7. Digit ratus di kanannya ialah 6 (≥5), maka tambah 1 pada 7 menjadi 48 000."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "t4-sains",
          "name": "Sains (DLP)",
          "code": "SN-T4",
          "icon": "🫁",
          "color": "from-emerald-500 to-teal-600",
          "theme": "emerald",
          "hasDlp": true,
          "chaptersCount": 1,
          "description": "Organ pernafasan, perkumuhan manusia, organ pernafasan haiwan, fotosintesis tumbuhan, sifat cahaya dan mesin.",
          "chapters": [
            {
              "id": "t4-sn-c2",
              "number": "Unit 2",
              "title": "Manusia: Pernafasan & Perkumuhan",
              "summary": "Memahami laluan udara semasa menarik dan menghembus nafas serta organ perkumuhan dan penyahtinjaan.",
              "xpReward": 140,
              "badgeReward": "Wira Sains Cilik",
              "notes": {
                "title": "Unit 2: Pernafasan dan Perkumuhan Manusia",
                "readTime": "6 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "1. Organ Pernafasan Manusia & Laluan Udara",
                    "content": "Manusia bernafas menggunakan <strong>peparu</strong> untuk menyedut oksigen dan membebaskan karbon dioksida.",
                    "bulletPoints": [
                      "<strong>Laluan Udara Menarik Nafas:</strong> Hidung ➔ Trakea ➔ Peparu (Dada naik dan mengembang).",
                      "<strong>Laluan Udara Menghembus Nafas:</strong> Peparu ➔ Trakea ➔ Hidung (Dada turun dan mengempis).",
                      "<strong>Kadar Pernafasan:</strong> Bilangan pergerakan dada naik dan turun dalam satu minit. Lebih cergas aktiviti, lebih tinggi kadar pernafasan!"
                    ],
                    "mnemonic": "💡 <strong>Formula Ingat:</strong> Tarik Nafas = H-T-P (Hidung ➔ Trakea ➔ Peparu). Hembus Nafas = P-T-H (Peparu ➔ Trakea ➔ Hidung)!"
                  },
                  {
                    "heading": "2. Perkumuhan & Penyahtinjaan",
                    "content": "Tubuh kita menyingkirkan bahan buangan toksik untuk kekal sihat.",
                    "bulletPoints": [
                      "<strong>Peparu:</strong> Menyingkirkan karbon dioksida dan wap air melalui hembusan nafas.",
                      "<strong>Ginjal (Buah Pinggang):</strong> Menyingkirkan air kencing (urea, garam mineral, air).",
                      "<strong>Kulit:</strong> Menyingkirkan peluh melalui liang peluh.",
                      "<strong>Penyahtinjaan:</strong> Penyingkiran tinja (sisa makanan yang tidak tercerna) melalui dubur."
                    ],
                    "examTip": "⭐ <strong>Tip UASA:</strong> Jangan keliru antara <em>perkumuhan</em> (penyingkiran bahan toksik daripada sel tubuh) dan <em>penyahtinjaan</em> (penyingkiran tinja melalui dubur)!"
                  }
                ]
              },
              "video": {
                "title": "Sains Tahun 4: Laluan Udara & Organ Perkumuhan",
                "duration": "7:45 minit",
                "presenter": "Cikgu Farah (Guru Sains Inovatif)",
                "embedUrl": "https://www.youtube.com/embed/f9ONXd_-anM",
                "highlights": [
                  "0:30 - Laluan Udara Menarik & Menghembus Nafas",
                  "2:40 - Eksperimen Kadar Pernafasan",
                  "5:15 - 3 Organ Perkumuhan Utama"
                ]
              },
              "worksheet": {
                "title": "Lembaran Latihan UASA Sains Tahun 4 (Unit 2)",
                "pages": 2,
                "itemsCount": 8,
                "fileType": "PDF Interaktif",
                "downloadUrl": "#",
                "previewItems": [
                  "Menyusun urutan laluan udara menarik nafas",
                  "Memadankan organ dengan hasil perkumuhan",
                  "Soalan situasi kadar pernafasan selepas berlari"
                ]
              },
              "quiz": {
                "id": "quiz-t4-sn-c2",
                "title": "Kuiz Interaktif: Pernafasan & Perkumuhan Manusia",
                "timeLimitMinutes": 8,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Apakah laluan udara yang betul semasa manusia menarik nafas?",
                    "options": [
                      "Hidung ➔ Trakea ➔ Peparu",
                      "Peparu ➔ Trakea ➔ Hidung",
                      "Hidung ➔ Peparu ➔ Jantung",
                      "Mulut ➔ Perut ➔ Peparu"
                    ],
                    "correctIndex": 0,
                    "explanation": "Semasa menarik nafas, udara kaya oksigen masuk melalui hidung, menuruni trakea dan memenuhi peparu."
                  },
                  {
                    "id": 2,
                    "question": "Organ manakah yang bertanggungjawab menyingkirkan peluh?",
                    "options": [
                      "Peparu",
                      "Kulit",
                      "Ginjal",
                      "Hati"
                    ],
                    "correctIndex": 1,
                    "explanation": "Kulit menyingkirkan peluh yang mengandungi air, urea dan garam mineral melalui liang peluh."
                  },
                  {
                    "id": 3,
                    "question": "Mengapakah kadar pernafasan seseorang meningkat selepas berlari 100 meter?",
                    "options": [
                      "Kerana tubuh memerlukan lebih banyak gas karbon dioksida",
                      "Kerana tubuh memerlukan lebih banyak oksigen dengan segera untuk menjana tenaga",
                      "Kerana otot kaki menjadi lebih panjang",
                      "Kerana suhu badan menurun"
                    ],
                    "correctIndex": 1,
                    "explanation": "Aktiviti cergas memerlukan lebih banyak tenaga, maka sel badan memerlukan lebih banyak bekalan oksigen menyebabkan dada bernafas lebih laju."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "t4-sej",
          "name": "Sejarah",
          "code": "SEJ-T4",
          "icon": "🏛️",
          "color": "from-red-500 to-rose-600",
          "theme": "rose",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Pengenalan ilmu sejarah, Zaman Air Batu, Zaman Prasejarah, Kerajaan Melayu Awal, dan Tokoh Kesultanan Melaka.",
          "chapters": [
            {
              "id": "t4-sej-c5",
              "number": "Unit 5",
              "title": "Zaman Air Batu & Pentas Sunda",
              "summary": "Mengenal Zaman Glasier, pencairan air batu, kenaikan paras air laut dan pembentukan Pentas Sunda di Asia Tenggara.",
              "xpReward": 140,
              "badgeReward": "Penyelidik Sejarah Cilik",
              "notes": {
                "title": "Unit 5: Zaman Air Batu Akhir & Kesannya",
                "readTime": "6 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Kesan Pencairan Air Batu di Asia Tenggara",
                    "content": "Suhu bumi meningkat menyebabkan bongkah ais mencair dan paras air laut meningkat.",
                    "bulletPoints": [
                      "Pentas Sunda ditenggelami air laut membentuk gugusan pulau dan semenanjung.",
                      "Sungai dan tasik terbentuk di kawasan tanah pamah.",
                      "Haiwan Zaman Air Batu seperti Mammoth pupus kerana cuaca semakin panas."
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t4-sej-c5",
                "title": "Kuiz Zaman Air Batu",
                "timeLimitMinutes": 6,
                "passingScore": 60,
                "xpPoints": 90,
                "questions": [
                  {
                    "id": 1,
                    "question": "Apakah kesan utama peningkatan suhu bumi pada Zaman Air Batu Akhir?",
                    "options": [
                      "Air laut membeku menjadi daratan",
                      "Pencairan ais yang menenggelamkan Pentas Sunda",
                      "Bumi menjadi semakin gelap",
                      "Gunung berapi meletus serentak"
                    ],
                    "correctIndex": 1,
                    "explanation": "Kenaikan suhu mencairkan ais glasier, menaikkan paras air laut dan menenggelamkan tanah rendah Pentas Sunda."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "t4-rbt",
          "name": "Reka Bentuk & Teknologi",
          "code": "RBT-T4",
          "icon": "🛠️",
          "color": "from-amber-600 to-orange-700",
          "theme": "amber",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Keselamatan bengkel, pengenalan reka bentuk, algoritma, pseudokod, carta alir dan Scratch pengaturcaraan.",
          "chapters": [
            {
              "id": "t4-rbt-c3",
              "number": "Unit 3",
              "title": "Asas Pengaturcaraan Komputer (Scratch)",
              "summary": "Memahami algoritma, pseudokod, carta alir dan membina blok kod animasi interaktif menggunakan Scratch.",
              "xpReward": 130,
              "badgeReward": "Pengaturcara Cilik",
              "notes": {
                "title": "Unit 3: Algoritma, Pseudokod dan Carta Alir",
                "readTime": "6 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Algoritma vs Pseudokod vs Carta Alir",
                    "content": "Tiga cara utama merancang langkah penyelesaian masalah dalam pengaturcaraan:",
                    "bulletPoints": [
                      "<strong>Algoritma:</strong> Langkah-langkah penyelesaian masalah dalam bahasa harian.",
                      "<strong>Pseudokod:</strong> Urutan arahan menggunakan ayat ringkas dan huruf besar (contoh: MULA, MASUKKAN, PAPAR, TAMAT).",
                      "<strong>Carta Alir:</strong> Gambaran grafik menggunakan simbol geometri (Bujur = Mula/Tamat, Segi Empat = Proses, Berlian = Pilihan/Syarat)."
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t4-rbt-c3",
                "title": "Kuiz Simbol Carta Alir",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 80,
                "questions": [
                  {
                    "id": 1,
                    "question": "Simbol bentuk bujur (terminal) dalam carta alir mewakili...",
                    "options": [
                      "Proses kerja",
                      "Mula atau Tamat",
                      "Syarat membuat keputusan",
                      "Input data"
                    ],
                    "correctIndex": 1,
                    "explanation": "Simbol bujur digunakan untuk menandakan titik Mula dan Tamat dalam sesebuah carta alir."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "t4-pi",
          "name": "Pendidikan Islam",
          "code": "PI-T4",
          "icon": "🕌",
          "color": "from-teal-600 to-emerald-700",
          "theme": "teal",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Beriman kepada Rasul, tayamum, solat berjemaah, dan sirah dakwah Nabi Muhammad di Makkah.",
          "chapters": [
            {
              "id": "t4-pi-c1",
              "number": "Unit 1",
              "title": "Sirah: Kelahiran & Keperibadian Nabi Muhammad SAW",
              "summary": "Meneladani akhlak mulia dan sifat terpuji baginda Nabi Muhammad SAW seperti Al-Amin (dipercayai).",
              "xpReward": 100,
              "badgeReward": "Pencinta Rasul",
              "notes": {
                "title": "Unit 1: Keperibadian Mulia Nabi Muhammad SAW",
                "readTime": "5 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Empat Sifat Wajib bagi Rasul",
                    "content": "Rasulullah SAW mempunyai empat sifat wajib yang wajib dicontohi oleh semua murid:",
                    "bulletPoints": [
                      "<strong>Siddiq:</strong> Benar dalam perkataan dan perbuatan",
                      "<strong>Amanah:</strong> Jujur dan boleh dipercayai (bergelar Al-Amin)",
                      "<strong>Tabligh:</strong> Menyampaikan ajaran Islam tanpa menyembunyikan apa-apa",
                      "<strong>Fatanah:</strong> Bijaksana dan cerdas pemikiran"
                    ],
                    "mnemonic": "💡 <strong>Formula 4 Sifat:</strong> S-A-T-F (Siddiq, Amanah, Tabligh, Fatanah)!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t4-pi-c1",
                "title": "Kuiz Sifat Wajib Rasul",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 80,
                "questions": [
                  {
                    "id": 1,
                    "question": "Apakah maksud sifat 'Amanah' yang dimiliki oleh Nabi Muhammad SAW?",
                    "options": [
                      "Bijaksana",
                      "Boleh dipercayai dan jujur",
                      "Suka bersedekah",
                      "Pandai berniaga"
                    ],
                    "correctIndex": 1,
                    "explanation": "Amanah bermaksud boleh dipercayai dan jujur dalam menggalas segala tanggungjawab."
                  }
                ]
              }
            }
          ]
        }
      ],
      "t5": [
        {
          "id": "t5-sains",
          "name": "Sains (DLP)",
          "code": "SN-T5",
          "icon": "🔬",
          "color": "from-emerald-500 to-teal-600",
          "theme": "emerald",
          "hasDlp": true,
          "chaptersCount": 2,
          "description": "Sistem peredaran darah, sistem rangka, kemandirian haiwan & tumbuhan, elektrik bersiri/selari, haba dan jirim.",
          "chapters": [
            {
              "id": "t5-sn-c2",
              "number": "Unit 2",
              "title": "Manusia: Sistem Peredaran Darah & Sistem Rangka",
              "summary": "Memahami struktur rangka utama manusia dan bagaimana jantung mengepam darah beroksigen ke seluruh tubuh.",
              "xpReward": 150,
              "badgeReward": "Wira Sains Cilik",
              "notes": {
                "title": "Unit 2: Sistem Manusia (Rangka & Peredaran Darah)",
                "readTime": "7 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "1. Sistem Rangka Manusia dan Fungsinya",
                    "content": "Tubuh manusia disokong oleh sistem rangka. Tanpa rangka, kita akan lembik seperti obor-obor!",
                    "bulletPoints": [
                      "<strong>Tengkorak (Cranium):</strong> Melindungi otak kita daripada kecederaan.",
                      "<strong>Tulang Belakang:</strong> Menyokong tubuh dan membolehkan kita berdiri tegak dan membongkok.",
                      "<strong>Tulang Rusuk:</strong> Membentuk sangkar rusuk untuk melindungi organ utama seperti jantung dan paru-paru.",
                      "<strong>Tulang Tangan dan Kaki:</strong> Berfungsi sebagai sokongan dan membolehkan pergerakan harian."
                    ],
                    "mnemonic": "💡 <strong>Akronim Ingat Rangka (T-B-R-T):</strong> <u>T</u>engkorak lindung otak, <u>B</u>elakang tegak, <u>R</u>usuk lindung jantung, <u>T</u>angan-kaki gerak pantas!"
                  },
                  {
                    "heading": "2. Sistem Peredaran Darah Manusia",
                    "content": "Sistem peredaran darah terdiri daripada tiga bahagian utama iaitu <strong>Jantung</strong>, <strong>Salur Darah</strong>, dan <strong>Darah</strong>.",
                    "bulletPoints": [
                      "<strong>Jantung:</strong> Berfungsi mengepam darah ke seluruh tubuh dan ke peparu. Jantung manusia ada 4 ruang.",
                      "<strong>Salur Darah:</strong> Tiub pengangkutan darah. Terbahagi kepada <em>Arteri</em> (bawa darah keluar dari jantung) dan <em>Vena</em> (bawa darah kembali ke jantung).",
                      "<strong>Darah Beroksigen:</strong> Kaya dengan oksigen, berwarna merah cerah, dipam dari peparu ke jantung lalu ke seluruh tubuh.",
                      "<strong>Darah Kurang Oksigen:</strong> Kaya dengan karbon dioksida, dipam dari seluruh tubuh ke peparu untuk disingkirkan."
                    ],
                    "examTip": "⭐ <strong>Tip UASA:</strong> Soalan format UASA Bahagian B sering menyoal laluan peredaran darah: <em>Tubuh manusia ➔ Peparu ➔ Jantung ➔ Seluruh tubuh</em>. Pastikan faham perbezaan darah beroksigen dan kurang oksigen!"
                  }
                ]
              },
              "video": {
                "title": "Animasi 3D: Laluan Peredaran Darah Manusia",
                "duration": "8:25 minit",
                "presenter": "Cikgu Farah (Guru Sains Inovatif)",
                "embedUrl": "https://www.youtube.com/embed/f9ONXd_-anM",
                "highlights": [
                  "0:30 - Pengenalan Fungsi Jantung 4 Ruang",
                  "2:15 - Arteri vs Vena: Apa Bezanya?",
                  "5:10 - Laluan Darah Beroksigen ke Otak dan Otot",
                  "7:00 - Soalan Latihan UASA Klon"
                ]
              },
              "worksheet": {
                "title": "Lembaran Latihan UASA Sains Tahun 5 (Unit 2)",
                "pages": 2,
                "itemsCount": 10,
                "fileType": "PDF Interaktif",
                "downloadUrl": "#",
                "previewItems": [
                  "Melabel rajah rangka manusia (Tengkorak, Rusuk, Tulang Belakang)",
                  "Melukis anak panah laluan peredaran darah manusia",
                  "Soalan situasi KBAT: Kesan jika salur darah tersumbat oleh kolesterol"
                ]
              },
              "quiz": {
                "id": "quiz-t5-sn-c2",
                "title": "Kuiz Interaktif: Sistem Rangka & Darah Manusia",
                "timeLimitMinutes": 10,
                "passingScore": 60,
                "xpPoints": 120,
                "questions": [
                  {
                    "id": 1,
                    "question": "Apakah fungsi utama tulang rusuk pada tubuh manusia?",
                    "options": [
                      "Melindungi otak daripada hentakan",
                      "Melindungi organ dalaman seperti peparu dan jantung",
                      "Membantu tubuh berdiri tegak",
                      "Menghasilkan cecair hempedu"
                    ],
                    "correctIndex": 1,
                    "explanation": "Tulang rusuk membentuk sangkar rusuk yang berfungsi melindungi organ lembut di rongga dada iaitu peparu dan jantung."
                  },
                  {
                    "id": 2,
                    "question": "Organ manakah yang bertanggungjawab mengepam darah ke seluruh tubuh?",
                    "options": [
                      "Peparu",
                      "Buah Pinggang",
                      "Jantung",
                      "Hati"
                    ],
                    "correctIndex": 2,
                    "explanation": "Jantung bertindak seperti pam berotot yang mengepam darah beroksigen dan darah kurang oksigen ke seluruh sistem peredaran darah."
                  },
                  {
                    "id": 3,
                    "question": "Darah yang bergerak dari peparu ke jantung adalah darah yang kaya dengan...",
                    "options": [
                      "Gas Karbon Dioksida",
                      "Gas Oksigen",
                      "Gas Nitrogen",
                      "Bahan Kumuh Toksik"
                    ],
                    "correctIndex": 1,
                    "explanation": "Di peparu berlaku pertukaran gas. Darah menyerap gas oksigen dan menyingkirkan karbon dioksida sebelum dipam ke jantung untuk disebarkan ke tubuh."
                  }
                ]
              }
            },
            {
              "id": "t5-sn-c3",
              "number": "Unit 3",
              "title": "Haiwan: Kemandirian Spesies Haiwan",
              "summary": "Cara haiwan memastikan kelangsungan spesies mereka melalui adaptasi ciri khas dan tingkah laku khas.",
              "xpReward": 120,
              "badgeReward": "Sahabat Alam",
              "notes": {
                "title": "Unit 3: Kemandirian Spesies Haiwan",
                "readTime": "5 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Ciri Khas Haiwan Melindungi Diri daripada Musuh",
                    "content": "Haiwan dianugerahkan ciri khas seperti duri tajam (landak), cangkerang keras (penyu), sengat berbisa (kala jengking), dan penyamaran (sesumpah).",
                    "bulletPoints": [
                      "<strong>Duri Tajam:</strong> Landak dan ikan buntal",
                      "<strong>Bercangkerang:</strong> Kura-kura dan ketam",
                      "<strong>Sengat Berbisa:</strong> Tebuan dan ular",
                      "<strong>Penyamaran (Camouflage):</strong> Belalang daun dan sesumpah"
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t5-sn-c3",
                "title": "Kuiz Pantas: Kemandirian Haiwan",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 80,
                "questions": [
                  {
                    "id": 1,
                    "question": "Haiwan manakah melindungi diri dengan cara menyemburkan dakwat hitam?",
                    "options": [
                      "Sotong",
                      "Kura-kura",
                      "Ikan buntal",
                      "Landak"
                    ],
                    "correctIndex": 0,
                    "explanation": "Sotong menyemburkan cecair gelap untuk mengelirukan pemangsa semasa melarikan diri."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "t5-mt",
          "name": "Matematik (DLP)",
          "code": "MT-T5",
          "icon": "📐",
          "color": "from-blue-500 to-indigo-600",
          "theme": "blue",
          "hasDlp": true,
          "chaptersCount": 1,
          "description": "Nombor hingga 1 000 000, pecahan, wang (faedah mudah & kompaun), masa, dan ukuran geometri.",
          "chapters": [
            {
              "id": "t5-mt-c1",
              "number": "Unit 1",
              "title": "Nombor Hingga 1 000 000 (Satu Juta)",
              "summary": "Membaca, menulis, membanding dan membundar nombor hingga 1 000 000.",
              "xpReward": 100,
              "badgeReward": "Pakar Nombor",
              "notes": {
                "title": "Unit 1: Nombor dan Operasi Hingga 1 Juta",
                "readTime": "6 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Nilai Tempat dan Nilai Digit",
                    "content": "Pastikan faham perbezaan Nilai Tempat (perkataan e.g. Ratus Ribu) dan Nilai Digit (nombor e.g. 500 000).",
                    "bulletPoints": [
                      "Contoh Nombor: 742 819",
                      "Nilai tempat bagi digit 4 = Puluh Ribu",
                      "Nilai digit bagi digit 4 = 40 000"
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t5-mt-c1",
                "title": "Latihan Pantas Nilai Tempat",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 80,
                "questions": [
                  {
                    "id": 1,
                    "question": "Apakah nilai digit bagi 6 dalam nombor 562 301?",
                    "options": [
                      "600",
                      "6 000",
                      "60 000",
                      "600 000"
                    ],
                    "correctIndex": 2,
                    "explanation": "Digit 6 berada pada nilai tempat puluh ribu, jadi nilai digitnya ialah 60 000."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "t5-bm",
          "name": "Bahasa Melayu",
          "code": "BM-T5",
          "icon": "📚",
          "color": "from-amber-500 to-orange-600",
          "theme": "amber",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Tatabahasa UASA, ayat majmuk, peribahasa, membina ulasan dan karangan berformat.",
          "chapters": [
            {
              "id": "t5-bm-c1",
              "number": "Unit 1",
              "title": "Keluarga Ceria: Kata Hubung Pancangan & Format Ulasan",
              "summary": "Menguasai penggunaan kata hubung pancangan relatif, komplemen, dan keterangan dalam binaan ayat.",
              "xpReward": 100,
              "badgeReward": "Jaguh Bahasa T5",
              "notes": {
                "title": "Unit 1: Kata Hubung Pancangan",
                "readTime": "5 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Jenis Kata Hubung Pancangan",
                    "content": "Kata hubung digunakan untuk menghubungkan klausa utama dengan klausa kecil:",
                    "bulletPoints": [
                      "<strong>Relatif:</strong> 'yang' (Murid <em>yang</em> rajin itu mendapat anugerah)",
                      "<strong>Komplemen:</strong> 'bahawa', 'untuk' (Cikgu menegaskan <em>bahawa</em> disiplin itu penting)",
                      "<strong>Keterangan:</strong> 'kerana', 'supaya', 'walaupun', 'jika' (Ali membaca buku <em>supaya</em> lulus ujian)"
                    ],
                    "mnemonic": "💡 <strong>Formula Pantas:</strong> R-K-K (Relatif = Yang, Komplemen = Bahawa/Untuk, Keterangan = Sebab/Tujuan)!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t5-bm-c1",
                "title": "Kuiz Tatabahasa Kata Hubung",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 80,
                "questions": [
                  {
                    "id": 1,
                    "question": "Pilih kata hubung pancangan relatif yang tepat:",
                    "options": [
                      "kerana",
                      "bahawa",
                      "yang",
                      "supaya"
                    ],
                    "correctIndex": 2,
                    "explanation": "'Yang' ialah kata hubung pancangan relatif yang memancangkan klausa kecil kepada klausa utama."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "t5-bi",
          "name": "English (CEFR)",
          "code": "BI-T5",
          "icon": "🌍",
          "color": "from-sky-500 to-cyan-600",
          "theme": "sky",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Towns and cities, comparative and superlative adjectives, wild life, and learning world.",
          "chapters": [
            {
              "id": "t5-bi-c1",
              "number": "Unit 1",
              "title": "Towns and Cities (Comparative & Superlative)",
              "summary": "Comparing places using adjectives: bigger than, the biggest, more exciting than, the most exciting.",
              "xpReward": 100,
              "badgeReward": "English Explorer T5",
              "notes": {
                "title": "Unit 1: Comparing Adjectives",
                "readTime": "5 minutes",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Degrees of Comparison Rules",
                    "content": "We use comparative adjectives to compare 2 things, and superlative for 3 or more things:",
                    "bulletPoints": [
                      "<strong>Short adjectives (1 syllable):</strong> add -er / -est (fast → faster than → the fastest)",
                      "<strong>Ending in -y:</strong> change y to -ier / -iest (noisy → noisier than → the noisiest)",
                      "<strong>Long adjectives (2+ syllables):</strong> use more / most (peaceful → more peaceful than → the most peaceful)"
                    ],
                    "mnemonic": "💡 <strong>Rule:</strong> 1 syllable uses '-er/-est', long words use 'more/most'!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t5-bi-c1",
                "title": "Comparative & Superlative Quiz",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 80,
                "questions": [
                  {
                    "id": 1,
                    "question": "Kuala Lumpur is ______ than Putrajaya.",
                    "options": [
                      "busy",
                      "busier",
                      "busiest",
                      "more busy"
                    ],
                    "correctIndex": 1,
                    "explanation": "Busy ends in 'y', so it changes to 'busier than' when comparing two cities."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "t5-sej",
          "name": "Sejarah",
          "code": "SEJ-T5",
          "icon": "🏛️",
          "color": "from-red-500 to-rose-600",
          "theme": "rose",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Institusi Raja, Agama Islam, Bahasa Melayu, Penentangan Penjajah, dan Tokoh Kemerdekaan 1957.",
          "chapters": [
            {
              "id": "t5-sej-c4",
              "number": "Unit 4",
              "title": "Tokoh Pejuang Menentang Penjajah",
              "summary": "Mengkaji perjuangan pahlawan tanah air: Dol Said, Rentap, Mat Salleh, Tok Janggut, Tok Gajah dan Dato' Bahaman.",
              "xpReward": 150,
              "badgeReward": "Pahlawan Patriotik",
              "notes": {
                "title": "Unit 4: Pejuang Kedaulatan Tanah Air",
                "readTime": "7 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Tokoh dan Negeri Perjuangan",
                    "content": "Pahlawan tempatan bangkit menentang British kerana campur tangan, kehilangan kuasa, dan cukai membebankan:",
                    "bulletPoints": [
                      "<strong>Dol Said:</strong> Menentang British di Naning kerana enggan membayar cukai hasil satu persepuluh.",
                      "<strong>Rentap:</strong> Pahlawan Iban di Bukit Sadok, Sarawak dengan laungan 'Agi Idup Agi Ngelaban'.",
                      "<strong>Mat Salleh:</strong> Menentang Kompeni Berpiagam Borneo Utara (SBUB) di Tambunan, Sabah.",
                      "<strong>Tok Janggut:</strong> Menentang cukai British di Pasir Puteh, Kelantan."
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t5-sej-c4",
                "title": "Kuiz Tokoh Pejuang Tempatan",
                "timeLimitMinutes": 6,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Pahlawan manakah yang terkenal dengan laungan keramat 'Agi Idup, Agi Ngelaban' di Sarawak?",
                    "options": [
                      "Rentap",
                      "Dol Said",
                      "Mat Salleh",
                      "Tok Janggut"
                    ],
                    "correctIndex": 0,
                    "explanation": "Rentap (Libau) ialah pahlawan Iban yang gagah mempertahankan kubu Bukit Sadok di Sarawak."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "t5-rbt",
          "name": "Reka Bentuk & Teknologi",
          "code": "RBT-T5",
          "icon": "🛠️",
          "color": "from-amber-600 to-orange-700",
          "theme": "amber",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Teknologi rumah tangga, tenaga boleh baharu (solar), dan pengaturcaraan papan Micro:bit.",
          "chapters": [
            {
              "id": "t5-rbt-c1",
              "number": "Unit 1",
              "title": "Teknologi Pertanian Bandar (Sistem Takungan)",
              "summary": "Mengenal kaedah penanaman secara hidroponik dan akuaponik di kawasan ruang terhad bandar.",
              "xpReward": 100,
              "badgeReward": "Inovator Hijau",
              "notes": {
                "title": "Unit 1: Pertanian Bandar Moden",
                "readTime": "5 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Kaedah Penanaman Tanpa Tanah",
                    "content": "Pertanian bandar membolehkan sayur-sayuran ditanam di ruang sempit seperti balkoni rumah flat:",
                    "bulletPoints": [
                      "<strong>Hidroponik:</strong> Tanaman ditanam dalam larutan nutrien tanpa menggunakan tanah.",
                      "<strong>Akuaponik:</strong> Gabungan ternakan ikan akuakultur dengan tanaman hidroponik (najis ikan menjadi baja tanaman).",
                      "<strong>Aeroponik:</strong> Akar tanaman tergantung di udara dan disembur kabus larutan nutrien secara berkala."
                    ],
                    "mnemonic": "💡 <strong>Formula Ingat:</strong> Hidro = Air Nutrien, Akuaponik = Ikan + Sayur, Aero = Udara Kabus!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t5-rbt-c1",
                "title": "Kuiz Pertanian Bandar",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 80,
                "questions": [
                  {
                    "id": 1,
                    "question": "Sistem yang menggabungkan ternakan ikan dengan penanaman sayur-sayuran dikenali sebagai...",
                    "options": [
                      "Aeroponik",
                      "Akuaponik",
                      "Hidroponik takung",
                      "Pertanian tradisional"
                    ],
                    "correctIndex": 1,
                    "explanation": "Akuaponik ialah simbiosis akuakultur (ikan) dan hidroponik (tanaman) dalam satu kitaran ekologi."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "t5-pi",
          "name": "Pendidikan Islam",
          "code": "PI-T5",
          "icon": "🕌",
          "color": "from-teal-600 to-emerald-700",
          "theme": "teal",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Hari Kiamat, Solat Jumaat, Solat Sunat Aidilfitri/Aidiladha, dan Perjanjian Hudaibiyah.",
          "chapters": [
            {
              "id": "t5-pi-c1",
              "number": "Unit 1",
              "title": "Feqah: Makanan Halal Lagi Baik (Halalan Toyyiba)",
              "summary": "Memahami konsep makanan yang halal mengikut syariat serta bersih, berkhasiat dan selamat dimakan.",
              "xpReward": 100,
              "badgeReward": "Prihatin Halal",
              "notes": {
                "title": "Unit 1: Konsep Halalan Toyyiba",
                "readTime": "4 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Ciri Makanan Halalan Toyyiba",
                    "content": "Islam menitikberatkan pengambilan makanan yang bukan sahaja halal dari segi hukum, malah 'Toyyib' (baik dan berkhasiat):",
                    "bulletPoints": [
                      "<strong>Halal:</strong> Dibenarkan oleh syarak (bukan bangkai, darah mengalir, atau babi). Disembelih dengan nama Allah.",
                      "<strong>Toyyib:</strong> Bersih, tidak beracun, tidak basi, serta memberi manfaat kepada kesihatan akal dan fizikal.",
                      "<strong>Kesan Pemakanan:</strong> Membantu kecerdasan minda dan penerimaan doa oleh Allah SWT."
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t5-pi-c1",
                "title": "Kuiz Makanan Halalan Toyyiba",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 80,
                "questions": [
                  {
                    "id": 1,
                    "question": "Maksud perkataan 'Toyyiba' dalam konteks makanan ialah...",
                    "options": [
                      "Murah dan jimat",
                      "Baik, bersih dan berkhasiat",
                      "Berasal dari luar negara",
                      "Berperisa manis"
                    ],
                    "correctIndex": 1,
                    "explanation": "Toyyib bermaksud makanan yang baik, bersih, suci daripada kekotoran dan berkhasiat untuk tubuh badan."
                  }
                ]
              }
            }
          ]
        }
      ],
      "t6": [
        {
          "id": "t6-mt",
          "name": "Matematik (DLP)",
          "code": "MT-T6",
          "icon": "🧮",
          "color": "from-blue-600 to-cyan-600",
          "theme": "blue",
          "hasDlp": true,
          "chaptersCount": 2,
          "description": "Nombor hingga 10 000 000 (juta & pecahan juta), pecahan & peratus, wang (untung, rugi, diskaun, invois, aset), dan koordinat.",
          "chapters": [
            {
              "id": "t6-mt-c2",
              "number": "Unit 2",
              "title": "Pecahan, Perpuluhan & Peratus",
              "summary": "Operasi gabungan pecahan, penukaran nombor bercampur dan pengiraan peratusan untung/rugi.",
              "xpReward": 140,
              "badgeReward": "Kalkulator Kilat",
              "notes": {
                "title": "Unit 2: Pecahan dan Peratusan Mudah Faham",
                "readTime": "6 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Operasi Darab Pecahan",
                    "content": "Untuk mendarab pecahan, darabkan pengangka dengan pengangka, dan penyebut dengan penyebut.",
                    "bulletPoints": [
                      "Formula: (a/b) × (c/d) = (a × c) / (b × d)",
                      "Pastikan pecahan akhir dipermudahkan kepada bentuk termudah!"
                    ],
                    "mnemonic": "💡 Ingat: 'Atas darab Atas, Bawah darab Bawah, permudah jangan lupa!'"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t6-mt-c2",
                "title": "Kuiz Cabaran Pecahan & Peratus",
                "timeLimitMinutes": 8,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Berapakah 25% daripada RM 240?",
                    "options": [
                      "RM 48",
                      "RM 60",
                      "RM 80",
                      "RM 50"
                    ],
                    "correctIndex": 1,
                    "explanation": "25% = 1/4. Jadi 1/4 × RM 240 = RM 60."
                  }
                ]
              }
            },
            {
              "id": "t6-mt-c3",
              "number": "Unit 3",
              "title": "Wang & Celik Kewangan (Untung, Rugi & Diskaun)",
              "summary": "Formula harga kos, harga jual, untung, rugi, peratusan diskaun, invois, bil, dan aset/liabiliti.",
              "xpReward": 150,
              "badgeReward": "Jutawan Matematik",
              "notes": {
                "title": "Unit 3: Formula Celik Kewangan UASA",
                "readTime": "6 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Formula Untung & Rugi",
                    "content": "Memahami hubungan Harga Kos (harga beli/modal) dan Harga Jual:",
                    "bulletPoints": [
                      "<strong>Untung:</strong> Harga Jual - Harga Kos (apabila harga jual > harga kos)",
                      "<strong>Rugi:</strong> Harga Kos - Harga Jual (apabila harga kos > harga jual)",
                      "<strong>Diskaun:</strong> Potongan harga daripada harga asal",
                      "<strong>Aset:</strong> Harta yang dimiliki (wang simpanan, rumah, tanah)",
                      "<strong>Liabiliti:</strong> Tanggungan atau hutang (pinjaman bank, hutang kad kredit)"
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t6-mt-c3",
                "title": "Kuiz Kewangan UASA",
                "timeLimitMinutes": 6,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Peniaga membeli beg dengan modal RM 40 dan menjualnya pada harga RM 65. Berapakah untung yang diperoleh?",
                    "options": [
                      "RM 15",
                      "RM 20",
                      "RM 25",
                      "RM 105"
                    ],
                    "correctIndex": 2,
                    "explanation": "Untung = Harga Jual - Harga Kos = RM 65 - RM 40 = RM 25."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "t6-sn",
          "name": "Sains (DLP)",
          "code": "SN-T6",
          "icon": "🚀",
          "color": "from-emerald-500 to-teal-600",
          "theme": "emerald",
          "hasDlp": true,
          "chaptersCount": 1,
          "description": "Mikroorganisma, interaksi antara hidupan (simbiosis), pemuliharaan, daya geseran, kelajuan, dan pengawetan makanan.",
          "chapters": [
            {
              "id": "t6-sn-c2",
              "number": "Unit 2",
              "title": "Mikroorganisma: Hidupan Seni Misteri",
              "summary": "5 kumpulan mikroorganisma (Fungi, Protozoa, Alga, Bakteria, Virus), proses hidup dan kegunaannya.",
              "xpReward": 150,
              "badgeReward": "Pakar Mikrobiologi Cilik",
              "notes": {
                "title": "Unit 2: 5 Kumpulan Mikroorganisma & Proses Hidup",
                "readTime": "7 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "5 Kumpulan Mikroorganisma",
                    "content": "Mikroorganisma ialah hidupan seni yang tidak dapat dilihat dengan mata kasar kecuali menggunakan mikroskop:",
                    "bulletPoints": [
                      "1. <strong>Fungi:</strong> kulapuk, yis, penicillium (boleh dilihat sesetengahnya)",
                      "2. <strong>Protozoa:</strong> hidup dalam air (paramecium, amoeba)",
                      "3. <strong>Alga:</strong> mempunyai klorofil untuk fotosintesis (spirogyra, chlamydomonas)",
                      "4. <strong>Bakteria:</strong> wujud dalam pelbagai bentuk (salmonella, e. coli)",
                      "5. <strong>Virus:</strong> paling seni daripada semua mikroorganisma (HIV, influenza, coronavirus)"
                    ],
                    "mnemonic": "💡 <strong>Formula Ingat (F-P-A-B-V):</strong> <u>F</u>ungi, <u>P</u>rotozoa, <u>A</u>lga, <u>B</u>akteria, <u>V</u>irus!"
                  },
                  {
                    "heading": "Proses Hidup Mikroorganisma",
                    "content": "Mikroorganisma ialah benda hidup kerana:",
                    "bulletPoints": [
                      "• <strong>Bernafas:</strong> Membebaskan gas karbon dioksida (contoh: doh roti naik apabila ditambah yis).",
                      "• <strong>Bergerak:</strong> Mempunyai silia atau flagelum untuk berenang.",
                      "• <strong>Bertumbuh:</strong> Membiak dan membesar (contoh: kulapuk roti bertambah luas selepas beberapa hari)."
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t6-sn-c2",
                "title": "Kuiz Mikroorganisma UASA",
                "timeLimitMinutes": 8,
                "passingScore": 60,
                "xpPoints": 110,
                "questions": [
                  {
                    "id": 1,
                    "question": "Mikroorganisma manakah yang paling seni dan hanya boleh dilihat menggunakan mikroskop elektron?",
                    "options": [
                      "Virus",
                      "Bakteria",
                      "Fungi",
                      "Alga"
                    ],
                    "correctIndex": 0,
                    "explanation": "Virus ialah mikroorganisma yang paling seni dan paling ringkas binaannya."
                  },
                  {
                    "id": 2,
                    "question": "Mengapakah doh roti mengembang dan naik selepas diadun dengan yis dan dibiarkan selama 30 minit?",
                    "options": [
                      "Kerana yis mencair dalam tepung",
                      "Kerana yis bernafas dan membebaskan gas karbon dioksida",
                      "Kerana yis menyerap semua air dalam doh",
                      "Kerana yis mengeluarkan haba yang sangat panas"
                    ],
                    "correctIndex": 1,
                    "explanation": "Semasa proses penapaian, yis bernafas dan membebaskan gas karbon dioksida yang terperangkap dalam doh menyebabkannya naik."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "t6-bm",
          "name": "Bahasa Melayu",
          "code": "BM-T6",
          "icon": "📚",
          "color": "from-amber-500 to-orange-600",
          "theme": "amber",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Format UASA Bahagian A, B dan C, Karangan Respons Terbuka, Peribahasa dan Tatabahasa Lanjutan.",
          "chapters": [
            {
              "id": "t6-bm-c1",
              "number": "Unit 1",
              "title": "Pemimpin Idola: Penulisan Ulasan UASA & Nilai Murni",
              "summary": "Teknik menghasilkan ulasan cemerlang 60 patah perkataan berpandukan isi tersurat dan tersirat serta penanda wacana.",
              "xpReward": 100,
              "badgeReward": "Jaguh Penulisan T6",
              "notes": {
                "title": "Unit 1: Formula Ulasan UASA (Isi Tersurat & Tersirat)",
                "readTime": "5 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Format Menulis Ulasan UASA",
                    "content": "Ulasan yang cemerlang mestilah mengandungi pendahuluan ringkas, isi tersurat, isi tersirat (huraian/contoh), dan kesimpulan:",
                    "bulletPoints": [
                      "<strong>Isi Tersurat:</strong> Fakta yang jelas tercatat dalam bahan rangsangan (poster/grafik).",
                      "<strong>Isi Tersirat:</strong> Kesan, faedah, atau sebab yang difikirkan sendiri secara logik (gunakan kata hubung 'kerana' / 'agar').",
                      "<strong>Penanda Wacana:</strong> Selain itu, Di samping itu, Seterusnya, Akhir sekali, Kesimpulannya."
                    ],
                    "mnemonic": "💡 <strong>Formula Ulasan:</strong> S + T (Isi Tersurat dipadankan dengan Isi Tersirat menggunakan 'supaya/kerana')!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t6-bm-c1",
                "title": "Kuiz Teknik Penulisan Ulasan",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 80,
                "questions": [
                  {
                    "id": 1,
                    "question": "Apakah perbezaan utama antara isi tersurat dengan isi tersirat?",
                    "options": [
                      "Tersurat tiada dalam gambar, tersirat ada dalam teks",
                      "Tersurat dinyatakan secara langsung dalam bahan, tersirat merupakan huraian logik/kesan lanjutan",
                      "Tersurat untuk perenggan akhir, tersirat untuk pendahuluan",
                      "Tiada perbezaan sama sekali"
                    ],
                    "correctIndex": 1,
                    "explanation": "Isi tersurat boleh dibaca terus daripada bahan rangsangan, manakala tersirat ialah huraian dan impak tersirat."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "t6-bi",
          "name": "English (CEFR)",
          "code": "BI-T6",
          "icon": "🌍",
          "color": "from-sky-500 to-cyan-600",
          "theme": "sky",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "It's An Emergency (Past continuous tense), Life in the Past, Adventure Time, and Cool Jobs.",
          "chapters": [
            {
              "id": "t6-bi-c1",
              "number": "Unit 1",
              "title": "It's an Emergency! (Past Continuous & Past Simple)",
              "summary": "Mastering sentences with 'was/were + verb-ing' interrupted by a past action using 'when' and 'while'.",
              "xpReward": 100,
              "badgeReward": "English Master T6",
              "notes": {
                "title": "Unit 1: Past Continuous vs Past Simple",
                "readTime": "5 minutes",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Using When & While with Past Actions",
                    "content": "We use the Past Continuous for an action in progress in the past, and Past Simple for the action that interrupted it:",
                    "bulletPoints": [
                      "<strong>Form:</strong> Subject + was/were + verb-ing (I was sleeping, They were studying)",
                      "<strong>Interrupted Action:</strong> 'I was studying <em>when</em> the lights suddenly went out.'",
                      "<strong>Simultaneous Actions:</strong> '<em>While</em> Mum was cooking, Dad was washing the car.'"
                    ],
                    "mnemonic": "💡 <strong>Formula:</strong> Long action = was/were + ing; Short interruption = past verb (-ed)!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t6-bi-c1",
                "title": "Past Continuous Mastery Quiz",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 80,
                "questions": [
                  {
                    "id": 1,
                    "question": "They ______ football when it suddenly started to rain.",
                    "options": [
                      "is playing",
                      "were playing",
                      "was playing",
                      "played"
                    ],
                    "correctIndex": 1,
                    "explanation": "'They' is plural, so we use 'were playing' for the continuous action in the past."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "t6-sej",
          "name": "Sejarah",
          "code": "SEJ-T6",
          "icon": "🏛️",
          "color": "from-red-500 to-rose-600",
          "theme": "rose",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Pembentukan Malaysia 1963, 13 Negeri & 3 Wilayah Persekutuan, Rukun Negara, dan Pemimpin Perdana Menteri Malaysia.",
          "chapters": [
            {
              "id": "t6-sej-c1",
              "number": "Unit 1",
              "title": "Pembentukan Malaysia 1963",
              "summary": "Gagasan penyatuan Persekutuan Tanah Melayu, Singapura, Sarawak, dan Sabah pada 16 September 1963.",
              "xpReward": 160,
              "badgeReward": "Pencinta Sejarah Malaysia",
              "notes": {
                "title": "Unit 1: Sejarah Pembentukan Malaysia 16 September 1963",
                "readTime": "7 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Latar Belakang Gagasan Malaysia",
                    "content": "Tunku Abdul Rahman Putra Al-Haj mencadangkan pembentukan Malaysia pada 27 Mei 1961:",
                    "bulletPoints": [
                      "<strong>Matlamat Pembentukan:</strong> Menjamin keselamatan daripada ancaman komunis, mempercepat kemerdekaan Sarawak dan Sabah, serta mengimbangi populasi penduduk.",
                      "<strong>Suruhanjaya Cobbold (1962):</strong> Ditubuhkan untuk meninjau pandangan rakyat Sarawak dan Sabah.",
                      "<strong>Pengisytiharan Malaysia:</strong> Diisytiharkan secara rasmi pada <strong>16 September 1963</strong>."
                    ],
                    "mnemonic": "💡 <strong>Ingat Tarikh Keramat:</strong> 31 Ogos 1957 = Hari Kemerdekaan Tanah Melayu, 16 September 1963 = Hari Malaysia!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t6-sej-c1",
                "title": "Kuiz Hari Pembentukan Malaysia",
                "timeLimitMinutes": 6,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Bilakah Malaysia diisytiharkan secara rasmi?",
                    "options": [
                      "31 Ogos 1957",
                      "16 September 1963",
                      "27 Mei 1961",
                      "13 Mei 1969"
                    ],
                    "correctIndex": 1,
                    "explanation": "Hari Malaysia disambut pada 16 September setiap tahun sempena pembentukan Persekutuan Malaysia pada tahun 1963."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "t6-rbt",
          "name": "Reka Bentuk & Teknologi",
          "code": "RBT-T6",
          "icon": "🛠️",
          "color": "from-amber-600 to-orange-700",
          "theme": "amber",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Aplikasi elektromekanikal, asas robotik & sensor penderia, dan seni reka bentuk makanan (plating).",
          "chapters": [
            {
              "id": "t6-rbt-c1",
              "number": "Unit 1",
              "title": "Aplikasi Elektromekanikal & Pengaturcaraan Robotik",
              "summary": "Merekabentuk produk berfungsi menggunakan motor, geganti (relay), sensor infra-merah, dan kod blok.",
              "xpReward": 100,
              "badgeReward": "Jurutera Cilik T6",
              "notes": {
                "title": "Unit 1: Sistem Robotik & Elektromekanikal",
                "readTime": "5 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Komponen Asas Sistem Robotik",
                    "content": "Produk elektromekanikal menggabungkan elemen mekanikal (pergerakan fizikal) dengan litar elektrik dan kawalan algoritma:",
                    "bulletPoints": [
                      "<strong>Input:</strong> Penderia (sensor cahaya LDR, sensor halangan inframerah, suis tekan).",
                      "<strong>Proses:</strong> Papan mikropengawal (memproses arahan kod logik ATURCARA).",
                      "<strong>Output:</strong> Penggerak (motor arus terus DC, servo motor, lampu LED, pembaz buzzer)."
                    ],
                    "mnemonic": "💡 <strong>Kitaran Sistem:</strong> INPUT (Sensor) → PROSES (Mikropengawal) → OUTPUT (Motor/Buzzer)!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t6-rbt-c1",
                "title": "Kuiz Sistem Elektromekanikal",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 80,
                "questions": [
                  {
                    "id": 1,
                    "question": "Komponen yang bertindak sebagai pemproses arahan dalam sistem pengaturcaraan ialah...",
                    "options": [
                      "Penderia cahaya",
                      "Papan mikropengawal",
                      "Bateri 9V",
                      "Roda getah"
                    ],
                    "correctIndex": 1,
                    "explanation": "Papan mikropengawal berfungsi seperti otak kecil yang memproses input kod dan mengawal output peranti."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "t6-pi",
          "name": "Pendidikan Islam",
          "code": "PI-T6",
          "icon": "🕌",
          "color": "from-teal-600 to-emerald-700",
          "theme": "teal",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Beriman kepada Qada' dan Qadar, fardu kifayah pengurusan jenazah, ibadah zakat, dan Sirah Haji Wada'.",
          "chapters": [
            {
              "id": "t6-pi-c1",
              "number": "Unit 1",
              "title": "Akhlak: Adab Menuntut Ilmu & Menghormati Guru",
              "summary": "Menghayati adab mencari ilmu, menghargai jasa guru, dan berdisiplin semasa menelaah pelajaran.",
              "xpReward": 100,
              "badgeReward": "Murid Beradab",
              "notes": {
                "title": "Unit 1: Keberkatan Menuntut Ilmu",
                "readTime": "4 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Adab terhadap Guru dan Rakan",
                    "content": "Ilmu yang berkat diperolehi melalui hati yang ikhlas dan adab yang tinggi terhadap penyampai ilmu:",
                    "bulletPoints": [
                      "Memberi salam dan bertegur sapa dengan sopan.",
                      "Memberi tumpuan sepenuhnya semasa guru sedang mengajar.",
                      "Mendoakan kebaikan guru di dunia dan akhirat.",
                      "Menjauhi sifat sombong dan tidak merendah-rendahkan kefahaman rakan lain."
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-t6-pi-c1",
                "title": "Kuiz Adab Menuntut Ilmu",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 80,
                "questions": [
                  {
                    "id": 1,
                    "question": "Apakah faedah mengamalkan adab yang baik terhadap guru?",
                    "options": [
                      "Mendapat ganjaran wang tunai",
                      "Mendapat keberkatan ilmu dan dipermudahkan kefahaman",
                      "Dikecualikan daripada ujian sekolah",
                      "Boleh bermain semasa sesi kelas"
                    ],
                    "correctIndex": 1,
                    "explanation": "Adab yang terpuji kepada guru membuka pintu keberkatan ilmu dan ketenangan dalam pembelajaran."
                  }
                ]
              }
            }
          ]
        }
      ]
    }
  },
  "secondary": {
    "name": "Sekolah Menengah",
    "curriculum": "KSSM",
    "grades": [
      {
        "id": "f1",
        "name": "Tingkatan 1",
        "badge": "Menengah Rendah (UASA)"
      },
      {
        "id": "f2",
        "name": "Tingkatan 2",
        "badge": "Menengah Rendah (UASA)"
      },
      {
        "id": "f3",
        "name": "Tingkatan 3",
        "badge": "Menengah Rendah (UASA)"
      },
      {
        "id": "f4",
        "name": "Tingkatan 4",
        "badge": "SPM Menengah Atas",
        "isFeatured": true
      },
      {
        "id": "f5",
        "name": "Tingkatan 5",
        "badge": "SPM Menengah Atas",
        "isFeatured": true
      }
    ],
    "subjects": {
      "f4": [
        {
          "id": "f4-sej",
          "name": "Sejarah (SPM)",
          "code": "1249",
          "icon": "📜",
          "color": "from-amber-600 to-red-700",
          "theme": "amber",
          "hasDlp": false,
          "chaptersCount": 10,
          "description": "Subjek Wajib Lulus SPM: Warisan bangsa, nasionalisme, dan pembinaan negara merdeka.",
          "chapters": [
            {
              "id": "f4-sej-c1",
              "number": "Bab 1",
              "numberEn": "Chapter 1",
              "title": "Warisan Negara Bangsa",
              "titleEn": "Heritage of the Nation-State",
              "summary": "Ciri-ciri negara bangsa Kesultanan Melayu Melaka: kerajaan, rakyat, kedaulatan, wilayah pengaruh, undang-undang, lambang kebesaran.",
              "summaryEn": "Characteristics of Melaka Sultanate nation-state: government, people, sovereignty, territory, laws, regalia.",
              "xpReward": 120,
              "badgeReward": "Kuasai Warisan Negara Bangsa",
              "notes": {
                "title": "Warisan Negara Bangsa (Heritage of the Nation-State)",
                "readTime": "5 minit / 5 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Konsep Utama: Warisan Negara Bangsa",
                    "headingEn": "Key Concept: Heritage of the Nation-State",
                    "content": "Hukum Kanun Melaka dan Undang-Undang Laut Melaka menjamin keharmonian dan perdagangan maritim antarabangsa.",
                    "contentEn": "Hukum Kanun Melaka and Maritime Laws of Melaka guaranteed social harmony and trade.",
                    "bulletPoints": [
                      "<strong>Definisi:</strong> Hukum Kanun Melaka dan Undang-Undang Laut Melaka menjamin keharmonian dan perdagangan maritim antarabangsa.",
                      "<strong>Aplikasi Penting:</strong> Konsep ini kerap disoal dalam peperiksaan format rasmi KPM."
                    ],
                    "bulletPointsEn": [
                      "<strong>Definition:</strong> Hukum Kanun Melaka and Maritime Laws of Melaka guaranteed social harmony and trade.",
                      "<strong>Key Application:</strong> Frequently tested in official KPM examination formats."
                    ],
                    "mnemonic": "💡 <strong>Formula Pintar:</strong> 6 Ciri Negara Bangsa Melaka: Kerajaan, Rakyat, Kedaulatan, Wilayah, Undang-undang, Lambang!",
                    "mnemonicEn": "💡 <strong>Smart Tip:</strong> 6 Characteristics: Government, People, Sovereignty, Territory, Laws, Regalia!",
                    "examTip": "6 Ciri Negara Bangsa Melaka: Kerajaan, Rakyat, Kedaulatan, Wilayah, Undang-undang, Lambang!",
                    "examTipEn": "6 Characteristics: Government, People, Sovereignty, Territory, Laws, Regalia!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f4-sej-c1",
                "title": "Kuiz / Quiz: Warisan Negara Bangsa",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Apakah undang-undang bertulis yang mengawal hal ehwal pelayaran dan pelabuhan Kesultanan Melaka?",
                    "questionEn": "What was the written law governing maritime and trade affairs of the Melaka Sultanate?",
                    "options": [
                      "Hukum Kanun Melaka",
                      "Undang-Undang Laut Melaka",
                      "Perlembagaan Persekutuan",
                      "Adat Perpatih"
                    ],
                    "optionsEn": [
                      "Hukum Kanun Melaka",
                      "Maritime Laws of Melaka",
                      "Federal Constitution",
                      "Adat Perpatih"
                    ],
                    "correctIndex": 1,
                    "explanation": "Undang-Undang Laut Melaka mengandungi 24 fasal berkaitan nakhoda, berniaga dan keselamatan kapal.",
                    "explanationEn": "Maritime Laws of Melaka contained 24 clauses on navigational duties and trade."
                  }
                ]
              }
            },
            {
              "id": "f4-sej-c2",
              "number": "Bab 2",
              "numberEn": "Chapter 2",
              "title": "Kebangkitan Nasionalisme",
              "titleEn": "Rise of Nationalism",
              "summary": "Perkembangan idea nasionalisme di Barat, Asia, dan Asia Tenggara serta kesedaran di Tanah Melayu.",
              "summaryEn": "Development of nationalism in the West, Asia, Southeast Asia, and awakening in Malaya.",
              "xpReward": 120,
              "badgeReward": "Kuasai Kebangkitan Nasionalisme",
              "notes": {
                "title": "Kebangkitan Nasionalisme (Rise of Nationalism)",
                "readTime": "5 minit / 5 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Konsep Utama: Kebangkitan Nasionalisme",
                    "headingEn": "Key Concept: Rise of Nationalism",
                    "content": "Nasionalisme ialah perasaan cinta mendalam terhadap bangsa dan tanah air serta azam membebaskan negara daripada cengkaman penjajah.",
                    "contentEn": "Nationalism is deep devotion to one's nation and the determination to free it from colonial rule.",
                    "bulletPoints": [
                      "<strong>Definisi:</strong> Nasionalisme ialah perasaan cinta mendalam terhadap bangsa dan tanah air serta azam membebaskan negara daripada cengkaman penjajah.",
                      "<strong>Aplikasi Penting:</strong> Konsep ini kerap disoal dalam peperiksaan format rasmi KPM."
                    ],
                    "bulletPointsEn": [
                      "<strong>Definition:</strong> Nationalism is deep devotion to one's nation and the determination to free it from colonial rule.",
                      "<strong>Key Application:</strong> Frequently tested in official KPM examination formats."
                    ],
                    "mnemonic": "💡 <strong>Formula Pintar:</strong> Revolusi Keagungan (England 1688), Revolusi Amerika (1776), Revolusi Perancis (1789)!",
                    "mnemonicEn": "💡 <strong>Smart Tip:</strong> Glorious Revolution (1688), American Revolution (1776), French Revolution (1789)!",
                    "examTip": "Revolusi Keagungan (England 1688), Revolusi Amerika (1776), Revolusi Perancis (1789)!",
                    "examTipEn": "Glorious Revolution (1688), American Revolution (1776), French Revolution (1789)!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f4-sej-c2",
                "title": "Kuiz / Quiz: Kebangkitan Nasionalisme",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Siapakah tokoh yang mempelopori Revolusi Keagungan di England pada tahun 1688?",
                    "questionEn": "Who was the philosopher inspiring constitutional rights during the Glorious Revolution?",
                    "options": [
                      "John Locke",
                      "Karl Marx",
                      "Napoleon",
                      "George Washington"
                    ],
                    "optionsEn": [
                      "John Locke",
                      "Karl Marx",
                      "Napoleon",
                      "George Washington"
                    ],
                    "correctIndex": 0,
                    "explanation": "John Locke menegaskan prinsip raja berperlembagaan dan hak asasi manusia.",
                    "explanationEn": "John Locke advocated for constitutional government and natural rights."
                  }
                ]
              }
            },
            {
              "id": "f4-sej-c3",
              "number": "Bab 3",
              "numberEn": "Chapter 3",
              "title": "Konflik Dunia & Pendudukan Jepun",
              "titleEn": "World Conflicts & Japanese Occupation",
              "summary": "Perang Dunia Pertama, Perang Dunia Kedua di Eropah dan Asia Pasifik, serta pendudukan tentera Jepun di Tanah Melayu (1941-1945).",
              "summaryEn": "World War I, World War II in Europe & Asia-Pacific, and Japanese occupation of Malaya (1941-1945).",
              "xpReward": 120,
              "badgeReward": "Kuasai Konflik Dunia & Pendudukan Jepun",
              "notes": {
                "title": "Konflik Dunia & Pendudukan Jepun (World Conflicts & Japanese Occupation)",
                "readTime": "5 minit / 5 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Konsep Utama: Konflik Dunia & Pendudukan Jepun",
                    "headingEn": "Key Concept: World Conflicts & Japanese Occupation",
                    "content": "Jepun menggunakan slogan 'Asia untuk Orang Asia' dan 'Semangat Asia' untuk meraih sokongan sebelum memerintah secara kuku besi.",
                    "contentEn": "Japan utilized 'Asia for Asians' slogan before imposing harsh military administration.",
                    "bulletPoints": [
                      "<strong>Definisi:</strong> Jepun menggunakan slogan 'Asia untuk Orang Asia' dan 'Semangat Asia' untuk meraih sokongan sebelum memerintah secara kuku besi.",
                      "<strong>Aplikasi Penting:</strong> Konsep ini kerap disoal dalam peperiksaan format rasmi KPM."
                    ],
                    "bulletPointsEn": [
                      "<strong>Definition:</strong> Japan utilized 'Asia for Asians' slogan before imposing harsh military administration.",
                      "<strong>Key Application:</strong> Frequently tested in official KPM examination formats."
                    ],
                    "mnemonic": "💡 <strong>Formula Pintar:</strong> Operasi Jepun: Basikal & Kapal Terbang Zeros menawan Tanah Melayu dalam 70 hari!",
                    "mnemonicEn": "💡 <strong>Smart Tip:</strong> Japanese Operation: Bicycles & Zero fighters conquered Malaya in 70 days!",
                    "examTip": "Operasi Jepun: Basikal & Kapal Terbang Zeros menawan Tanah Melayu dalam 70 hari!",
                    "examTipEn": "Japanese Operation: Bicycles & Zero fighters conquered Malaya in 70 days!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f4-sej-c3",
                "title": "Kuiz / Quiz: Konflik Dunia & Pendudukan Jepun",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Apakah slogan propaganda yang digunakan oleh tentera Jepun untuk mempengaruhi penduduk tempatan?",
                    "questionEn": "What propaganda slogan was used by the Japanese army to influence locals?",
                    "options": [
                      "Asia untuk Orang Asia",
                      "Beban Orang Putih",
                      "Pax Britannica",
                      "Kemakmuran Eropah"
                    ],
                    "optionsEn": [
                      "Asia for Asians",
                      "White Man's Burden",
                      "Pax Britannica",
                      "European Prosperity"
                    ],
                    "correctIndex": 0,
                    "explanation": "Slogan ini bertujuan menyingkirkan pengaruh imperialis Barat dari Asia.",
                    "explanationEn": "This slogan was intended to expel Western imperial powers from Asia."
                  }
                ]
              }
            },
            {
              "id": "f4-sej-c4",
              "number": "Bab 4",
              "numberEn": "Chapter 4",
              "title": "Era Peralihan Kuasa British",
              "titleEn": "Era of British Power Transition",
              "summary": "Pentadbiran Tentera British (BMA), penubuhan Malayan Union 1946 dan bantahan besar-besaran orang Melayu pimpinan Dato' Onn Jaafar.",
              "summaryEn": "British Military Administration (BMA), introduction of Malayan Union 1946, and massive Malay opposition led by Dato' Onn Jaafar.",
              "xpReward": 120,
              "badgeReward": "Kuasai Era Peralihan Kuasa British",
              "notes": {
                "title": "Era Peralihan Kuasa British (Era of British Power Transition)",
                "readTime": "5 minit / 5 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Konsep Utama: Era Peralihan Kuasa British",
                    "headingEn": "Key Concept: Era of British Power Transition",
                    "content": "Malayan Union ditolak kerana menghapuskan kedaulatan Raja-raja Melayu dan syarat kerakyatan jus soli yang terlalu longgar.",
                    "contentEn": "Malayan Union was fiercely opposed because it eroded Sultans' sovereignty and introduced liberal jus soli citizenship.",
                    "bulletPoints": [
                      "<strong>Definisi:</strong> Malayan Union ditolak kerana menghapuskan kedaulatan Raja-raja Melayu dan syarat kerakyatan jus soli yang terlalu longgar.",
                      "<strong>Aplikasi Penting:</strong> Konsep ini kerap disoal dalam peperiksaan format rasmi KPM."
                    ],
                    "bulletPointsEn": [
                      "<strong>Definition:</strong> Malayan Union was fiercely opposed because it eroded Sultans' sovereignty and introduced liberal jus soli citizenship.",
                      "<strong>Key Application:</strong> Frequently tested in official KPM examination formats."
                    ],
                    "mnemonic": "💡 <strong>Formula Pintar:</strong> Bantahan Malayan Union melahirkan UMNO pada 11 Mei 1946!",
                    "mnemonicEn": "💡 <strong>Smart Tip:</strong> Opposition to Malayan Union led to birth of UMNO on 11 May 1946!",
                    "examTip": "Bantahan Malayan Union melahirkan UMNO pada 11 Mei 1946!",
                    "examTipEn": "Opposition to Malayan Union led to birth of UMNO on 11 May 1946!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f4-sej-c4",
                "title": "Kuiz / Quiz: Era Peralihan Kuasa British",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Siapakah wakil British yang memaksa Raja-raja Melayu menandatangani perjanjian Malayan Union?",
                    "questionEn": "Who was the British representative who coerced Malay Rulers to sign the Malayan Union treaty?",
                    "options": [
                      "Sir Harold MacMichael",
                      "Sir Edward Gent",
                      "Lord Mountbatten",
                      "Sir Stamford Raffles"
                    ],
                    "optionsEn": [
                      "Sir Harold MacMichael",
                      "Sir Edward Gent",
                      "Lord Mountbatten",
                      "Sir Stamford Raffles"
                    ],
                    "correctIndex": 0,
                    "explanation": "Sir Harold MacMichael menggunakan ugutan lucut takhta terhadap raja-raja.",
                    "explanationEn": "Sir Harold MacMichael used intimidation tactics against the Sultans."
                  }
                ]
              }
            },
            {
              "id": "f4-sej-c5",
              "number": "Bab 5",
              "numberEn": "Chapter 5",
              "title": "Persekutuan Tanah Melayu 1948",
              "titleEn": "Federation of Malaya 1948",
              "summary": "Penubuhan Jawatankuasa Kerja, Perjanjian Persekutuan Tanah Melayu 1948, dan pengembalian kuasa kedaulatan Raja-raja Melayu.",
              "summaryEn": "Formation of Working Committee, Federation of Malaya Agreement 1948, restoring Malay Rulers' sovereignty.",
              "xpReward": 120,
              "badgeReward": "Kuasai Persekutuan Tanah Melayu 1948",
              "notes": {
                "title": "Persekutuan Tanah Melayu 1948 (Federation of Malaya 1948)",
                "readTime": "5 minit / 5 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Konsep Utama: Persekutuan Tanah Melayu 1948",
                    "headingEn": "Key Concept: Federation of Malaya 1948",
                    "content": "PTM 1948 menggantikan Malayan Union, mengiktiraf kedudukan istimewa orang Melayu dan mengekalkan institusi beraja.",
                    "contentEn": "The 1948 Federation replaced Malayan Union, protecting Malay privileges and monarchies.",
                    "bulletPoints": [
                      "<strong>Definisi:</strong> PTM 1948 menggantikan Malayan Union, mengiktiraf kedudukan istimewa orang Melayu dan mengekalkan institusi beraja.",
                      "<strong>Aplikasi Penting:</strong> Konsep ini kerap disoal dalam peperiksaan format rasmi KPM."
                    ],
                    "bulletPointsEn": [
                      "<strong>Definition:</strong> The 1948 Federation replaced Malayan Union, protecting Malay privileges and monarchies.",
                      "<strong>Key Application:</strong> Frequently tested in official KPM examination formats."
                    ],
                    "mnemonic": "💡 <strong>Formula Pintar:</strong> PTM 1948 = Asas Pembentukan Persekutuan Moden Malaysia!",
                    "mnemonicEn": "💡 <strong>Smart Tip:</strong> PTM 1948 = Foundation of Modern Malaysian Federation!",
                    "examTip": "PTM 1948 = Asas Pembentukan Persekutuan Moden Malaysia!",
                    "examTipEn": "PTM 1948 = Foundation of Modern Malaysian Federation!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f4-sej-c5",
                "title": "Kuiz / Quiz: Persekutuan Tanah Melayu 1948",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Apakah dokumen yang menggantikan Malayan Union secara rasmi pada 1 Februari 1948?",
                    "questionEn": "What agreement officially replaced the Malayan Union on 1 February 1948?",
                    "options": [
                      "Perjanjian Persekutuan Tanah Melayu 1948",
                      "Perjanjian London",
                      "Perjanjian Pangkor",
                      "Perisytiharan Kemerdekaan"
                    ],
                    "optionsEn": [
                      "Federation of Malaya Agreement 1948",
                      "London Agreement",
                      "Pangkor Treaty",
                      "Independence Declaration"
                    ],
                    "correctIndex": 0,
                    "explanation": "PTM 1948 mengembalikan hak kedaulatan negeri-negeri Melayu.",
                    "explanationEn": "The 1948 Agreement restored the sovereign status of the Malay States."
                  }
                ]
              }
            },
            {
              "id": "f4-sej-c6",
              "number": "Bab 6",
              "numberEn": "Chapter 6",
              "title": "Ancaman Komunis & Darurat",
              "titleEn": "Communist Threat & Emergency",
              "summary": "Keganasan Parti Komunis Malaya (PKM), perisytiharan darurat (1948-1960), Rancangan Briggs (Kampung Baru) dan Perang Saraf Sir Gerald Templer.",
              "summaryEn": "Malayan Communist Party (MCP) insurgency, declaration of Emergency (1948-1960), Briggs Plan (New Villages), Templer's Hearts & Minds campaign.",
              "xpReward": 120,
              "badgeReward": "Kuasai Ancaman Komunis & Darurat",
              "notes": {
                "title": "Ancaman Komunis & Darurat (Communist Threat & Emergency)",
                "readTime": "5 minit / 5 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Konsep Utama: Ancaman Komunis & Darurat",
                    "headingEn": "Key Concept: Communist Threat & Emergency",
                    "content": "Rancangan Briggs memindahkan penduduk setinggan ke Kampung Baru berpagar untuk memutuskan bekalan makanan (Min Yuen) kepada pengganas komunis.",
                    "contentEn": "The Briggs Plan relocated squatters to fenced New Villages cutting off communist food supplies (Min Yuen).",
                    "bulletPoints": [
                      "<strong>Definisi:</strong> Rancangan Briggs memindahkan penduduk setinggan ke Kampung Baru berpagar untuk memutuskan bekalan makanan (Min Yuen) kepada pengganas komunis.",
                      "<strong>Aplikasi Penting:</strong> Konsep ini kerap disoal dalam peperiksaan format rasmi KPM."
                    ],
                    "bulletPointsEn": [
                      "<strong>Definition:</strong> The Briggs Plan relocated squatters to fenced New Villages cutting off communist food supplies (Min Yuen).",
                      "<strong>Key Application:</strong> Frequently tested in official KPM examination formats."
                    ],
                    "mnemonic": "💡 <strong>Formula Pintar:</strong> Rancangan Briggs: Kampung Baru + Kad Pengenalan + Sekatan Makanan!",
                    "mnemonicEn": "💡 <strong>Smart Tip:</strong> Briggs Plan: New Villages + National ID Cards + Food Control!",
                    "examTip": "Rancangan Briggs: Kampung Baru + Kad Pengenalan + Sekatan Makanan!",
                    "examTipEn": "Briggs Plan: New Villages + National ID Cards + Food Control!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f4-sej-c6",
                "title": "Kuiz / Quiz: Ancaman Komunis & Darurat",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Apakah strategi Sir Harold Briggs untuk memutuskan talian bekalan makanan kepada komunis?",
                    "questionEn": "What was Sir Harold Briggs' strategy to sever food supplies to communists?",
                    "options": [
                      "Penubuhan Kampung Baru",
                      "Pengeboman udara",
                      "Gencatan senjata",
                      "Perjanjian Baling"
                    ],
                    "optionsEn": [
                      "Setting up New Villages",
                      "Aerial bombing",
                      "Ceasefire",
                      "Baling Talks"
                    ],
                    "correctIndex": 0,
                    "explanation": "Kampung Baru memisahkan penduduk daripada sayap pembekal komunis (Min Yuen).",
                    "explanationEn": "New Villages physically isolated civilians from communist Min Yuen suppliers."
                  }
                ]
              }
            },
            {
              "id": "f4-sej-c7",
              "number": "Bab 7",
              "numberEn": "Chapter 7",
              "title": "Usaha ke Arah Kemerdekaan",
              "titleEn": "Efforts Toward Independence",
              "summary": "Penubuhan Jawatankuasa Hubungan Antara Kaum (CLC), Sistem Ahli 1951, pembentukan parti-parti politik dan pakatan Parti Perikatan.",
              "summaryEn": "Communities Liaison Committee (CLC), Member System 1951, growth of political parties, and Alliance Party.",
              "xpReward": 120,
              "badgeReward": "Kuasai Usaha ke Arah Kemerdekaan",
              "notes": {
                "title": "Usaha ke Arah Kemerdekaan (Efforts Toward Independence)",
                "readTime": "5 minit / 5 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Konsep Utama: Usaha ke Arah Kemerdekaan",
                    "headingEn": "Key Concept: Efforts Toward Independence",
                    "content": "Sistem Ahli melatih pemimpin tempatan dalam hal ehwal pentadbiran kerajaan ke arah berkerajaan sendiri.",
                    "contentEn": "The Member System trained local leaders in ministerial portfolios toward self-governance.",
                    "bulletPoints": [
                      "<strong>Definisi:</strong> Sistem Ahli melatih pemimpin tempatan dalam hal ehwal pentadbiran kerajaan ke arah berkerajaan sendiri.",
                      "<strong>Aplikasi Penting:</strong> Konsep ini kerap disoal dalam peperiksaan format rasmi KPM."
                    ],
                    "bulletPointsEn": [
                      "<strong>Definition:</strong> The Member System trained local leaders in ministerial portfolios toward self-governance.",
                      "<strong>Key Application:</strong> Frequently tested in official KPM examination formats."
                    ],
                    "mnemonic": "💡 <strong>Formula Pintar:</strong> Sistem Ahli = Latihan Menjadi Menteri Pertama Tanah Melayu!",
                    "mnemonicEn": "💡 <strong>Smart Tip:</strong> Member System = Early Cabinet Training for Malayan Leaders!",
                    "examTip": "Sistem Ahli = Latihan Menjadi Menteri Pertama Tanah Melayu!",
                    "examTipEn": "Member System = Early Cabinet Training for Malayan Leaders!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f4-sej-c7",
                "title": "Kuiz / Quiz: Usaha ke Arah Kemerdekaan",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Apakah tujuan utama Sistem Ahli diperkenalkan oleh British pada tahun 1951?",
                    "questionEn": "What was the main purpose of the Member System introduced in 1951?",
                    "options": [
                      "Melatih pemimpin tempatan berkerajaan sendiri",
                      "Mengutip cukai tambahan",
                      "Membina jalan kereta api",
                      "Merekrut tentera"
                    ],
                    "optionsEn": [
                      "Train local leaders in self-governance",
                      "Collect taxes",
                      "Build railways",
                      "Recruit troops"
                    ],
                    "correctIndex": 0,
                    "explanation": "Sistem Ahli memberi portfolio separa menteri kepada tokoh tempatan.",
                    "explanationEn": "The Member System granted ministerial-style portfolios to local figures."
                  }
                ]
              }
            },
            {
              "id": "f4-sej-c8",
              "number": "Bab 8",
              "numberEn": "Chapter 8",
              "title": "Pilihan Raya 1955",
              "titleEn": "Elections of 1955",
              "summary": "Pilihan Raya Perbandaran Kuala Lumpur 1952, Pilihan Raya Majlis Perundangan Persekutuan 1955 (Parti Perikatan menang 51 daripada 52 kerusi).",
              "summaryEn": "KL Municipal Election 1952, Federal Legislative Council Election 1955 (Alliance won 51 out of 52 seats).",
              "xpReward": 120,
              "badgeReward": "Kuasai Pilihan Raya 1955",
              "notes": {
                "title": "Pilihan Raya 1955 (Elections of 1955)",
                "readTime": "5 minit / 5 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Konsep Utama: Pilihan Raya 1955",
                    "headingEn": "Key Concept: Elections of 1955",
                    "content": "Kemenangan besar Parti Perikatan membolehkan Tunku Abdul Rahman dilantik sebagai Ketua Menteri pertama dan menuntut kemerdekaan.",
                    "contentEn": "The landslide victory enabled Tunku Abdul Rahman to become Chief Minister and negotiate independence.",
                    "bulletPoints": [
                      "<strong>Definisi:</strong> Kemenangan besar Parti Perikatan membolehkan Tunku Abdul Rahman dilantik sebagai Ketua Menteri pertama dan menuntut kemerdekaan.",
                      "<strong>Aplikasi Penting:</strong> Konsep ini kerap disoal dalam peperiksaan format rasmi KPM."
                    ],
                    "bulletPointsEn": [
                      "<strong>Definition:</strong> The landslide victory enabled Tunku Abdul Rahman to become Chief Minister and negotiate independence.",
                      "<strong>Key Application:</strong> Frequently tested in official KPM examination formats."
                    ],
                    "mnemonic": "💡 <strong>Formula Pintar:</strong> Perikatan sapu 51 / 52 kerusi: Bukti perpaduan Melayu, Cina & India!",
                    "mnemonicEn": "💡 <strong>Smart Tip:</strong> Alliance won 51 / 52 seats: Testament of multi-ethnic unity!",
                    "examTip": "Perikatan sapu 51 / 52 kerusi: Bukti perpaduan Melayu, Cina & India!",
                    "examTipEn": "Alliance won 51 / 52 seats: Testament of multi-ethnic unity!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f4-sej-c8",
                "title": "Kuiz / Quiz: Pilihan Raya 1955",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Berapakah jumlah kerusi yang dimenangi oleh Parti Perikatan dalam Pilihan Raya 1955?",
                    "questionEn": "How many seats did the Alliance Party win in the 1955 Federal Election?",
                    "options": [
                      "51 daripada 52 kerusi",
                      "25 kerusi",
                      "40 kerusi",
                      "52 kerusi penuh"
                    ],
                    "optionsEn": [
                      "51 out of 52 seats",
                      "25 seats",
                      "40 seats",
                      "All 52 seats"
                    ],
                    "correctIndex": 0,
                    "explanation": "Parti Perikatan menang 51 daripada 52 kerusi yang dipertandingkan.",
                    "explanationEn": "The Alliance Party won 51 out of 52 contested seats."
                  }
                ]
              }
            },
            {
              "id": "f4-sej-c9",
              "number": "Bab 9",
              "numberEn": "Chapter 9",
              "title": "Perlembagaan Persekutuan Tanah Melayu 1957",
              "titleEn": "Constitution of the Federation of Malaya 1957",
              "summary": "Peranan Suruhanjaya Reid merangka perlembagaan, memorandum parti politik, dan persetujuan kontrak sosial.",
              "summaryEn": "Role of Reid Commission drafting constitution, party memorandums, and social contract agreement.",
              "xpReward": 120,
              "badgeReward": "Kuasai Perlembagaan Persekutuan Tanah Melayu 1957",
              "notes": {
                "title": "Perlembagaan Persekutuan Tanah Melayu 1957 (Constitution of the Federation of Malaya 1957)",
                "readTime": "5 minit / 5 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Konsep Utama: Perlembagaan Persekutuan Tanah Melayu 1957",
                    "headingEn": "Key Concept: Constitution of the Federation of Malaya 1957",
                    "content": "Suruhanjaya Reid dipengerusikan Lord Reid merangka perlembagaan berasaskan pemerintahan demokrasi dan hak istimewa Melayu.",
                    "contentEn": "Reid Commission chaired by Lord Reid drafted constitution balancing democracy and special rights.",
                    "bulletPoints": [
                      "<strong>Definisi:</strong> Suruhanjaya Reid dipengerusikan Lord Reid merangka perlembagaan berasaskan pemerintahan demokrasi dan hak istimewa Melayu.",
                      "<strong>Aplikasi Penting:</strong> Konsep ini kerap disoal dalam peperiksaan format rasmi KPM."
                    ],
                    "bulletPointsEn": [
                      "<strong>Definition:</strong> Reid Commission chaired by Lord Reid drafted constitution balancing democracy and special rights.",
                      "<strong>Key Application:</strong> Frequently tested in official KPM examination formats."
                    ],
                    "mnemonic": "💡 <strong>Formula Pintar:</strong> Reid Commission: 5 Pakar Undang-undang Merangka Perlembagaan Merdeka!",
                    "mnemonicEn": "💡 <strong>Smart Tip:</strong> Reid Commission: 5 International Legal Experts Drafted Merdeka Constitution!",
                    "examTip": "Reid Commission: 5 Pakar Undang-undang Merangka Perlembagaan Merdeka!",
                    "examTipEn": "Reid Commission: 5 International Legal Experts Drafted Merdeka Constitution!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f4-sej-c9",
                "title": "Kuiz / Quiz: Perlembagaan Persekutuan Tanah Melayu 1957",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Siapakah yang mempengerusikan suruhanjaya perangka perlembagaan Persekutuan Tanah Melayu 1957?",
                    "questionEn": "Who chaired the commission that drafted the 1957 Malayan Constitution?",
                    "options": [
                      "Lord Reid",
                      "Lord Cobbold",
                      "Sir Harold MacMichael",
                      "Dato' Onn Jaafar"
                    ],
                    "optionsEn": [
                      "Lord Reid",
                      "Lord Cobbold",
                      "Sir Harold MacMichael",
                      "Dato' Onn Jaafar"
                    ],
                    "correctIndex": 0,
                    "explanation": "Lord Reid mempengerusikan jawatankuasa pakar perundangan bebas Komanwel.",
                    "explanationEn": "Lord Reid chaired the independent Commonwealth legal panel."
                  }
                ]
              }
            },
            {
              "id": "f4-sej-c10",
              "number": "Bab 10",
              "numberEn": "Chapter 10",
              "title": "Pemasyhuran Kemerdekaan",
              "titleEn": "Proclamation of Independence",
              "summary": "Detik bersejarah 31 Ogos 1957 di Stadium Merdeka, laungan 'Merdeka' 7 kali oleh Tunku Abdul Rahman, bendera Union Jack diturunkan.",
              "summaryEn": "Historic moment of 31 August 1957 at Stadium Merdeka, 7 shouts of 'Merdeka' by Tunku, lowering of Union Jack.",
              "xpReward": 120,
              "badgeReward": "Kuasai Pemasyhuran Kemerdekaan",
              "notes": {
                "title": "Pemasyhuran Kemerdekaan (Proclamation of Independence)",
                "readTime": "5 minit / 5 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Konsep Utama: Pemasyhuran Kemerdekaan",
                    "headingEn": "Key Concept: Proclamation of Independence",
                    "content": "Kemerdekaan menandakan berakhirnya era penjajahan British dan lahirnya sebuah negara berdaulat Persekutuan Tanah Melayu.",
                    "contentEn": "Independence marked the end of British colonial era and the birth of a sovereign Malaya.",
                    "bulletPoints": [
                      "<strong>Definisi:</strong> Kemerdekaan menandakan berakhirnya era penjajahan British dan lahirnya sebuah negara berdaulat Persekutuan Tanah Melayu.",
                      "<strong>Aplikasi Penting:</strong> Konsep ini kerap disoal dalam peperiksaan format rasmi KPM."
                    ],
                    "bulletPointsEn": [
                      "<strong>Definition:</strong> Independence marked the end of British colonial era and the birth of a sovereign Malaya.",
                      "<strong>Key Application:</strong> Frequently tested in official KPM examination formats."
                    ],
                    "mnemonic": "💡 <strong>Formula Pintar:</strong> Laungan 'MERDEKA!' 7 Kali Menggegarkan Stadium Merdeka 31 Ogos 1957!",
                    "mnemonicEn": "💡 <strong>Smart Tip:</strong> Seven shouts of 'MERDEKA!' echoed across Stadium Merdeka on 31 August 1957!",
                    "examTip": "Laungan 'MERDEKA!' 7 Kali Menggegarkan Stadium Merdeka 31 Ogos 1957!",
                    "examTipEn": "Seven shouts of 'MERDEKA!' echoed across Stadium Merdeka on 31 August 1957!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f4-sej-c10",
                "title": "Kuiz / Quiz: Pemasyhuran Kemerdekaan",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Berapa kalikah Tunku Abdul Rahman melaungkan perkataan 'Merdeka' di Stadium Merdeka?",
                    "questionEn": "How many times did Tunku Abdul Rahman chant 'Merdeka' at Stadium Merdeka?",
                    "options": [
                      "7 kali",
                      "3 kali",
                      "5 kali",
                      "10 kali"
                    ],
                    "optionsEn": [
                      "7 times",
                      "3 times",
                      "5 times",
                      "10 times"
                    ],
                    "correctIndex": 0,
                    "explanation": "Tunku melaungkan perkataan keramat 'Merdeka' sebanyak 7 kali bersama rakyat.",
                    "explanationEn": "Tunku chanted 'Merdeka' 7 times in unison with the nation."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f4-mt",
          "name": "Matematik (SPM)",
          "code": "1449",
          "icon": "📈",
          "color": "from-blue-600 to-indigo-800",
          "theme": "indigo",
          "hasDlp": true,
          "chaptersCount": 10,
          "description": "Sukatan rasmi KSSM Matematik Tingkatan 4 KPM (10 Bab Lengkap): Dari fungsi kuadratik, asas nombor, teori graf hingga pengurusan kewangan praktikal.",
          "chapters": [
            {
              "id": "f4-mt-c1",
              "number": "Bab 1",
              "numberEn": "Chapter 1",
              "title": "Fungsi dan Persamaan Kuadratik dalam Satu Pemboleh Ubah",
              "titleEn": "Quadratic Functions and Equations in One Variable",
              "summary": "Bentuk am f(x) = ax² + bx + c. Memahami lengkungan parabola, titik maksimum/minimum, paksi simetri dan penyelesaian punca persamaan kuadratik melalui situasi lontaran bola, jambatan gantung dan reka bentuk air pancut.",
              "summaryEn": "General form f(x) = ax² + bx + c. Understanding parabolic curves, vertex/maximum/minimum points, axis of symmetry and solving quadratic roots through basketball shots, suspension bridges and fountains.",
              "xpReward": 120,
              "video": {
                "title": "Animasi Parabola & Situasi Realiti Kuadratik",
                "duration": "14:20",
                "presenter": "Cikgu Hafiz (Guru Cemerlang Matematik)",
                "embedUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
                "highlights": [
                  "01:15 - Apa itu Parabola & Bentuk Senyum/Sedih",
                  "04:30 - Kesan Nilai 'a', 'b', dan 'c' pada Graf",
                  "08:45 - Contoh Realiti: Lontaran Bola Keranjang ke Jaring",
                  "11:20 - Kaedah Pemfaktoran Pantas Guna Kalkulator"
                ]
              },
              "notes": {
                "readTime": "8 minit",
                "readTimeEn": "8 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "1. Pengenalan Asas: Apakah Itu Fungsi & Ungkapan Kuadratik?",
                    "headingEn": "1. Foundational Concept: What are Quadratic Expressions & Functions?",
                    "content": "Mari kita mulakan dari sifar seperti anda tidak pernah belajar algebra sebelum ini. Dalam matematik, 'Kuadratik' merujuk kepada sebarang ungkapan yang mempunyai satu pemboleh ubah (contohnya x) di mana KUASA TERTINGGI pemboleh ubah itu ialah DUA (x²). Jika kuasa tertingginya ialah 1 (contohnya 3x + 5), itu ialah persamaan Linear (garis lurus). Tetapi apabila terdapat x², garisan itu tidak lagi lurus—ia akan melengkung secara licin membentuk lengkungan parabola yang simetri!",
                    "contentEn": "Let's start from zero. 'Quadratic' refers to any expression containing a single variable (e.g. x) where the HIGHEST POWER is strictly TWO (x²). If the highest power is 1 (e.g. 3x + 5), it is Linear (straight line). But once x² is present, the line bends into a smooth, symmetrical curve called a parabola!",
                    "bulletPoints": [
                      "Bentuk Am: f(x) = ax² + bx + c atau ax² + bx + c = 0.",
                      "Syarat Mutlak: Nilai 'a' TIDAK BOLEH sama dengan sifar (a ≠ 0). Jika a = 0, sebutan x² hilang dan ia menjadi linear biasa!",
                      "Pemboleh Ubah: Hanya satu pemboleh ubah sahaja yang terlibat (biasanya x, t, atau y).",
                      "Pekali (Coefficients): 'a' ialah nombor di hadapan x², 'b' ialah nombor di hadapan x, dan 'c' ialah pemalar (nombor tunggal tanpa x)."
                    ],
                    "bulletPointsEn": [
                      "General Form: f(x) = ax² + bx + c or ax² + bx + c = 0.",
                      "Absolute Rule: 'a' CANNOT be zero (a ≠ 0). If a = 0, the x² term vanishes and it becomes a linear equation!",
                      "Single Variable: Only one variable is involved (typically x, t, or y).",
                      "Coefficients: 'a' precedes x², 'b' precedes x, and 'c' is the constant."
                    ]
                  },
                  {
                    "heading": "2. Analogi Dunia Sebenar: Lontaran Bola Keranjang, Pancutan Air & Jambatan Gantung",
                    "headingEn": "2. Real-Life Analogy: Basketball Trajectory, Water Fountains & Suspension Bridges",
                    "content": "Di manakah kita melihat kuadratik dalam kehidupan sebenar setiap hari? Bayangkan anda berdiri di gelanggang bola keranjang dan melontar bola ke jaring. Bola itu tidak bergerak dalam garis lurus tajam. Graviti bumi menarik bola ke bawah semasa ia bergerak ke hadapan, menghasilkan lengkungan parabola yang sempurna! Air pancutan di taman tasik KLCC, lampu depan kereta yang memantulkan cahaya, dan kabel gantung Jambatan Pulau Pinang semuanya dibina menggunakan formula kuadratik.",
                    "contentEn": "Where do quadratics exist in everyday life? When you shoot a basketball, gravity pulls it downward while forward momentum carries it, tracing an exact mathematical parabola! Water jets at KLCC fountains, car headlight reflectors, and suspension cables on the Penang Bridge are all engineered using quadratic equations.",
                    "bulletPoints": [
                      "Kesan Nilai 'a' (Bentuk Graf): Jika a > 0 (Positif), graf berbentuk U 'SENYUM' 😊 dengan Titik MINIMUM di bahagian paling bawah.",
                      "Jika a < 0 (Negatif): Graf berbentuk Bukit 'SEDIH' ☹️ dengan Titik MAKSIMUM di bahagian paling atas (seperti lontaran bola).",
                      "Kesan Nilai 'b' (Kedudukan Paksi Simetri): Paksi simetri ditentukan oleh rumus x = -b / (2a).",
                      "Kesan Nilai 'c' (Pintasan-y): Nilai 'c' ialah titik di mana graf memotong paksi menegak (ketinggian awal bola semasa dilontar)."
                    ],
                    "bulletPointsEn": [
                      "Effect of 'a': When a > 0 (Positive), graph is a smiling U-shape 😊 with a MINIMUM point at the bottom.",
                      "When a < 0 (Negative): Graph is a frowning hill shape ☹️ with a MAXIMUM peak point (like a ball shot).",
                      "Effect of 'b': Determines axis of symmetry line: x = -b / (2a).",
                      "Effect of 'c': The y-intercept where the curve crosses the vertical axis (initial release height)."
                    ],
                    "mnemonic": "💡 Mnemonic Mudah: 'a Positif = Poket Penuh Senyum 😊 (Titik Minima)', 'a Negatif = Muram Sedih Bukit ☹️ (Titik Maksima)'.",
                    "mnemonicEn": "💡 Visual Mnemonic: 'Positive a = Smiling U (Minimum valley)', 'Negative a = Frowning hill (Maximum peak)'."
                  },
                  {
                    "heading": "3. Pembedahan Langkah Demi Langkah: Kaedah Mencari Punca Persamaan",
                    "headingEn": "3. Step-by-Step Breakdown: Solving Roots of Quadratic Equations",
                    "content": "Apakah maksud 'Punca' (Roots)? Punca ialah nilai-nilai x yang menyebabkan f(x) = 0 (iaitu titik di mana graf memotong paksi-x). Bayangkan anda ingin tahu saat ke berapakah bola keranjang itu mencecah lantai semula.",
                    "contentEn": "What are 'Roots'? Roots are values of x satisfying f(x) = 0 (where the parabola crosses the horizontal x-axis).",
                    "bulletPoints": [
                      "Kaedah 1 (Pemfaktoran / Darab Silang): Susun dalam bentuk am ax² + bx + c = 0. Faktorkan kepada dua kurungan: (x - p)(x - q) = 0. Maka x = p atau x = q.",
                      "Kaedah 2 (Rumus Kuadratik Universal): x = [-b ± √(b² - 4ac)] / (2a). Rumus ini berfungsi untuk SEMUA persamaan, termasuk punca bernombor perpuluhan!",
                      "Penyempurnaan Kuasa Dua (Completing the Square): Mengubah bentuk am kepada f(x) = a(x - h)² + k, di mana koordinat titik pusingan ialah (h, k)."
                    ],
                    "bulletPointsEn": [
                      "Method 1 (Factorisation): Arrange into ax² + bx + c = 0. Factor into (x - p)(x - q) = 0. Roots: x = p, x = q.",
                      "Method 2 (Quadratic Formula): x = [-b ± √(b² - 4ac)] / (2a). Solves any quadratic equation.",
                      "Method 3 (Completing the Square): Express as f(x) = a(x - h)² + k, yielding vertex coordinates (h, k)."
                    ]
                  },
                  {
                    "heading": "4. Contoh Masalah Kehidupan Sebenar Diselesaikan A-Z",
                    "headingEn": "4. Real-World Practical Worked Example A-Z",
                    "content": "Sebuah taman permainan berbentuk segi empat tepat mempunyai panjang (2x + 3) meter dan lebar x meter. Diberi luas keseluruhan taman tersebut ialah 35 m². Cari nilai x dan tentukan perimeter taman itu.",
                    "contentEn": "A rectangular park has a length of (2x + 3) meters and width of x meters. Given the total area is 35 m², find x and calculate the perimeter.",
                    "bulletPoints": [
                      "Langkah 1 (Bina Persamaan): Luas = Panjang × Lebar → x(2x + 3) = 35.",
                      "Langkah 2 (Kembangkan & Bentuk Am): 2x² + 3x - 35 = 0.",
                      "Langkah 3 (Pemfaktoran): Cari faktor bagi 2 × (-35) = -70 yang menghasilkan hasil tambah +3. Nombornya ialah +10 dan -7. Faktorkan: (2x - 7)(x + 5) = 0.",
                      "Langkah 4 (Selesaikan Nilai x): 2x - 7 = 0 → x = 3.5 meter, ATAU x + 5 = 0 → x = -5 (Abaikan kerana panjang tidak boleh negatif!).",
                      "Langkah 5 (Jawapan Akhir): Lebar = 3.5 m, Panjang = 2(3.5) + 3 = 10 m. Perimeter = 2(10 + 3.5) = 27 meter!"
                    ],
                    "bulletPointsEn": [
                      "Step 1 (Formulate Equation): Area = Length × Width → x(2x + 3) = 35.",
                      "Step 2 (Expand to General Form): 2x² + 3x - 35 = 0.",
                      "Step 3 (Factorisation): (2x - 7)(x + 5) = 0.",
                      "Step 4 (Extract Roots): x = 3.5 m, or x = -5 (Reject negative length!).",
                      "Step 5 (Final Solution): Width = 3.5 m, Length = 10 m. Perimeter = 27 m!"
                    ],
                    "examTip": "⚠️ Kesilapan Lazim Murid SPM: Murid kerap terlupa menolak punca negatif apabila soalan melibatkan dimensi fizikal (panjang, luas, masa, usia). Jangan lupa tulis 'abaikan nilai negatif' untuk markah penuh!"
                  },
                  {
                    "heading": "5. Ringkasan Pantas Peperiksaan & Kata Kunci",
                    "headingEn": "5. Exam Masterclass Summary & Core Keywords",
                    "content": "Perkara wajib diingat sebelum melangkah ke dewan peperiksaan SPM / UASA:",
                    "contentEn": "Essential checklist before entering your examination hall:",
                    "bulletPoints": [
                      "Paksi Simetri sentiasa melalui titik puncak: x = -b / (2a).",
                      "Pintasan-y sentiasa sama dengan nilai pemalar c (iaitu f(0) = c).",
                      "Pemfaktoran kalkulator fx-570: Gunakan [MODE] → [EQN] → [Degree 2] untuk menyemak punca, tetapi pastikan anda menulis kurungan pemfaktoran di atas kertas jawapan!"
                    ],
                    "bulletPointsEn": [
                      "Axis of symmetry always passes through vertex: x = -b / (2a).",
                      "y-intercept is always equal to constant c (f(0) = c).",
                      "Scientific calculator check: Use MODE → EQN → Degree 2 to verify roots, but always show factorisation brackets on your exam paper!"
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "f4-mt-q1",
                "title": "Kuiz Interaktif Bab 1: Fungsi & Persamaan Kuadratik",
                "titleEn": "Interactive Quiz Chapter 1: Quadratic Functions & Equations",
                "timeLimitMinutes": 10,
                "xpPoints": 100,
                "questions": [
                  {
                    "question": "Sebuah roket mercun dilancarkan ke udara dengan fungsi ketinggian h(t) = -4t² + 16t + 1, di mana h ialah ketinggian (meter) dan t ialah masa (saat). Adakah graf ini mempunyai titik maksimum atau titik minimum, dan mengapa?",
                    "questionEn": "A toy rocket is launched with height function h(t) = -4t² + 16t + 1, where h is height (meters) and t is time (seconds). Does this graph have a maximum or minimum point, and why?",
                    "options": [
                      "Titik Maksimum, kerana nilai pekali a = -4 (negatif, graf bentuk bukit)",
                      "Titik Minimum, kerana roket bermula dari bawah",
                      "Titik Minimum, kerana nilai pemalar c = 1",
                      "Tiada titik maksimum atau minimum kerana masa sentiasa bergerak"
                    ],
                    "optionsEn": [
                      "Maximum Point, because coefficient a = -4 (negative, hill-shaped curve)",
                      "Minimum Point, because the rocket starts from the ground",
                      "Minimum Point, because constant c = 1",
                      "Neither, because time always increases"
                    ],
                    "correctIndex": 0,
                    "explanation": "Nilai pekali a menentukan bentuk graf. Kerana a = -4 (< 0), bentuk graf ialah bukit/frown, yang mencapai titik tertinggi iaitu Titik Maksimum.",
                    "explanationEn": "The coefficient 'a' determines graph curvature. Because a = -4 (< 0), the curve is an inverted hill, achieving a peak known as the Maximum Point."
                  },
                  {
                    "question": "Selesaikan persamaan kuadratik x² - 5x + 6 = 0 menggunakan kaedah pemfaktoran. Apakah punca-puncanya?",
                    "questionEn": "Solve the quadratic equation x² - 5x + 6 = 0 using factorisation. What are its roots?",
                    "options": [
                      "x = 2 dan x = 3",
                      "x = -2 dan x = -3",
                      "x = 1 dan x = 6",
                      "x = -1 dan x = -6"
                    ],
                    "optionsEn": [
                      "x = 2 and x = 3",
                      "x = -2 and x = -3",
                      "x = 1 and x = 6",
                      "x = -1 and x = -6"
                    ],
                    "correctIndex": 0,
                    "explanation": "x² - 5x + 6 = (x - 2)(x - 3) = 0. Maka x - 2 = 0 → x = 2, dan x - 3 = 0 → x = 3.",
                    "explanationEn": "x² - 5x + 6 = (x - 2)(x - 3) = 0. Therefore x - 2 = 0 → x = 2, and x - 3 = 0 → x = 3."
                  }
                ]
              }
            },
            {
              "id": "f4-mt-c2",
              "number": "Bab 2",
              "numberEn": "Chapter 2",
              "title": "Asas Nombor",
              "titleEn": "Number Bases",
              "summary": "Memahami bagaimana sistem nombor selain Asas 10 berfungsi dalam dunia digital (Asas 2, 5, 8, dan 9). Penukaran nombor antara asas berbeza, nilai tempat, nilai digit dan operasi tambah tolak berasaskan kod komputer dan storan data.",
              "summaryEn": "Understanding how numeral systems other than Base 10 power our digital world (Base 2, 5, 8, 9). Converting between bases, place values, digit values, and arithmetic operations based on computer bits and data storage.",
              "xpReward": 120,
              "video": {
                "title": "Rahsia Asas Nombor: Bahasa Komputer & Telefon Pintar",
                "duration": "13:45",
                "presenter": "Cikgu Hafiz (Guru Cemerlang Matematik)",
                "embedUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
                "highlights": [
                  "01:00 - Mengapa Manusia Guna Asas 10 (10 Jari)",
                  "04:10 - Asas 2 (Binari): Bagaimana Cip Komputer Membaca 0 dan 1",
                  "07:30 - Cara Membaca Nilai Tempat Menggunakan Kuasa Asas",
                  "10:15 - Kaedah Pembahagian Berulang untuk Tukar Asas"
                ]
              },
              "notes": {
                "readTime": "7 minit",
                "readTimeEn": "7 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "1. Pengenalan Asas: Mengapa Wujud Asas Nombor Selain Asas 10?",
                    "headingEn": "1. Fundamental Concept: Why Do Bases Other Than Base 10 Exist?",
                    "content": "Kita manusia mengira menggunakan Asas 10 (Sistem Perpuluhan) kerana kita mempunyai 10 jari tangan (digit 0, 1, 2, 3, 4, 5, 6, 7, 8, 9). Tetapi di dalam telefon pintar, cip komputer dan kad SIM, tiada jari manusia! Di dalamnya hanya ada berbilion-bilion suis elektrik mikroskopik (transistor) yang hanya ada dua keadaan: MATI (0) atau HIDUP (1). Itulah ASAS 2 (Sistem Binari). Asas nombor ialah cara sistem berbeza menulis kuantiti yang sama menggunakan set simbol digit yang berlainan.",
                    "contentEn": "Humans count in Base 10 because we have 10 fingers (digits 0 to 9). But microprocessors only understand two electrical states: OFF (0) or ON (1). That is BASE 2 (Binary). Number bases represent the same physical quantities using different sets of digit symbols.",
                    "bulletPoints": [
                      "Asas 2 (Binari): Hanya digit 0 dan 1 (Bahasa komputer & cip digital).",
                      "Asas 5 (Kuinari): Hanya digit 0, 1, 2, 3, 4.",
                      "Asas 8 (Oktal): Hanya digit 0, 1, 2, 3, 4, 5, 6, 7 (Digunakan dalam alamat storan memori).",
                      "Asas 10 (Perpuluhan): Digit 0 hingga 9 (Sistem mata wang dan timbangan manusia).",
                      "Hukum Asas Emas: Digit dalam sebarang Asas n TIDAK BOLEH sama atau melebihi n!"
                    ],
                    "bulletPointsEn": [
                      "Base 2 (Binary): Only digits 0 and 1 (Computer architecture & bit storage).",
                      "Base 5: Only digits 0, 1, 2, 3, 4.",
                      "Base 8 (Octal): Only digits 0 to 7.",
                      "Base 10 (Decimal): Digits 0 to 9 (Everyday human counting).",
                      "Golden Base Law: Digits in any Base n can NEVER equal or exceed n!"
                    ]
                  },
                  {
                    "heading": "2. Nilai Tempat & Nilai Digit Langkah Demi Langkah",
                    "headingEn": "2. Place Values & Digit Values Step-by-Step",
                    "content": "Bagaimanakah kita membaca nilai sesuatu digit dalam asas yang berbeza? Sama seperti Asas 10 mempunyai tempat Sa (10⁰), Puluh (10¹), Ratus (10²), Ribu (10³)—semua asas lain menggunakan KUASA ASAS tersebut dari kanan ke kiri!",
                    "contentEn": "How do we evaluate digits in different bases? Just as Base 10 uses units (10⁰), tens (10¹), hundreds (10²)—all bases use POWERS OF THE BASE moving right to left!",
                    "bulletPoints": [
                      "Nilai Tempat: Ditulis sebagai n⁰, n¹, n², n³, n⁴ dari kanan ke kiri.",
                      "Contoh dalam Asas 2: Nilai tempat dari kanan ialah 2⁰=1, 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32, 2⁶=64, 2⁷=128.",
                      "Nilai Digit: Nilai digit = Digit tersebut didarabkan dengan nilai tempatnya. Contoh: Dalam nombor 10110₂, digit 1 paling kiri bernilai 1 × 2⁴ = 16₁₀."
                    ],
                    "bulletPointsEn": [
                      "Place Value: Written as n⁰, n¹, n², n³, n⁴ from right to left.",
                      "Powers of 2: 2⁰=1, 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32, 2⁶=64, 2⁷=128.",
                      "Digit Value: Multiply digit by its place value. Example: In 10110₂, the leftmost 1 represents 1 × 2⁴ = 16₁₀."
                    ]
                  },
                  {
                    "heading": "3. Kaedah Penukaran Asas A-Z: Pembahagian Berulang & Pencerakinan",
                    "headingEn": "3. Conversion Protocols A-Z: Repeated Division & Expansion",
                    "content": "Terdapat dua arah penukaran utama:",
                    "contentEn": "Two primary conversion directions exist:",
                    "bulletPoints": [
                      "Arah 1 (Asas Lain → Asas 10): Cerakinkan mengikut hasil tambah pendaraban digit dengan nilai tempatnya. Contoh: 342₅ = (3×5²) + (4×5¹) + (2×5⁰) = 75 + 20 + 2 = 97₁₀.",
                      "Arah 2 (Asas 10 → Asas Lain): Gunakan Kaedah Pembahagian Berulang dengan asas sasaran. Bahagikan berulang kali dan BACA BAKI DARI BAWAH KE ATAS!",
                      "Arah 3 (Asas p → Asas q): Tukarkan Asas p kepada Asas 10 terlebih dahulu (jambatan perantaraan), kemudian tukarkan Asas 10 tersebut kepada Asas q."
                    ],
                    "bulletPointsEn": [
                      "Direction 1 (Other Base → Base 10): Expand as sum of digit multiplied by place value.",
                      "Direction 2 (Base 10 → Other Base): Repeated division by target base, reading remainders from BOTTOM TO TOP!",
                      "Direction 3 (Base p → Base q): Convert Base p to Base 10 first (the bridge), then convert to Base q."
                    ],
                    "examTip": "⚠️ Kesilapan Lazim: Murid kerap membaca baki pembahagian dari ATAS ke BAWAH. Sentiasa baca dari BAWAH ke ATAS untuk mendapatkan susunan digit yang betul!"
                  },
                  {
                    "heading": "4. Operasi Tambah dan Tolak Nombor Pelbagai Asas",
                    "headingEn": "4. Addition & Subtraction in Various Bases",
                    "content": "Menambah nombor dalam asas n sama seperti dalam Asas 10, cuma bila jumlah melebihi atau sama dengan n, kita 'kumpul semula' (bawa 1 ke depan bernilai n):",
                    "contentEn": "Adding numbers in Base n follows standard column arithmetic, but regrouping occurs at value n:",
                    "bulletPoints": [
                      "Operasi Tambah: Dalam Asas 2, 1 + 1 = 10₂ (tulis 0 di bawah, bawa 1 ke depan). 1 + 1 + 1 = 11₂ (tulis 1 di bawah, bawa 1 ke depan).",
                      "Operasi Tolak: Bila meminjam dari lajur sebelah dalam Asas n, nilai yang dipinjam ialah n (bukan 10!). Contoh: Dalam Asas 5, pinjam 1 memberi nilai 5."
                    ],
                    "bulletPointsEn": [
                      "Addition: In Base 2, 1 + 1 = 10₂ (write 0, carry 1). 1 + 1 + 1 = 11₂ (write 1, carry 1).",
                      "Subtraction: Borrowing from the next column brings value n (not 10!). In Base 5, borrowing brings 5."
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "f4-mt-q2",
                "title": "Kuiz Interaktif Bab 2: Asas Nombor",
                "titleEn": "Interactive Quiz Chapter 2: Number Bases",
                "timeLimitMinutes": 10,
                "xpPoints": 100,
                "questions": [
                  {
                    "question": "Apakah nilai digit bagi digit 3 dalam nombor 342₅ dalam Asas 10?",
                    "questionEn": "What is the digit value of 3 in the number 342₅ in Base 10?",
                    "options": [
                      "75",
                      "300",
                      "15",
                      "25"
                    ],
                    "optionsEn": [
                      "75",
                      "300",
                      "15",
                      "25"
                    ],
                    "correctIndex": 0,
                    "explanation": "Nilai tempat bagi digit 3 dalam 342₅ ialah 5². Oleh itu, nilai digit = 3 × 5² = 3 × 25 = 75.",
                    "explanationEn": "The place value of 3 in 342₅ is 5². Thus, digit value = 3 × 5² = 3 × 25 = 75."
                  },
                  {
                    "question": "Tukarkan nombor binari 1011₂ kepada nombor dalam Asas 10.",
                    "questionEn": "Convert the binary number 1011₂ to a number in Base 10.",
                    "options": [
                      "11",
                      "13",
                      "9",
                      "15"
                    ],
                    "optionsEn": [
                      "11",
                      "13",
                      "9",
                      "15"
                    ],
                    "correctIndex": 0,
                    "explanation": "1011₂ = (1×2³) + (0×2²) + (1×2¹) + (1×2⁰) = 8 + 0 + 2 + 1 = 11.",
                    "explanationEn": "1011₂ = (1×2³) + (0×2²) + (1×2¹) + (1×2⁰) = 8 + 0 + 2 + 1 = 11."
                  }
                ]
              }
            },
            {
              "id": "f4-mt-c3",
              "number": "Bab 3",
              "numberEn": "Chapter 3",
              "title": "Penaakulan Logik",
              "titleEn": "Logical Reasoning",
              "summary": "Memahami pernyataan matematik, penafian (~p), implikasi 'Jika p maka q', akas, songsangan, kontrapositif dan hujah deduktif/induktif melalui situasi undang-undang, perjanjian kontrak dan syarat harian.",
              "summaryEn": "Understanding mathematical statements, negations (~p), implications 'If p then q', converse, inverse, contrapositive, and deductive/inductive arguments through everyday contracts, rules and detective investigations.",
              "xpReward": 120,
              "video": {
                "title": "Logik Matematik: Berfikir Seperti Peguam & Detektif",
                "duration": "15:10",
                "presenter": "Cikgu Hafiz (Guru Cemerlang Matematik)",
                "embedUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
                "highlights": [
                  "01:20 - Apa itu Pernyataan (Benar vs Palsu)",
                  "04:50 - Perbezaan Kunci 'DAN' vs 'ATAU'",
                  "08:15 - 'Jika p maka q': Akas, Songsangan & Kontrapositif",
                  "12:00 - Hujah Sahih & Munasabah vs Hujah Kuat"
                ]
              },
              "notes": {
                "readTime": "8 minit",
                "readTimeEn": "8 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "1. Analogi Dunia Sebenar: Syarat Ibu & Perjanjian Kontrak",
                    "headingEn": "1. Real-Life Analogy: Mom's Rules & Contract Agreements",
                    "content": "Bayangkan ibu anda menetapkan syarat: 'JIKA anda mendapat A dalam Matematik, MAKA ibu akan belikan kasut sukan baharu.' Ini adalah contoh Implikasi Matematik ('Jika p, maka q'). p ialah Antejadian (sebab), q ialah Akibat (hasil). Dalam kehidupan, kita membuat keputusan berdasarkan logik deduktif yang sahih untuk membuktikan sama ada sesuatu dakwaan itu benar atau palsu tanpa sebarang keraguan.",
                    "contentEn": "Imagine your mom makes a deal: 'IF you get an A in Mathematics, THEN I will buy you new running shoes.' This is an Implication in logic ('If p, then q'). p is the Antecedent (cause), q is the Consequent (result). In life, we make sound decisions using deductive logic to verify whether statements are objectively true or false beyond reasonable doubt.",
                    "bulletPoints": [
                      "Pernyataan: Ayat yang sama ada BENAR atau PALSU, tetapi bukan kedua-duanya. (Ayat tanya atau arahan seperti 'Sila kemas meja!' BUKAN pernyataan).",
                      "Operasi 'DAN': Hanya BENAR jika KEDUA-DUA bahagian benar serentak.",
                      "Operasi 'ATAU': BENAR jika SEKURANG-KURANGNYA SATU bahagian benar.",
                      "Akas: 'Jika q, maka p' (terbalikkan kedudukan).",
                      "Songsangan: 'Jika bukan p, maka bukan q' (~p → ~q).",
                      "Kontrapositif: 'Jika bukan q, maka bukan p' (~q → ~p)."
                    ],
                    "bulletPointsEn": [
                      "Statement: A sentence that is either strictly TRUE or FALSE, but not both. (Questions or commands like 'Clean the table!' are NOT statements).",
                      "Conjunction 'AND': TRUE only if BOTH components are true simultaneously.",
                      "Disjunction 'OR': TRUE if AT LEAST ONE component is true.",
                      "Converse: 'If q, then p' (swapping antecedent and consequent).",
                      "Inverse: 'If not p, then not q' (~p → ~q).",
                      "Contrapositive: 'If not q, then not p' (~q → ~p)."
                    ],
                    "mnemonic": "💡 Rahsia Kontrapositif: Jika pernyataan asal Benar, maka KONTRA POSITIFnya PASTI Benar secara automatik!",
                    "mnemonicEn": "💡 Contrapositive Truth: If the original implication is True, its CONTRAPOSITIVE is GUARANTEED to be True as well!"
                  },
                  {
                    "heading": "2. Hujah Deduktif vs Induktif: Sah & Munasabah",
                    "headingEn": "2. Deductive vs Inductive Arguments: Validity & Soundness",
                    "content": "Bagaimana membezakan hujah yang kuat dengan hujah yang lemah?",
                    "contentEn": "How do you distinguish valid logical arguments from faulty ones?",
                    "bulletPoints": [
                      "Deduktif (Umum ke Khusus): Bermula daripada peraturan am yang universal untuk membuat kesimpulan bagi kes tertentu. Contoh: Semua mamalia menyusukan anak. Kucing ialah mamalia. Kesimpulan: Kucing menyusukan anak (Hujah Sahih dan Munasabah).",
                      "Induktif (Khusus ke Umum): Bermula daripada pemerhatian beberapa sampel untuk membuat kesimpulan umum. Contoh: Burung gagak A hitam, burung gagak B hitam. Kesimpulan: Semua burung gagak berwarna hitam.",
                      "Tiga Bentuk Hujah Deduktif: Bentuk I (Semua A adalah B), Bentuk II (Jika p maka q; p benar maka q benar), Bentuk III (Jika p maka q; bukan q benar maka bukan p benar)."
                    ],
                    "bulletPointsEn": [
                      "Deductive (General to Specific): Starts with a universal rule to conclude a specific case. (e.g. All mammals produce milk. A cat is a mammal. Conclusion: Cats produce milk - Valid & Sound).",
                      "Inductive (Specific to General): Studies specific observations to form a generalized rule. (e.g. Crow A is black, Crow B is black. Conclusion: All crows are black).",
                      "Three Deductive Forms: Form I (All A are B), Form II (If p then q; p is true therefore q is true), Form III (If p then q; not q is true therefore not p is true)."
                    ],
                    "examTip": "⚠️ Perangkap SPM: Soalan minta 'Tentukan sama ada hujah ini munasabah'. Hujah munasabah jika ia SAHIH dan SEMUA premisnya BENAR di dunia sebenar!"
                  }
                ]
              },
              "quiz": {
                "id": "f4-mt-q3",
                "title": "Kuiz Interaktif Bab 3: Penaakulan Logik",
                "titleEn": "Interactive Quiz Chapter 3: Logical Reasoning",
                "timeLimitMinutes": 10,
                "xpPoints": 100,
                "questions": [
                  {
                    "question": "Diberi pernyataan: 'Jika x = 3, maka 2x + 1 = 7'. Apakah Akas (Converse) bagi pernyataan tersebut?",
                    "questionEn": "Given the statement: 'If x = 3, then 2x + 1 = 7'. What is the Converse of this statement?",
                    "options": [
                      "Jika 2x + 1 = 7, maka x = 3",
                      "Jika x ≠ 3, maka 2x + 1 ≠ 7",
                      "Jika 2x + 1 ≠ 7, maka x ≠ 3",
                      "x = 3 jika dan hanya jika 2x + 1 = 7"
                    ],
                    "optionsEn": [
                      "If 2x + 1 = 7, then x = 3",
                      "If x ≠ 3, then 2x + 1 ≠ 7",
                      "If 2x + 1 ≠ 7, then x ≠ 3",
                      "x = 3 if and only if 2x + 1 = 7"
                    ],
                    "correctIndex": 0,
                    "explanation": "Akas dibina dengan menukar tempat antejadian dan akibat: Jika q, maka p. Jadi 'Jika 2x + 1 = 7, maka x = 3'.",
                    "explanationEn": "Converse is formed by swapping the antecedent and consequent: If q, then p. Thus 'If 2x + 1 = 7, then x = 3'."
                  },
                  {
                    "question": "Tentukan nilai kebenaran bagi pernyataan majmuk berikut: '5 ialah nombor perdana DAN 5 ialah nombor genap'.",
                    "questionEn": "Determine the truth value of the compound statement: '5 is a prime number AND 5 is an even number'.",
                    "options": [
                      "Palsu, kerana 5 bukan nombor genap walaupun ia nombor perdana (operasi DAN memerlukan kedua-duanya benar)",
                      "Benar, kerana 5 ialah nombor perdana",
                      "Benar, kerana 5 ialah nombor bulat positif",
                      "Tidak dapat ditentukan tanpa persamaan"
                    ],
                    "optionsEn": [
                      "False, because 5 is not even even though it is prime (AND requires both to be true)",
                      "True, because 5 is a prime number",
                      "True, because 5 is a positive integer",
                      "Cannot be determined without an equation"
                    ],
                    "correctIndex": 0,
                    "explanation": "Untuk operasi 'DAN' (Conjunction), pernyataan hanya benar jika KEDUA-DUA bahagian benar. Kerana '5 nombor genap' adalah palsu, seluruh pernyataan majmuk adalah PALSU.",
                    "explanationEn": "For an 'AND' compound statement, it is true ONLY if both parts are true. Since '5 is even' is false, the entire statement is FALSE."
                  }
                ]
              }
            },
            {
              "id": "f4-mt-c4",
              "number": "Bab 4",
              "numberEn": "Chapter 4",
              "title": "Operasi Set",
              "titleEn": "Operations on Sets",
              "summary": "Persilangan set (A ∩ B), kesatuan set (A ∪ B), dan pelengkap gabungan set (A ∩ B)' menggunakan gambar rajah Venn. Menyelesaikan masalah kehidupan harian seperti pilihan makanan kantin, kelab kokurikulum dan data kaji selidik.",
              "summaryEn": "Intersection of sets (A ∩ B), union of sets (A ∪ B), and complement of combined sets (A ∩ B)' using Venn diagrams. Solving real-world problems like canteen food preferences, school club memberships, and survey analytics.",
              "xpReward": 120,
              "video": {
                "title": "Gambar Rajah Venn & Operasi Set: Cara Lorek Paling Pantas",
                "duration": "12:50",
                "presenter": "Cikgu Hafiz (Guru Cemerlang Matematik)",
                "embedUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
                "highlights": [
                  "01:10 - Gambar Rajah Venn & Konsep Set Semesta (ξ)",
                  "04:20 - Teknik Bernombor Kawasan (Nombor Rahsia)",
                  "07:35 - Persilangan ∩ vs Kesatuan ∪",
                  "10:15 - Aplikasi Masalah Sebenar: Tinjauan Minat Murid"
                ]
              },
              "notes": {
                "readTime": "7 minit",
                "readTimeEn": "7 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "1. Analogi Dunia Sebenar: Grup Kawan & Peminat Muzik",
                    "headingEn": "1. Real-Life Analogy: Friend Circles & Music Fans",
                    "content": "Bayangkan anda membuat kaji selidik dalam kelas 4 Dinamik. Set A ialah murid yang meminati lagu K-Pop (Blackpink/BTS). Set B ialah murid yang meminati lagu Rock. PERSILANGAN (A ∩ B) ialah kawan yang meminati KEDUA-DUA genre muzik tersebut serentak! KESATUAN (A ∪ B) pula ialah semua murid yang meminati sekurang-kurangnya satu daripada genre muzik itu. Dan PELENGKAP (A ∪ B)' ialah murid yang tidak meminati kedua-duanya langsung (mereka suka dengar podcast).",
                    "contentEn": "Imagine conducting a survey in your classroom. Set A represents students who love K-Pop. Set B represents students who love Rock music. The INTERSECTION (A ∩ B) consists of students who love BOTH genres at the same time! The UNION (A ∪ B) represents everyone who loves at least one genre. And the COMPLEMENT (A ∪ B)' represents students outside who don't listen to either (they only listen to podcasts).",
                    "bulletPoints": [
                      "Set Semesta (ξ): Kesemua ahli yang dipertimbangkan dalam perbincangan.",
                      "Persilangan (A ∩ B): Unsur yang dipunyai BERSAMA oleh kedua-dua set A dan set B.",
                      "Kesatuan (A ∪ B): Gabungan SEMUA unsur dari set A dan set B tanpa mengulangi ahli yang sama.",
                      "Pelengkap (A'): Semua unsur dalam set semesta ξ yang BUKAN ahli set A."
                    ],
                    "bulletPointsEn": [
                      "Universal Set (ξ): The entire universe of elements being considered.",
                      "Intersection (A ∩ B): Elements shared in COMMON by both set A and set B.",
                      "Union (A ∪ B): Combining ALL elements belonging to set A or set B or both.",
                      "Complement (A'): All elements in the universal set ξ that do NOT belong to set A."
                    ],
                    "mnemonic": "💡 Simbol Mudah: ∩ nampak macam 'N' = Kongsi Bersama (Intersection), ∪ nampak macam 'U' = Gabung Semua (Union).",
                    "mnemonicEn": "💡 Symbol Trick: ∩ looks like 'n' = iNtersection (Shared), ∪ looks like 'U' = Union (United all)."
                  },
                  {
                    "heading": "2. Teknik Rahsia SPM: Kaedah Bernombor Kawasan",
                    "headingEn": "2. Secret SPM Exam Technique: Area Numbering Method",
                    "content": "Bila soalan meminta anda melorek rantau kompleks seperti (A ∪ B)' ∩ C, jangan teka! Gunakan teknik nombor ajaib ini:",
                    "contentEn": "When exam questions ask you to shade complex regions like (A ∪ B)' ∩ C, don't guess! Use this foolproof numbering technique:",
                    "bulletPoints": [
                      "Langkah 1: Labelkan setiap ruang kosong dalam gambar rajah Venn dengan nombor kecil: 1, 2, 3, 4, 5, 6, 7, 8.",
                      "Langkah 2: Tulis nombor kawasan bagi setiap kurungan.",
                      "Langkah 3: Cari nombor yang sepadan mengikut operasi (∩ ambil nombor sama, ∪ kumpulkan semua nombor).",
                      "Langkah 4: Lorekkan kawasan yang mempunyai nombor jawapan akhir tersebut. Anda pasti dapat markah penuh 3/3!"
                    ],
                    "bulletPointsEn": [
                      "Step 1: Label every enclosed region in the Venn diagram with small numbers: 1, 2, 3, 4, 5, 6, 7, 8.",
                      "Step 2: List the region numbers for each bracketed expression.",
                      "Step 3: Combine or find matches according to operation (∩ finds common numbers, ∪ merges all).",
                      "Step 4: Shade the regions holding the final resulting numbers. Guaranteed 3/3 marks!"
                    ],
                    "examTip": "Sentiasa gunakan pembaris atau pensel apabila melorek. Lorekan mestilah kemas dan tidak melebihi garisan sempadan set."
                  }
                ]
              },
              "quiz": {
                "id": "f4-mt-q4",
                "title": "Kuiz Interaktif Bab 4: Operasi Set",
                "titleEn": "Interactive Quiz Chapter 4: Operations on Sets",
                "timeLimitMinutes": 10,
                "xpPoints": 100,
                "questions": [
                  {
                    "question": "Diberi Set P = {2, 3, 5, 7} dan Set Q = {3, 5, 8, 9}. Cari P ∩ Q (Persilangan P dan Q).",
                    "questionEn": "Given Set P = {2, 3, 5, 7} and Set Q = {3, 5, 8, 9}. Find P ∩ Q (Intersection of P and Q).",
                    "options": [
                      "{3, 5}",
                      "{2, 3, 5, 7, 8, 9}",
                      "{2, 7}",
                      "{8, 9}"
                    ],
                    "optionsEn": [
                      "{3, 5}",
                      "{2, 3, 5, 7, 8, 9}",
                      "{2, 7}",
                      "{8, 9}"
                    ],
                    "correctIndex": 0,
                    "explanation": "Persilangan (∩) mencari unsur yang wujud dalam KEDUA-DUA set. Unsur 3 dan 5 terdapat dalam Set P dan juga Set Q. Maka P ∩ Q = {3, 5}.",
                    "explanationEn": "Intersection (∩) finds elements common to BOTH sets. The elements 3 and 5 exist in Set P as well as Set Q. Therefore P ∩ Q = {3, 5}."
                  },
                  {
                    "question": "Dalam satu kelas 40 orang murid, 25 orang suka bermain bola sepak, 18 orang suka bermain badminton, dan 8 orang suka bermain kedua-dua permainan tersebut. Berapakah bilangan murid yang TIDAK suka kedua-dua sukan ini?",
                    "questionEn": "In a class of 40 students, 25 like playing football, 18 like playing badminton, and 8 like playing both. How many students do NOT like either sport?",
                    "options": [
                      "5 orang",
                      "8 orang",
                      "12 orang",
                      "3 orang"
                    ],
                    "optionsEn": [
                      "5 students",
                      "8 students",
                      "12 students",
                      "3 students"
                    ],
                    "correctIndex": 0,
                    "explanation": "n(Bola ∪ Badminton) = n(Bola) + n(Badminton) - n(Kedua-dua) = 25 + 18 - 8 = 35 orang. Murid yang tidak suka kedua-duanya = 40 - 35 = 5 orang.",
                    "explanationEn": "n(Football ∪ Badminton) = 25 + 18 - 8 = 35 students. Those who dislike both = 40 - 35 = 5 students."
                  }
                ]
              }
            },
            {
              "id": "f4-mt-c5",
              "number": "Bab 5",
              "numberEn": "Chapter 5",
              "title": "Rangkaian dalam Teori Graf",
              "titleEn": "Network in Graph Theory",
              "summary": "Mengenal bucu (V), tepi (E), darjah bucu ∑d(v) = 2E, graf berbilang tepi, graf gelung, graf terarah, graf berpemberat, subgraf dan pokok (tree). Aplikasi praktikal dalam laluan penghantaran Grab, kabel gentian optik internet TM dan sistem transit LRT.",
              "summaryEn": "Understanding vertices (V), edges (E), sum of degrees ∑d(v) = 2E, multiple edges, loops, directed graphs, weighted graphs, subgraphs and trees. Real-world applications in Grab delivery routes, TM fiber-optic layouts, and LRT transit lines.",
              "xpReward": 120,
              "video": {
                "title": "Rangkaian Teori Graf: Rahsia Peta Waze, Grab & LRT",
                "duration": "14:00",
                "presenter": "Cikgu Hafiz (Guru Cemerlang Matematik)",
                "embedUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
                "highlights": [
                  "01:30 - Apa itu Bucu (Vertex) & Tepi (Edge)",
                  "04:45 - Rumus Emas Darjah Bucu: ∑d(v) = 2E",
                  "08:20 - Graf Berpemberat (Jarak, Masa & Kos)",
                  "11:15 - Ciri-ciri Pokok (Tree) & Laluan Terpendek"
                ]
              },
              "notes": {
                "readTime": "8 minit",
                "readTimeEn": "8 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "1. Analogi Dunia Sebenar: Peta Transit LRT & Rangkaian Penghantaran Grab",
                    "headingEn": "1. Real-Life Analogy: LRT Transit Map & Grab Delivery Networks",
                    "content": "Pernahkah anda melihat peta stesen LRT Kelana Jaya line atau peta Waze semasa memesan makanan? Setiap stesen kereta api atau lokasi rumah ialah satu TITIK yang dipanggil BUCU (Vertex, V). Landasan rel atau jalan raya yang menghubungkan stesen-stesen tersebut ialah GARISAN yang dipanggil TEPI (Edge, E). Teori Graf ialah cabang matematik moden yang digunakan oleh jurutera Google Maps, Waze dan jurutera rangkaian internet Telekom Malaysia untuk mencari laluan terpantas dan paling menjimatkan kos!",
                    "contentEn": "Have you ever looked at the RapidKL LRT transit map or navigation route on Waze? Every train station or delivery pickup is a POINT called a VERTEX (V). The railway track or road connecting stations is a LINE called an EDGE (E). Graph Theory is the mathematics powering Google Maps, Grab and fiber-optic engineers at Telekom Malaysia to find the shortest routes with minimum installation cost!",
                    "bulletPoints": [
                      "Bucu (Vertex, V): Titik atau lokasi dalam graf.",
                      "Tepi (Edge, E): Garisan yang menyambungkan dua bucu.",
                      "Bilangan Darjah, d(v): Bilangan tepi yang bersambung dengan bucu tersebut. Satu gelung (loop) menyumbang 2 darjah!",
                      "Rumus Emas Teori Graf: Jumlah darjah ∑d(v) = 2E (Sentiasa NOMBOR GENAP kerana setiap tepi ada dua hujung!)."
                    ],
                    "bulletPointsEn": [
                      "Vertex (V): A dot or location node in the graph.",
                      "Edge (E): A link line connecting two vertices.",
                      "Degree of Vertex, d(v): Number of edges connected to that vertex. A loop contributes 2 degrees!",
                      "Golden Formula of Graph Theory: Sum of degrees ∑d(v) = 2E (Always an EVEN number because every edge connects two ends!)."
                    ],
                    "mnemonic": "💡 Formula Emas: 'Jumlah Darjah = 2 kali ganda Bilangan Tepi!' Jika ∑d(v) nombor ganjil, graf itu SALAH!",
                    "mnemonicEn": "💡 Golden Rule: 'Sum of degrees = 2 × Number of edges!' If sum of degrees is odd, the graph is mathematically IMPOSSIBLE!"
                  },
                  {
                    "heading": "2. Pokok (Tree) & Pemasangan Kabel Internet Terpendek",
                    "headingEn": "2. Trees & Finding Minimum Spanning Fiber Cable Cost",
                    "content": "Apakah itu POKOK (Tree) dalam matematik?",
                    "contentEn": "What defines a TREE in mathematical graph theory?",
                    "bulletPoints": [
                      "Definisi Pokok: Graf mudah yang bersambung TANPA sebarang kitaran (loop / cycle).",
                      "Rumus Utama Pokok: Bilangan Tepi E = Bilangan Bucu V - 1 (E = V - 1).",
                      "Aplikasi Kejuruteraan: Seorang jurutera Telekom Malaysia ingin memasang kabel fiber optik untuk menyambungkan 5 buah pejabat cawangan (V = 5). Berapakah kabel minimum yang diperlukan? Jawapannya tepat 4 kabel (E = 5 - 1 = 4). Laluan ini memastikan semua pejabat terhubung tanpa kabel berlebihan yang membazir jutaan ringgit!"
                    ],
                    "bulletPointsEn": [
                      "Definition of a Tree: A connected simple graph without any cycles or closed loops.",
                      "Core Tree Formula: Number of Edges E = Number of Vertices V - 1 (E = V - 1).",
                      "Engineering Case: An engineer connects 5 regional branch offices with high-speed internet (V = 5). What is the minimum number of cables needed? Exactly 4 cables (E = 5 - 1 = 4). This guarantees every office communicates without redundant loop cables!"
                    ],
                    "examTip": "Soalan melukis pokok sering keluar 3 markah: Pastikan semua bucu bersambung dan JANGAN lukis sebarang bentuk segitiga atau segiempat tertutup (kitaran)."
                  }
                ]
              },
              "quiz": {
                "id": "f4-mt-q5",
                "title": "Kuiz Interaktif Bab 5: Rangkaian dalam Teori Graf",
                "titleEn": "Interactive Quiz Chapter 5: Network in Graph Theory",
                "timeLimitMinutes": 10,
                "xpPoints": 100,
                "questions": [
                  {
                    "question": "Sebuah graf mempunyai 7 tepi. Berapakah jumlah darjah bagi semua bucu dalam graf tersebut?",
                    "questionEn": "A graph has 7 edges. What is the sum of degrees for all vertices in the graph?",
                    "options": [
                      "14",
                      "7",
                      "21",
                      "49"
                    ],
                    "optionsEn": [
                      "14",
                      "7",
                      "21",
                      "49"
                    ],
                    "correctIndex": 0,
                    "explanation": "Mengikut teorem teori graf, Jumlah Darjah ∑d(v) = 2 × Bilangan Tepi (E). Maka ∑d(v) = 2 × 7 = 14.",
                    "explanationEn": "According to graph theory theorem, Sum of Degrees ∑d(v) = 2 × Number of Edges (E). Thus ∑d(v) = 2 × 7 = 14."
                  },
                  {
                    "question": "Sebuah pokok (tree) mempunyai 6 bucu. Berapakah bilangan tepi bagi pokok tersebut?",
                    "questionEn": "A tree has 6 vertices. How many edges does this tree have?",
                    "options": [
                      "5 tepi",
                      "6 tepi",
                      "7 tepi",
                      "12 tepi"
                    ],
                    "optionsEn": [
                      "5 edges",
                      "6 edges",
                      "7 edges",
                      "12 edges"
                    ],
                    "correctIndex": 0,
                    "explanation": "Ciri utama sebuah pokok ialah E = V - 1. Dengan V = 6 bucu, bilangan tepi E = 6 - 1 = 5 tepi.",
                    "explanationEn": "The primary characteristic of a tree is E = V - 1. With V = 6 vertices, the number of edges E = 6 - 1 = 5 edges."
                  }
                ]
              }
            },
            {
              "id": "f4-mt-c6",
              "number": "Bab 6",
              "numberEn": "Chapter 6",
              "title": "Ketaksamaan Linear dalam Dua Pemboleh Ubah",
              "titleEn": "Linear Inequalities in Two Variables",
              "summary": "Mewakilkan ketaksamaan linear dalam satah Cartes, garis padu vs garis sempang, dan menentukan rantau berlorek yang memuaskan suatu sistem ketaksamaan linear. Mengaplikasikannya dalam peruntukan bajet perniagaan, kapasiti muatan van dan sasaran keuntungan.",
              "summaryEn": "Representing linear inequalities on Cartesian planes, solid vs dashed boundary lines, and determining shaded feasible regions satisfying systems of inequalities. Real-world applications in business budgeting, vehicle load capacities, and profit maximization.",
              "xpReward": 120,
              "video": {
                "title": "Melorek Rantau Ketaksamaan Linear Tanpa Silap",
                "duration": "13:15",
                "presenter": "Cikgu Hafiz (Guru Cemerlang Matematik)",
                "embedUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
                "highlights": [
                  "01:00 - Garis Padu (≥, ≤) vs Garis Sempang (>, <)",
                  "03:40 - Ujian Titik Asalan (0,0) untuk Menentukan Kawasan Lorek",
                  "07:15 - Sistem Ketaksamaan Linear (Pertindihan Rantau)",
                  "10:45 - Soalan Aplikasi SPM: Bajet Peniaga Pasar Malam"
                ]
              },
              "notes": {
                "readTime": "7 minit",
                "readTimeEn": "7 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "1. Analogi Dunia Sebenar: Bajet Poket & Had Muatan Kereta",
                    "headingEn": "1. Real-Life Analogy: Pocket Money Limits & Car Boot Capacity",
                    "content": "Bayangkan anda pergi ke pasar malam dengan wang tunai tepat RM30. Anda ingin membeli cucur udang (RM2 sekeping) dan air mangga (RM5 secawan). Jika x = bilangan cucur udang dan y = cawan air mangga, jumlah belanja anda TIDAK BOLEH melebihi RM30. Dalam matematik: 2x + 5y ≤ 30. Kawasan rantau berlorek di bawah garisan ialah semua kemungkinan kombinasi makanan yang anda mampu beli dengan wang anda!",
                    "contentEn": "Imagine visiting a night market with exactly RM30 in your pocket. You want to buy prawn fritters (RM2 each) and mango shakes (RM5 per cup). If x = number of fritters and y = cups of mango shake, your total spending CANNOT exceed RM30. Mathematically: 2x + 5y ≤ 30. The shaded region underneath the line represents every single combination of food you can afford within your budget!",
                    "bulletPoints": [
                      "Garis Padu (Solid Line): Digunakan bila simbol ketaksamaan mengandungi tanda sama dengan: ≤ atau ≥ (Titik atas garisan termasuk dalam jawapan).",
                      "Garis Sempang (Dashed/Dotted Line): Digunakan bila simbol ketaksamaan ialah strictly < atau > (Titik atas garisan TIDAK termasuk).",
                      "Arah Lorekan: y > mx + c lorek ke ATAS garisan; y < mx + c lorek ke BAWAH garisan."
                    ],
                    "bulletPointsEn": [
                      "Solid Boundary Line: Used when inequality contains an equal sign: ≤ or ≥ (Points lying on the line are included).",
                      "Dashed Line: Used when inequality is strict: < or > (Points lying on the boundary are excluded).",
                      "Shading Direction: y > mx + c shade ABOVE the line; y < mx + c shade BELOW the line."
                    ],
                    "mnemonic": "💡 Tips Ujian Pantas (0,0): Masukkan x = 0 dan y = 0 ke dalam ketaksamaan. Jika benar, lorek sebelah yang ada (0,0)! Jika palsu, lorek sebelah bertentangan.",
                    "mnemonicEn": "💡 Quick (0,0) Test: Plug in x = 0 and y = 0. If inequality holds true, shade the region containing the origin (0,0)!"
                  },
                  {
                    "heading": "2. Sistem Ketaksamaan Linear: Kawasan Sepunya",
                    "headingEn": "2. System of Linear Inequalities: The Common Overlap Region",
                    "content": "Dalam kehidupan sebenar, kita sering mempunyai lebih daripada satu syarat sekaligus. Sebagai contoh:",
                    "contentEn": "In real life, we balance multiple constraints at once. For example:",
                    "bulletPoints": [
                      "Syarat 1 (Bajet Duit): 2x + 5y ≤ 30.",
                      "Syarat 2 (Kapasiti Beg): x + y ≤ 10 (beg hanya muat maksimum 10 item).",
                      "Syarat 3 (Bukan Negatif): x ≥ 0 dan y ≥ 0 (bilangan makanan tidak boleh negatif).",
                      "Kawasan Jawapan: Rantau berlorek yang bertindih dan memuaskan KETIGA-TIGA syarat ini serentak (Rantau Bersepadu / Feasible Region)."
                    ],
                    "bulletPointsEn": [
                      "Constraint 1 (Budget): 2x + 5y ≤ 30.",
                      "Constraint 2 (Bag Capacity): x + y ≤ 10 (bag carries maximum 10 items).",
                      "Constraint 3 (Non-negativity): x ≥ 0 and y ≥ 0 (cannot buy negative food).",
                      "Final Solution: The shaded intersection region satisfying ALL constraints simultaneously."
                    ],
                    "examTip": "⚠️ Kesilapan Lazim Murid: Melukis garis padu padahal simbolnya '>' atau '<'. Hilang 1 markah ketepatan graf serta-merta!"
                  }
                ]
              },
              "quiz": {
                "id": "f4-mt-q6",
                "title": "Kuiz Interaktif Bab 6: Ketaksamaan Linear",
                "titleEn": "Interactive Quiz Chapter 6: Linear Inequalities",
                "timeLimitMinutes": 10,
                "xpPoints": 100,
                "questions": [
                  {
                    "question": "Antara berikut, jenis garisan sempadan manakah yang patut digunakan untuk melukis graf ketaksamaan y > 2x - 3 pada satah Cartes?",
                    "questionEn": "Which type of boundary line should be drawn on Cartesian plane for inequality y > 2x - 3?",
                    "options": [
                      "Garis sempang (putus-putus), kerana simbol '>' tidak mengandungi tanda sama dengan",
                      "Garis padu lurus, kerana graf linear sentiasa bersambung",
                      "Garis lengkung parabola",
                      "Garis menegak pada paksi-y"
                    ],
                    "optionsEn": [
                      "Dashed line, because '>' does not include an equal sign",
                      "Solid line, because linear graphs are always connected",
                      "Curved parabolic line",
                      "Vertical line along the y-axis"
                    ],
                    "correctIndex": 0,
                    "explanation": "Simbol ketaksamaan '>' bermaksud titik-titik di atas sempadan tidak termasuk sebagai penyelesaian. Oleh itu, ia mesti dilukis dengan garisan sempang (dashed line).",
                    "explanationEn": "The strict inequality '>' means boundary coordinates are not part of the solution set. It must be represented using a dashed line."
                  },
                  {
                    "question": "Adakah titik koordinat (1, 2) memuaskan ketaksamaan 3x + y ≤ 6?",
                    "questionEn": "Does the coordinate point (1, 2) satisfy the inequality 3x + y ≤ 6?",
                    "options": [
                      "Ya, kerana 3(1) + 2 = 5, dan 5 ≤ 6 adalah pernyataan yang benar",
                      "Tidak, kerana 5 tidak sama dengan 6",
                      "Tidak, kerana nombor 1 dan 2 adalah nombor positif",
                      "Hanya jika x digantikan dengan sifar"
                    ],
                    "optionsEn": [
                      "Yes, because 3(1) + 2 = 5, and 5 ≤ 6 is a true statement",
                      "No, because 5 is not equal to 6",
                      "No, because 1 and 2 are positive",
                      "Only if x is replaced with zero"
                    ],
                    "correctIndex": 0,
                    "explanation": "Gantikan x = 1 dan y = 2: 3(1) + 2 = 5. Kerana 5 sememangnya kurang daripada atau sama dengan 6, titik (1, 2) memuaskan ketaksamaan tersebut.",
                    "explanationEn": "Substitute x = 1 and y = 2: 3(1) + 2 = 5. Since 5 is indeed less than or equal to 6, point (1, 2) satisfies the inequality."
                  }
                ]
              }
            },
            {
              "id": "f4-mt-c7",
              "number": "Bab 7",
              "numberEn": "Chapter 7",
              "title": "Graf Gerakan",
              "titleEn": "Graphs of Motion",
              "summary": "Graf Jarak-Masa (Kecerunan = Laju, Kecerunan Sifar = Pegun/Rehat) dan Graf Laju-Masa (Kecerunan = Pecutan, Luas di bawah Graf = Jarak Keseluruhan). Analogi pemanduan kereta di Lebuhraya PLUS, tren ETS dan larian maraton.",
              "summaryEn": "Distance-Time Graphs (Gradient = Speed, Zero Gradient = Stationary/Rest) and Speed-Time Graphs (Gradient = Acceleration, Area under Graph = Total Distance). Real-life analogies with PLUS Highway road trips, ETS trains and 100m sprint athletics.",
              "xpReward": 120,
              "video": {
                "title": "Menguasai Graf Jarak-Masa & Laju-Masa SPM",
                "duration": "15:30",
                "presenter": "Cikgu Hafiz (Guru Cemerlang Matematik)",
                "embedUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
                "highlights": [
                  "01:15 - Graf Jarak-Masa: Bagaimana Membaca Speedometer Kereta",
                  "04:40 - Garisan Mendatar: Kereta Berhenti di RnR",
                  "08:10 - Graf Laju-Masa: Rahsia 'Luas di Bawah Graf' = Jarak",
                  "12:20 - Formula Laju Purata: Jumlah Jarak / Jumlah Masa"
                ]
              },
              "notes": {
                "readTime": "8 minit",
                "readTimeEn": "8 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "1. Analogi Dunia Sebenar: Pemanduan Kereta Balik Kampung",
                    "headingEn": "1. Real-Life Analogy: Road Trip Driving on PLUS Highway",
                    "content": "Bayangkan anda menaiki kereta bersama keluarga dari Kuala Lumpur ke Pulau Pinang. Sepanjang perjalanan, ayah anda memandu, berhenti di RnR Tapah untuk makan tengah hari, dan memecut semula di laluan lurus. Dalam matematik, terdapat DUA jenis graf gerakan yang menceritakan perjalanan ini:",
                    "contentEn": "Imagine taking a family road trip from Kuala Lumpur to Penang. Your father drives, stops at Tapah RnR for lunch, and accelerates smoothly on open straight stretches. In mathematics, TWO distinct motion graphs describe this journey:",
                    "bulletPoints": [
                      "Graf JARAK-MASA (Distance-Time): Paksi-y ialah Jarak, Paksi-x ialah Masa.",
                      "Kecerunan Graf Jarak-Masa = LAJU (Speed = Perubahan Jarak / Perubahan Masa). Garis lebih curam = Kereta lebih laju!",
                      "Garisan Mendatar Rata pada Graf Jarak-Masa = KENDERAAN PEGUN / BERHENTI (Jarak tidak bertambah, sedang rehat makan di RnR).",
                      "Laju Purata = Jumlah Jarak Dilalui ÷ Jumlah Masa Keseluruhan (termasuk masa berehat di RnR!)."
                    ],
                    "bulletPointsEn": [
                      "DISTANCE-TIME Graph: y-axis is Distance, x-axis is Time.",
                      "Gradient of Distance-Time Graph = SPEED (Speed = Change in Distance / Change in Time). Steeper line = Faster speed!",
                      "Horizontal Flat Line on Distance-Time Graph = VEHICLE IS STATIONARY (Distance remains constant while resting at RnR).",
                      "Average Speed = Total Distance Traveled ÷ Total Time Taken (including rest stops!)."
                    ],
                    "mnemonic": "💡 Formula Rahsia: Dalam Graf Jarak-Masa: 'Kecerunan = Laju'. Dalam Graf Laju-Masa: 'Kecerunan = Pecutan', 'Luas = Jarak'!",
                    "mnemonicEn": "💡 Secret Rule: On Distance-Time: 'Gradient = Speed'. On Speed-Time: 'Gradient = Acceleration', 'Area underneath = Total Distance'!"
                  },
                  {
                    "heading": "2. Graf Laju-Masa: Kuasa 'Luas di Bawah Graf'",
                    "headingEn": "2. Speed-Time Graphs: The Power of 'Area Under The Graph'",
                    "content": "Dalam Graf Laju-Masa, paksi menegak ialah kelajuan kenderaan (m/s atau km/j). Dua perkara ajaib berlaku di sini:",
                    "contentEn": "On a Speed-Time graph, the vertical axis measures vehicle speed (m/s or km/h). Two fundamental principles apply here:",
                    "bulletPoints": [
                      "Kecerunan = PECUTAN (Pecutan = (Laju Akhir - Laju Awal) / Masa). Kecerunan negatif = NYAHPECUTAN (brek ditekan!).",
                      "LUAS DI BAWAH GRAF = JARAK DILALUI! Bentuk di bawah graf biasanya terdiri daripada Segi Tiga (½ × tapak × tinggi), Segi Empat (panjang × lebar), atau Trapezium (½ × (hasil tambah sisi selari) × tinggi).",
                      "Contoh Pengiraan: Kereta bergerak dengan laju malar 20 m/s selama 10 saat. Bentuk bawah graf = Segi empat tepat. Luas = 20 × 10 = 200 meter jarak yang dilalui!"
                    ],
                    "bulletPointsEn": [
                      "Gradient = ACCELERATION ((Final Speed - Initial Speed) / Time). Negative gradient = DECELERATION (braking!).",
                      "AREA UNDER THE GRAPH = DISTANCE TRAVELED! Shapes are composed of Triangles (½ × base × height), Rectangles (length × width), or Trapeziums (½ × (sum of parallel sides) × height).",
                      "Calculation Example: A car cruises at constant 20 m/s for 10 seconds. Shape under graph = Rectangle. Area = 20 × 10 = 200 meters traveled!"
                    ],
                    "examTip": "⚠️ Perangkap SPM Paling Bahaya: Murid keliru antara Graf Jarak-Masa dengan Graf Laju-Masa. Tengok label paksi-y dulu sebelum menjawab!"
                  }
                ]
              },
              "quiz": {
                "id": "f4-mt-q7",
                "title": "Kuiz Interaktif Bab 7: Graf Gerakan",
                "titleEn": "Interactive Quiz Chapter 7: Graphs of Motion",
                "timeLimitMinutes": 10,
                "xpPoints": 100,
                "questions": [
                  {
                    "question": "Apakah kuantiti fizik yang diwakili oleh KECERUNAN bagi Graf Jarak-Masa?",
                    "questionEn": "What physical quantity is represented by the GRADIENT of a Distance-Time Graph?",
                    "options": [
                      "Laju kenderaan",
                      "Pecutan kenderaan",
                      "Jarak keseluruhan",
                      "Daya enjin"
                    ],
                    "optionsEn": [
                      "Speed of the vehicle",
                      "Acceleration of the vehicle",
                      "Total distance",
                      "Engine force"
                    ],
                    "correctIndex": 0,
                    "explanation": "Kecerunan graf jarak-masa = Perubahan Jarak / Perubahan Masa = Laju kenderaan.",
                    "explanationEn": "Gradient of a distance-time graph = Change in Distance / Change in Time = Speed."
                  },
                  {
                    "question": "Dalam Graf Laju-Masa, bagaimana kita mengira Jarak Keseluruhan yang dilalui oleh kenderaan?",
                    "questionEn": "In a Speed-Time Graph, how do we calculate the Total Distance traveled by a vehicle?",
                    "options": [
                      "Mengira luas di bawah graf",
                      "Mengira kecerunan garisan",
                      "Mendarabkan laju maksimum dengan pecutan",
                      "Membaca nilai titik puncak tertinggi"
                    ],
                    "optionsEn": [
                      "Calculating the area under the graph",
                      "Calculating the gradient of the curve",
                      "Multiplying top speed by acceleration",
                      "Reading the highest peak value"
                    ],
                    "correctIndex": 0,
                    "explanation": "Dalam graf laju-masa, Luas di Bawah Graf mewakili Jarak Keseluruhan (Distance = Speed × Time).",
                    "explanationEn": "On a speed-time graph, the Area Under the Graph represents the Total Distance (Distance = Speed × Time)."
                  }
                ]
              }
            },
            {
              "id": "f4-mt-c8",
              "number": "Bab 8",
              "numberEn": "Chapter 8",
              "title": "Sukatan Serakan Data Tak Terkumpul",
              "titleEn": "Measures of Dispersion for Ungrouped Data",
              "summary": "Memahami serakan data: Julat, Julat Antara Kuartil (IQR), Varians (σ²), dan Sisihan Piawai (σ). Menggunakan plot titik, plot batang-dan-daun serta plot kotak. Menganalisis ketekalan prestasi atlet sukan, gred ujian peperiksaan dan kualiti produk kilang.",
              "summaryEn": "Understanding data dispersion: Range, Interquartile Range (IQR), Variance (σ²), and Standard Deviation (σ). Using dot plots, stem-and-leaf plots, and box plots to analyze athlete consistency, exam results distribution, and industrial product quality.",
              "xpReward": 120,
              "video": {
                "title": "Sisihan Piawai & Sukatan Serakan: Siapa Atlet Paling Konsisten?",
                "duration": "14:40",
                "presenter": "Cikgu Hafiz (Guru Cemerlang Matematik)",
                "embedUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
                "highlights": [
                  "01:20 - Apa itu Serakan Data & Mengapa Min Sahaja Tak Cukup",
                  "04:50 - Kuartil Pertama (Q1), Median (Q2) & Kuartil Ketiga (Q3)",
                  "08:15 - Plot Kotak (Box Plot) & Tafsiran Bentuk",
                  "11:30 - Formula Sisihan Piawai & Maksud Ketekalan Prestasi"
                ]
              },
              "notes": {
                "readTime": "8 minit",
                "readTimeEn": "8 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "1. Analogi Dunia Sebenar: Memilih Penjaring Gol Harimau Malaya",
                    "headingEn": "1. Real-Life Analogy: Selecting a National Team Football Striker",
                    "content": "Bayangkan anda seorang jurulatih bola sepak yang perlu memilih seorang daripada dua orang penyerang untuk perlawanan akhir Piala AFF. Pemain A menjaringkan gol: [2, 2, 3, 2, 3] dalam 5 perlawanan lepas (Min = 2.4). Pemain B menjaringkan gol: [0, 8, 0, 1, 3] dalam 5 perlawanan lepas (Min = 2.4 juga!). Kedua-dua pemain mempunyai purata min yang sama. Tetapi siapa yang patut anda pilih? Pemain A mempunyai serakan kecil (data terkumpul rapat dan sangat konsisten!). Pemain B mempunyai serakan besar (prestasi tidak menentu, adakalanya 0 gol). Sukatan Serakan memberitahu kita sejauh mana data itu tersebar dari nilai purata!",
                    "contentEn": "Imagine you are a football head coach deciding between two strikers for the cup final. Striker A scored: [2, 2, 3, 2, 3] goals in the last 5 games (Mean = 2.4). Striker B scored: [0, 8, 0, 1, 3] goals in the last 5 games (Mean = 2.4 as well!). Both players have the exact same mean average. But whom would you trust? Striker A has very small dispersion (tight cluster, highly consistent!). Striker B has huge dispersion (wildly erratic). Measures of Dispersion measure how widely data spreads around the central average!",
                    "bulletPoints": [
                      "Julat (Range): Nilai Terbesar - Nilai Terkecil.",
                      "Julat Antara Kuartil (IQR): Kuartil Ketiga (Q3) - Kuartil Pertama (Q1). Mengukur serakan 50% data di bahagian tengah (tidak dipengaruhi oleh nilai ekstrem/pencilan).",
                      "Sisihan Piawai (Standard Deviation, σ): Purata jarak setiap data daripada nilai min. Semakin KECIL sisihan piawai, semakin KONSISTEN prestasi sesuatu data!"
                    ],
                    "bulletPointsEn": [
                      "Range: Largest Value - Smallest Value.",
                      "Interquartile Range (IQR): Third Quartile (Q3) - First Quartile (Q1). Measures the spread of the middle 50% of data (unaffected by extreme outliers).",
                      "Standard Deviation (σ): Average distance of data points from the mean. A SMALLER standard deviation indicates HIGHER CONSISTENCY!"
                    ],
                    "mnemonic": "💡 Kata Kunci Peperiksaan: 'Sisihan Piawai Lebih Kecil = Prestasi Lebih KONSISTEN & Stabil!'.",
                    "mnemonicEn": "💡 Exam Keyword: 'Smaller Standard Deviation = Data is MORE CONSISTENT and reliable!'."
                  },
                  {
                    "heading": "2. Plot Kotak (Box Plot) & Pencilan (Outliers)",
                    "headingEn": "2. Box Plots & Identifying Outliers",
                    "content": "Plot kotak merumuskan data menggunakan 5 nilai penting: Nilai Minimum, Q1, Median (Q2), Q3, dan Nilai Maksimum.",
                    "contentEn": "A box plot summarizes dataset distribution using 5 summary numbers: Minimum, Q1, Median (Q2), Q3, and Maximum.",
                    "bulletPoints": [
                      "Kotak mewakili 50% data pertengahan (dari Q1 hingga Q3). Panjang kotak = Julat Antara Kuartil.",
                      "Garis di dalam kotak ialah MEDIAN (Q2). Jika median berada tepat di tengah kotak, data adalah simetri.",
                      "Apakah itu Pencilan (Outlier)? Nilai ekstrem yang terlalu jauh daripada data lain. Rumus pencilan: Nilai < Q1 - 1.5(IQR) atau Nilai > Q3 + 1.5(IQR)."
                    ],
                    "bulletPointsEn": [
                      "The box represents the middle 50% of data (from Q1 to Q3). Box length = Interquartile Range.",
                      "The line inside the box is the MEDIAN (Q2). If centered, the distribution is symmetrical.",
                      "What is an Outlier? Extreme data points far away from the rest. Outlier boundary: Value < Q1 - 1.5(IQR) or Value > Q3 + 1.5(IQR)."
                    ],
                    "examTip": "Bila soalan SPM meminta anda 'Bandingkan taburan dua set data', berikan 2 poin: (1) Bandingkan Min/Median, dan (2) Bandingkan Sisihan Piawai/IQR beserta tafsiran ketekalan."
                  }
                ]
              },
              "quiz": {
                "id": "f4-mt-q8",
                "title": "Kuiz Interaktif Bab 8: Sukatan Serakan Data",
                "titleEn": "Interactive Quiz Chapter 8: Measures of Dispersion",
                "timeLimitMinutes": 10,
                "xpPoints": 100,
                "questions": [
                  {
                    "question": "Dua orang murid, Adam dan Danial, menduduki 5 ujian Matematik. Adam mempunyai sisihan piawai 2.5 manakala Danial mempunyai sisihan piawai 8.1. Murid manakah yang menunjukkan prestasi lebih konsisten?",
                    "questionEn": "Two students, Adam and Danial, took 5 Mathematics tests. Adam has a standard deviation of 2.5 while Danial has 8.1. Which student showed more consistent performance?",
                    "options": [
                      "Adam, kerana sisihan piawainya lebih kecil (skor ujian lebih rapat dengan min)",
                      "Danial, kerana sisihan piawainya lebih besar",
                      "Kedua-duanya sama kerana bergantung kepada markah penuh",
                      "Tidak dapat ditentukan tanpa mengetahui markah min"
                    ],
                    "optionsEn": [
                      "Adam, because his standard deviation is smaller (scores closer to mean)",
                      "Danial, because his standard deviation is larger",
                      "Both are identical depending on full marks",
                      "Cannot be determined without knowing the mean score"
                    ],
                    "correctIndex": 0,
                    "explanation": "Nilai sisihan piawai yang lebih kecil menunjukkan bahawa data bertabur lebih rapat di sekitar nilai min, membuktikan prestasi yang jauh lebih konsisten.",
                    "explanationEn": "A smaller standard deviation indicates data values are clustered closely around the mean, demonstrating much higher consistency."
                  },
                  {
                    "question": "Diberi satu set data: 3, 5, 7, 8, 12, 15, 20. Apakah julat bagi set data ini?",
                    "questionEn": "Given a dataset: 3, 5, 7, 8, 12, 15, 20. What is the range of this dataset?",
                    "options": [
                      "17",
                      "20",
                      "8",
                      "15"
                    ],
                    "optionsEn": [
                      "17",
                      "20",
                      "8",
                      "15"
                    ],
                    "correctIndex": 0,
                    "explanation": "Julat = Nilai Terbesar - Nilai Terkecil = 20 - 3 = 17.",
                    "explanationEn": "Range = Maximum Value - Minimum Value = 20 - 3 = 17."
                  }
                ]
              }
            },
            {
              "id": "f4-mt-c9",
              "number": "Bab 9",
              "numberEn": "Chapter 9",
              "title": "Kebarangkalian Peristiwa Bergabung",
              "titleEn": "Probability of Combined Events",
              "summary": "Ruang sampel peristiwa bergabung, peristiwa bersandar vs tak bersandar, peristiwa saling eksklusif vs tidak saling eksklusif. Hukum Pendaraban P(A ∩ B) dan Hukum Penambahan P(A ∪ B) = P(A) + P(B) - P(A ∩ B) melalui cabutan bertuah, balingan dadu dan kaji cuaca.",
              "summaryEn": "Sample spaces of combined events, dependent vs independent events, mutually exclusive vs non-mutually exclusive events. Multiplication Rule P(A ∩ B) and Addition Rule P(A ∪ B) = P(A) + P(B) - P(A ∩ B) through lucky draws, dice games and weather forecasts.",
              "xpReward": 120,
              "video": {
                "title": "Kebarangkalian Peristiwa Bergabung & Rajah Pokok",
                "duration": "13:50",
                "presenter": "Cikgu Hafiz (Guru Cemerlang Matematik)",
                "embedUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
                "highlights": [
                  "01:10 - Apa itu Peristiwa Bergabung (Dua Peristiwa Berlaku)",
                  "04:30 - Peristiwa Bersandar (Tanpa Pengembalian) vs Tak Bersandar",
                  "07:50 - Peristiwa Saling Eksklusif (Tak Boleh Berlaku Serentak)",
                  "11:10 - Melukis Rajah Pokok (Tree Diagram) untuk Skor Penuh"
                ]
              },
              "notes": {
                "readTime": "8 minit",
                "readTimeEn": "8 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "1. Analogi Dunia Sebenar: Cabutan Balang Gula-Gula & Balingan Syiling",
                    "headingEn": "1. Real-Life Analogy: Candy Jar Draws & Coin Tosses",
                    "content": "Bayangkan anda mempunyai sebalang gula-gula yang mengandungi 3 gula-gula perisa strawberi dan 2 gula-gula perisa coklat. Anda mencabut satu gula-gula, MAKANNYA (tanpa memasukkannya kembali), dan kemudian mencabut gula-gula kedua. Jumlah gula-gula di dalam balang sudah berkurang daripada 5 menjadi 4! Ini dinamakan PERISTIWA BERSANDAR kerana hasil cabutan pertama mengubah peluang cabutan kedua. Tetapi jika anda membaling sekeping duit syiling dan membaling dadu, hasil syiling tidak memberi kesan langsung kepada dadu—itu adalah PERISTIWA TAK BERSANDAR!",
                    "contentEn": "Imagine having a jar of 3 strawberry candies and 2 chocolate candies. You draw one candy, EAT IT (without replacement), and then draw a second candy. The total count in the jar dropped from 5 to 4! This is a DEPENDENT EVENT because the first action alters the probability of the second outcome. But if you flip a coin and roll a dice, the coin toss has zero influence on the dice roll—that is an INDEPENDENT EVENT!",
                    "bulletPoints": [
                      "Peristiwa Tak Bersandar (Independent): P(A dan B) = P(A ∩ B) = P(A) × P(B). Kejadian A tidak mempengaruhi peluang kejadian B.",
                      "Peristiwa Bersandar (Dependent): Peluang kejadian kedua berubah selepas kejadian pertama berlaku (biasanya situasi 'tanpa pengembalian').",
                      "Peristiwa Saling Eksklusif (Mutually Exclusive): Dua peristiwa yang TIDAK BOLEH berlaku serentak. Contoh: Mendapat Kepala ATAU Ekor pada satu balingan syiling. Rumus: P(A ∪ B) = P(A) + P(B).",
                      "Peristiwa Tidak Saling Eksklusif: Boleh berlaku serentak. Rumus: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)."
                    ],
                    "bulletPointsEn": [
                      "Independent Events: P(A and B) = P(A ∩ B) = P(A) × P(B). Outcome of event A has zero effect on event B.",
                      "Dependent Events: Probability of second event changes based on outcome of the first (common in 'without replacement' draws).",
                      "Mutually Exclusive Events: Events that CANNOT occur simultaneously. (e.g. Getting Heads OR Tails on a single coin flip). Formula: P(A ∪ B) = P(A) + P(B).",
                      "Non-Mutually Exclusive Events: Can happen together. Formula: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)."
                    ],
                    "mnemonic": "💡 Kata Kunci: 'DAN = Darab (×)', 'ATAU = Tambah (+) tolak persilangan jika bertindih'.",
                    "mnemonicEn": "💡 Rule of Thumb: 'AND = Multiply (×)', 'OR = Add (+) minus intersection if overlapping'."
                  },
                  {
                    "heading": "2. Rajah Pokok (Tree Diagram) Langkah Demi Langkah",
                    "headingEn": "2. Tree Diagram Step-by-Step",
                    "content": "Rajah pokok ialah alat visual paling berkuasa untuk menyelesaikan soalan kebarangkalian SPM:",
                    "contentEn": "A tree diagram is the most reliable visual technique to ace SPM probability questions:",
                    "bulletPoints": [
                      "Setiap cabang mewakili satu kemungkinan hasil dengan kebarangkaliannya ditulis di atas garisan.",
                      "Untuk mencari kebarangkalian satu laluan lengkap: DARABKAN kebarangkalian di sepanjang cabang tersebut.",
                      "Untuk mencari jumlah kebarangkalian beberapa laluan berbeza yang memenuhi syarat: TAMBAHKAN hasil darab setiap laluan.",
                      "Jumlah semua kebarangkalian pada setiap peringkat cabang mestilah sentiasa bersamaan dengan 1.0!"
                    ],
                    "bulletPointsEn": [
                      "Each branch branch represents an outcome with its probability written on the branch line.",
                      "To calculate probability of a full single path: MULTIPLY probabilities along that pathway.",
                      "To combine probabilities of multiple valid paths: ADD their individual branch products.",
                      "The sum of branch probabilities at each node must always sum up to exactly 1.0!"
                    ],
                    "examTip": "Bila soalan kata 'Sekurang-kurangnya satu', gunakan pelengkap: P(Sekurang-kurangnya satu) = 1 - P(Tiada langsung). Cara ini menjimatkan 5 minit masa menjawab!"
                  }
                ]
              },
              "quiz": {
                "id": "f4-mt-q9",
                "title": "Kuiz Interaktif Bab 9: Kebarangkalian Peristiwa Bergabung",
                "titleEn": "Interactive Quiz Chapter 9: Probability of Combined Events",
                "timeLimitMinutes": 10,
                "xpPoints": 100,
                "questions": [
                  {
                    "question": "Sekeping syiling adil dan sebiji dadu adil dilambung serentak. Apakah kebarangkalian mendapat 'Kepala' pada syiling DAN nombor '6' pada dadu?",
                    "questionEn": "A fair coin and a fair dice are tossed simultaneously. What is the probability of getting 'Heads' on the coin AND a '6' on the dice?",
                    "options": [
                      "1/12",
                      "1/2",
                      "1/6",
                      "7/12"
                    ],
                    "optionsEn": [
                      "1/12",
                      "1/2",
                      "1/6",
                      "7/12"
                    ],
                    "correctIndex": 0,
                    "explanation": "Ini adalah peristiwa tak bersandar. P(Kepala) = 1/2, P(Nombor 6) = 1/6. P(Kepala DAN 6) = 1/2 × 1/6 = 1/12.",
                    "explanationEn": "These are independent events. P(Heads) = 1/2, P(Number 6) = 1/6. P(Heads AND 6) = 1/2 × 1/6 = 1/12."
                  },
                  {
                    "question": "Dalam sebuah kotak terdapat 4 guli merah dan 6 guli biru. Dua biji guli dicabut satu demi satu TANPA pengembalian. Apakah kebarangkalian guli pertama dan guli kedua kedua-duanya berwarna merah?",
                    "questionEn": "A box contains 4 red marbles and 6 blue marbles. Two marbles are drawn one by one WITHOUT replacement. What is the probability that both marbles are red?",
                    "options": [
                      "2/15",
                      "4/25",
                      "16/100",
                      "1/5"
                    ],
                    "optionsEn": [
                      "2/15",
                      "4/25",
                      "16/100",
                      "1/5"
                    ],
                    "correctIndex": 0,
                    "explanation": "Cabutan pertama merah = 4/10. Tanpa pengembalian, tinggal 3 merah daripada 9 guli. Cabutan kedua merah = 3/9. P(Merah, Merah) = 4/10 × 3/9 = 12/90 = 2/15.",
                    "explanationEn": "First red = 4/10. Without replacement, 3 red remain out of 9 marbles. Second red = 3/9. P(Red, Red) = 4/10 × 3/9 = 12/90 = 2/15."
                  }
                ]
              }
            },
            {
              "id": "f4-mt-c10",
              "number": "Bab 10",
              "numberEn": "Chapter 10",
              "title": "Matematik Pengguna: Pengurusan Kewangan",
              "titleEn": "Consumer Mathematics: Financial Management",
              "summary": "Proses pengurusan kewangan berkesan: Menetapkan matlamat SMART (Specific, Measurable, Attainable, Realistic, Time-bound), menilai kedudukan kewangan, menyusun pelan kewangan, pendapatan aktif vs pasif, perbelanjaan tetap vs tidak tetap, aliran tunai dan dana kecemasan.",
              "summaryEn": "Effective financial management process: Setting SMART goals (Specific, Measurable, Attainable, Realistic, Time-bound), evaluating financial health, constructing financial plans, active vs passive income, fixed vs variable expenses, cash flow, and emergency funds.",
              "xpReward": 120,
              "video": {
                "title": "Bijak Wang & Matlamat SMART: Cara Urus Duit Sejak Sekolah",
                "duration": "15:00",
                "presenter": "Cikgu Hafiz (Guru Cemerlang Matematik)",
                "embedUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
                "highlights": [
                  "01:10 - 5 Langkah Proses Pengurusan Kewangan",
                  "04:20 - Menetapkan Matlamat Kewangan SMART",
                  "08:15 - Pendapatan vs Perbelanjaan Tetap & Tidak Tetap",
                  "11:45 - Mengira Aliran Tunai Positif & Dana Kecemasan 6 Bulan"
                ]
              },
              "notes": {
                "readTime": "8 minit",
                "readTimeEn": "8 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "1. Analogi Dunia Sebenar: Membeli Komputer Riba Untuk Belajar",
                    "headingEn": "1. Real-Life Analogy: Saving Up to Buy a Student Laptop",
                    "content": "Bayangkan anda seorang murid Tingkatan 4 yang ingin membeli sebuah komputer riba berharga RM2,400 untuk tujuan pembelajaran SPM dalam tempoh 12 bulan. Bagaimana anda memastikan impian ini tercapai tanpa berhutang? Anda membina PELAN KEWANGAN SMART! Setiap bulan, anda memperuntukkan simpanan bulanan RM200 (RM2,400 ÷ 12 bulan) sebelum berbelanja. Ini membezakan orang yang berjaya membina masa depan cerah daripada mereka yang terjebak dalam masalah kewangan!",
                    "contentEn": "Imagine you are a Form 4 student aiming to purchase a RM2,400 laptop for your SPM studies within 12 months. How do you guarantee this goal without falling into debt? You construct a SMART FINANCIAL PLAN! Every month, you set aside monthly savings of RM200 (RM2,400 ÷ 12 months) before spending on entertainment. This separates financially savvy individuals from those overwhelmed by debt!",
                    "bulletPoints": [
                      "S - Specific (Khusus): Matlamat mesti jelas (Contoh: 'Beli laptop RM2,400', bukan sekadar 'nak simpan duit').",
                      "M - Measurable (Boleh Diukur): Ada jumlah wang tepat yang boleh dijejak (RM2,400).",
                      "A - Attainable (Boleh Dicapai): Simpanan bulanan RM200 mampu disimpan daripada elaun/duit kerja sambilan.",
                      "R - Realistic (Realistik): Masuk akal mengikut kemampuan kewangan sebenar.",
                      "T - Time-bound (Bertempoh Masa): Mempunyai tarikh sasaran yang jelas (12 bulan dari sekarang)."
                    ],
                    "bulletPointsEn": [
                      "S - Specific: Clear objective (e.g. 'Buy RM2,400 laptop', not just vague 'save money').",
                      "M - Measurable: Exact measurable dollar figure (RM2,400).",
                      "A - Attainable: Monthly saving target of RM200 is reachable from allowances/part-time income.",
                      "R - Realistic: Pragmatic relative to actual cash inflow.",
                      "T - Time-bound: Explicit target horizon deadline (12 months from now)."
                    ],
                    "mnemonic": "💡 Konsep SMART: S-Khas, M-Ukur, A-Capai, R-Realistik, T-Tempoh. 'Pay yourself first' (Simpan dulu sebelum belanja)!",
                    "mnemonicEn": "💡 SMART Concept: S-Specific, M-Measurable, A-Attainable, R-Realistic, T-Time-bound. Pay yourself first before spending!"
                  },
                  {
                    "heading": "2. Pendapatan, Perbelanjaan & Aliran Tunai Bersih",
                    "headingEn": "2. Income, Expenses & Net Cash Flow",
                    "content": "Bagaimana menyusun bajet kewangan bulanan yang sihat?",
                    "contentEn": "How do you structure a healthy monthly personal budget?",
                    "bulletPoints": [
                      "Pendapatan Aktif vs Pasif: Pendapatan aktif dijana melalui tenaga kerja fizikal (gaji, elaun). Pendapatan pasif dijana tanpa kerja harian berterusan (dividen ASB, sewa rumah).",
                      "Perbelanjaan Tetap: Jumlah bayaran yang tidak berubah setiap bulan (sewa rumah, ansuran kereta, bil internet wifi).",
                      "Perbelanjaan Tidak Tetap: Jumlah bayaran yang berubah mengikut corak penggunaan harian (makan minum di luar, petrol, pakaian, hiburan wayang).",
                      "Aliran Tunai Bersih = Jumlah Pendapatan - Jumlah Perbelanjaan. Jika POSITIF (+), anda mempunyai lebihan wang untuk pelaburan. Jika NEGATIF (-), anda sedang mengalami defisit (poket bocor)!"
                    ],
                    "bulletPointsEn": [
                      "Active vs Passive Income: Active income requires ongoing labor (wages, commissions). Passive income flows from assets (dividends, rental yields).",
                      "Fixed Expenses: Predictable, constant monthly bills (house rent, car installment, home broadband subscription).",
                      "Variable Expenses: Fluctuates based on daily lifestyle choices (groceries, dining out, fuel, weekend entertainment).",
                      "Net Cash Flow = Total Income - Total Expenses. POSITIVE (+) means savings surplus. NEGATIVE (-) means financial deficit!"
                    ],
                    "examTip": "Soalan pengurusan kewangan Kertas 2: Sentiasa kira Dana Kecemasan (sekurang-kurangnya 3 hingga 6 bulan jumlah perbelanjaan bulanan)!"
                  }
                ]
              },
              "quiz": {
                "id": "f4-mt-q10",
                "title": "Kuiz Interaktif Bab 10: Pengurusan Kewangan",
                "titleEn": "Interactive Quiz Chapter 10: Financial Management",
                "timeLimitMinutes": 10,
                "xpPoints": 100,
                "questions": [
                  {
                    "question": "Encik Azman mempunyai pendapatan bulanan RM4,000. Perbelanjaan tetapnya ialah RM1,800 dan perbelanjaan tidak tetapnya ialah RM1,500. Berapakah aliran tunai bulanan Encik Azman?",
                    "questionEn": "Mr. Azman earns a monthly income of RM4,000. His fixed expenses are RM1,800 and variable expenses are RM1,500. What is his monthly cash flow?",
                    "options": [
                      "+RM700 (Aliran tunai positif / lebihan)",
                      "-RM700 (Aliran tunai negatif / defisit)",
                      "+RM2,200",
                      "+RM2,500"
                    ],
                    "optionsEn": [
                      "+RM700 (Positive cash flow / surplus)",
                      "-RM700 (Negative cash flow / deficit)",
                      "+RM2,200",
                      "+RM2,500"
                    ],
                    "correctIndex": 0,
                    "explanation": "Aliran Tunai = Pendapatan - (Perbelanjaan Tetap + Perbelanjaan Tidak Tetap) = RM4,000 - (RM1,800 + RM1,500) = RM4,000 - RM3,300 = +RM700 (Positif).",
                    "explanationEn": "Cash Flow = Income - (Fixed Expenses + Variable Expenses) = RM4,000 - (RM1,800 + RM1,500) = RM4,000 - RM3,300 = +RM700 (Positive)."
                  },
                  {
                    "question": "Apakah maksud huruf 'S' dalam konsep penetapan matlamat kewangan SMART?",
                    "questionEn": "What does the letter 'S' stand for in the SMART financial goal concept?",
                    "options": [
                      "Specific (Khusus / Jelas)",
                      "Simple (Mudah)",
                      "Saving (Simpanan)",
                      "Strict (Ketat)"
                    ],
                    "optionsEn": [
                      "Specific (Explicit & Well-defined)",
                      "Simple",
                      "Saving",
                      "Strict"
                    ],
                    "correctIndex": 0,
                    "explanation": "Dalam konsep SMART, S merujuk kepada Specific (Khusus), iaitu matlamat kewangan mestilah dinyatakan dengan jelas dan tidak samar-samar.",
                    "explanationEn": "In SMART framework, S represents Specific: financial targets must be precisely stated rather than vague."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f4-fiz",
          "name": "Fizik (DLP/BM)",
          "code": "4531",
          "icon": "⚡",
          "color": "from-purple-600 to-indigo-800",
          "theme": "purple",
          "hasDlp": true,
          "chaptersCount": 2,
          "description": "Pengukuran, daya dan gerakan, kegravitian, haba, gelombang dan cahaya.",
          "chapters": [
            {
              "id": "f4-fiz-c1",
              "number": "Bab 1",
              "numberEn": "Chapter 1",
              "title": "Pengukuran",
              "titleEn": "Measurement",
              "summary": "Kuantiti asas vs terbitan, kuantiti skalar vs vektor. Kejituan, kepersisan, kepekaan dan ralat sifar menggunakan angkup vernier dan tolok skru mikrometer.",
              "summaryEn": "Base vs derived quantities, scalar vs vector quantities. Accuracy, consistency, sensitivity and zero error handling using vernier callipers and micrometer screw gauge.",
              "xpReward": 120,
              "video": {
                "title": "Pengukuran Fizik: Cara Elak Ralat Sifar & Paralaks",
                "duration": "12:15",
                "presenter": "Dr. Roslan (Pakar Fizik KPM)",
                "embedUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
                "highlights": [
                  "01:00 - Kuantiti Asas",
                  "04:30 - Tolok Skru Mikrometer",
                  "08:15 - Ralat Paralaks"
                ]
              },
              "notes": {
                "readTime": "7 minit",
                "readTimeEn": "7 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "1. Analogi Dunia Sebenar: Mengukur Sehelai Rambut & Ketebalan Kertas",
                    "headingEn": "1. Real-Life Analogy: Measuring a Single Strand of Hair",
                    "content": "Pembaris plastik sekolah anda hanya boleh membaca sehingga 0.1 cm (1 mm). Bolehkah anda mengukur ketebalan sehelai rambut atau wayar tembaga elektrik yang sangat halus? Mustahil! Itulah sebabnya ahli fizik mencipta ANGUP VERNIER (kejituan 0.01 cm) dan TOLOK SKRU MIKROMETER (kejituan 0.01 mm). Ketepatan ukuran ini sangat kritikal dalam membina komponen enjin kapal terbang jet di mana perbezaan 0.01 mm boleh menyebabkan enjin meletup!",
                    "contentEn": "Your regular 15cm school ruler can only measure down to 0.1 cm (1 mm). Can you measure the thickness of a single human hair or microscopic copper wire? Impossible! That is why physicists invented VERNIER CALLIPERS (0.01 cm precision) and MICROMETER SCREW GAUGES (0.01 mm precision). Extreme precision is critical in aerospace engineering where a 0.01 mm mismatch causes jet engine failure!",
                    "bulletPoints": [
                      "Kuantiti Asas: 7 kuantiti yang tidak boleh diterbitkan (Panjang, Jisim, Masa, Suhu, Arus elektrik, Keamatan berluminositi, Kuantiti bahan).",
                      "Ralat Sifar Positif: Bacaan sebenar = Bacaan diambil - (+Ralat sifar).",
                      "Ralat Sifar Negatif: Bacaan sebenar = Bacaan diambil - (-Ralat sifar).",
                      "Ralat Paralaks: Sentiasa pastikan mata berada berserenjang (90 darjah) dengan skala bacaan!"
                    ],
                    "bulletPointsEn": [
                      "Base Quantities: 7 fundamental units (Length, Mass, Time, Thermodynamic Temperature, Electric Current, Luminous Intensity, Amount of Substance).",
                      "Positive Zero Error: Actual reading = Measured reading - (+Zero error).",
                      "Negative Zero Error: Actual reading = Measured reading - (-Zero error).",
                      "Parallax Error: Ensure line of sight is perpendicular (90°) to the measurement scale!"
                    ],
                    "mnemonic": "💡 Petua: 'Tolak apa yang salah!' Bacaan Sebenar = Bacaan Ukuran TOLAK Ralat Sifar.",
                    "mnemonicEn": "💡 Golden Rule: 'Always deduct the error!' Actual Reading = Observed Reading MINUS Zero Error."
                  }
                ]
              },
              "quiz": {
                "id": "f4-fiz-q1",
                "title": "Kuiz Interaktif Bab 1: Pengukuran Fizik",
                "titleEn": "Interactive Quiz Chapter 1: Physics Measurement",
                "timeLimitMinutes": 10,
                "xpPoints": 100,
                "questions": [
                  {
                    "question": "Alat pengukur manakah yang paling jitu dan sesuai digunakan untuk mengukur diameter wayar kuprum yang halus?",
                    "questionEn": "Which measuring instrument is most accurate and suitable for measuring the diameter of a thin copper wire?",
                    "options": [
                      "Tolok skru mikrometer (kejituan 0.01 mm)",
                      "Angkup vernier (kejituan 0.01 cm)",
                      "Pembaris meter (kejituan 0.1 cm)",
                      "Pita pengukur"
                    ],
                    "optionsEn": [
                      "Micrometer screw gauge (precision 0.01 mm)",
                      "Vernier callipers (precision 0.01 cm)",
                      "Metre ruler (precision 0.1 cm)",
                      "Measuring tape"
                    ],
                    "correctIndex": 0,
                    "explanation": "Tolok skru mikrometer mempunyai kejituan tertinggi (0.01 mm atau 0.001 cm), menjadikannya instrumen paling tepat untuk objek mikroskopik seperti wayar halus.",
                    "explanationEn": "A micrometer screw gauge has the smallest sensitivity scale (0.01 mm), making it ideal for wire diameters."
                  }
                ]
              }
            },
            {
              "id": "f4-fiz-c2",
              "number": "Bab 2",
              "numberEn": "Chapter 2",
              "title": "Daya dan Gerakan I",
              "titleEn": "Force and Motion I",
              "summary": "Hukum Gerakan Newton I, II, dan III. Inersia dan tali pinggang keledar, momentum p = mv, impuls dan daya impuls, serta prinsip keabadian momentum dalam perlanggaran kenyal dan tak kenyal.",
              "summaryEn": "Newton's Laws of Motion I, II, and III. Inertia and seatbelts, momentum p = mv, impulse and impulsive force, and conservation of momentum in elastic and inelastic collisions.",
              "xpReward": 120,
              "video": {
                "title": "Inersia, Momentum & Kereta Lumba: Fizik Gerakan",
                "duration": "14:10",
                "presenter": "Dr. Roslan (Pakar Fizik KPM)",
                "embedUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
                "highlights": [
                  "01:15 - Inersia & Tali Pinggang",
                  "05:00 - Hukum Newton II: F = ma",
                  "09:30 - Daya Impuls & Zon Remuk Kereta"
                ]
              },
              "notes": {
                "readTime": "8 minit",
                "readTimeEn": "8 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "1. Analogi Dunia Sebenar: Menunggang Basikal & Brek Mengejut Kereta",
                    "headingEn": "1. Real-Life Analogy: Braking Suddenly in a RapidKL Bus",
                    "content": "Pernahkah anda berdiri di dalam bas RapidKL dan tiba-tiba pemandu menekan brek kecemasan? Badan anda terhumban ke hadapan secara automatik! Mengapa? Kerana badan anda mempunyai INERSIA (keengganan untuk mengubah keadaan gerakan asalnya). Semakin besar jisim sesuatu objek, semakin besar inersianya—sebab itulah lori tangki minyak memerlukan jarak membrek yang jauh lebih panjang berbanding kereta kancil kecil!",
                    "contentEn": "Have you ever stood in a city bus when the driver stepped on emergency brakes? Your body lunges forward uncontrollably! Why? Because your body has INERTIA (the resistance to change its state of motion). The larger the mass, the larger the inertia—which is why heavy 40-tonne lorries require much greater braking distances than compact cars!",
                    "bulletPoints": [
                      "Hukum Newton I: Objek kekal pegun atau bergerak dengan halaju malar melainkan dikenakan daya luar.",
                      "Hukum Newton II: Daya F = ma (Daya berkadar terus dengan kadar perubahan momentum).",
                      "Daya Impuls F = (mv - mu) / t: Masa hentaman 't' lebih panjang → Daya impuls lebih KECIL! Zon remuk (crumple zone) dan beg udara kereta direka untuk memanjangkan masa hentaman supaya nyawa pemandu selamat."
                    ],
                    "bulletPointsEn": [
                      "Newton's 1st Law: An object remains at rest or moves at constant velocity unless acted upon by a net external force.",
                      "Newton's 2nd Law: Force F = ma.",
                      "Impulsive Force F = (mv - mu) / t: Longer impact duration 't' → SMALLER impulsive force! Crumple zones and airbags lengthen impact time to save human lives."
                    ],
                    "mnemonic": "💡 Keselamatan Kereta: 'Masa hentaman panjang = Daya hentaman kecil = Penumpang Selamat!'",
                    "mnemonicEn": "💡 Road Safety Principle: 'Longer collision duration = Lower impulsive force = Lives saved!'"
                  }
                ]
              },
              "quiz": {
                "id": "f4-fiz-q2",
                "title": "Kuiz Interaktif Bab 2: Daya dan Gerakan",
                "titleEn": "Interactive Quiz Chapter 2: Force and Motion",
                "timeLimitMinutes": 10,
                "xpPoints": 100,
                "questions": [
                  {
                    "question": "Mengapakah kereta moden direka dengan zon remuk (crumple zone) di bahagian depan dan belakangnya?",
                    "questionEn": "Why are modern cars designed with crumple zones in the front and rear?",
                    "options": [
                      "Memanjangkan masa perlanggaran (t) untuk mengurangkan daya impuls yang bertindak ke atas penumpang",
                      "Menjadikan kereta lebih ringan dan jimat petrol",
                      "Meningkatkan momentum kereta semasa kemalangan",
                      "Mengelakkan tayar daripada meletup"
                    ],
                    "optionsEn": [
                      "To lengthen the collision impact time (t) and reduce impulsive force on passengers",
                      "To make the car lighter and more fuel efficient",
                      "To increase the momentum of the car during crash",
                      "To prevent tires from bursting"
                    ],
                    "correctIndex": 0,
                    "explanation": "Berdasarkan rumus Daya Impuls F = (mv - mu)/t, apabila zon remuk kemek, masa hentaman 't' dipanjangkan. Ini mengurangkan daya impuls 'F' secara drastik untuk melindungi nyawa penumpang.",
                    "explanationEn": "From F = (mv - mu)/t, crumpling extends impact duration 't', drastically reducing impulsive force 'F' experienced by passengers."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f4-kim",
          "name": "Kimia (DLP/BM)",
          "code": "4541",
          "icon": "🧪",
          "color": "from-teal-600 to-emerald-800",
          "theme": "teal",
          "hasDlp": true,
          "chaptersCount": 2,
          "description": "Jirim dan struktur atom, konsep mol, jadual berkala, dan ikatan kimia.",
          "chapters": [
            {
              "id": "f4-kim-c1",
              "number": "Bab 1",
              "numberEn": "Chapter 1",
              "title": "Pengenalan kepada Kimia",
              "titleEn": "Introduction to Chemistry",
              "summary": "Memahami bahan kimia dalam kehidupan harian (ubat-ubatan, garam masakan, sabun dan baja pertanian), kerjaya dalam bidang kimia serta kaedah saintifik menjalankan penyiasatan.",
              "summaryEn": "Understanding daily chemicals (medicine, food seasoning, detergents, fertilizers), chemical careers and scientific methodology in laboratories.",
              "xpReward": 120,
              "video": {
                "title": "Kimia di Sekeliling Kita: Dari Dapur ke Makmal Industri",
                "duration": "11:50",
                "presenter": "Cikgu Aisyah (Guru Kimia SPM)",
                "embedUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
                "highlights": [
                  "01:00 - Kimia di Dapur",
                  "04:30 - Kaedah Saintifik",
                  "08:15 - Kerjaya Ahli Farmasi"
                ]
              },
              "notes": {
                "readTime": "7 minit",
                "readTimeEn": "7 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "1. Analogi Dunia Sebenar: Kita Hidup Dalam Lautan Bahan Kimia",
                    "headingEn": "1. Real-Life Analogy: We Live in an Ocean of Chemicals",
                    "content": "Ramai orang menyangka 'bahan kimia' itu hanya racun berbahaya dalam botol berlabel tengkorak. Salah sama sekali! Air paip yang anda minum (H₂O), garam atas telur goreng (NaCl), gas oksigen yang anda sedut (O₂), dan ubat demam panadol (parasetamol) semuanya adalah BAHAN KIMIA! Mempelajari kimia bermaksud membongkar rahsia bagaimana zarah-zarah alam semesta berinteraksi untuk menghasilkan semua benda yang wujud di sekeliling anda.",
                    "contentEn": "Many assume 'chemicals' only mean deadly poisons in bottles with skull labels. That is completely untrue! The water you drink (H₂O), table salt on your fried egg (NaCl), the oxygen gas you breathe (O₂), and paracetamol for fevers are all CHEMICALS! Studying chemistry unlocks the secret building blocks of everything that exists in our universe.",
                    "bulletPoints": [
                      "Bahan Kimia Makanan: Pengawet (natrium benzoat), perisa (MSG), pewarna.",
                      "Bahan Kimia Perubatan: Antibiotik (penisilin), analgesik (parasetamol), antiseptik (iodin).",
                      "Kaedah Saintifik: Mengenal pasti masalah → Membuat hipotesis → Mengawal pemboleh ubah (Dimalarkan, Dimanipulasi, Bergerak balas) → Mengumpul data → Kesimpulan."
                    ],
                    "bulletPointsEn": [
                      "Food Chemicals: Preservatives (sodium benzoate), flavor enhancers (MSG), coloring.",
                      "Pharmaceuticals: Antibiotics (penicillin), analgesics (paracetamol), antiseptics (iodine).",
                      "Scientific Method: Identify problem → Formulate hypothesis → Control variables (Constant, Manipulated, Responding) → Collect data → Draw conclusion."
                    ],
                    "mnemonic": "💡 Formula Pemboleh Ubah: 'ManiPulasi = Pilihan kita nak ubah', 'Bergerak Balas = Hasil keputusan eksperimen'.",
                    "mnemonicEn": "💡 Variables Tip: 'Manipulated = What I change', 'Responding = What I measure'."
                  }
                ]
              },
              "quiz": {
                "id": "f4-kim-q1",
                "title": "Kuiz Interaktif Bab 1: Pengenalan kepada Kimia",
                "titleEn": "Interactive Quiz Chapter 1: Introduction to Chemistry",
                "timeLimitMinutes": 10,
                "xpPoints": 100,
                "questions": [
                  {
                    "question": "Antara bahan berikut, yang manakah merupakan bahan kimia semula jadi yang digunakan sebagai pengawet makanan tradisional sejak zaman dahulu?",
                    "questionEn": "Which of the following is a natural chemical traditionally used as food preservative?",
                    "options": [
                      "Natrium klorida (garam dapur)",
                      "Asid sulfurik pekat",
                      "Klorin gas",
                      "Merkuri"
                    ],
                    "optionsEn": [
                      "Sodium chloride (table salt)",
                      "Concentrated sulfuric acid",
                      "Chlorine gas",
                      "Mercury"
                    ],
                    "correctIndex": 0,
                    "explanation": "Garam dapur (natrium klorida, NaCl) menyerap air daripada sel bakteria melalui osmosis, mengelakkan makanan seperti ikan masin daripada rosak.",
                    "explanationEn": "Table salt (sodium chloride) dehydrates microbial cells through osmosis, preserving traditional salted fish from rotting."
                  }
                ]
              }
            },
            {
              "id": "f4-kim-c2",
              "number": "Bab 2",
              "numberEn": "Chapter 2",
              "title": "Jirim dan Struktur Atom",
              "titleEn": "Matter and the Structure of the Atom",
              "summary": "Teori kinetik jirim: Pepejal, cecair dan gas. Lengkung pemanasan dan penyejukan (takat lebur dan takat beku). Zarah subatom (proton, neutron, elektron), nombor nukleon dan aplikasi isotop seperti Karbon-14 dan Kobalt-60.",
              "summaryEn": "Kinetic theory of matter: Solids, liquids, gases. Heating and cooling curves (melting/freezing points). Subatomic particles, nucleon number and applications of isotopes like Carbon-14 and Cobalt-60 in modern medicine.",
              "xpReward": 120,
              "video": {
                "title": "Zarah Atom & Lengkung Pemanasan: Kenapa Suhu Malar Semasa Lebur?",
                "duration": "13:30",
                "presenter": "Cikgu Aisyah (Guru Kimia SPM)",
                "embedUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
                "highlights": [
                  "01:10 - Model Tiga Keadaan Jirim",
                  "04:45 - Rahsia Haba Pendam Lengkung Lebur",
                  "08:30 - Struktur Elektron Atom",
                  "11:15 - Isotop Perubatan Kanser"
                ]
              },
              "notes": {
                "readTime": "8 minit",
                "readTimeEn": "8 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "1. Analogi Dunia Sebenar: Ketulan Ais Melebur & Penonton Konsert",
                    "headingEn": "1. Real-Life Analogy: Melting Ice Cubes & Concert Crowds",
                    "content": "Bayangkan zarah-zarah jirim seperti manusia di dalam dewan konsert. Dalam keadaan PEPEJAL (seperti ais), orang ramai duduk rapat di kerusi masing-masing dan hanya boleh bergetar setempat. Bila dipanaskan menjadi CECAIR (air), orang mula bangun dan menggelongsor bersesak melepasi satu sama lain. Bila mendidih menjadi GAS (wap air), mereka melompat dan berlari pantas ke merata arah secara bebas! Mengapakah suhu TIDAK NAIK semasa ais sedang melebur? Kerana semua haba digunakan untuk MEMUTUSKAN IKATAN antara zarah (Haba Pendam), bukan untuk menaikkan suhu!",
                    "contentEn": "Imagine matter particles as people attending an auditorium concert. In a SOLID (like ice), everyone sits rigidly shoulder-to-shoulder, only able to vibrate in fixed positions. When heated into a LIQUID (water), they stand up and slide past one another. When boiled into a GAS (steam), they run freely at high velocities! Why does temperature FREEZE CONSTANT while ice melts? Because all absorbed heat is consumed to BREAK INTERMOLECULAR BONDS (latent heat) rather than raising temperature!",
                    "bulletPoints": [
                      "Tiga Zarah Subatom: Proton (Cas +1, di nukleus), Neutron (Cas 0 / neutral, di nukleus), Elektron (Cas -1, mengelilingi nukleus dalam petala).",
                      "Nombor Proton (Z): Bilangan proton dalam nukleus atom (identiti unsur).",
                      "Nombor Nukleon (A): Jumlah bilangan proton + bilangan neutron.",
                      "Isotop: Atom-atom bagi unsur yang SAMA mempunyai nombor proton yang sama tetapi bilangan neutron yang BERBEZA (Contoh: Karbon-12 dan Karbon-14)."
                    ],
                    "bulletPointsEn": [
                      "Three Subatomic Particles: Proton (+1 charge, nucleus), Neutron (0 neutral, nucleus), Electron (-1 charge, orbital shells).",
                      "Proton Number (Z): Number of protons inside atomic nucleus (element identity).",
                      "Nucleon Number (A): Total number of protons + neutrons.",
                      "Isotopes: Atoms of the SAME element possessing the same proton number but DIFFERENT numbers of neutrons (e.g. Carbon-12 and Carbon-14)."
                    ],
                    "mnemonic": "💡 Formula Nukleon: 'A = p + n' (Nukleon = Proton + Neutron).",
                    "mnemonicEn": "💡 Nucleon Formula: 'A = p + n' (Nucleon number = Protons + Neutrons)."
                  }
                ]
              },
              "quiz": {
                "id": "f4-kim-q2",
                "title": "Kuiz Interaktif Bab 2: Jirim & Struktur Atom",
                "titleEn": "Interactive Quiz Chapter 2: Matter & Atomic Structure",
                "timeLimitMinutes": 10,
                "xpPoints": 100,
                "questions": [
                  {
                    "question": "Atom Natrium mempunyai nombor proton 11 dan nombor nukleon 23. Berapakah bilangan neutron di dalam nukleus atom natrium tersebut?",
                    "questionEn": "A Sodium atom has a proton number of 11 and a nucleon number of 23. How many neutrons are inside its nucleus?",
                    "options": [
                      "12 neutron",
                      "11 neutron",
                      "23 neutron",
                      "34 neutron"
                    ],
                    "optionsEn": [
                      "12 neutrons",
                      "11 neutrons",
                      "23 neutrons",
                      "34 neutrons"
                    ],
                    "correctIndex": 0,
                    "explanation": "Bilangan Neutron = Nombor Nukleon - Nombor Proton = 23 - 11 = 12 neutron.",
                    "explanationEn": "Number of Neutrons = Nucleon Number - Proton Number = 23 - 11 = 12 neutrons."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f4-bm",
          "name": "Bahasa Melayu (SPM)",
          "code": "1103",
          "icon": "📖",
          "color": "from-red-600 to-pink-700",
          "theme": "red",
          "hasDlp": false,
          "chaptersCount": 2,
          "description": "Karangan respon terbuka, morfologi, sintaksis, peribahasa, dan rumusan format baharu.",
          "chapters": [
            {
              "id": "f4-bm-c1",
              "number": "Unit 1",
              "numberEn": "Unit 1",
              "title": "Sistem Bahasa: Golongan Kata & Morfologi",
              "titleEn": "Language System: Word Classes & Morphology",
              "summary": "Kata Nama, Kata Kerja, Kata Adjektif dan Kata Tugas. Mengelakkan kesalahan ejaan dan tatabahasa harian dalam mesej, penulisan surat rasmi dan format peperiksaan SPM.",
              "summaryEn": "Nouns, Verbs, Adjectives and Function Words. Avoiding everyday grammatical errors in official communications, letters and SPM Paper 2 format.",
              "xpReward": 120,
              "video": {
                "title": "Teknik Skor A Tatabahasa & Morfologi SPM",
                "duration": "13:20",
                "presenter": "Cikgu Zainal (Guru Pakar BM SPM)",
                "embedUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
                "highlights": [
                  "01:10 - Kata Tugas vs Kata Sendi",
                  "04:30 - Kesalahan Ejaan Viral",
                  "08:15 - Teknik Bina Ayat Lengkap"
                ]
              },
              "notes": {
                "readTime": "7 minit",
                "readTimeEn": "7 mins",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "1. Analogi Dunia Sebenar: Kata Tugas Seperti Simen & Bata Rumah",
                    "headingEn": "1. Real-Life Analogy: Words as Bricks & Cement in Building a House",
                    "content": "Bayangkan anda membina sebuah rumah banglo. Kata Nama (orang, benda) dan Kata Kerja (perbuatan) ialah KETULAN BATA merah yang kukuh. Tetapi jika tiada SIMEN untuk mencantumkannya, rumah itu akan runtuh! KATA TUGAS (kata sendi nama, kata hubung, kata penegas) ialah simen pelekat tersebut. Kesalahan kecil seperti menggunakan 'di masa' (salah, masa tiada tempat fizikal!) sepatutnya 'pada masa' boleh menjatuhkan markah bahasa anda.",
                    "contentEn": "Imagine building a house. Nouns and Verbs are solid bricks. But without cement to bond them together, the structure collapses! Function words (prepositions, conjunctions) are the bonding cement. Small mistakes like using wrong prepositions in formal writing undermine overall credibility.",
                    "bulletPoints": [
                      "Kata Sendi 'DI' vs 'PADA': 'Di' hanya untuk TEMPAT fizikal (di sekolah, di Kuala Lumpur). 'Pada' untuk MASA dan MANUSIA (pada pukul 8 pagi, pada pendapat saya).",
                      "Kata Hubung: Menggabungkan dua klausa menjadi ayat majmuk yang gramatis (kerana, sekiranya, agar).",
                      "Kesalahan Lazim: 'Ibu bapa-ibu bapa' (SALAH, kata ganda hanya 'ibu bapa'), 'di kalangan' (SALAH, sepatutnya 'dalam kalangan')."
                    ],
                    "bulletPointsEn": [
                      "Prepositions 'DI' vs 'PADA': 'Di' is strictly for physical places. 'Pada' is used for time, abstract concepts, and people.",
                      "Conjunctions: Connect clauses into coherent compound sentences.",
                      "Common Pitfalls: 'Ibu bapa' is already plural and should not be duplicated."
                    ],
                    "mnemonic": "💡 Petua: 'DI untuk Destinasi/Tempat', 'PADA untuk Pukul/Masa & Orang'.",
                    "mnemonicEn": "💡 Quick Rule: 'DI' for physical Destination, 'PADA' for Time & People."
                  }
                ]
              },
              "quiz": {
                "id": "f4-bm-q1",
                "title": "Kuiz Interaktif Unit 1: Morfologi & Tatabahasa",
                "titleEn": "Interactive Quiz Unit 1: Morphology & Grammar",
                "timeLimitMinutes": 10,
                "xpPoints": 100,
                "questions": [
                  {
                    "question": "Pilih ayat yang menggunakan kata sendi nama dengan betul mengikut Hukum Tatabahasa Dewan.",
                    "questionEn": "Choose the sentence that uses the correct preposition according to standard grammar rules.",
                    "options": [
                      "Majlis perasmian sukan tahunan itu akan bermula pada pukul 8:00 pagi di stadium sekolah.",
                      "Majlis perasmian sukan tahunan itu akan bermula di pukul 8:00 pagi pada stadium sekolah.",
                      "Kerjasama di kalangan murid amat penting demi kejayaan bersama.",
                      "Hadiah itu diserahkan daripada Cikgu Rosli kepada pemenang."
                    ],
                    "optionsEn": [
                      "The annual sports ceremony will commence at 8:00 am in the school stadium.",
                      "The ceremony will commence with wrong prepositions.",
                      "Cooperation among students with incorrect phrasing.",
                      "Prize handover with incorrect source preposition."
                    ],
                    "correctIndex": 0,
                    "explanation": "'Pada' digunakan untuk masa ('pada pukul 8:00 pagi'), manakala 'di' digunakan untuk tempat fizikal ('di stadium sekolah').",
                    "explanationEn": "'Pada' is used for time, while 'di' denotes a physical location."
                  }
                ]
              }
            },
            {
              "id": "f4-bm-c2",
              "number": "Unit 2",
              "numberEn": "Unit 2",
              "title": "Teknik Karangan SPM: Formula IMBAKUP",
              "titleEn": "SPM Essay Writing: The IMBAKUP Formula",
              "summary": "Formula membina perenggan isi karangan yang mantap: Isu, Mengapa, Bagaimana, Kesan, Ungkapan menarik/peribahasa, dan Penegas. Mengarang esei matang bertaraf cemerlang.",
              "summaryEn": "Formulating high-scoring essay body paragraphs using the IMBAKUP structure: Issue, Why, How, Impact, Idioms, and Reaffirmation.",
              "xpReward": 120,
              "video": {
                "title": "Teknik IMBAKUP Karangan Bahasa Melayu Kertas 1 SPM",
                "duration": "14:10",
                "presenter": "Cikgu Zainal (Guru Pakar BM SPM)",
                "embedUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
                "highlights": [
                  "01:15 - Anatomi Perenggan Cemerlang",
                  "05:00 - Mengembangkan Hujah 'Bagaimana'",
                  "09:30 - Memasukkan Peribahasa Tempat Tepat"
                ]
              },
              "notes": {
                "readTime": "7 minit",
                "readTimeEn": "7 mins",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "1. Analogi Dunia Sebenar: Menyajikan Hidangan Makanan 5 Bintang",
                    "headingEn": "1. Real-Life Analogy: Plating a 5-Star Gourmet Meal",
                    "content": "Karangan yang cemerlang bukan sekadar panjang meleret-leret. Ia seperti hidangan chef 5 bintang: ada pembuka selera (pendahuluan memukau), hidangan utama yang berkhasiat dan lazat (isi IMBAKUP padat hujah), serta pencuci mulut yang memuaskan (kesimpulan bermakna). Jika anda menggunakan formula IMBAKUP, pemeriksa SPM tidak mempunyai alasan untuk menolak karangan anda daripada Gred A+!",
                    "contentEn": "An outstanding essay isn't just about word count. It resembles a 5-star course: an appetizer (compelling introduction), hearty main dishes (evidence-backed body paragraphs), and a memorable dessert (impactful conclusion).",
                    "bulletPoints": [
                      "I - Isu / Ayat Topik: Nyatakan isi utama secara jelas.",
                      "M - Mengapa: Jelaskan punca rasional mengapa isi tersebut penting.",
                      "B - Bagaimana: Berikan langkah terperinci atau contoh situasi sebenar dalam masyarakat.",
                      "K - Kesan: Terangkan implikasi positif terhadap negara atau individu.",
                      "U - Ungkapan Menarik: Selitkan peribahasa tepat (cth: 'bagai aur dengan tebing', 'di mana ada kemahuan, di situ ada jalan').",
                      "P - Penegas: Simpulkan perenggan dengan mengulang kata kunci soalan."
                    ],
                    "bulletPointsEn": [
                      "I - Issue: Main topic sentence.",
                      "M - Mechanism/Why: Underlying rationale.",
                      "B - Behavior/How: Concrete operational examples.",
                      "K - Key Impact: Tangible positive outcomes.",
                      "U - Unique Idiom: Contextual Malay proverbs.",
                      "P - Pivot Reaffirmation: Concluding sentence tying back to exam prompt."
                    ],
                    "mnemonic": "💡 Formula Rahsia: I-M-B-A-K-U-P untuk setiap perenggan isi. Pastikan peribahasa disepadukan secara semula jadi!",
                    "mnemonicEn": "💡 Memory Formula: Follow IMBAKUP for every single body paragraph."
                  }
                ]
              },
              "quiz": {
                "id": "f4-bm-q2",
                "title": "Kuiz Interaktif Unit 2: Teknik Karangan IMBAKUP",
                "titleEn": "Interactive Quiz Unit 2: IMBAKUP Essay Writing",
                "timeLimitMinutes": 10,
                "xpPoints": 100,
                "questions": [
                  {
                    "question": "Peribahasa manakah yang paling sesuai diselitkan dalam hujah karangan mengenai semangat perpaduan dan gotong-royong masyarakat?",
                    "questionEn": "Which proverb best fits an essay argument regarding community unity and gotong-royong cooperation?",
                    "options": [
                      "Berat sama dipikul, ringan sama dijinjing",
                      "Sudah jatuh ditimpa tangga",
                      "Mendengar guruh di langit, air di tempayan dicurahkan",
                      "Bagai melepaskan batuk di tangga"
                    ],
                    "optionsEn": [
                      "Berat sama dipikul, ringan sama dijinjing (Sharing burdens together)",
                      "Bad luck comes in pairs",
                      "Discarding assets prematurely on false hopes",
                      "Doing work half-heartedly"
                    ],
                    "correctIndex": 0,
                    "explanation": "'Berat sama dipikul, ringan sama dijinjing' bermaksud bekerjasama mengharungi kesukaran dan kesenangan bersama dalam perpaduan masyarakat.",
                    "explanationEn": "This proverb reflects mutual support and cooperation in overcoming collective challenges."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f4-bi",
          "name": "Bahasa Inggeris (SPM/CEFR)",
          "code": "1119",
          "icon": "🌐",
          "color": "from-blue-500 to-sky-700",
          "theme": "sky",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Reading & Use of English, Writing essays (Review, Article, Story), Speaking, Listening.",
          "chapters": [
            {
              "id": "f4-bi-c1",
              "number": "Unit 1",
              "numberEn": "Unit 1",
              "title": "Let's Chat: Informal Letters & Digital Communication",
              "titleEn": "Let's Chat: Informal Letters & Digital Communication",
              "summary": "SPM Paper 2 Part 1 Writing: Drafting 80-word informal emails or letters to friends with friendly tone, contractions, transition signals and appropriate sign-offs.",
              "summaryEn": "SPM Paper 2 Part 1 Writing: Drafting 80-word informal emails or letters to friends with friendly tone, contractions, transition signals and appropriate sign-offs.",
              "xpReward": 120,
              "video": {
                "title": "SPM English Paper 2: Acing the 80-word Email in 15 Minutes",
                "duration": "12:00",
                "presenter": "Ms. Evelyn (SPM English Master Teacher)",
                "embedUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
                "highlights": [
                  "01:00 - The 80-word Email Format",
                  "04:30 - Using Friendly Contractions",
                  "08:15 - Hitting All 3 Prompt Points"
                ]
              },
              "notes": {
                "readTime": "7 minit",
                "readTimeEn": "7 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "1. Real-Life Analogy: Texting a Best Friend with Politeness & Structure",
                    "headingEn": "1. Real-Life Analogy: Texting a Best Friend with Politeness & Structure",
                    "content": "Writing Part 1 in SPM English is just like sending a well-crafted email or WhatsApp message to a close friend planning a weekend hangout. You shouldn't sound like a robot or a Victorian lawyer ('I hereby inform thee')! Instead, use natural conversational English, contractions ('I'd love to', 'let's go'), and answer all three points given in the stimulus prompt.",
                    "contentEn": "Writing Part 1 in SPM English is just like sending a well-crafted email to a close friend planning a weekend hangout. Use natural conversational English, contractions ('I'd love to', 'let's go'), and answer all three points given in the stimulus prompt.",
                    "bulletPoints": [
                      "Word Limit: Strictly around 80 words (keep between 75 to 90 words; do not write 200 words!).",
                      "Friendly Opening: 'Hi Daniel, it's great to hear from you!'",
                      "Body Paragraphs: Address Prompt Point 1, Point 2, and Point 3 systematically.",
                      "Warm Sign-off: 'Write back soon! Cheers, [Your Name]'"
                    ],
                    "bulletPointsEn": [
                      "Word Count: Aim for 75-90 words concisely.",
                      "Friendly Opening: 'Hi Sarah, hope you're having an awesome week!'",
                      "Target Prompts: Check off each of the 3 bullets in the question prompt.",
                      "Closing: 'Take care, your friend [Name]'."
                    ],
                    "mnemonic": "💡 Golden 3-P Rule: Address Point 1, Point 2, Point 3 in under 90 words!",
                    "mnemonicEn": "💡 3-P Rule: Prompt 1, Prompt 2, Prompt 3 answered smoothly!"
                  }
                ]
              },
              "quiz": {
                "id": "f4-bi-q1",
                "title": "Interactive Quiz Unit 1: SPM Informal Email",
                "titleEn": "Interactive Quiz Unit 1: SPM Informal Email",
                "timeLimitMinutes": 10,
                "xpPoints": 100,
                "questions": [
                  {
                    "question": "Which of the following salutations is most appropriate when writing an informal email to a school friend in SPM Paper 2 Part 1?",
                    "questionEn": "Which of the following salutations is most appropriate when writing an informal email to a school friend in SPM Paper 2 Part 1?",
                    "options": [
                      "Hi Ryan,",
                      "To Whom It May Concern,",
                      "Dear Sir / Madam,",
                      "Respected Principal,"
                    ],
                    "optionsEn": [
                      "Hi Ryan,",
                      "To Whom It May Concern,",
                      "Dear Sir / Madam,",
                      "Respected Principal,"
                    ],
                    "correctIndex": 0,
                    "explanation": "In informal writing to friends or peers, a warm and friendly greeting like 'Hi Ryan,' or 'Dear Ryan,' is standard.",
                    "explanationEn": "'Hi [Name],' strikes the natural, friendly tone expected in SPM informal communications."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f4-bio",
          "name": "Biologi (DLP/BM)",
          "code": "BIO-F4",
          "icon": "🧬",
          "color": "from-emerald-600 to-green-700",
          "theme": "emerald",
          "hasDlp": true,
          "chaptersCount": 2,
          "description": "Bab 2: Biologi Sel dan Organisasi Sel, struktur membran plasma (Model Mozek Bendalir), dan osmosis.",
          "chapters": [
            {
              "id": "f4-bio-c1",
              "number": "Bab 1",
              "numberEn": "Chapter 1",
              "title": "Pengenalan kepada Biologi dan Peraturan Makmal",
              "titleEn": "Introduction to Biology and Laboratory Rules",
              "summary": "Bidang biologi (botani, zoologi, mikrobiologi), sumbangan biologi dalam perubatan dan pertanian, etika penyelidikan biologi dan peralatan makmal biologi.",
              "summaryEn": "Fields of biology (botany, zoology, microbiology), biological contributions in medicine and agriculture, research bioethics and biosafety protocols.",
              "xpReward": 120,
              "video": {
                "title": "Dunia Biologi: Menjelajah Keajaiban Hidupan",
                "duration": "11:30",
                "presenter": "Cikgu Syahirah (Pakar Biologi SPM)",
                "embedUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
                "highlights": [
                  "01:00 - Cabang Biologi",
                  "04:20 - Bioetika",
                  "08:00 - Mikroskop Cahaya"
                ]
              },
              "notes": {
                "readTime": "7 minit",
                "readTimeEn": "7 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "1. Analogi Dunia Sebenar: Menjadi Doktor & Saintis Alam Semula Jadi",
                    "headingEn": "1. Real-Life Analogy: Becoming a Medical Doctor & Nature Scientist",
                    "content": "Biologi berasal daripada perkataan Greek: 'Bios' (hidupan) dan 'Logos' (kajian). Setiap kali doktor merawat kanser, ahli pertanian mencipta padi tahan kemarau untuk mengelakkan kebuluran, atau forensik DNA mengenal pasti penjenayah—semuanya menggunakan sains Biologi! Dalam makmal biologi, kita mengkaji spesimen hidup di bawah mikroskop dengan mematuhi etika bioetika kemanusiaan.",
                    "contentEn": "Biology originates from Greek words: 'Bios' (life) and 'Logos' (study). Every time oncologists develop cancer therapies, agronomists breed drought-resistant padi crops, or forensic detectives match criminal DNA—they rely on Biology! In biology labs, we investigate living specimens through microscopes with strict bioethical respect for living organisms.",
                    "bulletPoints": [
                      "Botani: Kajian hidupan tumbuhan hijau.",
                      "Zoologi: Kajian alam haiwan.",
                      "Mikrobiologi: Kajian virus, bakteria dan kulat seni.",
                      "Genetik: Kajian pewarisan ciri keturunan baka dari ibu bapa kepada anak."
                    ],
                    "bulletPointsEn": [
                      "Botany: Scientific study of plant life.",
                      "Zoology: Scientific study of animal kingdom.",
                      "Microbiology: Investigation of microorganisms like bacteria, viruses, and fungi.",
                      "Genetics: Study of heredity and transmission of traits from parents to offspring."
                    ],
                    "mnemonic": "💡 Tiga Kategori Kemalangan Makmal: 'Biologikal, Kimia, Fizikal'. Basuh tangan dengan sabun selepas setiap eksperimen!",
                    "mnemonicEn": "💡 Lab Safety: Always wash hands thoroughly after handling biological tissue cultures!"
                  }
                ]
              },
              "quiz": {
                "id": "f4-bio-q1",
                "title": "Kuiz Interaktif Bab 1: Pengenalan kepada Biologi",
                "titleEn": "Interactive Quiz Chapter 1: Introduction to Biology",
                "timeLimitMinutes": 10,
                "xpPoints": 100,
                "questions": [
                  {
                    "question": "Bidang biologi manakah yang mengkaji virus, bakteria dan organisma mikroskopik yang tidak boleh dilihat dengan mata kasar?",
                    "questionEn": "Which biological branch studies viruses, bacteria and microscopic organisms invisible to naked eyes?",
                    "options": [
                      "Mikrobiologi",
                      "Botani",
                      "Ekologi",
                      "Anatomi"
                    ],
                    "optionsEn": [
                      "Microbiology",
                      "Botany",
                      "Ecology",
                      "Anatomy"
                    ],
                    "correctIndex": 0,
                    "explanation": "Mikrobiologi mengkaji hidupan seni mikro seperti bakteria, kulat yis dan virus.",
                    "explanationEn": "Microbiology is the science studying microscopic life including bacteria, yeast and viruses."
                  }
                ]
              }
            },
            {
              "id": "f4-bio-c2",
              "number": "Bab 2",
              "numberEn": "Chapter 2",
              "title": "Biologi Sel dan Organisasi Sel",
              "titleEn": "Cell Biology and Organisation",
              "summary": "Struktur sel haiwan vs sel tumbuhan di bawah mikroskop elektron. Organel sel: Nukleus, mitokondria (stesen janakuasa tenaga ATP), jasad Golgi, jalinan endoplasma, dan kloroplas.",
              "summaryEn": "Animal vs plant cell ultrastructure under electron microscope. Cell organelles: Nucleus, mitochondria (cellular ATP powerplants), Golgi apparatus, endoplasmic reticulum, and chloroplasts.",
              "xpReward": 120,
              "video": {
                "title": "Sel Seperti Kilang Mini Canggih: Menjelajah Organel Sel",
                "duration": "14:50",
                "presenter": "Cikgu Syahirah (Pakar Biologi SPM)",
                "embedUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
                "highlights": [
                  "01:15 - Sel Sebagai Kilang Berteknologi Tinggi",
                  "04:40 - Mitokondria: Stesen Janakuasa Tenaga",
                  "08:15 - Jasad Golgi & Pembungkusan Protein",
                  "11:50 - Perbezaan Sel Haiwan & Tumbuhan"
                ]
              },
              "notes": {
                "readTime": "8 minit",
                "readTimeEn": "8 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "1. Analogi Dunia Sebenar: Sel Badan Anda Seperti Sebuah Kilang Mega!",
                    "headingEn": "1. Real-Life Analogy: Your Body Cell is a High-Tech Smart Factory!",
                    "content": "Bayangkan sel badan anda ialah sebuah kilang pintar bersaiz mikroskopik yang beroperasi 24 jam sehari tanpa henti:",
                    "contentEn": "Imagine each cell in your body as a microscopic smart manufacturing plant operating 24 hours a day non-stop:",
                    "bulletPoints": [
                      "Nukleus (Bilik Pengurus Besar / CEO): Mengandungi fail pelan tindakan DNA dan mengawal semua aktiviti kilang.",
                      "Mitokondria (Stesen Janakuasa Elektrik TNB): Membakar glukosa dan oksigen untuk menghasilkan tenaga ATP (sebab itu sel otot atlet mempunyai beribu-ribu mitokondria!).",
                      "Ribosom (Pekerja Barisan Pemasangan): Membina rantai protein mengikut arahan DNA.",
                      "Jasad Golgi (Pusat Pembungkusan & Kurier Pos Laju): Mengubah suai, membungkus dan menghantar protein keluar dari sel.",
                      "Dinding Sel & Vakuol Besar (Hanya pada Tumbuhan): Seperti rangka dinding bata dan tangki simpanan air yang memberikan ketegaran (kesegahan) kepada pokok."
                    ],
                    "bulletPointsEn": [
                      "Nucleus (CEO Executive Suite): Holds DNA master blueprints controlling all operations.",
                      "Mitochondria (Power Generating Plant): Generates cellular ATP energy (athletes' muscle cells contain thousands of mitochondria!).",
                      "Ribosomes (Assembly Line Workers): Synthesizes protein chains following DNA instructions.",
                      "Golgi Apparatus (Packaging & Shipping Center): Modifies, packages and dispatches cellular cargo.",
                      "Cell Wall & Large Central Vacuole (Plants Only): Acts like brick scaffolding and internal water tanks keeping plants turgid and upright."
                    ],
                    "mnemonic": "💡 Ingat Organel Penting: 'Mito-Kondria = Jana Tenaga Powerhouse', 'Golgi = Pos Laju bungkusan protein'.",
                    "mnemonicEn": "💡 Organelle Trick: 'Mighty Mitochondria = Energy Powerhouse', 'Golgi = FedEx packing center'."
                  }
                ]
              },
              "quiz": {
                "id": "f4-bio-q2",
                "title": "Kuiz Interaktif Bab 2: Biologi Sel",
                "titleEn": "Interactive Quiz Chapter 2: Cell Biology",
                "timeLimitMinutes": 10,
                "xpPoints": 100,
                "questions": [
                  {
                    "question": "Mengapakah sel otot penerbangan burung merpati dan sel sperma manusia mempunyai kepadatan mitokondria yang sangat tinggi berbanding sel lain?",
                    "questionEn": "Why do pigeon flight muscle cells and human sperm cells have an extremely high density of mitochondria compared to other cells?",
                    "options": [
                      "Memerlukan bekalan tenaga ATP yang banyak untuk pengecutan otot berterusan dan pergerakan aktif",
                      "Menghasilkan klorofil untuk fotosintesis",
                      "Menyimpan air dan garam mineral berlebihan",
                      "Membina dinding sel yang tebal"
                    ],
                    "optionsEn": [
                      "They require large amounts of cellular ATP energy for continuous contraction and movement",
                      "To synthesize chlorophyll for photosynthesis",
                      "To store excess water and mineral ions",
                      "To construct rigid cell walls"
                    ],
                    "correctIndex": 0,
                    "explanation": "Mitokondria menjana tenaga ATP melalui respirasi sel. Sel aktif yang bekerja keras seperti otot penerbangan dan sperma memerlukan tenaga yang amat tinggi.",
                    "explanationEn": "Mitochondria produce ATP energy via cellular respiration. High-demand cells like flight muscles require abundant ATP to function."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f4-sn",
          "name": "Sains Teras (SPM)",
          "code": "1511",
          "icon": "🧪",
          "color": "from-teal-600 to-cyan-700",
          "theme": "teal",
          "hasDlp": true,
          "chaptersCount": 2,
          "description": "Bab 1: Langkah Keselamatan dalam Makmal & Bantuan Kecemasan (CPR & Heimlich Maneuver).",
          "chapters": [
            {
              "id": "f4-sn-c1",
              "number": "Bab 1",
              "numberEn": "Chapter 1",
              "title": "Langkah Keselamatan di dalam Makmal",
              "titleEn": "Safety Measures in Laboratory",
              "summary": "Peralatan perlindungan diri (gogal, topeng muka, sarung tangan), pemadam kebakaran mengikut kelas A, B, C, D, dan prosedur menangani tumpahan merkuri termometer menggunakan serbuk sulfur.",
              "summaryEn": "Personal protective equipment (goggles, lab coat, safety gloves), fire extinguishers by classes A, B, C, D, and emergency response for mercury spills using sulfur powder.",
              "xpReward": 120,
              "video": {
                "title": "Keselamatan Makmal: Apa Buat Bila Termometer Pecah?",
                "duration": "11:20",
                "presenter": "Cikgu Farah (Guru Cemerlang Sains)",
                "embedUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
                "highlights": [
                  "01:00 - Alat PPE",
                  "04:15 - Jenis Pemadam Api",
                  "07:30 - Bahaya Wasap Merkuri"
                ]
              },
              "notes": {
                "readTime": "7 minit",
                "readTimeEn": "7 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "1. Analogi Dunia Sebenar: Memasak di Dapur vs Eksperimen di Makmal",
                    "headingEn": "1. Real-Life Analogy: Cooking in Kitchen vs Laboratory Work",
                    "content": "Sama seperti anda tidak akan memegang kuali panas dengan tangan kosong di dapur, makmal sains mempunyai bahan kimia yang jauh lebih menghakis dan mudah meletup! Jika asid pekat terpercik ke mata, ia boleh menyebabkan buta kekal dalam masa 5 saat. Itulah sebabnya gogal keselamatan, kebuk wasap dan pencuci mata kecemasan disediakan.",
                    "contentEn": "Just as you wouldn't grab a red-hot pan with bare hands in a kitchen, science labs contain chemicals that are significantly more corrosive and toxic! If concentrated acid splashes into eyes, it can cause irreversible damage in seconds. That's why safety goggles, fume hoods and emergency eyewash stations exist.",
                    "bulletPoints": [
                      "Gogal: Melindungi mata daripada percikan asid dan kaca pecah.",
                      "Kebuk Wasap (Fume Chamber): Mengendalikan bahan meruap bertoksik seperti gas klorin dan ammonia.",
                      "Tumpahan Merkuri: JANGAN sesekali menyapu atau memvakum merkuri! Taburkan SERBUK SULFUR dengan segera dan hubungi bomba."
                    ],
                    "bulletPointsEn": [
                      "Goggles: Shields eyes from acid splashes and shattered glass.",
                      "Fume Hood: Operates volatile toxic chemicals like chlorine gas and ammonia.",
                      "Mercury Spill: NEVER sweep or vacuum mercury! Cover with SULFUR POWDER immediately and notify emergency services."
                    ],
                    "mnemonic": "💡 Formula Ingat: 'M-S: Merkuri tabur Sulfur'. Jangan guna air!",
                    "mnemonicEn": "💡 Memory Hack: 'M-S: Mercury needs Sulfur'. Never use water!"
                  }
                ]
              },
              "quiz": {
                "id": "f4-sn-q1",
                "title": "Kuiz Interaktif Bab 1: Keselamatan Makmal",
                "titleEn": "Interactive Quiz Chapter 1: Laboratory Safety",
                "timeLimitMinutes": 10,
                "xpPoints": 100,
                "questions": [
                  {
                    "question": "Apakah tindakan pertama yang perlu diambil jika termometer merkuri pecah di atas meja makmal?",
                    "questionEn": "What is the very first step to take if a mercury thermometer shatters on the lab bench?",
                    "options": [
                      "Maklumkan guru dan taburkan serbuk sulfur di atas tumpahan merkuri",
                      "Sapu merkuri dengan penyapu ke dalam tong sampah",
                      "Basuh merkuri dengan air paip yang banyak",
                      "Gunakan pembersih vakum untuk menyedut manik merkuri"
                    ],
                    "optionsEn": [
                      "Notify teacher and sprinkle sulfur powder over the mercury spill",
                      "Sweep mercury into dustbin",
                      "Wash mercury down the sink with water",
                      "Vacuum the mercury droplets"
                    ],
                    "correctIndex": 0,
                    "explanation": "Merkuri meruap menjadi gas bertoksik. Menaburkan serbuk sulfur meneutralkan dan mengikat merkuri membentuk merkuri sulfida yang selamat.",
                    "explanationEn": "Mercury evaporates into toxic fumes. Scattering sulfur powder binds with mercury to form non-volatile mercury sulfide."
                  }
                ]
              }
            },
            {
              "id": "f4-sn-c2",
              "number": "Bab 2",
              "numberEn": "Chapter 2",
              "title": "Bantuan Kecemasan: CPR & Heimlich Maneuver",
              "titleEn": "Emergency Assistance: CPR & Heimlich Maneuver",
              "summary": "Prosedur Resusitasi Kardiopulmonari (CPR) bagi mangsa henti jantung atau lemas, nisbah 30 mampatan dada dan 2 hembusan mulut. Kaedah Heimlich Maneuver bagi menyelamatkan mangsa tercekik makanan.",
              "summaryEn": "Cardiopulmonary Resuscitation (CPR) protocols for cardiac arrest or drowning victims, 30 chest compressions to 2 rescue breaths ratio. Heimlich Maneuver techniques to save choking individuals.",
              "xpReward": 120,
              "video": {
                "title": "Menyelamatkan Nyawa: Kaedah CPR & Heimlich Maneuver Sebenar",
                "duration": "13:00",
                "presenter": "Cikgu Farah (Guru Cemerlang Sains)",
                "embedUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
                "highlights": [
                  "01:10 - Mangsa Tercekik di Kedai Makan",
                  "04:30 - Heimlich Maneuver",
                  "08:15 - CPR 30:2"
                ]
              },
              "notes": {
                "readTime": "7 minit",
                "readTimeEn": "7 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "1. Analogi Dunia Sebenar: Tercekik Bebola Ikan di Restoran & Pam Jantung",
                    "headingEn": "1. Real-Life Analogy: Choking on Fishball at Food Court & Heart Pump",
                    "content": "Bayangkan anda sedang makan malam bersama rakan di restoran. Tiba-tiba rakan anda tercekik bebola ikan, tidak boleh bercakap, memegang lehernya dengan kedua-dua belah tangan dan mukanya mula membiru. Ini tanda amaran universal tercekik! Anda perlu melakukan HEIMLICH MANEUVER serta-merta. Bagi mangsa yang jantungnya terhenti, otak manusia akan mati selepas 4 minit tanpa oksigen. CPR bertindak sebagai PAM JANTUNG MANUAL untuk terus membekalkan darah beroksigen ke otak sehingga ambulans tiba!",
                    "contentEn": "Imagine dining at a food court with friends. Suddenly a friend chokes on a fishball, cannot speak, clutches their throat with both hands, and their face turns blue. This is the universal choking sign! You must execute the HEIMLICH MANEUVER immediately. In cardiac arrest, brain cells die within 4 minutes without oxygen. CPR acts as a MANUAL MECHANICAL PUMP keeping oxygenated blood flowing to the brain until paramedics arrive!",
                    "bulletPoints": [
                      "Heimlich Maneuver: Berdiri di belakang mangsa, genggam tangan di antara pusat dan bawah tulang rusuk, tekan ke dalam dan ke atas dengan pantas.",
                      "CPR (30 Mampatan : 2 Hembusan): Tekan bahagian tengah dada sedalam 5-6 cm pada kadar 100-120 mampatan seminit.",
                      "Lagu Irama CPR: Tekan mengikut rentak lagu 'Stayin' Alive' oleh Bee Gees atau lagu kanak-kanak 'Baby Shark'!"
                    ],
                    "bulletPointsEn": [
                      "Heimlich Maneuver: Stand behind victim, fist placed between navel and ribcage, thrust inward and upward forcefully.",
                      "CPR (30 Compressions : 2 Breaths): Push hard and fast in center of chest 5-6 cm deep at 100-120 bpm.",
                      "CPR Tempo Guide: Compress to the rhythm of 'Stayin' Alive' or 'Baby Shark'!"
                    ],
                    "mnemonic": "💡 Formula Emas: '30:2' (30 kali tekan dada, 2 kali hembus nafas). Cepat dan dalam!",
                    "mnemonicEn": "💡 Golden Ratio: '30:2' (30 chest compressions, 2 rescue breaths). Hard and fast!"
                  }
                ]
              },
              "quiz": {
                "id": "f4-sn-q2",
                "title": "Kuiz Interaktif Bab 2: Bantuan Kecemasan",
                "titleEn": "Interactive Quiz Chapter 2: Emergency Assistance",
                "timeLimitMinutes": 10,
                "xpPoints": 100,
                "questions": [
                  {
                    "question": "Apakah nisbah mampatan dada kepada hembusan nafas mulut yang betul semasa melakukan CPR kepada orang dewasa?",
                    "questionEn": "What is the correct ratio of chest compressions to rescue breaths during adult CPR?",
                    "options": [
                      "30 mampatan dada : 2 hembusan nafas",
                      "15 mampatan dada : 2 hembusan nafas",
                      "10 mampatan dada : 5 hembusan nafas",
                      "50 mampatan dada : 1 hembusan nafas"
                    ],
                    "optionsEn": [
                      "30 chest compressions : 2 rescue breaths",
                      "15 chest compressions : 2 rescue breaths",
                      "10 chest compressions : 5 rescue breaths",
                      "50 chest compressions : 1 rescue breath"
                    ],
                    "correctIndex": 0,
                    "explanation": "Protokol antarabangsa menetapkan 30 mampatan dada berterusan diikuti oleh 2 hembusan nafas bantuan (30:2).",
                    "explanationEn": "International resuscitation guidelines mandate 30 chest compressions followed by 2 rescue breaths (30:2)."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f4-perniagaan",
          "name": "Perniagaan (SPM)",
          "code": "3766",
          "icon": "💼",
          "color": "from-amber-600 to-yellow-700",
          "theme": "amber",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Bab 1: Tujuan Perniagaan dan Bentuk Pemilikan Perniagaan (Milikan Tunggal, Perkongsian, Syarikat Sdn Bhd).",
          "chapters": [
            {
              "id": "f4-perniagaan-c1",
              "number": "Bab 1",
              "numberEn": "Chapter 1",
              "title": "Tujuan Perniagaan dan Pemilikan Perniagaan",
              "titleEn": "Purpose of Business and Business Ownership",
              "summary": "Konsep perniagaan: Menghasilkan barang & perkhidmatan, memuaskan keperluan & kehendak pengguna, keuntungan vs organisasi bukan keuntungan (OBK). Bentuk pemilikan perniagaan: Milikan Tunggal, Perkongsian, Syarikat Berhad (Sdn Bhd & Bhd), dan Koperasi.",
              "summaryEn": "Core business concept: Providing goods and services, satisfying human needs and wants, profit vs non-profit organizations. Business entities: Sole Proprietorship, Partnership, Companies Limited by Shares (Sdn Bhd & Bhd), and Cooperatives.",
              "xpReward": 120,
              "video": {
                "title": "Dari Gerai Burger Tepi Jalan ke Syarikat Sdn Bhd Bernilai Jutaan Ringgit",
                "duration": "13:40",
                "presenter": "Cikgu Razak (Pakar Perniagaan SPM)",
                "embedUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
                "highlights": [
                  "01:10 - Keperluan vs Kehendak",
                  "04:30 - Milikan Tunggal vs Syarikat Sdn Bhd",
                  "08:15 - Liabiliti Terhad vs Tidak Terhad"
                ]
              },
              "notes": {
                "readTime": "7 minit",
                "readTimeEn": "7 mins",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "1. Analogi Dunia Sebenar: Membuka Gerai Burger Ramly vs Menubuhkan Restoran Mewah",
                    "headingEn": "1. Real-Life Analogy: Street Burger Stall vs Nationwide Restaurant Chain",
                    "content": "Bayangkan anda mahu berniaga. Anda bermula dengan membuka gerai burger tepi jalan modal RM1,000 simpanan sendiri. Anda menguruskan stok, menggoreng daging, melayan pelanggan dan menyimpan semua keuntungan sendiri. Ini adalah MILIKAN TUNGGAL! Tetapi jika perniagaan berkembang dan anda memerlukan modal RM500,000 untuk buka kilang memproses daging burger, anda boleh menubuhkan SYARIKAT SDN BHD bersama rakan kongsi pelabur. Kelebihannya? Liabiliti Terhad—jika syarikat muflis, kereta dan rumah peribadi anda selamat daripada disita bank!",
                    "contentEn": "Imagine starting a business with a roadside burger stall using RM1,000 savings. You manage inventory, cook patties, serve customers and keep all profits. That is a SOLE PROPRIETORSHIP! As you expand into nationwide distribution requiring RM500,000, you form a PRIVATE LIMITED COMPANY (Sdn Bhd). Its superpower? Limited Liability—if the business fails, your personal car and family home are legally shielded from creditors!",
                    "bulletPoints": [
                      "Milikan Tunggal: Modal kecil, pendaftaran mudah di SSM, keuntungan milik sendiri, tetapi LIABILITI TIDAK TERHAD (harta peribadi boleh disita jika rugi).",
                      "Perkongsian: Dimiliki 2 hingga 20 orang rakan kongsi, modal lebih besar, gabungan kepakaran.",
                      "Syarikat Sdn Bhd: Pemegang saham 1 hingga 50 orang, LIABILITI TERHAD (hanya rugi setakat modal saham dilaburkan), entiti undang-undang berasingan.",
                      "Koperasi: Matlamat utama untuk menjaga kebajikan sosioekonomi anggota, bukan memaksimumkan keuntungan semata-mata."
                    ],
                    "bulletPointsEn": [
                      "Sole Proprietorship: Low startup capital, full autonomy, but unlimited liability.",
                      "Partnership: 2-20 partners pooling capital and complementary skills.",
                      "Sdn Bhd: Limited liability protecting personal assets, separate legal entity.",
                      "Cooperative: Focuses on member welfare rather than pure profit extraction."
                    ],
                    "mnemonic": "💡 Formula Liabiliti: 'Sdn Bhd = Selamat Harta Peribadi (Liabiliti Terhad)'. 'Milikan Tunggal = Tanggung semua sampai poket kosong (Liabiliti Tidak Terhad)'.",
                    "mnemonicEn": "💡 Liability Rule: Sdn Bhd gives Limited Liability shielding personal wealth."
                  }
                ]
              },
              "quiz": {
                "id": "f4-perniagaan-q1",
                "title": "Kuiz Interaktif Bab 1: Pemilikan Perniagaan",
                "titleEn": "Interactive Quiz Chapter 1: Business Ownership",
                "timeLimitMinutes": 10,
                "xpPoints": 100,
                "questions": [
                  {
                    "question": "Apakah kelebihan utama sesebuah perniagaan yang didaftarkan sebagai Syarikat Sendirian Berhad (Sdn. Bhd.) berbanding Milikan Tunggal?",
                    "questionEn": "What is the primary advantage of registering as a Private Limited Company (Sdn Bhd) compared to a Sole Proprietorship?",
                    "options": [
                      "Pemegang saham menikmati liabiliti terhad (harta peribadi tidak boleh disita untuk membayar hutang perniagaan)",
                      "Perniagaan tidak perlu membayar cukai pendapatan",
                      "Tidak perlu menyediakan laporan kewangan tahunan",
                      "Keuntungan tidak perlu dibahagikan kepada sesiapa"
                    ],
                    "optionsEn": [
                      "Shareholders enjoy limited liability protecting personal assets from business debts",
                      "Exemption from all corporate taxes",
                      "No requirement for annual financial audits",
                      "Owner keeps 100% of profits without sharing"
                    ],
                    "correctIndex": 0,
                    "explanation": "Liabiliti terhad bermaksud tanggungan kerugian pemegang saham terhad kepada jumlah modal saham yang telah dilaburkan sahaja. Harta peribadi mereka dilindungi undang-undang.",
                    "explanationEn": "Limited liability guarantees that owners' financial exposure is capped at their invested share capital, protecting personal assets."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f4-pi",
          "name": "Pendidikan Islam (SPM)",
          "code": "1223",
          "icon": "🕌",
          "color": "from-teal-600 to-emerald-700",
          "theme": "teal",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Akidah: Pegangan Ahli Sunnah Wal Jamaah (ASWJ), ciri-ciri aliran yang bertentangan (Syiah, Khawarij), dan kemanisan iman.",
          "chapters": [
            {
              "id": "f4-pi-c1",
              "number": "Unit 1",
              "numberEn": "Unit 1",
              "title": "Akidah: Pegangan Ahli Sunnah Wal Jamaah (ASWJ)",
              "titleEn": "Faith: The Creed of Ahli Sunnah Wal Jamaah",
              "summary": "Mengenal prinsip akidah Ahli Sunnah Wal Jamaah (ASWJ) yang berpandukan al-Quran, as-Sunnah dan pandangan ijmak sahabat. Menjauhi amalan khurafat, sihir, ajaran sesat dan fahaman ekstremis dalam masyarakat moden.",
              "summaryEn": "Core tenets of Ahli Sunnah Wal Jamaah based on Quran, authentic Sunnah, and consensus of companions. Rejecting superstition, black magic, deviant cults and extremist interpretations in modern society.",
              "xpReward": 120,
              "video": {
                "title": "Akidah Kukuh: Menolak Ajaran Sesat & Fahaman Menyimpang",
                "duration": "12:45",
                "presenter": "Ustaz Luqman (Pakar Pendidikan Islam SPM)",
                "embedUrl": "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
                "highlights": [
                  "01:10 - Siapakah Ahli Sunnah Wal Jamaah",
                  "04:30 - Ciri-ciri Ajaran Sesat",
                  "08:15 - Menjaga Iman di Zaman Internet"
                ]
              },
              "notes": {
                "readTime": "7 minit",
                "readTimeEn": "7 mins",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "1. Analogi Dunia Sebenar: Navigasi GPS Kompas di Lautan Luas",
                    "headingEn": "1. Real-Life Analogy: GPS Compass Navigation on Stormy Seas",
                    "content": "Bayangkan anda menaiki kapal di lautan gelap gelita waktu malam. Jika anda tiada kompas atau GPS yang tepat, kapal anda pasti hanyut dan melanggar batu karang tajam! Dalam kehidupan dunia yang penuh dengan kekeliruan maklumat di media sosial, AKIDAH AHLI SUNNAH WAL JAMAAH ialah kompas panduan yang lurus berasaskan al-Quran dan Sunnah Rasulullah SAW agar iman kita tidak tersasar mengikut nafsu atau ajaran sesat.",
                    "contentEn": "Imagine steering a ship across pitch-black stormy seas. Without reliable GPS coordinates, you crash onto jagged reefs! In an era of online misinformation, sound faith serves as an authentic compass guiding human morals and spiritual integrity.",
                    "bulletPoints": [
                      "Sumber Rujukan: Al-Quran, As-Sunnah, Ijmak Ulama dan Qias.",
                      "Ciri Pegangan: Sederhana (wasatiyyah), tidak mengkafirkan sesama muslim tanpa bukti syarie, berpegang kepada hujah dalil sahih.",
                      "Bahaya Ajaran Sesat: Mendakwa pemimpin sebagai nabi baharu, mengubah cara solat, menghalalkan perbuatan haram seperti penipuan wang derma."
                    ],
                    "bulletPointsEn": [
                      "Primary Sources: Quran, authentic Sunnah, scholarly consensus (Ijmak), and Qiyas.",
                      "Key Creed Traits: Moderation (wasatiyyah), unity, respecting companions.",
                      "Hallmarks of Deviant Cults: Claiming false prophethood, altering established rituals, financial exploitation."
                    ],
                    "mnemonic": "💡 Formula Pegangan: Al-Quran + As-Sunnah + Sahabat = Akidah Selamat Dunia Akhirat.",
                    "mnemonicEn": "💡 Core Anchor: Adhering strictly to authentic foundational sources ensures spiritual clarity."
                  }
                ]
              },
              "quiz": {
                "id": "f4-pi-q1",
                "title": "Kuiz Interaktif Unit 1: Akidah Ahli Sunnah Wal Jamaah",
                "titleEn": "Interactive Quiz Unit 1: Ahli Sunnah Wal Jamaah",
                "timeLimitMinutes": 10,
                "xpPoints": 100,
                "questions": [
                  {
                    "question": "Antara berikut, yang manakah merupakan prinsip utama pegangan akidah Ahli Sunnah Wal Jamaah?",
                    "questionEn": "Which of the following is a primary principle of Ahli Sunnah Wal Jamaah creed?",
                    "options": [
                      "Berpegang teguh kepada al-Quran, as-Sunnah dan pandangan ijmak para sahabat Nabi SAW",
                      "Mendakwa pemimpin kumpulan menerima wahyu baharu selepas kewafatan Rasulullah SAW",
                      "Mengkafirkan orang Islam yang melakukan dosa besar secara membuta tuli",
                      "Menolak hadis Nabi SAW dan hanya menerima akal fikiran semata-mata"
                    ],
                    "optionsEn": [
                      "Strict adherence to Quran, authentic Sunnah and consensus of companions",
                      "Claiming continuing revelation post-prophethood",
                      "Indiscriminate excommunication of fellow believers",
                      "Rejecting prophetic traditions entirely"
                    ],
                    "correctIndex": 0,
                    "explanation": "Ahli Sunnah Wal Jamaah berpegang kepada ajaran al-Quran, Sunnah Rasulullah SAW dan kefahaman para sahabat serta ulama muktabar dengan manhaj wasatiyyah (kesederhanaan).",
                    "explanationEn": "The orthodox tradition adheres firmly to the Quran, Sunnah, and consensus of companions in faith and practice."
                  }
                ]
              }
            }
          ]
        }
      ],
      "f5": [
        {
          "id": "f5-sej",
          "name": "Sejarah (SPM)",
          "code": "1249",
          "icon": "👑",
          "color": "from-amber-600 to-yellow-700",
          "theme": "amber",
          "hasDlp": false,
          "chaptersCount": 10,
          "description": "Kedaulatan negara, perlembagaan, raja berpelembagaan, dan pembinaan Malaysia.",
          "chapters": [
            {
              "id": "f5-sej-c1",
              "number": "Bab 1",
              "numberEn": "Chapter 1",
              "title": "Kedaulatan Negara",
              "titleEn": "Sovereignty of the Nation",
              "summary": "Konsep kedaulatan tradisional, moden, undang-undang, dan antarabangsa.",
              "summaryEn": "Concepts of traditional, modern, legal, and international sovereignty.",
              "xpReward": 120,
              "badgeReward": "Kuasai Kedaulatan Negara",
              "notes": {
                "title": "Kedaulatan Negara (Sovereignty of the Nation)",
                "readTime": "5 minit / 5 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Konsep Utama: Kedaulatan Negara",
                    "headingEn": "Key Concept: Sovereignty of the Nation",
                    "content": "Kedaulatan ialah kekuasaan tertinggi sesebuah kerajaan untuk mentadbir negara yang bebas dan merdeka.",
                    "contentEn": "Sovereignty is the supreme power of a government to govern a free and independent nation.",
                    "bulletPoints": [
                      "<strong>Definisi:</strong> Kedaulatan ialah kekuasaan tertinggi sesebuah kerajaan untuk mentadbir negara yang bebas dan merdeka.",
                      "<strong>Aplikasi Penting:</strong> Konsep ini kerap disoal dalam peperiksaan format rasmi KPM."
                    ],
                    "bulletPointsEn": [
                      "<strong>Definition:</strong> Sovereignty is the supreme power of a government to govern a free and independent nation.",
                      "<strong>Key Application:</strong> Frequently tested in official KPM examination formats."
                    ],
                    "mnemonic": "💡 <strong>Formula Pintar:</strong> 4 Jenis Kedaulatan: Tradisional, Moden, Undang-undang, Antarabangsa!",
                    "mnemonicEn": "💡 <strong>Smart Tip:</strong> 4 Types of Sovereignty: Traditional, Modern, Legal, International!",
                    "examTip": "4 Jenis Kedaulatan: Tradisional, Moden, Undang-undang, Antarabangsa!",
                    "examTipEn": "4 Types of Sovereignty: Traditional, Modern, Legal, International!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f5-sej-c1",
                "title": "Kuiz / Quiz: Kedaulatan Negara",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Apakah takrif kedaulatan dalam konteks sesebuah negara moden?",
                    "questionEn": "What is the definition of sovereignty in the context of a modern state?",
                    "options": [
                      "Kekuasaan tertinggi mentadbir negara merdeka",
                      "Kuasa menjajah negara lain",
                      "Perdagangan bebas",
                      "Kekuatan tentera semata-mata"
                    ],
                    "optionsEn": [
                      "Supreme governing power of an independent nation",
                      "Power to colonize",
                      "Free trade",
                      "Pure military might"
                    ],
                    "correctIndex": 0,
                    "explanation": "Kedaulatan merujuk kepada kekuasaan tertinggi yang bebas daripada campur tangan asing.",
                    "explanationEn": "Sovereignty refers to supreme authority free from external interference."
                  }
                ]
              }
            },
            {
              "id": "f5-sej-c2",
              "number": "Bab 2",
              "numberEn": "Chapter 2",
              "title": "Perlembagaan Persekutuan",
              "titleEn": "Federal Constitution",
              "summary": "Ciri tradisional (Raja, Agama Islam, Bahasa Melayu, Kedudukan Istimewa) vs ciri moden (Persekutuan, Demokrasi, Kewarganegaraan).",
              "summaryEn": "Traditional features (Monarchy, Islam, Malay Language, Special Position) vs modern features (Federation, Democracy, Citizenship).",
              "xpReward": 120,
              "badgeReward": "Kuasai Perlembagaan Persekutuan",
              "notes": {
                "title": "Perlembagaan Persekutuan (Federal Constitution)",
                "readTime": "5 minit / 5 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Konsep Utama: Perlembagaan Persekutuan",
                    "headingEn": "Key Concept: Federal Constitution",
                    "content": "Perlembagaan Persekutuan ialah undang-undang tertinggi Malaysia yang menjadi asas sistem pemerintahan negara.",
                    "contentEn": "The Federal Constitution is the supreme law of Malaysia forming the foundation of state governance.",
                    "bulletPoints": [
                      "<strong>Definisi:</strong> Perlembagaan Persekutuan ialah undang-undang tertinggi Malaysia yang menjadi asas sistem pemerintahan negara.",
                      "<strong>Aplikasi Penting:</strong> Konsep ini kerap disoal dalam peperiksaan format rasmi KPM."
                    ],
                    "bulletPointsEn": [
                      "<strong>Definition:</strong> The Federal Constitution is the supreme law of Malaysia forming the foundation of state governance.",
                      "<strong>Key Application:</strong> Frequently tested in official KPM examination formats."
                    ],
                    "mnemonic": "💡 <strong>Formula Pintar:</strong> Tradisional (Warisan Kesultanan), Moden (Demokrasi & Persekutuan)!",
                    "mnemonicEn": "💡 <strong>Smart Tip:</strong> Traditional (Sultanate Heritage), Modern (Democracy & Federation)!",
                    "examTip": "Tradisional (Warisan Kesultanan), Moden (Demokrasi & Persekutuan)!",
                    "examTipEn": "Traditional (Sultanate Heritage), Modern (Democracy & Federation)!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f5-sej-c2",
                "title": "Kuiz / Quiz: Perlembagaan Persekutuan",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Dokumen undang-undang tertinggi persekutuan di Malaysia ialah...",
                    "questionEn": "The supreme legal document of the federation in Malaysia is...",
                    "options": [
                      "Akta Parlimen",
                      "Perlembagaan Persekutuan",
                      "Warta Kerajaan",
                      "Deklarasi Kemerdekaan"
                    ],
                    "optionsEn": [
                      "Act of Parliament",
                      "Federal Constitution",
                      "Government Gazette",
                      "Independence Declaration"
                    ],
                    "correctIndex": 1,
                    "explanation": "Perlembagaan Persekutuan mengatasi semua undang-undang lain di Malaysia.",
                    "explanationEn": "The Federal Constitution overrides all other written laws in Malaysia."
                  }
                ]
              }
            },
            {
              "id": "f5-sej-c3",
              "number": "Bab 3",
              "numberEn": "Chapter 3",
              "title": "Raja Berperlembagaan & Demokrasi Berparlimen",
              "titleEn": "Constitutional Monarchy & Parliamentary Democracy",
              "summary": "Institusi Yang di-Pertuan Agong, Majlis Raja-Raja, amalan pilihan raya dan kebebasan asasi.",
              "summaryEn": "Institution of Yang di-Pertuan Agong, Conference of Rulers, elections, and fundamental liberties.",
              "xpReward": 120,
              "badgeReward": "Kuasai Raja Berperlembagaan & Demokrasi Berparlimen",
              "notes": {
                "title": "Raja Berperlembagaan & Demokrasi Berparlimen (Constitutional Monarchy & Parliamentary Democracy)",
                "readTime": "5 minit / 5 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Konsep Utama: Raja Berperlembagaan & Demokrasi Berparlimen",
                    "headingEn": "Key Concept: Constitutional Monarchy & Parliamentary Democracy",
                    "content": "Yang di-Pertuan Agong bertindak mengikut nasihat Perdana Menteri tetapi mempunyai kuasa budi bicara dalam pelantikan PM dan pembubaran Parlimen.",
                    "contentEn": "The Yang di-Pertuan Agong acts on advice of PM but holds discretionary powers on appointing PM and dissolving Parliament.",
                    "bulletPoints": [
                      "<strong>Definisi:</strong> Yang di-Pertuan Agong bertindak mengikut nasihat Perdana Menteri tetapi mempunyai kuasa budi bicara dalam pelantikan PM dan pembubaran Parlimen.",
                      "<strong>Aplikasi Penting:</strong> Konsep ini kerap disoal dalam peperiksaan format rasmi KPM."
                    ],
                    "bulletPointsEn": [
                      "<strong>Definition:</strong> The Yang di-Pertuan Agong acts on advice of PM but holds discretionary powers on appointing PM and dissolving Parliament.",
                      "<strong>Key Application:</strong> Frequently tested in official KPM examination formats."
                    ],
                    "mnemonic": "💡 <strong>Formula Pintar:</strong> Tiga Badan Kerajaan: Perundangan (Parlimen), Eksekutif (Kabinet), Kehakiman (Mahkamah)!",
                    "mnemonicEn": "💡 <strong>Smart Tip:</strong> Three Branches of Government: Legislative (Parliament), Executive (Cabinet), Judiciary (Courts)!",
                    "examTip": "Tiga Badan Kerajaan: Perundangan (Parlimen), Eksekutif (Kabinet), Kehakiman (Mahkamah)!",
                    "examTipEn": "Three Branches of Government: Legislative (Parliament), Executive (Cabinet), Judiciary (Courts)!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f5-sej-c3",
                "title": "Kuiz / Quiz: Raja Berperlembagaan & Demokrasi Berparlimen",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Siapakah ketua utama negara bagi Persekutuan Malaysia?",
                    "questionEn": "Who is the supreme head of state for the Federation of Malaysia?",
                    "options": [
                      "Perdana Menteri",
                      "Yang di-Pertuan Agong",
                      "Yang di-Pertua Dewan Rakyat",
                      "Ketua Hakim Negara"
                    ],
                    "optionsEn": [
                      "Prime Minister",
                      "Yang di-Pertuan Agong",
                      "Speaker of House",
                      "Chief Justice"
                    ],
                    "correctIndex": 1,
                    "explanation": "Yang di-Pertuan Agong ialah Ketua Utama Negara Malaysia termaktub dalam Perlembagaan.",
                    "explanationEn": "The Yang di-Pertuan Agong is the Supreme Head of State enshrined in the Constitution."
                  }
                ]
              }
            },
            {
              "id": "f5-sej-c4",
              "number": "Bab 4",
              "numberEn": "Chapter 4",
              "title": "Sistem Persekutuan",
              "titleEn": "Federal System",
              "summary": "Pembahagian kuasa antara Senarai Persekutuan, Senarai Negeri, dan Senarai Bersama.",
              "summaryEn": "Division of powers between Federal List, State List, and Concurrent List.",
              "xpReward": 120,
              "badgeReward": "Kuasai Sistem Persekutuan",
              "notes": {
                "title": "Sistem Persekutuan (Federal System)",
                "readTime": "5 minit / 5 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Konsep Utama: Sistem Persekutuan",
                    "headingEn": "Key Concept: Federal System",
                    "content": "Senarai Persekutuan (Pertahanan, Hal Ehwal Luar, Kewangan). Senarai Negeri (Tanah, Agama Islam, Kerajaan Tempatan). Senarai Bersama (Kebajikan, Biasiswa).",
                    "contentEn": "Federal List (Defence, Foreign Affairs, Finance). State List (Land, Islam, Local Govt). Concurrent List (Welfare, Scholarships).",
                    "bulletPoints": [
                      "<strong>Definisi:</strong> Senarai Persekutuan (Pertahanan, Hal Ehwal Luar, Kewangan). Senarai Negeri (Tanah, Agama Islam, Kerajaan Tempatan). Senarai Bersama (Kebajikan, Biasiswa).",
                      "<strong>Aplikasi Penting:</strong> Konsep ini kerap disoal dalam peperiksaan format rasmi KPM."
                    ],
                    "bulletPointsEn": [
                      "<strong>Definition:</strong> Federal List (Defence, Foreign Affairs, Finance). State List (Land, Islam, Local Govt). Concurrent List (Welfare, Scholarships).",
                      "<strong>Key Application:</strong> Frequently tested in official KPM examination formats."
                    ],
                    "mnemonic": "💡 <strong>Formula Pintar:</strong> Tanah & Agama = Hak Negeri; Pertahanan & Pasport = Hak Persekutuan!",
                    "mnemonicEn": "💡 <strong>Smart Tip:</strong> Land & Religion = State Power; Defence & Passports = Federal Power!",
                    "examTip": "Tanah & Agama = Hak Negeri; Pertahanan & Pasport = Hak Persekutuan!",
                    "examTipEn": "Land & Religion = State Power; Defence & Passports = Federal Power!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f5-sej-c4",
                "title": "Kuiz / Quiz: Sistem Persekutuan",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Bidang kuasa tanah dan hal ehwal agama Islam di Malaysia diletakkan di bawah...",
                    "questionEn": "Jurisdiction over land and Islamic affairs in Malaysia falls under...",
                    "options": [
                      "Senarai Persekutuan",
                      "Senarai Negeri",
                      "Senarai Bersama",
                      "Senarai Antarabangsa"
                    ],
                    "optionsEn": [
                      "Federal List",
                      "State List",
                      "Concurrent List",
                      "International List"
                    ],
                    "correctIndex": 1,
                    "explanation": "Hal ehwal tanah dan pentadbiran Islam terletak di bawah bidang kuasa mutlak Kerajaan Negeri.",
                    "explanationEn": "Land matters and Islamic administration fall under exclusive State jurisdiction."
                  }
                ]
              }
            },
            {
              "id": "f5-sej-c5",
              "number": "Bab 5",
              "numberEn": "Chapter 5",
              "title": "Pembentukan Malaysia 1963",
              "titleEn": "Formation of Malaysia 1963",
              "summary": "Idea pembentukan Malaysia, reaksi dalam dan luar negeri, Suruhanjaya Cobbold, Perjanjian Malaysia 1963.",
              "summaryEn": "Ideas of Malaysia, domestic & regional reactions, Cobbold Commission, Malaysia Agreement 1963.",
              "xpReward": 120,
              "badgeReward": "Kuasai Pembentukan Malaysia 1963",
              "notes": {
                "title": "Pembentukan Malaysia 1963 (Formation of Malaysia 1963)",
                "readTime": "5 minit / 5 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Konsep Utama: Pembentukan Malaysia 1963",
                    "headingEn": "Key Concept: Formation of Malaysia 1963",
                    "content": "Malaysia dibentuk pada 16 September 1963 menggabungkan Persekutuan Tanah Melayu, Sarawak, Sabah dan Singapura.",
                    "contentEn": "Malaysia was formed on 16 September 1963 uniting Malaya, Sarawak, Sabah and Singapore.",
                    "bulletPoints": [
                      "<strong>Definisi:</strong> Malaysia dibentuk pada 16 September 1963 menggabungkan Persekutuan Tanah Melayu, Sarawak, Sabah dan Singapura.",
                      "<strong>Aplikasi Penting:</strong> Konsep ini kerap disoal dalam peperiksaan format rasmi KPM."
                    ],
                    "bulletPointsEn": [
                      "<strong>Definition:</strong> Malaysia was formed on 16 September 1963 uniting Malaya, Sarawak, Sabah and Singapore.",
                      "<strong>Key Application:</strong> Frequently tested in official KPM examination formats."
                    ],
                    "mnemonic": "💡 <strong>Formula Pintar:</strong> Cobbold mengesahkan 2/3 rakyat Sabah & Sarawak menyokong Malaysia!",
                    "mnemonicEn": "💡 <strong>Smart Tip:</strong> Cobbold verified 2/3 of Sabah & Sarawak supported joining Malaysia!",
                    "examTip": "Cobbold mengesahkan 2/3 rakyat Sabah & Sarawak menyokong Malaysia!",
                    "examTipEn": "Cobbold verified 2/3 of Sabah & Sarawak supported joining Malaysia!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f5-sej-c5",
                "title": "Kuiz / Quiz: Pembentukan Malaysia 1963",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Suruhanjaya manakah yang dibentuk untuk meninjau pandangan penduduk Sarawak dan Sabah?",
                    "questionEn": "Which Commission was established to survey the opinions of people in Sarawak and Sabah?",
                    "options": [
                      "Suruhanjaya Reid",
                      "Suruhanjaya Cobbold",
                      "Jawatankuasa Kerja",
                      "Suruhanjaya Siasatan Diraja"
                    ],
                    "optionsEn": [
                      "Reid Commission",
                      "Cobbold Commission",
                      "Working Committee",
                      "Royal Inquiry Commission"
                    ],
                    "correctIndex": 1,
                    "explanation": "Suruhanjaya Cobbold dipengerusikan oleh Lord Cobbold pada tahun 1962.",
                    "explanationEn": "The Cobbold Commission was chaired by Lord Cobbold in 1962."
                  }
                ]
              }
            },
            {
              "id": "f5-sej-c6",
              "number": "Bab 6",
              "numberEn": "Chapter 6",
              "title": "Cabaran Selepas Pembentukan Malaysia",
              "titleEn": "Challenges After Formation of Malaysia",
              "summary": "Pemisahan Singapura 1965, Konfrontasi Indonesia, ancaman keselamatan komunis, dan Peristiwa 13 Mei 1969.",
              "summaryEn": "Separation of Singapore 1965, Indonesian Confrontation, communist insurgency, and 13 May 1969 racial riot.",
              "xpReward": 120,
              "badgeReward": "Kuasai Cabaran Selepas Pembentukan Malaysia",
              "notes": {
                "title": "Cabaran Selepas Pembentukan Malaysia (Challenges After Formation of Malaysia)",
                "readTime": "5 minit / 5 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Konsep Utama: Cabaran Selepas Pembentukan Malaysia",
                    "headingEn": "Key Concept: Challenges After Formation of Malaysia",
                    "content": "Penubuhan MAGERAN (Majlis Gerakan Negara) dipengerusikan Tun Abdul Razak untuk memulihkan keamanan selepas 13 Mei 1969.",
                    "contentEn": "Establishment of MAGERAN chaired by Tun Abdul Razak restored peace following 13 May 1969.",
                    "bulletPoints": [
                      "<strong>Definisi:</strong> Penubuhan MAGERAN (Majlis Gerakan Negara) dipengerusikan Tun Abdul Razak untuk memulihkan keamanan selepas 13 Mei 1969.",
                      "<strong>Aplikasi Penting:</strong> Konsep ini kerap disoal dalam peperiksaan format rasmi KPM."
                    ],
                    "bulletPointsEn": [
                      "<strong>Definition:</strong> Establishment of MAGERAN chaired by Tun Abdul Razak restored peace following 13 May 1969.",
                      "<strong>Key Application:</strong> Frequently tested in official KPM examination formats."
                    ],
                    "mnemonic": "💡 <strong>Formula Pintar:</strong> MAGERAN memulihkan keamanan, Rukun Negara digubal untuk perpaduan!",
                    "mnemonicEn": "💡 <strong>Smart Tip:</strong> MAGERAN restored peace, Rukun Negara drafted for national harmony!",
                    "examTip": "MAGERAN memulihkan keamanan, Rukun Negara digubal untuk perpaduan!",
                    "examTipEn": "MAGERAN restored peace, Rukun Negara drafted for national harmony!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f5-sej-c6",
                "title": "Kuiz / Quiz: Cabaran Selepas Pembentukan Malaysia",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Apakah majlis pentadbiran khas yang ditubuhkan untuk memulihkan keamanan selepas 13 Mei 1969?",
                    "questionEn": "What special council was established to restore national peace after 13 May 1969?",
                    "options": [
                      "MAGERAN",
                      "Jemaah Menteri",
                      "Majlis Raja-Raja",
                      "Parlimen Darurat"
                    ],
                    "optionsEn": [
                      "MAGERAN",
                      "Cabinet",
                      "Conference of Rulers",
                      "Emergency Parliament"
                    ],
                    "correctIndex": 0,
                    "explanation": "MAGERAN mengambil alih pentadbiran negara semasa proklamasi darurat 1969.",
                    "explanationEn": "MAGERAN governed the country during the 1969 state of emergency."
                  }
                ]
              }
            },
            {
              "id": "f5-sej-c7",
              "number": "Bab 7",
              "numberEn": "Chapter 7",
              "title": "Membina Kesejahteraan Negara",
              "titleEn": "Building National Wellbeing",
              "summary": "Perpaduan kaum, integrasi nasional, Dasar Pendidikan Kebangsaan, Bahasa Melayu bahasa ilmu, Dasar Kebudayaan Kebangsaan.",
              "summaryEn": "Racial unity, national integration, National Education Policy, Malay language as language of knowledge, National Culture Policy.",
              "xpReward": 120,
              "badgeReward": "Kuasai Membina Kesejahteraan Negara",
              "notes": {
                "title": "Membina Kesejahteraan Negara (Building National Wellbeing)",
                "readTime": "5 minit / 5 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Konsep Utama: Membina Kesejahteraan Negara",
                    "headingEn": "Key Concept: Building National Wellbeing",
                    "content": "Rukun Negara diisytiharkan pada 31 Ogos 1970 sebagai ideologi kebangsaan untuk memupuk perpaduan jitu.",
                    "contentEn": "Rukun Negara was proclaimed on 31 August 1970 as national ideology to foster strong unity.",
                    "bulletPoints": [
                      "<strong>Definisi:</strong> Rukun Negara diisytiharkan pada 31 Ogos 1970 sebagai ideologi kebangsaan untuk memupuk perpaduan jitu.",
                      "<strong>Aplikasi Penting:</strong> Konsep ini kerap disoal dalam peperiksaan format rasmi KPM."
                    ],
                    "bulletPointsEn": [
                      "<strong>Definition:</strong> Rukun Negara was proclaimed on 31 August 1970 as national ideology to foster strong unity.",
                      "<strong>Key Application:</strong> Frequently tested in official KPM examination formats."
                    ],
                    "mnemonic": "💡 <strong>Formula Pintar:</strong> 5 Prinsip Rukun Negara: Kepercayaan, Kesetiaan, Keluhuran, Kedaulatan, Kesopanan!",
                    "mnemonicEn": "💡 <strong>Smart Tip:</strong> 5 Principles of Rukun Negara: Belief, Loyalty, Supremacy, Sovereignty, Courtesy!",
                    "examTip": "5 Prinsip Rukun Negara: Kepercayaan, Kesetiaan, Keluhuran, Kedaulatan, Kesopanan!",
                    "examTipEn": "5 Principles of Rukun Negara: Belief, Loyalty, Supremacy, Sovereignty, Courtesy!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f5-sej-c7",
                "title": "Kuiz / Quiz: Membina Kesejahteraan Negara",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Apakah rukun kedua dalam prinsip Rukun Negara?",
                    "questionEn": "What is the second principle of the Rukun Negara?",
                    "options": [
                      "Kepercayaan kepada Tuhan",
                      "Kesetiaan kepada Raja dan Negara",
                      "Keluhuran Perlembagaan",
                      "Kedaulatan Undang-undang"
                    ],
                    "optionsEn": [
                      "Belief in God",
                      "Loyalty to King and Country",
                      "Supremacy of Constitution",
                      "Rule of Law"
                    ],
                    "correctIndex": 1,
                    "explanation": "Rukun kedua ialah Kesetiaan kepada Raja dan Negara.",
                    "explanationEn": "The second principle is Loyalty to King and Country."
                  }
                ]
              }
            },
            {
              "id": "f5-sej-c8",
              "number": "Bab 8",
              "numberEn": "Chapter 8",
              "title": "Membina Kemakmuran Negara",
              "titleEn": "Building National Prosperity",
              "summary": "Dasar Ekonomi Baru (DEB 1970-1990) dan Dasar Pembangunan Nasional (DPN 1991-2000), pembasmian kemiskinan dan penyusunan semula masyarakat.",
              "summaryEn": "New Economic Policy (NEP 1970-1990) and National Development Policy (NDP), poverty eradication and restructuring society.",
              "xpReward": 120,
              "badgeReward": "Kuasai Membina Kemakmuran Negara",
              "notes": {
                "title": "Membina Kemakmuran Negara (Building National Prosperity)",
                "readTime": "5 minit / 5 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Konsep Utama: Membina Kemakmuran Negara",
                    "headingEn": "Key Concept: Building National Prosperity",
                    "content": "Dua matlamat serampang dua mata DEB: Membasmi kemiskinan tanpa mengira kaum & Menyusun semula masyarakat bagi menghapuskan pengenalan kaum mengikut fungsi ekonomi.",
                    "contentEn": "Two prongs of NEP: Eradicate poverty regardless of race & Restructure society to eliminate racial economic identification.",
                    "bulletPoints": [
                      "<strong>Definisi:</strong> Dua matlamat serampang dua mata DEB: Membasmi kemiskinan tanpa mengira kaum & Menyusun semula masyarakat bagi menghapuskan pengenalan kaum mengikut fungsi ekonomi.",
                      "<strong>Aplikasi Penting:</strong> Konsep ini kerap disoal dalam peperiksaan format rasmi KPM."
                    ],
                    "bulletPointsEn": [
                      "<strong>Definition:</strong> Two prongs of NEP: Eradicate poverty regardless of race & Restructure society to eliminate racial economic identification.",
                      "<strong>Key Application:</strong> Frequently tested in official KPM examination formats."
                    ],
                    "mnemonic": "💡 <strong>Formula Pintar:</strong> Serampang 2 Mata DEB: Basmi Kemiskinan + Susun Semula Masyarakat!",
                    "mnemonicEn": "💡 <strong>Smart Tip:</strong> Two Prongs of NEP: Eradicate Poverty + Restructure Society!",
                    "examTip": "Serampang 2 Mata DEB: Basmi Kemiskinan + Susun Semula Masyarakat!",
                    "examTipEn": "Two Prongs of NEP: Eradicate Poverty + Restructure Society!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f5-sej-c8",
                "title": "Kuiz / Quiz: Membina Kemakmuran Negara",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Apakah matlamat utama strategi serampang dua mata Dasar Ekonomi Baru (DEB)?",
                    "questionEn": "What is the primary objective of the two-pronged New Economic Policy (NEP)?",
                    "options": [
                      "Membasmi kemiskinan dan menyusun semula masyarakat",
                      "Membina empangan",
                      "Mencetak mata wang",
                      "Menghapuskan cukai"
                    ],
                    "optionsEn": [
                      "Eradicate poverty and restructure society",
                      "Build dams",
                      "Print currency",
                      "Abolish taxes"
                    ],
                    "correctIndex": 0,
                    "explanation": "DEB bermatlamat merapatkan jurang sosioekonomi antara kaum.",
                    "explanationEn": "NEP aimed to bridge the socioeconomic gap between communities."
                  }
                ]
              }
            },
            {
              "id": "f5-sej-c9",
              "number": "Bab 9",
              "numberEn": "Chapter 9",
              "title": "Dasar Luar Malaysia",
              "titleEn": "Malaysia's Foreign Policy",
              "summary": "Asas penggubalan dasar luar, Malaysia dalam pertubuhan antarabangsa: PBB, Komanwel, ASEAN, NAM, OIC.",
              "summaryEn": "Foundations of foreign policy, Malaysia in international bodies: UN, Commonwealth, ASEAN, NAM, OIC.",
              "xpReward": 120,
              "badgeReward": "Kuasai Dasar Luar Malaysia",
              "notes": {
                "title": "Dasar Luar Malaysia (Malaysia's Foreign Policy)",
                "readTime": "5 minit / 5 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Konsep Utama: Dasar Luar Malaysia",
                    "headingEn": "Key Concept: Malaysia's Foreign Policy",
                    "content": "Malaysia mengamalkan dasar luar berprinsip berkecuali, bebas, dan bersahabat dengan semua negara tanpa mengira ideologi politik.",
                    "contentEn": "Malaysia practices a non-aligned, independent, friendly foreign policy with all nations regardless of political ideology.",
                    "bulletPoints": [
                      "<strong>Definisi:</strong> Malaysia mengamalkan dasar luar berprinsip berkecuali, bebas, dan bersahabat dengan semua negara tanpa mengira ideologi politik.",
                      "<strong>Aplikasi Penting:</strong> Konsep ini kerap disoal dalam peperiksaan format rasmi KPM."
                    ],
                    "bulletPointsEn": [
                      "<strong>Definition:</strong> Malaysia practices a non-aligned, independent, friendly foreign policy with all nations regardless of political ideology.",
                      "<strong>Key Application:</strong> Frequently tested in official KPM examination formats."
                    ],
                    "mnemonic": "💡 <strong>Formula Pintar:</strong> ZOPFAN (Zon Aman, Bebas dan Berkecuali) ASEAN 1971!",
                    "mnemonicEn": "💡 <strong>Smart Tip:</strong> ZOPFAN (Zone of Peace, Freedom and Neutrality) ASEAN 1971!",
                    "examTip": "ZOPFAN (Zon Aman, Bebas dan Berkecuali) ASEAN 1971!",
                    "examTipEn": "ZOPFAN (Zone of Peace, Freedom and Neutrality) ASEAN 1971!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f5-sej-c9",
                "title": "Kuiz / Quiz: Dasar Luar Malaysia",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Deklarasi ZOPFAN pada tahun 1971 dicetuskan oleh negara anggota...",
                    "questionEn": "The 1971 ZOPFAN Declaration was initiated by member states of...",
                    "options": [
                      "PBB",
                      "ASEAN",
                      "Komanwel",
                      "NATO"
                    ],
                    "optionsEn": [
                      "UN",
                      "ASEAN",
                      "Commonwealth",
                      "NATO"
                    ],
                    "correctIndex": 1,
                    "explanation": "ZOPFAN diisytiharkan oleh ASEAN di Kuala Lumpur pada tahun 1971.",
                    "explanationEn": "ZOPFAN was proclaimed by ASEAN in Kuala Lumpur in 1971."
                  }
                ]
              }
            },
            {
              "id": "f5-sej-c10",
              "number": "Bab 10",
              "numberEn": "Chapter 10",
              "title": "Kecemerlangan Malaysia di Persada Dunia",
              "titleEn": "Malaysia's Excellence on Global Stage",
              "summary": "Isu global: alam sekitar, Antartika warisan sejagat, pelarian Rohingya, ekonomi global, dan sains angkasa lepas.",
              "summaryEn": "Global issues: environment, Antarctica as common heritage, Rohingya refugees, global economy, and space science.",
              "xpReward": 120,
              "badgeReward": "Kuasai Kecemerlangan Malaysia di Persada Dunia",
              "notes": {
                "title": "Kecemerlangan Malaysia di Persada Dunia (Malaysia's Excellence on Global Stage)",
                "readTime": "5 minit / 5 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Konsep Utama: Kecemerlangan Malaysia di Persada Dunia",
                    "headingEn": "Key Concept: Malaysia's Excellence on Global Stage",
                    "content": "Malaysia memainkan peranan aktif di PBB, menghantar pasukan pengaman MALBATT di bawah panji PBB ke pelbagai zon konflik.",
                    "contentEn": "Malaysia actively deploys MALBATT peacekeeping forces under UN flag to global conflict zones.",
                    "bulletPoints": [
                      "<strong>Definisi:</strong> Malaysia memainkan peranan aktif di PBB, menghantar pasukan pengaman MALBATT di bawah panji PBB ke pelbagai zon konflik.",
                      "<strong>Aplikasi Penting:</strong> Konsep ini kerap disoal dalam peperiksaan format rasmi KPM."
                    ],
                    "bulletPointsEn": [
                      "<strong>Definition:</strong> Malaysia actively deploys MALBATT peacekeeping forces under UN flag to global conflict zones.",
                      "<strong>Key Application:</strong> Frequently tested in official KPM examination formats."
                    ],
                    "mnemonic": "💡 <strong>Formula Pintar:</strong> MALBATT: Wira Pengaman Malaysia di Bawah Mandat PBB!",
                    "mnemonicEn": "💡 <strong>Smart Tip:</strong> MALBATT: Malaysian Peacekeepers Under UN Mandate!",
                    "examTip": "MALBATT: Wira Pengaman Malaysia di Bawah Mandat PBB!",
                    "examTipEn": "MALBATT: Malaysian Peacekeepers Under UN Mandate!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f5-sej-c10",
                "title": "Kuiz / Quiz: Kecemerlangan Malaysia di Persada Dunia",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Apakah nama pasukan pengaman tentera Malaysia yang bertugas di bawah misi Pertubuhan Bangsa-Bangsa Bersatu?",
                    "questionEn": "What is the name of Malaysian peacekeeping troops serving under the United Nations?",
                    "options": [
                      "MALBATT",
                      "NATO",
                      "KOMANDO",
                      "REJIMEN 500"
                    ],
                    "optionsEn": [
                      "MALBATT",
                      "NATO",
                      "COMMANDO",
                      "REGIMENT 500"
                    ],
                    "correctIndex": 0,
                    "explanation": "MALBATT (Malaysian Battalion) berkhidmat di bawah misi pengaman PBB seperti UNIFIL.",
                    "explanationEn": "MALBATT serves under UN peacekeeping missions such as UNIFIL in Lebanon."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f5-mt",
          "name": "Matematik (SPM)",
          "code": "1449",
          "icon": "📊",
          "color": "from-blue-600 to-indigo-700",
          "theme": "indigo",
          "hasDlp": true,
          "chaptersCount": 8,
          "description": "Ubah langsung & songsang, matriks, matematik pengguna, dan pemodelan matematik.",
          "chapters": [
            {
              "id": "f5-mt-c1",
              "number": "Bab 1",
              "numberEn": "Chapter 1",
              "title": "Ubahan (Variation)",
              "titleEn": "Variation",
              "summary": "Ubahan langsung, ubahan songsang, dan ubahan bergabung serta penentuan pemalar k.",
              "summaryEn": "Direct variation, inverse variation, joint variation and finding the constant k.",
              "xpReward": 120,
              "badgeReward": "Kuasai Ubahan (Variation)",
              "notes": {
                "title": "Ubahan (Variation) (Variation)",
                "readTime": "5 minit / 5 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Konsep Utama: Ubahan (Variation)",
                    "headingEn": "Key Concept: Variation",
                    "content": "Ubahan langsung: y = kx. Ubahan songsang: y = k/x. Ubahan bergabung: y = kx/z.",
                    "contentEn": "Direct variation: y = kx. Inverse variation: y = k/x. Joint variation: y = kx/z.",
                    "bulletPoints": [
                      "<strong>Definisi:</strong> Ubahan langsung: y = kx. Ubahan songsang: y = k/x. Ubahan bergabung: y = kx/z.",
                      "<strong>Aplikasi Penting:</strong> Konsep ini kerap disoal dalam peperiksaan format rasmi KPM."
                    ],
                    "bulletPointsEn": [
                      "<strong>Definition:</strong> Direct variation: y = kx. Inverse variation: y = k/x. Joint variation: y = kx/z.",
                      "<strong>Key Application:</strong> Frequently tested in official KPM examination formats."
                    ],
                    "mnemonic": "💡 <strong>Formula Pintar:</strong> Langsung k = y/x; Songsang k = xy!",
                    "mnemonicEn": "💡 <strong>Smart Tip:</strong> Direct k = y/x; Inverse k = xy!",
                    "examTip": "Langsung k = y/x; Songsang k = xy!",
                    "examTipEn": "Direct k = y/x; Inverse k = xy!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f5-mt-c1",
                "title": "Kuiz / Quiz: Ubahan (Variation)",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Diberi y berubah secara langsung dengan x, dan y = 12 apabila x = 4. Apakah nilai y apabila x = 7?",
                    "questionEn": "Given that y varies directly as x, and y = 12 when x = 4. Find the value of y when x = 7.",
                    "options": [
                      "14",
                      "21",
                      "28",
                      "35"
                    ],
                    "optionsEn": [
                      "14",
                      "21",
                      "28",
                      "35"
                    ],
                    "correctIndex": 1,
                    "explanation": "k = 12/4 = 3. Maka y = 3(7) = 21.",
                    "explanationEn": "k = 12/4 = 3. Thus y = 3(7) = 21."
                  }
                ]
              }
            },
            {
              "id": "f5-mt-c2",
              "number": "Bab 2",
              "numberEn": "Chapter 2",
              "title": "Matriks (Matrices)",
              "titleEn": "Matrices",
              "summary": "Peringkat matriks, penambahan, penolakan, pendaraban matriks, dan matriks songsang 2x2.",
              "summaryEn": "Order of matrix, addition, subtraction, matrix multiplication, and 2x2 inverse matrices.",
              "xpReward": 120,
              "badgeReward": "Kuasai Matriks (Matrices)",
              "notes": {
                "title": "Matriks (Matrices) (Matrices)",
                "readTime": "5 minit / 5 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Konsep Utama: Matriks (Matrices)",
                    "headingEn": "Key Concept: Matrices",
                    "content": "Matriks songsang bagi A = [[a,b],[c,d]] ialah (1/(ad-bc)) * [[d,-b],[-c,a]]. Matriks tiada songsangan jika penentu ad-bc = 0.",
                    "contentEn": "The inverse of A = [[a,b],[c,d]] is (1/(ad-bc)) * [[d,-b],[-c,a]]. Matrix has no inverse if determinant ad-bc = 0.",
                    "bulletPoints": [
                      "<strong>Definisi:</strong> Matriks songsang bagi A = [[a,b],[c,d]] ialah (1/(ad-bc)) * [[d,-b],[-c,a]]. Matriks tiada songsangan jika penentu ad-bc = 0.",
                      "<strong>Aplikasi Penting:</strong> Konsep ini kerap disoal dalam peperiksaan format rasmi KPM."
                    ],
                    "bulletPointsEn": [
                      "<strong>Definition:</strong> The inverse of A = [[a,b],[c,d]] is (1/(ad-bc)) * [[d,-b],[-c,a]]. Matrix has no inverse if determinant ad-bc = 0.",
                      "<strong>Key Application:</strong> Frequently tested in official KPM examination formats."
                    ],
                    "mnemonic": "💡 <strong>Formula Pintar:</strong> Tukar tempat pepenjuru utama, tukar tanda pepenjuru kedua!",
                    "mnemonicEn": "💡 <strong>Smart Tip:</strong> Swap main diagonal, flip signs of opposite diagonal!",
                    "examTip": "Tukar tempat pepenjuru utama, tukar tanda pepenjuru kedua!",
                    "examTipEn": "Swap main diagonal, flip signs of opposite diagonal!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f5-mt-c2",
                "title": "Kuiz / Quiz: Matriks (Matrices)",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Matriks manakah yang TIDAK mempunyai matriks songsang?",
                    "questionEn": "Which matrix does NOT have an inverse matrix?",
                    "options": [
                      "[[2,1],[4,2]]",
                      "[[1,0],[0,1]]",
                      "[[3,2],[1,4]]",
                      "[[5,1],[2,3]]"
                    ],
                    "optionsEn": [
                      "[[2,1],[4,2]]",
                      "[[1,0],[0,1]]",
                      "[[3,2],[1,4]]",
                      "[[5,1],[2,3]]"
                    ],
                    "correctIndex": 0,
                    "explanation": "Penentu ad - bc = (2)(2) - (1)(4) = 4 - 4 = 0, maka tiada songsangan.",
                    "explanationEn": "Determinant ad - bc = (2)(2) - (1)(4) = 4 - 4 = 0, hence no inverse exists."
                  }
                ]
              }
            },
            {
              "id": "f5-mt-c3",
              "number": "Bab 3",
              "numberEn": "Chapter 3",
              "title": "Matematik Pengguna: Insurans",
              "titleEn": "Consumer Mathematics: Insurance",
              "summary": "Pengurusan risiko, insurans hayat dan insurans am, deduktibel dan ko-insurans.",
              "summaryEn": "Risk management, life and general insurance, deductible and co-insurance concepts.",
              "xpReward": 120,
              "badgeReward": "Kuasai Matematik Pengguna",
              "notes": {
                "title": "Matematik Pengguna: Insurans (Consumer Mathematics: Insurance)",
                "readTime": "5 minit / 5 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Konsep Utama: Matematik Pengguna: Insurans",
                    "headingEn": "Key Concept: Consumer Mathematics: Insurance",
                    "content": "Deduktibel ialah jumlah yang mesti ditanggung sendiri oleh pemegang polisi sebelum syarikat insurans membayar pampasan.",
                    "contentEn": "A deductible is the amount paid by policyholder before the insurance company pays compensation.",
                    "bulletPoints": [
                      "<strong>Definisi:</strong> Deduktibel ialah jumlah yang mesti ditanggung sendiri oleh pemegang polisi sebelum syarikat insurans membayar pampasan.",
                      "<strong>Aplikasi Penting:</strong> Konsep ini kerap disoal dalam peperiksaan format rasmi KPM."
                    ],
                    "bulletPointsEn": [
                      "<strong>Definition:</strong> A deductible is the amount paid by policyholder before the insurance company pays compensation.",
                      "<strong>Key Application:</strong> Frequently tested in official KPM examination formats."
                    ],
                    "mnemonic": "💡 <strong>Formula Pintar:</strong> Pampasan = Bayaran Kerugian - Deduktibel!",
                    "mnemonicEn": "💡 <strong>Smart Tip:</strong> Compensation = Total Loss - Deductible!",
                    "examTip": "Pampasan = Bayaran Kerugian - Deduktibel!",
                    "examTipEn": "Compensation = Total Loss - Deductible!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f5-mt-c3",
                "title": "Kuiz / Quiz: Matematik Pengguna: Insurans",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Encik Lim mengalami kerugian RM8,000. Deduktibel polisinya ialah RM1,500. Berapakah pampasan dibayar?",
                    "questionEn": "Mr. Lim incurred a loss of RM8,000. His policy deductible is RM1,500. How much compensation is paid?",
                    "options": [
                      "RM8,000",
                      "RM6,500",
                      "RM1,500",
                      "RM9,500"
                    ],
                    "optionsEn": [
                      "RM8,000",
                      "RM6,500",
                      "RM1,500",
                      "RM9,500"
                    ],
                    "correctIndex": 1,
                    "explanation": "Pampasan = RM8,000 - RM1,500 = RM6,500.",
                    "explanationEn": "Compensation = RM8,000 - RM1,500 = RM6,500."
                  }
                ]
              }
            },
            {
              "id": "f5-mt-c4",
              "number": "Bab 4",
              "numberEn": "Chapter 4",
              "title": "Matematik Pengguna: Percukaian",
              "titleEn": "Consumer Mathematics: Taxation",
              "summary": "Tujuan percukaian, jenis cukai: cukai pendapatan, cukai jalan, cukai pintu, cukai tanah, cukai jualan & perkhidmatan.",
              "summaryEn": "Purposes of taxation, tax types: income tax, road tax, property assessment tax, quit rent, sales & service tax.",
              "xpReward": 120,
              "badgeReward": "Kuasai Matematik Pengguna",
              "notes": {
                "title": "Matematik Pengguna: Percukaian (Consumer Mathematics: Taxation)",
                "readTime": "5 minit / 5 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Konsep Utama: Matematik Pengguna: Percukaian",
                    "headingEn": "Key Concept: Consumer Mathematics: Taxation",
                    "content": "Pendapatan bercukai = Jumlah pendapatan tahunan - Pengecualian cukai - Pelepasan cukai.",
                    "contentEn": "Chargeable income = Total annual income - Tax exemptions - Tax reliefs.",
                    "bulletPoints": [
                      "<strong>Definisi:</strong> Pendapatan bercukai = Jumlah pendapatan tahunan - Pengecualian cukai - Pelepasan cukai.",
                      "<strong>Aplikasi Penting:</strong> Konsep ini kerap disoal dalam peperiksaan format rasmi KPM."
                    ],
                    "bulletPointsEn": [
                      "<strong>Definition:</strong> Chargeable income = Total annual income - Tax exemptions - Tax reliefs.",
                      "<strong>Key Application:</strong> Frequently tested in official KPM examination formats."
                    ],
                    "mnemonic": "💡 <strong>Formula Pintar:</strong> Cukai Jalan bergantung kepada kapasiti enjin (cc) kenderaan!",
                    "mnemonicEn": "💡 <strong>Smart Tip:</strong> Road tax depends on vehicle engine capacity (cc)!",
                    "examTip": "Cukai Jalan bergantung kepada kapasiti enjin (cc) kenderaan!",
                    "examTipEn": "Road tax depends on vehicle engine capacity (cc)!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f5-mt-c4",
                "title": "Kuiz / Quiz: Matematik Pengguna: Percukaian",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Cukai yang dikenakan ke atas pegangan harta tanah (rumah/kedai) oleh pihak berkuasa tempatan ialah...",
                    "questionEn": "The tax levied on properties (houses/shops) by local authorities is...",
                    "options": [
                      "Cukai Pendapatan",
                      "Cukai Pintu (Taksiran)",
                      "Cukai Jalan",
                      "Cukai Jualan"
                    ],
                    "optionsEn": [
                      "Income Tax",
                      "Property Assessment Tax",
                      "Road Tax",
                      "Sales Tax"
                    ],
                    "correctIndex": 1,
                    "explanation": "Cukai pintu dikutip oleh majlis perbandaran untuk kos penyelenggaraan bandar.",
                    "explanationEn": "Property assessment tax is collected by local municipal councils for public maintenance."
                  }
                ]
              }
            },
            {
              "id": "f5-mt-c5",
              "number": "Bab 5",
              "numberEn": "Chapter 5",
              "title": "Kekongruenan, Pembesaran & Transformasi",
              "titleEn": "Congruency, Enlargement & Transformation",
              "summary": "Kekongruenan poligon, pembesaran dengan faktor skala k, luas imej = k² × luas objek.",
              "summaryEn": "Congruency of polygons, enlargement with scale factor k, area of image = k² × area of object.",
              "xpReward": 120,
              "badgeReward": "Kuasai Kekongruenan, Pembesaran & Transformasi",
              "notes": {
                "title": "Kekongruenan, Pembesaran & Transformasi (Congruency, Enlargement & Transformation)",
                "readTime": "5 minit / 5 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Konsep Utama: Kekongruenan, Pembesaran & Transformasi",
                    "headingEn": "Key Concept: Congruency, Enlargement & Transformation",
                    "content": "Luas Imej = k² × Luas Objek, di mana k ialah faktor skala pembesaran.",
                    "contentEn": "Area of Image = k² × Area of Object, where k is the scale factor.",
                    "bulletPoints": [
                      "<strong>Definisi:</strong> Luas Imej = k² × Luas Objek, di mana k ialah faktor skala pembesaran.",
                      "<strong>Aplikasi Penting:</strong> Konsep ini kerap disoal dalam peperiksaan format rasmi KPM."
                    ],
                    "bulletPointsEn": [
                      "<strong>Definition:</strong> Area of Image = k² × Area of Object, where k is the scale factor.",
                      "<strong>Key Application:</strong> Frequently tested in official KPM examination formats."
                    ],
                    "mnemonic": "💡 <strong>Formula Pintar:</strong> Formula Luas Imej = k² × Luas Objek!",
                    "mnemonicEn": "💡 <strong>Smart Tip:</strong> Image Area = k² × Object Area!",
                    "examTip": "Formula Luas Imej = k² × Luas Objek!",
                    "examTipEn": "Image Area = k² × Object Area!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f5-mt-c5",
                "title": "Kuiz / Quiz: Kekongruenan, Pembesaran & Transformasi",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Objek dengan luas 10 cm² dibesarkan dengan faktor skala k = 3. Apakah luas imejnya?",
                    "questionEn": "An object of area 10 cm² is enlarged with scale factor k = 3. What is the area of its image?",
                    "options": [
                      "30 cm²",
                      "60 cm²",
                      "90 cm²",
                      "100 cm²"
                    ],
                    "optionsEn": [
                      "30 cm²",
                      "60 cm²",
                      "90 cm²",
                      "100 cm²"
                    ],
                    "correctIndex": 2,
                    "explanation": "Luas Imej = (3)² × 10 = 9 × 10 = 90 cm².",
                    "explanationEn": "Area of Image = (3)² × 10 = 9 × 10 = 90 cm²."
                  }
                ]
              }
            },
            {
              "id": "f5-mt-c6",
              "number": "Bab 6",
              "numberEn": "Chapter 6",
              "title": "Nisbah & Graf Fungsi Trigonometri",
              "titleEn": "Ratios & Graphs of Trigonometric Functions",
              "summary": "Graf sin x, kos x, tan x, nilai sinus, kosinus dan tangen bagi sudut dalam sukuan I, II, III, IV.",
              "summaryEn": "Graphs of sin x, cos x, tan x, values of sine, cosine, tangent in quadrants I, II, III, IV.",
              "xpReward": 120,
              "badgeReward": "Kuasai Nisbah & Graf Fungsi Trigonometri",
              "notes": {
                "title": "Nisbah & Graf Fungsi Trigonometri (Ratios & Graphs of Trigonometric Functions)",
                "readTime": "5 minit / 5 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Konsep Utama: Nisbah & Graf Fungsi Trigonometri",
                    "headingEn": "Key Concept: Ratios & Graphs of Trigonometric Functions",
                    "content": "Sukuan I (Semua +), Sukuan II (Sin +), Sukuan III (Tan +), Sukuan IV (Kos +).",
                    "contentEn": "Quadrant I (All +), Quadrant II (Sin +), Quadrant III (Tan +), Quadrant IV (Cos +).",
                    "bulletPoints": [
                      "<strong>Definisi:</strong> Sukuan I (Semua +), Sukuan II (Sin +), Sukuan III (Tan +), Sukuan IV (Kos +).",
                      "<strong>Aplikasi Penting:</strong> Konsep ini kerap disoal dalam peperiksaan format rasmi KPM."
                    ],
                    "bulletPointsEn": [
                      "<strong>Definition:</strong> Quadrant I (All +), Quadrant II (Sin +), Quadrant III (Tan +), Quadrant IV (Cos +).",
                      "<strong>Key Application:</strong> Frequently tested in official KPM examination formats."
                    ],
                    "mnemonic": "💡 <strong>Formula Pintar:</strong> Saya Suka Tengok Kartun (Semua, Sin, Tan, Kos)!",
                    "mnemonicEn": "💡 <strong>Smart Tip:</strong> All Students Take Calculus (All, Sin, Tan, Cos)!",
                    "examTip": "Saya Suka Tengok Kartun (Semua, Sin, Tan, Kos)!",
                    "examTipEn": "All Students Take Calculus (All, Sin, Tan, Cos)!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f5-mt-c6",
                "title": "Kuiz / Quiz: Nisbah & Graf Fungsi Trigonometri",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Dalam sukuan manakah nilai Sin x positif tetapi Kos x negatif?",
                    "questionEn": "In which quadrant is Sin x positive but Cos x negative?",
                    "options": [
                      "Sukuan I",
                      "Sukuan II",
                      "Sukuan III",
                      "Sukuan IV"
                    ],
                    "optionsEn": [
                      "Quadrant I",
                      "Quadrant II",
                      "Quadrant III",
                      "Quadrant IV"
                    ],
                    "correctIndex": 1,
                    "explanation": "Sukuan II (90° hingga 180°) mempunyai nilai Sin positif dan Kos negatif.",
                    "explanationEn": "Quadrant II (90° to 180°) has positive Sine and negative Cosine."
                  }
                ]
              }
            },
            {
              "id": "f5-mt-c7",
              "number": "Bab 7",
              "numberEn": "Chapter 7",
              "title": "Sukatan Serakan Data Terkumpul",
              "titleEn": "Measures of Dispersion for Grouped Data",
              "summary": "Jadual kekerapan longgokan, ogif, persentil, julat antara kuartil, varians dan sisihan piawai.",
              "summaryEn": "Cumulative frequency tables, ogive, percentiles, interquartile range, variance and standard deviation.",
              "xpReward": 120,
              "badgeReward": "Kuasai Sukatan Serakan Data Terkumpul",
              "notes": {
                "title": "Sukatan Serakan Data Terkumpul (Measures of Dispersion for Grouped Data)",
                "readTime": "5 minit / 5 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Konsep Utama: Sukatan Serakan Data Terkumpul",
                    "headingEn": "Key Concept: Measures of Dispersion for Grouped Data",
                    "content": "Julat antara kuartil = Kuartil ketiga (Q3) - Kuartil pertama (Q1). Sisihan piawai mengukur serakan data dari min.",
                    "contentEn": "Interquartile range = Third quartile (Q3) - First quartile (Q1). Standard deviation measures dispersion from mean.",
                    "bulletPoints": [
                      "<strong>Definisi:</strong> Julat antara kuartil = Kuartil ketiga (Q3) - Kuartil pertama (Q1). Sisihan piawai mengukur serakan data dari min.",
                      "<strong>Aplikasi Penting:</strong> Konsep ini kerap disoal dalam peperiksaan format rasmi KPM."
                    ],
                    "bulletPointsEn": [
                      "<strong>Definition:</strong> Interquartile range = Third quartile (Q3) - First quartile (Q1). Standard deviation measures dispersion from mean.",
                      "<strong>Key Application:</strong> Frequently tested in official KPM examination formats."
                    ],
                    "mnemonic": "💡 <strong>Formula Pintar:</strong> Julat Antara Kuartil = Q3 - Q1!",
                    "mnemonicEn": "💡 <strong>Smart Tip:</strong> Interquartile Range = Q3 - Q1!",
                    "examTip": "Julat Antara Kuartil = Q3 - Q1!",
                    "examTipEn": "Interquartile Range = Q3 - Q1!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f5-mt-c7",
                "title": "Kuiz / Quiz: Sukatan Serakan Data Terkumpul",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Diberi Q1 = 24 dan Q3 = 58 bagi suatu data terkumpul. Hitung julat antara kuartilnya.",
                    "questionEn": "Given Q1 = 24 and Q3 = 58 for a grouped dataset. Calculate its interquartile range.",
                    "options": [
                      "24",
                      "34",
                      "48",
                      "82"
                    ],
                    "optionsEn": [
                      "24",
                      "34",
                      "48",
                      "82"
                    ],
                    "correctIndex": 1,
                    "explanation": "Julat antara kuartil = 58 - 24 = 34.",
                    "explanationEn": "Interquartile range = 58 - 24 = 34."
                  }
                ]
              }
            },
            {
              "id": "f5-mt-c8",
              "number": "Bab 8",
              "numberEn": "Chapter 8",
              "title": "Pemodelan Matematik",
              "titleEn": "Mathematical Modeling",
              "summary": "Proses pemodelan matematik: mengenal pasti masalah, membuat andaian, mengaplikasi fungsi, mentafsir keputusan.",
              "summaryEn": "Mathematical modeling process: identifying problems, making assumptions, applying functions, interpreting results.",
              "xpReward": 120,
              "badgeReward": "Kuasai Pemodelan Matematik",
              "notes": {
                "title": "Pemodelan Matematik (Mathematical Modeling)",
                "readTime": "5 minit / 5 mins",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Konsep Utama: Pemodelan Matematik",
                    "headingEn": "Key Concept: Mathematical Modeling",
                    "content": "Pemodelan matematik ialah perwakilan matematik bagi situasi dunia nyata untuk membuat ramalan dan penyelesaian.",
                    "contentEn": "Mathematical modeling is a mathematical representation of real-world situations to make predictions and solutions.",
                    "bulletPoints": [
                      "<strong>Definisi:</strong> Pemodelan matematik ialah perwakilan matematik bagi situasi dunia nyata untuk membuat ramalan dan penyelesaian.",
                      "<strong>Aplikasi Penting:</strong> Konsep ini kerap disoal dalam peperiksaan format rasmi KPM."
                    ],
                    "bulletPointsEn": [
                      "<strong>Definition:</strong> Mathematical modeling is a mathematical representation of real-world situations to make predictions and solutions.",
                      "<strong>Key Application:</strong> Frequently tested in official KPM examination formats."
                    ],
                    "mnemonic": "💡 <strong>Formula Pintar:</strong> Masalah → Andaian → Model Matematik → Penyelesaian → Laporan!",
                    "mnemonicEn": "💡 <strong>Smart Tip:</strong> Problem → Assumptions → Math Model → Solve → Report!",
                    "examTip": "Masalah → Andaian → Model Matematik → Penyelesaian → Laporan!",
                    "examTipEn": "Problem → Assumptions → Math Model → Solve → Report!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f5-mt-c8",
                "title": "Kuiz / Quiz: Pemodelan Matematik",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Langkah pertama dalam kitaran pemodelan matematik ialah...",
                    "questionEn": "The first step in the mathematical modeling cycle is...",
                    "options": [
                      "Mengenal pasti dan mentakrifkan masalah",
                      "Menulis laporan akhir",
                      "Melukis graf",
                      "Membeli perisian"
                    ],
                    "optionsEn": [
                      "Identifying and defining the problem",
                      "Writing final report",
                      "Drawing graphs",
                      "Buying software"
                    ],
                    "correctIndex": 0,
                    "explanation": "Langkah 1 sentiasa bermula dengan mengenal pasti masalah sebenar.",
                    "explanationEn": "Step 1 always begins with identifying the real-world problem."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f5-bm",
          "name": "Bahasa Melayu (SPM)",
          "code": "1103",
          "icon": "📖",
          "color": "from-red-600 to-rose-700",
          "theme": "red",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Kertas 1 (Karangan Bahagian A & B) & Kertas 2 (Morfologi, Sintaksis, Penyuntingan, Bahasa Melayu Standard).",
          "chapters": [
            {
              "id": "f5-bm-c1",
              "number": "Bab 1",
              "title": "Morfologi & Sintaksis SPM: Ayat Majmuk & Kata Ganda",
              "summary": "Kuasai soalan Kertas 2 Bahagian A: mengenal pasti jenis kata ganda, pola ayat dasar, dan penukaran ayat aktif ke ayat pasif.",
              "xpReward": 120,
              "badgeReward": "Bintang Bahasa SPM",
              "notes": {
                "title": "Bab 1: Skor A Kertas 2 Bahasa Melayu SPM",
                "readTime": "6 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Penyuntingan & Morfologi SPM",
                    "content": "Soalan morfologi SPM memerlukan pelajar membina satu ayat bagi setiap perkataan tanpa menambah imbuhan:",
                    "bulletPoints": [
                      "<strong>Kata Ganda Penuh:</strong> buku-buku, sekolah-sekolah.",
                      "<strong>Kata Ganda Separa:</strong> lelangit, jejari, pepohon, dedaun.",
                      "<strong>Kata Ganda Berentak:</strong> bukit-bukau, lauk-pauk, calar-balar, gilang-gemilang.",
                      "<strong>Ayat Aktif ke Ayat Pasif:</strong> Kenal pasti Objek, tukarkan ke hadapan sebagai Subjek baharu, gantikan imbuhan meN- kepada di-... oleh-."
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f5-bm-c1",
                "title": "Kuiz Morfologi SPM",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Perkataan 'ramah-tamah' dan 'gunung-ganang' tergolong dalam jenis kata ganda...",
                    "options": [
                      "Kata ganda penuh",
                      "Kata ganda separa",
                      "Kata ganda berentak / berirama",
                      "Kata majmuk kiasan"
                    ],
                    "correctIndex": 2,
                    "explanation": "'Ramah-tamah' dan 'gunung-ganang' menggandakan perkataan berdasarkan persamaan atau perbezaan rima rentak bunyi."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f5-bi",
          "name": "Bahasa Inggeris (SPM/CEFR)",
          "code": "1119",
          "icon": "🌍",
          "color": "from-sky-500 to-blue-600",
          "theme": "sky",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "CEFR C1 level vocabulary, report and review writing format, and reading paper 1 gapped text strategy.",
          "chapters": [
            {
              "id": "f5-bi-c1",
              "number": "Unit 1",
              "title": "Extended Writing: Report & Review Writing Masterclass",
              "summary": "Format of formal reports (To, From, Subject, Date, Recommendations) and book/product reviews for SPM Paper 2 Part 3.",
              "xpReward": 120,
              "badgeReward": "CEFR C1 Master",
              "notes": {
                "title": "Unit 1: Formal Report Writing for SPM",
                "readTime": "6 minutes",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Report Writing Structure",
                    "content": "A formal report provides factual information and actionable suggestions to a person in authority:",
                    "bulletPoints": [
                      "<strong>Header:</strong> To: [Name/Role], From: [Your Name], Subject: [Clear Title], Date: [Date].",
                      "<strong>Introduction:</strong> State the purpose of the report clearly (The aim of this report is to investigate...).",
                      "<strong>Subheadings:</strong> Divide into clear paragraphs with bold subheadings (e.g., Findings, Student Feedback).",
                      "<strong>Recommendations / Conclusion:</strong> Suggest feasible solutions (It is strongly recommended that the school library extend its operating hours)."
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f5-bi-c1",
                "title": "SPM Report Writing Quiz",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "What is an essential stylistic requirement of a formal SPM report?",
                    "options": [
                      "Use informal slang and emojis",
                      "Include subheadings and objective, professional tone",
                      "Write in first person drama format",
                      "Include rhyme schemes"
                    ],
                    "correctIndex": 1,
                    "explanation": "Reports require clear subheadings and an objective, polite tone aimed at decision-makers."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f5-fiz",
          "name": "Fizik (DLP/BM)",
          "code": "4531",
          "icon": "⚡",
          "color": "from-blue-600 to-cyan-600",
          "theme": "blue",
          "hasDlp": true,
          "chaptersCount": 1,
          "description": "Bab 1: Daya dan Gerakan II (Daya Paduan, Leraian Daya Fx = F cos θ, dan Keseimbangan Daya).",
          "chapters": [
            {
              "id": "f5-fiz-c1",
              "number": "Bab 1",
              "title": "Daya & Gerakan II: Daya Paduan & Leraian Daya",
              "summary": "Meleraikan satu daya condong kepada dua komponen berserenjang (komponen mengufuk Fx dan komponen menegak Fy) dan Hukum Newton.",
              "xpReward": 120,
              "badgeReward": "Fizikawan SPM",
              "notes": {
                "title": "Bab 1: Leraian Daya (Resolution of Forces)",
                "readTime": "6 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Formula Leraian Daya Condong",
                    "content": "Satu daya F yang bertindak pada sudut θ dengan satah ufuk boleh dileraikan kepada dua komponen serenjang:",
                    "bulletPoints": [
                      "<strong>Komponen Mengufuk:</strong> Fx = F cos θ",
                      "<strong>Komponen Menegak:</strong> Fy = F sin θ",
                      "<strong>Keseimbangan Daya:</strong> Apabila daya paduan F = 0, objek sama ada berada dalam keadaan pegun atau bergerak dengan halaju malar (Pecutan a = 0).",
                      "<strong>Segi Tiga Daya:</strong> Tiga daya dalam keseimbangan boleh diwakili oleh sisi-sisi segi tiga bertutup mengikut arah pusingan yang sama."
                    ],
                    "mnemonic": "💡 <strong>Formula Sudut:</strong> Bersentuhan dengan sudut θ gunakan COS; Bertentangan sudut θ gunakan SIN!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f5-fiz-c1",
                "title": "Kuiz Leraian Daya Fizik SPM",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Satu daya 50 N menarik objek pada sudut 60° dari garis ufuk. Apakah magnitud komponen mengufuk Fx? (cos 60° = 0.5)",
                    "options": [
                      "25 N",
                      "43.3 N",
                      "50 N",
                      "100 N"
                    ],
                    "correctIndex": 0,
                    "explanation": "Fx = F cos θ = 50 × cos 60° = 50 × 0.5 = 25 N."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f5-kim",
          "name": "Kimia (DLP/BM)",
          "code": "4541",
          "icon": "🧪",
          "color": "from-teal-600 to-emerald-700",
          "theme": "teal",
          "hasDlp": true,
          "chaptersCount": 1,
          "description": "Bab 1: Keseimbangan Redoks, Sel Kimia & Sel Elektrolisis, Kakisan Logam dan Siri Elektrokimia.",
          "chapters": [
            {
              "id": "f5-kim-c1",
              "number": "Bab 1",
              "title": "Keseimbangan Redoks: Pengoksidaan & Penurunan (OIL RIG)",
              "summary": "Memahami 4 definisi redoks: pemindahan elektron, nombor pengoksidaan, kehilangan/penerimaan oksigen dan hidrogen.",
              "xpReward": 120,
              "badgeReward": "Kimiawan Redoks SPM",
              "notes": {
                "title": "Bab 1: Asas Tindak Balas Redoks",
                "readTime": "6 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Empat Cara Mengenal Pasti Redoks",
                    "content": "Tindak balas redoks berlaku apabila pengoksidaan dan penurunan berlaku secara serentak:",
                    "bulletPoints": [
                      "<strong>1. Elektron:</strong> Pengoksidaan = Kehilangan elektron (Derma e-); Penurunan = Penerimaan elektron (Terima e-). (Formula: <em>OIL RIG - Oxidation Is Loss, Reduction Is Gain</em>).",
                      "<strong>2. Nombor Pengoksidaan:</strong> Pengoksidaan = Nombor pengoksidaan bertambah; Penurunan = Nombor pengoksidaan berkurang.",
                      "<strong>3. Agen Pengoksidaan:</strong> Bahan yang mengoksidakan bahan lain dan dirinya sendiri mengalami penurunan.",
                      "<strong>4. Agen Penurunan:</strong> Bahan yang menurunkan bahan lain dan dirinya sendiri mengalami pengoksidaan."
                    ],
                    "mnemonic": "💡 <strong>Formula Emas:</strong> O-I-L R-I-G (Oxidation Is Loss, Reduction Is Gain of electrons)!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f5-kim-c1",
                "title": "Kuiz Keseimbangan Redoks SPM",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Dalam tindak balas: Zn + Cu²⁺ → Zn²⁺ + Cu, bahan manakah yang mengalami pengoksidaan?",
                    "options": [
                      "Cu²⁺",
                      "Zn",
                      "Cu",
                      "Zn²⁺"
                    ],
                    "correctIndex": 1,
                    "explanation": "Zink (Zn) kehilangan 2 elektron untuk membentuk ion Zn²⁺ (nombor pengoksidaan meningkat daripada 0 ke +2)."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f5-bio",
          "name": "Biologi (DLP/BM)",
          "code": "4551",
          "icon": "🌱",
          "color": "from-green-600 to-emerald-700",
          "theme": "green",
          "hasDlp": true,
          "chaptersCount": 1,
          "description": "Bab 1: Organisasi Tisu Tumbuhan dan Pertumbuhan (Tisu Meristem Apeks & Meristem Sisi).",
          "chapters": [
            {
              "id": "f5-bio-c1",
              "number": "Bab 1",
              "title": "Organisasi Tisu Tumbuhan & Pertumbuhan Primer/Sekunder",
              "summary": "Perbezaan tisu meristem dengan tisu kekal (epidermis, xilem, floem) dan zon pemanjangan sel di hujung pucuk & akar.",
              "xpReward": 120,
              "badgeReward": "Pakar Botani SPM",
              "notes": {
                "title": "Bab 1: Tisu Meristem & Zon Pertumbuhan Tumbuhan",
                "readTime": "6 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Jenis Tisu Tumbuhan & Zon Pertumbuhan",
                    "content": "Pertumbuhan tumbuhan didorong oleh aktiviti pembahagian sel secara mitosis di kawasan meristem:",
                    "bulletPoints": [
                      "<strong>1. Meristem Apeks:</strong> Terletak di hujung pucuk dan hujung akar, bertanggungjawab untuk pertumbuhan PRIMER (menambah panjang/ketinggian pokok).",
                      "<strong>2. Meristem Sisi (Kambium):</strong> Bertanggungjawab untuk pertumbuhan SEKUNDER pada tumbuhan dwikotiledon (menambah lilitan/diameter batang pokok).",
                      "<strong>3. Tiga Zon Pertumbuhan:</strong>",
                      "• Zon Pembahagian Sel (mitosis pesat)",
                      "• Zon Pemanjangan Sel (penyerapan air mengembangkan vakuol)",
                      "• Zon Pembezaan Sel (sel berubah bentuk menjadi xilem, floem, rambut akar)."
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f5-bio-c1",
                "title": "Kuiz Tisu Tumbuhan & Pertumbuhan",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Pertumbuhan sekunder yang menyebabkan pertambahan diameter batang pokok dijalankan oleh tisu...",
                    "options": [
                      "Meristem apeks",
                      "Kambium vaskular (Meristem sisi)",
                      "Tisu epidermis",
                      "Tisu korteks"
                    ],
                    "correctIndex": 1,
                    "explanation": "Kambium vaskular dan kambium gabus ialah meristem sisi yang membahagi untuk membentuk xilem dan floem sekunder."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f5-sn",
          "name": "Sains Teras (SPM)",
          "code": "1511",
          "icon": "🔬",
          "color": "from-teal-600 to-cyan-700",
          "theme": "teal",
          "hasDlp": true,
          "chaptersCount": 1,
          "description": "Bab 1: Mikroorganisma (Bakteria, Fungi, Protozoa, Virus, Alga) dan aplikasi bioteknologi serta antibiotik.",
          "chapters": [
            {
              "id": "f5-sn-c1",
              "number": "Bab 1",
              "title": "Mikroorganisma: Pengelasan & Flora Normal",
              "summary": "Ciri 5 kumpulan mikroorganisma dan peranan flora normal dalam usus manusia untuk mencegah penyakit.",
              "xpReward": 120,
              "badgeReward": "Mikrobiologis SPM",
              "notes": {
                "title": "Bab 1: Lima Kumpulan Mikroorganisma",
                "readTime": "5 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Pengelasan Mikroorganisma",
                    "content": "Mikroorganisma ialah hidupan seni yang hanya dapat dilihat di bawah mikroskop:",
                    "bulletPoints": [
                      "<strong>1. Bakteria:</strong> Organisma unisel tanpa nukleus sebenar (prokariot). Mempunyai dinding sel peptidoglikan (cth: E. coli, Lactobacillus).",
                      "<strong>2. Fungi:</strong> Mempunyai dinding sel kitin, tiada klorofil (cth: Mukor, yis untuk pembuatan roti).",
                      "<strong>3. Protozoa:</strong> Organisma unisel haiwan yang bergerak menggunakan silia, pseudopodium atau flagelum (cth: Ameba, Paramecium).",
                      "<strong>4. Virus:</strong> Mikroorganisma paling halus, bukan sel hidup, hanya membiak di dalam sel perumah hidup (cth: HIV, Virus Influenza).",
                      "<strong>5. Alga:</strong> Mempunyai klorofil dan menjalankan fotosintesis (cth: Chlamydomonas, Spirogyra)."
                    ],
                    "mnemonic": "💡 <strong>Formula 5 Mikroorganisma:</strong> B-F-P-V-A (Bakteria, Fungi, Protozoa, Virus, Alga)!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f5-sn-c1",
                "title": "Kuiz Mikroorganisma Sains SPM",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Mikroorganisma manakah yang paling seni dan hanya boleh membiak di dalam sel perumah hidup?",
                    "options": [
                      "Bakteria",
                      "Yis",
                      "Virus",
                      "Ameba"
                    ],
                    "correctIndex": 2,
                    "explanation": "Virus tidak memiliki struktur sel sempurna dan memerlukan sel perumah hidup untuk menggandakan bahan genetiknya."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f5-perniagaan",
          "name": "Perniagaan (SPM)",
          "code": "3766",
          "icon": "💼",
          "color": "from-amber-600 to-yellow-700",
          "theme": "amber",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Bab 1: Pengurusan Sumber Manusia (Peranan, Standard Prestasi dan Ganjaran Pekerja).",
          "chapters": [
            {
              "id": "f5-perniagaan-c1",
              "number": "Bab 1",
              "title": "Pengurusan Sumber Manusia: Peranan & Motivasi Pekerja",
              "summary": "Kepentingan mengurus tenaga kerja: perancangan sumber manusia, latihan dan pembangunan, dan sistem ganjaran gaji & elaun.",
              "xpReward": 120,
              "badgeReward": "Pengurus Korporat SPM",
              "notes": {
                "title": "Bab 1: Peranan Pengurusan Sumber Manusia",
                "readTime": "5 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Peranan Bahagian Sumber Manusia (HR)",
                    "content": "Pengurusan sumber manusia yang cekap memastikan organisasi memiliki tenaga kerja yang kompeten dan bermotivasi:",
                    "bulletPoints": [
                      "<strong>1. Keperluan Tenaga Kerja:</strong> Mengambil pekerja yang bersesuaian dengan kelayakan dan kemahiran yang diperlukan syarikat.",
                      "<strong>2. Pembangunan Bakat:</strong> Menyediakan program latihan berterusan untuk meningkatkan produktiviti kerja.",
                      "<strong>3. Sistem Ganjaran & Faedah:</strong> Memberi gaji setimpal, bonus prestasi, cuti tahunan, dan insurans perubatan.",
                      "<strong>4. Hubungan Harmoni Majikan & Pekerja:</strong> Menjamin keselamatan di tempat kerja dan menyelesaikan pertikaian perindustrian."
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f5-perniagaan-c1",
                "title": "Kuiz Sumber Manusia Perniagaan SPM",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Apakah tujuan utama majikan mengadakan program latihan dan pembangunan kemahiran kepada pekerja?",
                    "options": [
                      "Mengurangkan gaji pekerja",
                      "Meningkatkan produktiviti dan kecekapan operasi organisasi",
                      "Memanjangkan waktu bekerja",
                      "Menamatkan kontrak pekerja lama"
                    ],
                    "correctIndex": 1,
                    "explanation": "Latihan dan pembangunan membolehkan pekerja menguasai teknologi dan kaedah baharu yang meningkatkan daya pengeluaran."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f5-pi",
          "name": "Pendidikan Islam (SPM)",
          "code": "1223",
          "icon": "🕌",
          "color": "from-teal-600 to-emerald-700",
          "theme": "teal",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Muamalat Islam: Konsep Jual Beli, Riba, Gharar, Murabahah, Takaful dan Khilafah ar-Rasyidin.",
          "chapters": [
            {
              "id": "f5-pi-c1",
              "number": "Unit 1",
              "title": "Muamalat Islam: Konsep Jual Beli & Larangan Riba",
              "summary": "Memahami rukun akad jual beli yang sah, perbezaan keuntungan perniagaan dengan riba, dan konsep Takaful.",
              "xpReward": 120,
              "badgeReward": "Muamalat Syariah SPM",
              "notes": {
                "title": "Unit 1: Prinsip Muamalat dalam Islam",
                "readTime": "5 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Prinsip Utama Muamalat Syariah",
                    "content": "Muamalat Islam berasaskan prinsip keadilan, ketelusan dan bebas daripada unsur penindasan:",
                    "bulletPoints": [
                      "<strong>1. Rukun Jual Beli:</strong> Penjual dan pembeli (berakal & baligh), barang jualan (suci & bermanfaat), ijab dan qabul (akad persetujuan).",
                      "<strong>2. Larangan Riba:</strong> Sebarang bayaran tambahan yang disyaratkan dalam urusan pinjaman atau pertukaran barang ribawi.",
                      "<strong>3. Larangan Gharar (Ketidakpastian):</strong> Penipuan atau ketidakjelasan dalam transaksi (cth: menjual ikan yang masih di laut lepas).",
                      "<strong>4. Larangan Maisir (Judi):</strong> Transaksi yang bergantung kepada pertaruhan nasib semata-mata."
                    ],
                    "mnemonic": "💡 <strong>Formula Muamalat Halal:</strong> Bebas Riba, Bebas Gharar, Bebas Maisir!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f5-pi-c1",
                "title": "Kuiz Muamalat Islam SPM",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Apakah hukum mengenakan faedah tambahan ke atas bayaran hutang pinjaman (Riba) dalam Islam?",
                    "options": [
                      "Harus",
                      "Makruh",
                      "Haram dan berdosa besar",
                      "Sunat"
                    ],
                    "correctIndex": 2,
                    "explanation": "Riba diharamkan secara mutlak oleh Al-Quran kerana menindas dan mengeksploitasi kesusahan pihak peminjam."
                  }
                ]
              }
            }
          ]
        }
      ],
      "f1": [
        {
          "id": "f1-bm",
          "name": "Bahasa Melayu (KSSM)",
          "code": "BM-F1",
          "icon": "📖",
          "color": "from-red-500 to-rose-600",
          "theme": "red",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Morfologi (golongan kata nama, kata kerja, kata adjektif), sintaksis asas, dan puisi tradisional Komsas.",
          "chapters": [
            {
              "id": "f1-bm-c1",
              "number": "Bab 1",
              "title": "Morfologi: Golongan Kata & Puisi Tradisional Pantun Dua Kerat",
              "summary": "Memahami klasifikasi golongan kata bahasa Melayu serta mengapresiasi maksud, tema, dan persoalan Pantun Dua Kerat.",
              "xpReward": 120,
              "badgeReward": "Pujangga F1",
              "notes": {
                "title": "Bab 1: Golongan Kata Utama & Komsas Pantun",
                "readTime": "5 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Empat Golongan Kata Utama Bahasa Melayu",
                    "content": "Tatabahasa bahasa Melayu membahagikan perkataan kepada empat golongan kata utama:",
                    "bulletPoints": [
                      "<strong>Kata Nama:</strong> Menamakan orang, haiwan, tempat, benda, konsep (cth: pelajar, harimau, Kuala Lumpur, kemerdekaan).",
                      "<strong>Kata Kerja:</strong> Menunjukkan perbuatan atau keadaan (cth: membaca, berlari, tersenyum, menyapu).",
                      "<strong>Kata Adjektif:</strong> Menerangkan sifat atau keadaan sesuatu (cth: bijak, pantas, merah, wangi, bulat).",
                      "<strong>Kata Tugas:</strong> Membantu ayat seperti kata hubung, kata sendi nama, kata seru, kata nafi."
                    ],
                    "mnemonic": "💡 <strong>Formula 4 Golongan:</strong> K-N-K-A-K-T (Nama, Kerja, Adjektif, Tugas)!"
                  },
                  {
                    "heading": "Komsas: Pantun Dua Kerat (Nasihat)",
                    "content": "Pantun dua kerat terdiri daripada satu baris pembayang dan satu baris maksud:",
                    "bulletPoints": [
                      "<em>Berapa jauh wujud dengan sifat, / Sejauh lutut dengan pelipat.</em> (Persoalan hubungan erat sesama manusia)",
                      "<em>Sarang semut dalam gelap, / Orang selit kita lelap.</em> (Peringatan agar sentiasa berwaspada)",
                      "<strong>Rima Akhir:</strong> Berpola a, a."
                    ],
                    "examTip": "Ingat! Baris 1 ialah pembayang maksud, baris 2 ialah maksud sebenar pantun."
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f1-bm-c1",
                "title": "Kuiz Morfologi & Pantun Dua Kerat",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Antara perkataan berikut, yang manakah tergolong dalam Kata Adjektif sifat?",
                    "options": [
                      "berlari",
                      "bijaksana",
                      "sekolah",
                      "walaupun"
                    ],
                    "correctIndex": 1,
                    "explanation": "'Bijaksana' ialah kata adjektif sifat yang menerangkan kualiti pemikiran seseorang."
                  },
                  {
                    "id": 2,
                    "question": "Apakah pola rima akhir bagi Pantun Dua Kerat?",
                    "options": [
                      "a, b, a, b",
                      "a, a",
                      "a, b, b, a",
                      "a, a, a, a"
                    ],
                    "correctIndex": 1,
                    "explanation": "Pantun dua kerat mempunyai pola rima akhir berpasangan iaitu a, a."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f1-bi",
          "name": "English (CEFR)",
          "code": "BI-F1",
          "icon": "🌍",
          "color": "from-sky-500 to-blue-600",
          "theme": "sky",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Consumerism & financial awareness, reading comprehension, simple present vs present continuous.",
          "chapters": [
            {
              "id": "f1-bi-c1",
              "number": "Unit 1",
              "title": "Consumerism & Smart Spending (Present Tenses)",
              "summary": "Learn vocabulary on money, budgets, shopping, and master the contrast between Simple Present and Present Continuous.",
              "xpReward": 120,
              "badgeReward": "Smart Spender",
              "notes": {
                "title": "Unit 1: Money Matters & Grammar",
                "readTime": "5 minutes",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Simple Present vs Present Continuous",
                    "content": "Use Simple Present for habits/facts, and Present Continuous for actions happening right now:",
                    "bulletPoints": [
                      "<strong>Simple Present (Habit):</strong> 'Farah <em>saves</em> ten ringgit every week.' (Keywords: always, usually, every day).",
                      "<strong>Present Continuous (Now):</strong> 'Farah <em>is counting</em> her savings right now.' (Keywords: now, at the moment, currently).",
                      "<strong>Financial Terms:</strong> Budget (bajet), Discount (diskaun), Receipt (resit), Bargain (tawar-menawar)."
                    ],
                    "mnemonic": "💡 <strong>Tip:</strong> Habits use base verb + s/es; happening right now uses am/is/are + verb-ing!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f1-bi-c1",
                "title": "Present Tenses & Vocabulary Quiz",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Listen! The shop assistant ______ an announcement about the mega sale.",
                    "options": [
                      "makes",
                      "is making",
                      "made",
                      "has made"
                    ],
                    "correctIndex": 1,
                    "explanation": "'Listen!' indicates an action taking place right now, requiring Present Continuous (is making)."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f1-mt",
          "name": "Matematik (DLP/BM)",
          "code": "MT-F1",
          "icon": "🔢",
          "color": "from-blue-600 to-indigo-700",
          "theme": "indigo",
          "hasDlp": true,
          "chaptersCount": 1,
          "description": "Bab 1: Nombor Nisbah (Integer, Pecahan, Perpuluhan), Operasi Gabungan BODMAS, dan Hukum Aritmetik.",
          "chapters": [
            {
              "id": "f1-mt-c1",
              "number": "Bab 1",
              "title": "Nombor Nisbah (Rational Numbers & Integer Operations)",
              "summary": "Operasi penambahan, penolakan, pendaraban, dan pembahagian integer positif dan negatif serta hukum kalis tukar tertib.",
              "xpReward": 120,
              "badgeReward": "Pakar Integer",
              "notes": {
                "title": "Bab 1: Nombor Nisbah & Integer",
                "readTime": "5 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Peraturan Tanda Aritmetik Integer",
                    "content": "Nombor nisbah ialah nombor yang boleh ditulis dalam bentuk pecahan p/q di mana p dan q ialah integer, q ≠ 0:",
                    "bulletPoints": [
                      "<strong>Pendaraban & Pembahagian Tanda:</strong>",
                      "(+) × (+) = (+)  |  (−) × (−) = (+)",
                      "(+) × (−) = (−)  |  (−) × (+) = (−)",
                      "<strong>Tertib Operasi (BODMAS / KUBURBAGITATAP):</strong> Kurungan () → Pendaraban/Pembahagian (kiri ke kanan) → Penambahan/Penolakan (kiri ke kanan)."
                    ],
                    "mnemonic": "💡 <strong>Formula Tanda:</strong> Sama tanda jadi POSITIF (+), Berbeza tanda jadi NEGATIF (-)!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f1-mt-c1",
                "title": "Kuiz Operasi Integer & Nombor Nisbah",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Hitung nilai bagi: (-4) × (-5) + (-6)",
                    "options": [
                      "14",
                      "26",
                      "-26",
                      "-14"
                    ],
                    "correctIndex": 0,
                    "explanation": "(-4) × (-5) = +20. Kemudian 20 + (-6) = 20 - 6 = 14."
                  },
                  {
                    "id": 2,
                    "question": "Antara nombor berikut, yang manakah BUKAN integer?",
                    "options": [
                      "-8",
                      "0",
                      "15",
                      "3/4"
                    ],
                    "correctIndex": 3,
                    "explanation": "Integer hanya merangkumi nombor bulat positif, sifar, dan nombor bulat negatif. 3/4 ialah pecahan (nombor nisbah bukan integer)."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f1-sn",
          "name": "Sains (DLP/BM)",
          "code": "SN-F1",
          "icon": "🔬",
          "color": "from-teal-500 to-emerald-600",
          "theme": "teal",
          "hasDlp": true,
          "chaptersCount": 1,
          "description": "Kaedah saintifik, struktur sel hidupan, respirasi sel vs fotosintesis, jirim dan ketumpatan.",
          "chapters": [
            {
              "id": "f1-sn-c2",
              "number": "Bab 2",
              "title": "Sel sebagai Unit Asas Hidupan (Cell Structure)",
              "summary": "Membandingkan struktur dan fungsi organel antara sel haiwan dengan sel tumbuhan di bawah mikroskop cahaya.",
              "xpReward": 120,
              "badgeReward": "Biologis F1",
              "notes": {
                "title": "Bab 2: Sel Haiwan vs Sel Tumbuhan",
                "readTime": "5 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Perbandingan Struktur Sel",
                    "content": "Sel ialah unit struktur dan fungsi asas bagi semua organisma hidup:",
                    "bulletPoints": [
                      "<strong>Struktur Sel Haiwan:</strong> Membran sel, sitoplasma, nukleus, mitokondria (tiada dinding sel, tiada kloroplas).",
                      "<strong>Struktur Sel Tumbuhan:</strong> Dinding sel (selulosa - beri bentuk tetap), membran sel, kloroplas (fotosintesis), vakuol besar, nukleus, mitokondria.",
                      "<strong>Nukleus:</strong> Mengawal semua aktiviti sel dan mengandungi maklumat genetik (DNA).",
                      "<strong>Mitokondria:</strong> Tapak penjanaan tenaga (respirasi sel)."
                    ],
                    "mnemonic": "💡 <strong>Formula Sel Tumbuhan:</strong> 3 Ekstra: Dinding Sel, Kloroplas, Vakuol Besar!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f1-sn-c2",
                "title": "Kuiz Struktur Sel Hidupan",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Organel manakah yang memberikan sokongan dan bentuk tetap kepada sel tumbuhan?",
                    "options": [
                      "Membran sel",
                      "Dinding sel",
                      "Kloroplas",
                      "Sitoplasma"
                    ],
                    "correctIndex": 1,
                    "explanation": "Dinding sel yang diperbuat daripada selulosa tegar memberikan bentuk tetap dan sokongan mekanikal kepada sel tumbuhan."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f1-sej",
          "name": "Sejarah (KSSM)",
          "code": "SEJ-F1",
          "icon": "🏛️",
          "color": "from-amber-600 to-orange-700",
          "theme": "amber",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Mengenal sejarah (sumber primer & sekunder), kaedah penyelidikan, dan Zaman Air Batu (Pentas Sunda).",
          "chapters": [
            {
              "id": "f1-sej-c1",
              "number": "Bab 1",
              "title": "Mengenal Sejarah: Sumber Primer & Sekunder",
              "summary": "Memahami pengertian sejarah menurut sejarawan terkenal serta membezakan sumber primer dan sumber sekunder.",
              "xpReward": 120,
              "badgeReward": "Sejarawan Muda F1",
              "notes": {
                "title": "Bab 1: Pengenalan Ilmu Sejarah",
                "readTime": "5 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Klasifikasi Sumber Sejarah",
                    "content": "Sejarah ialah peristiwa yang benar-benar berlaku pada masa lalu berdasarkan bukti-bukti sahih:",
                    "bulletPoints": [
                      "<strong>Sumber Primer (Pertama):</strong> Sumber yang belum diolah atau diterbitkan, bersifat asli (cth: artifak, fosil, batu bersurat, manuskrip asal, dokumen rasmi kerajaan).",
                      "<strong>Sumber Sekunder (Kedua):</strong> Bahan yang telah diolah, dikaji dan diterbitkan kepada umum (cth: buku teks, risalah, akhbar, majalah, ensiklopedia).",
                      "<strong>Kaedah Penyelidikan:</strong> Kaedah lisan (temubual), kaedah bertulis (manuskrip), dan kaedah arkeologi (ekskavasi gali cari)."
                    ],
                    "mnemonic": "💡 <strong>Formula Ingat:</strong> Primer = ASLI belum diolah; Sekunder = SUDAH diolah/diterbit!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f1-sej-c1",
                "title": "Kuiz Sumber & Penyelidikan Sejarah",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Batu Bersurat Terengganu tergolong dalam kategori sumber...",
                    "options": [
                      "Sekunder",
                      "Primer",
                      "Tertiari",
                      "Lisan"
                    ],
                    "correctIndex": 1,
                    "explanation": "Batu Bersurat ialah artifak sejarah asli yang belum diolah, menjadikannya sumber primer yang sangat berharga."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f1-geo",
          "name": "Geografi (KSSM)",
          "code": "GEO-F1",
          "icon": "🗺️",
          "color": "from-emerald-600 to-teal-700",
          "theme": "emerald",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Kemahiran geografi, arah dan bearing sudutan, kedudukan relatif, dan bentuk muka bumi Malaysia.",
          "chapters": [
            {
              "id": "f1-geo-c1",
              "number": "Bab 1",
              "title": "Arah & Bearing Sudutan Menggunakan Kompas",
              "summary": "Menentukan lapan arah mata angin utama dan mengukur bearing sudutan tepat menggunakan jangka sudut (protractor).",
              "xpReward": 120,
              "badgeReward": "Navigator Geografi",
              "notes": {
                "title": "Bab 1: Kemahiran Arah & Bearing",
                "readTime": "5 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Arah Mata Angin & Bearing Sudutan",
                    "content": "Arah ialah hala tuju sesuatu tempat dari tempat rujukan:",
                    "bulletPoints": [
                      "<strong>4 Arah Utama:</strong> Utara (0°/360°), Timur (90°), Selatan (180°), Barat (270°).",
                      "<strong>4 Arah Perantaraan:</strong> Timur Laut (45°), Tenggara (135°), Barat Daya (225°), Barat Laut (315°).",
                      "<strong>Bearing Sudutan:</strong> Arah yang diukur mengikut pusingan jam dari arah utara (0°) menggunakan jangka sudut, dinyatakan dalam 3 digit (cth: 045°, 180°)."
                    ],
                    "mnemonic": "💡 <strong>Ukur Bearing:</strong> Sentiasa mula dari UTARA mengikut pusingan jam!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f1-geo-c1",
                "title": "Kuiz Arah & Bearing Sudutan",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Apakah nilai bearing sudutan bagi arah Tenggara?",
                    "options": [
                      "045°",
                      "135°",
                      "225°",
                      "315°"
                    ],
                    "correctIndex": 1,
                    "explanation": "Tenggara berada di antara Timur (90°) dan Selatan (180°), iaitu pada sudut 135°."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f1-rbt",
          "name": "Reka Bentuk & Teknologi (RBT)",
          "code": "RBT-F1",
          "icon": "⚙️",
          "color": "from-purple-600 to-violet-700",
          "theme": "purple",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Pengenalan reka bentuk dan teknologi, elemen dan prinsip reka bentuk, lakaran piktorial dan fertigasi.",
          "chapters": [
            {
              "id": "f1-rbt-c1",
              "number": "Bab 1",
              "title": "Pengenalan Reka Bentuk & Elemen Reka Bentuk",
              "summary": "Memahami definisi reka bentuk, 7 elemen reka bentuk (garisan, rupa, bentuk, tekstur, saiz, warna, ruang).",
              "xpReward": 120,
              "badgeReward": "Pereka F1",
              "notes": {
                "title": "Bab 1: Elemen & Prinsip Reka Bentuk",
                "readTime": "5 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Tujuh Elemen Reka Bentuk Asas",
                    "content": "Elemen reka bentuk ialah unsur-unsur visual yang digunakan untuk menghasilkan sesuatu produk:",
                    "bulletPoints": [
                      "1. <strong>Garisan:</strong> Cantuman siri titik yang menghubungkan satu titik ke titik lain.",
                      "2. <strong>Rupa:</strong> Ruang 2D yang dikelilingi oleh garisan (geometri atau organik).",
                      "3. <strong>Bentuk:</strong> Objek 3D yang mempunyai jisim, ruang dan isi padu.",
                      "4. <strong>Tekstur:</strong> Sifat permukaan objek (kasar, licin, kesat, lembut).",
                      "5. <strong>Warna:</strong> Kesan pantulan cahaya (primer, sekunder, tertiar).",
                      "6. <strong>Saiz:</strong> Ukuran dimensi fizikal objek.",
                      "7. <strong>Ruang:</strong> Kawasan kosong di sekeliling atau di dalam objek."
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f1-rbt-c1",
                "title": "Kuiz Elemen Reka Bentuk",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Objek yang mempunyai dimensi panjang, lebar, dan tinggi (3 Dimensi) dikenali sebagai elemen...",
                    "options": [
                      "Rupa",
                      "Bentuk",
                      "Garisan",
                      "Ruang"
                    ],
                    "correctIndex": 1,
                    "explanation": "Bentuk ialah objek 3D yang mempunyai struktur isi padu dan jisim, berbanding rupa yang hanya 2D."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f1-pi",
          "name": "Pendidikan Islam",
          "code": "PI-F1",
          "icon": "🕌",
          "color": "from-teal-600 to-emerald-700",
          "theme": "teal",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Akidah: konsep Islam, Iman dan Ihsan, feqah bersuci daripada najis (Mukhaffafah, Mutawassitah, Mughallazah).",
          "chapters": [
            {
              "id": "f1-pi-c1",
              "number": "Unit 1",
              "title": "Feqah: Pengelasan Najis & Cara Menyucikannya",
              "summary": "Membezakan najis Mukhaffafah, Mutawassitah, dan Mughallazah serta kaedah sertu yang betul.",
              "xpReward": 120,
              "badgeReward": "Insan Suci F1",
              "notes": {
                "title": "Unit 1: Tiga Kategori Najis",
                "readTime": "5 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Bahagian Najis dan Kaedah Bersuci",
                    "content": "Najis ialah kekotoran yang menghalang sahnya solat mengikut hukum syarak:",
                    "bulletPoints": [
                      "<strong>1. Najis Mukhaffafah (Ringan):</strong> Air kencing kanak-kanak lelaki berumur 2 tahun ke bawah yang hanya minum susu ibu. <em>Cara cuci:</em> Renjis air mutlak ke atas tempat najis.",
                      "<strong>2. Najis Mutawassitah (Sederhana):</strong> Darah, muntah, tahi, nanah, bangkai. <em>Cara cuci:</em> Basuh dengan air mutlak hingga hilang bau, warna, dan rasa.",
                      "<strong>3. Najis Mughallazah (Berat):</strong> Anjing, babi dan keturunannya. <em>Cara cuci (Sertu):</em> Basuh 7 kali dengan air mutlak, salah satu daripadanya air tanah."
                    ],
                    "mnemonic": "💡 <strong>Formula Najis:</strong> Ringan (Renjis) → Sederhana (Basuh 3 Sifat) → Berat (7 Kali + 1 Air Tanah)!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f1-pi-c1",
                "title": "Kuiz Bahagian Najis & Sertu",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Berapakah bilangan basuhan yang diperlukan untuk menyucikan najis Mughallazah (Sertu)?",
                    "options": [
                      "3 kali",
                      "5 kali",
                      "7 kali (termasuk 1 kali air bercampur tanah)",
                      "10 kali"
                    ],
                    "correctIndex": 2,
                    "explanation": "Najis Mughallazah wajib dibasuh sebanyak 7 kali dengan air mutlak dan salah satu daripadanya air bercampur tanah suci."
                  }
                ]
              }
            }
          ]
        }
      ],
      "f2": [
        {
          "id": "f2-bm",
          "name": "Bahasa Melayu (KSSM)",
          "code": "BM-F2",
          "icon": "📖",
          "color": "from-red-500 to-rose-600",
          "theme": "red",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Sintaksis: 4 pola ayat dasar (FN+FN, FN+FK, FN+FA, FN+FS), ayat majmuk dan peribahasa.",
          "chapters": [
            {
              "id": "f2-bm-c1",
              "number": "Bab 1",
              "title": "Sintaksis: Empat Pola Ayat Dasar & Peribahasa KSSM",
              "summary": "Memahami struktur binaan Frasa Nama sebagai subjek dan jenis-jenis frasa sebagai predikat ayat dasar.",
              "xpReward": 120,
              "badgeReward": "Pakar Sintaksis F2",
              "notes": {
                "title": "Bab 1: Empat Pola Ayat Dasar Bahasa Melayu",
                "readTime": "5 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Formula 4 Pola Ayat Dasar",
                    "content": "Semua ayat dalam bahasa Melayu berakar umbi daripada empat pola asas subjek dan predikat:",
                    "bulletPoints": [
                      "<strong>Pola 1 (FN + FN):</strong> Encik Rahim (FN) + guru sekolah (FN).",
                      "<strong>Pola 2 (FN + FK):</strong> Adik (FN) + sedang membaca buku cerita (FK).",
                      "<strong>Pola 3 (FN + FA):</strong> Bunga mawar itu (FN) + sangat wangi dan cantik (FA).",
                      "<strong>Pola 4 (FN + FS):</strong> Rumah datuk (FN) + di hujung kampung (FS - Frasa Sendi Nama)."
                    ],
                    "mnemonic": "💡 <strong>Formula 4 Pola:</strong> FN + [FN, FK, FA, FS]!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f2-bm-c1",
                "title": "Kuiz Pola Ayat Dasar",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Ayat 'Kereta baharu itu sangat laju.' menepati pola ayat dasar yang manakah?",
                    "options": [
                      "Pola 1 (FN + FN)",
                      "Pola 2 (FN + FK)",
                      "Pola 3 (FN + FA)",
                      "Pola 4 (FN + FS)"
                    ],
                    "correctIndex": 2,
                    "explanation": "'Kereta baharu itu' ialah FN, manakala 'sangat laju' ialah Frasa Adjektif (FA), maka pola 3 (FN + FA)."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f2-bi",
          "name": "English (CEFR)",
          "code": "BI-F2",
          "icon": "🌍",
          "color": "from-sky-500 to-blue-600",
          "theme": "sky",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Health & environment, modal verbs of obligation and advice (must, should, ought to), and opinion writing.",
          "chapters": [
            {
              "id": "f2-bi-c1",
              "number": "Unit 1",
              "title": "Health & Wellbeing (Modal Verbs: Should, Must, Have to)",
              "summary": "Expressing rules, obligations, and advice for healthy living using modal auxiliary verbs.",
              "xpReward": 120,
              "badgeReward": "Health Advocate",
              "notes": {
                "title": "Unit 1: Modal Verbs of Advice & Obligation",
                "readTime": "5 minutes",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Difference Between Must, Have to & Should",
                    "content": "Modal verbs are helper verbs followed directly by the base form of the verb:",
                    "bulletPoints": [
                      "<strong>Should / Ought to (Advice):</strong> 'You <em>should drink</em> eight glasses of water daily.' (Good recommendation).",
                      "<strong>Must (Strong Personal Obligation):</strong> 'I <em>must study</em> hard to achieve straight As.'",
                      "<strong>Have to (External Rule/Law):</strong> 'Patients <em>have to wear</em> masks in the clinic.'",
                      "<strong>Mustn't (Prohibition):</strong> 'You <em>mustn't eat</em> expired food.'"
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f2-bi-c1",
                "title": "Modal Verbs Quiz",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "You look exhausted! You ______ take a short rest before continuing.",
                    "options": [
                      "mustn't",
                      "should",
                      "had to",
                      "don't have to"
                    ],
                    "correctIndex": 1,
                    "explanation": "'Should' is used to give friendly advice or recommendations."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f2-mt",
          "name": "Matematik (DLP/BM)",
          "code": "MT-F2",
          "icon": "🔢",
          "color": "from-blue-600 to-indigo-700",
          "theme": "indigo",
          "hasDlp": true,
          "chaptersCount": 1,
          "description": "Bab 1: Pola dan Jujukan (Patterns and Sequences), Nombor Fibonacci, Segi Tiga Pascal, dan Ungkapan Algebra.",
          "chapters": [
            {
              "id": "f2-mt-c1",
              "number": "Bab 1",
              "title": "Pola & Jujukan (Patterns, Sequences & Fibonacci Numbers)",
              "summary": "Mengenal corak berulang dalam urutan nombor, menjana sebutan ke-n (Tn = a + (n-1)d), dan Nombor Fibonacci.",
              "xpReward": 120,
              "badgeReward": "Pakar Jujukan F2",
              "notes": {
                "title": "Bab 1: Pola dan Jujukan Nombor",
                "readTime": "5 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Pola Nombor & Urutan Fibonacci",
                    "content": "Pola ialah corak atau aturan tertentu dalam satu senarai nombor atau objek:",
                    "bulletPoints": [
                      "<strong>Jujukan Aritmetik:</strong> Menambah atau menolak nombor yang tetap (cth: 3, 7, 11, 15... pola ialah 'tambah 4').",
                      "<strong>Nombor Fibonacci:</strong> Bermula dengan 0, 1, dan setiap sebutan seterusnya diperoleh dengan menambah dua sebutan sebelumnya: 0, 1, 1, 2, 3, 5, 8, 13, 21...",
                      "<strong>Segi Tiga Pascal:</strong> Corak nombor berbentuk segi tiga di mana setiap nombor ialah hasil tambah dua nombor tepat di atasnya."
                    ],
                    "mnemonic": "💡 <strong>Fibonacci Rule:</strong> Sebutan Kini = Sebutan Lepas (1) + Sebutan Lepas (2)!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f2-mt-c1",
                "title": "Kuiz Pola Nombor & Fibonacci",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Diberi jujukan Fibonacci: 1, 1, 2, 3, 5, 8, x, 21. Apakah nilai x?",
                    "options": [
                      "11",
                      "12",
                      "13",
                      "14"
                    ],
                    "correctIndex": 2,
                    "explanation": "Dalam jujukan Fibonacci, x = 5 + 8 = 13."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f2-sn",
          "name": "Sains (DLP/BM)",
          "code": "SN-F2",
          "icon": "🔬",
          "color": "from-teal-500 to-emerald-600",
          "theme": "teal",
          "hasDlp": true,
          "chaptersCount": 1,
          "description": "Bab 1: Biodiversiti (Pengelasan Haiwan & Tumbuhan, Kekunci Dikotomi), Ekosistem, dan Nutrisi.",
          "chapters": [
            {
              "id": "f2-sn-c1",
              "number": "Bab 1",
              "title": "Biodiversiti: Pengelasan Haiwan Vertebrata & Invertebrata",
              "summary": "Mengelaskan organisma kepada 5 kelas vertebrata utama (Mamalia, Burung, Reptilia, Amfibia, Ikan) dan kekunci dikotomi.",
              "xpReward": 120,
              "badgeReward": "Pakar Biodiversiti",
              "notes": {
                "title": "Bab 1: Pengelasan Haiwan Bertulang Belakang (Vertebrata)",
                "readTime": "5 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Ciri 5 Kumpulan Vertebrata",
                    "content": "Vertebrata ialah haiwan yang mempunyai tulang belakang:",
                    "bulletPoints": [
                      "<strong>Mamalia:</strong> Berdarah panas (homeoterma), badan berbulu rambut, melahirkan anak, menyusukan anak (cth: harimau, paus, kelawar).",
                      "<strong>Burung (Aves):</strong> Homeoterma, badan berbulu pelepah, bertelur bercangkerang keras, bernafas melalui peparu (cth: helang, burung unta).",
                      "<strong>Reptilia:</strong> Berdarah sejuk (poikiloterma), kulit bersisik kering, bertelur bercangkerang liat (cth: buaya, ular, kura-kura).",
                      "<strong>Amfibia:</strong> Poikiloterma, kulit lembap tanpa sisik, hidup di air dan darat (cth: katak, salamander).",
                      "<strong>Ikan (Pisces):</strong> Poikiloterma, badan bersisik lendir, bernafas melalui insang, persenyawaan luar (cth: ikan jerung, ikan keli)."
                    ],
                    "mnemonic": "💡 <strong>Formula Vertebrata:</strong> M-B-R-A-I (Mamalia, Burung, Reptilia, Amfibia, Ikan)!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f2-sn-c1",
                "title": "Kuiz Pengelasan Vertebrata",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Haiwan manakah yang merupakan mamalia walaupun hidup di dalam lautan?",
                    "options": [
                      "Ikan Jerung",
                      "Paus Biru",
                      "Ikan Pari",
                      "Ikan Keli"
                    ],
                    "correctIndex": 1,
                    "explanation": "Paus ialah mamalia kerana bernafas melalui peparu, berdarah panas, melahirkan anak dan menyusukan anak."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f2-sej",
          "name": "Sejarah (KSSM)",
          "code": "SEJ-F2",
          "icon": "🏛️",
          "color": "from-amber-600 to-orange-700",
          "theme": "amber",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Bab 1: Kerajaan Alam Melayu (Funan, Champa, Srivijaya, Angkor, Majapahit, Kedah Tua) dan sistem pemerintahan.",
          "chapters": [
            {
              "id": "f2-sej-c1",
              "number": "Bab 1",
              "title": "Kerajaan Alam Melayu (Funan, Srivijaya & Majapahit)",
              "summary": "Kronologi kemunculan kerajaan awal di Alam Melayu, lokasi strategik, pusat pentadbiran dan kemasyhuran.",
              "xpReward": 120,
              "badgeReward": "Sejarawan Alam Melayu",
              "notes": {
                "title": "Bab 1: Kemunculan Kerajaan Alam Melayu",
                "readTime": "5 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Kronologi Kerajaan Awal Alam Melayu",
                    "content": "Alam Melayu merangkumi kawasan kepulauan Asia Tenggara yang kaya dengan tamadun maritim dan agraria:",
                    "bulletPoints": [
                      "<strong>Kerajaan Funan (Abad ke-1):</strong> Berpusat di Vyadhapura, lembah Sungai Mekong. Pelabuhan Oc Eo terkenal sebagai pusat perdagangan antarabangsa.",
                      "<strong>Kerajaan Champa (Abad ke-2):</strong> Berpusat di Indrapura, terkenal dengan pelabuhan Dai Chiem.",
                      "<strong>Kerajaan Srivijaya (Abad ke-7):</strong> Berpusat di Palembang, menguasai Selat Melaka dan menjadi pusat pengajian agama Buddha terkemuka.",
                      "<strong>Kerajaan Angkor (Abad ke-9):</strong> Berpusat di Hariharalaya, terkenal dengan sistem pengairan Baray dan Angkor Wat.",
                      "<strong>Kerajaan Majapahit (Abad ke-13):</strong> Berpusat di Kota Trowulan, Jawa Timur, diasaskan oleh Raden Wijaya."
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f2-sej-c1",
                "title": "Kuiz Kerajaan Alam Melayu",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Kerajaan maritim Alam Melayu yang menguasai laluan perdagangan Selat Melaka pada abad ke-7 ialah...",
                    "options": [
                      "Kerajaan Funan",
                      "Kerajaan Srivijaya",
                      "Kerajaan Majapahit",
                      "Kerajaan Kedah Tua"
                    ],
                    "correctIndex": 1,
                    "explanation": "Srivijaya yang berpusat di Palembang muncul sebagai kuasa maritim unggul menguasai Selat Melaka dan Selat Sunda."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f2-geo",
          "name": "Geografi (KSSM)",
          "code": "GEO-F2",
          "icon": "🗺️",
          "color": "from-emerald-600 to-teal-700",
          "theme": "emerald",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Pengaruh cuaca dan iklim khatulistiwa terhadap kegiatan manusia di Malaysia, pergerakan bumi (putaran & peredaran).",
          "chapters": [
            {
              "id": "f2-geo-c1",
              "number": "Bab 1",
              "title": "Iklim Khatulistiwa & Pengaruhnya terhadap Ekonomi Malaysia",
              "summary": "Ciri-ciri iklim Khatulistiwa (panas dan lembap sepanjang tahun) serta impaknya kepada pertanian kelapa sawit dan pelancongan.",
              "xpReward": 120,
              "badgeReward": "Klimatologis F2",
              "notes": {
                "title": "Bab 1: Ciri Iklim Khatulistiwa di Malaysia",
                "readTime": "5 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Ciri-Ciri Utama Iklim Khatulistiwa",
                    "content": "Malaysia mengalami iklim Khatulistiwa kerana terletak berhampiran garisan Khatulistiwa:",
                    "bulletPoints": [
                      "<strong>Suhu:</strong> Panas dan sekata sepanjang tahun, purata suhu tahunan sekitar 27°C, julat suhu tahunan kecil (1°C - 3°C).",
                      "<strong>Hujan:</strong> Menerima hujan lebat melebihi 2600 mm setahun. Jenis hujan perolakan dan hujan bukit.",
                      "<strong>Angin Monsun:</strong> Monsun Timur Laut (November - Mac) bawa hujan lebat ke pantai timur; Monsun Barat Daya (Mei - September) lebih kering.",
                      "<strong>Kesan Ekonomi:</strong> Amat sesuai untuk penanaman getah, kelapa sawit, padi dan sektor ekopelancongan."
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f2-geo-c1",
                "title": "Kuiz Iklim Khatulistiwa",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Monsun manakah yang membawa hujan lebat luar biasa ke Pantai Timur Semenanjung Malaysia?",
                    "options": [
                      "Monsun Barat Daya",
                      "Monsun Timur Laut",
                      "Angin Sumatera",
                      "Angin Monsun Selatan"
                    ],
                    "correctIndex": 1,
                    "explanation": "Monsun Timur Laut bertiup dari Laut China Selatan membawa curahan hujan lebat ke Kelantan, Terengganu, dan Pahang."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f2-rbt",
          "name": "Reka Bentuk & Teknologi (RBT)",
          "code": "RBT-F2",
          "icon": "⚙️",
          "color": "from-purple-600 to-violet-700",
          "theme": "purple",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Reka bentuk mekanikal (sistem tuas, gear, takal, tali sawat), reka bentuk elektrik dan elektronik.",
          "chapters": [
            {
              "id": "f2-rbt-c1",
              "number": "Bab 1",
              "title": "Reka Bentuk Mekanikal (Sistem Komponen Gear & Tuas)",
              "summary": "Menganalisis sistem komponen mekanikal seperti gear serong, gear taji, takal, dan tuas dalam produk gajet.",
              "xpReward": 120,
              "badgeReward": "Pakar Mekanikal F2",
              "notes": {
                "title": "Bab 1: Komponen Sistem Mekanikal",
                "readTime": "5 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Komponen Mekanikal Utama",
                    "content": "Sistem mekanikal berfungsi memindahkan tenaga dan mengubah arah pergerakan:",
                    "bulletPoints": [
                      "<strong>Gear:</strong> Menghantar kuasa dan menukar kelajuan/arah putaran (Gear taji, Gear serong, Gear heliks, Gear rak dan pinan).",
                      "<strong>Takal dan Tali Sawat:</strong> Menghubungkan dua roda untuk memindahkan daya putaran pada jarak tertentu (cth: mesin jahit, enjin kereta).",
                      "<strong>Tuas (Tuas Kelas 1, 2, 3):</strong> Mengurangkan daya yang diperlukan untuk mengangkat beban menggunakan fulkrum.",
                      "<strong>Aci Sesondol:</strong> Menukar gerakan putaran kepada gerakan salingan lurus (naik turun)."
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f2-rbt-c1",
                "title": "Kuiz Komponen Mekanikal",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Gear yang digunakan untuk menukar arah putaran sebanyak sudut tepat 90 darjah ialah...",
                    "options": [
                      "Gear taji",
                      "Gear serong (Bevel gear)",
                      "Gear dalam",
                      "Gear rak dan pinan"
                    ],
                    "correctIndex": 1,
                    "explanation": "Gear serong direka bentuk serong khas untuk memindahkan kuasa antara dua aci bersudut 90 darjah."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f2-pi",
          "name": "Pendidikan Islam",
          "code": "PI-F2",
          "icon": "🕌",
          "color": "from-teal-600 to-emerald-700",
          "theme": "teal",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Feqah: Solat berjemaah, solat Jumaat, puasa Ramadan, dan adab persaudaraan dalam Islam.",
          "chapters": [
            {
              "id": "f2-pi-c1",
              "number": "Unit 1",
              "title": "Feqah: Solat Berjemaah & Kedudukan Makmum",
              "summary": "Kelebihan ganjaran 27 darjat solat berjemaah, syarat menjadi imam, dan kedudukan saf makmum yang betul.",
              "xpReward": 120,
              "badgeReward": "Ahli Jemaah F2",
              "notes": {
                "title": "Unit 1: Keutamaan Solat Berjemaah",
                "readTime": "5 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Ganjaran & Syarat Sah Solat Berjemaah",
                    "content": "Solat berjemaah ialah solat yang dilakukan oleh sekurang-kurangnya dua orang, seorang imam dan seorang makmum:",
                    "bulletPoints": [
                      "<strong>Fadhilat:</strong> Ganjaran 27 kali ganda berbanding solat bersendirian.",
                      "<strong>Kedudukan Saf:</strong> Jika makmum seorang lelaki, berdiri di sebelah kanan imam sedikit ke belakang. Jika berdua atau lebih, berdiri di saf belakang imam.",
                      "<strong>Syarat Imam:</strong> Mengetahui hukum solat, bacaan al-Quran lebih fasih, dan imam lelaki bagi makmum lelaki.",
                      "<strong>Makmum Muafiq vs Masbuk:</strong> Muafiq sempat membaca al-Fatihah bersama imam; Masbuk tidak sempat dan perlu menambah rakaat tertinggal."
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f2-pi-c1",
                "title": "Kuiz Solat Berjemaah",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Berapakah ganjaran pahala solat berjemaah berbanding solat bersendirian?",
                    "options": [
                      "10 kali ganda",
                      "20 kali ganda",
                      "27 kali ganda",
                      "50 kali ganda"
                    ],
                    "correctIndex": 2,
                    "explanation": "Hadis sahih Rasulullah SAW menyatakan solat berjemaah melebihi solat bersendirian dengan 27 darjat kebaikan."
                  }
                ]
              }
            }
          ]
        }
      ],
      "f3": [
        {
          "id": "f3-bm",
          "name": "Bahasa Melayu (KSSM / UASA)",
          "code": "BM-F3",
          "icon": "📖",
          "color": "from-red-500 to-rose-600",
          "theme": "red",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Sistem bahasa Menengah Rendah, teknik ringkasan cemerlang, novel Komsas, dan karangan respons terbuka.",
          "chapters": [
            {
              "id": "f3-bm-c1",
              "number": "Bab 1",
              "title": "Teknik Menulis Ringkasan UASA & Pembentukan Kata",
              "summary": "Kuasai teknik mengekstrak 5 isi penting ringkasan tidak melebihi 100 patah perkataan dan elakkan kesalahan bahasa.",
              "xpReward": 120,
              "badgeReward": "Pakar Ringkasan F3",
              "notes": {
                "title": "Bab 1: Formula Ringkasan UASA 100 Patah Perkataan",
                "readTime": "5 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Langkah Menjawab Ringkasan UASA",
                    "content": "Ringkasan menguji kecekapan calon mengenal pasti isi tersurat yang diminta dalam arahan soalan:",
                    "bulletPoints": [
                      "1. <strong>Kenal Pasti Kata Kunci:</strong> Gariskan kata kunci arahan soalan (cth: 'langkah-langkah', 'faktor-faktor').",
                      "2. <strong>Cari 5 Isi Utama:</strong> Gariskan ayat yang mengandungi isi sahaja dalam petikan (jangan salin contoh atau huraian panjang).",
                      "3. <strong>Gunakan Penanda Wacana:</strong> Antaranya, Selain itu, Seterusnya, Di samping itu, Akhir sekali.",
                      "4. <strong>Had Perkataan:</strong> Antara 80 hingga 100 patah perkataan. Kira dan catat jumlah perkataan di hujung karangan."
                    ],
                    "mnemonic": "💡 <strong>Formula Ringkasan:</strong> 5 Isi + Penanda Wacana + <100 Perkataan = Markah Penuh!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f3-bm-c1",
                "title": "Kuiz Format Ringkasan UASA",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Berapakah bilangan isi tersurat yang dicadangkan untuk dimasukkan dalam perenggan ringkasan?",
                    "options": [
                      "2 isi",
                      "3 isi",
                      "5 isi",
                      "8 isi"
                    ],
                    "correctIndex": 2,
                    "explanation": "Calon dicadangkan menulis 5 isi utama bagi memastikan markah isi maksimum dapat diperoleh."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f3-bi",
          "name": "English (CEFR)",
          "code": "BI-F3",
          "icon": "🌍",
          "color": "from-sky-500 to-blue-600",
          "theme": "sky",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Wonders of the world, passive voice constructions, relative clauses, and argumentative essay writing.",
          "chapters": [
            {
              "id": "f3-bi-c1",
              "number": "Unit 1",
              "title": "Wonders of Nature (Active vs Passive Voice)",
              "summary": "Mastering the formation of Passive Voice (be + past participle) for formal descriptions and reports.",
              "xpReward": 120,
              "badgeReward": "Grammar Master F3",
              "notes": {
                "title": "Unit 1: The Passive Voice in Formal English",
                "readTime": "5 minutes",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Converting Active to Passive Voice",
                    "content": "Passive voice is used when the focus is on the action or receiver, rather than who performed it:",
                    "bulletPoints": [
                      "<strong>Active:</strong> The workers <em>build</em> the bridge. (Subject + Verb + Object)",
                      "<strong>Passive:</strong> The bridge <em>is built</em> by the workers. (Object becomes Subject + be + Past Participle)",
                      "<strong>Past Passive:</strong> 'The ancient temple <em>was discovered</em> in 1920.'",
                      "<strong>Tense Rule:</strong> Keep the original tense: is/are for present, was/were for past, will be for future."
                    ],
                    "mnemonic": "💡 <strong>Formula:</strong> Object + BE (am/is/are/was/were) + Past Participle (V3)!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f3-bi-c1",
                "title": "Passive Voice Mastery Quiz",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "The national park ______ by thousands of tourists every month.",
                    "options": [
                      "is visited",
                      "was visited",
                      "visits",
                      "visiting"
                    ],
                    "correctIndex": 0,
                    "explanation": "'Every month' shows a recurring present fact, so Present Passive 'is visited' is the correct choice."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f3-mt",
          "name": "Matematik (DLP/BM)",
          "code": "MT-F3",
          "icon": "🔢",
          "color": "from-blue-600 to-indigo-700",
          "theme": "indigo",
          "hasDlp": true,
          "chaptersCount": 1,
          "description": "Bab 1: Indeks (Hukum Indeks, Indeks Pecahan), Bentuk Piawai, dan Matematik Pengguna Simpanan & Pelaburan.",
          "chapters": [
            {
              "id": "f3-mt-c1",
              "number": "Bab 1",
              "title": "Indeks (Indices & Laws of Indices)",
              "summary": "Menguasai hukum-hukum indeks pendaraban, pembahagian, kuasa atas kuasa, indeks sifar, dan indeks negatif.",
              "xpReward": 120,
              "badgeReward": "Pakar Indeks F3",
              "notes": {
                "title": "Bab 1: Hukum-Hukum Indeks",
                "readTime": "5 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Enam Hukum Indeks Asas",
                    "content": "Tatatanda indeks a^n bermaksud pendaraban berulang bagi a sebanyak n kali:",
                    "bulletPoints": [
                      "<strong>1. Pendaraban Asas Sama:</strong> a^m × a^n = a^(m + n)",
                      "<strong>2. Pembahagian Asas Sama:</strong> a^m ÷ a^n = a^(m − n)",
                      "<strong>3. Kuasa dikuasakan:</strong> (a^m)^n = a^(m × n)",
                      "<strong>4. Kuasa pada hasil darab:</strong> (ab)^n = a^n × b^n",
                      "<strong>5. Indeks Sifar:</strong> a^0 = 1 (bagi mana-mana a ≠ 0)",
                      "<strong>6. Indeks Negatif:</strong> a^(−n) = 1 / (a^n)"
                    ],
                    "mnemonic": "💡 <strong>Formula Indeks:</strong> Darab asas = Tambah kuasa (+); Bahagi asas = Tolak kuasa (-)!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f3-mt-c1",
                "title": "Kuiz Hukum Indeks",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Permudahkan: (2^3) × (2^4) ÷ (2^2)",
                    "options": [
                      "2^5",
                      "2^7",
                      "2^9",
                      "2^10"
                    ],
                    "correctIndex": 0,
                    "explanation": "2^(3 + 4 - 2) = 2^5 = 32."
                  },
                  {
                    "id": 2,
                    "question": "Apakah nilai bagi 7^0?",
                    "options": [
                      "0",
                      "1",
                      "7",
                      "Tidak tertakrif"
                    ],
                    "correctIndex": 1,
                    "explanation": "Mana-mana nombor bukan sifar yang dikuasakan dengan 0 mempunyai nilai tepat bersamaan 1."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f3-sn",
          "name": "Sains (DLP/BM)",
          "code": "SN-F3",
          "icon": "🔬",
          "color": "from-teal-500 to-emerald-600",
          "theme": "teal",
          "hasDlp": true,
          "chaptersCount": 1,
          "description": "Bab 1: Rangsangan dan Gerak Balas (Sistem Saraf Manusia, Mekanisme Deria Penglihatan & Pendengaran).",
          "chapters": [
            {
              "id": "f3-sn-c1",
              "number": "Bab 1",
              "title": "Rangsangan & Gerak Balas (Sistem Saraf & Organ Deria)",
              "summary": "Struktur sistem saraf pusat (otak & saraf tunjang) vs sistem saraf periferi, serta tindakan terkawal vs luar kawal.",
              "xpReward": 120,
              "badgeReward": "Pakar Neurosains F3",
              "notes": {
                "title": "Bab 1: Sistem Saraf Manusia & Tindakan Refleks",
                "readTime": "5 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Organisasi Sistem Saraf Manusia",
                    "content": "Sistem saraf mengawal dan mengkoordinasikan semua fungsi organ dan gerak balas badan:",
                    "bulletPoints": [
                      "<strong>Sistem Saraf Pusat (SSP):</strong> Otak dan saraf tunjang (pusat integrasi maklumat).",
                      "<strong>Sistem Saraf Periferi (SSP):</strong> Saraf kranium (dari otak) dan saraf spina (dari saraf tunjang).",
                      "<strong>Tindakan Terkawal:</strong> Disedari dan dikawal oleh kemahuan serebrum otak (cth: menulis, menunggang basikal).",
                      "<strong>Tindakan Luar Kawal:</strong> Tindakan automatik di luar kawalan sedar, dikawal oleh medula oblongata (cth: denyutan jantung, peristalsis).",
                      "<strong>Tindakan Refleks:</strong> Gerak balas pantas automatik tanpa difikirkan, dikawal oleh saraf tunjang untuk mengelakkan bahaya (cth: menarik tangan serta-merta apabila terkena objek panas)."
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f3-sn-c1",
                "title": "Kuiz Sistem Saraf & Refleks",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Bahagian sistem saraf manakah yang mengawal tindakan refleks apabila tangan terkena periuk panas?",
                    "options": [
                      "Serebrum",
                      "Saraf tunjang",
                      "Serebelum",
                      "Medula oblongata"
                    ],
                    "correctIndex": 1,
                    "explanation": "Arka refleks lintasan impuls dikawal terus oleh saraf tunjang untuk menghasilkan gerak balas kecemasan pantas."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f3-sej",
          "name": "Sejarah (KSSM)",
          "code": "SEJ-F3",
          "icon": "🏛️",
          "color": "from-amber-600 to-orange-700",
          "theme": "amber",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Bab 1: Kedatangan Kuasa Barat ke Tanah Melayu, faktor kemajuan industri, dan strategi peluasan kuasa British.",
          "chapters": [
            {
              "id": "f3-sej-c1",
              "number": "Bab 1",
              "title": "Kedatangan Kuasa Barat: Faktor & Strategi British",
              "summary": "Menganalisis faktor kedatangan kuasa Barat pada abad ke-16 hingga ke-20 (Terusan Suez, bijih timah, Revolusi Perindustrian).",
              "xpReward": 120,
              "badgeReward": "Sejarawan Kolonial F3",
              "notes": {
                "title": "Bab 1: Faktor Kedatangan Kuasa Barat",
                "readTime": "5 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Faktor Kedatangan Kuasa Barat Abad ke-19 & 20",
                    "content": "Perkembangan pesat di Eropah mendorong kuasa imperialis seperti British, Belanda dan Perancis meluaskan jajahan:",
                    "bulletPoints": [
                      "<strong>1. Perkembangan Revolusi Perindustrian:</strong> Kilang di Britain memerlukan bekalan berterusan bijih timah (industri mengetin makanan) dan getah asli.",
                      "<strong>2. Pembukaan Terusan Suez (1869):</strong> Memendekkan jarak perjalanan laut antara Eropah dengan Alam Melayu daripada berbulan-bulan kepada beberapa minggu.",
                      "<strong>3. Penciptaan Kapal Wap:</strong> Mampu membawa muatan dagangan yang lebih besar dan lebih pantas.",
                      "<strong>4. Slogan Kolonial:</strong> British menggunakan alasan 'Beban Orang Putih' untuk mewajarkan penjajahan mereka."
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f3-sej-c1",
                "title": "Kuiz Kedatangan Kuasa Barat",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Apakah kesan pembukaan Terusan Suez pada tahun 1869 terhadap perdagangan ke Tanah Melayu?",
                    "options": [
                      "Menyekat laluan kapal wap",
                      "Memendekkan jarak perjalanan laut antara Barat dan Timur secara drastik",
                      "Menaikkan harga bijih timah di Eropah",
                      "Menghalang kedatangan pedagang asing"
                    ],
                    "correctIndex": 1,
                    "explanation": "Terusan Suez menghubungkan Laut Mediterranean dengan Laut Merah, memendekkan pelayaran ribuan kilometer."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f3-geo",
          "name": "Geografi (KSSM)",
          "code": "GEO-F3",
          "icon": "🗺️",
          "color": "from-emerald-600 to-teal-700",
          "theme": "emerald",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Sumber semula jadi di Malaysia (sumber boleh baharu vs tidak boleh baharu), kegiatan ekonomi dan kelestarian alam.",
          "chapters": [
            {
              "id": "f3-geo-c1",
              "number": "Bab 1",
              "title": "Sumber Semula Jadi di Malaysia: Boleh Baharu vs Tidak Boleh Baharu",
              "summary": "Membezakan sumber tenaga solar, biomass, hidroelektrik dengan petroleum, gas asli dan arang batu.",
              "xpReward": 120,
              "badgeReward": "Kelestarian Hijau F3",
              "notes": {
                "title": "Bab 1: Pengelasan Sumber Semula Jadi",
                "readTime": "5 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Klasifikasi Sumber Semula Jadi Malaysia",
                    "content": "Sumber semula jadi ialah bahan di bumi yang dimanfaatkan oleh manusia untuk kelangsungan hidup:",
                    "bulletPoints": [
                      "<strong>Sumber Boleh Baharu:</strong> Sumber yang tidak akan habis dan sentiasa dijana semula secara semula jadi (cth: Tenaga suria, tenaga hidroelektrik seperti Empangan Bakun, biomas, hutan, air, angin).",
                      "<strong>Sumber Tidak Boleh Baharu:</strong> Sumber mineral yang terhad kuantitinya dan akan habis jika dieksploitasi berterusan (cth: Petroleum mentah di luar pantai Terengganu/Sarawak, gas asli, arang batu, bauksit, bijih timah)."
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f3-geo-c1",
                "title": "Kuiz Sumber Semula Jadi",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Antara sumber tenaga berikut, yang manakah merupakan sumber boleh baharu?",
                    "options": [
                      "Petroleum",
                      "Gas Asli",
                      "Tenaga Hidroelektrik",
                      "Arang batu"
                    ],
                    "correctIndex": 2,
                    "explanation": "Tenaga hidroelektrik memanfaatkan aliran air sungai yang berterusan tanpa kehabisan stok bahan api fosil."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f3-rbt",
          "name": "Reka Bentuk & Teknologi (RBT)",
          "code": "RBT-F3",
          "icon": "⚙️",
          "color": "from-purple-600 to-violet-700",
          "theme": "purple",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Bab 1: Reka Bentuk Mekatronik (Sistem Mekanikal, Elektrik, Elektronik dan Kawalan Pengaturcaraan).",
          "chapters": [
            {
              "id": "f3-rbt-c1",
              "number": "Bab 1",
              "title": "Reka Bentuk Mekatronik (Sistem Automasi)",
              "summary": "Gabungan empat disiplin: sistem mekanikal, elektrik, elektronik, dan kawalan pengaturcaraan pada produk pintar.",
              "xpReward": 120,
              "badgeReward": "Pakar Mekatronik F3",
              "notes": {
                "title": "Bab 1: Empat Elemen Utama Mekatronik",
                "readTime": "5 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Definisi & Elemen Sistem Mekatronik",
                    "content": "Mekatronik ialah integrasi sinergistik antara bidang kejuruteraan mekanikal, elektrik, elektronik dan perisian:",
                    "bulletPoints": [
                      "<strong>1. Sistem Mekanikal:</strong> Menggerakkan produk fizikal (cth: gear, takal, tuas, aci pemacu).",
                      "<strong>2. Sistem Elektrik:</strong> Membekalkan arus kuasa kepada keseluruhan sistem (cth: bateri, panel solar, transformer).",
                      "<strong>3. Sistem Elektronik:</strong> Memproses isyarat sensor menggunakan komponen separa pengalir (cth: diod, kapasitor, transistor).",
                      "<strong>4. Sistem Kawalan & Pengaturcaraan:</strong> Algoritma logik yang dimuat naik ke papan mikropengawal (cth: Arduino, Raspberry Pi) untuk membuat keputusan automatik.",
                      "<strong>Contoh Produk:</strong> Pintu gelangsar automatik, kereta kawalan jauh pintar, mesin basuh automatik."
                    ],
                    "mnemonic": "💡 <strong>Formula Mekatronik:</strong> M + E + E + P (Mekanikal + Elektrik + Elektronik + Pengaturcaraan)!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f3-rbt-c1",
                "title": "Kuiz Sistem Mekatronik",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Pintu gelangsar automatik di pasar raya menggunakan sensor inframerah sebagai elemen...",
                    "options": [
                      "Sistem mekanikal",
                      "Sistem elektronik (Penderia input)",
                      "Sistem bekalan kuasa",
                      "Struktur bingkai"
                    ],
                    "correctIndex": 1,
                    "explanation": "Penderia inframerah mengesan kehadiran pergerakan manusia dan menghantar isyarat elektronik kepada mikropengawal."
                  }
                ]
              }
            }
          ]
        },
        {
          "id": "f3-pi",
          "name": "Pendidikan Islam",
          "code": "PI-F3",
          "icon": "🕌",
          "color": "from-teal-600 to-emerald-700",
          "theme": "teal",
          "hasDlp": false,
          "chaptersCount": 1,
          "description": "Akidah: Beriman kepada Hari Akhirat dan Qada' & Qadar, Feqah: Solat Sunat Aidilfitri, Aidiladha, dan Hajat.",
          "chapters": [
            {
              "id": "f3-pi-c1",
              "number": "Unit 1",
              "title": "Akidah: Beriman kepada Qada' & Qadar (Redha & Tawakal)",
              "summary": "Memahami ketetapan takdir Allah (Qada' Mu'allaq & Qada' Mubram) berserta konsep usaha, doa dan tawakal.",
              "xpReward": 120,
              "badgeReward": "Mukmin Sejati F3",
              "notes": {
                "title": "Unit 1: Konsep Qada' dan Qadar",
                "readTime": "5 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Perbezaan Qada' Mu'allaq & Qada' Mubram",
                    "content": "Beriman kepada Qada' dan Qadar ialah Rukun Iman yang keenam:",
                    "bulletPoints": [
                      "<strong>Qada' Mu'allaq (Boleh Berubah):</strong> Ketetapan takdir yang bergantung kepada usaha dan doa manusia (cth: orang yang rajin belajar lulus dengan cemerlang, kesembuhan penyakit melalui rawatan).",
                      "<strong>Qada' Mubram (Muktamad):</strong> Ketetapan takdir yang pasti berlaku dan tidak berubah sama sekali mengikut kehendak mutlak Allah (cth: saat kematian seseorang, jantina asal kelahiran, kejadian kiamat).",
                      "<strong>Hikmah:</strong> Mendidik jiwa agar tidak sombong apabila berjaya dan tidak berputus asa apabila diuji."
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f3-pi-c1",
                "title": "Kuiz Qada' dan Qadar",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Takdir yang boleh berubah melalui ikhtiar usaha, sedekah dan doa bersungguh-sungguh dikenali sebagai...",
                    "options": [
                      "Qada' Mubram",
                      "Qada' Mu'allaq",
                      "Khusyuk",
                      "Gharar"
                    ],
                    "correctIndex": 1,
                    "explanation": "Qada' Mu'allaq ialah ketetapan yang digantungkan oleh Allah kepada sebab-musabab ikhtiar dan doa manusia."
                  }
                ]
              }
            }
          ]
        }
      ]
    }
  }
};
