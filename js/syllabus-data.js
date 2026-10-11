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
          "chaptersCount": 8,
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
          "chaptersCount": 10,
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
          "chaptersCount": 8,
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
          "chaptersCount": 10,
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
          "chaptersCount": 6,
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
          "chaptersCount": 8,
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
          "chaptersCount": 10,
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
          "chaptersCount": 8,
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
          "chaptersCount": 10,
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
          "chaptersCount": 6,
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
          "chaptersCount": 8,
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
          "chaptersCount": 10,
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
          "chaptersCount": 8,
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
          "chaptersCount": 10,
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
          "chaptersCount": 6,
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
          "chaptersCount": 8,
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
          "chaptersCount": 10,
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
          "chaptersCount": 8,
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
          "chaptersCount": 10,
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
          "chaptersCount": 8,
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
          "chaptersCount": 5,
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
          "chaptersCount": 6,
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
          "chaptersCount": 10,
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
          "chaptersCount": 8,
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
          "chaptersCount": 8,
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
          "chaptersCount": 10,
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
          "chaptersCount": 7,
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
          "chaptersCount": 5,
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
          "chaptersCount": 6,
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
          "chaptersCount": 8,
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
          "chaptersCount": 10,
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
          "chaptersCount": 8,
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
          "chaptersCount": 10,
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
          "chaptersCount": 7,
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
          "chaptersCount": 5,
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
          "chaptersCount": 6,
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
              "id": "f4-sej-c2",
              "number": "Bab 2",
              "title": "Kebangkitan Nasionalisme",
              "summary": "Mengkaji perkembangan idea nasionalisme di Barat, Asia Tenggara, dan penentangan penjajahan di Tanah Melayu.",
              "xpReward": 180,
              "badgeReward": "Jaguh Sejarah SPM",
              "notes": {
                "title": "Bab 2: Kebangkitan Nasionalisme (KSSM Tingkatan 4)",
                "readTime": "9 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "1. Maksud & Intipati Nasionalisme",
                    "content": "Nasionalisme ialah perasaan cinta yang mendalam terhadap bangsa dan negara, serta gerakan menentang penjajahan untuk mencapai kemerdekaan.",
                    "bulletPoints": [
                      "<strong>Profesor Emeritus Tan Sri Dr. Khoo Kay Kim:</strong> Nasionalisme merujuk perjuangan orang Melayu bagi mengembalikan kedudukan unggul mereka.",
                      "<strong>Dr. R. Suntharalingam:</strong> Fenomena sejagat yang mengiktiraf hak setiap bangsa untuk memerintah negara sendiri.",
                      "<strong>Dato' Onn Jaafar:</strong> Mengajak orang Melayu bersatu padu bagi memulihkan martabat bangsa di tanah air sendiri."
                    ],
                    "mnemonic": "💡 <strong>Akronim Tokoh SPM:</strong> <u>KHOO</u> (Kedudukan Melayu), <u>SUNTHAR</u> (Sejagat bangsa), <u>ONN</u> (Orang Melayu bersatu)."
                  },
                  {
                    "heading": "2. Faktor Kemunculan Gerakan Nasionalisme di Tanah Melayu",
                    "content": "Terdapat 6 faktor utama pemangkin kesedaran nasionalisme di Tanah Melayu:",
                    "bulletPoints": [
                      "<strong>1. Peranan Agama:</strong> Gerakan Islah dipelopori Kaum Muda (Sheikh Muhammad Tahir Jalaluddin, Syed Syeikh al-Hadi) membangkitkan kesedaran Islam yang progresif.",
                      "<strong>2. Penulisan Kreatif:</strong> Novel, cerpen, dan puisi meniupkan semangat cintakan tanah air (contoh: novel <em>Putera Gunung Tahan</em> oleh Pak Sako).",
                      "<strong>3. Media Cetak (Akhbar & Majalah):</strong> <em>Al-Imam</em>, <em>Neracha</em>, <em>Utusan Melayu</em>, <em>Warta Malaya</em> menjadi lidah rasmi menyuarakan nasib rakyat.",
                      "<strong>4. Sistem Pendidikan:</strong> Maktab Perguruan Sultan Idris (MPSI) melahirkan intelektual dan pejuang berjiwa bangsa.",
                      "<strong>5. Kemunculan Golongan Intelektual:</strong> Lepasan Timur Tengah, lepasan Inggeris, dan lepasan maktab perguruan.",
                      "<strong>6. Pengaruh Luar:</strong> Revolusi Turki Uthmaniyah, Gerakan Pan-Islamisme, dan kemenangan Jepun menewaskan Rusia (1905)."
                    ],
                    "examTip": "🎯 <strong>Fokus Kertas 1 SPM & KBAT Kertas 2:</strong> Soalan sering bertanya sumbangan Kaum Muda melalui majalah <em>Al-Imam</em> dan peranan MPSI sebagai 'The Factory of Leaders'."
                  }
                ]
              },
              "video": {
                "title": "Masterclass SPM Sejarah: Bab 2 Formula Hafal Tokoh & Akhbar",
                "duration": "12:40 minit",
                "presenter": "Cikgu Roslan (Pakar Sejarah SPM)",
                "embedUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                "highlights": [
                  "1:15 - Pengertian Nasionalisme mengikut tokoh",
                  "4:30 - Faktor Agama: Gerakan Islah & Kaum Muda",
                  "7:50 - Peranan Akhbar Utama (Al-Imam, Utusan Melayu)",
                  "10:15 - Analisis Format Soalan KBAT SPM"
                ]
              },
              "worksheet": {
                "title": "Modul Gerempur SPM Sejarah Bab 2: Peta Minda & Soalan Struktur",
                "pages": 3,
                "itemsCount": 15,
                "fileType": "Nota & Latihan PDF",
                "downloadUrl": "#",
                "previewItems": [
                  "Peta I-Think: Faktor Kemunculan Nasionalisme Tanah Melayu",
                  "Latihan Padanan: Tokoh Intelektual dan Pertubuhan Kebangsaan",
                  "Soalan Esei Klon SPM: Langkah generasi muda memupuk jati diri patriotik"
                ]
              },
              "quiz": {
                "id": "quiz-f4-sej-c2",
                "title": "Simulasi SPM Kertas 1: Sejarah Bab 2",
                "timeLimitMinutes": 12,
                "passingScore": 60,
                "xpPoints": 150,
                "questions": [
                  {
                    "id": 1,
                    "question": "Gerakan Islah yang dipelopori oleh Kaum Muda di Tanah Melayu menyebarkan idea mereka melalui media cetak utama iaitu...",
                    "options": [
                      "Akhbar Utusan Melayu",
                      "Majalah Al-Imam",
                      "Warta Melayu",
                      "Majlis"
                    ],
                    "correctIndex": 1,
                    "explanation": "Majalah Al-Imam diterbitkan pada tahun 1906 di Singapura sebagai wadah utama Kaum Muda untuk membangkitkan kesedaran Islam progresif dan kemajuan umat."
                  },
                  {
                    "id": 2,
                    "question": "Karya sastera novel 'Putera Gunung Tahan' yang mengkritik dasar imperialisme British ditulis oleh tokoh nasionalis...",
                    "options": [
                      "Harun Aminurrashid",
                      "Ishak Haji Muhammad (Pak Sako)",
                      "Zaba (Zainal Abidin Ahmad)",
                      "Ibrahim Haji Yaakob"
                    ],
                    "correctIndex": 1,
                    "explanation": "Ishak Haji Muhammad atau lebih dikenali sebagai Pak Sako menghasilkan karya satira tajam 'Putera Gunung Tahan' dan 'Anak Mat Lela Gila' untuk mengkritik penjajah British."
                  },
                  {
                    "id": 3,
                    "question": "Institusi pendidikan manakah yang terkenal sebagai 'The Cradle of Malay Nationalism' yang melahirkan ramai tokoh pemimpin guru dan penulis?",
                    "options": [
                      "Maktab Melayu Kuala Kangsar (MCKK)",
                      "Maktab Perguruan Sultan Idris (MPSI), Tanjung Malim",
                      "Penang Free School",
                      "Kolej Islam Malaya"
                    ],
                    "correctIndex": 1,
                    "explanation": "MPSI (kini UPSI) di Tanjung Malim memainkan peranan penting melahirkan guru-guru berjiwa pejuang yang membakar semangat nasionalisme di seluruh pelusuk tanah air."
                  },
                  {
                    "id": 4,
                    "question": "Peristiwa antarabangsa manakah yang membuktikan bahawa kuasa kecil Asia mampu menewaskan kuasa besar Barat dan menyuntik keberanian bangsa Timur?",
                    "options": [
                      "Kemenangan Jepun menewaskan Rusia pada tahun 1905",
                      "Revolusi Perancis 1789",
                      "Perang Kemerdekaan Amerika 1776",
                      "Penubuhan Liga Bangsa"
                    ],
                    "correctIndex": 0,
                    "explanation": "Kejayaan Jepun mengalahkan gergasi Eropah iaitu Rusia dalam perang 1904-1905 memecahkan mitos bahawa kuasa Barat tidak boleh ditewaskan."
                  },
                  {
                    "id": 5,
                    "question": "Apakah matlamat penubuhan Kesatuan Melayu Muda (KMM) oleh Ibrahim Haji Yaakob pada tahun 1938?",
                    "options": [
                      "Membantu British memungut cukai",
                      "Menuntut kemerdekaan Tanah Melayu dan idea penyatuan Melayu Raya",
                      "Menubuhkan sekolah berasrama penuh",
                      "Menggalakkan perniagaan bijih timah sahaja"
                    ],
                    "correctIndex": 1,
                    "explanation": "KMM merupakan pertubuhan Melayu bersifat politik pertama yang memperjuangkan kemerdekaan melalui konsep Melayu Raya (Indonesia-Tanah Melayu)."
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
          "description": "Subjek Wajib Lulus SPM: Fungsi kuadratik, asas nombor, penaakulan logik, dan operasi set.",
          "chapters": [
            {
              "id": "f4-mt-c1",
              "number": "Bab 1",
              "title": "Fungsi & Persamaan Kuadratik dalam Satu Pemboleh Ubah",
              "summary": "Bentuk am ax² + bx + c = 0, bentuk graf parabola (senyum/masam), titik punca, dan pemfaktoran.",
              "xpReward": 170,
              "badgeReward": "Pakar Kuadratik SPM",
              "notes": {
                "title": "Bab 1: Fungsi & Persamaan Kuadratik Lengkap",
                "readTime": "8 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "1. Bentuk Am Fungsi Kuadratik",
                    "content": "Fungsi kuadratik ditulis dalam bentuk: <code>f(x) = ax² + bx + c</code>, di mana a, b, dan c ialah pemalar serta <code>a ≠ 0</code>.",
                    "bulletPoints": [
                      "Kuasa tertinggi bagi pemboleh ubah x mestilah <strong>2</strong>.",
                      "Hanya mempunyai <strong>satu pemboleh ubah</strong> sahaja (contohnya x atau y).",
                      "Bukan kuadratik jika ada x³ atau x⁻¹ atau pemboleh ubah di bawah pecahan."
                    ],
                    "mnemonic": "💡 <strong>Bentuk Graf:</strong><br>• Jika <code>a > 0</code> (positif) ➔ Graf bentuk <strong>SENYUM (∪)</strong>, mempunyai titik <strong>MINIMUM</strong>.<br>• Jika <code>a < 0</code> (negatif) ➔ Graf bentuk <strong>MASAM (∩)</strong>, mempunyai titik <strong>MAKSIMUM</strong>."
                  },
                  {
                    "heading": "2. Kaedah Mencari Punca Persamaan Kuadratik",
                    "content": "Punca persamaan kuadratik <code>ax² + bx + c = 0</code> ialah nilai-nilai x yang memuaskan persamaan tersebut (titik persilangan pada paksi-x).",
                    "bulletPoints": [
                      "<strong>Kaedah 1 - Pemfaktoran:</strong> Contoh <code>x² - 5x + 6 = 0</code> ➔ <code>(x - 2)(x - 3) = 0</code> ➔ <code>x = 2</code> atau <code>x = 3</code>.",
                      "<strong>Kaedah 2 - Formula Kuadratik:</strong> <code>x = [-b ± √(b² - 4ac)] / (2a)</code>.",
                      "<strong>Semakan Pantas Menggunakan Kalkulator:</strong> Tekan MODE ➔ EQN ➔ Degree 2."
                    ],
                    "examTip": "⚡ <strong>Tip Kertas 2 Bahagian A:</strong> Tulis jalan kerja pemfaktoran dengan lengkap <code>(x ± p)(x ± q) = 0</code> sebelum menyatakan nilai akhir x untuk mendapat markah penuh!"
                  }
                ]
              },
              "video": {
                "title": "Teknik Skor A SPM: Selesaikan Persamaan Kuadratik Tanpa Silap",
                "duration": "10:15 minit",
                "presenter": "Cikgu Alex (Guru Cemerlang Matematik)",
                "embedUrl": "https://www.youtube.com/embed/f9ONXd_-anM",
                "highlights": [
                  "0:45 - Mengenal pasti graf Senyum vs Masam",
                  "3:20 - Tip Pemfaktoran Pantas Silang / Kalkulator",
                  "6:40 - Soalan KBAT Penyelesaian Masalah Geometri"
                ]
              },
              "worksheet": {
                "title": "Koleksi Soalan Percubaan SPM: Bab 1 Kuadratik",
                "pages": 3,
                "itemsCount": 8,
                "fileType": "Lembaran Kerja PDF",
                "downloadUrl": "#",
                "previewItems": [
                  "Menentukan sama ada ungkapan ialah kuadratik atau bukan",
                  "Mencari titik maksimum dan paksi simetri",
                  "Soalan masalah berayat: Luas padang berbentuk segiempat tepat"
                ]
              },
              "quiz": {
                "id": "quiz-f4-mt-c1",
                "title": "Ujian Formatif: Kuadratik SPM 1449",
                "timeLimitMinutes": 10,
                "passingScore": 60,
                "xpPoints": 140,
                "questions": [
                  {
                    "id": 1,
                    "question": "Antara ungkapan berikut, yang manakah merupakan ungkapan kuadratik dalam satu pemboleh ubah?",
                    "options": [
                      "3x² + 2y - 5",
                      "4x³ - x + 1",
                      "2x² - 7x + 3",
                      "5/x² + 4"
                    ],
                    "correctIndex": 2,
                    "explanation": "2x² - 7x + 3 mempunyai hanya satu pemboleh ubah (x) dan kuasa tertinggi pemboleh ubah ialah 2."
                  },
                  {
                    "id": 2,
                    "question": "Jika fungsi f(x) = -2x² + 8x - 3, apakah bentuk graf dan jenis titik yang terhasil?",
                    "options": [
                      "Graf bentuk ∪ (senyum) dan mempunyai titik minimum",
                      "Graf bentuk ∩ (masam) dan mempunyai titik maksimum",
                      "Garis lurus cerun positif",
                      "Graf bulatan dengan jejari 3"
                    ],
                    "correctIndex": 1,
                    "explanation": "Kerana nilai a = -2 (negatif), bentuk graf adalah melengkung ke bawah (masam / ∩) dan mempunyai titik MAKSIMUM."
                  },
                  {
                    "id": 3,
                    "question": "Selesaikan persamaan kuadratik x² - 9 = 0. Apakah nilai-nilai bagi x?",
                    "options": [
                      "x = 3 sahaja",
                      "x = 9 dan x = -9",
                      "x = 3 dan x = -3",
                      "x = 0"
                    ],
                    "correctIndex": 2,
                    "explanation": "x² - 9 = 0 ➔ (x - 3)(x + 3) = 0. Maka x = 3 atau x = -3."
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
          "chaptersCount": 7,
          "description": "Pengukuran, daya dan gerakan, kegravitian, haba, gelombang dan cahaya.",
          "chapters": [
            {
              "id": "f4-fiz-c2",
              "number": "Bab 2",
              "title": "Daya dan Gerakan I (Linear Motion)",
              "summary": "Gerakan linear, graf halaju-masa, inersia, momentum dan 4 persamaan kinematik linear.",
              "xpReward": 190,
              "badgeReward": "Pakar Fizik Kuantum",
              "notes": {
                "title": "Bab 2: Daya dan Gerakan I (KSSM / DLP Physics)",
                "readTime": "9 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "1. Konsep Asas Gerakan Linear (Linear Motion)",
                    "content": "Fizik gerakan melibatkan kuantiti skalar (magnitud sahaja) dan kuantiti vektor (magnitud + arah).",
                    "bulletPoints": [
                      "<strong>Jarak (Distance) vs Sesaran (Displacement):</strong> Jarak ialah jumlah panjang lintasan (skalar), manakala sesaran ialah jarak terpendek antara titik awal dan akhir pada arah tertentu (vektor).",
                      "<strong>Laju (Speed) vs Halaju (Velocity):</strong> Laju = Jarak / Masa. Halaju = Sesaran / Masa (ms⁻¹).",
                      "<strong>Pecutan (Acceleration, a):</strong> Kadar perubahan halaju: <code>a = (v - u) / t</code> (ms⁻²)."
                    ],
                    "mnemonic": "💡 <strong>4 Formula Kinematik Wajib SPM:</strong><br>1. <code>v = u + at</code><br>2. <code>s = ut + ½at²</code><br>3. <code>v² = u² + 2as</code><br>4. <code>s = ½(u + v)t</code>"
                  },
                  {
                    "heading": "2. Hukum Gerakan Newton & Inersia",
                    "content": "Inersia ialah kecenderungan suatu objek untuk mengekalkan keadaan asalnya sama ada pegun atau bergerak dalam garis lurus.",
                    "bulletPoints": [
                      "<strong>Hukum Gerakan Newton Pertama:</strong> Objek akan kekal pegun atau bergerak dengan halaju seragam kecuali jika dikenakan daya luar.",
                      "<strong>Hubungan Jisim dan Inersia:</strong> Semakin besar jisim sesuatu objek, semakin besar inersianya (contoh: lori sarat muatan sukar berhenti berbanding kereta kancil).",
                      "<strong>Momentum (p):</strong> Hasil darab jisim dan halaju: <code>p = m × v</code> (kg ms⁻¹)."
                    ],
                    "examTip": "🎯 <strong>Tip Kertas 2 Bahagian B:</strong> Soalan reka bentuk kenderaan selamat sering menyoal fungsi zon remuk (crush zone) dan beg udara untuk memanjangkan masa hentaman seterusnya mengurangkan daya impuls!"
                  }
                ]
              },
              "video": {
                "title": "SPM Physics Masterclass: Linear Motion & Newton's Law",
                "duration": "14:10 minit",
                "presenter": "Sir Brian (Guru Fizik Cemerlang)",
                "embedUrl": "https://www.youtube.com/embed/f9ONXd_-anM",
                "highlights": [
                  "1:20 - Scalar vs Vector Quantities",
                  "5:00 - Ticker Tape & Velocity-Time Graphs",
                  "8:30 - Solving the 4 Kinematics Equations",
                  "12:00 - SPM Calculation Pitfalls"
                ]
              },
              "worksheet": {
                "title": "Modul Soalan Klon SPM Fizik Kertas 2: Gerakan Linear",
                "pages": 3,
                "itemsCount": 10,
                "fileType": "Lembaran Latihan PDF",
                "downloadUrl": "#",
                "previewItems": [
                  "Mentafsir graf halaju-masa dan mengira luas di bawah graf (sesaran)",
                  "Menyelesaikan masalah kenderaan membrek menggunakan formula kuadratik kinematik",
                  "Menjelaskan prinsip keabadian momentum dalam perlanggaran kenyal"
                ]
              },
              "quiz": {
                "id": "quiz-f4-fiz-c2",
                "title": "Simulasi SPM Fizik 4531: Gerakan Linear",
                "timeLimitMinutes": 12,
                "passingScore": 60,
                "xpPoints": 160,
                "questions": [
                  {
                    "id": 1,
                    "question": "Sebuah kereta memecut secara seragam daripada pegun (u = 0 ms⁻¹) sehingga mencapai halaju 20 ms⁻¹ dalam masa 5 saat. Berapakah pecutan kereta tersebut?",
                    "options": [
                      "2 ms⁻²",
                      "4 ms⁻²",
                      "10 ms⁻²",
                      "100 ms⁻²"
                    ],
                    "correctIndex": 1,
                    "explanation": "Gunakan formula a = (v - u) / t. Maka a = (20 - 0) / 5 = 4 ms⁻²."
                  },
                  {
                    "id": 2,
                    "question": "Kecerunan bagi graf halaju melawan masa (v-t) mewakili kuantiti fizik apakah?",
                    "options": [
                      "Sesaran objek",
                      "Pecutan objek",
                      "Jumlah momentum",
                      "Daya impuls"
                    ],
                    "correctIndex": 1,
                    "explanation": "Kecerunan graf v-t ialah perubahan halaju dibahagikan masa (dv/dt), iaitu pecutan objek."
                  },
                  {
                    "id": 3,
                    "question": "Antara ciri berikut, yang manakah menentukan magnitud inersia bagi suatu objek?",
                    "options": [
                      "Ketumpatan objek",
                      "Jisim objek",
                      "Isipadu objek",
                      "Bentuk geometri objek"
                    ],
                    "correctIndex": 1,
                    "explanation": "Inersia bergantung sepenuhnya kepada jisim objek. Semakin besar jisim, semakin besar rintangan objek terhadap perubahan keadaan gerakannya."
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
          "chaptersCount": 8,
          "description": "Jirim dan struktur atom, konsep mol, jadual berkala, dan ikatan kimia.",
          "chapters": [
            {
              "id": "f4-kim-c2",
              "number": "Bab 2",
              "title": "Jirim dan Struktur Atom",
              "summary": "Teori zarah jirim, takat lebur/beku, perkembangan model atom, nombor proton & nukleon, serta isotop.",
              "xpReward": 180,
              "badgeReward": "Ahli Kimia Pintar",
              "notes": {
                "title": "Bab 2: Jirim dan Struktur Atom Lengkap (SPM 4541)",
                "readTime": "8 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "1. Teori Kinetik Jirim & Keluk Pemanasan",
                    "content": "Jirim terdiri daripada zarah-zarah halus dan diskret yang sentiasa bergerak secara rawak.",
                    "bulletPoints": [
                      "<strong>3 Keadaan Jirim:</strong> Pepejal (zarah tersusun padat bergetar pada kedudukan tetap), Cecair (tersusun longgar, menggelongsor), Gas (berjauhan, bergerak rawak laju).",
                      "<strong>Suhu Kekal Semasa Peleburan:</strong> Tenaga haba diserap digunakan untuk mengatasi daya tarikan antara zarah, bukan untuk menaikkan suhu.",
                      "<strong>Suhu Kekal Semasa Pembekuan:</strong> Tenaga haba yang dibebaskan ke persekitaran diimbangi oleh tenaga haba yang terbebas apabila ikatan terbentuk."
                    ],
                    "mnemonic": "💡 <strong>Ingat Tokoh Model Atom (D-T-R-B-C):</strong><br><u>D</u>alton (Bebola pejal) ➔ <u>T</u>homson (Elektron/Puding plum) ➔ <u>R</u>utherford (Nukleus positif) ➔ <u>B</u>ohr (Petala elektron) ➔ <u>C</u>hadwick (Neutron)!"
                  },
                  {
                    "heading": "2. Struktur Atom & Isotop",
                    "content": "Atom terdiri daripada 3 zarah subatom: Proton (positif), Neutron (neutral), dan Elektron (negatif).",
                    "bulletPoints": [
                      "<strong>Nombor Proton (Z):</strong> Bilangan proton dalam nukleus suatu atom.",
                      "<strong>Nombor Nukleon (A):</strong> Jumlah bilangan proton dan neutron dalam nukleus: <code>A = Bilangan Proton + Bilangan Neutron</code>.",
                      "<strong>Definisi Isotop SPM:</strong> Atom-atom bagi unsur yang sama yang mempunyai bilangan proton yang sama tetapi bilangan neutron yang berbeza.",
                      "<strong>Kegunaan Isotop:</strong> Kobalt-60 (radioterapi kanser), Karbon-14 (menganggar usia fosil), Iodin-131 (rawatan kelenjar tiroid)."
                    ],
                    "examTip": "⚡ <strong>Soalan Lazim Kertas 2:</strong> Pastikan anda hafal takrifan isotop perkataan demi perkataan! Jangan lupa sebut 'atom-atom bagi unsur yang sama'."
                  }
                ]
              },
              "video": {
                "title": "Kimia SPM: Struktur Atom & Formula Mudah Kuasai Keluk Pemanasan",
                "duration": "11:30 minit",
                "presenter": "Cikgu Suhana (Pakar Kimia SPM)",
                "embedUrl": "https://www.youtube.com/embed/f9ONXd_-anM",
                "highlights": [
                  "1:00 - Keluk Pemanasan & Penyejukan Naftalena",
                  "4:20 - Kronologi Model Atom dari Dalton ke Chadwick",
                  "7:50 - Mengira Zarah Subatom & Susunan Elektron",
                  "9:45 - 4 Kegunaan Penting Isotop dalam Industri"
                ]
              },
              "worksheet": {
                "title": "Modul Soalan Struktur Kimia Bab 2: Struktur Atom",
                "pages": 2,
                "itemsCount": 8,
                "fileType": "Lembaran Kerja PDF",
                "downloadUrl": "#",
                "previewItems": [
                  "Melukis susunan elektron atom natrium dan ion natrium",
                  "Menentukan bilangan neutron bagi isotop klorin-35 dan klorin-37",
                  "Menerangkan mengapa suhu tidak berubah semasa peleburan"
                ]
              },
              "quiz": {
                "id": "quiz-f4-kim-c2",
                "title": "Kuiz Formatif: Kimia SPM Bab 2",
                "timeLimitMinutes": 10,
                "passingScore": 60,
                "xpPoints": 150,
                "questions": [
                  {
                    "id": 1,
                    "question": "Tokoh saintis manakah yang menemukan zarah neutral iaitu neutron dalam nukleus atom?",
                    "options": [
                      "John Dalton",
                      "J.J. Thomson",
                      "Ernest Rutherford",
                      "James Chadwick"
                    ],
                    "correctIndex": 3,
                    "explanation": "James Chadwick menemukan neutron pada tahun 1932, melengkapkan model atom nukleus moden."
                  },
                  {
                    "id": 2,
                    "question": "Suatu atom unsur X mempunyai 11 proton dan 12 neutron. Apakah nombor nukleon bagi unsur X?",
                    "options": [
                      "11",
                      "12",
                      "23",
                      "1"
                    ],
                    "correctIndex": 2,
                    "explanation": "Nombor nukleon ialah jumlah bilangan proton dan neutron: 11 + 12 = 23 (iaitu Natrium, Na)."
                  },
                  {
                    "id": 3,
                    "question": "Isotop Kobalt-60 lazimnya digunakan dalam bidang perubatan untuk...",
                    "options": [
                      "Merawat kanser melalui radioterapi",
                      "Mengesan kebocoran paip bawah tanah",
                      "Menjana tenaga elektrik dalam reaktor",
                      "Menganggar usia artifak purba"
                    ],
                    "correctIndex": 0,
                    "explanation": "Kobalt-60 memancarkan sinar gama yang digunakan untuk memusnahkan sel kanser dalam radioterapi."
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
          "chaptersCount": 6,
          "description": "Karangan respon terbuka, morfologi, sintaksis, peribahasa, dan rumusan format baharu.",
          "chapters": [
            {
              "id": "f4-bm-c1",
              "number": "Bahagian A & B",
              "title": "Sistem Bahasa & Teknik Karangan Cemerlang",
              "summary": "Menguasai golongan kata (morfologi), ayat aktif/pasif (sintaksis), peribahasa dan formula karangan IMBaKUP.",
              "xpReward": 170,
              "badgeReward": "Pujangga Melayu",
              "notes": {
                "title": "Sistem & Aplikasi Bahasa serta Penulisan Esei SPM",
                "readTime": "8 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "1. Formula Perenggan Isi Karangan Cemerlang (IMBaKUP)",
                    "content": "Untuk memperoleh markah Cemerlang (Gred A/A+) dalam Kertas 1 SPM, setiap perenggan isi mestilah matang dan berkembang.",
                    "bulletPoints": [
                      "<strong>I (Isi Utama):</strong> Nyatakan idea pokok dengan jelas menggunakan penanda wacana.",
                      "<strong>M (Mengapa):</strong> Huraikan punca atau sebab mengapa isi tersebut penting.",
                      "<strong>Ba (Bagaimana):</strong> Berikan contoh konkrit, program atau statistik semasa.",
                      "<strong>K (Kesan):</strong> Jelaskan impak positif atau negatif kepada individu, masyarakat atau negara.",
                      "<strong>U (Ungkapan Menarik):</strong> Selitkan peribahasa, cogan kata atau kata-kata tokoh.",
                      "<strong>P (Penegas):</strong> Simpulkan kembali isi utama dalam ayat penutup perenggan."
                    ],
                    "mnemonic": "💡 <strong>Formula Karangan A+:</strong> <u>I</u>-<u>M</u>-<u>Ba</u>-<u>K</u>-<u>U</u>-<u>P</u> (Isu, Mengapa, Bagaimana, Kesan, Ungkapan menarik, Penegas)!"
                  },
                  {
                    "heading": "2. Sistem Bahasa Kertas 2: Morfologi & Sintaksis",
                    "content": "Kertas 2 menguji kefahaman tatabahasa secara tepat tanpa menokok tambah imbuhan sesuka hati.",
                    "bulletPoints": [
                      "<strong>Golongan Kata:</strong> Kata Nama, Kata Kerja, Kata Adjektif, Kata Tugas.",
                      "<strong>Pola Ayat Dasar Bahasa Melayu:</strong><br>• FN + FN (Ali ialah guru)<br>• FN + FK (Ali sedang membaca buku)<br>• FN + FA (Rumah Ali sangat besar)<br>• FN + FS (Bapa Ali ke pejabat)",
                      "<strong>Penyuntingan Ejaan:</strong> Teliti kesalahan ejaan seperti <em>merbahaya ➔ berbahaya</em>, <em>tengahari ➔ tengah hari</em>, <em>atlit ➔ atlet</em>."
                    ],
                    "examTip": "🎯 <strong>Tip Kertas 2 SPM:</strong> Semasa membina ayat dalam soalan Morfologi, pastikan ayat yang dibina jelas maksudnya dan mengandungi subjek serta predikat yang lengkap!"
                  }
                ]
              },
              "video": {
                "title": "Teknik Menulis Karangan SPM Skor A+ Bersama Guru Pakar",
                "duration": "13:00 minit",
                "presenter": "Cikgu Haslina (Guru Cemerlang BM)",
                "embedUrl": "https://www.youtube.com/embed/f9ONXd_-anM",
                "highlights": [
                  "1:00 - Struktur Perenggan Pendahuluan Format Terkini",
                  "4:30 - Aplikasi Formula IMBaKUP dalam Perenggan Isi",
                  "8:15 - Koleksi Peribahasa Berimpak Tinggi untuk SPM",
                  "11:00 - Analisis Kesalahan Lazim Morfologi Kertas 2"
                ]
              },
              "worksheet": {
                "title": "Modul Gerempur Kertas 2 SPM: Morfologi & Sintaksis",
                "pages": 2,
                "itemsCount": 6,
                "fileType": "Lembaran Latihan PDF",
                "downloadUrl": "#",
                "previewItems": [
                  "Membina ayat bagi pasangan kata ganda",
                  "Menukarkan ayat aktif kepada ayat pasif",
                  "Mengenal pasti pola ayat dasar bagi 4 ayat contoh"
                ]
              },
              "quiz": {
                "id": "quiz-f4-bm-c1",
                "title": "Ujian Formatif: Sistem Bahasa SPM 1103",
                "timeLimitMinutes": 10,
                "passingScore": 60,
                "xpPoints": 140,
                "questions": [
                  {
                    "id": 1,
                    "question": "Antara berikut, pasangan ejaan manakah yang semuanya dieja dengan betul mengikut Dewan Bahasa dan Pustaka (DBP)?",
                    "options": [
                      "Tengahari, merbahaya, ko-kurikulum",
                      "Tengah hari, berbahaya, kokurikulum",
                      "Tengah-hari, bahaya, ko kurikulum",
                      "Tengahari, berbaaya, kokurikulum"
                    ],
                    "correctIndex": 1,
                    "explanation": "'Tengah hari' dieja dua patah perkataan, imbuhan awalan bagi bahaya ialah 'berbahaya' (bukan merbahaya), dan 'kokurikulum' dieja serangkai."
                  },
                  {
                    "id": 2,
                    "question": "Ayat 'Pemandangan di puncak bukit itu sungguh indah' tergolong dalam pola ayat dasar yang manakah?",
                    "options": [
                      "Frasa Nama + Frasa Nama (FN + FN)",
                      "Frasa Nama + Frasa Kerja (FN + FK)",
                      "Frasa Nama + Frasa Adjektif (FN + FA)",
                      "Frasa Nama + Frasa Sendi Nama (FN + FS)"
                    ],
                    "correctIndex": 2,
                    "explanation": "'Pemandangan di puncak bukit itu' ialah Frasa Nama (subjek), manakala 'sungguh indah' ialah Frasa Adjektif (predikat). Maka polanya ialah FN + FA."
                  },
                  {
                    "id": 3,
                    "question": "Peribahasa yang manakah paling tepat digunakan untuk menggambarkan sikap generasi muda yang mudah melupakan asal usul dan jasa ibu bapa?",
                    "options": [
                      "Bagai aur dengan tebing",
                      "Kacang lupakan kulit",
                      "Alang-alang menyeluk pekasam",
                      "Hujan emas di negeri orang"
                    ],
                    "correctIndex": 1,
                    "explanation": "'Kacang lupakan kulit' bermaksud orang yang tidak mengenang budi atau melupakan jasa mereka yang telah membantunya."
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
          "chaptersCount": 8,
          "description": "Reading & Use of English, Writing essays (Review, Article, Story), Speaking, Listening.",
          "chapters": [
            {
              "id": "f4-bi-c1",
              "number": "Unit 1",
              "title": "Let's Chat: Descriptive Writing & SPM Paper 2 Format",
              "summary": "Mastering SPM English Paper 2 Part 2 (Guided Writing) & Part 3 (Extended Writing: Article, Review, Report).",
              "xpReward": 120,
              "badgeReward": "SPM English Ace",
              "notes": {
                "title": "Unit 1: SPM Extended Writing Masterclass",
                "readTime": "6 minutes",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "SPM Paper 2 Writing Breakdown",
                    "content": "SPM English (1119/2) consists of three crucial writing sections requiring high CEFR vocabulary and clear cohesion:",
                    "bulletPoints": [
                      "<strong>Part 1: Short Communicative Message (Email/Letter):</strong> 80 words (20 marks). Direct, concise responses to all prompts.",
                      "<strong>Part 2: Guided Writing (Essay):</strong> 125 - 150 words (20 marks). Must elaborate on all 3 given bullet points thoroughly.",
                      "<strong>Part 3: Extended Writing (Article, Review, Report, Story):</strong> 200 - 250 words (20 marks). Strong voice, advanced vocabulary, and cohesive linkers (Moreover, Consequently, On the other hand).",
                      "<strong>Vocabulary Boost:</strong> Crucial, Indispensable, Paramount, Ubiquitous, Detrimental."
                    ],
                    "mnemonic": "💡 <strong>SPM Writing Formula:</strong> P-E-E-L (Point, Explanation, Evidence/Example, Link back to topic)!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f4-bi-c1",
                "title": "SPM Writing Techniques Quiz",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Which of the following cohesive devices indicates a strong contrast between two points?",
                    "options": [
                      "Furthermore",
                      "Nevertheless",
                      "Subsequently",
                      "In addition to"
                    ],
                    "correctIndex": 1,
                    "explanation": "'Nevertheless' functions as a formal conjunctive adverb showing contrast (similar to 'However' or 'Nonetheless')."
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
          "chaptersCount": 5,
          "description": "Bab 2: Biologi Sel dan Organisasi Sel, struktur membran plasma (Model Mozek Bendalir), dan osmosis.",
          "chapters": [
            {
              "id": "f4-bio-c2",
              "number": "Bab 2",
              "title": "Biologi Sel: Organel & Membran Plasma (Model Mozek Bendalir)",
              "summary": "Menganalisis komponen membran plasma (dwilapisan fosfolipid, protein pembawa, protein liang) dan resapan ringkas vs osmosis.",
              "xpReward": 120,
              "badgeReward": "Biologis Molekul",
              "notes": {
                "title": "Bab 2: Model Mozek Bendalir Membran Plasma",
                "readTime": "6 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Struktur Membran Plasma",
                    "content": "Membran plasma bersifat telap memilih yang mengawal pergerakan bahan masuk dan keluar sel:",
                    "bulletPoints": [
                      "<strong>Dwilapisan Fosfolipid:</strong> Kepala hidrofilik (tertarik kepada air) menghadap ke luar dan dalam sel; ekor hidrofobik (menolak air) menghadap ke dalam.",
                      "<strong>Protein Liang & Protein Pembawa:</strong> Mengangkut molekul berkutub besar dan ion (Glukosa, asid amino, ion Na+/K+).",
                      "<strong>Kolesterol:</strong> Mengawal ketelapan dan fleksibiliti (kebendaliran) membran pada suhu berbeza.",
                      "<strong>Glikoprotein & Glikolipid:</strong> Bertindak sebagai tapak reseptor pengecaman sel."
                    ],
                    "mnemonic": "💡 <strong>Formula Fosfolipid:</strong> Kepala Suka Air (Hidrofilik), Ekor Takut Air (Hidrofobik)!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f4-bio-c2",
                "title": "Kuiz Struktur Membran Plasma",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Bahagian fosfolipid yang menghadap ke luar membran dan bersifat larut dalam air ialah...",
                    "options": [
                      "Ekor hidrofobik",
                      "Kepala hidrofilik",
                      "Molekul kolesterol",
                      "Glikogen"
                    ],
                    "correctIndex": 1,
                    "explanation": "Kepala fosfolipid mengandungi kumpulan fosfat yang berkutub dan hidrofilik (tertarik kepada molekul air)."
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
          "chaptersCount": 5,
          "description": "Bab 1: Langkah Keselamatan dalam Makmal & Bantuan Kecemasan (CPR & Heimlich Maneuver).",
          "chapters": [
            {
              "id": "f4-sn-c1",
              "number": "Bab 1",
              "title": "Bantuan Kecemasan: Kaedah CPR & Heimlich Maneuver",
              "summary": "Prosedur menyelamatkan mangsa tercekik dan mangsa serangan jantung/lemas melalui CPR 30 mampatan dada : 2 hembusan.",
              "xpReward": 120,
              "badgeReward": "Penyelamat Nyawa SPM",
              "notes": {
                "title": "Bab 1: Prosedur CPR & Heimlich Maneuver",
                "readTime": "5 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Resusitasi Kardiopulmonari (CPR)",
                    "content": "CPR ialah bantuan kecemasan gabungan mampatan dada dan hembusan nafas untuk memulihkan denyutan jantung dan pernafasan mangsa:",
                    "bulletPoints": [
                      "<strong>Situasi CPR:</strong> Mangsa tidak bernafas, tiada tindak balas (respons), dan tiada denyutan nadi.",
                      "<strong>Nisbah Mampatan:</strong> 30 mampatan dada diikuti 2 hembusan nafas berterusan pada kedalaman 5 cm.",
                      "<strong>Heimlich Maneuver:</strong> Dilakukan kepada mangsa yang tercekik (saluran pernafasan tersumbat oleh makanan/objek). Tangan digenggam antara pusat dengan bawah tulang rusuk dan ditekan ke dalam dan ke atas dengan pantas."
                    ],
                    "mnemonic": "💡 <strong>Formula CPR:</strong> 30 Mampatan Dada : 2 Hembusan Nafas (Kadar 100-120 mampatan/minit)!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f4-sn-c1",
                "title": "Kuiz Bantuan Kecemasan CPR",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Apakah nisbah mampatan dada kepada hembusan nafas semasa melakukan CPR?",
                    "options": [
                      "15 mampatan : 1 hembusan",
                      "30 mampatan : 2 hembusan",
                      "50 mampatan : 5 hembusan",
                      "10 mampatan : 2 hembusan"
                    ],
                    "correctIndex": 1,
                    "explanation": "Standard protokol antarabangsa menetapkan 30 kali mampatan dada diikuti oleh 2 kali hembusan nafas."
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
          "chaptersCount": 5,
          "description": "Bab 1: Tujuan Perniagaan dan Bentuk Pemilikan Perniagaan (Milikan Tunggal, Perkongsian, Syarikat Sdn Bhd).",
          "chapters": [
            {
              "id": "f4-perniagaan-c1",
              "number": "Bab 1",
              "title": "Tujuan Perniagaan & Bentuk Pemilikan Perniagaan",
              "summary": "Perbezaan Organisasi Bermotifkan Untung (OBU) vs Bukan Bermotifkan Untung (OBBU), serta perbandingan liabiliti terhad vs tidak terhad.",
              "xpReward": 120,
              "badgeReward": "Usahawan Muda SPM",
              "notes": {
                "title": "Bab 1: Bentuk-Bentuk Pemilikan Perniagaan",
                "readTime": "5 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Perbandingan Bentuk Milikan Entiti Perniagaan",
                    "content": "Perniagaan ditubuhkan untuk memenuhi keperluan dan kehendak pengguna melalui aktiviti jual beli barang atau perkhidmatan:",
                    "bulletPoints": [
                      "<strong>Milikan Tunggal:</strong> Dimiliki oleh seorang individu. Modal kecil, untung milik sendiri, liabiliti TIDAK TERHAD (harta peribadi boleh disita jika bankrap).",
                      "<strong>Perkongsian:</strong> Dimiliki oleh 2 hingga 20 orang rakan kongsi. Modal lebih besar, liabiliti tidak terhad bagi perkongsian am.",
                      "<strong>Syarikat Sendirian Berhad (Sdn. Bhd.):</strong> Dimiliki oleh 1 hingga 50 orang pemegang saham. Liabiliti TERHAD kepada modal saham dilaburkan, entiti berasingan di bawah Akta Syarikat 2016."
                    ],
                    "mnemonic": "💡 <strong>Formula Liabiliti:</strong> Tunggal & Kongsi = Liabiliti TIDAK TERHAD; Syarikat Sdn Bhd = Liabiliti TERHAD!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f4-perniagaan-c1",
                "title": "Kuiz Bentuk Pemilikan Perniagaan",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Apakah kelebihan utama Syarikat Sendirian Berhad (Sdn. Bhd.) berbanding Milikan Tunggal?",
                    "options": [
                      "Tidak perlu membayar cukai",
                      "Liabiliti pemegang saham adalah terhad kepada modal yang dilaburkan sahaja",
                      "Boleh menjual saham kepada orang awam di Bursa Malaysia",
                      "Tidak perlu mendaftar perniagaan"
                    ],
                    "correctIndex": 1,
                    "explanation": "Liabiliti terhad melindungi aset peribadi pemilik daripada dituntut oleh pemiutang sekiranya syarikat mengalami muflis."
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
          "chaptersCount": 5,
          "description": "Akidah: Pegangan Ahli Sunnah Wal Jamaah (ASWJ), ciri-ciri aliran yang bertentangan (Syiah, Khawarij), dan kemanisan iman.",
          "chapters": [
            {
              "id": "f4-pi-c1",
              "number": "Unit 1",
              "title": "Akidah: Pegangan Ahli Sunnah Wal Jamaah (ASWJ)",
              "summary": "Memahami prinsip utama akidah Ahli Sunnah Wal Jamaah berlandaskan Al-Quran dan As-Sunnah serta pandangan Imam Abu Hassan Al-Asy'ari.",
              "xpReward": 120,
              "badgeReward": "Kukuh Akidah SPM",
              "notes": {
                "title": "Unit 1: Prinsip Ahli Sunnah Wal Jamaah",
                "readTime": "5 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Prinsip Utama Ahli Sunnah Wal Jamaah",
                    "content": "Ahli Sunnah Wal Jamaah ialah kumpulan majoriti umat Islam yang berpegang teguh dengan ajaran Rasulullah SAW dan para sahabat:",
                    "bulletPoints": [
                      "<strong>Sumber Rujukan Utama:</strong> Berpegang kepada Al-Quran dan Al-Sunnah mengikut kefahaman para sahabat, tabiin, dan tabi' tabiin.",
                      "<strong>Kedudukan Para Sahabat:</strong> Memuliakan semua sahabat Nabi SAW dan tidak mencela mana-mana sahabat.",
                      "<strong>Pelaku Dosa Besar:</strong> Mengiktiraf bahawa pelaku dosa besar masih mukmin dan tidak kafir, nasibnya terserah kepada keampunan Allah di akhirat.",
                      "<strong>Tokoh Utama:</strong> Imam Abu Hassan Al-Asy'ari dan Imam Abu Mansur Al-Maturidi."
                    ]
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f4-pi-c1",
                "title": "Kuiz Akidah Ahli Sunnah Wal Jamaah",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Menurut pegangan Ahli Sunnah Wal Jamaah, status orang Islam yang melakukan dosa besar dan belum bertaubat ialah...",
                    "options": [
                      "Kafir keluar daripada Islam",
                      "Kekal dalam neraka selamanya",
                      "Mukmin yang berdosa (Fasiq), terserah kepada Allah",
                      "Munafik tulen"
                    ],
                    "correctIndex": 2,
                    "explanation": "ASWJ berpegang bahawa pelaku dosa besar tetap dianggap mukmin tetapi fasik, dan urusannya terserah kepada rahmat atau azab Allah."
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
              "title": "Kedaulatan Negara",
              "summary": "Konsep kedaulatan tradisional, moden, undang-undang, dan antarabangsa serta ciri negara berdaulat.",
              "xpReward": 180,
              "badgeReward": "Benteng Kedaulatan",
              "notes": {
                "title": "Bab 1: Kedaulatan Negara (Sejarah Tingkatan 5)",
                "readTime": "7 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "1. Konsep Kedaulatan Mengikut Takrifan Bahasa & Tokoh",
                    "content": "Kedaulatan ditakrifkan sebagai kekuasaan tertinggi dan kewibawaan sesebuah negara bebas yang merdeka.",
                    "bulletPoints": [
                      "<strong>Bahasa Melayu:</strong> Berasal daripada perkataan 'Daulat' yang bermaksud kekuasaan dan hak mutlak.",
                      "<strong>Bahasa Arab:</strong> Berasal daripada perkataan 'Daulah' yang bermaksud kuasa pemerintahan.",
                      "<strong>Bahasa Yunani:</strong> Berasal daripada 'Supernuus' yang bermaksud agung atau tertinggi.",
                      "<strong>Jean Bodin:</strong> Kedaulatan ialah kuasa tertinggi dalam sesebuah negara yang bersifat kekal dan tidak terhad."
                    ],
                    "mnemonic": "💡 <strong>Formula 4 Jenis Kedaulatan:</strong> <u>T</u>radisional (Raja), <u>M</u>oden (Rakyat & Demokrasi), <u>U</u>ndang-undang (Keluhuran undang-undang), <u>A</u>ntarabangsa (Diiktiraf PBB)."
                  },
                  {
                    "heading": "2. Ciri-ciri Negara yang Berdaulat",
                    "content": "Malaysia sebagai negara yang berdaulat mempunyai 4 ciri utama:",
                    "bulletPoints": [
                      "<strong>Mempunyai Pemerintah:</strong> Menjamin kestabilan politik, diterajui Yang di-Pertuan Agong dan Perdana Menteri.",
                      "<strong>Mempunyai Sempadan:</strong> Garis pemisah tanah air, laut dan udara yang diiktiraf di peringkat antarabangsa.",
                      "<strong>Mempunyai Perundangan:</strong> Berpandukan Perlembagaan Persekutuan sebagai undang-undang tertinggi.",
                      "<strong>Mempunyai Rakyat:</strong> Terdiri daripada pelbagai kaum yang disatukan melalui Bahasa Kebangsaan dan Rukun Negara."
                    ],
                    "examTip": "🎯 <strong>Fokus SPM Kertas 2:</strong> Jelaskan langkah-langkah mempertahankan kedaulatan negara (KBAT: Mewujudkan kestabilan politik, memupuk perpaduan kaum, dan memperkukuh pertahanan negara)."
                  }
                ]
              },
              "video": {
                "title": "Tingkatan 5 SPM: Bab 1 Kedaulatan Negara Kupasan Pantas",
                "duration": "9:50 minit",
                "presenter": "Cikgu Roslan (Pakar Sejarah SPM)",
                "embedUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                "highlights": [
                  "0:30 - Maksud Kedaulatan Bahasa & Tokoh",
                  "3:10 - 4 Jenis Kedaulatan (Formula TMUA)",
                  "5:45 - 4 Ciri Negara Berdaulat",
                  "8:00 - Soalan KBAT SPM 8 Markah"
                ]
              },
              "worksheet": {
                "title": "Modul Ulang Kaji Kedaulatan Negara Bab 1",
                "pages": 2,
                "itemsCount": 10,
                "fileType": "Nota Poket PDF",
                "downloadUrl": "#",
                "previewItems": [
                  "Jadual perbandingan jenis kedaulatan",
                  "Rajah 4 Ciri Negara Berdaulat Malaysia",
                  "Latihan esei respons terbuka"
                ]
              },
              "quiz": {
                "id": "quiz-f5-sej-c1",
                "title": "Simulasi SPM Kertas 1: Kedaulatan Negara",
                "timeLimitMinutes": 10,
                "passingScore": 60,
                "xpPoints": 150,
                "questions": [
                  {
                    "id": 1,
                    "question": "Perkataan kedaulatan dalam Bahasa Arab diterbitkan daripada perkataan 'Daulah' yang membawa maksud...",
                    "options": [
                      "Kuasa tertinggi sesebuah kerajaan atau negara",
                      "Kedaulatan raja mutlak",
                      "Sistem perlembagaan bertulis",
                      "Perpaduan rakyat berbilang bangsa"
                    ],
                    "correctIndex": 0,
                    "explanation": "Dalam Bahasa Arab, perkataan 'Daulah' merujuk kepada kuasa pemerintahan sesebuah kerajaan atau negara."
                  },
                  {
                    "id": 2,
                    "question": "Kedaulatan tradisional sesebuah negeri di Tanah Melayu berpusat kepada kekuasaan dan kewibawaan...",
                    "options": [
                      "Raja atau Sultan",
                      "Menteri Besar",
                      "Dewan Undangan Negeri",
                      "Majlis Raja-Raja"
                    ],
                    "correctIndex": 0,
                    "explanation": "Kedaulatan tradisional berpusat kepada kedaulatan Raja-raja Melayu di mana kekuasaan dan kewibawaan raja diperkukuh oleh taat setia rakyat."
                  },
                  {
                    "id": 3,
                    "question": "Apakah dokumen perundangan tertinggi yang menjadi asas kedaulatan dan pentadbiran di Malaysia?",
                    "options": [
                      "Akta Parlimen",
                      "Perlembagaan Persekutuan",
                      "Deklarasi Kemerdekaan 1957",
                      "Rukun Negara"
                    ],
                    "correctIndex": 1,
                    "explanation": "Perlembagaan Persekutuan ialah undang-undang tertinggi persekutuan di Malaysia yang mengatasi mana-mana undang-undang lain."
                  }
                ]
              }
            },
            {
              "id": "f5-sej-c2",
              "number": "Bab 2",
              "title": "Perlembagaan Persekutuan: Ciri Tradisional vs Ciri Moden",
              "summary": "Sejarah penggubalan perlembagaan negara, ciri tradisional (Kesultanan, Agama Islam, Bahasa Melayu, Kedudukan Istimewa Bumiputera) vs ciri moden (Kerajaan Persekutuan, Demokrasi Berparlimen, Kewarganegaraan).",
              "xpReward": 120,
              "badgeReward": "Pakar Perlembagaan SPM",
              "notes": {
                "title": "Bab 2: Ciri Tradisional dan Moden Perlembagaan Malaysia",
                "readTime": "6 minit",
                "dlpAvailable": false,
                "sections": [
                  {
                    "heading": "Perlembagaan Persekutuan Dokumen Tertinggi",
                    "content": "Perlembagaan Persekutuan mengandungi gabungan unsur warisan Kesultanan Melayu dengan institusi moden Barat:",
                    "bulletPoints": [
                      "<strong>Ciri Tradisional:</strong>",
                      "1. Kesultanan atau Pemerintahan Beraja (Yang di-Pertuan Agong & Raja-raja Melayu).",
                      "2. Agama Islam sebagai agama Persekutuan.",
                      "3. Bahasa Melayu sebagai bahasa kebangsaan.",
                      "4. Kedudukan istimewa orang Melayu dan anak negeri Sabah/Sarawak.",
                      "<strong>Ciri Moden:</strong>",
                      "1. Kerajaan Persekutuan (pembahagian kuasa antara Kerajaan Persekutuan dan Kerajaan Negeri).",
                      "2. Sistem Demokrasi Berparlimen (Pilihan Raya umum setiap 5 tahun).",
                      "3. Kewarganegaraan (kewarganegaraan yang sama bagi seluruh rakyat Malaysia)."
                    ],
                    "mnemonic": "💡 <strong>Formula Tradisional:</strong> Raja + Islam + Bahasa Melayu + Hak Istimewa!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f5-sej-c2",
                "title": "Kuiz Ciri Perlembagaan Malaysia SPM",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Antara berikut, yang manakah merupakan ciri tradisional dalam Perlembagaan Persekutuan?",
                    "options": [
                      "Sistem Demokrasi Berparlimen",
                      "Pemerintahan Beraja dan Kedudukan Raja-raja Melayu",
                      "Kewarganegaraan persekutuan",
                      "Pilihan raya umum"
                    ],
                    "correctIndex": 1,
                    "explanation": "Institusi Kesultanan Melayu telah wujud berkurun lamanya dan dikekalkan sebagai ciri tradisional perlembagaan."
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
              "title": "Ubahan (Direct, Inverse & Joint Variation)",
              "summary": "Menguasai konsep ubahan langsung (y ∝ x ⇒ y = kx), ubahan songsang (y ∝ 1/x ⇒ y = k/x), dan ubahan bergabung.",
              "xpReward": 120,
              "badgeReward": "Master Ubahan SPM",
              "notes": {
                "title": "Bab 1: Formula Ubahan Matematik SPM",
                "readTime": "5 minit",
                "dlpAvailable": true,
                "sections": [
                  {
                    "heading": "Tiga Jenis Ubahan Utama",
                    "content": "Ubahan menghubungkan dua atau lebih pemboleh ubah dengan pemalar k (k ≠ 0):",
                    "bulletPoints": [
                      "<strong>1. Ubahan Langsung:</strong> y bertambah apabila x bertambah. Simbol: y ∝ x  →  Persamaan: <strong>y = kx</strong> (Pemalar k = y / x).",
                      "<strong>2. Ubahan Songsang:</strong> y berkurang apabila x bertambah. Simbol: y ∝ 1/x  →  Persamaan: <strong>y = k / x</strong> (Pemalar k = xy).",
                      "<strong>3. Ubahan Bergabung:</strong> Gabungan langsung dan songsang. Cth: y ∝ x / z  →  Persamaan: <strong>y = kx / z</strong>."
                    ],
                    "mnemonic": "💡 <strong>Formula Pemalar k:</strong> Langsung k = y/x; Songsang k = xy!"
                  }
                ]
              },
              "quiz": {
                "id": "quiz-f5-mt-c1",
                "title": "Kuiz Ubahan Langsung & Songsang",
                "timeLimitMinutes": 5,
                "passingScore": 60,
                "xpPoints": 100,
                "questions": [
                  {
                    "id": 1,
                    "question": "Diberi y berubah secara langsung dengan x, dan y = 18 apabila x = 3. Cari nilai y apabila x = 5.",
                    "options": [
                      "25",
                      "30",
                      "36",
                      "45"
                    ],
                    "correctIndex": 1,
                    "explanation": "k = y / x = 18 / 3 = 6. Maka y = 6x = 6(5) = 30."
                  },
                  {
                    "id": 2,
                    "question": "Diberi p berubah secara songsang dengan q, dan p = 4 apabila q = 6. Hitung nilai p apabila q = 8.",
                    "options": [
                      "2",
                      "3",
                      "5",
                      "12"
                    ],
                    "correctIndex": 1,
                    "explanation": "k = p × q = 4 × 6 = 24. Maka p = 24 / q = 24 / 8 = 3."
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
          "chaptersCount": 5,
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
          "chaptersCount": 5,
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
          "chaptersCount": 5,
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
          "chaptersCount": 5,
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
          "chaptersCount": 5,
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
          "chaptersCount": 5,
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
          "chaptersCount": 5,
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
          "chaptersCount": 5,
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
          "chaptersCount": 6,
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
          "chaptersCount": 5,
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
          "chaptersCount": 6,
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
          "chaptersCount": 6,
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
          "chaptersCount": 5,
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
          "chaptersCount": 5,
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
          "chaptersCount": 5,
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
          "chaptersCount": 5,
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
          "chaptersCount": 6,
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
          "chaptersCount": 5,
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
          "chaptersCount": 6,
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
          "chaptersCount": 6,
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
          "chaptersCount": 5,
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
          "chaptersCount": 5,
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
          "chaptersCount": 5,
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
          "chaptersCount": 5,
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
          "chaptersCount": 6,
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
          "chaptersCount": 5,
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
          "chaptersCount": 6,
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
          "chaptersCount": 6,
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
          "chaptersCount": 5,
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
          "chaptersCount": 5,
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
          "chaptersCount": 5,
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
          "chaptersCount": 5,
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
