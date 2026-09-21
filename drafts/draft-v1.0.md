# Draft for v1.0

**Status:** Active. This draft will be pushed as v1.0.
**Map:** [draft-v1.0-map.html](draft-v1.0-map.html)

Staging area for anything discussed that could go into [objectives.md](../objectives.md), [problems.md](../problems.md), or [solutions.md](../solutions.md).

Nothing here has an ID. Entries move to the main documents only after the user's green light, and get an ID and a "Serves" parent at that point. Once this draft is pushed, this file is finished and never edited again; anything new goes into the next draft file.

Each entry has one **home parent** (where it lives and where its ID comes from) and may **also serve** other parents. Nothing is duplicated: an idea is written once and referenced from every parent it serves.

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
 ├─ Problem: No department-wide view of all projects
 │   └─ Solution: Department portfolio view
 │       ├─ Sub-solution: Yearly plan by quarter
 │       └─ Sub-solution: Import existing Excel data
 └─ Problem: Hard to see what each team member is working on
     ├─ Solution: Resource assignment and workload tracking
     │   ├─ Sub-solution: Resource pool
     │   └─ Sub-solution: Assign resources to phases
     └─ Solution: Phase progress reporting
         └─ Sub-solution: Project manager approval of progress

Objective: Present accurate project status to stakeholders
 └─ Problem: No single source of truth for project status
     └─ Solution: Live project status timeline
         ├─ Sub-solution: Project phases
         ├─ Sub-solution: Jira link for deployment and security testing
         └─ Sub-solution: Access by role and owning general department

Objective: Document everything about each project
 └─ Problem: Project files and context depend on each project manager
     └─ Solution: Central project file repository

Objective: Protect the team from scope creep and project pressure
 ├─ Problem: Requirements keep being added with no visible cost
 │   └─ Solution: Show the impact of new requirements before work starts
 │       ├─ Sub-solution: Log a new requirement with its estimated development days
 │       └─ Sub-solution: Highlight the impact
 ├─ Problem: Stakeholders don't see the pile-up of concurrent projects
 │   └─ Solution: Workload indicator on the department-wide view
 └─ Problem: The cost of priority shifts is invisible
     └─ Solution: Show the price of a change across all projects before it is confirmed
         ├─ Sub-solution: Automatic pull and delay calculation
         └─ Sub-solution: Price shown, confirm before applying
```

## Also serves

Fourteen entries serve more than one parent.

| Entry | Also serves |
|---|---|
| Hard to see what each team member is working on | Objective: Protect the team from scope creep and project pressure |
| No single source of truth for project status | Objective: Manage all department projects in one place |
| Stakeholders don't see the pile-up of concurrent projects | Objective: Present accurate project status to stakeholders |
| Department portfolio view | Problem: Stakeholders don't see the pile-up of concurrent projects |
| Resource assignment and workload tracking | Problems: Stakeholders don't see the pile-up; The cost of priority shifts is invisible |
| Phase progress reporting | Problem: No single source of truth for project status |
| Project manager approval of progress | Solution: Live project status timeline |
| Live project status timeline | Problem: Requirements keep being added with no visible cost |
| Show the price of a change across all projects before it is confirmed | Problems: Requirements keep being added with no visible cost; Stakeholders don't see the pile-up |
| Resource pool | Solutions: Workload indicator; Show the price of a change |
| Assign resources to phases | Solutions: Workload indicator; Show the price of a change |
| Access by role and owning general department | Solutions: Department portfolio view; Workload indicator |
| Highlight the impact | Solution: Show the price of a change across all projects before it is confirmed |
| Price shown, confirm before applying | Solution: Show the impact of new requirements before work starts |

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

### Project files and context depend on each project manager
- Type: Problem
- Description: Files, context, and history rely on each project manager's own organization, so handover during leave is unreliable.
- Home parent (suggestion only): Objective "Document everything about each project"
- Also serves (suggestion only): none
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

### Department portfolio view
- Type: Solution
- Description: One view of all department projects (past, current, planned), with progress rolled up for the whole department, not only per project.
- Home parent (suggestion only): Problem "No department-wide view of all projects"
- Also serves (suggestion only): Problem "Stakeholders don't see the pile-up of concurrent projects" — this view is where the pile-up becomes visible.
- Open questions: none

### Yearly plan by quarter
- Type: Sub-solution
- Description: GDAI builds the yearly plan by quarter and decision makers approve it. A project can be logged with a start quarter and no end date; the end date is set later (see "Project phases").
- Home parent (suggestion only): Solution "Department portfolio view"
- Also serves (suggestion only): none
- Open questions: none

### Import existing Excel data
- Type: Sub-solution
- Description: The tool replaces Excel for tracking projects. Existing Excel tables and data can be imported, so nothing has to be retyped and the department-wide view is filled from day one.
- Home parent (suggestion only): Solution "Department portfolio view"
- Also serves (suggestion only): none
- Open questions: What do the Excel files contain today (project list, yearly plan, resources), and which should be imported first?

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
- Also serves (suggestion only): Solutions "Workload indicator on the department-wide view" and "Show the price of a change across all projects before it is confirmed" — both read capacity from the pool.
- Open questions: none

### Assign resources to phases
- Type: Sub-solution
- Description: Resources are assigned not only to a project but to its phases: developers to the development phase, BAs to the analysis phase, and so on. Each phase has a planned time frame, and the days the person reports (confirmed by the project manager) are the exact time they actually worked on the project.
- Home parent (suggestion only): Solution "Resource assignment and workload tracking"
- Also serves (suggestion only): Solutions "Workload indicator on the department-wide view" and "Show the price of a change across all projects before it is confirmed" — both need the real time each person spends per phase. Depends on "Resource pool" and "Project phases".
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
- Also serves (suggestion only): Solution "Live project status timeline" — approved progress is what the timeline shows.
- Open questions: Who splits the development into weighted tasks (for example a task worth 10%), and when? The project manager at development planning?

### Live project status timeline
- Type: Solution
- Description: One live status timeline per project, viewable like a movie of its life cycle. Read-only for stakeholders.
- Home parent (suggestion only): Problem "No single source of truth for project status"
- Also serves (suggestion only): Problem "Requirements keep being added with no visible cost" — the added days are shown on this timeline.
- Open questions: none

### Project phases
- Type: Sub-solution
- Description: Phases are fully flexible: nothing is always the same, and a small project can skip some. When creating a project, the project manager adds its phases and a planned time frame for each (for example, analysis: five days). Each project picks and orders its own phases (and can add custom ones), and the timeline shows them. The project's end date never moves automatically when a phase takes fewer or more days than planned. Known phases: requirements gathering, BA analysis document (approved by the business user), development planning (optional; sets the timeline and end date), development, UAT, security testing, deployment, pilot on a small sample. Security testing and deployment are mandatory in the department's process.
- Home parent (suggestion only): Solution "Live project status timeline"
- Also serves (suggestion only): none
- Open questions: Should the tool flag a project that has no security testing or deployment phase, or stay silent?

### Jira link for deployment and security testing
- Type: Sub-solution
- Description: Deployment and security testing are done in Jira, so the tool complements Jira instead of replacing it. Those phases appear on the project timeline with their Jira status, so nobody enters the same information twice.
- Home parent (suggestion only): Solution "Live project status timeline"
- Also serves (suggestion only): none
- Open questions: Does the tool only link to the Jira ticket and the project manager sets the status, or does it pull the status from Jira automatically?

### Access by role and owning general department
- Type: Sub-solution
- Description: Roles: (1) GDAI project managers manage their projects, keep them updated, and approve developer progress. (2) Developers report progress on their assigned phases. (3) Business analysts see the projects they are assigned to, report on their phases, and can add project documents (for example the BA analysis document), but have no project-manager rights. (4) Business users see only projects owned by their general department; decision makers see all projects. Business users and decision makers only view: they never enter data, requests, or input of any kind. Each project also has a business project manager, an optional vice project manager on the business side, and a GDAI technical project manager.
- Home parent (suggestion only): Solution "Live project status timeline"
- Also serves (suggestion only): Solutions "Department portfolio view" and "Workload indicator on the department-wide view" — the same rule applies to every view.
- Open questions: Are the business-side project manager and vice project manager view-only like the other business users?

### Central project file repository
- Type: Solution
- Description: All project files in one place with context and history, and the upload date recorded, ready for anyone who takes over. Project managers and business analysts can add documents (for example the BA analysis document).
- Home parent (suggestion only): Problem "Project files and context depend on each project manager"
- Also serves (suggestion only): none
- Open questions: none

### Show the impact of new requirements before work starts
- Type: Solution
- Description: New requirements are written down, even if out of scope, and estimated in development days manually. Before work starts, the tool adds those days to the timeline and highlights them as a new requirement, so stakeholders see the impact visually.
- Home parent (suggestion only): Problem "Requirements keep being added with no visible cost"
- Also serves (suggestion only): none
- Open questions: none

### Log a new requirement with its estimated development days
- Type: Sub-solution
- Description: The team enters the requirement and its manual estimate in development days.
- Home parent (suggestion only): Solution "Show the impact of new requirements before work starts"
- Also serves (suggestion only): none
- Open questions: none

### Highlight the impact
- Type: Sub-solution
- Description: The impact of a change is highlighted and animated where it lands: the extra days on the project's own timeline, and every affected project on the department-wide view. (Merged from "Highlight the added days on the timeline" and "Animated, highlighted impact on the department-wide view" — one mechanism at two scales.)
- Home parent (suggestion only): Solution "Show the impact of new requirements before work starts"
- Also serves (suggestion only): Solution "Show the price of a change across all projects before it is confirmed"
- Open questions: none

### Show the price of a change across all projects before it is confirmed
- Type: Solution
- Description: Any change that affects other projects (for example moving resources to a new high-priority project) is shown on the department-wide view. The price is the delay caused to the affected projects, calculated automatically (see "Automatic pull and delay calculation").
- Home parent (suggestion only): Problem "The cost of priority shifts is invisible"
- Also serves (suggestion only): Problems "Requirements keep being added with no visible cost" and "Stakeholders don't see the pile-up of concurrent projects" — the same preview-then-confirm mechanism covers all three.
- Open questions: none

### Automatic pull and delay calculation
- Type: Sub-solution
- Description: When a new project is created and a chosen resource is already working on another project in the same time frame, he is pulled from that project to the new one. The tool calculates the development days he spends on the new project; his previous project pauses for the same number of days, and that is its delay. The delay is calculated automatically, but the pull is never applied automatically: the tool first shows the price and asks for confirmation. Most projects have one developer, so the previous project simply pauses for the days he is pulled. In the rare case of more than one developer, the user chooses: pause the whole project, or let the other developer continue, which makes the due date longer. Depends on "Resource pool".
- Home parent (suggestion only): Solution "Show the price of a change across all projects before it is confirmed"
- Also serves (suggestion only): none
- Open questions: When the other developer continues, how does the tool estimate the longer due date? (Not needed until feature design.)

### Price shown, confirm before applying
- Type: Sub-solution
- Description: The price of a change is shown before it is confirmed, and the tool asks for confirmation. Nothing changes until the user confirms, so decision makers can see and understand the price and decide in real time whether it is worth it.
- Home parent (suggestion only): Solution "Show the price of a change across all projects before it is confirmed"
- Also serves (suggestion only): Solution "Show the impact of new requirements before work starts" — a new requirement is confirmed the same way.
- Open questions: none

### Workload indicator on the department-wide view
- Type: Solution
- Description: Show the department's load by quarter (zoomable to month) on the department-wide view. Load is the development days of all assigned work divided by the development days the resource pool has available in that period; over 100% means the department has more work than resources. Work on projects put on hold still counts as assigned workload, so the true demand stays visible. Colored from green to red. Needs development-day estimates per project and data from the "Resource pool". The what-if preview when new work is added belongs to "Show the price of a change across all projects before it is confirmed", which shows the load rising before confirmation.
- Home parent (suggestion only): Problem "Stakeholders don't see the pile-up of concurrent projects"
- Also serves (suggestion only): none
- Open questions: With all roles in the pool, is the load shown per role (developers, BAs, and so on) or as one overall figure?
