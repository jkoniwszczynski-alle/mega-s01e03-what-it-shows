# kb — the support knowledge base

## S01E03 delivery

- [Signed incident review source](src/routes/kb/incidents/4471-review/+page.svx)
- [Rendered incident review](rendered/kb/incidents/4471-review/index.html)
- [Parser issue — 379 reports](https://github.com/jkoniwszczynski-alle/mega-s01e03-what-it-shows/issues/1)
- [Form-hint issue — 33 reports](https://github.com/jkoniwszczynski-alle/mega-s01e03-what-it-shows/issues/2)

The rendered directory contains the actual prerendered Svelte/mdsvex site,
including styles and client assets. Serve that directory at the web root
to view it; GitHub's HTML source viewer is not the rendered experience.

With Node 24: `npm ci --ignore-scripts`, `npm run build`, `npm test`.
Run `npm run preview` and open `/kb/incidents/4471-review/` for the complete page.
The source export lacked build configuration; the minimal SvelteKit build
added here executes its original components and classification logic.

Analysis date: 2026-11-08. Dataset ends 2026-10-04, not live support state.
Accepted decision 0001 is preserved unchanged; decision 0002 replaces it.
The course's 5 October engineering update reports the parser fixed; booking-v3
was retired, so the hint issue is closed as not planned. These are reported
engineering outcomes, not product verification performed in this repository.

**kb** = knowledge base. What the support desk knows about how our products break, written
down where the code can keep it honest.

One desk takes reports for every product we run: `sched-prod` (calendar invites for about
300k people) and the rest. When something
goes wrong, the reports reach the desk first. This kb is how the desk triages them, what each
incident turned out to be, and why we decided what we decided.

## What's here

```
src/routes/kb/      the pages (.svx: Markdown with components)
  triage/           how the desk handles incoming reports
  incidents/        one page per big ticket
  decisions/        numbered decision records
src/lib/kb/         components and the logic they run
src/lib/layouts/    the frame every page shares
src/lib/data/       exports from the ticket system
```

## Conventions

- Words in the page, logic in `src/lib` (imported as `#lib/…`). A number that can be computed belongs in a component.
- Every page starts with frontmatter: `title`, `owner`, `status`, `reviewed`.
- A decision is never edited after it is accepted. A new record replaces it.
- A page you add is signed: its frontmatter carries your `signature` and it ends with `<RenderStamp {signature} />`, so the desk knows who wrote it.

## Owners

Support desk. Decision records: whoever signed them.

---

Exported 2026-10-04 from the `support` repo, `apps/kb/` → `src/`.
