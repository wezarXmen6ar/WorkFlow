# Draft for v1.0

**Status:** Active. This draft will be pushed as v1.0.
**Map:** [draft-v1.0-map.html](draft-v1.0-map.html)

Staging area for anything discussed that could go into [objectives.md](../objectives.md), [problems.md](../problems.md), or [solutions.md](../solutions.md).

Nothing here has an ID. Entries move to the main documents only after the user's green light, and get an ID and a "Serves" parent at that point. Once this draft is pushed, this file is finished and never edited again; anything new goes into the next draft file.

Each entry has one **home parent** (where it lives and where its ID comes from) and may **also serve** other parents. Nothing is duplicated: an idea is written once and referenced from every parent it serves.

Started as the full objectives and problems (carried over from [draft-v1.1.md](draft-v1.1.md), unchanged), then the first slice of solutions was chosen together: enough to create a project, see who's working on it, and report progress on it — one coherent chain, nothing half-built.

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
 │   ├─ Solution: Create and manage projects
 │   │   └─ Sub-solution: Project phases
 │   └─ Solution: Project manager home dashboard
 │       └─ Sub-solution: At-a-glance project status
 ├─ Problem: No department-wide view of all projects
 └─ Problem: Hard to see what each team member is working on
     ├─ Solution: Resource assignment and workload tracking
     │   ├─ Sub-solution: Resource pool
     │   └─ Sub-solution: Assign resources to phases
     └─ Solution: Phase progress reporting
         └─ Sub-solution: Project manager approval of progress

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

"No department-wide view of all projects" has no solution yet — "Department portfolio view" stays deferred in draft-v1.1.md for now.

**Links not shown above, added later:** a few of these items will also serve solutions that are still in [draft-v1.1.md](draft-v1.1.md) (not yet built). Those "also serves" links get added once v1.1 is pushed:
- Project phases → will also serve "Live project status timeline"
- Resource pool → will also serve "Workload indicator on the department-wide view" and "Show the price of a change across all projects before it is confirmed"
- Assign resources to phases → will also serve the same two
- Project manager approval of progress → will also serve "Live project status timeline"

## Also serves

Eight entries serve more than one parent.

| Entry | Also serves |
|---|---|
| Hard to see what each team member is working on | Objective: Protect the team from scope creep and project pressure |
| No single source of truth for project status | Objective: Manage all department projects in one place |
| Stakeholders don't see the pile-up of concurrent projects | Objective: Present accurate project status to stakeholders |
| No history log for projects | Objective: Protect the team from scope creep and project pressure |
| Project manager home dashboard | Problem: Hard to see what each team member is working on |
| Resource assignment and workload tracking | Problems: Stakeholders don't see the pile-up of concurrent projects; The cost of priority shifts is invisible |
| Phase progress reporting | Problem: No single source of truth for project status |
| Assign resources to phases | Solution: Create and manage projects |

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

### Create and manage projects
- Type: Solution
- Description: One place where the project manager creates a project and manages it through its life. Creating a project sets its name, owning general department, business and GDAI project managers, start quarter (no end date needed yet), phases with planned time frames, and the assigned team. From then on the project is managed here: progress, changes, and launch. A project is always in one of four states: planned (with a future start date, or with no start date because no decision to start has been made yet), active, on hold, or launched. A project on hold always has a reason: waiting for business approval, waiting for a requirement, resources pulled to another project, or another reason. The reason and the days on hold show on the timeline. Some fields can be edited after creation; every edit is recorded in the project's history log. A launched project is done — on the year-long department-wide view it is marked as finished, distinct from active and planned projects.
- Home parent (suggestion only): Problem "No tool to create and manage projects"
- Also serves (suggestion only): none
- Open questions: none

### Project phases
- Type: Sub-solution
- Description: Phases are fully flexible: nothing is always the same, and a small project can skip some. When creating a project, the project manager adds its phases and a planned time frame for each (for example, analysis: five days). Each project picks and orders its own phases (and can add custom ones), and the timeline shows them. The project's end date never moves automatically when a phase takes fewer or more days than planned. Known phases: requirements gathering, BA analysis document (approved by the business user), development planning (optional; sets the timeline and end date), development, UAT, security testing, deployment, pilot on a small sample. Security testing and deployment are mandatory in the department's process.
- Home parent (suggestion only): Solution "Create and manage projects" — moved here from "Live project status timeline": phases are set when the project is created, which fits this solution better. Will also serve "Live project status timeline" once that solution is pushed (see draft-v1.1.md).
- Also serves (suggestion only): none yet
- Open questions: Should the tool flag a project that has no security testing or deployment phase, or stay silent?

### Project manager home dashboard
- Type: Solution
- Description: When a project manager opens the tool, they land on a personal dashboard listing every project they currently manage. It is a page the project manager chooses to open, so it sits beside "Project health, quiet by default" rather than against it: nothing here is pushed to them, they see it because they came to look.
- Home parent (suggestion only): Problem "No tool to create and manage projects"
- Also serves (suggestion only): Problem "Hard to see what each team member is working on" — this is how a project manager keeps track of their own work across projects.
- Open questions: none

### At-a-glance project status
- Type: Sub-solution
- Description: Each project on the dashboard shows its most recent and most important action, whether it is close to finishing its current phase or close to starting the next one, and — if it is on hold — how many days it has been on hold and whether releasing it needs an action from the project manager, read from the hold's reason.
- Home parent (suggestion only): Solution "Project manager home dashboard"
- Also serves (suggestion only): none yet — will also serve "Live project status timeline" once that solution is pushed (see draft-v1.1.md).
- Open questions: How is "most important" decided — a fixed rule, or does the project manager set it?

### Resource assignment and workload tracking
- Type: Solution
- Description: Record which resources (developers, business analysts, tech leads, project managers) are assigned to which projects.
- Home parent (suggestion only): Problem "Hard to see what each team member is working on"
- Also serves (suggestion only): Problems "Stakeholders don't see the pile-up of concurrent projects" and "The cost of priority shifts is invisible" — both are calculated from this data.
- Open questions: none

### Resource pool
- Type: Sub-solution
- Description: All team members are kept in a resource pool: developers, business analysts, tech leads, and project managers. The user assigns them to projects for a time frame, so it is clear who is on what and when.
- Home parent (suggestion only): Solution "Resource assignment and workload tracking"
- Also serves (suggestion only): none yet — will also serve "Workload indicator on the department-wide view" and "Show the price of a change across all projects before it is confirmed" once those solutions are pushed (see draft-v1.1.md).
- Open questions: none

### Assign resources to phases
- Type: Sub-solution
- Description: Resources are assigned not only to a project but to its phases: developers to the development phase, BAs to the analysis phase, and so on. Each phase has a planned time frame, and the days the person reports (confirmed by the project manager) are the exact time they actually worked on the project.
- Home parent (suggestion only): Solution "Resource assignment and workload tracking"
- Also serves (suggestion only): Solution "Create and manage projects" — the team assigned at creation is the same pool assigned to phases. Depends on "Resource pool" and "Project phases", both in this draft. Will also serve "Workload indicator on the department-wide view" and "Show the price of a change across all projects before it is confirmed" once those solutions are pushed (see draft-v1.1.md).
- Open questions: none

### Phase progress reporting
- Type: Solution
- Description: Whoever is assigned to a phase reports on it: the days they actually spent and when the phase is done (for example, analysis planned for five days, the analyst reports three and marks it done). Developers report progress on the development phase as a share of the whole development (for example, a finished task worth 10%). Applies to every phase. Progress counts only after the project manager confirms it.
- Home parent (suggestion only): Problem "Hard to see what each team member is working on"
- Also serves (suggestion only): Problem "No single source of truth for project status" — this is what keeps the status current.
- Open questions: none

### Project manager approval of progress
- Type: Sub-solution
- Description: A team member's report on a phase (for example the analyst's three days, or a finished task worth 10% of development) is not counted until the project manager confirms it. Only confirmed progress moves the project's status. The project manager can also enter the report directly on the team member's behalf, for example when the information comes to them verbally.
- Home parent (suggestion only): Solution "Phase progress reporting"
- Also serves (suggestion only): none yet — will also serve "Live project status timeline" once that solution is pushed (see draft-v1.1.md).
- Open questions: Who splits the development into weighted tasks (for example a task worth 10%), and when? The project manager at development planning?
