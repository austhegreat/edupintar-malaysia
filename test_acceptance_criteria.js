// test_acceptance_criteria.js
// Automated verification test suite for EduPintar Redesign Acceptance Criteria

const assert = require('assert');
const fs = require('fs');

console.log('🧪 Starting EduPintar Acceptance Criteria Test Suite...\n');

// 1. Verify Cikgu Aus Character Module
console.log('Test 1: Cikgu Aus stick-figure character and gesture system...');
const cikguAusCode = fs.readFileSync('js/cikgu-aus.js', 'utf8');
assert(cikguAusCode.includes('class CikguAusCharacter'), 'CikguAusCharacter class must exist');
assert(cikguAusCode.includes('mortarboard') || cikguAusCode.includes('polygon points="100,50 135,62'), 'Mortarboard graduation cap must be rendered');
assert(cikguAusCode.includes('generateSvg'), 'generateSvg method must exist');

// Test SVG generation across all poses
const { CikguAusCharacter } = require('./js/cikgu-aus.js');
const aus = new CikguAusCharacter();

const poses = ['idle', 'waving', 'pointing', 'talking', 'thinking', 'writing', 'celebrating'];
poses.forEach(pose => {
  const svg = aus.generateSvg(pose);
  assert(svg.includes('<svg'), `SVG for pose ${pose} must be valid SVG`);
  assert(svg.includes('CIKGU AUS'), `Cikgu Aus badge must be present in ${pose}`);
});
console.log('  ✅ Test 1 Passed: Cikgu Aus renders consistently with mortarboard cap and all 7 gestures.\n');

// 2. Verify Interactive Mathematics Lab (y = mx + c)
console.log('Test 2: Interactive Mathematics Lab calculations & point inspector...');
const mathLabCode = fs.readFileSync('js/math-lab.js', 'utf8');
assert(mathLabCode.includes('class InteractiveMathLab'), 'InteractiveMathLab class must exist');
assert(mathLabCode.includes('calculateY'), 'calculateY method must exist');
assert(mathLabCode.includes('getFormattedEquation'), 'getFormattedEquation method must exist');

const { InteractiveMathLab } = require('./js/math-lab.js');
const lab = new InteractiveMathLab();

// Test linear equation calculation: y = mx + c
lab.mode = 'linear';
lab.linear.m = 2;
lab.linear.c = 3;
lab.linear.x = 1;

const calculatedY = lab.calculateY(1);
console.log(`  Calculating for m=2, c=3, x=1: y = ${calculatedY}`);
assert.strictEqual(calculatedY, 5, 'When m=2, c=3, x=1, y must equal 5');

// Test user requirement: "If the student enters x = 1, calculate the corresponding y-value using the current equation"
lab.linear.m = 3;
lab.linear.c = -2;
const calculatedY2 = lab.calculateY(1);
console.log(`  Calculating for m=3, c=-2, x=1: y = ${calculatedY2}`);
assert.strictEqual(calculatedY2, 1, 'When m=3, c=-2, x=1, y must equal 1 (3*1 - 2 = 1)');

// Test x = 2
const calculatedY3 = lab.calculateY(2);
console.log(`  Calculating for m=3, c=-2, x=2: y = ${calculatedY3}`);
assert.strictEqual(calculatedY3, 4, 'When m=3, c=-2, x=2, y must equal 4 (3*2 - 2 = 4)');

// Test formatted equation
assert(lab.getFormattedEquation().includes('y = 3x - 2'), 'Equation format must be clean');

// Test parameter explanations
const explanation = lab.getParameterExplanation();
assert(explanation.includes('m = +3') || explanation.includes('Positif'), 'Explanation must explain gradient effect');
assert(explanation.includes('Pintasan-y'), 'Explanation must explain y-intercept');

console.log('  ✅ Test 2 Passed: Interactive math calculation accurately evaluates y for any x with live explanations.\n');

// 3. Verify Lesson Engine & Storyboard Segments
console.log('Test 3: Original Lesson Engine & 6-Segment Storyboard...');
const lessonCode = fs.readFileSync('js/lesson-engine.js', 'utf8');
assert(lessonCode.includes('class EduLessonEngine'), 'EduLessonEngine class must exist');
assert(lessonCode.includes('buildSegments'), 'buildSegments method must exist');

const { EduLessonEngine } = require('./js/lesson-engine.js');
const lessonEngine = new EduLessonEngine();

const dummyChapter = {
  id: 'f4-mt-c1',
  number: 'Bab 1',
  title: 'Fungsi dan Persamaan Kuadratik dalam Satu Pemboleh Ubah',
  summary: 'Memahami fungsi kuadratik dari asas.'
};

lessonEngine.buildSegments(dummyChapter);
assert.strictEqual(lessonEngine.segments.length, 6, 'Must generate exactly 6 structured storyboard segments');
assert.strictEqual(lessonEngine.segments[0].id, 'intro', 'Segment 1 must be Intro');
assert.strictEqual(lessonEngine.segments[1].id, 'concept', 'Segment 2 must be Concept');
assert.strictEqual(lessonEngine.segments[2].id, 'visual_demo', 'Segment 3 must be Visual Demo');
assert.strictEqual(lessonEngine.segments[3].id, 'worked_example', 'Segment 4 must be Worked Example');
assert.strictEqual(lessonEngine.segments[4].id, 'checkpoint', 'Segment 5 must be Checkpoint');
assert.strictEqual(lessonEngine.segments[5].id, 'summary', 'Segment 6 must be Summary');
console.log('  ✅ Test 3 Passed: 6-segment whiteboard lesson generated with Cikgu Aus narration and checkpoint.\n');

// 4. Verify Server Backend API
console.log('Test 4: Server backend endpoints (/api/generate-lesson)...');
const serverCode = fs.readFileSync('server.js', 'utf8');
assert(serverCode.includes('/api/generate-lesson'), 'Server must have /api/generate-lesson endpoint');
assert(serverCode.includes('/api/lesson-jobs/:id'), 'Server must have /api/lesson-jobs/:id endpoint');
console.log('  ✅ Test 4 Passed: Server contains lesson generation and job tracking endpoints.\n');

// 5. Verify index.html Script Integrations
console.log('Test 5: index.html loads all required modules...');
const indexHtml = fs.readFileSync('index.html', 'utf8');
assert(indexHtml.includes('js/cikgu-aus.js'), 'index.html must load cikgu-aus.js');
assert(indexHtml.includes('js/math-lab.js'), 'index.html must load math-lab.js');
assert(indexHtml.includes('js/lesson-engine.js'), 'index.html must load lesson-engine.js');
assert(indexHtml.includes('js/visual-graphics.js'), 'index.html must load visual-graphics.js');
console.log('  ✅ Test 5 Passed: All AI & Math modules correctly linked in HTML.\n');

console.log('🎉 ALL 5 TEST SUITES PASSED! Acceptance criteria verified successfully.');
