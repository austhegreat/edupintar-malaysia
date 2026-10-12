/* Curated primary-school learning paths. Lesson aids are original summaries, not
   replacements for the school's current KSSR DSKP or adopted textbook. */
(function () {
  const units = {
    mt: [
      ["Nombor dan nilai tempat", "Membaca, menulis, membanding dan menyusun nombor; nilai digit mengikut kedudukan.", "Number and place value", "Read, write, compare and order numbers; identify digit value by position.", ["wakil nombor dengan objek atau garis nombor", "bandingkan digit pada nilai tempat yang sama"], ["represent numbers with objects or a number line", "compare digits at the same place value"]],
      ["Operasi dan penyelesaian masalah", "Pilih operasi yang sesuai, tunjukkan langkah dan semak jawapan menggunakan operasi songsang.", "Operations and problem solving", "Choose a suitable operation, show the steps and check with the inverse operation.", ["kenal pasti maklumat dan kehendak soalan", "anggar jawapan sebelum mengira"], ["identify the information and what the question asks", "estimate before calculating"]],
      ["Pecahan, wang dan ukuran", "Hubungkan bahagian sama besar dengan pecahan, kemudian gunakan ukuran atau wang dalam situasi harian.", "Fractions, money and measurement", "Connect equal parts to fractions, then use measurement or money in everyday situations.", ["bahagikan bentuk kepada bahagian sama besar", "pilih unit atau nilai wang yang sesuai"], ["divide a shape into equal parts", "choose an appropriate unit or money value"]],
      ["Ruang dan bentuk", "Kenal pasti ciri bentuk 2D dan 3D serta huraikan kedudukan, arah dan sudut.", "Space and shape", "Identify properties of 2D and 3D shapes and describe position, direction and angles.", ["kelaskan bentuk berdasarkan sisi, bucu atau permukaan", "bina dan putarkan model untuk melihat sisi berbeza"], ["sort shapes by sides, vertices or faces", "build and rotate a model to see different views"]],
      ["Data dan perwakilan", "Kumpul, susun dan tafsir data melalui jadual atau graf yang sesuai.", "Data and representation", "Collect, organise and interpret data with a suitable table or graph.", ["tentukan tajuk dan label paksi", "bandingkan kategori dan nyatakan dapatan"], ["choose a title and label the axes", "compare categories and state a finding"]]
    ],
    sn: [
      ["Kemahiran saintifik", "Buat pemerhatian menggunakan deria atau alat, rekod bukti dan bezakan pemerhatian daripada inferens.", "Science skills", "Observe with the senses or tools, record evidence and distinguish an observation from an inference.", ["ubah satu faktor pada satu masa", "catat keputusan dengan unit dan label"], ["change one factor at a time", "record results with units and labels"]],
      ["Hidupan dan habitat", "Bandingkan ciri manusia, haiwan dan tumbuhan; hubungkan keperluan hidup dengan habitat.", "Living things and habitats", "Compare people, animals and plants; relate their needs to their habitats.", ["kelaskan berdasarkan ciri yang boleh diperhatikan", "jejak keperluan air, udara, makanan dan tempat perlindungan"], ["classify using observable features", "track needs for water, air, food and shelter"]],
      ["Bahan, cahaya dan daya", "Siasat sifat bahan serta kesan cahaya, magnet, elektrik atau daya melalui ujian mudah yang selamat.", "Materials, light and forces", "Investigate material properties and the effects of light, magnets, electricity or forces with safe tests.", ["buat ramalan sebelum ujian", "bandingkan keputusan sambil mengawal pemboleh ubah"], ["make a prediction before testing", "compare results while controlling variables"]],
      ["Bumi, alam dan teknologi", "Perhatikan perubahan alam, sumber dan sistem buatan manusia; terangkan hubungan sebab dan kesan.", "Earth, environment and technology", "Observe natural changes, resources and human-made systems; explain cause and effect.", ["gunakan rajah berlabel untuk menunjukkan urutan", "cadangkan tindakan yang mengurangkan pembaziran"], ["use a labelled diagram to show a sequence", "suggest an action that reduces waste"]]
    ],
    bm: [
      ["Mendengar dan bertutur", "Dengar untuk mendapatkan maklumat utama, kemudian jawab dan bertutur dengan sebutan yang jelas serta sopan.", "Listening and speaking", "Listen for key information, then respond and speak clearly and politely.", ["kenal pasti siapa, apa, bila dan di mana", "susun idea sebelum bercakap"], ["identify who, what, when and where", "organise ideas before speaking"]],
      ["Membaca dan memahami", "Baca teks sesuai tahap, cari idea utama dan gunakan petunjuk konteks untuk memahami perkataan.", "Reading and comprehension", "Read an age-appropriate text, find the main idea and use context clues to understand words.", ["bezakan idea utama dengan butiran", "semak jawapan dengan bukti dalam teks"], ["distinguish the main idea from details", "check answers against evidence in the text"]],
      ["Tatabahasa dalam konteks", "Gunakan golongan kata, imbuhan dan tanda baca dalam ayat yang membawa maksud lengkap.", "Grammar in context", "Use word classes, affixes and punctuation in sentences with complete meaning.", ["kenal pasti fungsi perkataan dalam ayat", "baca semula untuk menyemak imbuhan dan tanda baca"], ["identify each word's role in a sentence", "reread to check affixes and punctuation"]],
      ["Menulis untuk tujuan", "Rancang, tulis dan semak teks ringkas dengan susunan idea yang jelas dan kosa kata tepat.", "Writing for a purpose", "Plan, write and review a short text with clear sequencing and accurate vocabulary.", ["gunakan rangka: mula, isi dan penutup", "semak ejaan, huruf besar dan noktah"], ["use a beginning, supporting points and ending", "check spelling, capital letters and full stops"]]
    ],
    bi: [
      ["Listening and speaking", "Listen for key details and respond with clear words, complete phrases and polite turn-taking.", "Listening and speaking", "Listen for key details and respond with clear words, complete phrases and polite turn-taking.", ["listen for names, actions and places", "take turns and ask a relevant question"], ["listen for names, actions and places", "take turns and ask a relevant question"]],
      ["Reading and meaning", "Use pictures, familiar words and sentence clues to understand a short text and find its main idea.", "Reading and meaning", "Use pictures, familiar words and sentence clues to understand a short text and find its main idea.", ["predict from the title or picture", "point to a sentence that supports an answer"], ["predict from the title or picture", "point to a sentence that supports an answer"]],
      ["Words and sentence patterns", "Build accurate sentences with age-appropriate vocabulary, word order, punctuation and grammar.", "Words and sentence patterns", "Build accurate sentences with age-appropriate vocabulary, word order, punctuation and grammar.", ["choose a word that fits the meaning", "check subject, verb and end punctuation"], ["choose a word that fits the meaning", "check subject, verb and end punctuation"]],
      ["Writing and creativity", "Plan and write a short message, description or story, then revise it for clarity.", "Writing and creativity", "Plan and write a short message, description or story, then revise it for clarity.", ["put ideas in a sensible order", "reread and improve one word or sentence"], ["put ideas in a sensible order", "reread and improve one word or sentence"]]
    ],
    sej: [
      ["Sumber dan kaedah sejarah", "Gunakan sumber yang sesuai untuk bertanya soalan tentang masa lalu dan bezakan bukti daripada andaian.", "Historical sources and method", "Use suitable sources to ask about the past and distinguish evidence from assumptions.", ["kenal pasti siapa menghasilkan sumber dan bila", "bandingkan dua sumber sebelum membuat kesimpulan"], ["identify who made a source and when", "compare two sources before drawing a conclusion"]],
      ["Masa, tokoh dan perubahan", "Susun peristiwa pada garis masa dan huraikan peranan tokoh serta perubahan dalam masyarakat.", "Time, people and change", "Place events on a timeline and explain people's roles and changes in society.", ["susun peristiwa mengikut urutan", "sokong penerangan dengan fakta yang dipelajari"], ["order events chronologically", "support an explanation with learned facts"]],
      ["Warisan dan identiti negara", "Teroka warisan, institusi dan peristiwa pembentukan negara dengan menghormati kepelbagaian masyarakat Malaysia.", "Heritage and national identity", "Explore heritage, institutions and nation-building while respecting Malaysia's diverse communities.", ["hubungkan peristiwa dengan kesannya", "bezakan fakta sejarah dengan pendapat"], ["connect an event to its effects", "distinguish historical fact from opinion"]],
      ["Kewarganegaraan dan Malaysia", "Fahami perjalanan menuju kemerdekaan, pembentukan Malaysia dan tanggungjawab warganegara.", "Citizenship and Malaysia", "Understand the path to independence, the formation of Malaysia and citizens' responsibilities.", ["gunakan peta atau garis masa untuk menerangkan urutan", "nyatakan nilai perpaduan dan tanggungjawab bersama"], ["use a map or timeline to explain sequence", "describe shared values of unity and responsibility"]]
    ]
  };

  const titles = {
    mt: [
      ["Nombor hingga 100", "Tambah dan tolak", "Bentuk, ruang dan kedudukan", "Pecahan dan wang", "Masa dan ukuran"],
      ["Nombor hingga 1 000", "Tambah, tolak dan darab", "Pecahan dan perpuluhan", "Wang dan masa", "Bentuk dan ukuran"],
      ["Nombor hingga 10 000", "Operasi dan masalah harian", "Pecahan, perpuluhan dan peratus", "Panjang, jisim dan isi padu", "Ruang dan data"],
      ["Nombor hingga 100 000", "Operasi asas dan anggaran", "Pecahan, perpuluhan dan peratus", "Wang dan ukuran", "Koordinat, bentuk dan data"],
      ["Nombor hingga 1 000 000", "Operasi dan penyelesaian masalah", "Pecahan dan peratus", "Wang, masa dan ukuran", "Ruang, koordinat dan data"],
      ["Nombor bulat dan operasi", "Pecahan, perpuluhan dan peratus", "Wang dan celik kewangan", "Nisbah dan kadar", "Ruang, ukuran dan data"]
    ],
    sn: [
      ["Deria manusia", "Haiwan dan keperluannya", "Tumbuhan dan pertumbuhannya", "Bahan di sekeliling kita"],
      ["Manusia dan deria", "Haiwan: kitar hidup dan keperluan", "Tumbuhan: bahagian dan pertumbuhan", "Cahaya, elektrik dan cuaca"],
      ["Manusia: gigi dan kesihatan", "Haiwan dan perlindungan diri", "Tumbuhan dan pembiakan", "Pengukuran dan sistem suria"],
      ["Manusia: pernafasan dan perkumuhan", "Haiwan dan tumbuhan", "Cahaya, bunyi dan tenaga", "Sifat bahan dan mesin"],
      ["Manusia: sistem tubuh", "Haiwan dan tumbuhan: kemandirian", "Elektrik dan tenaga", "Haba, jirim dan Bumi"],
      ["Mikroorganisma", "Interaksi dan keseimbangan alam", "Daya, gerakan dan kelajuan", "Pemeliharaan makanan dan teknologi"]
    ],
    bm: [
      ["Huruf, suku kata dan perkataan", "Kata nama dan kata kerja", "Ayat mudah", "Bacaan dan cerita"],
      ["Kata nama dan penjodoh bilangan", "Kata kerja dan imbuhan", "Ayat dan tanda baca", "Bacaan serta penulisan ringkas"],
      ["Kata adjektif dan kata sendi", "Imbuhan dan binaan ayat", "Petikan dan maklumat", "Karangan pengalaman"],
      ["Kata nama, kata kerja dan penjodoh bilangan", "Kata hubung dan ayat majmuk", "Membaca untuk memahami", "Ulasan dan karangan"],
      ["Kata hubung dan imbuhan", "Ayat majmuk dan tanda baca", "Membaca dan membuat inferens", "Ringkasan dan penulisan"],
      ["Golongan kata dan binaan ayat", "Imbuhan dan peribahasa", "Rumusan maklumat", "Ulasan dan karangan"]
    ],
    bi: [
      ["Myself and my family", "At school", "Things I like", "Simple sentences"],
      ["Daily routines", "People and places", "Food and health", "Short messages"],
      ["Time and routines", "Animals and nature", "Directions and places", "Descriptions and stories"],
      ["Past events", "People and communities", "Instructions and notices", "Stories and messages"],
      ["Towns and the countryside", "Comparing and describing", "Reading for information", "Reports and reviews"],
      ["Experiences and events", "Plans and possibilities", "Reading for detail", "Reviews and presentations"]
    ],
    sej: [
      ["","","", ""], ["","","", ""], ["","","", ""],
      ["Mengenali sejarah dan sumber", "Zaman prasejarah", "Kerajaan Melayu awal", "Kesultanan Melayu Melaka"],
      ["Institusi raja dan warisan", "Tokoh tempatan", "Kedatangan kuasa luar", "Perjuangan menuju kemerdekaan"],
      ["Kemerdekaan negara", "Pembentukan Malaysia", "Yang di-Pertuan Agong dan pentadbiran", "Identiti dan tanggungjawab negara"]
    ]
  };
  const labels = { mt: ["Matematik", "Mathematics"], sn: ["Sains", "Science"], bm: ["Bahasa Melayu", "Bahasa Melayu"], bi: ["English", "English"], sej: ["Sejarah", "History"] };
  const titleTranslations = {
    mt: [
      ["Numbers to 100", "Addition and subtraction", "Shapes, space and position", "Fractions and money", "Time and measurement"],
      ["Numbers to 1,000", "Addition, subtraction and multiplication", "Fractions and decimals", "Money and time", "Shapes and measurement"],
      ["Numbers to 10,000", "Operations and everyday problems", "Fractions, decimals and percentages", "Length, mass and volume", "Space and data"],
      ["Numbers to 100,000", "Operations and estimation", "Fractions, decimals and percentages", "Money and measurement", "Coordinates, shapes and data"],
      ["Numbers to 1,000,000", "Operations and problem solving", "Fractions and percentages", "Money, time and measurement", "Space, coordinates and data"],
      ["Whole numbers and operations", "Fractions, decimals and percentages", "Money and financial literacy", "Ratio and rate", "Space, measurement and data"]
    ],
    sn: [
      ["Human senses", "Animals and their needs", "Plants and growth", "Materials around us"],
      ["People and senses", "Animals: life cycles and needs", "Plants: parts and growth", "Light, electricity and weather"],
      ["People: teeth and health", "Animals and protection", "Plants and reproduction", "Measurement and the Solar System"],
      ["People: breathing and excretion", "Animals and plants", "Light, sound and energy", "Material properties and machines"],
      ["The human body's systems", "Animal and plant survival", "Electricity and energy", "Heat, matter and Earth"],
      ["Microorganisms", "Interactions and balance in nature", "Force, motion and speed", "Food preservation and technology"]
    ],
    bm: [
      ["Letters, syllables and words", "Nouns and verbs", "Simple sentences", "Reading and stories"],
      ["Nouns and classifiers", "Verbs and affixes", "Sentences and punctuation", "Reading and short writing"],
      ["Adjectives and prepositions", "Affixes and sentence building", "Texts and information", "Personal writing"],
      ["Nouns, verbs and classifiers", "Conjunctions and compound sentences", "Reading for meaning", "Reviews and compositions"],
      ["Conjunctions and affixes", "Compound sentences and punctuation", "Reading and inference", "Summaries and writing"],
      ["Word classes and sentence structures", "Affixes and proverbs", "Summarising information", "Reviews and compositions"]
    ],
    sej: [
      ["","","",""], ["","","",""], ["","","",""],
      ["Discovering history and sources", "Prehistoric times", "Early Malay kingdoms", "The Melaka Sultanate"],
      ["Royal institutions and heritage", "Local figures", "The arrival of foreign powers", "The struggle towards independence"],
      ["National independence", "The formation of Malaysia", "The Yang di-Pertuan Agong and government", "National identity and responsibility"]
    ]
  };

  function buildChapter(level, subjectKey, year, title, index) {
    const pattern = units[subjectKey];
    const topic = title.toLowerCase();
    let lessonIndex = 0;
    if (subjectKey === "mt") lessonIndex = /ruang|bentuk|koordinat|data/.test(topic) ? (/data/.test(topic) ? 4 : 3) : /operasi|tambah|tolak|darab|masalah/.test(topic) ? 1 : /pecahan|wang|masa|ukur|peratus|nisbah|kadar|perpuluhan/.test(topic) ? 2 : 0;
    if (subjectKey === "sn") lessonIndex = /daya|gerakan|kelajuan|cahaya|elektrik|haba|bahan|jirim/.test(topic) ? 2 : /bumi|suria|cuaca|teknologi/.test(topic) ? 3 : /kemahiran|penyiasatan/.test(topic) ? 0 : 1;
    if (subjectKey === "bm" || subjectKey === "bi") lessonIndex = /tutur|listening|speaking/.test(topic) ? 0 : /baca|reading|petikan|maklumat/.test(topic) ? 1 : /kata|tatabahasa|grammar|ayat|punctuation|imbuhan/.test(topic) ? 2 : 3;
    if (subjectKey === "sej") lessonIndex = /sumber|kaedah|mengenali/.test(topic) ? 0 : /zaman|tokoh|masa|perjuangan/.test(topic) ? 1 : /warisan|kesultanan|institusi/.test(topic) ? 2 : 3;
    const lesson = pattern[lessonIndex];
    const chapterId = `${level}-${subjectKey}-c${index + 1}`;
    const isEn = subjectKey === "bi";
    const sections = getSubtopics(subjectKey, title, year);
    const subjectLabel = labels[subjectKey];
    return {
      id: chapterId, number: `Unit ${index + 1}`, numberEn: `Unit ${index + 1}`, title,
      titleEn: titleTranslations[subjectKey]?.[year - 1]?.[index] || title,
      summary: lesson[1], summaryEn: lesson[3],
      xpReward: 80, badgeReward: `${subjectLabel[0]} Tahun ${year}`,
      primaryVisual: subjectKey === "sn" && /daya|gerakan|kelajuan/i.test(title) ? "gravity" : subjectKey === "sn" && /deria|manusia/i.test(title) ? "senses" : subjectKey === "sn" && /haiwan/i.test(title) ? "animals" : subjectKey === "sn" && /tumbuhan/i.test(title) ? "plants" : subjectKey === "mt" && /pecahan|perpuluhan|peratus/i.test(title) ? "fraction3d" : subjectKey === "mt" && /ruang|bentuk|koordinat/i.test(title) ? "geometry3d" : subjectKey === "mt" && /wang|money/i.test(title) ? "money" : subjectKey === "mt" && /masa|ukur|panjang|jisim|isi padu/i.test(title) ? "measure" : subjectKey === "mt" && /data/i.test(title) ? "data" : subjectKey === "mt" ? "number-line" : (subjectKey === "bm" || subjectKey === "bi") ? "word-builder" : subjectKey === "sej" ? "timeline" : "explorer",
      notes: { title, titleEn: title, readTime: "5 minit", dlpAvailable: subjectKey === "mt" || subjectKey === "sn", sections },
      quiz: makeQuiz(chapterId, subjectKey, title, isEn, titleTranslations[subjectKey]?.[year - 1]?.[index] || title)
    };
  }

  function getSubtopics(key, title, year) {
    const t = title.toLowerCase();
    let pair;
    if (key === "mt" && /pecahan|perpuluhan|peratus/.test(t)) pair = [
      ["Bahagian sama besar", "Equal parts", "Bahagikan satu keseluruhan kepada bahagian yang sama saiz. Pembilang menunjukkan bahagian yang dipilih; penyebut menunjukkan jumlah bahagian sama besar.", "Divide one whole into equal-sized parts. The numerator shows the selected parts; the denominator shows the total equal parts.", ["Lukis atau bina model sebelum menulis pecahan.", "Pastikan setiap bahagian mempunyai saiz yang sama."], ["Draw or build a model before writing the fraction.", "Check that every part is the same size."]],
      ["Hubungan antara perwakilan", "Connecting representations", "Gunakan model, perkataan dan simbol untuk menerangkan nilai yang sama. Untuk perpuluhan dan peratus, kaitkan nilai dengan satu keseluruhan atau 100 bahagian.", "Use models, words and symbols to explain equivalent values. For decimals and percentages, relate the value to one whole or 100 parts.", ["Bandingkan model dengan nombor yang ditulis.", "Terangkan maksud pengangka dan penyebut."], ["Compare the model with the written number.", "Explain what the numerator and denominator mean."]]
    ];
    else if (key === "mt" && /wang|money/.test(t)) pair = [
      ["Kenali nilai wang", "Recognising money values", "Kenal pasti nilai setiap syiling atau wang kertas dan susun beberapa nilai untuk menunjukkan jumlah yang sama.", "Identify the value of each coin or note and combine values to show the same total.", ["Kira jumlah secara tertib.", "Gunakan simbol RM dengan nilai ringgit."], ["Count the values in an organised way.", "Use RM for amounts in ringgit."]],
      ["Kira jumlah dan baki", "Calculate totals and change", "Tambah harga untuk mencari jumlah belian. Tolak jumlah itu daripada wang yang diberi untuk mencari baki.", "Add prices to find the total cost. Subtract the total from the amount paid to find the change.", ["Anggarkan jumlah dahulu.", "Semak jawapan dengan operasi songsang."], ["Estimate the total first.", "Check the answer using the inverse operation."]]
    ];
    else if (key === "mt" && /ruang|bentuk|koordinat/.test(t)) pair = [
      ["Ciri dan pengelasan bentuk", "Shape properties and classification", "Bandingkan sisi, bucu dan permukaan untuk menentukan persamaan dan perbezaan antara bentuk.", "Compare sides, vertices and faces to find similarities and differences between shapes.", ["Bezakan bentuk 2D daripada objek 3D.", "Gunakan ciri yang boleh diperhatikan untuk mengelaskan bentuk."], ["Distinguish 2D shapes from 3D objects.", "Classify shapes using observable properties."]],
      ["Kedudukan dan pandangan", "Position and views", "Gunakan istilah kedudukan, arah atau koordinat untuk menerangkan lokasi dan perubahan kedudukan.", "Use position, direction or coordinates to describe a location and how it changes.", ["Tentukan titik rujukan.", "Terangkan arah dengan perkataan atau pasangan koordinat."], ["Choose a reference point.", "Describe direction with words or coordinate pairs."]]
    ];
    else if (key === "mt" && /data/.test(t)) pair = [
      ["Kumpul dan susun data", "Collect and organise data", "Tentukan soalan, kumpulkan jawapan dan susun kategori dalam jadual kekerapan.", "Set a question, collect responses and organise categories in a frequency table.", ["Gunakan kategori yang jelas dan tidak bertindih.", "Semak bilangan data yang direkodkan."], ["Use clear, non-overlapping categories.", "Check the number of recorded items."]],
      ["Baca dan terangkan dapatan", "Read and explain results", "Baca tajuk, label dan skala graf sebelum membandingkan kategori atau menyatakan corak.", "Read the title, labels and scale before comparing categories or describing a pattern.", ["Sokong kesimpulan dengan nilai pada graf.", "Jangan membuat kesimpulan yang tidak ditunjukkan oleh data."], ["Support a conclusion with values from the graph.", "Do not claim a pattern the data does not show."]]
    ];
    else if (key === "mt" && /masa|ukur|panjang|jisim|isi padu/.test(t)) pair = [
      ["Pilih unit dan alat", "Choose a unit and tool", "Pilih alat dan unit yang sesuai dengan objek atau tempoh yang hendak diukur.", "Choose a tool and unit suited to the object or duration being measured.", ["Anggar sebelum mengukur.", "Gunakan unit yang sama ketika membandingkan."], ["Estimate before measuring.", "Use the same unit when comparing."]],
      ["Banding dan selesaikan masalah", "Compare and solve problems", "Susun ukuran, baca maklumat dalam soalan dan tunjukkan pengiraan dengan unit.", "Order measurements, identify the information in a problem and show calculations with units.", ["Tulis unit pada jawapan.", "Semak sama ada jawapan munasabah."], ["Include units in the answer.", "Check that the result is reasonable."]]
    ];
    else if (key === "mt" && /operasi|tambah|tolak|darab/.test(t)) pair = [
      ["Pilih operasi", "Choose an operation", "Kenal pasti kuantiti yang diketahui dan apa yang perlu dicari sebelum memilih operasi.", "Identify the known quantities and what needs to be found before choosing an operation.", ["Lukis model atau tulis ayat matematik.", "Semak nilai tempat ketika mengira."], ["Draw a model or write a number sentence.", "Check place value while calculating."]],
      ["Semak jawapan", "Check the answer", "Anggarkan dahulu, kira dengan teratur dan gunakan operasi songsang untuk menyemak.", "Estimate first, calculate in an organised way and use the inverse operation to check.", ["Tunjukkan langkah pengiraan.", "Pastikan jawapan sepadan dengan soalan."], ["Show the calculation steps.", "Make sure the answer matches the question."]]
    ];
    else if (key === "mt") pair = [
      ["Baca dan wakil nombor", "Read and represent numbers", "Gunakan angka, perkataan, objek atau garis nombor untuk mewakili nilai dalam tajuk ini.", "Use numerals, words, objects or a number line to represent values in this topic.", ["Baca nilai mengikut tertib.", "Gunakan nilai tempat untuk menghuraikan nombor."], ["Read values in order.", "Use place value to describe a number."]],
      ["Banding dan susun", "Compare and order", "Bandingkan nilai dari digit atau tanda yang berkaitan, kemudian susun mengikut kehendak soalan.", "Compare values using the relevant digits or symbols, then order them as the task asks.", ["Gunakan <, > atau = apabila sesuai.", "Semak semula susunan dari kiri ke kanan."], ["Use <, > or = where appropriate.", "Recheck the order from left to right."]]
    ];
    else if (key === "sn" && /daya|gerakan|kelajuan/.test(t)) pair = [
      ["Daya graviti dan jatuh bebas", "Gravity and falling objects", "Graviti menarik objek ke arah Bumi. Apabila rintangan udara diabaikan, objek yang jatuh memecut ke bawah.", "Gravity pulls objects towards Earth. When air resistance is ignored, a falling object accelerates downwards.", ["Ubah nilai graviti dalam simulasi dan perhatikan gerakan.", "Model ini menunjukkan kesan graviti, bukan semua keadaan dunia sebenar."], ["Change the gravity setting and observe the motion.", "This model shows gravity's effect, not every real-world condition."]],
      ["Bandingkan gerakan", "Compare motion", "Kelajuan menerangkan jarak yang dilalui dalam suatu masa. Bandingkan gerakan dengan unit yang sama.", "Speed describes distance travelled in a given time. Compare motion using consistent units.", ["Rekod jarak dan masa.", "Terangkan sama ada objek bergerak lebih laju atau perlahan."], ["Record distance and time.", "Describe whether an object moves faster or slower."]]
    ];
    else if (key === "sn" && /manusia|deria|gigi|pernafasan|perkumuhan|sistem tubuh/.test(t)) pair = [
      ["Kenal pasti bahagian dan fungsi", "Identify parts and functions", "Kenal pasti bahagian tubuh yang terlibat dan terangkan fungsi asasnya dalam tajuk ini.", "Identify the body parts involved and explain their basic role in this topic.", ["Gunakan rajah berlabel.", "Hubungkan struktur dengan fungsi, bukan nama sahaja."], ["Use a labelled diagram.", "Connect each structure to its function, not just its name."]],
      ["Amalan yang menyokong kesihatan", "Practices that support health", "Hubungkan pengetahuan tentang tubuh dengan amalan kebersihan, keselamatan dan penjagaan diri yang sesuai.", "Connect what you know about the body to suitable hygiene, safety and self-care practices.", ["Pilih amalan yang boleh dilakukan setiap hari.", "Terangkan sebab amalan itu membantu."], ["Choose a practice that can be done every day.", "Explain why it helps."]]
    ];
    else if (key === "sn" && /tumbuhan|plant/.test(t)) pair = [
      ["Bahagian dan keperluan tumbuhan", "Plant parts and needs", "Perhatikan akar, batang dan daun. Terangkan bagaimana ciri yang dilihat membantu tumbuhan hidup.", "Observe roots, stems and leaves. Explain how their features help a plant live.", ["Lukis dan label bahagian yang diperhatikan.", "Bandingkan keperluan tumbuhan dengan haiwan."], ["Draw and label the parts you observe.", "Compare a plant's needs with an animal's."]],
      ["Pertumbuhan dan pembiakan", "Growth and reproduction", "Susun peringkat pertumbuhan atau pembiakan yang dipelajari dan kenal pasti keperluan pada setiap peringkat.", "Sequence the growth or reproduction stages you have studied and identify needs at each stage.", ["Gunakan gambar bersiri atau garis masa.", "Catat perubahan yang boleh diperhatikan."], ["Use a picture sequence or timeline.", "Record observable changes."]]
    ];
    else if (key === "sn" && /haiwan|animal/.test(t)) pair = [
      ["Ciri dan pengelasan haiwan", "Animal features and classification", "Kelaskan haiwan berdasarkan ciri yang dapat diperhatikan dan gunakan contoh untuk menerangkan pilihan.", "Classify animals using observable features and use examples to explain your choice.", ["Catat ciri sebelum mengelaskan.", "Jangan membuat kesimpulan daripada satu ciri sahaja."], ["Record features before classifying.", "Avoid conclusions based on only one feature."]],
      ["Keperluan dan kemandirian", "Needs and survival", "Hubungkan struktur atau tingkah laku haiwan dengan keperluan hidup dan cara ia menyesuaikan diri.", "Relate an animal's structure or behaviour to its needs and ways of adapting.", ["Bandingkan dua haiwan daripada habitat berbeza.", "Sokong penerangan dengan ciri yang diperhatikan."], ["Compare two animals from different habitats.", "Support your explanation with observed features."]]
    ];
    else if (key === "sn" && /cahaya|elektrik|haba|bahan|jirim|mesin/.test(t)) pair = [
      ["Sifat dan pemerhatian", "Properties and observations", "Buat pemerhatian yang boleh diulang dan catat sifat bahan atau fenomena yang dikaji.", "Make repeatable observations and record the properties of the material or phenomenon being studied.", ["Gunakan alat dengan selamat.", "Bezakan pemerhatian daripada tekaan."], ["Use equipment safely.", "Separate observations from guesses."]],
      ["Uji satu perubahan", "Test one change", "Rancang ujian yang mengubah satu faktor, kemudian bandingkan hasil dengan ramalan.", "Plan a test that changes one factor, then compare the result with the prediction.", ["Kekalkan keadaan lain.", "Ulang ujian jika perlu."], ["Keep other conditions the same.", "Repeat the test if needed."]]
    ];
    else if (key === "sn") pair = [
      ["Pemerhatian dan inferens", "Observations and inferences", "Nyatakan apa yang dapat diperhatikan secara terus, kemudian bezakan daripada penjelasan yang dibuat berdasarkan bukti.", "State what can be observed directly, then distinguish it from an explanation based on evidence.", ["Catat ciri, perubahan atau bacaan alat.", "Tandakan inferens sebagai penjelasan, bukan pemerhatian."], ["Record features, changes or instrument readings.", "Treat an inference as an explanation, not an observation."]],
      ["Penyiasatan yang adil", "A fair investigation", "Buat ramalan, ubah satu faktor, rekod hasil dan buat kesimpulan yang disokong oleh data.", "Make a prediction, change one factor, record results and draw a conclusion supported by data.", ["Gunakan alat dan bahan dengan selamat.", "Sertakan unit pada ukuran."], ["Use equipment and materials safely.", "Include units with measurements."]]
    ];
    else if (key === "bm") pair = /kata|tatabahasa|imbuhan|ayat/.test(t) ? [
      ["Kenal pasti golongan kata", "Identify word classes", "Perhatikan fungsi perkataan dalam ayat. Kata nama menamakan orang, tempat atau benda; kata kerja menyatakan perbuatan.", "Look at each word's role in a sentence. Nouns name people, places or things; verbs show actions.", ["Baca perkataan bersama ayat penuh.", "Tanya siapa atau apa melakukan perbuatan."], ["Read the word in the full sentence.", "Ask who or what performs the action."]],
      ["Bina ayat yang gramatis", "Build a grammatical sentence", "Susun perkataan supaya maksud lengkap. Semak imbuhan, huruf besar dan tanda baca.", "Arrange words to express a complete idea. Check affixes, capital letters and punctuation.", ["Baca ayat dengan suara perlahan.", "Pastikan tanda noktah atau tanda soal sesuai."], ["Read the sentence aloud quietly.", "Check that the full stop or question mark fits."]]
    ] : /baca|petikan|maklumat/.test(t) ? [
      ["Cari idea utama", "Find the main idea", "Kenal pasti perkara utama yang diterangkan dalam petikan dan bezakannya daripada contoh atau butiran.", "Identify the main point of the passage and distinguish it from examples or details.", ["Baca tajuk dan ayat pertama.", "Rujuk bukti dalam petikan sebelum menjawab."], ["Read the title and opening sentence.", "Check the passage for evidence before answering."]],
      ["Fahami perkataan melalui konteks", "Use context to understand words", "Gunakan ayat di sekeliling perkataan dan pengetahuan sedia ada untuk membina makna yang munasabah.", "Use nearby sentences and what you already know to work out a sensible meaning.", ["Cari petunjuk yang diulang.", "Semak makna dengan membaca semula ayat."], ["Look for repeated clues.", "Check the meaning by rereading the sentence."]]
    ] : [
      ["Rancang idea", "Plan ideas", "Tentukan tujuan penulisan dan susun idea mengikut urutan yang membantu pembaca memahami mesej.", "Decide the purpose of the writing and order ideas so the reader can follow the message.", ["Catat isi sebelum menulis.", "Gunakan pembukaan, isi dan penutup yang sesuai."], ["Note key points before writing.", "Use a suitable opening, supporting points and ending."]],
      ["Semak dan perbaik", "Review and improve", "Baca semula untuk membetulkan ejaan, pilihan kata, imbuhan dan tanda baca.", "Reread to correct spelling, word choice, affixes and punctuation.", ["Semak satu perkara pada satu masa.", "Pastikan setiap ayat menyampaikan maksud."], ["Check one feature at a time.", "Make sure each sentence communicates its meaning."]]
    ];
    else if (key === "bi") pair = /past|emergency|events/.test(t) ? [
      ["Talk about a past event", "Talk about a past event", "Use the past simple for a finished action. Regular verbs often take -ed; some common verbs change form.", "Use the past simple for a finished action. Regular verbs often take -ed; some common verbs change form.", ["Yesterday, I played football.", "Go becomes went; see becomes saw."], ["Yesterday, I played football.", "Go becomes went; see becomes saw."]],
      ["Build and check a sentence", "Build and check a sentence", "Place the subject before the verb, then add details that make the meaning clear.", "Place the subject before the verb, then add details that make the meaning clear.", ["Use a capital letter at the start.", "Read the sentence again for word order."], ["Use a capital letter at the start.", "Read the sentence again for word order."]]
    ] : [
      ["Build useful vocabulary", "Build useful vocabulary", "Group words by topic and use picture, sound or sentence clues to remember their meaning.", "Group words by topic and use picture, sound or sentence clues to remember their meaning.", ["Say a new word in a complete phrase.", "Connect the word to a picture or action."], ["Say a new word in a complete phrase.", "Connect the word to a picture or action."]],
      ["Use words in context", "Use words in context", "Choose words that fit the situation and arrange them in a complete sentence.", "Choose words that fit the situation and arrange them in a complete sentence.", ["Check the subject and verb.", "Use a full stop or question mark."], ["Check the subject and verb.", "Use a full stop or question mark."]]
    ];
    else if (key === "sej") pair = /sumber|mengenali/.test(t) ? [
      ["Kenal pasti sumber sejarah", "Identify a historical source", "Periksa jenis sumber, siapa yang menghasilkannya dan masa sumber itu dibuat sebelum menilai maklumatnya.", "Check the source type, who created it and when it was made before evaluating its information.", ["Bezakan sumber primer dengan sumber sekunder.", "Perhatikan tujuan dan konteks sumber."], ["Distinguish primary from secondary sources.", "Consider a source's purpose and context."]],
      ["Bina jawapan berdasarkan bukti", "Build an evidence-based answer", "Pilih butiran yang berkaitan daripada sumber dan gunakan butiran itu untuk menyokong penerangan.", "Select relevant details from a source and use them to support an explanation.", ["Jangan anggap andaian sebagai fakta.", "Semak sama ada bukti menjawab soalan."], ["Do not treat an assumption as a fact.", "Check that the evidence answers the question."]]
    ] : [
      ["Susun masa dan peristiwa", "Order time and events", "Gunakan urutan masa untuk menunjukkan apa yang berlaku dahulu dan kemudian dalam topik ini.", "Use chronological order to show what happened first and what followed in this topic.", ["Bina garis masa ringkas.", "Semak arah urutan sebelum menerangkan perubahan."], ["Build a simple timeline.", "Check the sequence before explaining change."]],
      ["Terangkan kepentingan", "Explain significance", "Hubungkan tokoh, institusi atau peristiwa dengan kesannya terhadap masyarakat dan negara.", "Relate a person, institution or event to its effects on society and the country.", ["Gunakan fakta yang dipelajari.", "Nyatakan sebab dan kesan dengan jelas."], ["Use facts from the lesson.", "State causes and effects clearly."]]
    ];
    return pair.map(item => ({ heading: item[0], headingEn: item[1], content: item[2], contentEn: item[3], bulletPoints: item[4], bulletPointsEn: item[5] }));
  }

  function makeQuiz(id, subjectKey, title, isEn, titleEn) {
    let q;
    const t = title.toLowerCase();
    if (subjectKey === "mt" && /pecahan|fraction/.test(t)) q = [isEn ? "Two of four equal parts are shaded. Which fraction is shaded?" : "Dua daripada empat bahagian sama besar berlorek. Apakah pecahan yang berlorek?", ["1/4", "2/4", "3/4", "4/2"], 1, isEn ? "The numerator is 2 selected parts and the denominator is 4 equal parts." : "Pembilang ialah 2 bahagian dipilih dan penyebut ialah 4 bahagian sama besar."];
    else if (subjectKey === "mt" && /bentuk|shape|ruang/.test(t)) q = [isEn ? "How many flat faces does a cube have?" : "Berapakah bilangan permukaan rata pada sebuah kubus?", ["4", "5", "6", "8"], 2, isEn ? "A cube has six equal square faces." : "Kubus mempunyai enam permukaan segi empat sama yang sama." ];
    else if (subjectKey === "mt" && /wang|money/.test(t)) q = [isEn ? "You have RM2 and receive RM3 more. How much do you have?" : "Anda mempunyai RM2 dan menerima RM3 lagi. Berapakah jumlah wang anda?", ["RM1", "RM4", "RM5", "RM6"], 2, isEn ? "RM2 + RM3 = RM5." : "RM2 + RM3 = RM5."];
    else if (subjectKey === "mt" && /operasi|tambah|tolak|darab/.test(t)) q = [isEn ? "What is 24 + 13?" : "Berapakah 24 + 13?", ["27", "37", "38", "47"], 1, isEn ? "Add tens and ones: 20 + 10 = 30 and 4 + 3 = 7; the total is 37." : "Tambah puluh dan sa: 20 + 10 = 30 dan 4 + 3 = 7; jumlahnya 37."];
    else if (subjectKey === "mt" && /data/.test(t)) q = ["Jadual menunjukkan 6 murid memilih bola sepak dan 4 memilih badminton. Berapa murid yang menjawab?", ["2", "6", "10", "24"], 2, "Jumlah murid ialah 6 + 4 = 10."];
    else if (subjectKey === "mt" && /nombor|numbers/.test(t)) q = ["Apakah nilai digit 4 dalam nombor 47?", ["4", "7", "40", "47"], 2, "Digit 4 berada pada nilai tempat puluh, jadi nilainya ialah 40."];
    else if (subjectKey === "mt" && /nisbah|kadar|ratio/.test(t)) q = ["Nisbah guli merah kepada biru ialah 2:3. Nisbah manakah yang setara?", ["4:6", "3:4", "2:6", "6:4"], 0, "Darab kedua-dua bahagian nisbah 2:3 dengan 2 untuk mendapat 4:6."];
    else if (subjectKey === "mt" && /koordinat/.test(t)) q = ["Bagi titik (3, 2), apakah koordinat-x?", ["2", "3", "5", "6"], 1, "Koordinat-x ialah nombor pertama dalam pasangan tertib."];
    else if (subjectKey === "mt" && /masa|time/.test(t)) q = ["Jarum minit bergerak satu pusingan penuh. Berapa minit berlalu?", ["15", "30", "45", "60"], 3, "Satu pusingan penuh jarum minit bersamaan 60 minit."];
    else if (subjectKey === "mt" && /ukur|panjang|jisim|isi padu/.test(t)) q = ["Alat manakah paling sesuai untuk mengukur panjang meja?", ["Pembaris meter", "Jam", "Termometer", "Penimbang"], 0, "Pembaris meter sesuai untuk mengukur panjang meja."];
    else if (subjectKey === "sn" && /daya|gerakan|kelajuan/.test(t)) q = [isEn ? "What happens to a falling object's speed as gravity pulls it down?" : "Apakah yang berlaku kepada kelajuan objek jatuh apabila graviti menariknya ke bawah?", [isEn ? "It increases (ignoring air resistance)" : "Bertambah (jika rintangan udara diabaikan)", isEn ? "It always becomes zero" : "Sentiasa menjadi sifar", isEn ? "It changes into mass" : "Berubah menjadi jisim", isEn ? "It moves upward" : "Bergerak ke atas"], 0, isEn ? "Gravity accelerates a falling object; air resistance is omitted in this model." : "Graviti memecutkan objek yang jatuh; rintangan udara diabaikan dalam model ini."];
    else if (subjectKey === "sn" && /deria|manusia/.test(t)) q = [isEn ? "Which sense organ is used for sight?" : "Organ deria manakah digunakan untuk melihat?", [isEn ? "Ear" : "Telinga", isEn ? "Eye" : "Mata", isEn ? "Nose" : "Hidung", isEn ? "Skin" : "Kulit"], 1, isEn ? "The eyes detect light and allow us to see." : "Mata mengesan cahaya dan membolehkan kita melihat."];
    else if (subjectKey === "sn" && /tumbuhan|plants/.test(t)) q = ["Apakah yang diperlukan kebanyakan tumbuhan hijau untuk membuat makanan?", ["Cahaya matahari", "Bunyi kuat", "Pasir sahaja", "Kegelapan sepanjang masa"], 0, "Tumbuhan hijau menggunakan cahaya dalam proses membuat makanan."];
    else if (subjectKey === "sn" && /haiwan|animals/.test(t)) q = ["Apakah bukti yang sesuai untuk mengelaskan haiwan?", ["Ciri tubuh yang diperhatikan", "Warna kegemaran kita", "Nama pemiliknya", "Tempat kita melihatnya sekali"], 0, "Pengelasan perlu berdasarkan ciri haiwan yang boleh diperhatikan."];
    else if (subjectKey === "bm" && /kata|tatabahasa|imbuhan|ayat/.test(t)) q = ["Dalam ayat ‘Ibu membaca buku’, yang manakah kata kerja?", ["Ibu", "membaca", "buku", "ayat"], 1, "‘Membaca’ menerangkan perbuatan yang dilakukan oleh ibu."];
    else if (subjectKey === "bm" && /baca|petikan|maklumat/.test(t)) q = ["Apakah cara terbaik untuk mencari jawapan dalam petikan?", ["Cari bukti dalam teks", "Teka tanpa membaca", "Pilih ayat paling panjang", "Abaikan tajuk"], 0, "Jawapan pemahaman perlu disokong oleh maklumat dalam petikan."];
    else if (subjectKey === "bm") q = ["Apakah yang wajar disemak selepas menulis ayat?", ["Ejaan dan tanda baca", "Warna kertas sahaja", "Bilangan gambar", "Nama penulis lain"], 0, "Semakan ejaan dan tanda baca membantu menjadikan ayat mudah difahami."];
    else if (subjectKey === "bi" && /past|emergency|events/.test(t)) q = ["Yesterday, Ali ___ football after school.", ["play", "plays", "played", "playing"], 2, "‘Yesterday’ signals a completed past action; the past form of ‘play’ is ‘played’."];
    else if (subjectKey === "bi") q = ["Choose the complete sentence.", ["The bird can fly.", "Bird the fly can.", "Can bird the fly.", "The can bird fly."], 0, "A clear sentence follows a sensible word order: subject, verb and the rest of the idea."];
    else if (subjectKey === "sej") q = [isEn ? "Which is the strongest starting point for a historical explanation?" : "Apakah titik mula yang paling kukuh untuk huraian sejarah?", isEn ? ["A source or evidence", "A guess with no evidence", "A rumour", "An unrelated opinion"] : ["Sumber atau bukti", "Teka-teki tanpa bukti", "Khabar angin", "Pendapat yang tidak berkaitan"], 0, isEn ? "Historical explanations should be supported by relevant sources and evidence." : "Huraian sejarah perlu disokong oleh sumber dan bukti yang berkaitan."];
    else q = [isEn ? "Which is a fair way to carry out a simple investigation?" : "Apakah cara yang adil untuk menjalankan penyiasatan mudah?", isEn ? ["Change one factor and record the result", "Change everything at once", "Skip recording results", "Choose a result before testing"] : ["Ubah satu faktor dan catat hasilnya", "Ubah semuanya serentak", "Jangan catat hasil", "Pilih hasil sebelum menguji"], 0, isEn ? "Changing one factor and recording the result makes a comparison clearer." : "Mengubah satu faktor dan mencatat hasil menjadikan perbandingan lebih jelas."];
    let questionEn = q[0], optionsEn = q[1], explanationEn = q[3];
    if (subjectKey === "mt" && /pecahan/.test(t)) { questionEn = "Two of four equal parts are shaded. Which fraction is shaded?"; explanationEn = "The numerator is 2 selected parts and the denominator is 4 equal parts."; }
    else if (subjectKey === "mt" && /bentuk|ruang/.test(t)) { questionEn = "How many flat faces does a cube have?"; explanationEn = "A cube has six equal square faces."; }
    else if (subjectKey === "mt" && /wang/.test(t)) { questionEn = "You have RM2 and receive RM3 more. How much do you have?"; explanationEn = "RM2 + RM3 = RM5."; }
    else if (subjectKey === "mt" && /operasi|tambah|tolak|darab/.test(t)) { questionEn = "What is 24 + 13?"; explanationEn = "20 + 10 = 30 and 4 + 3 = 7, so the total is 37."; }
    else if (subjectKey === "mt" && /nombor|numbers/.test(t)) { questionEn = "What is the value of the digit 4 in 47?"; explanationEn = "The digit 4 is in the tens place, so its value is 40."; }
    else if (subjectKey === "mt" && /nisbah|kadar|ratio/.test(t)) { questionEn = "The ratio of red marbles to blue marbles is 2:3. Which ratio is equivalent?"; explanationEn = "Multiply both parts of 2:3 by 2 to get 4:6."; }
    else if (subjectKey === "mt" && /koordinat/.test(t)) { questionEn = "For the point (3, 2), what is the x-coordinate?"; explanationEn = "The x-coordinate is the first number in an ordered pair."; }
    else if (subjectKey === "mt" && /masa|time/.test(t)) { questionEn = "The minute hand makes one full turn. How many minutes have passed?"; explanationEn = "One full turn of the minute hand equals 60 minutes."; }
    else if (subjectKey === "mt" && /ukur|panjang|jisim|isi padu/.test(t)) { questionEn = "Which tool is best for measuring the length of a table?"; optionsEn = ["Metre ruler", "Clock", "Thermometer", "Scale"]; explanationEn = "A metre ruler is suitable for measuring the length of a table."; }
    else if (subjectKey === "mt" && /data/.test(t)) { questionEn = "Six learners chose football and four chose badminton. How many learners answered?"; explanationEn = "There are 6 + 4 = 10 learners in total."; }
    else if (subjectKey === "sn" && /daya|gerakan|kelajuan/.test(t)) { questionEn = "What happens to a falling object's speed as gravity pulls it down?"; optionsEn = ["It increases (ignoring air resistance)", "It always becomes zero", "It changes into mass", "It moves upward"]; explanationEn = "Gravity accelerates a falling object; this model ignores air resistance."; }
    else if (subjectKey === "sn" && /deria|manusia/.test(t)) { questionEn = "Which sense organ is used for sight?"; optionsEn = ["Ear", "Eye", "Nose", "Skin"]; explanationEn = "The eyes detect light and allow us to see."; }
    else if (subjectKey === "sn" && /tumbuhan|plants/.test(t)) { questionEn = "What do most green plants need to make food?"; optionsEn = ["Sunlight", "Loud sound", "Sand only", "Darkness all the time"]; explanationEn = "Green plants use light in the process of making food."; }
    else if (subjectKey === "sn" && /haiwan|animals/.test(t)) { questionEn = "What is suitable evidence for classifying an animal?"; optionsEn = ["An observed body feature", "Our favourite colour", "Its owner's name", "One place where it was seen"]; explanationEn = "Classification should be based on observable animal features."; }
    else if (subjectKey === "sn") { questionEn = "Which is a fair way to carry out a simple investigation?"; optionsEn = ["Change one factor and record the result", "Change everything at once", "Skip recording results", "Choose a result before testing"]; explanationEn = "Changing one factor and recording the result makes a comparison clearer."; }
    else if (subjectKey === "bm" && /kata|tatabahasa|imbuhan|ayat/.test(t)) { questionEn = "In ‘Mother reads a book’, which word is the verb?"; optionsEn = ["Mother", "reads", "book", "sentence"]; explanationEn = "‘Reads’ names the action performed by the mother."; }
    else if (subjectKey === "bm" && /baca|petikan|maklumat/.test(t)) { questionEn = "What is the best way to find an answer in a passage?"; optionsEn = ["Find evidence in the text", "Guess without reading", "Choose the longest sentence", "Ignore the title"]; explanationEn = "A comprehension answer should be supported by information in the passage."; }
    else if (subjectKey === "bm") { questionEn = "What should you check after writing a sentence?"; optionsEn = ["Spelling and punctuation", "Paper colour only", "The number of pictures", "Another writer's name"]; explanationEn = "Checking spelling and punctuation helps make a sentence clear."; }
    else if (subjectKey === "bi" && /past|emergency|events/.test(t)) { questionEn = "Yesterday, Ali ___ football after school."; optionsEn = ["play", "plays", "played", "playing"]; explanationEn = "‘Yesterday’ signals a completed past action; the past form of ‘play’ is ‘played’."; }
    else if (subjectKey === "sej") { questionEn = "Which is the strongest starting point for a historical explanation?"; optionsEn = ["A source or evidence", "A guess with no evidence", "A rumour", "An unrelated opinion"]; explanationEn = "Historical explanations should use relevant sources and evidence."; }
    else if (!isEn) { questionEn = "Which is a fair way to carry out a simple investigation?"; optionsEn = ["Change one factor and record the result", "Change everything at once", "Skip recording results", "Choose a result before testing"]; explanationEn = "A fair test changes one factor and records the evidence."; }
    return { id: `quiz-${id}`, title: `Semak kefahaman: ${title}`, titleEn: `Check your understanding: ${titleEn}`, timeLimitMinutes: 5, passingScore: 60, xpPoints: 40, questions: [{ id: 1, question: q[0], questionEn, options: q[1], optionsEn, correctIndex: q[2], explanation: q[3], explanationEn }] };
  }

  for (let year = 1; year <= 6; year++) {
      const gradeId = `t${year}`;
      const grade = SYLLABUS_DATA.primary.grades.find(item => item.id === gradeId);
      if (grade) grade.nameEn = `Year ${year}`;
    const subjects = SYLLABUS_DATA.primary.subjects[gradeId] || [];
    for (const key of ["mt", "sn", "bm", "bi", ...(year >= 4 ? ["sej"] : [])]) {
      const subject = subjects.find(s => key === "sn" ? new RegExp(`^${gradeId}-(sn|sains)`).test(s.id) : s.id.startsWith(`${gradeId}-${key}`));
      if (!subject) continue;
      const titlesForYear = titles[key][year - 1].filter(Boolean);
      subject.chapters = titlesForYear.map((title, i) => {
        const chapter = buildChapter(gradeId, key, year, title, i);
        chapter.titleEn = titleTranslations[key]?.[year - 1]?.[i] || title;
        chapter.notes.titleEn = chapter.titleEn;
        return chapter;
      });
      subject.nameEn = labels[key][1];
      subject.chaptersCount = subject.chapters.length;
      subject.description = `${subject.name} · Tahun ${year}: ${subject.chapters.map(ch => ch.title).join(" · ")}.`;
      subject.descriptionEn = `${subject.nameEn} · Year ${year}: ${subject.chapters.map(ch => ch.titleEn).join(" · ")}.`;
    }
  }
  // Never show fabricated placeholder chapters elsewhere in the learning map.
  for (const level of Object.values(SYLLABUS_DATA)) {
    for (const subjectList of Object.values(level.subjects || {})) {
      for (const subject of subjectList) {
        subject.chapters = (subject.chapters || []).filter(chapter => {
          const content = JSON.stringify(chapter);
          return !/Aplikasi Pembelajaran Lanjutan|Advanced Learning Module Unit|Konsep standard bagi sukatan pelajaran rasmi KPM|most important concept learned in Chapter/i.test(content);
        });
        subject.chaptersCount = subject.chapters.length;
      }
    }
  }
  window.EDUPINTAR_PRIMARY_CURRICULUM = { units, titles };
})();
