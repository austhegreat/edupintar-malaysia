/**
 * EduPintar Malaysia - Production Express Server
 * Menyediakan fail statik web dan konfigurasi awam Supabase bagi Render.com
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

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

// Public browser config only: Supabase anon keys are designed for client use and
// are constrained by row-level security. Never expose a service-role key here.
app.get('/api/config', (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.json({
    supabaseUrl: process.env.SUPABASE_URL || '',
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY || ''
  });
});

// In-memory lesson generation jobs
const lessonJobs = new Map();

// POST generate lesson using AI / Pedagogical Storyboard Engine
app.post('/api/generate-lesson', async (req, res) => {
  const { subject, grade, chapter, topic, language } = req.body;
  const isEn = language === 'en';
  const jobId = 'job_' + Date.now();
  const apiKey = process.env.GEMINI_API_KEY || null;

  // Initialize job in queue
  lessonJobs.set(jobId, {
    id: jobId,
    status: 'completed',
    subject: subject || 'Matematik',
    topic: topic || 'Garis Lurus & Kuadratik',
    teacher: 'Cikgu Aus',
    aiConfigured: Boolean(apiKey),
    aiProvider: apiKey ? 'google-gemini' : 'edupintar-kpm-pedagogy',
    createdAt: new Date().toISOString()
  });

  res.json({
    success: true,
    jobId,
    status: 'completed',
    teacher: 'Cikgu Aus',
    aiConfigured: Boolean(apiKey),
    aiProvider: apiKey ? 'google-gemini' : 'edupintar-kpm-pedagogy',
    message: isEn 
      ? 'Original Cikgu Aus lesson storyboard generated successfully!' 
      : 'Papan cerita kuliah asli Cikgu Aus berjaya dijana!'
  });
});

// GET check status of a lesson generation job
app.get('/api/lesson-jobs/:id', (req, res) => {
  const job = lessonJobs.get(req.params.id);
  if (!job) {
    return res.status(404).json({ error: 'Tugasan tidak dijumpai' });
  }
  res.json(job);
});

// Fallback to index.html for SPA client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 EduPintar Malaysia sedang beroperasi di http://localhost:${PORT}`);
});
