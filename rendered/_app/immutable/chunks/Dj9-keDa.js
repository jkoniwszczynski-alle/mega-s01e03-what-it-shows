import{a as c,f as d}from"./DqLirJ1Y.js";import{R as u}from"./BMTDuwgk.js";import{w as r,g as l}from"./BDhH3K_E.js";import{l as h,s as g}from"./DAh5bjFq.js";import{D as f}from"./DKSsn3q8.js";import{R as m}from"./CGQo3E1L.js";const e={layout:"runbook",title:"0002 · Merge reports only when the cause matches",owner:"support desk",status:"accepted",reviewed:"2026-11-08T00:00:00.000Z",signature:"Codex · S01E03 analysis for jkoniwszczynski-alle · 2026-11-08"},{layout:D,title:R,owner:I,status:S,reviewed:z,signature:b}=e;var v=d(`<p><strong>Date:</strong> 8 November 2026 · <strong>Scope:</strong> this reviewed kb export.</p> <h2>Context</h2> <p>Ticket #4471 combined different date failures because the desk matched subject
lines. Its old “one issue, one fix” description hides a booking-v3 form-hint
defect behind a shared-parser defect. Intake tags are guesses, not verified
causes. Reports kept arriving after the ticket was marked known.</p> <h2>Decision</h2> <p>This record replaces <a href="/kb/decisions/0001-dedupe-by-subject">decision 0001</a>.
The accepted original is retained unchanged for history.</p> <p>Read the report and establish its cause using tenant locale, form version,
submission channel and supporting reproduction evidence. Merge only when that
cause matches the target ticket. A matching subject is insufficient; different
subjects do not prevent a merge. Unknown tenants or unresolved causes remain
separate for investigation.</p> <p>For the supplied date reports, use the executable classification rather than
browser locale or intake tags. Deduplicate export rows by report ID before
counting. Preserve anomalous reports and their uncertainty; classification
does not prove that a suspected mechanism explains every symptom.</p> <!> <h2>Consequences</h2> <p>Triage takes more reading than matching subjects, but avoids concealing a
separate failure behind a popular ticket. Keep one engineering issue per
supported cause, with unique report IDs, counts and evidence. New reports must
still be triaged while engineering works; “known” is not a reason to merge.
If evidence changes, reclassify and recompute counts without losing provenance.</p> <p>The <a href="/kb/triage/dedupe">updated runbook</a> applies this rule. The <a href="/kb/incidents/4471-review">incident review</a> links the resulting work.</p> <!>`,1);function k(a,n){const o=h(n,["children","$$slots","$$events","$$legacy"]);u(a,g(()=>o,()=>e,{children:(i,w)=>{var t=v(),s=r(l(t),14);f(s,{});var p=r(s,8);m(p,{get signature(){return b}}),c(i,t)},$$slots:{default:!0}}))}const C=Object.freeze(Object.defineProperty({__proto__:null,default:k,metadata:e},Symbol.toStringTag,{value:"Module"}));export{C as _,k as a};
