import{a,f as g,t as m}from"./DqLirJ1Y.js";import{R as b}from"./BMTDuwgk.js";import{w as e,g as v,a0 as w}from"./BDhH3K_E.js";import{l as y,s as k}from"./DAh5bjFq.js";import{C as x,Q as _}from"./CI0U5e7d.js";import{D as T}from"./DKSsn3q8.js";import{C as $}from"./BKV5koQz.js";import{R as j}from"./CGQo3E1L.js";const t={layout:"runbook",title:"#4471 review · separate the parser and form-hint failures",owner:"support desk",status:"closed",reviewed:"2026-11-08T00:00:00.000Z",signature:"v1.eyJzdWIiOiI0Njc5IiwiYXVkIjoiY2hhbGxlbmdlOndoYXQtaXQtc2hvd3MiLCJpYXQiOjE3OTQwOTgzMTAsImV4cCI6MTc5NDE4NDcxMH0.LdjBzEWI1I3iMSq5ZJbuF2U8RWlMM9NFzUx51cijrbg"},{layout:N,title:X,owner:Y,status:J,reviewed:U,signature:z}=t;var O=g(`<p>Counts in this review use the supplied export through 4 October 2026. The
engineering update on the course page closes #4471 on 5 October 2026.
The old “one issue, one fix queued” statement is contradicted by the
classification below and by the two different closure outcomes.</p> <h2>Separate work, separate verification</h2> <p>The <strong>shared parser</strong> assumes month-first input for tenants who write day first.
The <strong>booking-v3 hint</strong> instructs people to enter month-first dates while the form
reads their input in the tenant’s day-first order. Fixing one does not prove the
other is fixed.</p> <!> <p>Counts are computed from unique report IDs. Overlapping export rows are not
additional reports. Classify using the tenant directory, form version and
submission channel; the browser-locale intake tag is only a guess.</p> <!> <h2>The queue did not stop</h2> <!> <p>Reports arrived before the bulk merges and continued afterward. Receipt and
merge dates measure different events. A “known” label is not evidence that
new reports are duplicates or that any fix has shipped.</p> <h2>Revised triage rule</h2> <p>Do not merge on matching subjects alone. Read the report and compare the
affected behavior, tenant locale, form and channel. Merge only when the cause
is supported by evidence. Different subjects can describe the same failure;
identical subjects can describe different failures.</p> <!> <p>Unknown tenants and unresolved causes stay separate for investigation. Preserve
report IDs and provenance, then recompute counts when the directory or evidence
changes. Record incoming reports while this review is in progress rather than
silently extending an old snapshot.</p> <p>The accepted <a href="/kb/decisions/0001-dedupe-by-subject">decision 0001</a> remains
unchanged as history. <a href="/kb/decisions/0002-dedupe-by-cause">Decision 0002</a> replaces it in this reviewed export, and the <a href="/kb/triage/dedupe">triage runbook</a> now uses cause-based merging.</p> <h2>Engineering tickets</h2> <ul><li><a href="https://github.com/jkoniwszczynski-alle/mega-s01e03-what-it-shows/issues/1" rel="nofollow">Shared parser: day-first dates read month-first</a>.</li> <li><a href="https://github.com/jkoniwszczynski-alle/mega-s01e03-what-it-shows/issues/2" rel="nofollow">booking-v3: date hint contradicts tenant input interpretation</a>.</li></ul> <p>Each ticket covers one classified cause. The table above computes its scope;
the ticket records the export snapshot. Reconcile new reports separately when
a later export arrives.</p> <h2>Engineering update — 5 October 2026</h2> <p>The <a href="https://hq.mega.dev/challenges/what-it-shows" rel="nofollow">course’s engineering update</a> reports these distinct outcomes:</p> <ul><li><strong>Parser — fixed.</strong> Engineering reports <code>fix(dates): parse dd/mm for eu locales</code>.
The corresponding issue is closed as completed.</li> <li><strong>Form hint — won’t fix.</strong> Engineering retired the booking-v3 form.
The corresponding issue is closed as not planned, not as a repaired defect.</li></ul> <p>Closing both tickets does not mean both bugs were fixed. These outcomes come
from the desk’s update, not from product tests run in this repository. The
one-day-move notes remain part of the historical evidence; the update supplies
no separate reproduction results for them.</p> <!>`,1);function R(d,p){const h=y(p,["children","$$slots","$$events","$$legacy"]);b(d,k(()=>h,()=>t,{children:(c,C)=>{var s=O(),r=e(v(s),6);x(r,{ticket:4471});var o=e(r,4);$(o,{kind:"warn",children:(u,I)=>{w();var f=m(`The desk's one-day-move notes identify unresolved evidence inside the parser
  group, not a verified extra cause. Keep those reports in the displayed count
  while checking original timestamps, timezone behavior and reproduction.`);a(u,f)},$$slots:{default:!0}});var n=e(o,4);_(n,{ticket:4471});var i=e(n,8);T(i,{});var l=e(i,20);j(l,{get signature(){return z}}),a(c,s)},$$slots:{default:!0}}))}const W=Object.freeze(Object.defineProperty({__proto__:null,default:R,metadata:t},Symbol.toStringTag,{value:"Module"}));export{W as _,R as a};
