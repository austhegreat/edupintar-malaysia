/* Curated lower-secondary Mathematics chapter map and lesson notes.
 * Chapter order follows the KSSM Mathematics Form 1 textbook outline.
 * Bilingual DLP translations and graded quizzes are added only after review.
 */
(function () {
  const lessons = [
    ["Nombor Nisbah", "Integer, pecahan dan perpuluhan positif serta negatif.", [
      ["Integer", "Integer merangkumi nombor negatif, sifar dan nombor positif. Pada garis nombor, nilai bertambah apabila bergerak ke kanan.", ["Nombor di kanan lebih besar.", "Nilai mutlak ialah jarak nombor daripada sifar."]],
      ["Operasi integer", "Untuk tambah atau tolak, gunakan garis nombor atau peraturan tanda. Pendaraban dan pembahagian dua nombor berlainan tanda menghasilkan nilai negatif.", ["Tanda sama: hasil darab positif.", "Tanda berbeza: hasil darab negatif."]],
      ["Nombor nisbah", "Nombor nisbah boleh ditulis sebagai a/b dengan a dan b integer serta b bukan sifar. Pecahan, perpuluhan tamat dan perpuluhan berulang ialah nombor nisbah.", ["Ringkaskan pecahan menggunakan faktor sepunya terbesar.", "Samakan penyebut sebelum tambah atau tolak pecahan."]]
    ]],
    ["Faktor dan Gandaan", "Faktor, gandaan, nombor perdana, faktor sepunya dan gandaan sepunya.", [
      ["Faktor dan gandaan", "Faktor membahagi nombor tanpa baki. Gandaan diperoleh dengan mendarab nombor dengan integer positif.", ["Faktor bagi 12: 1, 2, 3, 4, 6, 12.", "Gandaan 4: 4, 8, 12, 16, …"]],
      ["Nombor perdana", "Nombor perdana mempunyai tepat dua faktor positif: 1 dan dirinya sendiri. Nombor 1 bukan nombor perdana.", ["2 ialah satu-satunya nombor perdana genap.", "Faktorisasi perdana menulis nombor sebagai hasil darab nombor perdana."]],
      ["FSTB dan GSTK", "FSTB ialah faktor sepunya terbesar. GSTK ialah gandaan sepunya terkecil. Faktorisasi perdana membantu mencari kedua-duanya.", ["FSTB menggunakan kuasa faktor perdana yang lebih kecil.", "GSTK menggunakan kuasa faktor perdana yang lebih besar."]]
    ]],
    ["Kuasa Dua, Punca Kuasa Dua, Kuasa Tiga dan Punca Kuasa Tiga", "Kuasa dan punca bagi kuasa dua serta kuasa tiga nombor rasional.", [
      ["Kuasa dua dan punca kuasa dua", "Kuasa dua nombor n ialah n × n. Punca kuasa dua utama ialah nombor tidak negatif yang kuasa duanya menghasilkan nombor asal.", ["7² = 49, maka √49 = 7.", "Kuasa dua sempurna mempunyai punca kuasa dua integer."]],
      ["Kuasa tiga dan punca kuasa tiga", "Kuasa tiga n ialah n × n × n. Punca kuasa tiga boleh positif atau negatif kerana kuasa tiga mengekalkan tanda.", ["3³ = 27 dan ∛27 = 3.", "(-2)³ = -8 dan ∛(-8) = -2."]],
      ["Anggaran punca", "Jika nombor bukan kuasa sempurna, kenal pasti dua kuasa sempurna yang mengapitnya untuk membuat anggaran.", ["√30 terletak antara √25 = 5 dengan √36 = 6.", "Semak anggaran dengan mengkuasa duakannya."]]
    ]],
    ["Nisbah, Kadar dan Kadaran", "Perbandingan kuantiti, kadar per unit dan hubungan berkadar.", [
      ["Nisbah", "Nisbah membandingkan kuantiti dalam unit yang sama. Ringkaskan nisbah dengan membahagi setiap sebutan menggunakan faktor sepunya.", ["Pastikan unit sama sebelum membandingkan.", "a:b boleh ditulis sebagai a/b."]],
      ["Kadar", "Kadar membandingkan kuantiti dengan unit berlainan. Kadar per unit menyatakan kuantiti bagi satu unit.", ["Contoh: 180 km dalam 3 jam = 60 km/j.", "Nyatakan unit pada jawapan."]],
      ["Kadaran", "Dua kuantiti berkadar terus apabila nisbahnya tetap. Gunakan nilai sepadan untuk mencari kuantiti yang belum diketahui.", ["Jika y berkadar terus dengan x, y = kx.", "Uji sama ada nisbah y/x kekal."]]
    ]],
    ["Ungkapan Algebra", "Pemboleh ubah, sebutan, pekali, pemudahan dan pengembangan ungkapan.", [
      ["Bahasa algebra", "Huruf mewakili nilai yang belum diketahui atau boleh berubah. Pekali ialah nombor yang mendarab pemboleh ubah.", ["Dalam 5x, pekali x ialah 5.", "Sebutan sejenis mempunyai pemboleh ubah dan kuasa yang sama."]],
      ["Memudahkan ungkapan", "Gabungkan sebutan sejenis dengan menambah atau menolak pekalinya. Sebutan berlainan jenis kekal berasingan.", ["3a + 2a = 5a.", "3a + 2b tidak boleh digabungkan."]],
      ["Pengembangan", "Gunakan hukum pengagihan: darabkan faktor di luar kurungan dengan setiap sebutan di dalam kurungan.", ["3(x + 4) = 3x + 12.", "Semak dengan menggantikan nilai mudah bagi x."]]
    ]],
    ["Persamaan Linear", "Persamaan satu pemboleh ubah dan penyelesaian menggunakan operasi songsang.", [
      ["Maksud persamaan", "Persamaan menyatakan dua ungkapan mempunyai nilai sama. Penyelesaian ialah nilai pemboleh ubah yang menjadikan persamaan benar.", ["Kekalkan keseimbangan dengan melakukan operasi sama pada kedua-dua belah.", "Tanda sama bukan arahan untuk mengira dari kiri ke kanan sahaja."]],
      ["Menyelesaikan persamaan", "Gunakan operasi songsang untuk mengasingkan pemboleh ubah: tambah lawan kepada penambahan, dan bahagi lawan kepada pendaraban.", ["3x + 5 = 17 → 3x = 12 → x = 4.", "Tulis satu langkah pada satu masa."]],
      ["Menyemak jawapan", "Gantikan nilai yang diperoleh ke dalam persamaan asal. Kedua-dua belah mesti menghasilkan nilai yang sama.", ["Semakan mengesan kesilapan tanda.", "Bina persamaan daripada maklumat masalah sebelum menyelesaikannya."]]
    ]],
    ["Ketaksamaan Linear", "Simbol ketaksamaan, penyelesaian dan perwakilan pada garis nombor.", [
      ["Simbol ketaksamaan", "Simbol < dan > tidak merangkumi nilai sempadan; ≤ dan ≥ merangkuminya.", ["x < 4 bermaksud nilai lebih kecil daripada 4.", "x ≥ 4 merangkumi 4."]],
      ["Menyelesaikan ketaksamaan", "Selesaikan seperti persamaan, tetapi apabila mendarab atau membahagi kedua-dua belah dengan nombor negatif, songsangkan arah simbol.", ["-2x < 6 → x > -3.", "Tambah atau tolak nilai yang sama tidak menukar arah simbol."]],
      ["Garis nombor", "Bulatan kosong menunjukkan hujung tidak termasuk; bulatan penuh menunjukkan hujung termasuk. Lorek ke arah nilai yang memenuhi syarat.", ["x < 2: bulatan kosong pada 2, lorek ke kiri.", "Semak satu nilai dalam kawasan lorekan."]]
    ]],
    ["Garis dan Sudut", "Jenis sudut, sudut pada garis lurus, sudut bertentangan dan garis selari.", [
      ["Jenis sudut", "Sudut diukur dalam darjah. Sudut tirus kurang 90°, tegak 90°, cakah antara 90° dan 180°, dan refleks antara 180° dan 360°.", ["Gunakan jangka sudut dengan pusat tepat pada bucu.", "Bezakan sudut dalaman dengan sudut refleksnya."]],
      ["Hubungan sudut", "Sudut pada garis lurus berjumlah 180°. Sudut bertentangan pada persilangan dua garis adalah sama.", ["Sudut pelengkap berjumlah 90°.", "Sudut penggenap berjumlah 180°."]],
      ["Garis selari", "Apabila garis selari dipotong garis rentas, sudut sepadan dan selang-seli adalah sama; sudut dalam sepihak berjumlah 180°.", ["Kenal pasti pasangan sudut sebelum mengira.", "Berikan sebab geometri bersama nilai sudut."]]
    ]],
    ["Poligon Asas", "Ciri poligon, segi tiga dan segi empat serta jumlah sudut.", [
      ["Poligon", "Poligon ialah bentuk tertutup yang dibatasi garis lurus. Nama poligon bergantung pada bilangan sisinya.", ["Poligon sekata mempunyai sisi dan sudut yang sama.", "Diagonal menyambungkan dua bucu bukan bersebelahan."]],
      ["Segi tiga", "Jumlah sudut pedalaman segi tiga ialah 180°. Segi tiga juga dikelaskan mengikut sisi dan sudut.", ["Sama sisi: tiga sisi sama.", "Sama kaki: dua sisi sama; sudut tapaknya sama."]],
      ["Segi empat", "Jumlah sudut pedalaman segi empat ialah 360°. Sifat sisi selari, sisi sama dan sudut tegak membantu mengenal pasti bentuk.", ["Segi empat tepat mempunyai empat sudut tegak.", "Rombus mempunyai empat sisi sama."]]
    ]],
    ["Perimeter dan Luas", "Perimeter bentuk gabungan dan luas bentuk asas menggunakan unit yang betul.", [
      ["Perimeter", "Perimeter ialah jumlah panjang sempadan bentuk. Untuk bentuk gabungan, kira sisi luar sahaja.", ["Unit perimeter ialah unit panjang, contohnya cm.", "Tukar unit dahulu jika unit sisi bercampur."]],
      ["Luas segi empat dan segi tiga", "Luas segi empat tepat = panjang × lebar. Luas segi tiga = ½ × tapak × tinggi serenjang.", ["Tinggi mesti tegak lurus dengan tapak.", "Unit luas ialah unit persegi, contohnya cm²."]],
      ["Luas bentuk gabungan", "Pecahkan bentuk kepada bentuk asas yang diketahui atau tolak bahagian kosong daripada luas keseluruhan.", ["Tandakan ukuran yang diperlukan pada lakaran.", "Anggarkan saiz jawapan sebelum mengira."]]
    ]],
    ["Pengenalan Set", "Set, unsur, subset, set semesta serta operasi kesatuan dan persilangan.", [
      ["Notasi set", "Set ialah kumpulan objek yang ditakrif dengan jelas. Unsur ditulis dalam kurungan berombak dan simbol ∈ bermaksud ‘ialah unsur’.", ["n(A) ialah bilangan unsur dalam set A.", "Set kosong ditulis ∅."]],
      ["Kesatuan dan persilangan", "Kesatuan A ∪ B mengandungi unsur dalam A atau B. Persilangan A ∩ B mengandungi unsur yang sama dalam kedua-dua set.", ["Senaraikan setiap unsur sekali sahaja dalam kesatuan.", "Kawasan tengah rajah Venn menunjukkan persilangan."]],
      ["Rajah Venn", "Rajah Venn menunjukkan hubungan set dalam set semesta. Letakkan unsur dalam kawasan yang betul dan semak bilangan setiap kawasan.", ["A′ ialah pelengkap A dalam set semesta.", "Pastikan semua unsur set semesta diwakili."]]
    ]],
    ["Pengendalian Data", "Jenis data, jadual kekerapan, perwakilan dan tafsiran data.", [
      ["Mengumpul dan menyusun data", "Data boleh berbentuk kategori atau nombor. Jadual kekerapan menyusun nilai bersama bilangan kemunculannya.", ["Kekerapan ialah bilangan pemerhatian.", "Semak jumlah kekerapan sama dengan jumlah data."]],
      ["Carta dan graf", "Pilih perwakilan yang sesuai: carta palang untuk kategori, graf garis untuk perubahan mengikut masa, dan piktograf untuk gambaran ringkas.", ["Label paksi dan unit.", "Gunakan skala seragam dan tajuk yang jelas."]],
      ["Mentafsir data", "Bandingkan nilai, kenal pasti nilai tertinggi atau terendah, dan nyatakan pola berdasarkan bukti dalam jadual atau graf.", ["Bezakan pemerhatian dengan andaian.", "Sokong kesimpulan menggunakan nilai data."]]
    ]],
    ["Teorem Pythagoras", "Hubungan antara sisi segi tiga bersudut tegak dan aplikasi mencari panjang sisi.", [
      ["Teorem", "Dalam segi tiga bersudut tegak, kuasa dua hipotenus sama dengan jumlah kuasa dua dua sisi yang lain: c² = a² + b².", ["Hipotenus bertentangan dengan sudut 90° dan paling panjang.", "Teorem hanya digunakan pada segi tiga bersudut tegak."]],
      ["Mencari hipotenus", "Jika dua sisi tegak diketahui, gunakan c = √(a² + b²). Pastikan sisi yang dicari ialah hipotenus.", ["Contoh sisi 3 dan 4 memberi hipotenus 5.", "Kira kuasa dua dahulu sebelum punca kuasa dua."]],
      ["Mencari sisi tegak", "Jika hipotenus dan satu sisi diketahui, sisi yang belum diketahui ialah √(c² − a²).", ["Hipotenus mesti lebih besar daripada sisi tegak.", "Semak jawapan dengan menggantikan ke dalam persamaan asal."]]
    ]]
  ];

  const subject = SYLLABUS_DATA?.secondary?.subjects?.f1?.find(item => item.id === "f1-mt");
  if (!subject) return;
  subject.chapters = lessons.map(([title, summary, sections], index) => {
    const n = index + 1;
    return {
      id: `f1-mt-c${n}`,
      number: `Bab ${n}`,
      numberEn: `Chapter ${n}`,
      title,
      summary,
      xpReward: 100,
      badgeReward: "Bintang Matematik",
      notes: {
        title: `Bab ${n}: ${title}`,
        readTime: "5 minit",
        dlpAvailable: false,
        sections: sections.map(([heading, content, bulletPoints]) => ({ heading, content, bulletPoints }))
      }
    };
  });
  subject.chaptersCount = subject.chapters.length;

  const additionalMath = {
    f2: [
      ["Pola dan Jujukan", "Kenal pasti dan huraikan pola nombor serta jujukan.", [["Pola nombor", "Pola nombor terbentuk daripada aturan yang menghubungkan sebutan berturutan.", ["Banding beza sebutan bersebelahan.", "Jadual membantu mengesan aturan."]], ["Jujukan", "Jujukan ialah senarai nombor mengikut tertib. Terangkan aturan dengan jelas dan gunakan untuk mencari sebutan seterusnya.", ["Semak aturan pada beberapa pasangan sebutan.", "Bezakan pola tambah tetap dengan pola darab tetap."]]]],
      ["Pemfaktoran dan Pecahan Algebra", "Faktorkan ungkapan algebra dan permudahkan pecahan algebra.", [["Pemfaktoran", "Pemfaktoran menulis ungkapan sebagai hasil darab faktor. Cari faktor sepunya sebelum menggunakan identiti algebra.", ["Kembangkan semula untuk menyemak.", "x² − 9 = (x − 3)(x + 3)."]], ["Pecahan algebra", "Permudahkan pecahan dengan memfaktorkan pembilang dan penyebut, kemudian batalkan faktor sepunya yang sama.", ["Batalkan faktor, bukan sebutan yang dijumlahkan.", "Penyebut asal tidak boleh bernilai sifar."]]]],
      ["Rumus Algebra", "Menggunakan rumus, menggantikan nilai dan menjadikan pemboleh ubah sebagai perkara rumus.", [["Penggantian nilai", "Gantikan setiap pemboleh ubah dengan nilai yang diberi dan gunakan kurungan untuk nilai negatif.", ["Ikut tertib operasi.", "Kekalkan unit dalam jawapan."]], ["Menjadikan pemboleh ubah", "Gunakan operasi songsang pada kedua-dua belah untuk mengasingkan pemboleh ubah yang diminta.", ["Kumpulkan sebutan yang mengandungi pemboleh ubah.", "Semak rumus baharu dengan penggantian nilai mudah."]]]],
      ["Poligon", "Sifat poligon, sudut pedalaman dan sudut peluaran.", [["Jumlah sudut", "Jumlah sudut pedalaman poligon n sisi ialah (n − 2) × 180°.", ["Segi lima: 540°.", "Bahagikan poligon kepada segi tiga untuk memahami rumus."]], ["Poligon sekata", "Bagi poligon sekata, setiap sudut pedalaman sama. Sudut peluaran sepadan berjumlah 360°.", ["Sudut peluaran satu poligon sekata = 360°/n.", "Sudut pedalaman dan peluaran pada bucu yang sama berjumlah 180°."]]]],
      ["Bulatan", "Bahagian bulatan, lilitan, luas, panjang lengkok dan luas sektor.", [["Unsur bulatan", "Jejari menghubungkan pusat kepada lilitan; diameter melalui pusat dan panjangnya dua kali jejari.", ["Perentas menyambungkan dua titik pada lilitan.", "Tangen menyentuh bulatan pada satu titik."]], ["Lilitan dan luas", "Lilitan C = 2πj dan luas A = πj². Panjang lengkok dan luas sektor ialah bahagian berkadar daripada satu bulatan penuh.", ["Gunakan nilai π yang ditetapkan dalam soalan.", "Bezakan unit panjang dengan unit luas."]]]],
      ["Bentuk Geometri Tiga Dimensi", "Sifat prisma, piramid, silinder dan bentangan bentuk tiga dimensi.", [["Mengenal bentuk", "Bentuk tiga dimensi mempunyai muka, sisi dan bucu. Prisma mempunyai keratan rentas seragam sepanjang panjangnya.", ["Silinder mempunyai dua muka bulat dan satu permukaan melengkung.", "Piramid mempunyai tapak dan muka sisi segi tiga."]], ["Bentangan", "Bentangan ialah susunan muka rata yang boleh dilipat untuk membentuk objek tiga dimensi.", ["Padankan sisi yang bertemu apabila dilipat.", "Lakaran bentangan membantu menentukan bentuk muka."]]]],
      ["Koordinat", "Koordinat Cartes, titik tengah dan jarak antara dua titik pada satah.", [["Koordinat Cartes", "Titik ditulis sebagai (x, y): bergerak mengikut paksi-x dahulu, kemudian paksi-y.", ["Paksi bersilang di asalan (0,0).", "Kuadran ditentukan oleh tanda x dan y."]], ["Titik tengah dan jarak", "Titik tengah berada sama jauh daripada dua hujung. Jarak mendatar atau menegak ialah beza mutlak koordinat sepadan.", ["Titik tengah: puratakan koordinat x dan puratakan koordinat y.", "Bagi titik sebaris mendatar/menegak, kira beza satu koordinat sahaja."]]]],
      ["Graf Fungsi", "Jadual nilai dan graf fungsi linear serta hubungan antara pemboleh ubah.", [["Fungsi", "Fungsi memadankan setiap input dengan satu output. Jadual nilai menunjukkan pasangan input-output.", ["Gantikan nilai input ke dalam aturan.", "Paksi-x mewakili input dan paksi-y output."]], ["Melukis graf", "Plot pasangan tertib pada satah Cartes. Sambungkan titik mengikut sifat fungsi dan labelkan paksi serta skala.", ["Gunakan sekurang-kurangnya beberapa titik.", "Semak titik yang diplot dengan jadual nilai."]]]],
      ["Laju dan Pecutan", "Hubungan jarak, masa, laju dan perubahan laju.", [["Laju", "Laju = jarak ÷ masa. Pastikan unit jarak dan masa serasi sebelum mengira.", ["1 m/s = 3.6 km/j.", "Laju purata menggunakan jumlah jarak bahagi jumlah masa."]], ["Pecutan", "Pecutan ialah kadar perubahan halaju: (halaju akhir − halaju awal) ÷ masa.", ["Nyahpecutan ialah pecutan bertanda negatif mengikut arah gerakan.", "Graf laju-masa menunjukkan perubahan laju mengikut masa."]]]],
      ["Kecerunan Garis Lurus", "Kecerunan sebagai kadar perubahan menegak terhadap perubahan mengufuk.", [["Mengira kecerunan", "Kecerunan m = perubahan y ÷ perubahan x antara dua titik pada garis.", ["Pilih dua titik yang tepat pada garis.", "Garis menaik ke kanan mempunyai kecerunan positif."]], ["Mentafsir kecerunan", "Kecerunan sifar menunjukkan garis mendatar; kecerunan negatif menunjukkan garis menurun ke kanan.", ["Garis tegak mempunyai kecerunan tidak tertakrif.", "Kecerunan boleh mewakili kadar dalam konteks."]]]],
      ["Transformasi Isometri", "Translasi, pantulan dan putaran yang mengekalkan bentuk serta saiz.", [["Translasi dan pantulan", "Translasi mengalihkan setiap titik dengan vektor yang sama. Pantulan menghasilkan imej cermin pada garis pantulan.", ["Jarak dan sudut dikekalkan.", "Nyatakan vektor atau garis pantulan."]], ["Putaran", "Putaran ditentukan oleh pusat, sudut dan arah. Setiap titik imej kekal pada jarak yang sama daripada pusat putaran.", ["Arah jam atau lawan jam penting.", "Tandakan pusat putaran sebelum membina imej."]]]],
      ["Ukuran Kecenderungan Memusat", "Min, median, mod dan pemilihan ukuran yang sesuai untuk data.", [["Min dan median", "Min ialah jumlah nilai bahagi bilangan data. Median ialah nilai tengah selepas data disusun.", ["Bagi bilangan data genap, median ialah min dua nilai tengah.", "Nilai terpencil boleh mengubah min dengan ketara."]], ["Mod dan perbandingan", "Mod ialah nilai paling kerap. Pilih ukuran yang sesuai dengan taburan dan tujuan perbandingan.", ["Data boleh mempunyai lebih daripada satu mod atau tiada mod.", "Nyatakan unit dan konteks ketika membuat kesimpulan."]]]],
      ["Kebarangkalian Mudah", "Kebarangkalian teori dan eksperimen bagi peristiwa mudah.", [["Kebarangkalian teori", "Jika hasil sama mungkin, P(peristiwa) = bilangan hasil memihak ÷ jumlah hasil.", ["Nilai kebarangkalian antara 0 dengan 1.", "P(pasti)=1 dan P(mustahil)=0."]], ["Kebarangkalian eksperimen", "Kebarangkalian eksperimen dianggarkan daripada kekerapan relatif hasil dalam percubaan.", ["Kekerapan relatif = bilangan kejadian ÷ jumlah percubaan.", "Lebih banyak percubaan biasanya memberi anggaran lebih stabil."]]]]
    ],
    f3: [
      ["Indeks", "Hukum indeks bagi pendaraban, pembahagian dan kuasa suatu kuasa.", [["Hukum indeks", "Untuk asas sama: aᵐ × aⁿ = aᵐ⁺ⁿ dan aᵐ ÷ aⁿ = aᵐ⁻ⁿ apabila penyebut bukan sifar.", ["Kuasa sifar a⁰ = 1 bagi a bukan sifar.", "Kuasa negatif a⁻ⁿ = 1/aⁿ."]], ["Kuasa suatu kuasa", "(aᵐ)ⁿ = aᵐⁿ. Hukum indeks memudahkan ungkapan tanpa mengira nilai asas.", ["Kuasa di luar kurungan mendarab kuasa di dalam.", "Gunakan hukum hanya apabila asas sepadan."]]]],
      ["Bentuk Piawai", "Menulis nombor sangat besar atau kecil dalam bentuk A × 10ⁿ.", [["Notasi piawai", "Bentuk piawai ialah A × 10ⁿ dengan 1 ≤ A < 10 dan n integer.", ["Gerakkan titik perpuluhan untuk menjadikan satu digit bukan sifar di kiri.", "Bilangan gerakan menentukan kuasa 10."]], ["Operasi dan perbandingan", "Darab atau bahagi pekali dan gunakan hukum indeks pada kuasa 10; laraskan pekali semula ke julat piawai.", ["Nombor besar biasanya mempunyai kuasa positif.", "Nombor antara 0 dan 1 biasanya mempunyai kuasa negatif."]]]],
      ["Matematik Pengguna: Simpanan, Pelaburan, Kredit dan Hutang", "Faedah, pulangan pelaburan dan kos pinjaman dalam keputusan kewangan.", [["Simpanan dan pelaburan", "Faedah mudah dikira atas prinsipal asal; faedah kompaun menambah faedah kepada baki untuk tempoh seterusnya.", ["Faedah mudah = prinsipal × kadar × masa.", "Bandingkan pulangan dengan risiko dan tempoh."]], ["Kredit dan hutang", "Kos pinjaman boleh merangkumi faedah, fi dan caj. Nilai jumlah bayaran balik serta kemampuan sebelum memilih kredit.", ["Semak kadar, tempoh dan jumlah kos.", "Bayaran minimum kad kredit boleh memanjangkan tempoh hutang."]]]],
      ["Lukisan Berskala", "Skala, jarak sebenar dan jarak pada lukisan atau peta.", [["Membaca skala", "Skala menyatakan hubungan ukuran lukisan dengan ukuran sebenar dalam unit yang sama.", ["Tukar unit sebelum menggunakan nisbah skala.", "Skala 1:n bermaksud satu unit lukisan mewakili n unit sebenar."]], ["Membina lukisan", "Gunakan nisbah skala untuk menukar panjang dan kekalkan sudut serta bentuk.", ["Jarak sebenar = jarak lukisan × faktor skala.", "Semak sama ada jawapan munasabah."]]]],
      ["Nisbah Trigonometri", "Sinus, kosinus dan tangen untuk mencari sisi atau sudut segi tiga bersudut tegak.", [["SOH-CAH-TOA", "Bagi sudut rujukan θ: sin θ = bertentangan/hipotenus, cos θ = bersebelahan/hipotenus, tan θ = bertentangan/bersebelahan.", ["Kenal pasti sudut rujukan dahulu.", "Hipotenus sentiasa bertentangan dengan sudut tegak."]], ["Mencari sisi dan sudut", "Pilih nisbah yang menggunakan sisi diketahui dan sisi yang dicari. Gunakan fungsi songsang untuk mencari sudut.", ["Pastikan kalkulator pada mod darjah.", "Lukis dan label segi tiga sebelum menggantikan nilai."]]]],
      ["Sudut dan Tangen Bulatan", "Sudut pada lilitan dan hubungan antara tangen dengan jejari.", [["Sudut dalam bulatan", "Sudut pada lilitan yang menghadap lengkok sama adalah sama; sudut dalam semibulatan ialah 90°.", ["Sudut pusat pada lengkok sama ialah dua kali sudut pada lilitan.", "Sudut bertentangan dalam segi empat kitaran berjumlah 180°."]], ["Tangen", "Jejari yang menyentuh titik tangen berserenjang dengan tangen. Dua tangen dari titik luar yang sama mempunyai panjang sama.", ["Tandakan jejari dan sudut tegak pada rajah.", "Gunakan sifat bulatan yang sepadan dengan maklumat rajah."]]]],
      ["Pelan dan Dongakan", "Unjuran ortogon objek tiga dimensi dari pandangan atas, hadapan dan sisi.", [["Pelan", "Pelan ialah pandangan objek dari atas. Ia menunjukkan panjang dan lebar tetapi bukan tinggi.", ["Lukis mengikut skala yang diberi.", "Gunakan garisan yang kelihatan sahaja mengikut arahan soalan."]], ["Dongakan", "Dongakan hadapan dan sisi menunjukkan bentuk objek apabila dilihat tegak dari arah tertentu.", ["Padankan ukuran tinggi antara pandangan.", "Susun pandangan pada kedudukan yang betul."]]]],
      ["Lokus dalam Dua Dimensi", "Set titik yang memenuhi syarat jarak atau kedudukan tertentu.", [["Lokus asas", "Lokus titik pada jarak tetap daripada satu titik ialah bulatan; sama jarak daripada dua titik membentuk pembahagi dua serenjang.", ["Jarak tetap daripada garis menghasilkan dua garis selari.", "Sama jarak daripada dua garis bersilang menghasilkan pembahagi dua sudut."]], ["Lokus gabungan", "Bina setiap syarat secara berasingan, kemudian kenal pasti kawasan atau titik yang memenuhi semua syarat serentak.", ["Gunakan pembaris dan jangka lukis untuk ketepatan.", "Lorek atau nyatakan rantau yang dikehendaki."]]]],
      ["Garis Lurus", "Kecerunan, pintasan dan persamaan garis lurus y = mx + c.", [["Persamaan garis", "Dalam y = mx + c, m ialah kecerunan dan c ialah pintasan-y.", ["Pintasan-y ialah nilai y apabila x = 0.", "Garis selari mempunyai kecerunan sama."]], ["Membina persamaan", "Gunakan satu titik dan kecerunan, atau dua titik untuk mencari kecerunan, kemudian tentukan pintasan.", ["Semak dengan menggantikan koordinat titik yang diberi.", "Grafkan beberapa titik untuk mengesahkan persamaan."]]]]
    ]
  };

  for (const [gradeId, topics] of Object.entries(additionalMath)) {
    const mathSubject = SYLLABUS_DATA?.secondary?.subjects?.[gradeId]?.find(item => item.id === `${gradeId}-mt`);
    if (!mathSubject) continue;
    mathSubject.chapters = topics.map(([title, summary, sections], index) => {
      const n = index + 1;
      return {
        id: `${gradeId}-mt-c${n}`, number: `Bab ${n}`, title, summary,
        xpReward: 100, badgeReward: "Bintang Matematik",
        notes: { title: `Bab ${n}: ${title}`, readTime: "5 minit", dlpAvailable: false,
          sections: sections.map(([heading, content, bulletPoints]) => ({ heading, content, bulletPoints })) }
      };
    });
    mathSubject.chaptersCount = mathSubject.chapters.length;
  }
})();
