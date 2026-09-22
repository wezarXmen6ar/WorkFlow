# Response Style

Keep all responses summarized, simple, straight to the point, clear, and easy to understand.

# What belongs in this file

- This file holds only how I work: rules, process, and formats. No business or project content.
- Project content goes in objectives.md, problems.md, and solutions.md (through the drafts), or in prototype.md. Never here.

# Workflow Rules (strict)

All work follows this hierarchy, tracked in [objectives.md](objectives.md), [problems.md](problems.md), and [solutions.md](solutions.md):

```
Objective (O-001) > Problem (P-001) > Solution (S-001) > Sub-solution (S-001.1) > Feature (F-001)
```

- Every item has a unique ID. Every item except an objective has a "Serves" field naming its **home parent** — the one parent it belongs to, which gives it its place and ID.
- An item may also serve other parents. List those in an **"Also serves"** field. Nothing is ever duplicated: write the idea once, then reference it from every parent it serves.
- Parents have many children, and children may have many parents at every layer: a problem can serve several objectives, a solution several problems, a sub-solution several solutions, a feature several solutions or sub-solutions. Only the home parent decides where the item lives and what its ID is.
- Sub-solution IDs include the home parent's ID (S-001.1, S-001.1.1).
- Features live in solutions.md under their home solution or sub-solution, may also serve others, and record their design location.
- An objective is done only when every problem that serves it (home or also) is solved.
- Before adding anything, check whether an existing item already covers it. If it does, add an "Also serves" link instead of writing a near-copy.

## Always ask before adding anything

- **When given an idea:** ask which problem(s) it solves and which objective(s) those serve. If there is more than one, ask which is the home parent.
- **When asked to add a feature:** ask which solution or sub-solution it serves (and any others), which problem(s) those belong to, and which objective(s).
- If the problem, solution, or objective doesn't exist yet, draft it too. Parents must be in the main documents before their children.
- Never add an item to the main documents, or build a feature, without a complete chain up to an objective. Every "Serves" and "Also serves" link must point to an existing item.
- Keep the active draft file and the main documents up to date as things change.

## Drafts first (strict)

- Anything discussed that could go into objectives.md, problems.md, or solutions.md (objectives, problems, solutions, sub-solutions, features), whether it comes from the user or from me, is written to the active draft file first.
- Each push has its own draft file in `drafts/`, named after the version it will become: `draft-v1.0.md`, then `draft-v1.1.md`, and so on. The active draft is the one for the next version to be pushed. [drafts/draft-v0.1.md](drafts/draft-v0.1.md) was pushed as v0.1 on 2026-09-22 and is finished. Per "Prototype first" below, no draft becomes active again until the v0.1 prototype is built and reviewed; [drafts/draft-v0.2.md](drafts/draft-v0.2.md) and [drafts/draft-v1.0.md](drafts/draft-v1.0.md) stay pending until then. Drafts are never combined into one document.
- Draft entries have no ID. Note the type, the likely home parent, and any other parents it also serves, as suggestions only.
- Keep an "Overview tree" at the top of the active draft showing every entry and its home parent (objective > problem > solution > sub-solution > feature), with "also serves" links noted. Update it whenever an entry is added, changed, or removed.
- Keep a mind map beside the active draft (see below). Update it in the same pass as the tree.
- Never move a draft into the main documents without the user's clear green light.
- On the green light (a push): add the approved entries to the right main document, assign their IDs, set their "Serves" (home) parent and any "Also serves" parents, and record the push as a new version (see below). The draft file is then finished: mark its status as pushed with the date and never edit it again. Entries that were not approved move to a new draft file for the next version, and anything discussed after the push goes there too.
- **Mirroring an update into a later draft:** when something is updated in the active (lower-version) draft and the user asks for that update to also be reflected in a later draft, first read that later draft's file and its map, and work out the full effect of the change there — which objectives, problems, solutions, sub-solutions, and features it touches or connects to, and how. Report that effect back to the user before changing anything, and always report it as a **preview map**: a temporary copy of the later draft's map (never the real map file) that shows how it would look after the change, with every new item highlighted and labelled by type (objective, problem, solution, sub-solution, or feature) and every new link highlighted, distinguishing a new home-parent link from a new "also serves" link and calling out any link that connects two items that already existed. Include a short written breakdown beside the map. Only after the user confirms, mirror the item's complete chain — from its objective, through its problem, through the solution and sub-solution, down through every feature — in both the text and the map, not just the item itself. Never do any of this automatically; only when the user asks.
- **Keep every confirmed update's preview map as a reference:** when the user confirms an update after seeing its preview map, save that preview map (the highlighted one, with all its effects) as a permanent reference before applying the change. Keep it in `drafts/update-previews/`, named for the target draft, the update, and the date (for example `2026-09-22-draft-v1.0-mirror-landing-page.html`), so there is a visual history of every update and the effect it had. Never edit or delete a saved preview.

## The mind map

**"The mind map" always means [templates/mindmap.html](templates/mindmap.html).** When the user asks for the mind map, or for a map of a draft, a version, or the project, build it from this template. Never redesign it and never invent another format.

- One mind map per draft and per version.
- The design is settled: one column per layer (four now, five once features exist), fanned link anchors, hover to trace, click to pin, Esc to clear, light and dark. Change it only if the user asks.
- To make a map, copy the template and replace only the `DATA` object at the top (`version`, `note`, `layers`, `nodes`, `links`). Everything under "RENDER" stays as it is.
- Links are `[child, parent, 1|0]`: `1` is the home parent, drawn solid; `0` is "also serves", drawn dashed. Every node except an objective needs exactly one home-parent link.
- Order the nodes within each column so a child sits as close as possible, vertically, to its home parent — a child should not be at the bottom of its column while its parent is at the top. Order top-down by home parent so each parent's children cluster next to it, keeping the map tidy and its lines short. This is about the order of entries in the `nodes` list only; never change the "RENDER" code to do it.
- The active draft's map lives beside it as `drafts/draft-v<version>-map.html`. On a push, copy the map into `versions/v<version>/mindmap.html` alongside the document snapshots.
- Keep short labels to 2-4 words; the full title goes in `full` and shows in the detail strip.
- To view a map, open the file in a browser, or serve the project with the `maps` config in `.claude/launch.json` (needs a real server, not `file://`, for the links to draw).

## Versioning (every push is a checkpoint)

- Every push into the main documents (adding or changing entries) is recorded as a version: 1.0 for the first push, then 1.1, 1.2, 1.3, and so on. Version numbers are never reused.
- On each push: save a full copy of objectives.md, problems.md, and solutions.md plus the mind map in `versions/v<number>/`, and add an entry to [versions/log.md](versions/log.md) with the version, date, its draft file, and what was pushed (IDs and titles).
- Never edit or delete a saved version.
- Each push is also a git commit tagged with its version (`v1.0`, `v1.1`, ...), containing the updated main documents, the version snapshot, the log, and the draft files. Push the commit and the tag to origin.
- Never rewrite git history or move or delete a version tag. A rollback is a new commit.
- To reverse a push (only when the user asks): restore the main documents from the previous version, copy the reversed entries into the active draft without IDs, and record the rollback in the log.

## Prototype first

- We build a prototype (POC) first. Do not build the actual platform or tool until the user confirms the prototype sufficiently covers the full project scope and solutions.
- Every feature in the prototype gets a small exclamation mark (!) marker. On hover it shows the feature's ID and name and its full chain up to the objective — every solution and sub-solution it serves, the problem(s) those serve, and the objective(s) those serve — so features can be traced all the way up in real time while using or testing the prototype.
- Only build features that exist in solutions.md with an ID and a complete chain up to an objective (see the rules above).
- What the prototype must show and how it is judged is in [prototype.md](prototype.md). Follow it.

## Analysis follows the same workflow

- Whenever the user shares any project information, assess it and organize it into objectives, problems, solutions, sub-solutions, and features.
- Stability decreases top to bottom: objectives rarely change, problems change occasionally, solutions more often, sub-solutions more, and features the most. Treat upper layers as stable anchors and lower layers as flexible; question a change to an upper layer before making it.
