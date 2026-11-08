import{a as n,f as m,t as g}from"./DqLirJ1Y.js";import{R as v}from"./BMTDuwgk.js";import{w as e,g as b,a0 as w}from"./BDhH3K_E.js";import{l as y,s as k}from"./DAh5bjFq.js";import{C as _,Q as x}from"./CI0U5e7d.js";import{D as $}from"./DKSsn3q8.js";import{C as T}from"./BKV5koQz.js";import{R}from"./CGQo3E1L.js";const t={layout:"runbook",title:"#4471 review · separate the parser and form-hint failures",owner:"support desk",status:"reviewed",reviewed:"2026-11-08T00:00:00.000Z",signature:"Codex · S01E03 analysis for jkoniwszczynski-alle · 2026-11-08"},{layout:F,title:K,owner:N,status:U,reviewed:Z,signature:j}=t;var z=m(`<p>This review uses the supplied export through 4 October 2026. It is not a live
view of the support queue. The old incident page’s “one issue, one fix queued”
statement is contradicted by the executable classification below.</p> <h2>Separate work, separate verification</h2> <p>The <strong>shared parser</strong> assumes month-first input for tenants who write day first.
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
the ticket records the export snapshot. Neither ticket claims a product fix
has shipped. Reconcile new reports separately when a later export arrives.</p> <!>`,1);function C(d,p){const h=y(p,["children","$$slots","$$events","$$legacy"]);v(d,k(()=>h,()=>t,{children:(l,D)=>{var s=z(),r=e(b(s),6);_(r,{ticket:4471});var a=e(r,4);T(a,{kind:"warn",children:(u,S)=>{w();var f=g(`The desk's one-day-move notes identify unresolved evidence inside the parser
  group, not a verified extra cause. Keep those reports in the displayed count
  while checking original timestamps, timezone behavior and reproduction.`);n(u,f)},$$slots:{default:!0}});var o=e(a,4);x(o,{ticket:4471});var i=e(o,8);$(i,{});var c=e(i,12);R(c,{get signature(){return j}}),n(l,s)},$$slots:{default:!0}}))}const B=Object.freeze(Object.defineProperty({__proto__:null,default:C,metadata:t},Symbol.toStringTag,{value:"Module"}));export{B as _,C as a};
