# Draft for v0.1.1

**Status:** Active. This draft will be pushed as v0.1.1.
**Map:** [draft-v0.1.1-map.html](draft-v0.1.1-map.html)

Staging area for anything discussed that could go into [objectives.md](../objectives.md), [problems.md](../problems.md), or [solutions.md](../solutions.md).

Unlike draft-v0.1.md and draft-v0.2.md, this draft is not a slice of new scope — it's small fixes and additions to items **already pushed** as v0.1, found while building and reviewing the v0.1 prototype. draft-v0.1.md is finished and is never edited again, so anything that changes what it already pushed goes here instead, gets reviewed, and is pushed as its own version (v0.1.1) when confirmed.

New items here have no ID yet, same as any draft. Items that amend an *already-pushed* entry are marked "Amends" and referenced by their real ID (S-002.1, etc.) — the amendment updates that entry in place on push; it doesn't create a new ID.

**Entry format**

```
### Title
- Type: Objective | Problem | Solution | Sub-solution | Feature | Amendment
- Description:
- Home parent (suggestion only): [new entries only]
- Amends: [amendments only — the real ID and title being changed]
- Also serves (suggestion only):
- Open questions:
```

---

## Overview tree

```
Objective: Manage all department projects in one place
 └─ Problem: No tool to create and manage projects
     └─ Solution: Create and manage projects (S-002)
         ├─ Feature: Project status and hold reason (NEW)
         ├─ Feature: Open and edit a project (NEW)
         └─ Sub-solution: Project phases (S-002.1) — AMENDED
             └─ Feature: Timeline / phase builder (F-006) — AMENDED
```

## Entries

### Project status and hold reason
- Type: Feature
- Description: The create/manage screen lets the project manager set and change the project's status: planned, active, on hold, or launched — the four states already named in S-002's own description, not yet captured as an actual field anywhere. Choosing "on hold" requires a reason: waiting for business approval, waiting for a requirement, resources pulled to another project, or another. The status, and — if on hold — the reason and days on hold, are what "At-a-glance project status" (S-003.1) reads to build the dashboard's status line.
- Home parent (suggestion only): Solution "Create and manage projects" (S-002)
- Also serves (suggestion only): none
- Open questions: When status is set to "on hold," is the reason picked from that fixed list only, or can a custom reason be added inline the same way a department can be? How does this relate to the new "Hold" phase below — does adding a Hold block to the timeline set this status automatically, or are the two entered independently?

### Project phases — amendment
- Type: Amendment
- Amends: Sub-solution "Project phases" (S-002.1)
- Description: Two changes to the known phase list and its rules:
  1. Add **Hold** to the known phase list, so a hold period can be represented directly as its own block on the phase timeline (in addition to, and separate from, the project-level status above).
  2. Drop the "Security testing and deployment are mandatory in the department's process" line. Every project picks and orders its own phases freely — nothing is forced. (This also resolves S-002.1's old open question about flagging a missing mandatory phase: there is no such flag, by design.)
- Also serves (suggestion only): none
- Open questions: Same relationship question as above — is the Hold phase block just a visual/timeline device, or does placing one also drive the project's status field, or vice versa?

### Timeline / phase builder — amendment
- Type: Amendment
- Amends: Feature "Timeline / phase builder" (F-006)
- Description: When a start date is set, the end date is automatically calculated as start date + the summed planned work-days of every phase added, and shown live. If the project manager also entered their own end date, both show side by side: the end date they chose, and the calculated end date the current phase plan works out to. This recalculates continuously whenever a phase is added, edited (work-days changed), reordered, or removed — during creation and later, whenever the phase plan is edited (see "Open and edit a project" below).

  This is distinct from S-002.1's existing rule that "the project's end date never moves automatically when a phase takes fewer or more days than planned" — that rule protects the *committed* end date from drifting once a project is underway and a phase runs long or short in practice. The calculation here is a planning aid built from the *planned* phase work-days; it never overwrites the project manager's own chosen end date, it's just shown alongside it.
- Also serves (suggestion only): none
- Open questions: none

### Open and edit a project
- Type: Feature
- Description: Clicking a project on the project manager home dashboard opens it into the same fields used to create it — core details, definition tables, and phases/timeline (including the live end-date calculation above) — pre-filled with what's there, editable by the project manager. Saving updates the project in place. This is what makes S-002's own description ("managed here: progress, changes, and launch... some fields can be edited after creation") actually reachable after a project exists, not only at creation.
- Home parent (suggestion only): Solution "Create and manage projects" (S-002)
- Also serves (suggestion only): none
- Open questions: S-002's original description says "some fields can be edited after creation" (implying others are locked) and that every edit is recorded in the project's history log — but which fields lock, and the history log itself (Project history log, v1.0), aren't decided/built yet. Until that's resolved, the simplest default is everything stays editable here, with locking and edit-history left for later.
