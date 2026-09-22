# Draft for v0.1

**Status:** Pushed as v0.1 on 2026-09-22. This file is finished and is never edited again — see [objectives.md](../../objectives.md), [problems.md](../../problems.md), [solutions.md](../../solutions.md), and [versions/v0.1/](../../versions/v0.1/).
**Map:** [draft-v0.1-map.html](draft-v0.1-map.html)

Staging area for anything discussed that could go into [objectives.md](../../objectives.md), [problems.md](../../problems.md), or [solutions.md](../../solutions.md).

Nothing here has an ID. Entries move to the main documents only after the user's green light, and get an ID and a "Serves" parent at that point. Once this draft is pushed, this file is finished and never edited again; anything new goes into the next draft file.

Each entry has one **home parent** (where it lives and where its ID comes from) and may **also serve** other parents. Nothing is duplicated: an idea is written once and referenced from every parent it serves.

Started as the full objectives and problems (carried over from [draft-v1.0.md](../v1.0/draft-v1.0.md), unchanged), then a first slice of solutions was chosen together, then narrowed to a tighter scope: enough to land in the tool, create a project, and see it on a personal dashboard — one coherent chain, nothing half-built. Resource assignment and phase progress reporting were cut from this scope and moved to [draft-v1.0.md](../v1.0/draft-v1.0.md).

**Entry format**

```
### Title
- Type: Objective | Problem | Solution | Sub-solution | Feature
- Description:
- Home parent (suggestion only):
- Also serves (suggestion only):
- Open questions:
```

---

## Overview tree

Home parents only. The "also serves" links are listed after the tree.

```
Objective: Manage all department projects in one place
 ├─ Problem: No tool to create and manage projects
 │   ├─ Solution: Landing page
 │   │   ├─ Feature: Identify the visitor by role
 │   │   ├─ Feature: Route project manager to their dashboard
 │   │   └─ Feature: Placeholder for other roles
 │   ├─ Solution: Create and manage projects
 │   │   ├─ Feature: Create a project — core details
 │   │   ├─ Feature: Definition tables: scope, problem statements, objectives
 │   │   └─ Sub-solution: Project phases
 │   │       └─ Feature: Timeline / phase builder
 │   └─ Solution: Project manager home dashboard
 │       └─ Sub-solution: At-a-glance project status
 ├─ Problem: No department-wide view of all projects
 └─ Problem: Hard to see what each team member is working on

Objective: Present accurate project status to stakeholders
 ├─ Problem: No single source of truth for project status
 └─ Problem: Stakeholders can't be shown only what concerns them

Objective: Document everything about each project
 ├─ Problem: Project files and context depend on each project manager
 └─ Problem: No history log for projects

Objective: Protect the team from scope creep and project pressure
 ├─ Problem: Requirements keep being added with no visible cost
 ├─ Problem: Stakeholders don't see the pile-up of concurrent projects
 └─ Problem: The cost of priority shifts is invisible
```

"No department-wide view of all projects" has no solution yet — "Department portfolio view" stays deferred in draft-v1.0.md for now.

**Links not shown above, added later:** this item will also serve a solution that is still in [draft-v1.0.md](../v1.0/draft-v1.0.md) (not yet built). That "also serves" link gets added once v1.0 is pushed:
- Project phases → will also serve "Live project status timeline"

## Also serves

Seven entries serve more than one parent.

| Entry | Also serves |
|---|---|
| Hard to see what each team member is working on | Objective: Protect the team from scope creep and project pressure |
| No single source of truth for project status | Objective: Manage all department projects in one place |
| Stakeholders don't see the pile-up of concurrent projects | Objective: Present accurate project status to stakeholders |
| No history log for projects | Objective: Protect the team from scope creep and project pressure |
| Project manager home dashboard | Problem: Hard to see what each team member is working on |
| Route project manager to their dashboard | Solution: Project manager home dashboard |
| Create and manage projects | Problem: Project files and context depend on each project manager |

## Objectives

### Manage all department projects in one place
- Type: Objective
- Description: One tool to manage every project the department has worked on, is working on, and will work on, including the yearly plan and the big picture.
- Home parent (suggestion only): none (top layer)
- Also serves (suggestion only): none
- Open questions: none

### Present accurate project status to stakeholders
- Type: Objective
- Description: Show stakeholders, decision makers, and business users the real status of projects from one source, and show the team's hard work.
- Home parent (suggestion only): none (top layer)
- Also serves (suggestion only): none
- Open questions: none

### Document everything about each project
- Type: Objective
- Description: Keep all project documents, context, and history in one place so anyone can take over a project.
- Home parent (suggestion only): none (top layer)
- Also serves (suggestion only): none
- Open questions: none

### Protect the team from scope creep and project pressure
- Type: Objective
- Description: Make the cost of new requirements, new priorities, and project pile-up visible to stakeholders and decision makers.
- Home parent (suggestion only): none (top layer)
- Also serves (suggestion only): none
- Open questions: none

## Problems

### No tool to create and manage projects
- Type: Problem
- Description: The department has no tool to create a project and manage it through its life. Today this is done in Excel and by hand.
- Home parent (suggestion only): Objective "Manage all department projects in one place"
- Also serves (suggestion only): none
- Open questions: none

### No department-wide view of all projects
- Type: Problem
- Description: Past, current, and planned projects are not visible in one place, so planning the year by quarter and seeing the big picture is hard.
- Home parent (suggestion only): Objective "Manage all department projects in one place"
- Also serves (suggestion only): none
- Open questions: none

### Hard to see what each team member is working on
- Type: Problem
- Description: It is difficult to keep up with what developers, business analysts, tech leads, and project managers are working on.
- Home parent (suggestion only): Objective "Manage all department projects in one place"
- Also serves (suggestion only): Objective "Protect the team from scope creep and project pressure" — the pile-up and the price of a change cannot be shown without knowing who is on what.
- Open questions: none

### No single source of truth for project status
- Type: Problem
- Description: Presentations are prepared manually, differ by preparer, and sometimes conflict. Finished projects get reported as unfinished because there is no central status.
- Home parent (suggestion only): Objective "Present accurate project status to stakeholders"
- Also serves (suggestion only): Objective "Manage all department projects in one place"
- Open questions: none

### Stakeholders can't be shown only what concerns them
- Type: Problem
- Description: Project information is a mix of what concerns stakeholders (status, what is waiting on them, decisions that affect their project) and what does not (internal team work, internal notes). With no way to choose, stakeholders either see everything, which overwhelms them and loses the simplicity, or too little.
- Home parent (suggestion only): Objective "Present accurate project status to stakeholders"
- Also serves (suggestion only): none
- Open questions: none

### Project files and context depend on each project manager
- Type: Problem
- Description: Files, context, and history rely on each project manager's own organization, so handover during leave is unreliable.
- Home parent (suggestion only): Objective "Document everything about each project"
- Also serves (suggestion only): none
- Open questions: none

### No history log for projects
- Type: Problem
- Description: Nothing records what happened to a project and when: when a requirement was given, when a change request was approved, when a hold was ordered and approved. Official documents and letters about a project (updates, approvals, orders) have nowhere to be stored with their dates.
- Home parent (suggestion only): Objective "Document everything about each project"
- Also serves (suggestion only): Objective "Protect the team from scope creep and project pressure" — a dated record is the evidence when scope or delays are questioned.
- Open questions: none

### Requirements keep being added with no visible cost
- Type: Problem
- Description: Business users and decision makers add requirements mid-project without seeing the cost to the timeline, yet still expect the agreed due date.
- Home parent (suggestion only): Objective "Protect the team from scope creep and project pressure"
- Also serves (suggestion only): none
- Open questions: none

### Stakeholders don't see the pile-up of concurrent projects
- Type: Problem
- Description: Business users and decision makers expect many projects to run at once without realizing the pressure and accumulation.
- Home parent (suggestion only): Objective "Protect the team from scope creep and project pressure"
- Also serves (suggestion only): Objective "Present accurate project status to stakeholders" — showing the pile-up is part of showing the real picture.
- Open questions: none

### The cost of priority shifts is invisible
- Type: Problem
- Description: When a new high-priority project pulls resources from a running one, stakeholders don't see the price of that decision and still expect the old project on time.
- Home parent (suggestion only): Objective "Protect the team from scope creep and project pressure"
- Also serves (suggestion only): none
- Open questions: none

## Solutions and sub-solutions

### Landing page
- Type: Solution
- Description: The first screen anyone sees when they open the tool. It reads who is signed in and routes them straight to what matters to them — a project manager to "Project manager home dashboard"; other roles to their own view once those exist. There is no shared, generic home screen to sit through first.
- Home parent (suggestion only): Problem "No tool to create and manage projects"
- Also serves (suggestion only): none
- Open questions: For v0.1, only the project-manager route has a real destination built. Other roles' routes stay placeholders until their views exist (see draft-v1.0.md).

### Identify the visitor by role
- Type: Feature
- Description: The landing page shows a role picker. Clicking a role signs the visitor in as that role for the session — the prototype's stand-in for real authentication. The full role list and what each role can do is defined in "Access by role and owning general department" (see draft-v1.0.md); for v0.1 only "Project manager" is a real, functional choice.
- Home parent (suggestion only): Solution "Landing page"
- Also serves (suggestion only): none
- Open questions: none

### Route project manager to their dashboard
- Type: Feature
- Description: Clicking "Project manager" on the role picker routes straight to "Project manager home dashboard".
- Home parent (suggestion only): Solution "Landing page"
- Also serves (suggestion only): Solution "Project manager home dashboard" — this is the feature's destination.
- Open questions: none

### Placeholder for other roles
- Type: Feature
- Description: Clicking any role other than "Project manager" shows a placeholder screen, not a real view — acknowledges the choice without functionality, since only the project-manager route has a built destination in v0.1.
- Home parent (suggestion only): Solution "Landing page"
- Also serves (suggestion only): none
- Open questions: none

### Create and manage projects
- Type: Solution
- Description: One place where the project manager creates a project and manages it through its life. Creating a project sets its name, owning general department, business and GDAI project managers, start quarter (no end date needed yet), and phases with planned time frames. From then on the project is managed here: progress, changes, and launch. A project is always in one of four states: planned (with a future start date, or with no start date because no decision to start has been made yet), active, on hold, or launched. A project on hold always has a reason: waiting for business approval, waiting for a requirement, resources pulled to another project, or another reason. The reason and the days on hold show on the timeline. Some fields can be edited after creation; every edit is recorded in the project's history log. A launched project is done — on the year-long department-wide view it is marked as finished, distinct from active and planned projects.
- Home parent (suggestion only): Problem "No tool to create and manage projects"
- Also serves (suggestion only): Problem "Project files and context depend on each project manager" — the core details and definition tables (background, summary, scope, problem statements, objectives) capture project context centrally instead of relying on each PM's own files; this routes the solution up to the objective "Document everything about each project".
- Open questions: Team assignment ("Resource pool", "Assign resources to phases") is out of scope for v0.1 (see draft-v1.0.md) — the create form does not assign a team yet.

### Create a project — core details
- Type: Feature
- Description: The create-project form's core fields: project name; start date and end date (both optional); categorization (strategic or operational); project category (criminal, customer, or management — a fixed list, no custom values); goal (digitalization of internal operations, or other); requested — internal, external, or both (checkboxes); business user, which is the owning general department (dropdown; a new department can be added to the list inline); beneficiary (employees or customers); background (text); summary (text).
- Home parent (suggestion only): Solution "Create and manage projects"
- Also serves (suggestion only): none
- Open questions: none

### Definition tables: scope, problem statements, objectives
- Type: Feature
- Description: Three add-to-table lists on the create-project form. Each is a text box with an "Add" button: scope points are added as a numbered list (1, 2, 3…); problem statements and objectives are each added the same way, free text per entry, as many as needed.
- Home parent (suggestion only): Solution "Create and manage projects"
- Also serves (suggestion only): none
- Open questions: none

### Project phases
- Type: Sub-solution
- Description: Phases are fully flexible: nothing is always the same, and a small project can skip some. When creating a project, the project manager adds its phases and a planned time frame for each (for example, analysis: five days). Each project picks and orders its own phases (and can add custom ones), and the timeline shows them. The project's end date never moves automatically when a phase takes fewer or more days than planned. Known phases: requirements gathering, BA analysis document (approved by the business user), development planning (optional; sets the timeline and end date), development, UAT, security testing, deployment, pilot on a small sample. Security testing and deployment are mandatory in the department's process.
- Home parent (suggestion only): Solution "Create and manage projects" — moved here from "Live project status timeline": phases are set when the project is created, which fits this solution better. Will also serve "Live project status timeline" once that solution is pushed (see draft-v1.0.md).
- Also serves (suggestion only): none yet
- Open questions: Should the tool flag a project that has no security testing or deployment phase, or stay silent?

### Timeline / phase builder
- Type: Feature
- Description: While creating or editing a project, phases are added as blocks chosen from "Project phases"'s known list (or a custom one) and shown as colored bars on a horizontal timeline. Each phase optionally takes a planned number of work days. The timeline's axis uses the project's start and end dates if they were set; otherwise it is built from the summed work-days of the phases added; if neither is available, it stays empty.
- Home parent (suggestion only): Sub-solution "Project phases"
- Also serves (suggestion only): none
- Open questions: none

### Project manager home dashboard
- Type: Solution
- Description: Reached through the tool's "Landing page" once it identifies the visitor as a project manager. They land on a personal dashboard listing every project they currently manage. It is a page the project manager chooses to open, so it sits beside "Project health, quiet by default" rather than against it: nothing here is pushed to them, they see it because they came to look.
- Home parent (suggestion only): Problem "No tool to create and manage projects"
- Also serves (suggestion only): Problem "Hard to see what each team member is working on" — this is how a project manager keeps track of their own work across projects.
- Open questions: none

### At-a-glance project status
- Type: Sub-solution
- Description: Each project on the dashboard shows its most recent and most important action, whether it is close to finishing its current phase or close to starting the next one, and — if it is on hold — how many days it has been on hold and whether releasing it needs an action from the project manager, read from the hold's reason.
- Home parent (suggestion only): Solution "Project manager home dashboard"
- Also serves (suggestion only): none yet — will also serve "Live project status timeline" once that solution is pushed (see draft-v1.0.md).
- Open questions: How is "most important" decided — a fixed rule, or does the project manager set it?

