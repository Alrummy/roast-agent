const path = require('path');
const fs = require('fs');

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

// The joke: an agent that over-engineers a 4-line fix into 400 lines, then over-explains it as if the human were lost.
const text =
  'My agent writes 400 lines of code to avoid a 4-line fix, ' +
  'then explains both to me like I was the one who needed the meeting.';

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), text + '\n');