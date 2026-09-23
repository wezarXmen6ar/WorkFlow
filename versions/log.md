# Version log

One entry per push, oldest first, written by `python workflow/tool.py record-push`. Each `versions/vX/` folder holds that version: the plan as pushed, its map, the draft that proposed it, and the prototype built for it.

Never edit or delete an entry. The only lines that change afterwards: `save-prototype` fills in the Prototype line, and a reversed version gets its Rollback line filled in.

**Entry format**

```
## v0.1 (YYYY-MM-DD)
- Draft: versions/v0.1/draft-v0.1.md
- Note: (optional) what this version is about
- Added: IDs and titles
- Amended: IDs and titles
- Retired: IDs and titles
- Prototype: not saved yet | saved on YYYY-MM-DD
- Rollback: none | reversed on YYYY-MM-DD, restored from v0.x
```

---

## v0.1 (2026-09-22)
- Draft: drafts/v0.1/draft-v0.1.md
- Pushed:
  - Objectives: O-001 Manage all department projects in one place; O-002 Present accurate project status to stakeholders; O-003 Document everything about each project; O-004 Protect the team from scope creep and project pressure
  - Problems: P-001 No tool to create and manage projects; P-002 No department-wide view of all projects; P-003 Hard to see what each team member is working on; P-004 No single source of truth for project status; P-005 Stakeholders can't be shown only what concerns them; P-006 Project files and context depend on each project manager; P-007 No history log for projects; P-008 Requirements keep being added with no visible cost; P-009 Stakeholders don't see the pile-up of concurrent projects; P-010 The cost of priority shifts is invisible
  - Solutions: S-001 Landing page; S-002 Create and manage projects; S-003 Project manager home dashboard
  - Sub-solutions: S-002.1 Project phases; S-003.1 At-a-glance project status
  - Features: F-001 Identify the visitor by role; F-002 Route project manager to their dashboard; F-003 Placeholder for other roles; F-004 Create a project — core details; F-005 Definition tables: scope, problem statements, objectives; F-006 Timeline / phase builder
- Prototype: saved on 2026-09-23
- Rollback: none

## v0.1.1 (2026-09-23)
- Draft: versions/v0.1.1/draft-v0.1.1.md
- Note: Switch to the new workflow and folder structure; no content changes
- Added: none
- Amended: none
- Retired: none
- Prototype: not saved yet
- Rollback: none
