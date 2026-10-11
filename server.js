/**
 * EduPintar Malaysia - Production Express Server
 * Menyediakan fail statik web dan API Papan Pendahulu Kebangsaan bagi Render.com
 */

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// In-memory / persistent leaderboard with authentic Malaysian student representations
let leaderboard = [
  { rank: 1, name: "Nur Aisyah Binti Zulkifli", school: "SMK Aminuddin Baki, KL", level: "Cendekiawan Pintar", xp: 2450, badges: 9 },
  { rank: 2, name: "Tan Wei Hong", school: "SMJK Chung Ling, Pulau Pinang", level: "Jaguh Harapan", xp: 2180, badges: 8 },
  { rank: 3, name: "Muhammad Harith Danish", school: "Kolej Melayu Kuala Kangsar (MCKK)", level: "Jaguh Harapan", xp: 1920, badges: 7 },
  { rank: 4, name: "Siti Sarah Qistina", school: "Sekolah Berasrama Penuh Integrasi Gopeng", level: "Wira Ilmuwan", xp: 1650, badges: 6 },
  { rank: 5, name: "Darren Lee Jia Jun", school: "SMK Catholic, Petaling Jaya", level: "Wira Ilmuwan", xp: 1420, badges: 6 },
  { rank: 6, name: "Kavitha A/P Muthusamy", school: "SMK Sultan Ismail, Johor Bahru", level: "Bintang Kelas", xp: 1250, badges: 5 },
  { rank: 7, name: "Mohd Adam Rayyan", school: "SK Taman Tun Dr Ismail (1), KL", level: "Bintang Kelas", xp: 980, badges: 5 },
  { rank: 8, name: "Alyssa Wong Xin Yi", school: "SJK(C) Puay Chai 2, Selangor", level: "Penuntut Bersemangat", xp: 750, badges: 4 },
  { rank: 9, name: "Faris Izzudin", school: "SMK Agama Kedah, Alor Setar", level: "Penuntut Bersemangat", xp: 620, badges: 3 },
  { rank: 10, name: "Nurul Huda Binti Azman", school: "SMK Kubang Kerian, Kelantan", level: "Penuntut Bersemangat", xp: 540, badges: 3 }
];

// Serve static frontend files
app.use(express.static(path.join(__dirname)));

// Health check endpoint for Render monitoring
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'EduPintar Malaysia',
    version: '1.0.0',
    curriculum: 'KSSR Semakan & KSSM SPM',
    timestamp: new Date().toISOString()
  });
});

// GET Leaderboard endpoint
app.get('/api/leaderboard', (req, res) => {
  // Sort descending by XP
  const sorted = [...leaderboard].sort((a, b) => b.xp - a.xp).map((item, index) => ({
    ...item,
    rank: index + 1
  }));
  res.json(sorted.slice(0, 15));
});

// POST update student score to Leaderboard
app.post('/api/leaderboard', (req, res) => {
  const { name, school, xp, level, badges } = req.body;
  if (!name || typeof xp !== 'number') {
    return res.status(400).json({ error: 'Data pelajar tidak lengkap' });
  }

  const existingIndex = leaderboard.findIndex(item => item.name.toLowerCase() === name.toLowerCase());
  if (existingIndex !== -1) {
    if (xp > leaderboard[existingIndex].xp) {
      leaderboard[existingIndex].xp = xp;
      leaderboard[existingIndex].level = level || leaderboard[existingIndex].level;
      leaderboard[existingIndex].school = school || leaderboard[existingIndex].school;
      leaderboard[existingIndex].badges = badges || leaderboard[existingIndex].badges;
    }
  } else {
    leaderboard.push({
      rank: leaderboard.length + 1,
      name,
      school: school || 'Sekolah Malaysia',
      level: level || 'Murid Permulaan',
      xp,
      badges: badges || 1
    });
  }

  leaderboard.sort((a, b) => b.xp - a.xp);
  res.json({ success: true, updated: true });
});

// Fallback to index.html for SPA client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 EduPintar Malaysia sedang beroperasi di http://localhost:${PORT}`);
});
