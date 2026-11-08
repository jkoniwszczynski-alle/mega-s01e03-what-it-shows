import assert from 'node:assert/strict';
import fs from 'node:fs';
import { groupByCause, uniqueById, readAs } from './src/lib/kb/causes.ts';
import { deskRef } from './src/lib/kb/desk-ref.ts';

const read = file => JSON.parse(fs.readFileSync(file, 'utf8'));
const raw = read('src/lib/data/reports-4471.json');
const tenants = new Map(fs.readdirSync('src/lib/data/tenants').map(file => {
  const tenant = read(`src/lib/data/tenants/${file}`);
  return [tenant.handle, tenant];
}));
const reports = uniqueById(raw).filter(report => report.mergedInto === 4471);
const groups = groupByCause(reports, report => tenants.get(report.tenant));
assert.equal(raw.length, 427);
assert.equal(reports.length, 412);
assert.deepEqual(groups.map(group => [group.cause, group.reports.length]), [['parser', 379], ['hint', 33]]);
assert.deepEqual(groups.map(group => readAs(group, read('src/lib/data/desk-notes.json').oneDayMove)), [5, 0]);

const source = fs.readFileSync('src/routes/kb/incidents/4471-review/+page.svx', 'utf8');
const signature = source.match(/^signature: '(.*)'$/m)[1];
const html = fs.readFileSync('rendered/kb/incidents/4471-review/index.html', 'utf8');
assert.ok(html.includes(deskRef(signature)), 'rendered signature must come from RenderStamp');
for (const text of ['379', '33', '412', 'parser', 'hint', '/issues/1', '/issues/2']) {
  assert.ok(html.includes(text), `rendered page missing ${text}`);
}
assert.ok(!html.includes("this page isn't signed"), 'signature must reach the component');
assert.ok(html.includes('different causes — keep apart'), 'interactive example must be server-rendered');
assert.ok(html.includes('fix(dates): parse dd/mm for eu locales'));
assert.ok(html.includes('not planned'), 'retirement must not be presented as a fix');
console.log(`Verified 412 unique reports, parser=379, hint=33; rendered desk ref ${deskRef(signature)}.`);
