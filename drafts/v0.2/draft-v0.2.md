# Draft for v0.2

**Status:** Pending. Deferred until after v0.1 is pushed and its prototype slice is built; not the active draft.
**Map:** [draft-v0.2-map.html](draft-v0.2-map.html)

Staging area for anything discussed that could go into [objectives.md](../../objectives.md), [problems.md](../../problems.md), or [solutions.md](../../solutions.md).

Nothing here has an ID. Entries move to the main documents only after the user's green light, and get an ID and a "Serves" parent at that point. Once this draft is pushed, this file is finished and never edited again; anything new goes into the next draft file.

Each entry has one **home parent** (where it lives and where its ID comes from) and may **also serve** other parents. Nothing is duplicated: an idea is written once and referenced from every parent it serves.

Started as a full copy of [draft-v0.1.md](../v0.1/draft-v0.1.md), taken once the "Create and manage projects" form was fully specced with the user. Everything from that spec that didn't fit v0.1's narrowed scope — attachments, project updates, and main-project grouping — was kept here in full detail instead of being dropped, so nothing discussed is lost. These three overlap with solutions already drafted in [draft-v1.0.md](../v1.0/draft-v1.0.md) (Central project file repository / Attach documents to projects and phases, Project history log, Department portfolio view / Search and filter the project list); draft-v1.0.md was left untouched on purpose, and that overlap is reconciled when v1.0 is worked on.

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
 │   │   ├─ Feature: JIRA / PRJ reference number
 │   │   └─ Sub-solution: Project phases
 │   │       └─ Feature: Timeline / phase builder
 │   └─ Solution: Project manager home dashboard
 │       └─ Sub-solution: At-a-glance project status
 ├─ Problem: No department-wide view of all projects
 │   └─ Solution: Main-project grouping
 │       ├─ Feature: Standalone or part of a main project
 │       └─ Feature: Add a main project inline
 └─ Problem: Hard to see what each team member is working on

Objective: Present accurate project status to stakeholders
 ├─ Problem: No single source of truth for project status
 └─ Problem: Stakeholders can't be shown only what concerns them

Objective: Document everything about each project
 ├─ Problem: Project files and context depend on each project manager
 │   └─ Solution: Project attachments
 │       ├─ Feature: Attachment types
 │       ├─ Feature: Link attachment to a phase
 │       └─ Feature: Optional attachment date
 └─ Problem: No history log for projects
     └─ Solution: Project updates log
         ├─ Feature: Dated update entry
         └─ Feature: Newest-first ordering

Objective: Protect the team from scope creep and project pressure
 ├─ Problem: Requirements keep being added with no visible cost
 ├─ Problem: Stakeholders don't see the pile-up of concurrent projects
 └─ Problem: The cost of priority shifts is invisible
```

"No department-wide view of all projects" now has a lightweight solution — the main-project grouping tag. The full "Department portfolio view" stays deferred in draft-v1.0.md.

**Links not shown above, added later:** this item will also serve a solution that is still in [draft-v1.0.md](../v1.0/draft-v1.0.md) (not yet built). That "also serves" link gets added once v1.0 is pushed:
- Project phases → will also serve "Live project status timeline"

## Also serves

Eight entries serve more than one parent.

| Entry | Also serves |
|---|---|
| Hard to see what each team member is working on | Objective: Protect the team from scope creep and project pressure |
| No single source of truth for project status | Objective: Manage all department projects in one place |
| Stakeholders don't see the pile-up of concurrent projects | Objective: Present accurate project status to stakeholders |
| No history log for projects | Objective: Protect the team from scope creep and project pressure |
| Project manager home dashboard | Problem: Hard to see what each team member is working on |
| Route project manager to their dashboard | Solution: Project manager home dashboard |
| Create and manage projects | Problem: Project files and context depend on each project manager |
| Project attachments | Problem: No history log for projects |

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

### JIRA / PRJ reference number
- Type: Feature
- Description: A free-text field on the create-project form to store the project's JIRA/PRJ reference number, for reference only — no integration, no pulled status. Distinct from "Jira link for deployment and security testing" (see draft-v1.0.md), which pulls status for those two phases.
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

### Main-project grouping
- Type: Solution
- Description: A lightweight grouping tag so projects can be filed under a shared "main project" and filtered together later. Not a program roll-up view — that stays with "Department portfolio view" (see draft-v1.0.md) if and when it's built.
- Home parent (suggestion only): Problem "No department-wide view of all projects"
- Also serves (suggestion only): none
- Open questions: none

### Standalone or part of a main project
- Type: Feature
- Description: At the top of the create-project form, the project manager chooses whether the project is standalone or part of a main project. If part of one, they pick it from a dropdown.
- Home parent (suggestion only): Solution "Main-project grouping"
- Also serves (suggestion only): none
- Open questions: none

### Add a main project inline
- Type: Feature
- Description: If the main project doesn't yet exist in the dropdown, it can be added to the list right there, on the spot, without leaving the form.
- Home parent (suggestion only): Solution "Main-project grouping"
- Also serves (suggestion only): none
- Open questions: none

### Project attachments
- Type: Solution
- Description: An attachments table on the create/manage project screen. Add a file, choose what it is from a dropdown, optionally link it to a phase, optionally give it a date. Each added attachment appears as a row in the table.
- Home parent (suggestion only): Problem "Project files and context depend on each project manager"
- Also serves (suggestion only): Problem "No history log for projects" — every attachment, with its date, is part of the project's record.
- Open questions: none

### Attachment types
- Type: Feature
- Description: A dropdown of what the attachment is, seeded with types generic to IT projects: BRD, analysis document, CR, CR approval, RFP, RFI, meeting minutes. Extensible.
- Home parent (suggestion only): Solution "Project attachments"
- Also serves (suggestion only): none
- Open questions: none

### Link attachment to a phase
- Type: Feature
- Description: When adding an attachment, it can optionally be linked to one of the project's phases — for example, the BA analysis document linked to the analysis phase.
- Home parent (suggestion only): Solution "Project attachments"
- Also serves (suggestion only): none
- Open questions: none

### Optional attachment date
- Type: Feature
- Description: When adding an attachment, a date can optionally be given for it — when it was created or officially approved, not necessarily when it was uploaded. This date is what places it on the timeline.
- Home parent (suggestion only): Solution "Project attachments"
- Also serves (suggestion only): none
- Open questions: none

### Project updates log
- Type: Solution
- Description: An updates table on the create/manage project screen. The project manager picks a date, writes the update in a text box, optionally attaches a file, and adds it to the table.
- Home parent (suggestion only): Problem "No history log for projects"
- Also serves (suggestion only): none
- Open questions: none

### Dated update entry
- Type: Feature
- Description: Each update is a date, a free-text update, and an optional attachment, added with one click.
- Home parent (suggestion only): Solution "Project updates log"
- Also serves (suggestion only): none
- Open questions: none

### Newest-first ordering
- Type: Feature
- Description: The updates table is ordered by the update's own date, not by the order they were entered — latest to oldest.
- Home parent (suggestion only): Solution "Project updates log"
- Also serves (suggestion only): none
- Open questions: none
