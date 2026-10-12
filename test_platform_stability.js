const assert = require('assert');
const fs = require('fs');
const vm = require('vm');

const base = fs.readFileSync('js/syllabus-data.js', 'utf8');
const curriculum = fs.readFileSync('js/primary-curriculum.js', 'utf8');
const context = { window: {}, console, setTimeout: () => 0 };
vm.runInNewContext(`${base}\nglobalThis.SYLLABUS_DATA = SYLLABUS_DATA;`, context);
vm.runInNewContext(curriculum, context);
const data = context.SYLLABUS_DATA;

// Every requested primary grade has usable, structured subject content.
for (let year = 1; year <= 6; year++) {
  const grade = data.primary.subjects[`t${year}`];
  for (const prefix of [`t${year}-mt`, `t${year}-bm`, `t${year}-bi`, `t${year}-sn`]) {
    const subject = grade.find(item => item.id.startsWith(prefix) || (prefix.endsWith('-sn') && item.id.startsWith(`t${year}-sains`)));
    assert(subject, `Year ${year} must include ${prefix}`);
    assert(subject.chapters.length >= 4, `${prefix} should have a structured learning sequence`);
    assert(subject.nameEn && subject.descriptionEn, `${prefix} needs English labels`);
    for (const chapter of subject.chapters) {
      assert(chapter.notes.sections.length >= 2, `${chapter.id} needs subtopics`);
      assert(chapter.notes.sections.every(section => section.headingEn && section.contentEn), `${chapter.id} subtopics need English text`);
      assert(chapter.quiz.questions.length > 0, `${chapter.id} needs a practice question`);
      assert(chapter.quiz.questions.every(question => question.questionEn && question.optionsEn?.length === question.options.length), `${chapter.id} quiz needs matching English questions and answers`);
      assert(chapter.primaryVisual, `${chapter.id} needs an interactive activity`);
      assert(!/Aplikasi Pembelajaran Lanjutan|Advanced Learning Module Unit|Konsep standard bagi sukatan pelajaran rasmi KPM|most important concept learned in Chapter/i.test(JSON.stringify(chapter)), `${chapter.id} must not contain placeholder copy`);
    }
  }
  const history = grade.some(item => item.name === 'Sejarah');
  assert.strictEqual(history, year >= 4, `Sejarah availability should match this KSSR Semakan grade map (Year ${year})`);
}
for (const level of Object.values(data)) {
  for (const subjects of Object.values(level.subjects)) {
    for (const subject of subjects) {
      assert(!subject.chapters.some(chapter => /Aplikasi Pembelajaran Lanjutan|Advanced Learning Module Unit|Konsep standard bagi sukatan pelajaran rasmi KPM|most important concept learned in Chapter/i.test(JSON.stringify(chapter))), `${subject.id} must not expose generic placeholder chapters`);
    }
  }
}

// Ensure the primary activities render controls, not just static illustration.
const visualContext = { window: {}, document: {}, setTimeout: () => 0, requestAnimationFrame: () => 0 };
vm.runInNewContext(fs.readFileSync('js/visual-graphics.js', 'utf8'), visualContext);
const visuals = visualContext.window.visualGraphics;
const makeChapter = primaryVisual => ({ title: 'Test topic', titleEn: 'Test topic', primaryVisual });
assert(visuals.getChapterGraphic('t6-sn-c3', 'en', makeChapter('gravity')).includes('primaryGravityCanvas'));
assert(visuals.getChapterGraphic('t1-mt-c3', 'bm', makeChapter('fraction3d')).includes('primaryFractionDenominator'));
assert(visuals.getChapterGraphic('t1-mt-c2', 'bm', makeChapter('geometry3d')).includes('geometry-cube'));
assert(visuals.getChapterGraphic('t5-mt-c3', 'en', makeChapter('money')).includes('primaryMoneyA'));
assert(visuals.getChapterGraphic('t2-sn-c2', 'bm', makeChapter('senses')).includes('selectSense'));
assert(visuals.getChapterGraphic('t1-bi-c1', 'en', makeChapter('word-builder')).includes('ondrop='));
assert(visuals.getChapterGraphic('t5-sej-c1', 'en', makeChapter('timeline')).includes('selectHistoryStep'));

// Core account/placement/navigation wiring and cache versioning.
const html = fs.readFileSync('index.html', 'utf8');
const app = fs.readFileSync('js/app.js', 'utf8');
const auth = fs.readFileSync('js/auth.js', 'utf8');
assert(/authForm/.test(html) && /signInWithPassword/.test(auth) && /signUp/.test(auth), 'Login and account creation are wired');
assert(/saveStudyPlacement\(level, grade\)/.test(auth) && /study_level: level, study_grade: grade/.test(auth), 'Year/form choice is validated and saved');
assert(/renderStatsBanner\(/.test(app) && /enterClassroom\(/.test(app), 'Dashboard and classroom navigation are wired');
assert(/enterSubjectArena\(/.test(app) && /exitSubjectArena\(/.test(app), 'Subject navigation and return route are wired');
assert(!html.includes('classroom-world.js') && !html.includes('classroomWorldCanvas'), 'The 2D movement game is not loaded');
assert(!html.includes('cdnjs.cloudflare.com/ajax/libs/three.js'), 'Three.js is not downloaded on initial page load');
assert(!html.includes('edu3D') && !html.includes('lab3dContainer'), 'The unused generic 3D lab is removed');
for (const match of html.matchAll(/(?:src|href)="(?:js|css)\/[^"?]+"/g)) assert.fail(`Local asset missing release cache key: ${match[0]}`);
for (const match of html.matchAll(/(?:src|href)="((?:js|css)\/[^\"]+)"/g)) assert(/\?v=/.test(match[1]), `Local asset needs a release cache key: ${match[1]}`);
assert(/Cache-Control', 'no-cache'/.test(fs.readFileSync('server.js', 'utf8')), 'HTML is configured to revalidate after deploy');

// BM/EN are supported; ensure no Chinese UI has been accidentally added.
assert(/"bm"|"en"/.test(fs.readFileSync('js/localization.js', 'utf8')));
assert(!/[\u3400-\u9fff]/.test(`${html}\n${fs.readFileSync('js/localization.js', 'utf8')}`), 'Unexpected Chinese UI string needs review');

async function simulateAccountAndPlacementFlows() {
  const nodes = new Map();
  const getNode = id => {
    if (!nodes.has(id)) nodes.set(id, { value: '', textContent: '', className: '', disabled: false, checked: false, classList: { add() {}, remove() {}, toggle() { return false; }, contains() { return true; } }, setAttribute() {} });
    return nodes.get(id);
  };
  let signInRequest = null;
  const fakeWindow = { gamification: { profile: { gradeXp: {}, xp: 12 }, saveProfile() {} }, app: { applyStudentPlacement(level, grade) { fakeWindow.appliedPlacement = { level, grade }; } } };
  const fakeDocument = { getElementById: getNode, addEventListener() {} };
  vm.runInNewContext(fs.readFileSync('js/auth.js', 'utf8'), { window: fakeWindow, document: fakeDocument, SYLLABUS_DATA: data, fetch: async () => ({ ok: false }), console, setTimeout });
  const auth = fakeWindow.eduAuth;
  getNode('authEmail').value = 'student@example.test';
  getNode('authPassword').value = 'valid-passphrase';
  auth.client = { auth: { signInWithPassword: async payload => { signInRequest = payload; return { data: { session: { user: { id: 'test-user' } } }, error: null }; } } };
  let activated = null;
  auth.activate = async session => { activated = session; };
  await auth.submit({ preventDefault() {} });
  assert.strictEqual(signInRequest.email, 'student@example.test', 'Login must submit the entered email');
  assert.strictEqual(activated.user.id, 'test-user', 'A successful login session must activate');

  let savedRow = null;
  auth.user = { id: 'test-user' };
  auth.profile = { study_level: null, study_grade: null };
  auth.client = { from(table) { assert.strictEqual(table, 'profiles'); return { update(row) { savedRow = row; return { eq: async (column, id) => ({ error: column === 'id' && id === 'test-user' ? null : new Error('unexpected profile target') }) }; } }; } };
  await auth.saveStudyPlacement('primary', 't3');
  assert.deepStrictEqual({ level: savedRow.study_level, grade: savedRow.study_grade }, { level: 'primary', grade: 't3' });
  assert.deepStrictEqual(fakeWindow.appliedPlacement, { level: 'primary', grade: 't3' }, 'Saved placement must update the active app');
  const savedBeforeInvalidGrade = savedRow;
  await auth.saveStudyPlacement('primary', 'f4');
  assert.strictEqual(savedRow, savedBeforeInvalidGrade, 'An invalid grade must not reach the database');

  const appNodes = new Map();
  const appNode = id => {
    if (!appNodes.has(id)) appNodes.set(id, { textContent: '', innerHTML: '', hidden: false, classList: { values: new Set(['hidden']), add(name) { this.values.add(name); }, remove(name) { this.values.delete(name); }, contains(name) { return this.values.has(name); } }, scrollIntoView() {} });
    return appNodes.get(id);
  };
  const appDocument = { getElementById: appNode, addEventListener() {} };
  const appWindow = { gamification: { profile: { studyLevel: 'primary', studyGrade: 't2', xp: 12, streak: 2, unlockedBadges: [], username: 'learner', avatarUrl: '' } } };
  const appContext = { window: appWindow, document: appDocument, SYLLABUS_DATA: data, localStorage: { getItem: () => null, setItem() {} }, console, Date, Math };
  vm.runInNewContext(`${fs.readFileSync('js/app.js', 'utf8')}\nglobalThis.EduPintarApp = EduPintarApp;`, appContext);
  const app = Object.create(appContext.EduPintarApp.prototype);
  Object.assign(app, { currentLevel: 'secondary', currentGradeId: 'f1', currentSubjectId: null, currentChapterId: null, currentLanguage: 'en', renderGradePills() {}, renderSubjectsGrid() {}, renderChapterDetail() {}, renderArenaQuestRoadmap() {}, saveSessionState() {}, renderLevelSelector() {}, enterClassroom() { app.lastView = 'classroom'; } });
  app.applyStudentPlacement('primary', 't2');
  assert.strictEqual(app.currentGradeId, 't2', 'Dashboard placement must switch to the saved year');
  assert.strictEqual(app.lastView, 'classroom', 'A saved placement opens the learner classroom');
  app.renderStatsBanner();
  assert(appNode('studentStatsBanner').innerHTML.includes('Year 2'), 'Dashboard must render the English grade label');
  app.enterSubjectArena('t2-mt');
  assert(appNode('subjectArenaView').classList.values.has('hidden') === false, 'Choosing a subject must open its learning view');
  assert.strictEqual(appNode('arenaSubjectTitle').textContent, 'Mathematics', 'Subject navigation must respect the selected language');
}

simulateAccountAndPlacementFlows().then(() => {
  console.log('Platform stability checks passed: simulated login and grade save, dashboard/navigation wiring, primary activities, and release asset cache keys.');
}).catch(error => {
  console.error(error);
  process.exitCode = 1;
});
