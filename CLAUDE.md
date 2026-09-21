# Response Style

Keep all responses summarized, simple, straight to the point, clear, and easy to understand.

# Workflow Rules (strict)

All work follows this hierarchy, tracked in [objectives.md](objectives.md), [problems.md](problems.md), and [solutions.md](solutions.md):

```
Objective (O-001) > Problem (P-001) > Solution (S-001) > Sub-solution (S-001.1) > Feature (F-001)
```

- Every item has a unique ID and a "Serves" field pointing to its parent.
- Sub-solution IDs include the parent's ID (S-001.1, S-001.1.1).
- Features live in solutions.md under the solution or sub-solution they serve, and record their design location.
- An objective is done only when all its problems are solved.

## Always ask before adding anything

- **When given an idea:** ask which problem it solves and which objective that problem serves.
- **When asked to add a feature:** ask which solution or sub-solution it serves, which problem that belongs to, and which objective.
- If the problem, solution, or objective doesn't exist yet, draft it too. Parents must be in the main documents before their children.
- Never add an item to the main documents, or build a feature, without a complete chain up to an objective.
- Keep the active draft file and the main documents up to date as things change.

## Drafts first (strict)

- Anything discussed that could go into objectives.md, problems.md, or solutions.md (objectives, problems, solutions, sub-solutions, features), whether it comes from the user or from me, is written to the active draft file first.
- Each push has its own draft file in `drafts/`, named after the version it will become: `draft-v1.0.md`, then `draft-v1.1.md`, and so on. The active draft is the one for the next version to be pushed (currently [drafts/draft-v1.0.md](drafts/draft-v1.0.md)). Drafts are never combined into one document.
- Draft entries have no ID. Note the type and the likely parent as a suggestion only.
- Keep an "Overview tree" at the top of the active draft showing every entry and which one it serves (objective > problem > solution > sub-solution > feature). Update it whenever an entry is added, changed, or removed.
- Never move a draft into the main documents without the user's clear green light.
- On the green light (a push): add the approved entries to the right main document, assign their IDs, set their "Serves" parent, and record the push as a new version (see below). The draft file is then finished: mark its status as pushed with the date and never edit it again. Entries that were not approved move to a new draft file for the next version, and anything discussed after the push goes there too.

## Versioning (every push is a checkpoint)

- Every push into the main documents (adding or changing entries) is recorded as a version: 1.0 for the first push, then 1.1, 1.2, 1.3, and so on. Version numbers are never reused.
- On each push: save a full copy of objectives.md, problems.md, and solutions.md in `versions/v<number>/`, and add an entry to [versions/log.md](versions/log.md) with the version, date, its draft file, and what was pushed (IDs and titles).
- Never edit or delete a saved version.
- Each push is also a git commit tagged with its version (`v1.0`, `v1.1`, ...), containing the updated main documents, the version snapshot, the log, and the draft files. Push the commit and the tag to origin.
- Never rewrite git history or move or delete a version tag. A rollback is a new commit.
- To reverse a push (only when the user asks): restore the main documents from the previous version, copy the reversed entries into the active draft without IDs, and record the rollback in the log.

## Prototype first

- We build a prototype (POC) first. Do not build the actual platform or tool until the user confirms the prototype sufficiently covers the full project scope and solutions.
- Every feature in the prototype gets a small exclamation mark (!) marker. On hover it shows the feature's ID and name and the solution (and sub-solution) it belongs to, so features can be traced in real time while using or testing the prototype.
- Only build features that exist in solutions.md with an ID and a complete chain up to an objective (see the rules above).

## Analysis follows the same workflow

- Whenever the user shares any project information, assess it and organize it into objectives, problems, solutions, sub-solutions, and features.
- Stability decreases top to bottom: objectives rarely change, problems change occasionally, solutions more often, sub-solutions more, and features the most. Treat upper layers as stable anchors and lower layers as flexible; question a change to an upper layer before making it.
